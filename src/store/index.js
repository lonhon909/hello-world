import Vue from "vue";
import vuex, { Store } from "vuex";
import createLogger from "vuex/dist/logger";
import menu from "./menu";

import routers from "../pages/routerViewComponent/store";
import transitions from "../pages/transition/store";
import vueapi from "../pages/vueAPI/store";
import uiComponents from "../pages/UIComponents/store";
import vuexDemo from "../pages/vuexDemo/store";

Vue.use(vuex);

export default new Store({
  state: {
    title: "首页", // 头部标题
    menuData: menu, // 大菜单
    activeSmallMenuData: [], // 小菜单
    activeLargeMenu: "/vuex", // 当前激活大菜单路由
    activeSmallMenu: "state", // 当前激活小菜单路由
    countVuex: 1008611,
    numbers: [1, 2, "s", false, Math, () => []]
  },
  mutations: {
    // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
    changeTitle(state, { title, path }) {
      state.title = title;
      state.activeLargeMenu = path;
    },
    changeSmallMenu(state, Payload) {
      state.activeSmallMenu = Payload.path;
    },
    // 小菜单赋值
    setSmallMenu(state, data = []) {
      state.activeSmallMenuData = data;
      state.activeSmallMenu = data[0].path;
    },
    add(state, data = {}) {
      state.countVuex += data.step || 1;
    },
    increment(state) {
      state.countVuex++;
    },
    incrementBy(state, data) {
      state.countVuex += data;
    }
  },
  getters: {
    numberList(state) {
      console.log(arguments);
      return state.numbers.filter(
        item => Object.prototype.toString.call(item) === "[object Number]"
      );
    },
    // 通过让 getter 返回一个函数，来实现给 getter 传参
    numberListData: state => data => {
      return state.numbers.filter(
        item => Object.prototype.toString.call(item) === `[object ${data}]`
      );
    }
  },
  actions: {
    // 支持异步操作
    increment(context, data) {
      // 可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
      setTimeout(() => {
        // Action 提交的是 mutation，而不是直接变更状态。
        context.commit("increment");
      }, data.time * 1000);
    },
    // 解构
    incrementBy({ commit }, data) {
      setTimeout(() => {
        commit("incrementBy", data.step);
      }, data.time * 1000);
    },
    // 组合 Action  返回promise
    actionA({ dispatch, state }) {
      return new Promise(resolve => {
        setTimeout(() => {
          dispatch("incrementBy", { time: 1, step: 100000 });
          resolve(state.numbers);
        }, 1000);
      });
    },
    async actionB() {
      return await Promise.resolve(100);
    }
  },
  modules: {
    routers,
    transitions,
    vueapi,
    uiComponents,
    vuexDemo,
    "vue-api": vueapi,
    "vuex-demo": vuexDemo
  },
  plugins: [createLogger()], // 日志中间件
  strict: true // 严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误
});
