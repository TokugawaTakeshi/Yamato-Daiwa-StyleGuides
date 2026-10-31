# Yamato Daiwa Style Guides

![Main Visual of "@yamato-daiwa/style_guides", the npm package](https://raw.githubusercontent.com/TokugawaTakeshi/Yamato-Daiwa-StyleGuides/refs/heads/master/Documentation/01-Source/Pages/Top/Images/TopPage-MainVisual.english.png)


The strict style guides for the high quality development with TypeScript and Pug.
Zero tolerance to `any` type and omitted types annotations.

Includes:

* [ESLint](https://eslint.org) preset
* [pug-lint](https://github.com/pugjs/pug-lint) preset


## Installation

```
npm i @yamato-daiwa/style_guides -D -E
```


### Requirements

**Yamato Daiwa Style Guides** takes care about plugins compatibility and keeping them up-date as possible.
To provide the installation of required, they has been marked as [peerDependencies](https://docs.npmjs.com/cli/v12/configuring-npm/package-json#peerdependencies).
Modern versions of **npm** automatically installing **peerDependencies**, so the only thing you have to care is 
  the compatibility of the following peer dependencies with already installed packages.

+ **@eslint-community/eslint-plugin-eslint-comments**: **~4.8.0** (any path version of **4.8**)
+ **@stylistic/eslint-plugin**: **~5.10.0** (any path version of **5.10**)
+ **@typescript-eslint/eslint-plugin**: **~8.72.0** (any path version of **8.72**)
+ **@typescript-eslint/parser**: **~8.72.0** (any path version of **8.72**)
+ **eslint**: **~9.39.0** (any path version of **9.39**)
+ **eslint-plugin-import**: **~2.32.0** (any path version of **2.32**)
+ **eslint-plugin-n**: **~18.5.0** (any path version of **18.5**)
+ **eslint-plugin-react**: **~7.37.0** (any path version of **7.37**)
+ **eslint-plugin-vue**: **~10.12.0** (any path version of **10.12**)
+ **eslint-plugin-vue-pug**: **1.0.0-alpha.6**
+ **typescript"**: **~6.0.0** (any path version of **6.0**)


#### Notice About ESLint v9 Deprecation

We are know that ESLint v9 has reached the End of Life (EOL).
Unfortunately, the following dependencies is not supporting the ESLint v10:

| Package name         | Related GitHub issue                                          |
|----------------------|---------------------------------------------------------------|
| eslint-plugin-react  | https://github.com/jsx-eslint/eslint-plugin-react/issues/3977 |
| eslint-plugin-import | https://github.com/import-js/eslint-plugin-import/issues/3278 |

We'll provide the ESLint 10 support once the following dependencies will do.


### Usage
#### Extending of ESLint preset
##### CommonJS

```js
const YamatoDaiwaStyleGuides = require("@yamato-daiwa/style_guides/ECMAScript");


module.exports = [
  ...YamatoDaiwaStyleGuides
];
```

##### ES Modules

```js
import YamatoDaiwaStyleGuides from "@yamato-daiwa/style_guides/ECMAScript";


export default [
  ...YamatoDaiwaStyleGuides
];
```

#### Extending of pug-lint preset

For the **.pug-lintrc** case, it will be:

```json
{
  "extends": "./node_modules/@yamato-daiwa/style_guides/Markup.js"
}
```

Depending on the project building tool, the excluding of **node_modules** may require.

```json
{
  "extends": "./node_modules/@yamato-daiwa/style_guides/Markup.js",
  "excludeFiles": [ "node_modules/**" ]
}
```
