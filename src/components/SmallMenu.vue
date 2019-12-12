<template>
  <transition name="rootComponentStyle">
    <div
      class="common-bottom-container"
      v-show="visibleSmallMenu"
      @click.stop.prevent="hideMenu"
    >
      <transition name="rootComponentStyle-list">
        <div class="common-bottom-container-list" v-show="visibleSmallMenu">
          <ul class="list">
            <li
              v-for="(item, index) in list"
              :key="index"
              @click="jump(item)"
              :class="{
                actived:
                  activeSmallMenu.toLocaleLowerCase() ===
                  item.name.toLocaleLowerCase()
              }"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "small-menu",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    menuData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      visibleSmallMenu: this.value,
      list: [...this.menuData]
    };
  },
  computed: {
    ...mapState(["activeSmallMenu"])
  },
  methods: {
    ...mapMutations(["changeSmallMenu"]),
    hideMenu() {
      this.$emit("input");
    },
    jump(data) {
      console.log(data);
      this.$router.push({
        name: data.name,
        params: data.default
      });
      this.changeSmallMenu({
        path: data.path
      });
    }
  },
  watch: {
    value(newValue) {
      this.visibleSmallMenu = newValue;
    },
    menuData: {
      deep: true,
      handler(newValue) {
        this.list = [...newValue];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.common-bottom-container {
  position: fixed;
  top: 1.28rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(~"100vh - 1.28rem");
  // overflow-y: auto;
  z-index: 999;
  background-color: rgba(238, 238, 238, 0.5);
}
.rootComponentStyle-enter,
.rootComponentStyle-leave-to {
  opacity: 0;
}
.rootComponentStyle-enter-active,
.rootComponentStyle-leave-active {
  transition: opacity 0.5s;
}
.common-bottom-container-list {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(~"100vh - 1.28rem - 3rem");
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px -4px 14px #b5b3b3;
  .list {
    font-size: 0.28rem;
    color: #ffffff;
    line-height: 1rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
    li {
      border-bottom: 1px dashed #adabab;
    }
  }
}
.rootComponentStyle-list-enter,
.rootComponentStyle-list-leave-to {
  bottom: -100%;
}
.rootComponentStyle-list-enter-active,
.rootComponentStyle-list-leave-active {
  transition: all 0.5s;
}

.actived {
  color: #c6ff00;
}
</style>
