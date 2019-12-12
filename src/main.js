// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
// 全局组件
import globalComponent from "./common/components/globalComponent";
import BaseInput from "./common/components/BaseInput";
import "./common/style/reset.css";
import "./common/style/index.less";
import "./common/style/animation.css";

// 全局自定义指令
import "./common/directives";

import Modal from "./common/components/plugins/modal";
Vue.use(Modal);
import Toast from "./common/components/plugins/toast";
Vue.use(Toast);
import OverLayer from "./common/components/plugins/overlayer";
Vue.use(OverLayer);

// 注册全局组件
globalComponent.forEach(component => {
  Vue.component(component.name, component);
});
Vue.component("BaseInput", BaseInput);

Vue.config.productionTip = false;

window.onload = function() {
  /#\/([a-z-]+)\/([a-z-]+)/i.test(location.hash);
  if (RegExp.$1 && RegExp.$2) {
    store.dispatch(`${RegExp.$1}/setSmallMenu`);
    store.commit({
      type: "changeTitle",
      title: RegExp.$1,
      path: `/${RegExp.$1}`
    });
    store.commit({
      type: "changeSmallMenu",
      path: RegExp.$2
    });
  }
};

// console.log(App);
// console.log(store);
// console.log(router);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
