module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
    ]
  }
};
