# Yamato Daiwa Style guides

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
extends: ./node_modules/@yamato-daiwa/style_guides/BasicPreset.js
```


#### Extending of pug-lint preset

For the **.pug-lintrc** case, it will be:

```
{
  "extends": "./node_modules/@yamato-daiwa/style_guides/Markup-BasicPreset.js",
}
```
