const bespoke = require('bespoke'),
  theme = require('bespoke-theme-sandy'),
  keys = require('bespoke-keys'),
  math = require('../../dist/bespoke-math-offline-fonts.min.js');

bespoke.from('article', [
  theme(),
  keys(),
  math()
]);
