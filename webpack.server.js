const path = require("path");
const nodeExternals = require("webpack-node-externals");
const env = process.env.NODE_ENV || "development";
const babelServerOptions = require("./babel.server.config");

const serverConfig = {
  mode: env,
  target: "node",
  entry: "./isomorphic/index.js",
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
      },
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: babelServerOptions
      }
    ]
  },
  externals: [nodeExternals()]
};

module.exports = serverConfig;
