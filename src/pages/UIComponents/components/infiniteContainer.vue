<template>
  <div class="infinite-contaienr">
    <virtual-list
      class="list"
      data-key="uid"
      :data-sources="list"
      :data-component="itemComponent"
    />
  </div>
</template>

<script>
import VirtualList from "vue-virtual-scroll-list";
import Item from "./itemComponent";

export default {
  name: "",
  components: {
    VirtualList
  },
  data() {
    return {
      list: [],
      itemComponent: Item
    };
  },
  mounted() {
    this.handler();
  },
  methods: {
    handler() {
      const arr = [];
      for (let i = 0; i < 1000; i++) {
        arr.push({
          uid: i,
          text: i
        });
      }
      this.list = arr;
    }
  }
};
</script>

<style>
.infinite-contaienr {
  height: calc(100vh - 1.28rem);
}
.list {
  height: 100%;
  overflow: scroll;
}
</style>
