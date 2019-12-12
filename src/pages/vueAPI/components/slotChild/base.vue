<template>
  <div>
    <p class="text">插槽内容</p>
    <p class="text">作为一条规则，请记住：</p>
    <p class="text" style="font-weight: bold">
      父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的
    </p>

    <!-- 默认内容 -->
    <SubmitButtom>
      Save
    </SubmitButtom>

    <!-- 具名插槽 -->
    <NamedSlots>
      <!-- 在向具名插槽提供内容的时候，我们可以在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称 -->
      <template v-slot:header>
        <p>header</p>
      </template>
      <p>main</p>
      <!-- 注意 v-slot 只能添加在 <template> 上 -->
      <template v-slot:footer>
        <p>footer</p>
      </template>
    </NamedSlots>

    <!-- 作用域插槽 -->
    <ScopedSlots>
      <template v-slot:header="slotProps">
        <p>{{ slotProps.user.firstName }}</p>
      </template>
      <!-- 或者 v-slot="slotProps" -->
      <!-- 解构, 重命名， 默认参数等 -->
      <template v-slot:default="{ aaaa: person }">
        <!-- 此处默认参数与eslint有冲突，不知怎么解决 -->
        <!-- v-slot:default="{ aaaa: person, user = { firstName: 'Guest' } }" -->
        <p>{{ person.title }}</p>
        <!-- <p>{{ user.firstName }}</p> -->
      </template>
    </ScopedSlots>

    <!-- 当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上 -->
    <!-- 或者 v-slot:default="slotProps" -->
    <AbbreviatedSyntax v-slot="slotProps">
      <p style="color:red">{{ slotProps.data }}</p>
    </AbbreviatedSyntax>
    <!-- 注意：默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确 -->
    <!-- 
      ❎❌写法
      <AbbreviatedSyntax v-slot="slotProps">
        <p style="color:red">{{ slotProps.data }}</p>
        <template v-slot:header="slotProps"></template>
      </AbbreviatedSyntax>
    -->

    <DynamicSlotNames />
    <NamedSlotsShorthand />
    <DeprecatedSyntax />
  </div>
</template>

<script>
/* eslint-disable vue/no-parsing-error */
import SubmitButtom from "./SubmitButtom";
import NamedSlots from "./NamedSlots";
import ScopedSlots from "./ScopedSlots";
import AbbreviatedSyntaxforLoneDefaultSlots from "./AbbreviatedSyntaxforLoneDefaultSlots";
import DynamicSlotNames from "./DynamicSlotNames";
import NamedSlotsShorthand from "./NamedSlotsShorthand";
import DeprecatedSyntax from "./DeprecatedSyntax";

export default {
  components: {
    SubmitButtom,
    NamedSlots,
    ScopedSlots,
    AbbreviatedSyntax: AbbreviatedSyntaxforLoneDefaultSlots,
    DynamicSlotNames,
    NamedSlotsShorthand,
    DeprecatedSyntax
  }
};
</script>

<style leng="less" scoped>
.text {
  font-size: 12px;
  color: #000;
}
</style>
