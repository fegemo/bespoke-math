var katex = require('katex'),
  insertCss = require('insert-css');
  fs = require('fs');

module.exports = function() {
  return function(deck) {
    var mathElements = deck.parent.querySelectorAll('.math');
    Array.prototype.slice.call(mathElements).forEach(function(el) {
      var inline = el.tagName === 'span';
      el.innerHTML = katex.renderToString(el.innerText, { displayMode: inline });
    });

    try {
      if (mathElements.length) {
        var css = fs.readFileSync(__dirname + '/../node_modules/katex-build/katex.min.css', 'utf8');
        insertCss(css);
      }
    } catch (e) {
      console.log('It was not possible to load the CSS from KaTeX. Details: ' + e);
    }
  };
};
