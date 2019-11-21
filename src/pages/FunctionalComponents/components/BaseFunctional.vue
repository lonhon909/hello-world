<template>
  <div>
    <BaseFunctionalChild message="因为函数式组件只是函数，所以渲染开销也低很多">
      <header slot="header">插槽：header</header>
      <main>插槽：main</main>
      <footer slot="footer">插槽：footer</footer>
    </BaseFunctionalChild>
  </div>
</template>

<script>
import BaseFunctionalChild from "./BaseFunctionalChild";

// console.log("BaseFunctionalChild", BaseFunctionalChild);

export default {
  name: "BaseFunctional",
  components: {
    BaseFunctionalChild
  }
};
</script>

<style></style>
