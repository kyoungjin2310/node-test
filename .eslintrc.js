module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ["airbnb-base", "plugin:node/recommended", "prettier"],
  env: {
    node: true,
  },
  rules: {
    "import/prefer-default-export": ["off"],
  },
};
