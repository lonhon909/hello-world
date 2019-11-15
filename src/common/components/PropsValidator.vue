<template>
  <div class="props-validator">
    {{ propE }}
  </div>
</template>

<script>
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
// ⚠️：注意那些 prop 会在一个组件实例创建之前进行验证，
// 所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
export default {
  // props: ['title'],
  props: {
    propA: String,
    propB: [String, Number],
    propC: Function,
    propD: Promise,
    propE: {
      type: Number,
      required: true
    },
    propF: {
      type: String,
      default: ""
    },
    propG: {
      type: Array,
      default: () => []
    },
    propH: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      }
    },
    propJ: {
      // 来验证 author prop 的值是否是通过 new Person 创建的
      type: Person
    }
  }
};
</script>

<style lang="less" scoped>
.props-validator {
  font-size: 12px;
  color: red;
}
</style>
