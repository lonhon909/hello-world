<template>
  <div>
    <p>Deprecated Syntax: 废弃了的语法</p>
    <p>
      v-slot 指令自 Vue 2.6.0 起被引入，提供更好的支持 slot 和 slot-scope 特性的
      API 替代方案
    </p>
    <a
      href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%B8%A6%E6%9C%89-slot-%E7%89%B9%E6%80%A7%E7%9A%84%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD"
      >废弃了的语法</a
    >
    <!-- <DeprecatedSyntaxChild #default="{ on, actions }">
      <div @click="action.expandNode">dianji</div>
    </DeprecatedSyntaxChild> -->
  </div>
</template>

<script>
// import DeprecatedSyntaxChild from "./DeprecatedSyntaxChild";

export default {
  components: {
    // DeprecatedSyntaxChild
  }
};
</script>

<style></style>
