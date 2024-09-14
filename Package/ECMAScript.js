/* ─── Plugins ────────────────────────────────────────────────────────────────────────────────────────────────────── */
const stylisticPlugin = require("@stylistic/eslint-plugin");
const nodePlugin = require("eslint-plugin-n");
const vuePlugin = require("eslint-plugin-vue");
const reactPlugin = require("eslint-plugin-react");
const typeScriptPlugin = require("@typescript-eslint/eslint-plugin");

/* ─── Rules ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
const ecmaScriptBasicRules = require("./Rules/ECMA_ScriptBasicRules");
const nodeJS_Rules = require("./Rules/NodeJS_Rules");
const typeScriptRules = require("./Rules/TypeScriptRules");
const reactRules = require("./Rules/ReactRules");
const vueRules = require("./Rules/VueRules");

/* ─── Overridings ────────────────────────────────────────────────────────────────────────────────────────────────── */
const overridingsForTestingFiles = require("./Overridings/OverridingsForTestingFiles");

/* ─── Parsers ────────────────────────────────────────────────────────────────────────────────────────────────────── */
const typeScriptESLintParser = require("@typescript-eslint/parser");
const vueESLintParser = require("vue-eslint-parser");

/* ─── Native ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
const globals = require("globals");


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
      "@stylistic": stylisticPlugin,
      n: nodePlugin,
      vue: vuePlugin,
      react: reactPlugin
    },

    rules: {
      ...ecmaScriptBasicRules,
      ...nodeJS_Rules
    }
  },

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
      "@typescript-eslint": typeScriptPlugin
    },

    rules: typeScriptRules

  },

  {
    files: [ "*.jsx", "*.tsx" ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    rules: reactRules
  },

  {
    files: [ "**/*.test.ts" ],
    rules: overridingsForTestingFiles
  }

];
