/* eslint-env jasmine */
const bespoke = require('bespoke')
const math = require('../../lib/bespoke-math.js')

function createHtml(slides) {
  let parent = document.createElement('article'),
    slide
  for (let i = 0; i < slides.length; i++) {
    slide = document.createElement('section')
    slide.innerHTML = slides[i]
    parent.appendChild(slide)
  }
  return parent
}

describe('bespoke-math', function() {

  let deck = null
  let slides = [
    '<h1>Title slide 1</h1><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>',
    '<h1>Title slide 2</h1><p class="math">c = \\pm\\sqrt{a^2 + b^2}</p>']

  function createDeck() {
    deck = bespoke.from(createHtml(slides), [
      math()
    ])
  }

  beforeEach(createDeck)

  describe('deck.slide', function() {

    beforeEach(function() {
      deck.slide(0)
    })

    it('should transform a slide with a LATEX formula', function() {
      expect(deck.slides[1].innerHTML).not.toBe(slides[1])
    })

    it('should NOT transform a slide that doesn\'t have a LATEX formula', function() {
      expect(deck.slides[0].innerHTML).toBe(slides[0])
    })

  })

})


describe('bespoke-math configuration', function() {

  let deck = null
  let slides = null

  beforeEach(function() {
    slides = ['<h1>Title slide 1</h1><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>']
  })

  describe('formula selectors', function() {

    it('should expect 1 argument to specify the selector for classes but keep the inline/full formula as span vs anything', function() {
      slides.push('<h1>Title slide 2</h1><span class="formula">\\vec{a}</span>')
      slides.push('<h1>Title slide 3</h1><div class="formula">\\vec{a}</div>')
      slides.push('<h1>Title slide 4</h1><p class="equation">\\vec{a}</p>')
      slides.push('<h1>Title slide 5</h1><p class="math">\\vec{a}</p>')

      deck = bespoke.from(createHtml(slides), [
        math('.formula, .equation')
      ])
      deck.slide(0)

      expect(deck.slides[1].innerHTML).not.toBe(slides[1])
      expect(deck.slides[2].innerHTML).not.toBe(slides[2])
      expect(deck.slides[3].innerHTML).not.toBe(slides[3])
      expect(deck.slides[4].innerHTML).toBe(slides[4])

      expect(deck.slides[1].innerHTML).not.toContain('katex-display')
      expect(deck.slides[2].innerHTML).toContain('katex-display')
      expect(deck.slides[3].innerHTML).toContain('katex-display')
    })

    it('should expect 2 arguments to specify the selector for inline formulas and the selector for full formulas', function() {
      slides.push('<h1>Title slide 2</h1><span class="inline-formula">\\vec{a}</span>')
      slides.push('<h1>Title slide 3</h1><div class="formula">\\vec{a}</div>')

      deck = bespoke.from(createHtml(slides), [
        math('.inline-formula', '.formula')
      ])
      deck.slide(0)

      expect(deck.slides[1].innerHTML).not.toBe(slides[1])
      expect(deck.slides[2].innerHTML).not.toBe(slides[2])

      expect(deck.slides[1].innerHTML).not.toContain('katex-display')
      expect(deck.slides[2].innerHTML).toContain('katex-display')
    })
  })

  describe('errors', function() {
    it('should not throw an exception when an incorrect formula is processed', function() {
      slides = ['<p class="math">\\incorrect_latex_command</p>']

      spyOn(bespoke, 'from').and.callThrough()

      expect(function() {
        deck = bespoke.from(createHtml(slides), [
          math()
        ])
      }).not.toThrow()
    })

    it('should not include CSS from katex if no math formula is found', function() {
      let styles = document.querySelectorAll('head > style')

      for (let i = 0; i < styles.length; i++) {
        styles[i].remove()
      }

      slides = ['<p>no math formula</p>']

      deck = bespoke.from(createHtml(slides), [
        math()
      ])

      expect(document.styleSheets.length).toBe(0)
    })
  })

})
