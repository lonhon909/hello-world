<template>
  <div>
    <Child message="props参数传递" @click="add" @blur="blue" @change="change">
      <span>children子节点</span>
    </Child>
    <RenderChild
      class="adddddd"
      style="color:red"
      message="props参数传递"
      @click="add"
      @blur="blue"
      @change="change"
    >
      <span>children子节点</span>
      <p slot="header">这是个slot</p>
    </RenderChild>
  </div>
</template>

<script>
import Child from "./ParamsChild/Child";
import RenderChild from "./ParamsChild/renderChild";

export default {
  name: "Params",
  components: {
    Child,
    RenderChild
  },
  provide: {
    title: "注入📚"
  },
  methods: {
    add() {
      console.log("add");
    },
    blue() {
      console.log("blue");
    },
    change() {
      console.log("change");
    }
  }
};
</script>

<style></style>
