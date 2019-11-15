<template>
  <div class="In-Component-Guards">
    In-Component Guards/组件内的守卫
    <router-link to="/routerView/In-Component-Guards/child/1"
      >child1</router-link
    >
    <router-link to="/routerView/In-Component-Guards/child/2" append
      >child2</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.In-Component-Guards {
  a {
    text-decoration-line: underline;
    text-decoration-color: red;
  }
}
</style>
