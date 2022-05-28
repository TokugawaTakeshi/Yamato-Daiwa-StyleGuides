module.exports = {

  files: [
    "*.vue",
    "*.vue.ts"
  ],

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [ ".vue" ]
  },

  rules: {
    "class-methods-use-this": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-ordering": "off",
    "vue/script-indent": [
      "warn",
      2,
      {
        baseIndent: 1
      }
    ]
  }
};
