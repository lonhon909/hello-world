<template>
  <div class="">
    <p>
      {{ componentInsideType.length }} -- {{ countList.length }} --
      {{ person2 }} -- {{ a }} -- {{ b }}
    </p>
    <button class="button" @click="add">组件内部的state</button>
    <button class="button" @click="matutionsPerson({ person: 'hahahahahaha' })">
      组件内部的matutions
    </button>
    <button class="button" @click="dispatchPerson({ person: '赵柳' })">
      组件内部的dispatch
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Modules",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      componentInsideType: state => state.vuexDemo.componentInsideType
    }),
    // 可以将模块的空间名称字符串作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文
    ...mapState("vuexDemo", {
      countList: state => state.componentInsideType
    }),
    ...mapState({
      person: state => state.vuexDemo.modulesStore.person,
      // 不加前缀访问的是根store
      numbers: state => state.numbers
    }),
    // 或者将模块的空间名称字符串作为第一个参数传递给上述函数
    ...mapState("vuexDemo/modulesStore", {
      person2: state => state.person
    }),
    // getters中获取命名空间内部状态   通过this['vuexDemo/modulesStore/largeThenZeon']使用
    ...mapGetters(["vuexDemo/modulesStore/largeThenZeon"]),
    // 或者
    ...mapGetters({
      a: "vuexDemo/modulesStore/largeThenZeon"
    }),
    // 或者
    ...mapGetters("vuexDemo/modulesStore", {
      b: "largeThenZeon"
    })
  },
  methods: {
    add() {
      console.log(this.$store.state.vuexDemo.componentInsideType);
      console.log(this.$store.state.vuexDemo.modulesStore.list);
      console.log(this.$store.getters["vuexDemo/ads"]);
      // 获取命名空间中的getters计算属性
      console.log(this.$store.getters["vuexDemo/modulesStore/largeThenZeon"]);
      console.log(this.componentInsideType);
      console.log(
        this.person,
        this.person2,
        this["vuexDemo/modulesStore/largeThenZeon"],
        this.a,
        this.b
      );
      console.log(this.numbers);
    },
    /* matutionsPerson(data) {
      // 命名空间内的mutations
      this.$store.commit('vuexDemo/modulesStore/changePerson', data)
    }, */
    // 或者
    ...mapMutations({
      matutionsPerson: "vuexDemo/modulesStore/changePerson"
    }),
    /* dispatchPerson(data) {
      this.$store.dispatch('vuexDemo/modulesStore/setPerson', data)
    }, */
    // 或者
    ...mapActions({
      dispatchPerson: "vuexDemo/modulesStore/setPerson"
    })
  }
};
</script>

<style lang="less" scoped></style>
