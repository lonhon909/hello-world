// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import iView from "iview";
import VueI18n from "vue-i18n";

import "iview/dist/styles/iview.css";
// 全局组件
import globalComponent from "./common/components/globalComponent";
import BaseInput from "./common/components/BaseInput";
import "./common/style/reset.css";
import "./common/style/index.less";
import "./common/style/animation.css";

// // 全局自定义指令
import "./common/directives";

Vue.use(iView);
Vue.use(VueI18n);

import Modal from "./common/components/plugins/modal";
Vue.use(Modal);
import Toast from "./common/components/plugins/toast";
Vue.use(Toast);
import OverLayer from "./common/components/plugins/overlayer";
Vue.use(OverLayer);

// // 注册全局组件
globalComponent.forEach(component => {
  Vue.component(component.name, component);
});
Vue.component("BaseInput", BaseInput);

Vue.config.productionTip = false;

window.onload = function() {
  /#\/([a-z-]+)\/([$a-z-]+)/i.test(location.hash);
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

import messages from "../static/message.json";
// 国际化
const i18n = new VueI18n({
  locale: "ZHT",
  fallbackLocale: "ZHS",
  messages
});
// 动态添加国际化
setTimeout(() => {
  i18n.mergeLocaleMessage("ZHT", { bz_message: "你好!!!" });
}, 1000);

// if (process.NODE_ENV !== "production") {
//   const Vconsole = require("vconsole");
//   new Vconsole();
//   const eruda = require("eruda");
//   eruda.init();
// }

// console.log(process.env);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  i18n,
  store,
  render: h => h(App)
});
