module.exports = class MyAwesomeWebpackPlugin {
  constructor(options) {
    this.options = options || { filename: "map.md" };
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "MyAwesomeWebpackPlugin",
      (compilation, cb) => {
        let len = Object.keys(compilation.assets).length;

        let content = `# ${len} files emitted by webpack\n\n`;

        for (let filename in compilation.assets) {
          content += `- ${filename}\n`;
          if (/\.html$/.test(filename)) {
            console.log(filename);

            let a = compilation.assets[filename].source;
            compilation.assets[filename].source = () => {
              return "<!-- autor: ttabj -->" + a();
            };
          }
        }

        compilation.assets[this.options.filename] = {
          source() {
            return content;
          },
          size() {
            return content.length;
          }
        };
        cb();
      }
    );
  }
};
