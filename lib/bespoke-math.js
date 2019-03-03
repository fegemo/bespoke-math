const katex = require('katex');
const fileSystem = require('fs');

const renderKatexFormula = function(text, displayMode) {
  try {
    return katex.renderToString(text, { displayMode: displayMode });
  } catch (err) {
    console.log(
      'Katex error trying to parse: "' + text + '". Description: ' + err
    );
  }
};

module.exports = function(inlineMathSelector, displayMathSelector) {
  const inlineVsDisplayLogic =
    typeof displayMathSelector !== 'undefined'
      ? 'separateSelector'
      : 'spanIsInline';

  inlineMathSelector = arguments.length > 0 ? inlineMathSelector : '.math';

  return function(deck) {
    let foundMath = false,
      mathElements;

    switch (inlineVsDisplayLogic) {
      case 'separateSelector':
        mathElements = deck.parent.querySelectorAll(inlineMathSelector);
        Array.from(mathElements).forEach(el => {
          el.innerHTML = renderKatexFormula(el.innerHTML, false);
          foundMath = true;
        });
        mathElements = deck.parent.querySelectorAll(displayMathSelector);
        Array.from(mathElements).forEach(el => {
          el.innerHTML = renderKatexFormula(el.innerHTML, true);
          foundMath = true;
        });
        break;

      case 'spanIsInline':
        mathElements = deck.parent.querySelectorAll(inlineMathSelector);
        Array.from(mathElements).forEach(el => {
          el.innerHTML = renderKatexFormula(
            el.innerHTML,
            el.tagName.toLowerCase() !== 'span'
          );
          foundMath = true;
        });
        break;
    }

    if (foundMath) {
      try {
        require('katex/dist/katex.min.css');
      } catch (e) {
        console.log(
          'It was not possible to load the CSS from KaTeX. Details: ' + e
        );
      }
    }
  };
};
