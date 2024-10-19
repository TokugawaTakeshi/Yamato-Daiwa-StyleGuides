/* ─── Plugins ────────────────────────────────────────────────────────────────────────────────────────────────────── */
const stylisticPlugin = require("@stylistic/eslint-plugin");
const nodePlugin = require("eslint-plugin-n");
const commentsPlugin = require("@eslint-community/eslint-plugin-eslint-comments");
const importPlugin = require("eslint-plugin-import");
const vuePlugin = require("eslint-plugin-vue");
const reactPlugin = require("eslint-plugin-react");
const typeScriptPlugin = require("@typescript-eslint/eslint-plugin");

/* ─── Rules ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
const ecmaScriptBasicRules = require("./Rules/ECMA_ScriptBasicRules");
const nodeJS_Rules = require("./Rules/NodeJS_Rules");
const commentsRules = require("./Rules/CommentsRules");
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
      "@eslint-community/eslint-comments": commentsPlugin,
      import: importPlugin
    },

    rules: {
      ...ecmaScriptBasicRules,
      ...nodeJS_Rules,
      ...commentsRules
    }

  },

  {

    files: [ "**/*.ts" ],

    languageOptions: {

      parser: typeScriptESLintParser,
      parserOptions: {
        project: "tsconfig.json"
      },
      sourceType: "module",

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
    files: [ "**/*.vue", "**/*.vue.ts" ],
    languageOptions: {
      parser: vueESLintParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module"
      }
    },
    plugins: {
      vue: vuePlugin
    },
    processor: "vue/vue",
    rules: vueRules
  },

  {
    files: [ "*.jsx", "*.tsx" ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: reactRules
  },

  {
    files: [ "**/*.test.ts" ],
    rules: overridingsForTestingFiles
  }

];
