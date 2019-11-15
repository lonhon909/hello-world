<template>
  <!-- 替换/合并已有的特性 title被替换, class/style被合并 -->
  <div title="123" class="non-prop">
    <h2>非 Prop 的特性</h2>
    <p>
      一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性。
    </p>
  </div>
</template>

<script>
// 组件可以接受任意的特性，而这些特性会被添加到这个组件的根元素上(没有显示地申明prop属性)
export default {
  props: []
};
</script>

<style lang="less" scoped></style>
