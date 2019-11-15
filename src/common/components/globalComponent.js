// 全局组件注册

export default [
  {
    name: "componentA",
    props: ["name"],
    data() {
      return {
        message: "消息"
      };
    },
    computed: {
      allMessage() {
        return `${this.message}-${this.name}`;
      }
    },
    // 模板字符串
    template: "<div>全局组件：{{allMessage}}</div>"
  },
  {
    name: "componentB",
    data() {
      return {
        message: "jsx渲染"
      };
    },
    // jsx写法
    render() {
      return <div>{this.message}</div>;
    }
  },
  {
    name: "componentC",
    // 渲染函数
    render(h) {
      return h(
        "div",
        {
          class: ["add", "addd"],
          style: { color: "red", fontSize: "20px" },
          on: {
            click() {
              console.log(123);
            }
          }
        },
        "渲染函数"
      );
    }
  }
];
