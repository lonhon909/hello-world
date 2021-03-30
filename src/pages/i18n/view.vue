<template>
  <div>
    <p>{{ title }}</p>
    <p class="red">{{ $t("i.KKK") }} --- {{ $t("bz_message") }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.title = this.$i18n.t("title");
  }
};
</script>

<style></style>
