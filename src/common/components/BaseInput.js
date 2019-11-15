export default {
  // 禁用特性继承: 不希望组件的根元素继承特性
  inheritAttrs: false,
  props: ["label", "value"],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
};
// 注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。
/*

  <BaseInput
    v-model="username"
    required
    placeholder="Enter your username"/>

*/
