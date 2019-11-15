export default [
  {
    // 命名视图
    path: "child",
    // 一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件
    // components配置 (带上 s)
    components: {
      default: require("./child3.vue").default,
      child1: require("./child1.vue").default,
      child2: require("./child2.vue").default
    }
  }
];
