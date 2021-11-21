const ECMA_ScriptBasicRules = require("./Partials/ECMA_ScriptBasicRules.js")


module.exports = {

  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: "./"
  },

  env: {
    "es6": true,
    "browser": true,
    "node": true
  },

  plugins: [
    "@typescript-eslint",
    "node"
  ],

  rules: {
    ...ECMA_ScriptBasicRules
  },

  overrides: [


  ],

  globals: {
    BigInt: "readonly",
    NodeJS: "readonly",
    BufferEncoding: "readonly"
  }
};
