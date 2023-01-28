const ECMA_ScriptBasicRules = require("./Partials/ECMA_ScriptBasicRules")
const NodeJS_BasicRules  = require("./Partials/NodeJS_Rules")
const TypeScriptOverridings = require("./Partials/Overridings/TypeScriptOverridings");
const TestFilesOverridings = require("./Partials/Overridings/TestFilesOverridings")
const VueComponentsFilesOverridings = require("./Partials/Overridings/Vue/VueComponentsFilesOverridings")
const VuexModuleComponentsOverridings = require("./Partials/Overridings/Vue/VuexModuleComponentsOverridings")
const JSX_FilesOverridings = require("./Partials/Overridings/React/JSX_FilesOverridings")


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
    "vue",
    "react"
  ],

  rules: {
    ...ECMA_ScriptBasicRules,
    ...NodeJS_BasicRules
  },

  overrides: [
    TypeScriptOverridings,
    TestFilesOverridings,
    VueComponentsFilesOverridings,
    VuexModuleComponentsOverridings,
    JSX_FilesOverridings
  ],

  globals: {
    ReadonlyMap: "readonly",
    MapConstructor: "readonly",
    BigInt: "readonly",
    NodeJS: "readonly",
    BufferEncoding: "readonly"
  }
};
