const greeting = require('greeting');
const parting = require('parting');
const {Lexeme, Lexicon} = require('lemme-lex');

let greetingTags = ['ArrivalSalutation'];
let partingTags = ['DepartureSalutation'];

let lex = new Lexicon();

/**
  * Consolidated sources
  */
let lexemes = [].concat( greeting.all.map(phrase => new Lexeme(phrase, greetingTags)) ) // Greetings (author sourced)
                .concat( parting.all.map(phrase => new Lexeme(phrase, partingTags)) ); // Partings (author sourced)

lex.addEntries(lexemes);
module.exports = lex;
