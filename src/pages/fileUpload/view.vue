<template>
  <div class="file-upload">
    <input type="file" @change="handleFileChange" />
    <button @click="handleUpload">上传</button>
  </div>
</template>

<script>
const LENGTH = 10; // 切片数量

export default {
  name: "file-upload",
  data() {
    return {
      container: {
        file: null,
        chunks: []
      }
    };
  },
  methods: {
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.container.file = file;
    },
    // 文件切片
    createFileChunk(file, length = LENGTH) {
      const fileChunkList = [];
      const chunkSize = Math.ceil(file.size / length);
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({
          file: file.slice(cur, cur + chunkSize)
        });
        cur += chunkSize;
      }
      return fileChunkList;
    },
    // 上传切片
    async uploadChunks() {
      const requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("name", this.container.file.name);
          return formData;
        })
        .map(formData => {
          return this.request({
            url: "http://localhost:3000",
            data: formData
          });
        });
      await Promise.all(requestList);
    },
    async handleUpload() {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + "-" + index
      }));
      await this.uploadChunks();
      await this.mergeRequest();
    },
    // 通知后台合并切片
    async mergeRequest() {
      try {
        await this.request({
          url: "http://localhost:3000/merge",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify({
            filename: this.container.file.name
          })
        });
      } catch (error) {
        console.log(error);
      }
    },
    request({ url, method = "post", data, headers = {} }) {
      console.log(data);
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
          resolve({
            data: e.target.response
          });
        };
      });
    }
  }
};
</script>

<style></style>
