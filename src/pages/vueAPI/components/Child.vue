<template>
  <div :title="$attrs.list.join('')">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ["title"],
  inheritAttrs: false
};
</script>
