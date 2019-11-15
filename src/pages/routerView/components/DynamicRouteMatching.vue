<template>
  <div>
    Dynamic Route Matching/动态路由匹配
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style lang="less" scoped></style>
