const path = require("path");
const nodeExternals = require("webpack-node-externals");
const env = process.env.NODE_ENV || "development";

const serverConfig = {
  env,
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "isomorphic-style-loader",
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
  externals: [nodeExternals()]
};

module.exports = serverConfig;
