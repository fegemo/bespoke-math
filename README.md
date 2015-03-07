[![Build Status](https://secure.travis-ci.org/fegemo/bespoke-math.png?branch=master)](https://travis-ci.org/fegemo/bespoke-math) [![Coverage Status](https://coveralls.io/repos/fegemo/bespoke-math/badge.png)](https://coveralls.io/r/fegemo/bespoke-math)

# bespoke-math

Use [KaTeX][katex] to include latex formulas into your bespoke.js presentation.

## KaTeX

KaTeX is a much lighter alternative to MathJax that allows you to write LaTeX formulas on the web.
Refer to their documentation on what syntax is supported.
The current version of KaTeX in use is [0.2.0][katex-version].

[katex-version]: https://github.com/Khan/KaTeX/releases/tag/v0.2.0

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/fegemo/bespoke-math/master/dist/bespoke-math.min.js
[max]: https://raw.github.com/fegemo/bespoke-math/master/dist/bespoke-math.js
[katex]: http://khan.github.io/KaTeX/

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  math = require('bespoke-math');

bespoke.from('#presentation', [
  math()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.math()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-math
```

### Bower

```bash
$ bower install bespoke-math
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
