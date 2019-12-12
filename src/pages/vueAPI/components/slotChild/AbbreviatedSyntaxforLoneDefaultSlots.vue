<template>
  <div>
    <p>独占默认插槽的缩写语法</p>
    <slot :data="name">
      默认值
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:
        "当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上"
    };
  }
};
</script>

<style></style>
