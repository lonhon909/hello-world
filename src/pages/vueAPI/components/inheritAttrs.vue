<template>
  <div>
    <Child :title="title" :list="list" />
  </div>
</template>

<script>
import Child from "./Child";

export default {
  data() {
    return {
      title: "标题",
      list: [1, 2]
    };
  },
  components: {
    Child
  }
};
</script>

<style lang="less"></style>
