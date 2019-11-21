export default [
  {
    // 完整路由： /routerView/Dynamic-Route-Matching/:id
    // 匹配： /routerView/Dynamic-Route-Matching/22
    path: "Dynamic-Route-Matching/:id",
    name: "DynamicRouteMatching",
    // component: require("./components/DynamicRouteMatching.vue").default
    component: () =>
      import(
        /* webpackChunkName: 'DynamicRouteMatching' */ "./components/DynamicRouteMatching.vue"
      )
  },
  {
    path: "Named-Views",
    name: "NamedViews",
    redirect: "Named-Views/child",
    component: require("./components/NamedViews/view.vue").default,
    children: require("./components/NamedViews/router").default
  },
  {
    path: "Passing-Props",
    name: "PassingProps",
    redirect: "Passing-Props/child/12",
    component: require("./components/PassingProps/view.vue").default,
    children: require("./components/PassingProps/router").default
  },
  {
    path: "In-Component-Guards",
    name: "InComponentGuards",
    component: () =>
      import(
        /* webpackChunkName: 'InComponentGuards' */ "./components/InComponentGuards/view.vue"
      ),
    children: require("./components/InComponentGuards/router").default
  }
];
