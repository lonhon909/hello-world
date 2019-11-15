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
import "./common/style/animation.css";

// 注册全局组件
globalComponent.forEach(component => {
  Vue.component(component.name, component);
});
Vue.component("BaseInput", BaseInput);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
