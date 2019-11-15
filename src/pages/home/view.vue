<template>
  <div class="home">
    <router-link to="/routerView">路由系列</router-link>
    <br />
    <router-link to="/uiComponents">UI组件库</router-link>
  </div>
</template>

<script>
export default {};
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
