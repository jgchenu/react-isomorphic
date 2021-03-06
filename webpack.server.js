const path = require("path");
const nodeExternals = require("webpack-node-externals");
const env = process.env.NODE_ENV || "development";
const babelServerOptions = require("./babel.server.config");
const EslintFriendlyFormatter = require("eslint-friendly-formatter");

// const isDev = env === "development";
// const port = process.env.PORT || 9999;
// const host = process.env.HOST || "0.0.0.0";
// const publicPath = `//${host}:${port}`;

const serverConfig = {
  mode: env,
  target: "node",
  entry: "./isomorphic/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "isomorphic-style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
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
      },
      {
        test: /.jsx?$/,
        loader: "eslint-loader",
        enforce: "pre",
        exclude: /node_modules/,
        options: {
          formatter: EslintFriendlyFormatter
        }
      }
    ]
  },
  plugins: [],
  externals: [nodeExternals()]
};

module.exports = serverConfig;
