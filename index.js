const regex = require('ansi-regex@2.1.1');
const kleur = require('kleur');
const got = require('got');

got('https://test.dk');

console.log(kleur.red('hello world'));
