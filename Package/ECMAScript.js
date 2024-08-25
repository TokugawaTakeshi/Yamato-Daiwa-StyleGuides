const ECMA_ScriptBasicRules = require("./Partials/ECMA_ScriptBasicRules")
const NodeJS_BasicRules  = require("./Partials/NodeJS_Rules")
const TypeScriptOverridings = require("./Partials/Overridings/TypeScriptOverridings");
const TestFilesOverridings = require("./Partials/Overridings/TestFilesOverridings")
const VueComponentsFilesOverridings = require("./Partials/Overridings/Vue/VueComponentsFilesOverridings")
const VuexModuleComponentsOverridings = require("./Partials/Overridings/Vue/VuexModuleComponentsOverridings")
const JSX_FilesOverridings = require("./Partials/Overridings/React/JSX_FilesOverridings")
const TypeScriptPlugin = require("@typescript-eslint/eslint-plugin");
const StylisticPlugin = require("@stylistic/eslint-plugin");
const VuePlugin = require("eslint-plugin-vue");
const ReactPlugin = require("eslint-plugin-react");


const ECMA_ScriptBasicRules = require("./Partials/ECMA_ScriptBasicRules");
const TypeScriptRules = require("./Partials/TypeScriptRules");
/* Migration to another plugin required https://github.com/mysticatea/eslint-plugin-node/issues/358 */
// const NodeJS_Rules  = require("./Partials/NodeJS_Rules");
const RulesForTestFiles = require("./Partials/RulesForTestFiles");
const ReactRules = require("./Partials/ReactRules")

const globals = require("globals");

const TypeScriptESLintParser = require("@typescript-eslint/parser");
const VueESLintParser = require("vue-eslint-parser");

  parser: "@typescript-eslint/parser",

module.exports = [
  {

    languageOptions: {

      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha
      }

    },

    plugins: {
      "@stylistic": StylisticPlugin,
      vue: VuePlugin,
      react: ReactPlugin
    },

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
  {

    files: [ "**/*.ts" ],

    languageOptions: {

      parser: TypeScriptESLintParser,
      parserOptions: {
        project: "tsconfig.json"
      },
      sourceType: "module",

  globals: {
    ReadonlyMap: "readonly",
    ReadonlySet: "readonly",
    MapConstructor: "readonly",
    BigInt: "readonly",
    NodeJS: "readonly",
    BufferEncoding: "readonly"
  }
};
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha
      }

    },

    plugins: {
      "@typescript-eslint": TypeScriptPlugin
    },

    rules: TypeScriptRules

  },

  {
    files: [ "*.jsx", "*.tsx" ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    rules: ReactRules
  },

  {
    files: [ "**/*.test.ts" ],
    rules: RulesForTestFiles
  }

];
