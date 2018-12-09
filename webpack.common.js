const path = require("path"); // 路径处理模块
const webpack = require("webpack"); // 这个插件不需要安装，是基于webpack的，需要引入webpack模块

module.exports = {
  entry: {
    index: path.join(__dirname, "/class/index.js")
  },
  output: {
    path: path.join(__dirname, "/dist"), //打包后的文件存放的地方
    filename: "CloudClient.js", //打包后输出文件的文件名
    library: "T",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  // module: {
  //   rules: [
  //     {
  //       // jsx配置
  //       test: /(\.jsx|\.js)$/,
  //       use: {
  //         // 注意use选择如果有多项配置，可写成这种对象形式
  //         loader: "babel-loader"
  //       },
  //       exclude: /node_modules/ // 排除匹配node_modules模块
  //     }
  //   ]
  // }
};
