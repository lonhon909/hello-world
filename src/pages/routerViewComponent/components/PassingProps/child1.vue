<template>
  <div>
    child1
  </div>
</template>

<script>
export default {
  // 路由组件传参
  props: ["id"],
  mounted() {
    console.log(this.id);
  }
};
</script>
