module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module"
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      version: "^16.12.0"
    }
  },
  globals: {
    __DEV__: true
  }
};
