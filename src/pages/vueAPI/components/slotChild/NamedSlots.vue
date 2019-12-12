<template>
  <div>
    <p>具名插槽：</p>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。 -->
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
