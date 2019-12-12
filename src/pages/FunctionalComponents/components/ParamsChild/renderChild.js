import Vue from "vue";

export default Vue.extend({
  name: "renderChild",
  functional: true,
  inject: ["title"],

  render(h, ctx) {
    return h(
      "div",
      {
        class: [ctx.data.staticClass],
        style: [ctx.data.staticStyle]
      },
      [
        h("p", {}, ctx.props.message),
        // 在添加 functional: true, 之后为其增加 context 参数，并将 this.$slots.default 更新为 context.children
        ctx.children,
        h(
          "input",
          {
            on: ctx.listeners
          },
          ""
        ),
        h("p", {}, ctx.injections.title)
      ]
    );
  }
});
