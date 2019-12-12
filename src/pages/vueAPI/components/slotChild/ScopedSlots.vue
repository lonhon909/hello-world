<template>
  <div>
    <p>Scoped Slots: 作用域插槽</p>

    <slot :aaaa="defaultScoped">
      {{ user.lastName }}
    </slot>

    <slot name="header" :user="user">
      {{ user.lastName }}
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "章",
        lastName: "三"
      },
      defaultScoped: {
        title: "插槽 prop"
      }
    };
  }
};
</script>

<style></style>
