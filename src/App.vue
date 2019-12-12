<template>
  <div id="app" class="container">
    <!-- 头部 -->
    <CommonHeader :title="title" @menuBar="menuBar" @backToHome="backToHome" />
    <!-- 移动菜单按钮 -->
    <div class="move-menu" v-drag @click="showSmallMenu"></div>
    <!-- 左侧大菜单 -->
    <LargeMenu
      v-model="visibleLargeMenu"
      :menuData="menulist"
      @changeMenu="changeMenu"
    />
    <!-- 底部小菜单 -->
    <SmallMenu v-model="visibleSmallMenu" :menuData="activeSmallMenuData" />
    <div>
      <transition :name="transitionName" mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommonHeader from "./components/CommonHeader";
import LargeMenu from "./components/LargeMenu";
import SmallMenu from "./components/SmallMenu";

export default {
  name: "App",
  components: {
    CommonHeader,
    LargeMenu,
    SmallMenu
  },
  data() {
    return {
      transitionName: "slide-left",
      visibleLargeMenu: false,
      visibleSmallMenu: false
    };
  },
  template: "<a></a>",
  computed: {
    ...mapState({
      title: state => state.title,
      menulist: state => state.menuData,
      activeSmallMenuData: state => state.activeSmallMenuData
    })
  },
  methods: {
    // 显示大菜单
    menuBar() {
      this.visibleLargeMenu = !this.visibleLargeMenu;
    },
    // 回到首页
    backToHome() {
      this.$router.push("/");
    },
    changeMenu(data) {
      this.$store.commit("changeTitle", {
        title: data.title,
        name: data.name,
        path: data.path
      });
      // 将对应的小菜单赋值给活动菜单
      console.log(data);
      this.$store.dispatch(`${data.store}/setSmallMenu`);
    },
    // 显示小菜单
    showSmallMenu() {
      this.visibleSmallMenu = !this.visibleSmallMenu;
    }
  },
  watch: {
    $route() {
      if (this.transitionName === "slide-left") {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.28rem;
  line-height: 0.8rem;
}
.move-menu {
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
  width: 0.7rem;
  height: 0.7rem;
  border: 0.1rem solid rgba(0, 0, 255, 0.7);
  border-radius: 50%;
  z-index: 9999;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
.child-view {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
