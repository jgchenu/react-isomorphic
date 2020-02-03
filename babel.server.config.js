module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/env",
      {
        targets: {
          browsers: "last 2 versions"
        },
        useBuiltIns: "usage",
        corejs: "3.0.0"
      }
    ]
  ],
};
