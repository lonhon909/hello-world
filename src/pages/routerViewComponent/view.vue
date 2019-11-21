<template>
  <div class="router-view-component">
    <p>routerView/路由管理器：</p>
    <a
      href=""
      v-for="item in list"
      :key="item.routerComponent"
      @click.prevent="jump(item)"
      >{{ item.value }}</a
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 组件名不能叫routerView
  name: "routerViewComponent",
  data() {
    return {
      list: [
        {
          routerComponent: "DynamicRouteMatching",
          value: "动态路由匹配"
        },
        {
          routerComponent: "NamedViews",
          value: "命名视图/命名路由"
        },
        {
          routerComponent: "PassingProps",
          value: "路由组件传参"
        },
        {
          routerComponent: "InComponentGuards",
          value: "组件内的守卫"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$route.params);
  },
  methods: {
    jump(item) {
      this.$router.push({
        name: item.routerComponent,
        params: {
          id: 10000
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.router-view-component {
  font-size: 12px;
  line-height: 36px;
  padding: 10px;
  & > a {
    text-decoration-line: underline;
    text-decoration-color: red;
    margin-right: 20px;
  }
}
</style>
