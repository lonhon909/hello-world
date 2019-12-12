import Vue from "vue";

export default Vue.extend({
  name: "TestD",
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destoryed() {
    console.log("destoryed");
  },
  data() {
    return {
      a: "aaaaaa"
    };
  },
  computed: {
    aLength() {
      return this.a.length;
    }
  },
  watch: {},
  methods: {},
  render(h) {
    return h("div", {}, this.aLength);
  }
});
