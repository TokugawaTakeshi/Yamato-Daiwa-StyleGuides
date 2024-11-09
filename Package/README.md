# Yamato Daiwa Style Guides

![Main Visual of "@yamato-daiwa/style_guides", the npm package](https://raw.githubusercontent.com/TokugawaTakeshi/Yamato-Daiwa-StyleGuides/refs/heads/master/Documentation/01-Source/Pages/Top/Images/TopPage-MainVisual.english.png)


The strict style guides for the high quality development with TypeScript and Pug.

Includes:

* [ESLint](https://eslint.org) preset
* [pug-lint](https://github.com/pugjs/pug-lint) preset


## Installation

```
npm i @yamato-daiwa/style_guides -D -E
```


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
