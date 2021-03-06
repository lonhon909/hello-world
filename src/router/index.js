import Vue from "vue";
import Router from "vue-router";
import instancepropertiesRouter from "@/pages/InstanceProperties/router";

import Home from "@/pages/home/view.vue";

const push = Router.prototype.push;
Router.prototype.push = function(location) {
  return push.call(this, location).catch(err => err);
};

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/fileupload",
      name: "FileUpload",
      component: () =>
        import(
          /* webpackChunkName: "fileUpload" */ "../pages/fileUpload/view.vue"
        )
    },
    {
      path: "/list",
      name: "List",
      component: () =>
        import(/* webpackChunkName: 'List' */ "../pages/list/view.vue")
    },
    {
      path: "/css-module/:id",
      name: "CSSModules",
      component: () =>
        import(
          /* webpackChunkName: "CSSModule" */ "../pages/list/css-module.vue"
        )
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
      path: "/routerViewComponent",
      name: "RouterViewComponent",
      component: () =>
        import(
          /* webpackChunkName: 'RouterView' */ "../pages/routerViewComponent/view.vue"
        ),
      children: require("../pages/routerViewComponent/router").default,
      // 路由独享的守卫
      beforeEnter(to, from, next) {
        console.log("beforeEnter路由独享的守卫");
        next();
      }
    },
    {
      path: "/uiComponents",
      name: "UIComponents",
      redirect: "/uiComponents/overlay",
      component: () =>
        import(
          /* webpackChunkName: "UIComponents" */ "../pages/UIComponents/view.vue"
        ),
      children: require("../pages/UIComponents/router").default
    },
    {
      path: "/functional",
      name: "FunctionalComponents",
      redirect: "functional/baseFunctional",
      component: () =>
        import(
          /* webpackChunkName: "FunctionalComponents" */ "../pages/FunctionalComponents/view.vue"
        ),
      children: require("../pages/FunctionalComponents/router").default
    },
    {
      path: "/transition",
      name: "Transitions",
      redirect: "/transition/baseTrans",
      component: () =>
        import(
          /* webpackChunkName: "Transitions" */ "../pages/transition/view.vue"
        ),
      children: require("../pages/transition/route").default
    },
    {
      path: "/vue-api",
      name: "VueAPI",
      redirect: "/vue-api/$data",
      component: () =>
        import(/* webpackChunkName: "VueAPI" */ "../pages/vueAPI/view.vue"),
      children: require("../pages/vueAPI/router").default
    },
    {
      path: "/vuex-demo",
      name: "VuexDemo",
      redirect: "/vuex-demo/state",
      component: () =>
        import(/* webpackChunkName: "VuexDemo" */ "../pages/vuexDemo/view.vue"),
      children: require("../pages/vuexDemo/router").default
    },
    {
      path: "/usual",
      name: "usual",
      redirect: "/usual/alloyfinger",
      component: () => import("../pages/usualComponent/view.vue"),
      children: require("../pages/usualComponent/router").default
    },
    {
      path: "/i18n",
      name: "i18n",
      component: () => import("../pages/i18n/view.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import(/* webpackChunkName: "404" */ "../pages/404.vue")
    }
  ]
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log("beforeEach全局前置守卫");
  if (to.path === from.path) return;
  next();
});
// 全局后置钩子
router.afterEach(() => {
  // console.log("afterEach全局后置钩子");
});

export default router;
