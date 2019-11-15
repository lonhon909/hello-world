<template>
  <div class="instance-properties">
    <h1>实例属性</h1>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index" @click="readAttr(item)">
        {{ item.title }}
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
          title: "vm.$attrs",
          path: "attr"
        },
        {
          title: "vm.$listeners",
          path: "listeners"
        }
      ]
    };
  },
  methods: {
    readAttr(item) {
      if (this.$route.path !== `/instanceproperties/${item.path}`) {
        this.$router.push({
          path: `/instanceproperties/${item.path}`
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.instance-properties {
  padding: 20px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  li {
    padding: 5px;
    border-top: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
  }
}
</style>
