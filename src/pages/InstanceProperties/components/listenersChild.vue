<template>
  <div>
    文本<br />
    <!-- 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。 -->
    <input type="text" v-on="$listeners" placeholder="点击试试" @click.stop />
  </div>
</template>

<script>
export default {
  name: "listenersChild"
};
</script>

<style lang="less" scoped>
input {
  border: 1px solid red;
}
</style>
