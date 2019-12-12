<template functional>
  <div>
    <!-- Props 模板函数式组件 -->
    <p>{{ props.message }}</p>
    <!-- slots 模板函数式组件 -->
    <slot></slot>
    <!-- listeners 一个包含了所有父组件为当前组件注册的事件监听器的对象 -->
    <input type="text" style="backgroundColor: #eee" v-on="listeners" />
    <!-- inject 如果使用了 inject 选项，则该对象包含了应当被注入的属性 -->
    <p>{{ injections.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  inject: ["title"]
};
</script>

<style></style>
