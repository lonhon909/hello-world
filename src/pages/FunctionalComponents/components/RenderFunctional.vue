<template>
  <div class="render-functional">
    <RenderFunctionalChild message="render渲染函数式组件">
      <h2>子组件</h2>
      <h3 slot="h3">h3</h3>
    </RenderFunctionalChild>
  </div>
</template>

<script>
import RenderFunctionalChild from "./RenderFunctionalChild";

export default {
  name: "RenderFunctional",
  components: {
    RenderFunctionalChild
  }
};
</script>

<style lang="less" scoped></style>
