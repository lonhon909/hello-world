<template>
  <div class="css-module">
    <p :class="$style.reddd">CSS Modules</p>
    <p :class="{ [$style.red]: color }">CSS Modules</p>
    <p :class="[$style.red, $style.reddd]">CSS Modules</p>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "CSSModules",
  data() {
    return {
      color: true
    };
  }
};
</script>

<style module lang="less">
.reddd {
  color: red;
}
.red {
  font-size: 20px;
}
</style>
