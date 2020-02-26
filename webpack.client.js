const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const env = process.env.NODE_ENV || "development";
const babelClientOptions = require("./babel.client.config");
const StylelintPlugin = require("stylelint-webpack-plugin");
const EslintFriendlyFormatter = require("eslint-friendly-formatter");

const isDev = env === "development";
const port = process.env.PORT || 9999;
const host = process.env.HOST || "0.0.0.0";
const publicPath = `//${host}:${port}/`;
const OUTPUT_PATH = path.resolve(__dirname, "./static");
const entryPath = path.resolve(__dirname, "./src");

const clientConfig = {
  mode: env,
  target: "web",
  entry: {
    client: ["react-hot-loader/patch", "./client/index.js"]
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: OUTPUT_PATH,
    publicPath
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: babelClientOptions
      },
      {
        test: /.jsx?$/,
        loader: "eslint-loader",
        enforce: "pre",
        exclude: /node_modules/,
        options: {
          formatter: EslintFriendlyFormatter
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [OUTPUT_PATH]
    }),
    new LoadablePlugin(),
    new StylelintPlugin({
      context: entryPath,
      files: ["**/*.css", "**/*.less"]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    publicPath,
    host,
    port,
    writeToDisk: function(filePath) {
      if (/loadable-stats\.json/.test(filePath)) return true;
      return false;
    }
  }
};
module.exports = clientConfig;
