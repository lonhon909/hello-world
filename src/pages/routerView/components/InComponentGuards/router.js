export default [
  {
    path: "child/:id",
    component: () =>
      import(/* webpackChunkName: 'Child1' */ "./components/child.vue")
  }
];
