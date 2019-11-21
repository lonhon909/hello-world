<template>
  <div class="functional-components">
    <h1>函数式组件：</h1>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index" @click="readAttr(item)">
        {{ item.value }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          component: "BaseFunctional",
          value: "基础函数式组件"
        },
        {
          component: "RenderFunctional",
          value: "render渲染函数式"
        }
      ]
    };
  },
  methods: {
    readAttr(item) {
      if (this.$route.name !== item.component) {
        console.log(item, this.$route);
        this.$router.push({
          // path: `/functional/${item.path}`
          name: item.component
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.functional-components {
  font-size: 12px;
  line-height: 36px;
  padding: 10px;
}
.list li {
  margin-right: 10px;
  display: inline;
  background-image: linear-gradient(90deg, red 100%, transparent 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px;
  cursor: pointer;
}
</style>
