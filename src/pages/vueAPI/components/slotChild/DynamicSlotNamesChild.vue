<template>
  <div>
    <header style="color:red">
      header:
      <slot name="header" :title="title"></slot>
    </header>
    <main style="color:blue">
      main:
      <slot name="default" :title="title"></slot>
    </main>
    <footer style="color:yellow">
      footer:
      <slot name="footer" :title="title"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "动态插槽名"
    };
  }
};
</script>

<style></style>
