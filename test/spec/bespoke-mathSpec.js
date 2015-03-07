Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke');
var math = require('../../lib-instrumented/bespoke-math.js');

describe("bespoke-math", function() {

  var deck,
    slides = [
      "<h1>Title slide 1</h1><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
      "<h1>Title slide 2</h1><p class='math'>c = \\pm\\sqrt{a^2 + b^2}</p>"],

    createDeck = function() {
      var parent = document.createElement("article"),
        slide;
      for (var i = 0; i < 2; i++) {
        slide = document.createElement("section");
        slide.innerHTML = slides[i];
        parent.appendChild(slide);
      }

      deck = bespoke.from(parent, [
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
