<template>
  <div>
    <p>
      包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过
      v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
    </p>
    <listenersChild
      @input="input"
      @blur="blur"
      @change="change"
      @click.native="click"
    />
  </div>
</template>

<script>
import listenersChild from "./listenersChild";

export default {
  components: {
    listenersChild
  },
  methods: {
    blur() {
      console.log("blur");
    },
    input() {
      console.log("input");
    },
    change() {
      console.log("change");
    },
    click() {
      console.log("clickFn");
    }
  }
};
</script>
