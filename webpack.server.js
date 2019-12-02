const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const serverConfig  = {
  entry: "./src/server/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
