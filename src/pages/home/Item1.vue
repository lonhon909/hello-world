<script>
export default {
  name: "Item1",
  inheritAttrs: false,
  data() {
    return {};
  },
  render(h) {
    return h("input", {
      class: "add",
      id: "add",
      attr: {
        value: this.$attrs.value
      }
    });
  },
  beforeMount() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped></style>
