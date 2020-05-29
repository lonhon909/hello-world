<template>
  <div class="home">
    <router-link to="/routerViewComponent">路由系列</router-link>
    <br />
    <router-link to="/uiComponents">UI组件库</router-link>
    <br />
    <router-link to="/functional">函数式组件</router-link>
    <br />
    <router-link to="/fileupload">file upload</router-link>

    <div @click="jump" class="test test-blue">CSS Modules</div>
    <div @click="jump" class="title test-green">CSS Modules</div>
    <div @click="jump" class="footer test-red">CSS Modules</div>
    <Test @hook:created="add"></Test>

    <div>
      <i-input
        class="wodeinput"
        type="text"
        v-model="value"
        placeholder="占位文本"
        :clearable="true"
        :search="false"
        :number="true"
        :autofocus="true"
        autocomplete="on"
        :enter-button="false"
      >
        <!-- <span slot="prepend">http://</span>
        <span slot="append">.com</span> -->
      </i-input>
    </div>
    <ul>
      <Fragment />
    </ul>
    <ul class="loading">
      <li v-for="v in 6" :key="v" :style="`--line-index: ${v}`"></li>
    </ul>
  </div>
</template>

<script>
import Test from "./Test";
import Fragment from "./Fragment";

export default {
  components: {
    Test,
    Fragment
  },
  name: "Home",
  data() {
    return {
      value: "ooo"
    };
  },
  methods: {
    jump() {
      this.$router.push({
        name: "CSSModules",
        params: {
          id: 10000
        }
      });
    },
    add() {
      console.log("***1234567890***");
    }
  }
};
</script>

<style lang="less">
.home {
  font-size: 12px;
  line-height: 36px;
  padding: 10px;
  a {
    text-decoration: underline;
    text-decoration-color: red;
  }
}

.loading {
  width: 200px;
  height: 200px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  li {
    & + li {
      margin-left: 5px;
    }
    --time: calc((var(--line-index) - 1) * 200ms);
    width: 6px;
    height: 30px;
    border-radius: 3px;
    background-color: #f66;
    animation: beat 1s ease-in-out var(--time) infinite;
  }
}
@keyframes beat {
  0% {
    height: 30px;
  }
  50% {
    height: 15px;
  }
  100% {
    height: 30px;
  }
}
</style>
