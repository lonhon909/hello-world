const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "./pages/fileUpload");

const result = {};

function read(dir) {
  fs.readdir(dir, (err, res) => {
    // console.log(res);
    if (err) {
      console.log(3, err);
    } else {
      res.forEach(item => {
        const filedir = path.join(dir, item);
        fs.stat(filedir, (err, stat) => {
          if (err) {
            console.log(4, err);
          } else {
            const isDir = stat.isDirectory();
            const isFile = stat.isFile();
            if (isDir) {
              read(filedir);
            }
            if (isFile) {
              readFileContent(filedir);
            }
          }
        });
      });
    }
  });
}

function readFileContent(file) {
  fs.readFile(file, "utf-8", (err, res) => {
    if (err) {
      console.log(6, err);
    } else {
      // console.log(res);
      const text = {};
      const t = res.split("\n");
      console.log(t);
    }
  });
}

fs.access(dir, err => {
  if (err) {
    console.log("1");
  } else {
    // console.log("2");
    read(dir);
  }
});
