export default [
  {
    path: "attr",
    component: () =>
      import(/* webpackChunkName: 'Attr' */ "./components/attr.vue")
  },
  {
    path: "listeners",
    component: () =>
      import(/* webpackChunkName: 'listeners' */ "./components/listeners.vue")
  }
];
