# Salutation lex
A lexicon for arrival and departure salutations

This module can be used as both a function and via the command line

As a module it exports a Lexicon instance using the package [Lemme lex](https://www.npmjs.com/package/lemme-lex)

## Supported languages
* English (British)
* Japanese
(Fork and commit if you would like to contribute to the list)

## Installation

NPM
```bash
    npm i --save salutation-lex
```

Yarn
```bash
    yarn add salutation-lex
```

CLI
```bash
  npm i -g salutation-lex
```

## Usage

### Code
```js
const SalutationLex = require('salutation-lex');
let lex = new SalutationLex();
console.log(lex); // Will output class instance using lemme-lex
```

### CLI
```bash
  salutation-lex --locale=en_GB
```
(Will output lexicon as text file called salutation.lex)
