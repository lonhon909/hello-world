<template>
  <div>
    <slot name="default" :on="on" :actions="actions"></slot>
  </div>
</template>

<script>
export default {
  methods: {
    expandNode() {
      console.log("expandNode");
    },
    retractNode() {
      console.log("retractNode");
    }
  },
  computed: {
    actions() {
      return {
        expandNode: this.expandNode,
        retractNode: this.retractNode
      };
    },
    on() {
      return this.$on.bind(this);
    }
  }
};
</script>

<style></style>
