<template>
  <div class="home">
    <router-link to="/routerViewComponent">路由系列</router-link>
    <br />
    <router-link to="/uiComponents">UI组件库</router-link>
    <br />
    <router-link to="/functional">函数式组件</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="less" scoped>
.home {
  font-size: 12px;
  line-height: 36px;
  padding: 10px;
  a {
    text-decoration: underline;
    text-decoration-color: red;
  }
}
</style>
