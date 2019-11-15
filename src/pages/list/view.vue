<template>
  <div>
    list
    <componentA name="123" />
    <componentB name="123" />
    <componentC />
    <PropsValidator :propE="10000000000" propH="success" />

    <NonPropAttributes title="非 Prop 的特性" class="non" />

    <BaseInput v-model="username" required placeholder="Enter your username" />
  </div>
</template>

<script>
import PropsValidator from "@/common/components/PropsValidator";
import NonPropAttributes from "@/common/components/NonPropAttributes";

export default {
  name: "List",
  components: {
    PropsValidator,
    NonPropAttributes
  },
  data() {
    return {
      username: "1"
    };
  }
};
</script>

<style lang="less" scoped></style>
