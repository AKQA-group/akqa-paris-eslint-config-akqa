module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "latest",
    },
    "import/resolver": {
      node: {
        paths: ["./"],
      },
    },
  },
};
