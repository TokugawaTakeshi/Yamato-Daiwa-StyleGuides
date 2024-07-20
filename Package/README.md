# Yamato Daiwa Style Guides

![Main Visual of "@yamato-daiwa/style_guides", the npm package](https://repository-images.githubusercontent.com/427835358/6ca6544e-ae7a-4c3b-a3bd-14e5ba160411)


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

For the **.eslintrc.yaml** case, it will be:

```yaml
extends: ./node_modules/@yamato-daiwa/style_guides/ECMAScript.js
```


#### Extending of pug-lint preset

For the **.pug-lintrc** case, it will be:

```json
{
  "extends": "./node_modules/@yamato-daiwa/style_guides/Markup.js"
}
```

Depending on the project building tool, the excluding of **node_modules** could require.

```json
{
  "extends": "./node_modules/@yamato-daiwa/style_guides/Markup.js",
  "excludeFiles": [ "node_modules/**" ]
}
```
