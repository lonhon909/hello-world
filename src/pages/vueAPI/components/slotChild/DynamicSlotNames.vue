<template>
  <div>
    <p>Dynamic Slot Names: 动态插槽名</p>
    <button @click="change" class="btn">点击这里修改插槽名</button>
    <DynamicSlotNamesChild>
      <template v-slot:[dynamicSlotName]="{ title }">
        <p>{{ title }}</p>
      </template>
    </DynamicSlotNamesChild>
  </div>
</template>

<script>
import DynamicSlotNamesChild from "./DynamicSlotNamesChild";

export default {
  components: {
    DynamicSlotNamesChild
  },
  data() {
    return {
      dynamicSlotName: "header"
    };
  },
  methods: {
    change() {
      const data = ["header", "default", "footer"];
      this.dynamicSlotName = data[Math.floor(Math.random() * 3)];
    }
  }
};
</script>

<style></style>
