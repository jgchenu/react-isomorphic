module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/env",
      {
        targets: {
          node: "current"
        },
        modules: "commonjs"
      }
    ]
  ],
  plugins: ["@loadable/babel-plugin"]
};
