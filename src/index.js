const greeting = require('greeting');
const parting = require('parting');
const {Lexeme, Lexicon} = require('lemme-lex');

let greetingTags = ['ArrivalSalutation'];
let partingTags = ['DepartureSalutation'];
// Translations
const greetings = require('./data/ja_JP/greetings.json');
const partings = require('./data/ja_JP/partings.json');

/**
  * Consolidated sources
  */
let lexemes = {
  'en_GB': [].concat( greeting.all.map(phrase => new Lexeme(phrase, greetingTags)) ) // Greetings (author sourced)
             .concat( parting.all.map(phrase => new Lexeme(phrase, partingTags)) ), // Partings (author sourced)
  'ja_JP': [].concat( greetings.map(phrase => new Lexeme(phrase, greetingTags, 'ja_JP')) ) // Greetings (manually sourced)
             .concat( partings.map(phrase => new Lexeme(phrase, partingTags, 'ja_JP')) ) // Partings (manually sourced)
};

module.exports = class SalutationLex extends Lexicon
{
  constructor(locale = 'en_GB')
  {
    super(locale);
    this.addEntries(lexemes[locale]);
  }
};
