<template>
  <div @click="show">
    点击试试
  </div>
</template>

<script>
export default {
  name: "AttrChild",
  props: ["propA"],
  methods: {
    show() {
      console.log("this.$props", this.$props);
      // 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
      // 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，
      // 并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
      console.log("this.$attrs", this.$attrs);
    }
  }
};
</script>
