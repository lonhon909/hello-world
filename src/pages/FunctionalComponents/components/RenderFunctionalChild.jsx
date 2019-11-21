import Vue from "vue";

export default Vue.extend({
  functional: true,
  render(h, context) {
    console.log(context.slots());
    return (
      <div>
        <h2>render子组件</h2>
        {/* 默认插槽 */}
        <p>{context.slots().default}</p>
        <p>{context.props.message}</p>
        {/* 具名插槽 */}
        <p>{context.slots().h3}</p>
        {/* 子元素全部来，相当于全局的插槽放一起 */}
        <div>{context.children}</div>
      </div>
    );
  }
});
