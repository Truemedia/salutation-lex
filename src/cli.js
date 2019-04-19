#! /usr/bin/env node
const yargs = require('yargs')
    .usage("salutation-lex --locale=en_GB")
    .option('locale', {
      "alias": "l",
      "default": "en_GB",
      "describe": "Localisation (ISO code)",
      "type": "string"
    })
    .help('h')
    .alias('h', 'help');
const SalutationLex = require('./index');

let {locale} = yargs.argv;
let lex = new SalutationLex(locale);
let filename = 'salutation.txt';
let dest = `${locale}/${filename}`;
lex.toFile(dest);
console.log(`saved file: ${dest}`);
