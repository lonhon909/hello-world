const path = require("path");

require("./version");

module.exports = {
  publicPath: "/",
  // 生成的生产环境构建文件的目录
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "./static",
  indexPath: "index.html",
  // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，可以设置false不会生成hash
  filenameHashing: false,
  // 多页应用配置
  pages: {
    index: {
      // 入口文件
      entry: "src/main.js",
      // 模板
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "index page",
      minify: {
        removeComments: false
      }
    },
    home: {
      entry: "src/main.js",
      template: "public/home.html",
      filename: "home.html",
      title: "home page"
    }
  },
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: process.env.NODE_ENV !== "production",
  // 是否使用包含运行时编译器的 Vue 构建版本(指tempalte模板)
  runtimeCompiler: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false
  productionSourceMap: false,
  // 调整 webpack 配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.devtool = "source-map";
    } else {
      // 为开发环境修改配置...
      config.devtool = "eval";
    }
  },
  /* configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  } */
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
    // config.plugin("html").tap(args => {
    //   const value = {
    //     filename: "main.html",
    //     template: path.join(__dirname, "./public/index.html"),
    //     inject: true,
    //     minify: {
    //       ...args[0].minify,
    //       removeComments: false // 不移除注释
    //     }
    //   };
    //   const result = [...args];
    //   result[0] = value;
    //   return result;
    // });
    config.plugin("copy").tap(() => [
      [
        {
          from: path.join(__dirname, "./static"),
          to: "static",
          ignore: []
        }
      ]
    ]);
  },
  css: {
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
    extract: true,
    sourceMap: true
  },
  devServer: {
    port: 8080,
    // proxy: {}
  }
};
