<template>
  <div>
    <p>视图1</p>
    <router-view name="child1"></router-view>
    <p>视图2</p>
    <router-view name="child2"></router-view>
    <p>默认视图</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("**********");
  }
};
</script>

<style lang="less"></style>
