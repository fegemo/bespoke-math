Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke'),
  math = require('../../lib-instrumented/bespoke-math.js'),

  createHtml = function(slides) {
    var parent = document.createElement("article"),
      slide;
    for (var i = 0; i < slides.length; i++) {
      slide = document.createElement("section");
      slide.innerHTML = slides[i];
      parent.appendChild(slide);
    }
    return parent;
  };

describe("bespoke-math", function() {

  var deck,
    slides = [
      '<h1>Title slide 1</h1><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>',
      '<h1>Title slide 2</h1><p class="math">c = \\pm\\sqrt{a^2 + b^2}</p>'],

    createDeck = function() {
      deck = bespoke.from(createHtml(slides), [
        math()
      ]);
    };

  beforeEach(createDeck);

  describe("deck.slide", function() {

    beforeEach(function() {
      deck.slide(0);
    });

    it("should transform a slide with a LATEX formula", function() {
      expect(deck.slides[1].innerHTML).not.toBe(slides[1]);
    });

    it("should NOT transform a slide that doesn't have a LATEX formula", function() {
      expect(deck.slides[0].innerHTML).toBe(slides[0]);
    });

  });

});


describe("bespoke-math configuration", function() {

  var deck,
    slides;

  beforeEach(function() {
    slides = ["<h1>Title slide 1</h1><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"];
  });

  describe('formula selectors', function() {

    it('should expect 1 argument to specify the selector for classes but keep the inline/full formula as span vs anything', function() {
      slides.push('<h1>Title slide 2</h1><span class="formula">\\vec{a}</span>');
      slides.push('<h1>Title slide 3</h1><div class="formula">\\vec{a}</div>');
      slides.push('<h1>Title slide 4</h1><p class="equation">\\vec{a}</p>');
      slides.push('<h1>Title slide 5</h1><p class="math">\\vec{a}</p>');

      deck = bespoke.from(createHtml(slides), [
        math('.formula, .equation')
      ]);
      deck.slide(0);

      expect(deck.slides[1].innerHTML).not.toBe(slides[1]);
      expect(deck.slides[2].innerHTML).not.toBe(slides[2]);
      expect(deck.slides[3].innerHTML).not.toBe(slides[3]);
      expect(deck.slides[4].innerHTML).toBe(slides[4]);

      expect(deck.slides[1].innerHTML).not.toContain('katex-display');
      expect(deck.slides[2].innerHTML).toContain('katex-display');
      expect(deck.slides[3].innerHTML).toContain('katex-display');
    });

    it('should expect 2 arguments to specify the selector for inline formulas and the selector for full formulas', function() {
      slides.push('<h1>Title slide 2</h1><span class="inline-formula">\\vec{a}</span>');
      slides.push('<h1>Title slide 3</h1><div class="formula">\\vec{a}</div>');

      deck = bespoke.from(createHtml(slides), [
        math('.inline-formula', '.formula')
      ]);
      deck.slide(0);

      expect(deck.slides[1].innerHTML).not.toBe(slides[1]);
      expect(deck.slides[2].innerHTML).not.toBe(slides[2]);

      expect(deck.slides[1].innerHTML).not.toContain('katex-display');
      expect(deck.slides[2].innerHTML).toContain('katex-display');
    });
  });


});
