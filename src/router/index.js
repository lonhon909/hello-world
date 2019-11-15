import Vue from "vue";
import Router from "vue-router";
import instancepropertiesRouter from "@/pages/InstanceProperties/router";
import routerViewRouter from "@/pages/routerView/router";

import Home from "@/pages/home/view.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      meta: {
        title: "首页",
        keepAlive: false
      },
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      meta: {
        title: "首页",
        keepAlive: false
      },
      component: Home
    },
    {
      path: "/list",
      name: "List",
      component: () =>
        import(/* webpackChunkName: 'List' */ "../pages/list/view.vue")
    },
    {
      path: "/instanceproperties",
      name: "InstanceProperties",
      component: () =>
        import(
          /* webpackChunkName: 'InstanceProperties' */ "../pages/InstanceProperties/view.vue"
        ),
      children: instancepropertiesRouter
    },
    {
      path: "/routerView",
      name: "RouterView",
      component: () =>
        import(
          /* webpackChunkName: 'RouterView' */ "../pages/routerView/view.vue"
        ),
      children: routerViewRouter,
      // 路由独享的守卫
      beforeEnter(to, from, next) {
        console.log("beforeEnter路由独享的守卫");
        next();
      }
    },
    {
      path: "/uiComponents",
      name: "UIComponents",
      component: () =>
        import(
          /* webpackChunkName: "UIComponents" */ "../pages/UIComponents/view.vue"
        ),
      children: require("../pages/UIComponents/router").default
    }
  ]
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log("beforeEach全局前置守卫");
  next();
});
// 全局后置钩子
router.afterEach(() => {
  console.log("afterEach全局后置钩子");
});

export default router;
