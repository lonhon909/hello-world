export default [
  {
    path: "child/:id",
    components: {
      default: () => import(/* webpackChunkName: 'Child1' */ "./child1.vue"),
      child2: () => import(/* webpackChunkName: 'Child2' */ "./child2.vue"),
      child3: () => import(/* webpackChunkName: 'Child3' */ "./child3.vue")
    },
    // 路由组件传参: 使用 props 将组件和路由解耦
    props: {
      default: true,
      child2: false,
      child3: true
    }
  }
];
