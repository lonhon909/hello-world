<template>
  <div>{{ index }} - {{ source.text }}</div>
</template>

<script>
export default {
  name: "item-component",
  props: {
    index: {
      type: Number
    },
    source: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
