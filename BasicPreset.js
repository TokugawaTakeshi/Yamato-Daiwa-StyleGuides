const ECMA_ScriptBasicRules = require("./Partials/ECMA_ScriptBasicRules")
const NodeJS_BasicRules  = require("./Partials/NodeJS_Rules")
const TypeScriptOverridings = require("./Partials/Overridings/TypeScriptOverridings");
const TestFilesOverridings = require("./Partials/Overridings/TestFilesOverridings")
const VueComponentsFilesOverrides = require("./Partials/Overridings/Vue/VueComponentsFilesOverrides")
const VuexModuleComponentsOverrides = require("./Partials/Overridings/Vue/VuexModuleComponentsOverrides")


module.exports = {

  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: "./",
    project: "tsconfig.json",
    extraFileExtensions: [ ".vue" ],
    templateTokenizer: {
      pug: "vue-eslint-parser-template-tokenizer-pug"
    }
  },

  env: {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },

  plugins: [
    "@typescript-eslint",
    "import",
    "node",
    "vue"
  ],

  rules: {
    ...ECMA_ScriptBasicRules,
    ...NodeJS_BasicRules
  },

  overrides: [
    TypeScriptOverridings,
    TestFilesOverridings,
    VueComponentsFilesOverrides,
    VuexModuleComponentsOverrides
  ],

  globals: {
    BigInt: "readonly",
    NodeJS: "readonly",
    BufferEncoding: "readonly"
  }
};
