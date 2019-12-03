const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  }
};
module.exports = merge(baseConfig, clientConfig);
