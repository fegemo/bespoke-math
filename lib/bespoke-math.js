var katex = require('katex'),
  insertCss = require('insert-css');
var fileSystem = require('fs');

module.exports = function(inlineMathSelector, displayMathSelector) {
  var inlineVsDisplayLogic = typeof displayMathSelector !== 'undefined' ? 'separateSelector' : 'spanIsInline';

  inlineMathSelector = arguments.length > 0 ? inlineMathSelector : '.math';

  return function(deck) {
    var foundMath = false,
      mathElements;
    switch (inlineVsDisplayLogic) {
      case 'separateSelector':
        mathElements = deck.parent.querySelectorAll(inlineMathSelector);
        Array.prototype.slice.call(mathElements).forEach(function(el) {
          el.innerHTML = katex.renderToString(el.innerText, { displayMode: false });
          foundMath = true;
        });
        mathElements = deck.parent.querySelectorAll(displayMathSelector);
        Array.prototype.slice.call(mathElements).forEach(function(el) {
          el.innerHTML = katex.renderToString(el.innerText, { displayMode: true });
          foundMath = true;
        });
        break;

      case 'spanIsInline':
        mathElements = deck.parent.querySelectorAll(inlineMathSelector);
        Array.prototype.slice.call(mathElements).forEach(function(el) {
          el.innerHTML = katex.renderToString(el.innerText, { displayMode:  el.tagName.toLowerCase() !== 'span' });
          foundMath = true;
        });
        break;
    }

    if (foundMath) {
      try {
        var css = fileSystem.readFileSync(__dirname + '/../node_modules/katex-build/katex.min.css', 'utf8');
        insertCss(css);
      } catch (e) {
        console.log('It was not possible to load the CSS from KaTeX. Details: ' + e);
      }
    }
  };
};
