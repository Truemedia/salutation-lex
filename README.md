# Salutation lex
A lexicon for arrival and departure salutations

This module can be used as both a function and in the future via the command line

As a module it exports a Lexicon instance using the package [Lemme lex](https://www.npmjs.com/package/lemme-lex)

## Installation

NPM
```bash
    npm i --save salutation-lex
```

Yarn
```bash
    yarn add salutation-lex
```

## Usage

### As dependency
```js
const SalutationLex = require('salutation-lex');
let lex = new SalutationLex();
console.log(lex); // Will output class instance using lemme-lex
```
