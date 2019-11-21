<template functional>
  <div class="container-functional">
    <h1>这是一个函数式组件</h1>
    <!-- 使用props -->
    <p>{{ props.message }}</p>
    <slot name="header"></slot>
    <slot name="default"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
// 函数组件无实例，也不存在this
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.container-functional {
  background-color: rgb(243, 224, 224);
}
</style>
