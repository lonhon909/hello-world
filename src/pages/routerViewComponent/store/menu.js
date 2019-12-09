export default [
  {
    path: "Dynamic-Route-Matching/:id", // 路由
    default: {
      id: 1234567890
    },
    name: "DynamicRouteMatching", // 命名路由
    value: "动态路由匹配", // 该路由描述
    title: "动态路由匹配" // 路由中文名 头部标题
  },
  {
    path: "Named-Views", // 路由
    name: "NamedViews", // 命名路由
    value: "命名视图/命名路由", // 该路由描述
    title: "命名视图/命名路由" // 路由中文名 头部标题
  },
  {
    path: "Passing-Props", // 路由
    name: "PassingProps", // 命名路由
    value: "路由组件传参", // 该路由描述
    title: "路由组件传参" // 路由中文名 头部标题
  },
  {
    path: "In-Component-Guards", // 路由
    name: "InComponentGuards", // 命名路由
    value: "组件内的守卫", // 该路由描述
    title: "组件内的守卫" // 路由中文名 头部标题
  }
];
