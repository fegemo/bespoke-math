const bespoke = require('bespoke')
const theme = require('bespoke-theme-sandy')
const keys = require('bespoke-keys')
const math = require('../../dist/bespoke-math.min.js')

bespoke.from('article', [
  theme(),
  keys(),
  math()
])
