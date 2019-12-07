const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base");
const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    filename: "main.js",
    publicPath:'publicPath', // 打包跟devServer给静态资源自动加上的路径前缀
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

  ],
  devServer:{
    contentBase:'./'
  }
};
module.exports = merge(baseConfig, clientConfig);
