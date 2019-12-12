<template>
  <div>
    <p>Named Slots Shorthand: 具名插槽的缩写</p>
    <p>
      跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:)
      替换为字符 #。例如 v-slot:header 可以被重写为 #header
    </p>
    <a
      class="a-text"
      href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99"
      >具名插槽的缩写</a
    >
    <NamedSlotsShorthandChild>
      <template #header>
        <p>header</p>
      </template>
      <template #default>
        <p>main</p>
      </template>
      <template #footer>
        <p>footer</p>
      </template>
    </NamedSlotsShorthandChild>
  </div>
</template>

<script>
import NamedSlotsShorthandChild from "./NamedSlotsShorthandChild";

export default {
  components: {
    NamedSlotsShorthandChild
  }
};
</script>

<style></style>
