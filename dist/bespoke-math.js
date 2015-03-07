/*!
 * bespoke-math v1.0.0
 *
 * Copyright 2015, Flávio
 * This content is released under the MIT license
 * 
 */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.bespoke||(g.bespoke = {}));g=(g.plugins||(g.plugins = {}));g.math = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var katex = require('katex'),
  insertCss = require('insert-css');
  

module.exports = function() {
  return function(deck) {
    var mathElements = deck.parent.querySelectorAll('.math');
    Array.prototype.slice.call(mathElements).forEach(function(el) {
      var inline = el.tagName === 'span';
      el.innerHTML = katex.renderToString(el.innerText, { displayMode: inline });
    });

    try {
      if (mathElements.length) {
        var css = "@font-face {\r\n    font-family: KaTeX_AMS;\r\n    src: url(fonts/KaTeX_AMS-Regular.eot);\r\n    src: url(fonts/KaTeX_AMS-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_AMS-Regular.woff2) format('woff2'),url(fonts/KaTeX_AMS-Regular.woff) format('woff'),url(fonts/KaTeX_AMS-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Caligraphic;\r\n    src: url(fonts/KaTeX_Caligraphic-Bold.eot);\r\n    src: url(fonts/KaTeX_Caligraphic-Bold.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Caligraphic-Bold.woff2) format('woff2'),url(fonts/KaTeX_Caligraphic-Bold.woff) format('woff'),url(fonts/KaTeX_Caligraphic-Bold.ttf) format('ttf');\r\n    font-weight: 700;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Caligraphic;\r\n    src: url(fonts/KaTeX_Caligraphic-Regular.eot);\r\n    src: url(fonts/KaTeX_Caligraphic-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Caligraphic-Regular.woff2) format('woff2'),url(fonts/KaTeX_Caligraphic-Regular.woff) format('woff'),url(fonts/KaTeX_Caligraphic-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Fraktur;\r\n    src: url(fonts/KaTeX_Fraktur-Bold.eot);\r\n    src: url(fonts/KaTeX_Fraktur-Bold.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Fraktur-Bold.woff2) format('woff2'),url(fonts/KaTeX_Fraktur-Bold.woff) format('woff'),url(fonts/KaTeX_Fraktur-Bold.ttf) format('ttf');\r\n    font-weight: 700;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Fraktur;\r\n    src: url(fonts/KaTeX_Fraktur-Regular.eot);\r\n    src: url(fonts/KaTeX_Fraktur-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Fraktur-Regular.woff2) format('woff2'),url(fonts/KaTeX_Fraktur-Regular.woff) format('woff'),url(fonts/KaTeX_Fraktur-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Main;\r\n    src: url(fonts/KaTeX_Main-Bold.eot);\r\n    src: url(fonts/KaTeX_Main-Bold.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Bold.woff2) format('woff2'),url(fonts/KaTeX_Main-Bold.woff) format('woff'),url(fonts/KaTeX_Main-Bold.ttf) format('ttf');\r\n    font-weight: 700;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Main;\r\n    src: url(fonts/KaTeX_Main-Italic.eot);\r\n    src: url(fonts/KaTeX_Main-Italic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Italic.woff2) format('woff2'),url(fonts/KaTeX_Main-Italic.woff) format('woff'),url(fonts/KaTeX_Main-Italic.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: italic\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Main;\r\n    src: url(fonts/KaTeX_Main-Regular.eot);\r\n    src: url(fonts/KaTeX_Main-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Regular.woff2) format('woff2'),url(fonts/KaTeX_Main-Regular.woff) format('woff'),url(fonts/KaTeX_Main-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Math;\r\n    src: url(fonts/KaTeX_Math-BoldItalic.eot);\r\n    src: url(fonts/KaTeX_Math-BoldItalic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Math-BoldItalic.woff2) format('woff2'),url(fonts/KaTeX_Math-BoldItalic.woff) format('woff'),url(fonts/KaTeX_Math-BoldItalic.ttf) format('ttf');\r\n    font-weight: 700;\r\n    font-style: italic\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Math;\r\n    src: url(fonts/KaTeX_Math-Italic.eot);\r\n    src: url(fonts/KaTeX_Math-Italic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Math-Italic.woff2) format('woff2'),url(fonts/KaTeX_Math-Italic.woff) format('woff'),url(fonts/KaTeX_Math-Italic.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: italic\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Math;\r\n    src: url(fonts/KaTeX_Math-Regular.eot);\r\n    src: url(fonts/KaTeX_Math-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Math-Regular.woff2) format('woff2'),url(fonts/KaTeX_Math-Regular.woff) format('woff'),url(fonts/KaTeX_Math-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_SansSerif;\r\n    src: url(fonts/KaTeX_SansSerif-Bold.eot);\r\n    src: url(fonts/KaTeX_SansSerif-Bold.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_SansSerif-Bold.woff2) format('woff2'),url(fonts/KaTeX_SansSerif-Bold.woff) format('woff'),url(fonts/KaTeX_SansSerif-Bold.ttf) format('ttf');\r\n    font-weight: 700;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_SansSerif;\r\n    src: url(fonts/KaTeX_SansSerif-Italic.eot);\r\n    src: url(fonts/KaTeX_SansSerif-Italic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_SansSerif-Italic.woff2) format('woff2'),url(fonts/KaTeX_SansSerif-Italic.woff) format('woff'),url(fonts/KaTeX_SansSerif-Italic.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: italic\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_SansSerif;\r\n    src: url(fonts/KaTeX_SansSerif-Regular.eot);\r\n    src: url(fonts/KaTeX_SansSerif-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_SansSerif-Regular.woff2) format('woff2'),url(fonts/KaTeX_SansSerif-Regular.woff) format('woff'),url(fonts/KaTeX_SansSerif-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Script;\r\n    src: url(fonts/KaTeX_Script-Regular.eot);\r\n    src: url(fonts/KaTeX_Script-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Script-Regular.woff2) format('woff2'),url(fonts/KaTeX_Script-Regular.woff) format('woff'),url(fonts/KaTeX_Script-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Size1;\r\n    src: url(fonts/KaTeX_Size1-Regular.eot);\r\n    src: url(fonts/KaTeX_Size1-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size1-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size1-Regular.woff) format('woff'),url(fonts/KaTeX_Size1-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Size2;\r\n    src: url(fonts/KaTeX_Size2-Regular.eot);\r\n    src: url(fonts/KaTeX_Size2-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size2-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size2-Regular.woff) format('woff'),url(fonts/KaTeX_Size2-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Size3;\r\n    src: url(fonts/KaTeX_Size3-Regular.eot);\r\n    src: url(fonts/KaTeX_Size3-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size3-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size3-Regular.woff) format('woff'),url(fonts/KaTeX_Size3-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Size4;\r\n    src: url(fonts/KaTeX_Size4-Regular.eot);\r\n    src: url(fonts/KaTeX_Size4-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size4-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size4-Regular.woff) format('woff'),url(fonts/KaTeX_Size4-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n@font-face {\r\n    font-family: KaTeX_Typewriter;\r\n    src: url(fonts/KaTeX_Typewriter-Regular.eot);\r\n    src: url(fonts/KaTeX_Typewriter-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Typewriter-Regular.woff2) format('woff2'),url(fonts/KaTeX_Typewriter-Regular.woff) format('woff'),url(fonts/KaTeX_Typewriter-Regular.ttf) format('ttf');\r\n    font-weight: 400;\r\n    font-style: normal\r\n}\r\n\r\n.katex-display {\r\n    display: block;\r\n    margin: 1em 0;\r\n    text-align: center\r\n}\r\n\r\n.katex-display>.katex {\r\n    display: inline-block\r\n}\r\n\r\nmath.katex {\r\n    font-size: 1.21em;\r\n    line-height: 1.2\r\n}\r\n\r\n.katex {\r\n    font: 400 1.21em KaTeX_Main;\r\n    line-height: 1.2;\r\n    white-space: nowrap\r\n}\r\n\r\n.katex .katex-html {\r\n    display: inline-block\r\n}\r\n\r\n.katex .katex-mathml {\r\n    position: absolute!important;\r\n    clip: rect(1px,1px,1px,1px);\r\n    padding: 0!important;\r\n    border: 0!important;\r\n    height: 1px!important;\r\n    width: 1px!important;\r\n    overflow: hidden\r\n}\r\n\r\n.katex .base,.katex .strut {\r\n    display: inline-block\r\n}\r\n\r\n.katex .mathit {\r\n    font-family: KaTeX_Math;\r\n    font-style: italic\r\n}\r\n\r\n.katex .amsrm {\r\n    font-family: KaTeX_AMS\r\n}\r\n\r\n.katex .textstyle>.mord+.mop {\r\n    margin-left: .16667em\r\n}\r\n\r\n.katex .textstyle>.mord+.mbin {\r\n    margin-left: .22222em\r\n}\r\n\r\n.katex .textstyle>.mord+.mrel {\r\n    margin-left: .27778em\r\n}\r\n\r\n.katex .textstyle>.mop+.mop,.katex .textstyle>.mop+.mord,.katex .textstyle>.mord+.minner {\r\n    margin-left: .16667em\r\n}\r\n\r\n.katex .textstyle>.mop+.mrel {\r\n    margin-left: .27778em\r\n}\r\n\r\n.katex .textstyle>.mop+.minner {\r\n    margin-left: .16667em\r\n}\r\n\r\n.katex .textstyle>.mbin+.minner,.katex .textstyle>.mbin+.mop,.katex .textstyle>.mbin+.mopen,.katex .textstyle>.mbin+.mord {\r\n    margin-left: .22222em\r\n}\r\n\r\n.katex .textstyle>.mrel+.minner,.katex .textstyle>.mrel+.mop,.katex .textstyle>.mrel+.mopen,.katex .textstyle>.mrel+.mord {\r\n    margin-left: .27778em\r\n}\r\n\r\n.katex .textstyle>.mclose+.mop {\r\n    margin-left: .16667em\r\n}\r\n\r\n.katex .textstyle>.mclose+.mbin {\r\n    margin-left: .22222em\r\n}\r\n\r\n.katex .textstyle>.mclose+.mrel {\r\n    margin-left: .27778em\r\n}\r\n\r\n.katex .textstyle>.mclose+.minner,.katex .textstyle>.minner+.mop,.katex .textstyle>.minner+.mord,.katex .textstyle>.mpunct+.mclose,.katex .textstyle>.mpunct+.minner,.katex .textstyle>.mpunct+.mop,.katex .textstyle>.mpunct+.mopen,.katex .textstyle>.mpunct+.mord,.katex .textstyle>.mpunct+.mpunct,.katex .textstyle>.mpunct+.mrel {\r\n    margin-left: .16667em\r\n}\r\n\r\n.katex .textstyle>.minner+.mbin {\r\n    margin-left: .22222em\r\n}\r\n\r\n.katex .textstyle>.minner+.mrel {\r\n    margin-left: .27778em\r\n}\r\n\r\n.katex .mclose+.mop,.katex .minner+.mop,.katex .mop+.mop,.katex .mop+.mord,.katex .mord+.mop,.katex .textstyle>.minner+.minner,.katex .textstyle>.minner+.mopen,.katex .textstyle>.minner+.mpunct {\r\n    margin-left: .16667em\r\n}\r\n\r\n.katex .reset-textstyle.textstyle {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .reset-textstyle.scriptstyle {\r\n    font-size: .7em\r\n}\r\n\r\n.katex .reset-textstyle.scriptscriptstyle {\r\n    font-size: .5em\r\n}\r\n\r\n.katex .reset-scriptstyle.textstyle {\r\n    font-size: 1.42857em\r\n}\r\n\r\n.katex .reset-scriptstyle.scriptstyle {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .reset-scriptstyle.scriptscriptstyle {\r\n    font-size: .71429em\r\n}\r\n\r\n.katex .reset-scriptscriptstyle.textstyle {\r\n    font-size: 2em\r\n}\r\n\r\n.katex .reset-scriptscriptstyle.scriptstyle {\r\n    font-size: 1.4em\r\n}\r\n\r\n.katex .reset-scriptscriptstyle.scriptscriptstyle {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .style-wrap {\r\n    position: relative\r\n}\r\n\r\n.katex .vlist {\r\n    display: inline-block\r\n}\r\n\r\n.katex .vlist>span {\r\n    display: block;\r\n    height: 0;\r\n    position: relative\r\n}\r\n\r\n.katex .vlist>span>span {\r\n    display: inline-block\r\n}\r\n\r\n.katex .vlist .baseline-fix {\r\n    display: inline-table;\r\n    table-layout: fixed\r\n}\r\n\r\n.katex .msupsub {\r\n    text-align: left\r\n}\r\n\r\n.katex .mfrac>span>span {\r\n    text-align: center\r\n}\r\n\r\n.katex .mfrac .frac-line {\r\n    width: 100%\r\n}\r\n\r\n.katex .mfrac .frac-line:before {\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    content: \"\";\r\n    display: block\r\n}\r\n\r\n.katex .mfrac .frac-line:after {\r\n    border-bottom-style: solid;\r\n    border-bottom-width: .04em;\r\n    content: \"\";\r\n    display: block;\r\n    margin-top: -1px\r\n}\r\n\r\n.katex .mspace {\r\n    display: inline-block\r\n}\r\n\r\n.katex .mspace.negativethinspace {\r\n    margin-left: -.16667em\r\n}\r\n\r\n.katex .mspace.thinspace {\r\n    width: .16667em\r\n}\r\n\r\n.katex .mspace.mediumspace {\r\n    width: .22222em\r\n}\r\n\r\n.katex .mspace.thickspace {\r\n    width: .27778em\r\n}\r\n\r\n.katex .mspace.enspace {\r\n    width: .5em\r\n}\r\n\r\n.katex .mspace.quad {\r\n    width: 1em\r\n}\r\n\r\n.katex .mspace.qquad {\r\n    width: 2em\r\n}\r\n\r\n.katex .llap,.katex .rlap {\r\n    width: 0;\r\n    position: relative\r\n}\r\n\r\n.katex .llap>.inner,.katex .rlap>.inner {\r\n    position: absolute\r\n}\r\n\r\n.katex .llap>.fix,.katex .rlap>.fix {\r\n    display: inline-block\r\n}\r\n\r\n.katex .llap>.inner {\r\n    right: 0\r\n}\r\n\r\n.katex .rlap>.inner {\r\n    left: 0\r\n}\r\n\r\n.katex .katex-logo .a {\r\n    font-size: .75em;\r\n    margin-left: -.32em;\r\n    position: relative;\r\n    top: -.2em\r\n}\r\n\r\n.katex .katex-logo .t {\r\n    margin-left: -.23em\r\n}\r\n\r\n.katex .katex-logo .e {\r\n    margin-left: -.1667em;\r\n    position: relative;\r\n    top: .2155em\r\n}\r\n\r\n.katex .katex-logo .x {\r\n    margin-left: -.125em\r\n}\r\n\r\n.katex .rule {\r\n    display: inline-block;\r\n    border-style: solid;\r\n    position: relative\r\n}\r\n\r\n.katex .overline .overline-line {\r\n    width: 100%\r\n}\r\n\r\n.katex .overline .overline-line:before {\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    content: \"\";\r\n    display: block\r\n}\r\n\r\n.katex .overline .overline-line:after {\r\n    border-bottom-style: solid;\r\n    border-bottom-width: .04em;\r\n    content: \"\";\r\n    display: block;\r\n    margin-top: -1px\r\n}\r\n\r\n.katex .sqrt>.sqrt-sign {\r\n    position: relative\r\n}\r\n\r\n.katex .sqrt .sqrt-line {\r\n    width: 100%\r\n}\r\n\r\n.katex .sqrt .sqrt-line:before {\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    content: \"\";\r\n    display: block\r\n}\r\n\r\n.katex .sqrt .sqrt-line:after {\r\n    border-bottom-style: solid;\r\n    border-bottom-width: .04em;\r\n    content: \"\";\r\n    display: block;\r\n    margin-top: -1px\r\n}\r\n\r\n.katex .fontsize-ensurer,.katex .sizing {\r\n    display: inline-block\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2 {\r\n    font-size: 1.4em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3 {\r\n    font-size: 1.6em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4 {\r\n    font-size: 1.8em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5 {\r\n    font-size: 2em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6 {\r\n    font-size: 2.4em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7 {\r\n    font-size: 2.88em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8 {\r\n    font-size: 3.46em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9 {\r\n    font-size: 4.14em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10 {\r\n    font-size: 4.98em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1 {\r\n    font-size: .71428571em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3 {\r\n    font-size: 1.14285714em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4 {\r\n    font-size: 1.28571429em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5 {\r\n    font-size: 1.42857143em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6 {\r\n    font-size: 1.71428571em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7 {\r\n    font-size: 2.05714286em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8 {\r\n    font-size: 2.47142857em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9 {\r\n    font-size: 2.95714286em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10 {\r\n    font-size: 3.55714286em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1 {\r\n    font-size: .625em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2 {\r\n    font-size: .875em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4 {\r\n    font-size: 1.125em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5 {\r\n    font-size: 1.25em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6 {\r\n    font-size: 1.5em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7 {\r\n    font-size: 1.8em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8 {\r\n    font-size: 2.1625em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9 {\r\n    font-size: 2.5875em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10 {\r\n    font-size: 3.1125em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1 {\r\n    font-size: .55555556em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2 {\r\n    font-size: .77777778em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3 {\r\n    font-size: .88888889em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5 {\r\n    font-size: 1.11111111em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6 {\r\n    font-size: 1.33333333em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7 {\r\n    font-size: 1.6em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8 {\r\n    font-size: 1.92222222em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9 {\r\n    font-size: 2.3em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10 {\r\n    font-size: 2.76666667em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1 {\r\n    font-size: .5em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2 {\r\n    font-size: .7em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3 {\r\n    font-size: .8em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4 {\r\n    font-size: .9em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6 {\r\n    font-size: 1.2em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7 {\r\n    font-size: 1.44em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8 {\r\n    font-size: 1.73em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9 {\r\n    font-size: 2.07em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10 {\r\n    font-size: 2.49em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1 {\r\n    font-size: .41666667em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2 {\r\n    font-size: .58333333em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3 {\r\n    font-size: .66666667em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4 {\r\n    font-size: .75em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5 {\r\n    font-size: .83333333em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7 {\r\n    font-size: 1.2em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8 {\r\n    font-size: 1.44166667em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9 {\r\n    font-size: 1.725em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10 {\r\n    font-size: 2.075em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1 {\r\n    font-size: .34722222em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2 {\r\n    font-size: .48611111em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3 {\r\n    font-size: .55555556em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4 {\r\n    font-size: .625em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5 {\r\n    font-size: .69444444em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6 {\r\n    font-size: .83333333em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8 {\r\n    font-size: 1.20138889em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9 {\r\n    font-size: 1.4375em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10 {\r\n    font-size: 1.72916667em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1 {\r\n    font-size: .28901734em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2 {\r\n    font-size: .40462428em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3 {\r\n    font-size: .46242775em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4 {\r\n    font-size: .52023121em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5 {\r\n    font-size: .57803468em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6 {\r\n    font-size: .69364162em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7 {\r\n    font-size: .83236994em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9 {\r\n    font-size: 1.19653179em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10 {\r\n    font-size: 1.43930636em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1 {\r\n    font-size: .24154589em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2 {\r\n    font-size: .33816425em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3 {\r\n    font-size: .38647343em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4 {\r\n    font-size: .43478261em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5 {\r\n    font-size: .48309179em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6 {\r\n    font-size: .57971014em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7 {\r\n    font-size: .69565217em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8 {\r\n    font-size: .83574879em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10 {\r\n    font-size: 1.20289855em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1 {\r\n    font-size: .20080321em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2 {\r\n    font-size: .2811245em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3 {\r\n    font-size: .32128514em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4 {\r\n    font-size: .36144578em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5 {\r\n    font-size: .40160643em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6 {\r\n    font-size: .48192771em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7 {\r\n    font-size: .57831325em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8 {\r\n    font-size: .69477912em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9 {\r\n    font-size: .8313253em\r\n}\r\n\r\n.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10 {\r\n    font-size: 1em\r\n}\r\n\r\n.katex .delimsizing.size1 {\r\n    font-family: KaTeX_Size1\r\n}\r\n\r\n.katex .delimsizing.size2 {\r\n    font-family: KaTeX_Size2\r\n}\r\n\r\n.katex .delimsizing.size3 {\r\n    font-family: KaTeX_Size3\r\n}\r\n\r\n.katex .delimsizing.size4 {\r\n    font-family: KaTeX_Size4\r\n}\r\n\r\n.katex .delimsizing.mult .delim-size1>span {\r\n    font-family: KaTeX_Size1\r\n}\r\n\r\n.katex .delimsizing.mult .delim-size4>span {\r\n    font-family: KaTeX_Size4\r\n}\r\n\r\n.katex .nulldelimiter {\r\n    display: inline-block;\r\n    width: .12em\r\n}\r\n\r\n.katex .op-symbol {\r\n    position: relative\r\n}\r\n\r\n.katex .op-symbol.small-op {\r\n    font-family: KaTeX_Size1\r\n}\r\n\r\n.katex .op-symbol.large-op {\r\n    font-family: KaTeX_Size2\r\n}\r\n\r\n.katex .accent>.vlist>span,.katex .op-limits>.vlist>span {\r\n    text-align: center\r\n}\r\n\r\n.katex .accent .accent-body>span {\r\n    width: 0\r\n}\r\n\r\n.katex .accent .accent-body.accent-vec>span {\r\n    position: relative;\r\n    left: .326em\r\n}\r\n";
        insertCss(css);
      }
    } catch (e) {
      console.log('It was not possible to load the CSS from KaTeX. Details: ' + e);
    }
  };
};

},{"insert-css":2,"katex":3}],2:[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],3:[function(require,module,exports){
/**
 * This is the main entry point for KaTeX. Here, we expose functions for
 * rendering expressions either to DOM nodes or to markup strings.
 *
 * We also expose the ParseError class to check if errors thrown from KaTeX are
 * errors in the expression, or errors in javascript handling.
 */

var ParseError = require("./src/ParseError");
var Settings = require("./src/Settings");

var buildTree = require("./src/buildTree");
var parseTree = require("./src/parseTree");
var utils = require("./src/utils");

/**
 * Parse and build an expression, and place that expression in the DOM node
 * given.
 */
var render = function(expression, baseNode, options) {
    utils.clearNode(baseNode);

    var settings = new Settings(options);

    var tree = parseTree(expression, settings);
    var node = buildTree(tree, expression, settings).toNode();

    baseNode.appendChild(node);
};

// KaTeX's styles don't work properly in quirks mode. Print out an error, and
// disable rendering.
if (typeof document !== "undefined") {
    if (document.compatMode !== "CSS1Compat") {
        typeof console !== "undefined" && console.warn(
            "Warning: KaTeX doesn't work in quirks mode. Make sure your " +
                "website has a suitable doctype.");

        render = function() {
            throw new ParseError("KaTeX doesn't work in quirks mode.");
        };
    }
}

/**
 * Parse and build an expression, and return the markup for that.
 */
var renderToString = function(expression, options) {
    var settings = new Settings(options);

    var tree = parseTree(expression, settings);
    return buildTree(tree, expression, settings).toMarkup();
};

module.exports = {
    render: render,
    renderToString: renderToString,
    ParseError: ParseError
};

},{"./src/ParseError":6,"./src/Settings":8,"./src/buildTree":13,"./src/parseTree":19,"./src/utils":21}],4:[function(require,module,exports){
/**
 * The Lexer class handles tokenizing the input in various ways. Since our
 * parser expects us to be able to backtrack, the lexer allows lexing from any
 * given starting point.
 *
 * Its main exposed function is the `lex` function, which takes a position to
 * lex from and a type of token to lex. It defers to the appropriate `_innerLex`
 * function.
 *
 * The various `_innerLex` functions perform the actual lexing of different
 * kinds.
 */

var ParseError = require("./ParseError");

// The main lexer class
function Lexer(input) {
    this._input = input;
}

// The resulting token returned from `lex`.
function Token(text, data, position) {
    this.text = text;
    this.data = data;
    this.position = position;
}

// "normal" types of tokens. These are tokens which can be matched by a simple
// regex
var mathNormals = [
    /^[/|@.""`0-9a-zA-Z]/, // ords
    /^[*+-]/, // bins
    /^[=<>:]/, // rels
    /^[,;]/, // punctuation
    /^['\^_{}]/, // misc
    /^[(\[]/, // opens
    /^[)\]?!]/, // closes
    /^~/ // spacing
];

// These are "normal" tokens like above, but should instead be parsed in text
// mode.
var textNormals = [
    /^[a-zA-Z0-9`!@*()-=+\[\]'";:?\/.,]/, // ords
    /^[{}]/, // grouping
    /^~/ // spacing
];

// Regexes for matching whitespace
var whitespaceRegex = /^\s*/;
var whitespaceConcatRegex = /^( +|\\  +)/;

// This regex matches any other TeX function, which is a backslash followed by a
// word or a single symbol
var anyFunc = /^\\(?:[a-zA-Z]+|.)/;

/**
 * This function lexes a single normal token. It takes a position, a list of
 * "normal" tokens to try, and whether it should completely ignore whitespace or
 * not.
 */
Lexer.prototype._innerLex = function(pos, normals, ignoreWhitespace) {
    var input = this._input.slice(pos);
    var whitespace;

    if (ignoreWhitespace) {
        // Get rid of whitespace.
        whitespace = input.match(whitespaceRegex)[0];
        pos += whitespace.length;
        input = input.slice(whitespace.length);
    } else {
        // Do the funky concatenation of whitespace that happens in text mode.
        whitespace = input.match(whitespaceConcatRegex);
        if (whitespace !== null) {
            return new Token(" ", null, pos + whitespace[0].length);
        }
    }

    // If there's no more input to parse, return an EOF token
    if (input.length === 0) {
        return new Token("EOF", null, pos);
    }

    var match;
    if ((match = input.match(anyFunc))) {
        // If we match a function token, return it
        return new Token(match[0], null, pos + match[0].length);
    } else {
        // Otherwise, we look through the normal token regexes and see if it's
        // one of them.
        for (var i = 0; i < normals.length; i++) {
            var normal = normals[i];

            if ((match = input.match(normal))) {
                // If it is, return it
                return new Token(
                    match[0], null, pos + match[0].length);
            }
        }
    }

    throw new ParseError("Unexpected character: '" + input[0] +
        "'", this, pos);
};

// A regex to match a CSS color (like #ffffff or BlueViolet)
var cssColor = /^(#[a-z0-9]+|[a-z]+)/i;

/**
 * This function lexes a CSS color.
 */
Lexer.prototype._innerLexColor = function(pos) {
    var input = this._input.slice(pos);

    // Ignore whitespace
    var whitespace = input.match(whitespaceRegex)[0];
    pos += whitespace.length;
    input = input.slice(whitespace.length);

    var match;
    if ((match = input.match(cssColor))) {
        // If we look like a color, return a color
        return new Token(match[0], null, pos + match[0].length);
    } else {
        throw new ParseError("Invalid color", this, pos);
    }
};

// A regex to match a dimension. Dimensions look like
// "1.2em" or ".4pt" or "1 ex"
var sizeRegex = /^(-?)\s*(\d+(?:\.\d*)?|\.\d+)\s*([a-z]{2})/;

/**
 * This function lexes a dimension.
 */
Lexer.prototype._innerLexSize = function(pos) {
    var input = this._input.slice(pos);

    // Ignore whitespace
    var whitespace = input.match(whitespaceRegex)[0];
    pos += whitespace.length;
    input = input.slice(whitespace.length);

    var match;
    if ((match = input.match(sizeRegex))) {
        var unit = match[3];
        // We only currently handle "em" and "ex" units
        if (unit !== "em" && unit !== "ex") {
            throw new ParseError("Invalid unit: '" + unit + "'", this, pos);
        }
        return new Token(match[0], {
                number: +(match[1] + match[2]),
                unit: unit
            }, pos + match[0].length);
    }

    throw new ParseError("Invalid size", this, pos);
};

/**
 * This function lexes a string of whitespace.
 */
Lexer.prototype._innerLexWhitespace = function(pos) {
    var input = this._input.slice(pos);

    var whitespace = input.match(whitespaceRegex)[0];
    pos += whitespace.length;

    return new Token(whitespace, null, pos);
};

/**
 * This function lexes a single token starting at `pos` and of the given mode.
 * Based on the mode, we defer to one of the `_innerLex` functions.
 */
Lexer.prototype.lex = function(pos, mode) {
    if (mode === "math") {
        return this._innerLex(pos, mathNormals, true);
    } else if (mode === "text") {
        return this._innerLex(pos, textNormals, false);
    } else if (mode === "color") {
        return this._innerLexColor(pos);
    } else if (mode === "size") {
        return this._innerLexSize(pos);
    } else if (mode === "whitespace") {
        return this._innerLexWhitespace(pos);
    }
};

module.exports = Lexer;

},{"./ParseError":6}],5:[function(require,module,exports){
/**
 * This file contains information about the options that the Parser carries
 * around with it while parsing. Data is held in an `Options` object, and when
 * recursing, a new `Options` object can be created with the `.with*` and
 * `.reset` functions.
 */

/**
 * This is the main options class. It contains the style, size, and color of the
 * current parse level. It also contains the style and size of the parent parse
 * level, so size changes can be handled efficiently.
 *
 * Each of the `.with*` and `.reset` functions passes its current style and size
 * as the parentStyle and parentSize of the new options class, so parent
 * handling is taken care of automatically.
 */
function Options(style, size, color, parentStyle, parentSize) {
    this.style = style;
    this.color = color;
    this.size = size;

    if (parentStyle === undefined) {
        parentStyle = style;
    }
    this.parentStyle = parentStyle;

    if (parentSize === undefined) {
        parentSize = size;
    }
    this.parentSize = parentSize;
}

/**
 * Create a new options object with the given style.
 */
Options.prototype.withStyle = function(style) {
    return new Options(style, this.size, this.color, this.style, this.size);
};

/**
 * Create a new options object with the given size.
 */
Options.prototype.withSize = function(size) {
    return new Options(this.style, size, this.color, this.style, this.size);
};

/**
 * Create a new options object with the given color.
 */
Options.prototype.withColor = function(color) {
    return new Options(this.style, this.size, color, this.style, this.size);
};

/**
 * Create a new options object with the same style, size, and color. This is
 * used so that parent style and size changes are handled correctly.
 */
Options.prototype.reset = function() {
    return new Options(
        this.style, this.size, this.color, this.style, this.size);
};

/**
 * A map of color names to CSS colors.
 * TODO(emily): Remove this when we have real macros
 */
var colorMap = {
    "katex-blue": "#6495ed",
    "katex-orange": "#ffa500",
    "katex-pink": "#ff00af",
    "katex-red": "#df0030",
    "katex-green": "#28ae7b",
    "katex-gray": "gray",
    "katex-purple": "#9d38bd"
};

/**
 * Gets the CSS color of the current options object, accounting for the
 * `colorMap`.
 */
Options.prototype.getColor = function() {
    return colorMap[this.color] || this.color;
};

module.exports = Options;

},{}],6:[function(require,module,exports){
/**
 * This is the ParseError class, which is the main error thrown by KaTeX
 * functions when something has gone wrong. This is used to distinguish internal
 * errors from errors in the expression that the user provided.
 */
function ParseError(message, lexer, position) {
    var error = "KaTeX parse error: " + message;

    if (lexer !== undefined && position !== undefined) {
        // If we have the input and a position, make the error a bit fancier

        // Prepend some information
        error += " at position " + position + ": ";

        // Get the input
        var input = lexer._input;
        // Insert a combining underscore at the correct position
        input = input.slice(0, position) + "\u0332" +
            input.slice(position);

        // Extract some context from the input and add it to the error
        var begin = Math.max(0, position - 15);
        var end = position + 15;
        error += input.slice(begin, end);
    }

    // Some hackery to make ParseError a prototype of Error
    // See http://stackoverflow.com/a/8460753
    var self = new Error(error);
    self.name = "ParseError";
    self.__proto__ = ParseError.prototype;

    self.position = position;
    return self;
}

// More hackery
ParseError.prototype.__proto__ = Error.prototype;

module.exports = ParseError;

},{}],7:[function(require,module,exports){
var functions = require("./functions");
var Lexer = require("./Lexer");
var symbols = require("./symbols");
var utils = require("./utils");

var ParseError = require("./ParseError");

/**
 * This file contains the parser used to parse out a TeX expression from the
 * input. Since TeX isn't context-free, standard parsers don't work particularly
 * well.
 *
 * The strategy of this parser is as such:
 *
 * The main functions (the `.parse...` ones) take a position in the current
 * parse string to parse tokens from. The lexer (found in Lexer.js, stored at
 * this.lexer) also supports pulling out tokens at arbitrary places. When
 * individual tokens are needed at a position, the lexer is called to pull out a
 * token, which is then used.
 *
 * The main functions also take a mode that the parser is currently in
 * (currently "math" or "text"), which denotes whether the current environment
 * is a math-y one or a text-y one (e.g. inside \text). Currently, this serves
 * to limit the functions which can be used in text mode.
 *
 * The main functions then return an object which contains the useful data that
 * was parsed at its given point, and a new position at the end of the parsed
 * data. The main functions can call each other and continue the parsing by
 * using the returned position as a new starting point.
 *
 * There are also extra `.handle...` functions, which pull out some reused
 * functionality into self-contained functions.
 *
 * The earlier functions return `ParseResult`s, which contain a ParseNode and a
 * new position.
 *
 * The later functions (which are called deeper in the parse) sometimes return
 * ParseFuncOrArgument, which contain a ParseResult as well as some data about
 * whether the parsed object is a function which is missing some arguments, or a
 * standalone object which can be used as an argument to another function.
 */

/**
 * Main Parser class
 */
function Parser(input, settings) {
    // Make a new lexer
    this.lexer = new Lexer(input);
    // Store the settings for use in parsing
    this.settings = settings;
}

/**
 * The resulting parse tree nodes of the parse tree.
 */
function ParseNode(type, value, mode) {
    this.type = type;
    this.value = value;
    this.mode = mode;
}

/**
 * A result and final position returned by the `.parse...` functions.
 */
function ParseResult(result, newPosition) {
    this.result = result;
    this.position = newPosition;
}

/**
 * An initial function (without its arguments), or an argument to a function.
 * The `result` argument should be a ParseResult.
 */
function ParseFuncOrArgument(result, isFunction) {
    this.result = result;
    // Is this a function (i.e. is it something defined in functions.js)?
    this.isFunction = isFunction;
}

/**
 * Checks a result to make sure it has the right type, and throws an
 * appropriate error otherwise.
 */
Parser.prototype.expect = function(result, text) {
    if (result.text !== text) {
        throw new ParseError(
            "Expected '" + text + "', got '" + result.text + "'",
            this.lexer, result.position
        );
    }
};

/**
 * Main parsing function, which parses an entire input.
 *
 * @return {?Array.<ParseNode>}
 */
Parser.prototype.parse = function(input) {
    // Try to parse the input
    var parse = this.parseInput(0, "math");
    return parse.result;
};

/**
 * Parses an entire input tree.
 */
Parser.prototype.parseInput = function(pos, mode) {
    // Parse an expression
    var expression = this.parseExpression(pos, mode, false, null);
    // If we succeeded, make sure there's an EOF at the end
    var EOF = this.lexer.lex(expression.position, mode);
    this.expect(EOF, "EOF");
    return expression;
};

/**
 * Parses an "expression", which is a list of atoms.
 *
 * @param {boolean} breakOnInfix Should the parsing stop when we hit infix
 *                  nodes? This happens when functions have higher precendence
 *                  than infix nodes in implicit parses.
 *
 * @param {?string} breakOnToken The token that the expression should end with,
 *                  or `null` if something else should end the expression.
 *
 * @return {ParseResult}
 */
Parser.prototype.parseExpression = function(pos, mode, breakOnInfix, breakOnToken) {
    var body = [];
    // Keep adding atoms to the body until we can't parse any more atoms (either
    // we reached the end, a }, or a \right)
    while (true) {
        var lex = this.lexer.lex(pos, mode);
        if (breakOnToken != null && lex.text === breakOnToken) {
            break;
        }
        var atom = this.parseAtom(pos, mode);
        if (!atom) {
            break;
        }
        if (breakOnInfix && atom.result.type === "infix") {
            break;
        }
        body.push(atom.result);
        pos = atom.position;
    }
    return new ParseResult(this.handleInfixNodes(body, mode), pos);
};

/**
 * Rewrites infix operators such as \over with corresponding commands such
 * as \frac.
 *
 * There can only be one infix operator per group.  If there's more than one
 * then the expression is ambiguous.  This can be resolved by adding {}.
 *
 * @returns {Array}
 */
Parser.prototype.handleInfixNodes = function (body, mode) {
    var overIndex = -1;
    var func;
    var funcName;

    for (var i = 0; i < body.length; i++) {
        var node = body[i];
        if (node.type === "infix") {
            if (overIndex !== -1) {
                throw new ParseError("only one infix operator per group",
                    this.lexer, -1);
            }
            overIndex = i;
            funcName = node.value.replaceWith;
            func = functions.funcs[funcName];
        }
    }

    if (overIndex !== -1) {
        var numerNode, denomNode;

        var numerBody = body.slice(0, overIndex);
        var denomBody = body.slice(overIndex + 1);

        if (numerBody.length === 1 && numerBody[0].type === "ordgroup") {
            numerNode = numerBody[0];
        } else {
            numerNode = new ParseNode("ordgroup", numerBody, mode);
        }

        if (denomBody.length === 1 && denomBody[0].type === "ordgroup") {
            denomNode = denomBody[0];
        } else {
            denomNode = new ParseNode("ordgroup", denomBody, mode);
        }

        var value = func.handler(funcName, numerNode, denomNode);
        return [new ParseNode(value.type, value, mode)];
    } else {
        return body;
    }
};

// The greediness of a superscript or subscript
var SUPSUB_GREEDINESS = 1;

/**
 * Handle a subscript or superscript with nice errors.
 */
Parser.prototype.handleSupSubscript = function(pos, mode, symbol, name) {
    var group = this.parseGroup(pos, mode);

    if (!group) {
        throw new ParseError(
            "Expected group after '" + symbol + "'", this.lexer, pos);
    } else if (group.isFunction) {
        // ^ and _ have a greediness, so handle interactions with functions'
        // greediness
        var funcGreediness = functions.funcs[group.result.result].greediness;
        if (funcGreediness > SUPSUB_GREEDINESS) {
            return this.parseFunction(pos, mode);
        } else {
            throw new ParseError(
                "Got function '" + group.result.result + "' with no arguments " +
                    "as " + name,
                this.lexer, pos);
        }
    } else {
        return group.result;
    }
};

/**
 * Parses a group with optional super/subscripts.
 *
 * @return {?ParseResult}
 */
Parser.prototype.parseAtom = function(pos, mode) {
    // The body of an atom is an implicit group, so that things like
    // \left(x\right)^2 work correctly.
    var base = this.parseImplicitGroup(pos, mode);

    // In text mode, we don't have superscripts or subscripts
    if (mode === "text") {
        return base;
    }

    // Handle an empty base
    var currPos;
    if (!base) {
        currPos = pos;
        base = undefined;
    } else {
        currPos = base.position;
    }

    var superscript;
    var subscript;
    var result;
    while (true) {
        // Lex the first token
        var lex = this.lexer.lex(currPos, mode);

        if (lex.text === "^") {
            // We got a superscript start
            if (superscript) {
                throw new ParseError(
                    "Double superscript", this.lexer, currPos);
            }
            result = this.handleSupSubscript(
                lex.position, mode, lex.text, "superscript");
            currPos = result.position;
            superscript = result.result;
        } else if (lex.text === "_") {
            // We got a subscript start
            if (subscript) {
                throw new ParseError(
                    "Double subscript", this.lexer, currPos);
            }
            result = this.handleSupSubscript(
                lex.position, mode, lex.text, "subscript");
            currPos = result.position;
            subscript = result.result;
        } else if (lex.text === "'") {
            // We got a prime
            var prime = new ParseNode("textord", "\\prime", mode);

            // Many primes can be grouped together, so we handle this here
            var primes = [prime];
            currPos = lex.position;
            // Keep lexing tokens until we get something that's not a prime
            while ((lex = this.lexer.lex(currPos, mode)).text === "'") {
                // For each one, add another prime to the list
                primes.push(prime);
                currPos = lex.position;
            }
            // Put them into an ordgroup as the superscript
            superscript = new ParseNode("ordgroup", primes, mode);
        } else {
            // If it wasn't ^, _, or ', stop parsing super/subscripts
            break;
        }
    }

    if (superscript || subscript) {
        // If we got either a superscript or subscript, create a supsub
        return new ParseResult(
            new ParseNode("supsub", {
                base: base && base.result,
                sup: superscript,
                sub: subscript
            }, mode),
            currPos);
    } else {
        // Otherwise return the original body
        return base;
    }
};

// A list of the size-changing functions, for use in parseImplicitGroup
var sizeFuncs = [
    "\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize",
    "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"
];

// A list of the style-changing functions, for use in parseImplicitGroup
var styleFuncs = [
    "\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"
];

/**
 * Parses an implicit group, which is a group that starts at the end of a
 * specified, and ends right before a higher explicit group ends, or at EOL. It
 * is used for functions that appear to affect the current style, like \Large or
 * \textrm, where instead of keeping a style we just pretend that there is an
 * implicit grouping after it until the end of the group. E.g.
 *   small text {\Large large text} small text again
 * It is also used for \left and \right to get the correct grouping.
 *
 * @return {?ParseResult}
 */
Parser.prototype.parseImplicitGroup = function(pos, mode) {
    var start = this.parseSymbol(pos, mode);

    if (!start || !start.result) {
        // If we didn't get anything we handle, fall back to parseFunction
        return this.parseFunction(pos, mode);
    }

    var func = start.result.result;
    var body;

    if (func === "\\left") {
        // If we see a left:
        // Parse the entire left function (including the delimiter)
        var left = this.parseFunction(pos, mode);
        // Parse out the implicit body
        body = this.parseExpression(left.position, mode, false, "}");
        // Check the next token
        var rightLex = this.parseSymbol(body.position, mode);

        if (rightLex && rightLex.result.result === "\\right") {
            // If it's a \right, parse the entire right function (including the delimiter)
            var right = this.parseFunction(body.position, mode);

            return new ParseResult(
                new ParseNode("leftright", {
                    body: body.result,
                    left: left.result.value.value,
                    right: right.result.value.value
                }, mode),
                right.position);
        } else {
            throw new ParseError("Missing \\right", this.lexer, body.position);
        }
    } else if (func === "\\right") {
        // If we see a right, explicitly fail the parsing here so the \left
        // handling ends the group
        return null;
    } else if (utils.contains(sizeFuncs, func)) {
        // If we see a sizing function, parse out the implict body
        body = this.parseExpression(start.result.position, mode, false, "}");
        return new ParseResult(
            new ParseNode("sizing", {
                // Figure out what size to use based on the list of functions above
                size: "size" + (utils.indexOf(sizeFuncs, func) + 1),
                value: body.result
            }, mode),
            body.position);
    } else if (utils.contains(styleFuncs, func)) {
        // If we see a styling function, parse out the implict body
        body = this.parseExpression(start.result.position, mode, true, "}");
        return new ParseResult(
            new ParseNode("styling", {
                // Figure out what style to use by pulling out the style from
                // the function name
                style: func.slice(1, func.length - 5),
                value: body.result
            }, mode),
            body.position);
    } else {
        // Defer to parseFunction if it's not a function we handle
        return this.parseFunction(pos, mode);
    }
};

/**
 * Parses an entire function, including its base and all of its arguments
 *
 * @return {?ParseResult}
 */
Parser.prototype.parseFunction = function(pos, mode) {
    var baseGroup = this.parseGroup(pos, mode);

    if (baseGroup) {
        if (baseGroup.isFunction) {
            var func = baseGroup.result.result;
            var funcData = functions.funcs[func];
            if (mode === "text" && !funcData.allowedInText) {
                throw new ParseError(
                    "Can't use function '" + func + "' in text mode",
                    this.lexer, baseGroup.position);
            }

            var newPos = baseGroup.result.position;
            var result;

            var totalArgs = funcData.numArgs + funcData.numOptionalArgs;

            if (totalArgs > 0) {
                var baseGreediness = funcData.greediness;
                var args = [func];
                var positions = [newPos];

                for (var i = 0; i < totalArgs; i++) {
                    var argType = funcData.argTypes && funcData.argTypes[i];
                    var arg;
                    if (i < funcData.numOptionalArgs) {
                        if (argType) {
                            arg = this.parseSpecialGroup(newPos, argType, mode, true);
                        } else {
                            arg = this.parseOptionalGroup(newPos, mode);
                        }
                        if (!arg) {
                            args.push(null);
                            positions.push(newPos);
                            continue;
                        }
                    } else {
                        if (argType) {
                            arg = this.parseSpecialGroup(newPos, argType, mode);
                        } else {
                            arg = this.parseGroup(newPos, mode);
                        }
                        if (!arg) {
                            throw new ParseError(
                                "Expected group after '" + baseGroup.result.result +
                                    "'",
                                this.lexer, newPos);
                        }
                    }
                    var argNode;
                    if (arg.isFunction) {
                        var argGreediness =
                            functions.funcs[arg.result.result].greediness;
                        if (argGreediness > baseGreediness) {
                            argNode = this.parseFunction(newPos, mode);
                        } else {
                            throw new ParseError(
                                "Got function '" + arg.result.result + "' as " +
                                    "argument to function '" +
                                    baseGroup.result.result + "'",
                                this.lexer, arg.result.position - 1);
                        }
                    } else {
                        argNode = arg.result;
                    }
                    args.push(argNode.result);
                    positions.push(argNode.position);
                    newPos = argNode.position;
                }

                args.push(positions);

                result = functions.funcs[func].handler.apply(this, args);
            } else {
                result = functions.funcs[func].handler.apply(this, [func]);
            }

            return new ParseResult(
                new ParseNode(result.type, result, mode),
                newPos);
        } else {
            return baseGroup.result;
        }
    } else {
        return null;
    }
};

/**
 * Parses a group when the mode is changing. Takes a position, a new mode, and
 * an outer mode that is used to parse the outside.
 *
 * @return {?ParseFuncOrArgument}
 */
Parser.prototype.parseSpecialGroup = function(pos, mode, outerMode, optional) {
    // Handle `original` argTypes
    if (mode === "original") {
        mode = outerMode;
    }

    if (mode === "color" || mode === "size") {
        // color and size modes are special because they should have braces and
        // should only lex a single symbol inside
        var openBrace = this.lexer.lex(pos, outerMode);
        if (optional && openBrace.text !== "[") {
            // optional arguments should return null if they don't exist
            return null;
        }
        this.expect(openBrace, optional ? "[" : "{");
        var inner = this.lexer.lex(openBrace.position, mode);
        var data;
        if (mode === "color") {
            data = inner.text;
        } else {
            data = inner.data;
        }
        var closeBrace = this.lexer.lex(inner.position, outerMode);
        this.expect(closeBrace, optional ? "]" : "}");
        return new ParseFuncOrArgument(
            new ParseResult(
                new ParseNode(mode, data, outerMode),
                closeBrace.position),
            false);
    } else if (mode === "text") {
        // text mode is special because it should ignore the whitespace before
        // it
        var whitespace = this.lexer.lex(pos, "whitespace");
        pos = whitespace.position;
    }

    if (optional) {
        return this.parseOptionalGroup(pos, mode);
    } else {
        return this.parseGroup(pos, mode);
    }
};

/**
 * Parses a group, which is either a single nucleus (like "x") or an expression
 * in braces (like "{x+y}")
 *
 * @return {?ParseFuncOrArgument}
 */
Parser.prototype.parseGroup = function(pos, mode) {
    var start = this.lexer.lex(pos, mode);
    // Try to parse an open brace
    if (start.text === "{") {
        // If we get a brace, parse an expression
        var expression = this.parseExpression(start.position, mode, false, "}");
        // Make sure we get a close brace
        var closeBrace = this.lexer.lex(expression.position, mode);
        this.expect(closeBrace, "}");
        return new ParseFuncOrArgument(
            new ParseResult(
                new ParseNode("ordgroup", expression.result, mode),
                closeBrace.position),
            false);
    } else {
        // Otherwise, just return a nucleus
        return this.parseSymbol(pos, mode);
    }
};

/**
 * Parses a group, which is an expression in brackets (like "[x+y]")
 *
 * @return {?ParseFuncOrArgument}
 */
Parser.prototype.parseOptionalGroup = function(pos, mode) {
    var start = this.lexer.lex(pos, mode);
    // Try to parse an open bracket
    if (start.text === "[") {
        // If we get a brace, parse an expression
        var expression = this.parseExpression(start.position, mode, false, "]");
        // Make sure we get a close bracket
        var closeBracket = this.lexer.lex(expression.position, mode);
        this.expect(closeBracket, "]");
        return new ParseFuncOrArgument(
            new ParseResult(
                new ParseNode("ordgroup", expression.result, mode),
                closeBracket.position),
            false);
    } else {
        // Otherwise, return null,
        return null;
    }
};

/**
 * Parse a single symbol out of the string. Here, we handle both the functions
 * we have defined, as well as the single character symbols
 *
 * @return {?ParseFuncOrArgument}
 */
Parser.prototype.parseSymbol = function(pos, mode) {
    var nucleus = this.lexer.lex(pos, mode);

    if (functions.funcs[nucleus.text]) {
        // If there exists a function with this name, we return the function and
        // say that it is a function.
        return new ParseFuncOrArgument(
            new ParseResult(nucleus.text, nucleus.position),
            true);
    } else if (symbols[mode][nucleus.text]) {
        // Otherwise if this is a no-argument function, find the type it
        // corresponds to in the symbols map
        return new ParseFuncOrArgument(
            new ParseResult(
                new ParseNode(symbols[mode][nucleus.text].group,
                              nucleus.text, mode),
                nucleus.position),
            false);
    } else {
        return null;
    }
};

module.exports = Parser;

},{"./Lexer":4,"./ParseError":6,"./functions":17,"./symbols":20,"./utils":21}],8:[function(require,module,exports){
/**
 * This is a module for storing settings passed into KaTeX. It correctly handles
 * default settings.
 */

/**
 * Helper function for getting a default value if the value is undefined
 */
function get(option, defaultValue) {
    return option === undefined ? defaultValue : option;
}

/**
 * The main Settings object
 *
 * The current options stored are:
 *  - displayMode: Whether the expression should be typeset by default in
 *                 textstyle or displaystyle (default false)
 */
function Settings(options) {
    // allow null options
    options = options || {};
    this.displayMode = get(options.displayMode, false);
}

module.exports = Settings;

},{}],9:[function(require,module,exports){
/**
 * This file contains information and classes for the various kinds of styles
 * used in TeX. It provides a generic `Style` class, which holds information
 * about a specific style. It then provides instances of all the different kinds
 * of styles possible, and provides functions to move between them and get
 * information about them.
 */

/**
 * The main style class. Contains a unique id for the style, a size (which is
 * the same for cramped and uncramped version of a style), a cramped flag, and a
 * size multiplier, which gives the size difference between a style and
 * textstyle.
 */
function Style(id, size, multiplier, cramped) {
    this.id = id;
    this.size = size;
    this.cramped = cramped;
    this.sizeMultiplier = multiplier;
}

/**
 * Get the style of a superscript given a base in the current style.
 */
Style.prototype.sup = function() {
    return styles[sup[this.id]];
};

/**
 * Get the style of a subscript given a base in the current style.
 */
Style.prototype.sub = function() {
    return styles[sub[this.id]];
};

/**
 * Get the style of a fraction numerator given the fraction in the current
 * style.
 */
Style.prototype.fracNum = function() {
    return styles[fracNum[this.id]];
};

/**
 * Get the style of a fraction denominator given the fraction in the current
 * style.
 */
Style.prototype.fracDen = function() {
    return styles[fracDen[this.id]];
};

/**
 * Get the cramped version of a style (in particular, cramping a cramped style
 * doesn't change the style).
 */
Style.prototype.cramp = function() {
    return styles[cramp[this.id]];
};

/**
 * HTML class name, like "displaystyle cramped"
 */
Style.prototype.cls = function() {
    return sizeNames[this.size] + (this.cramped ? " cramped" : " uncramped");
};

/**
 * HTML Reset class name, like "reset-textstyle"
 */
Style.prototype.reset = function() {
    return resetNames[this.size];
};

// IDs of the different styles
var D = 0;
var Dc = 1;
var T = 2;
var Tc = 3;
var S = 4;
var Sc = 5;
var SS = 6;
var SSc = 7;

// String names for the different sizes
var sizeNames = [
    "displaystyle textstyle",
    "textstyle",
    "scriptstyle",
    "scriptscriptstyle"
];

// Reset names for the different sizes
var resetNames = [
    "reset-textstyle",
    "reset-textstyle",
    "reset-scriptstyle",
    "reset-scriptscriptstyle"
];

// Instances of the different styles
var styles = [
    new Style(D, 0, 1.0, false),
    new Style(Dc, 0, 1.0, true),
    new Style(T, 1, 1.0, false),
    new Style(Tc, 1, 1.0, true),
    new Style(S, 2, 0.7, false),
    new Style(Sc, 2, 0.7, true),
    new Style(SS, 3, 0.5, false),
    new Style(SSc, 3, 0.5, true)
];

// Lookup tables for switching from one style to another
var sup = [S, Sc, S, Sc, SS, SSc, SS, SSc];
var sub = [Sc, Sc, Sc, Sc, SSc, SSc, SSc, SSc];
var fracNum = [T, Tc, S, Sc, SS, SSc, SS, SSc];
var fracDen = [Tc, Tc, Sc, Sc, SSc, SSc, SSc, SSc];
var cramp = [Dc, Dc, Tc, Tc, Sc, Sc, SSc, SSc];

// We only export some of the styles. Also, we don't export the `Style` class so
// no more styles can be generated.
module.exports = {
    DISPLAY: styles[D],
    TEXT: styles[T],
    SCRIPT: styles[S],
    SCRIPTSCRIPT: styles[SS]
};

},{}],10:[function(require,module,exports){
/**
 * This module contains general functions that can be used for building
 * different kinds of domTree nodes in a consistent manner.
 */

var domTree = require("./domTree");
var fontMetrics = require("./fontMetrics");
var symbols = require("./symbols");

/**
 * Makes a symbolNode after translation via the list of symbols in symbols.js.
 * Correctly pulls out metrics for the character, and optionally takes a list of
 * classes to be attached to the node.
 */
var makeSymbol = function(value, style, mode, color, classes) {
    // Replace the value with its replaced value from symbol.js
    if (symbols[mode][value] && symbols[mode][value].replace) {
        value = symbols[mode][value].replace;
    }

    var metrics = fontMetrics.getCharacterMetrics(value, style);

    var symbolNode;
    if (metrics) {
        symbolNode = new domTree.symbolNode(
            value, metrics.height, metrics.depth, metrics.italic, metrics.skew,
            classes);
    } else {
        // TODO(emily): Figure out a good way to only print this in development
        typeof console !== "undefined" && console.warn(
            "No character metrics for '" + value + "' in style '" +
                style + "'");
        symbolNode = new domTree.symbolNode(value, 0, 0, 0, 0, classes);
    }

    if (color) {
        symbolNode.style.color = color;
    }

    return symbolNode;
};

/**
 * Makes a symbol in the italic math font.
 */
var mathit = function(value, mode, color, classes) {
    return makeSymbol(
        value, "Math-Italic", mode, color, classes.concat(["mathit"]));
};

/**
 * Makes a symbol in the upright roman font.
 */
var mathrm = function(value, mode, color, classes) {
    // Decide what font to render the symbol in by its entry in the symbols
    // table.
    if (symbols[mode][value].font === "main") {
        return makeSymbol(value, "Main-Regular", mode, color, classes);
    } else {
        return makeSymbol(
            value, "AMS-Regular", mode, color, classes.concat(["amsrm"]));
    }
};

/**
 * Calculate the height, depth, and maxFontSize of an element based on its
 * children.
 */
var sizeElementFromChildren = function(elem) {
    var height = 0;
    var depth = 0;
    var maxFontSize = 0;

    if (elem.children) {
        for (var i = 0; i < elem.children.length; i++) {
            if (elem.children[i].height > height) {
                height = elem.children[i].height;
            }
            if (elem.children[i].depth > depth) {
                depth = elem.children[i].depth;
            }
            if (elem.children[i].maxFontSize > maxFontSize) {
                maxFontSize = elem.children[i].maxFontSize;
            }
        }
    }

    elem.height = height;
    elem.depth = depth;
    elem.maxFontSize = maxFontSize;
};

/**
 * Makes a span with the given list of classes, list of children, and color.
 */
var makeSpan = function(classes, children, color) {
    var span = new domTree.span(classes, children);

    sizeElementFromChildren(span);

    if (color) {
        span.style.color = color;
    }

    return span;
};

/**
 * Makes a document fragment with the given list of children.
 */
var makeFragment = function(children) {
    var fragment = new domTree.documentFragment(children);

    sizeElementFromChildren(fragment);

    return fragment;
};

/**
 * Makes an element placed in each of the vlist elements to ensure that each
 * element has the same max font size. To do this, we create a zero-width space
 * with the correct font size.
 */
var makeFontSizer = function(options, fontSize) {
    var fontSizeInner = makeSpan([], [new domTree.symbolNode("\u200b")]);
    fontSizeInner.style.fontSize = (fontSize / options.style.sizeMultiplier) + "em";

    var fontSizer = makeSpan(
        ["fontsize-ensurer", "reset-" + options.size, "size5"],
        [fontSizeInner]);

    return fontSizer;
};

/**
 * Makes a vertical list by stacking elements and kerns on top of each other.
 * Allows for many different ways of specifying the positioning method.
 *
 * Arguments:
 *  - children: A list of child or kern nodes to be stacked on top of each other
 *              (i.e. the first element will be at the bottom, and the last at
 *              the top). Element nodes are specified as
 *                {type: "elem", elem: node}
 *              while kern nodes are specified as
 *                {type: "kern", size: size}
 *  - positionType: The method by which the vlist should be positioned. Valid
 *                  values are:
 *                   - "individualShift": The children list only contains elem
 *                                        nodes, and each node contains an extra
 *                                        "shift" value of how much it should be
 *                                        shifted (note that shifting is always
 *                                        moving downwards). positionData is
 *                                        ignored.
 *                   - "top": The positionData specifies the topmost point of
 *                            the vlist (note this is expected to be a height,
 *                            so positive values move up)
 *                   - "bottom": The positionData specifies the bottommost point
 *                               of the vlist (note this is expected to be a
 *                               depth, so positive values move down
 *                   - "shift": The vlist will be positioned such that its
 *                              baseline is positionData away from the baseline
 *                              of the first child. Positive values move
 *                              downwards.
 *                   - "firstBaseline": The vlist will be positioned such that
 *                                      its baseline is aligned with the
 *                                      baseline of the first child.
 *                                      positionData is ignored. (this is
 *                                      equivalent to "shift" with
 *                                      positionData=0)
 *  - positionData: Data used in different ways depending on positionType
 *  - options: An Options object
 *
 */
var makeVList = function(children, positionType, positionData, options) {
    var depth;
    var currPos;
    var i;
    if (positionType === "individualShift") {
        var oldChildren = children;
        children = [oldChildren[0]];

        // Add in kerns to the list of children to get each element to be
        // shifted to the correct specified shift
        depth = -oldChildren[0].shift - oldChildren[0].elem.depth;
        currPos = depth;
        for (i = 1; i < oldChildren.length; i++) {
            var diff = -oldChildren[i].shift - currPos -
                oldChildren[i].elem.depth;
            var size = diff -
                (oldChildren[i - 1].elem.height +
                 oldChildren[i - 1].elem.depth);

            currPos = currPos + diff;

            children.push({type: "kern", size: size});
            children.push(oldChildren[i]);
        }
    } else if (positionType === "top") {
        // We always start at the bottom, so calculate the bottom by adding up
        // all the sizes
        var bottom = positionData;
        for (i = 0; i < children.length; i++) {
            if (children[i].type === "kern") {
                bottom -= children[i].size;
            } else {
                bottom -= children[i].elem.height + children[i].elem.depth;
            }
        }
        depth = bottom;
    } else if (positionType === "bottom") {
        depth = -positionData;
    } else if (positionType === "shift") {
        depth = -children[0].elem.depth - positionData;
    } else if (positionType === "firstBaseline") {
        depth = -children[0].elem.depth;
    } else {
        depth = 0;
    }

    // Make the fontSizer
    var maxFontSize = 0;
    for (i = 0; i < children.length; i++) {
        if (children[i].type === "elem") {
            maxFontSize = Math.max(maxFontSize, children[i].elem.maxFontSize);
        }
    }
    var fontSizer = makeFontSizer(options, maxFontSize);

    // Create a new list of actual children at the correct offsets
    var realChildren = [];
    currPos = depth;
    for (i = 0; i < children.length; i++) {
        if (children[i].type === "kern") {
            currPos += children[i].size;
        } else {
            var child = children[i].elem;

            var shift = -child.depth - currPos;
            currPos += child.height + child.depth;

            var childWrap = makeSpan([], [fontSizer, child]);
            childWrap.height -= shift;
            childWrap.depth += shift;
            childWrap.style.top = shift + "em";

            realChildren.push(childWrap);
        }
    }

    // Add in an element at the end with no offset to fix the calculation of
    // baselines in some browsers (namely IE, sometimes safari)
    var baselineFix = makeSpan(
        ["baseline-fix"], [fontSizer, new domTree.symbolNode("\u200b")]);
    realChildren.push(baselineFix);

    var vlist = makeSpan(["vlist"], realChildren);
    // Fix the final height and depth, in case there were kerns at the ends
    // since the makeSpan calculation won't take that in to account.
    vlist.height = Math.max(currPos, vlist.height);
    vlist.depth = Math.max(-depth, vlist.depth);
    return vlist;
};

// A table of size -> font size for the different sizing functions
var sizingMultiplier = {
    size1: 0.5,
    size2: 0.7,
    size3: 0.8,
    size4: 0.9,
    size5: 1.0,
    size6: 1.2,
    size7: 1.44,
    size8: 1.73,
    size9: 2.07,
    size10: 2.49
};

// A map of spacing functions to their attributes, like size and corresponding
// CSS class
var spacingFunctions = {
    "\\qquad": {
        size: "2em",
        className: "qquad"
    },
    "\\quad": {
        size: "1em",
        className: "quad"
    },
    "\\enspace": {
        size: "0.5em",
        className: "enspace"
    },
    "\\;": {
        size: "0.277778em",
        className: "thickspace"
    },
    "\\:": {
        size: "0.22222em",
        className: "mediumspace"
    },
    "\\,": {
        size: "0.16667em",
        className: "thinspace"
    },
    "\\!": {
        size: "-0.16667em",
        className: "negativethinspace"
    }
};

module.exports = {
    makeSymbol: makeSymbol,
    mathit: mathit,
    mathrm: mathrm,
    makeSpan: makeSpan,
    makeFragment: makeFragment,
    makeVList: makeVList,
    sizingMultiplier: sizingMultiplier,
    spacingFunctions: spacingFunctions
};

},{"./domTree":15,"./fontMetrics":16,"./symbols":20}],11:[function(require,module,exports){
/**
 * This file does the main work of building a domTree structure from a parse
 * tree. The entry point is the `buildHTML` function, which takes a parse tree.
 * Then, the buildExpression, buildGroup, and various groupTypes functions are
 * called, to produce a final HTML tree.
 */

var Options = require("./Options");
var ParseError = require("./ParseError");
var Style = require("./Style");

var buildCommon = require("./buildCommon");
var delimiter = require("./delimiter");
var domTree = require("./domTree");
var fontMetrics = require("./fontMetrics");
var utils = require("./utils");

var makeSpan = buildCommon.makeSpan;

/**
 * Take a list of nodes, build them in order, and return a list of the built
 * nodes. This function handles the `prev` node correctly, and passes the
 * previous element from the list as the prev of the next element.
 */
var buildExpression = function(expression, options, prev) {
    var groups = [];
    for (var i = 0; i < expression.length; i++) {
        var group = expression[i];
        groups.push(buildGroup(group, options, prev));
        prev = group;
    }
    return groups;
};

// List of types used by getTypeOfGroup
var groupToType = {
    mathord: "mord",
    textord: "mord",
    bin: "mbin",
    rel: "mrel",
    text: "mord",
    open: "mopen",
    close: "mclose",
    inner: "minner",
    genfrac: "minner",
    spacing: "mord",
    punct: "mpunct",
    ordgroup: "mord",
    op: "mop",
    katex: "mord",
    overline: "mord",
    rule: "mord",
    leftright: "minner",
    sqrt: "mord",
    accent: "mord"
};

/**
 * Gets the final math type of an expression, given its group type. This type is
 * used to determine spacing between elements, and affects bin elements by
 * causing them to change depending on what types are around them. This type
 * must be attached to the outermost node of an element as a CSS class so that
 * spacing with its surrounding elements works correctly.
 *
 * Some elements can be mapped one-to-one from group type to math type, and
 * those are listed in the `groupToType` table.
 *
 * Others (usually elements that wrap around other elements) often have
 * recursive definitions, and thus call `getTypeOfGroup` on their inner
 * elements.
 */
var getTypeOfGroup = function(group) {
    if (group == null) {
        // Like when typesetting $^3$
        return groupToType.mathord;
    } else if (group.type === "supsub") {
        return getTypeOfGroup(group.value.base);
    } else if (group.type === "llap" || group.type === "rlap") {
        return getTypeOfGroup(group.value);
    } else if (group.type === "color") {
        return getTypeOfGroup(group.value.value);
    } else if (group.type === "sizing") {
        return getTypeOfGroup(group.value.value);
    } else if (group.type === "styling") {
        return getTypeOfGroup(group.value.value);
    } else if (group.type === "delimsizing") {
        return groupToType[group.value.delimType];
    } else {
        return groupToType[group.type];
    }
};

/**
 * Sometimes, groups perform special rules when they have superscripts or
 * subscripts attached to them. This function lets the `supsub` group know that
 * its inner element should handle the superscripts and subscripts instead of
 * handling them itself.
 */
var shouldHandleSupSub = function(group, options) {
    if (!group) {
        return false;
    } else if (group.type === "op") {
        // Operators handle supsubs differently when they have limits
        // (e.g. `\displaystyle\sum_2^3`)
        return group.value.limits && options.style.size === Style.DISPLAY.size;
    } else if (group.type === "accent") {
        return isCharacterBox(group.value.base);
    } else {
        return null;
    }
};

/**
 * Sometimes we want to pull out the innermost element of a group. In most
 * cases, this will just be the group itself, but when ordgroups and colors have
 * a single element, we want to pull that out.
 */
var getBaseElem = function(group) {
    if (!group) {
        return false;
    } else if (group.type === "ordgroup") {
        if (group.value.length === 1) {
            return getBaseElem(group.value[0]);
        } else {
            return group;
        }
    } else if (group.type === "color") {
        if (group.value.value.length === 1) {
            return getBaseElem(group.value.value[0]);
        } else {
            return group;
        }
    } else {
        return group;
    }
};

/**
 * TeXbook algorithms often reference "character boxes", which are simply groups
 * with a single character in them. To decide if something is a character box,
 * we find its innermost group, and see if it is a single character.
 */
var isCharacterBox = function(group) {
    var baseElem = getBaseElem(group);

    // These are all they types of groups which hold single characters
    return baseElem.type === "mathord" ||
        baseElem.type === "textord" ||
        baseElem.type === "bin" ||
        baseElem.type === "rel" ||
        baseElem.type === "inner" ||
        baseElem.type === "open" ||
        baseElem.type === "close" ||
        baseElem.type === "punct";
};

/**
 * This is a map of group types to the function used to handle that type.
 * Simpler types come at the beginning, while complicated types come afterwards.
 */
var groupTypes = {
    mathord: function(group, options, prev) {
        return buildCommon.mathit(
            group.value, group.mode, options.getColor(), ["mord"]);
    },

    textord: function(group, options, prev) {
        return buildCommon.mathrm(
            group.value, group.mode, options.getColor(), ["mord"]);
    },

    bin: function(group, options, prev) {
        var className = "mbin";
        // Pull out the most recent element. Do some special handling to find
        // things at the end of a \color group. Note that we don't use the same
        // logic for ordgroups (which count as ords).
        var prevAtom = prev;
        while (prevAtom && prevAtom.type == "color") {
            var atoms = prevAtom.value.value;
            prevAtom = atoms[atoms.length - 1];
        }
        // See TeXbook pg. 442-446, Rules 5 and 6, and the text before Rule 19.
        // Here, we determine whether the bin should turn into an ord. We
        // currently only apply Rule 5.
        if (!prev || utils.contains(["mbin", "mopen", "mrel", "mop", "mpunct"],
                getTypeOfGroup(prevAtom))) {
            group.type = "textord";
            className = "mord";
        }

        return buildCommon.mathrm(
            group.value, group.mode, options.getColor(), [className]);
    },

    rel: function(group, options, prev) {
        return buildCommon.mathrm(
            group.value, group.mode, options.getColor(), ["mrel"]);
    },

    open: function(group, options, prev) {
        return buildCommon.mathrm(
            group.value, group.mode, options.getColor(), ["mopen"]);
    },

    close: function(group, options, prev) {
        return buildCommon.mathrm(
            group.value, group.mode, options.getColor(), ["mclose"]);
    },

    inner: function(group, options, prev) {
        return buildCommon.mathrm(
            group.value, group.mode, options.getColor(), ["minner"]);
    },

    punct: function(group, options, prev) {
        return buildCommon.mathrm(
            group.value, group.mode, options.getColor(), ["mpunct"]);
    },

    ordgroup: function(group, options, prev) {
        return makeSpan(
            ["mord", options.style.cls()],
            buildExpression(group.value, options.reset())
        );
    },

    text: function(group, options, prev) {
        return makeSpan(["text", "mord", options.style.cls()],
            buildExpression(group.value.body, options.reset()));
    },

    color: function(group, options, prev) {
        var elements = buildExpression(
            group.value.value,
            options.withColor(group.value.color),
            prev
        );

        // \color isn't supposed to affect the type of the elements it contains.
        // To accomplish this, we wrap the results in a fragment, so the inner
        // elements will be able to directly interact with their neighbors. For
        // example, `\color{red}{2 +} 3` has the same spacing as `2 + 3`
        return new buildCommon.makeFragment(elements);
    },

    supsub: function(group, options, prev) {
        // Superscript and subscripts are handled in the TeXbook on page
        // 445-446, rules 18(a-f).

        // Here is where we defer to the inner group if it should handle
        // superscripts and subscripts itself.
        if (shouldHandleSupSub(group.value.base, options)) {
            return groupTypes[group.value.base.type](group, options, prev);
        }

        var base = buildGroup(group.value.base, options.reset());
        var supmid, submid, sup, sub;

        if (group.value.sup) {
            sup = buildGroup(group.value.sup,
                    options.withStyle(options.style.sup()));
            supmid = makeSpan(
                    [options.style.reset(), options.style.sup().cls()], [sup]);
        }

        if (group.value.sub) {
            sub = buildGroup(group.value.sub,
                    options.withStyle(options.style.sub()));
            submid = makeSpan(
                    [options.style.reset(), options.style.sub().cls()], [sub]);
        }

        // Rule 18a
        var supShift, subShift;
        if (isCharacterBox(group.value.base)) {
            supShift = 0;
            subShift = 0;
        } else {
            supShift = base.height - fontMetrics.metrics.supDrop;
            subShift = base.depth + fontMetrics.metrics.subDrop;
        }

        // Rule 18c
        var minSupShift;
        if (options.style === Style.DISPLAY) {
            minSupShift = fontMetrics.metrics.sup1;
        } else if (options.style.cramped) {
            minSupShift = fontMetrics.metrics.sup3;
        } else {
            minSupShift = fontMetrics.metrics.sup2;
        }

        // scriptspace is a font-size-independent size, so scale it
        // appropriately
        var multiplier = Style.TEXT.sizeMultiplier *
                options.style.sizeMultiplier;
        var scriptspace =
            (0.5 / fontMetrics.metrics.ptPerEm) / multiplier + "em";

        var supsub;
        if (!group.value.sup) {
            // Rule 18b
            subShift = Math.max(
                subShift, fontMetrics.metrics.sub1,
                sub.height - 0.8 * fontMetrics.metrics.xHeight);

            supsub = buildCommon.makeVList([
                {type: "elem", elem: submid}
            ], "shift", subShift, options);

            supsub.children[0].style.marginRight = scriptspace;

            // Subscripts shouldn't be shifted by the base's italic correction.
            // Account for that by shifting the subscript back the appropriate
            // amount. Note we only do this when the base is a single symbol.
            if (base instanceof domTree.symbolNode) {
                supsub.children[0].style.marginLeft = -base.italic + "em";
            }
        } else if (!group.value.sub) {
            // Rule 18c, d
            supShift = Math.max(supShift, minSupShift,
                sup.depth + 0.25 * fontMetrics.metrics.xHeight);

            supsub = buildCommon.makeVList([
                {type: "elem", elem: supmid}
            ], "shift", -supShift, options);

            supsub.children[0].style.marginRight = scriptspace;
        } else {
            supShift = Math.max(
                supShift, minSupShift,
                sup.depth + 0.25 * fontMetrics.metrics.xHeight);
            subShift = Math.max(subShift, fontMetrics.metrics.sub2);

            var ruleWidth = fontMetrics.metrics.defaultRuleThickness;

            // Rule 18e
            if ((supShift - sup.depth) - (sub.height - subShift) <
                    4 * ruleWidth) {
                subShift = 4 * ruleWidth - (supShift - sup.depth) + sub.height;
                var psi = 0.8 * fontMetrics.metrics.xHeight -
                    (supShift - sup.depth);
                if (psi > 0) {
                    supShift += psi;
                    subShift -= psi;
                }
            }

            supsub = buildCommon.makeVList([
                {type: "elem", elem: submid, shift: subShift},
                {type: "elem", elem: supmid, shift: -supShift}
            ], "individualShift", null, options);

            // See comment above about subscripts not being shifted
            if (base instanceof domTree.symbolNode) {
                supsub.children[0].style.marginLeft = -base.italic + "em";
            }

            supsub.children[0].style.marginRight = scriptspace;
            supsub.children[1].style.marginRight = scriptspace;
        }

        return makeSpan([getTypeOfGroup(group.value.base)],
            [base, supsub]);
    },

    genfrac: function(group, options, prev) {
        // Fractions are handled in the TeXbook on pages 444-445, rules 15(a-e).
        // Figure out what style this fraction should be in based on the
        // function used
        var fstyle = options.style;
        if (group.value.size === "display") {
            fstyle = Style.DISPLAY;
        } else if (group.value.size === "text") {
            fstyle = Style.TEXT;
        }

        var nstyle = fstyle.fracNum();
        var dstyle = fstyle.fracDen();

        var numer = buildGroup(group.value.numer, options.withStyle(nstyle));
        var numerreset = makeSpan([fstyle.reset(), nstyle.cls()], [numer]);

        var denom = buildGroup(group.value.denom, options.withStyle(dstyle));
        var denomreset = makeSpan([fstyle.reset(), dstyle.cls()], [denom]);

        var ruleWidth;
        if (group.value.hasBarLine) {
            ruleWidth = fontMetrics.metrics.defaultRuleThickness /
                options.style.sizeMultiplier;
        } else {
            ruleWidth = 0;
        }

        // Rule 15b
        var numShift;
        var clearance;
        var denomShift;
        if (fstyle.size === Style.DISPLAY.size) {
            numShift = fontMetrics.metrics.num1;
            if (ruleWidth > 0) {
                clearance = 3 * ruleWidth;
            } else {
                clearance = 7 * fontMetrics.metrics.defaultRuleThickness;
            }
            denomShift = fontMetrics.metrics.denom1;
        } else {
            if (ruleWidth > 0) {
                numShift = fontMetrics.metrics.num2;
                clearance = ruleWidth;
            } else {
                numShift = fontMetrics.metrics.num3;
                clearance = 3 * fontMetrics.metrics.defaultRuleThickness;
            }
            denomShift = fontMetrics.metrics.denom2;
        }

        var frac;
        if (ruleWidth === 0) {
            // Rule 15c
            var candiateClearance =
                (numShift - numer.depth) - (denom.height - denomShift);
            if (candiateClearance < clearance) {
                numShift += 0.5 * (clearance - candiateClearance);
                denomShift += 0.5 * (clearance - candiateClearance);
            }

            frac = buildCommon.makeVList([
                {type: "elem", elem: denomreset, shift: denomShift},
                {type: "elem", elem: numerreset, shift: -numShift}
            ], "individualShift", null, options);
        } else {
            // Rule 15d
            var axisHeight = fontMetrics.metrics.axisHeight;

            if ((numShift - numer.depth) - (axisHeight + 0.5 * ruleWidth)
                    < clearance) {
                numShift +=
                    clearance - ((numShift - numer.depth) -
                                 (axisHeight + 0.5 * ruleWidth));
            }

            if ((axisHeight - 0.5 * ruleWidth) - (denom.height - denomShift)
                    < clearance) {
                denomShift +=
                    clearance - ((axisHeight - 0.5 * ruleWidth) -
                                 (denom.height - denomShift));
            }

            var mid = makeSpan(
                [options.style.reset(), Style.TEXT.cls(), "frac-line"]);
            // Manually set the height of the line because its height is
            // created in CSS
            mid.height = ruleWidth;

            var midShift = -(axisHeight - 0.5 * ruleWidth);

            frac = buildCommon.makeVList([
                {type: "elem", elem: denomreset, shift: denomShift},
                {type: "elem", elem: mid,        shift: midShift},
                {type: "elem", elem: numerreset, shift: -numShift}
            ], "individualShift", null, options);
        }

        // Since we manually change the style sometimes (with \dfrac or \tfrac),
        // account for the possible size change here.
        frac.height *= fstyle.sizeMultiplier / options.style.sizeMultiplier;
        frac.depth *= fstyle.sizeMultiplier / options.style.sizeMultiplier;

        // Rule 15e
        var innerChildren = [makeSpan(["mfrac"], [frac])];

        var delimSize;
        if (fstyle.size === Style.DISPLAY.size) {
            delimSize = fontMetrics.metrics.delim1;
        } else {
            delimSize = fontMetrics.metrics.getDelim2(fstyle);
        }

        if (group.value.leftDelim != null) {
            innerChildren.unshift(
                delimiter.customSizedDelim(
                    group.value.leftDelim, delimSize, true,
                    options.withStyle(fstyle), group.mode)
            );
        }
        if (group.value.rightDelim != null) {
            innerChildren.push(
                delimiter.customSizedDelim(
                    group.value.rightDelim, delimSize, true,
                    options.withStyle(fstyle), group.mode)
            );
        }

        return makeSpan(
            ["minner", options.style.reset(), fstyle.cls()],
            innerChildren,
            options.getColor());
    },

    spacing: function(group, options, prev) {
        if (group.value === "\\ " || group.value === "\\space" ||
            group.value === " " || group.value === "~") {
            // Spaces are generated by adding an actual space. Each of these
            // things has an entry in the symbols table, so these will be turned
            // into appropriate outputs.
            return makeSpan(
                ["mord", "mspace"],
                [buildCommon.mathrm(group.value, group.mode)]
            );
        } else {
            // Other kinds of spaces are of arbitrary width. We use CSS to
            // generate these.
            return makeSpan(
                ["mord", "mspace",
                 buildCommon.spacingFunctions[group.value].className]);
        }
    },

    llap: function(group, options, prev) {
        var inner = makeSpan(
            ["inner"], [buildGroup(group.value.body, options.reset())]);
        var fix = makeSpan(["fix"], []);
        return makeSpan(
            ["llap", options.style.cls()], [inner, fix]);
    },

    rlap: function(group, options, prev) {
        var inner = makeSpan(
            ["inner"], [buildGroup(group.value.body, options.reset())]);
        var fix = makeSpan(["fix"], []);
        return makeSpan(
            ["rlap", options.style.cls()], [inner, fix]);
    },

    op: function(group, options, prev) {
        // Operators are handled in the TeXbook pg. 443-444, rule 13(a).
        var supGroup;
        var subGroup;
        var hasLimits = false;
        if (group.type === "supsub" ) {
            // If we have limits, supsub will pass us its group to handle. Pull
            // out the superscript and subscript and set the group to the op in
            // its base.
            supGroup = group.value.sup;
            subGroup = group.value.sub;
            group = group.value.base;
            hasLimits = true;
        }

        // Most operators have a large successor symbol, but these don't.
        var noSuccessor = [
            "\\smallint"
        ];

        var large = false;
        if (options.style.size === Style.DISPLAY.size &&
            group.value.symbol &&
            !utils.contains(noSuccessor, group.value.body)) {

            // Most symbol operators get larger in displaystyle (rule 13)
            large = true;
        }

        var base;
        var baseShift = 0;
        var slant = 0;
        if (group.value.symbol) {
            // If this is a symbol, create the symbol.
            var style = large ? "Size2-Regular" : "Size1-Regular";
            base = buildCommon.makeSymbol(
                group.value.body, style, "math", options.getColor(),
                ["op-symbol", large ? "large-op" : "small-op", "mop"]);

            // Shift the symbol so its center lies on the axis (rule 13). It
            // appears that our fonts have the centers of the symbols already
            // almost on the axis, so these numbers are very small. Note we
            // don't actually apply this here, but instead it is used either in
            // the vlist creation or separately when there are no limits.
            baseShift = (base.height - base.depth) / 2 -
                fontMetrics.metrics.axisHeight *
                options.style.sizeMultiplier;

            // The slant of the symbol is just its italic correction.
            slant = base.italic;
        } else {
            // Otherwise, this is a text operator. Build the text from the
            // operator's name.
            // TODO(emily): Add a space in the middle of some of these
            // operators, like \limsup
            var output = [];
            for (var i = 1; i < group.value.body.length; i++) {
                output.push(buildCommon.mathrm(group.value.body[i], group.mode));
            }
            base = makeSpan(["mop"], output, options.getColor());
        }

        if (hasLimits) {
            // IE 8 clips \int if it is in a display: inline-block. We wrap it
            // in a new span so it is an inline, and works.
            base = makeSpan([], [base]);

            var supmid, supKern, submid, subKern;
            // We manually have to handle the superscripts and subscripts. This,
            // aside from the kern calculations, is copied from supsub.
            if (supGroup) {
                var sup = buildGroup(
                    supGroup, options.withStyle(options.style.sup()));
                supmid = makeSpan(
                    [options.style.reset(), options.style.sup().cls()], [sup]);

                supKern = Math.max(
                    fontMetrics.metrics.bigOpSpacing1,
                    fontMetrics.metrics.bigOpSpacing3 - sup.depth);
            }

            if (subGroup) {
                var sub = buildGroup(
                    subGroup, options.withStyle(options.style.sub()));
                submid = makeSpan(
                    [options.style.reset(), options.style.sub().cls()],
                    [sub]);

                subKern = Math.max(
                    fontMetrics.metrics.bigOpSpacing2,
                    fontMetrics.metrics.bigOpSpacing4 - sub.height);
            }

            // Build the final group as a vlist of the possible subscript, base,
            // and possible superscript.
            var finalGroup, top, bottom;
            if (!supGroup) {
                top = base.height - baseShift;

                finalGroup = buildCommon.makeVList([
                    {type: "kern", size: fontMetrics.metrics.bigOpSpacing5},
                    {type: "elem", elem: submid},
                    {type: "kern", size: subKern},
                    {type: "elem", elem: base}
                ], "top", top, options);

                // Here, we shift the limits by the slant of the symbol. Note
                // that we are supposed to shift the limits by 1/2 of the slant,
                // but since we are centering the limits adding a full slant of
                // margin will shift by 1/2 that.
                finalGroup.children[0].style.marginLeft = -slant + "em";
            } else if (!subGroup) {
                bottom = base.depth + baseShift;

                finalGroup = buildCommon.makeVList([
                    {type: "elem", elem: base},
                    {type: "kern", size: supKern},
                    {type: "elem", elem: supmid},
                    {type: "kern", size: fontMetrics.metrics.bigOpSpacing5}
                ], "bottom", bottom, options);

                // See comment above about slants
                finalGroup.children[1].style.marginLeft = slant + "em";
            } else if (!supGroup && !subGroup) {
                // This case probably shouldn't occur (this would mean the
                // supsub was sending us a group with no superscript or
                // subscript) but be safe.
                return base;
            } else {
                bottom = fontMetrics.metrics.bigOpSpacing5 +
                    submid.height + submid.depth +
                    subKern +
                    base.depth + baseShift;

                finalGroup = buildCommon.makeVList([
                    {type: "kern", size: fontMetrics.metrics.bigOpSpacing5},
                    {type: "elem", elem: submid},
                    {type: "kern", size: subKern},
                    {type: "elem", elem: base},
                    {type: "kern", size: supKern},
                    {type: "elem", elem: supmid},
                    {type: "kern", size: fontMetrics.metrics.bigOpSpacing5}
                ], "bottom", bottom, options);

                // See comment above about slants
                finalGroup.children[0].style.marginLeft = -slant + "em";
                finalGroup.children[2].style.marginLeft = slant + "em";
            }

            return makeSpan(["mop", "op-limits"], [finalGroup]);
        } else {
            if (group.value.symbol) {
                base.style.top = baseShift + "em";
            }

            return base;
        }
    },

    katex: function(group, options, prev) {
        // The KaTeX logo. The offsets for the K and a were chosen to look
        // good, but the offsets for the T, E, and X were taken from the
        // definition of \TeX in TeX (see TeXbook pg. 356)
        var k = makeSpan(
            ["k"], [buildCommon.mathrm("K", group.mode)]);
        var a = makeSpan(
            ["a"], [buildCommon.mathrm("A", group.mode)]);

        a.height = (a.height + 0.2) * 0.75;
        a.depth = (a.height - 0.2) * 0.75;

        var t = makeSpan(
            ["t"], [buildCommon.mathrm("T", group.mode)]);
        var e = makeSpan(
            ["e"], [buildCommon.mathrm("E", group.mode)]);

        e.height = (e.height - 0.2155);
        e.depth = (e.depth + 0.2155);

        var x = makeSpan(
            ["x"], [buildCommon.mathrm("X", group.mode)]);

        return makeSpan(
            ["katex-logo"], [k, a, t, e, x], options.getColor());
    },

    overline: function(group, options, prev) {
        // Overlines are handled in the TeXbook pg 443, Rule 9.

        // Build the inner group in the cramped style.
        var innerGroup = buildGroup(group.value.body,
                options.withStyle(options.style.cramp()));

        var ruleWidth = fontMetrics.metrics.defaultRuleThickness /
            options.style.sizeMultiplier;

        // Create the line above the body
        var line = makeSpan(
            [options.style.reset(), Style.TEXT.cls(), "overline-line"]);
        line.height = ruleWidth;
        line.maxFontSize = 1.0;

        // Generate the vlist, with the appropriate kerns
        var vlist = buildCommon.makeVList([
            {type: "elem", elem: innerGroup},
            {type: "kern", size: 3 * ruleWidth},
            {type: "elem", elem: line},
            {type: "kern", size: ruleWidth}
        ], "firstBaseline", null, options);

        return makeSpan(["overline", "mord"], [vlist], options.getColor());
    },

    sqrt: function(group, options, prev) {
        // Square roots are handled in the TeXbook pg. 443, Rule 11.

        // First, we do the same steps as in overline to build the inner group
        // and line
        var inner = buildGroup(group.value.body,
                options.withStyle(options.style.cramp()));

        var ruleWidth = fontMetrics.metrics.defaultRuleThickness /
            options.style.sizeMultiplier;

        var line = makeSpan(
            [options.style.reset(), Style.TEXT.cls(), "sqrt-line"], [],
            options.getColor());
        line.height = ruleWidth;
        line.maxFontSize = 1.0;

        var phi = ruleWidth;
        if (options.style.id < Style.TEXT.id) {
            phi = fontMetrics.metrics.xHeight;
        }

        // Calculate the clearance between the body and line
        var lineClearance = ruleWidth + phi / 4;

        var innerHeight =
            (inner.height + inner.depth) * options.style.sizeMultiplier;
        var minDelimiterHeight = innerHeight + lineClearance + ruleWidth;

        // Create a \surd delimiter of the required minimum size
        var delim = makeSpan(["sqrt-sign"], [
            delimiter.customSizedDelim("\\surd", minDelimiterHeight,
                                       false, options, group.mode)],
                             options.getColor());

        var delimDepth = (delim.height + delim.depth) - ruleWidth;

        // Adjust the clearance based on the delimiter size
        if (delimDepth > inner.height + inner.depth + lineClearance) {
            lineClearance =
                (lineClearance + delimDepth - inner.height - inner.depth) / 2;
        }

        // Shift the delimiter so that its top lines up with the top of the line
        var delimShift = -(inner.height + lineClearance + ruleWidth) + delim.height;
        delim.style.top = delimShift + "em";
        delim.height -= delimShift;
        delim.depth += delimShift;

        // We add a special case here, because even when `inner` is empty, we
        // still get a line. So, we use a simple heuristic to decide if we
        // should omit the body entirely. (note this doesn't work for something
        // like `\sqrt{\rlap{x}}`, but if someone is doing that they deserve for
        // it not to work.
        var body;
        if (inner.height === 0 && inner.depth === 0) {
            body = makeSpan();
        } else {
            body = buildCommon.makeVList([
                {type: "elem", elem: inner},
                {type: "kern", size: lineClearance},
                {type: "elem", elem: line},
                {type: "kern", size: ruleWidth}
            ], "firstBaseline", null, options);
        }

        return makeSpan(["sqrt", "mord"], [delim, body]);
    },

    sizing: function(group, options, prev) {
        // Handle sizing operators like \Huge. Real TeX doesn't actually allow
        // these functions inside of math expressions, so we do some special
        // handling.
        var inner = buildExpression(group.value.value,
                options.withSize(group.value.size), prev);

        var span = makeSpan(["mord"],
            [makeSpan(["sizing", "reset-" + options.size, group.value.size,
                       options.style.cls()],
                      inner)]);

        // Calculate the correct maxFontSize manually
        var fontSize = buildCommon.sizingMultiplier[group.value.size];
        span.maxFontSize = fontSize * options.style.sizeMultiplier;

        return span;
    },

    styling: function(group, options, prev) {
        // Style changes are handled in the TeXbook on pg. 442, Rule 3.

        // Figure out what style we're changing to.
        var style = {
            "display": Style.DISPLAY,
            "text": Style.TEXT,
            "script": Style.SCRIPT,
            "scriptscript": Style.SCRIPTSCRIPT
        };

        var newStyle = style[group.value.style];

        // Build the inner expression in the new style.
        var inner = buildExpression(
            group.value.value, options.withStyle(newStyle), prev);

        return makeSpan([options.style.reset(), newStyle.cls()], inner);
    },

    delimsizing: function(group, options, prev) {
        var delim = group.value.value;

        if (delim === ".") {
            // Empty delimiters still count as elements, even though they don't
            // show anything.
            return makeSpan([groupToType[group.value.delimType]]);
        }

        // Use delimiter.sizedDelim to generate the delimiter.
        return makeSpan(
            [groupToType[group.value.delimType]],
            [delimiter.sizedDelim(
                delim, group.value.size, options, group.mode)]);
    },

    leftright: function(group, options, prev) {
        // Build the inner expression
        var inner = buildExpression(group.value.body, options.reset());

        var innerHeight = 0;
        var innerDepth = 0;

        // Calculate its height and depth
        for (var i = 0; i < inner.length; i++) {
            innerHeight = Math.max(inner[i].height, innerHeight);
            innerDepth = Math.max(inner[i].depth, innerDepth);
        }

        // The size of delimiters is the same, regardless of what style we are
        // in. Thus, to correctly calculate the size of delimiter we need around
        // a group, we scale down the inner size based on the size.
        innerHeight *= options.style.sizeMultiplier;
        innerDepth *= options.style.sizeMultiplier;

        var leftDelim;
        if (group.value.left === ".") {
            // Empty delimiters in \left and \right make null delimiter spaces.
            leftDelim = makeSpan(["nulldelimiter"]);
        } else {
            // Otherwise, use leftRightDelim to generate the correct sized
            // delimiter.
            leftDelim = delimiter.leftRightDelim(
                group.value.left, innerHeight, innerDepth, options,
                group.mode);
        }
        // Add it to the beginning of the expression
        inner.unshift(leftDelim);

        var rightDelim;
        // Same for the right delimiter
        if (group.value.right === ".") {
            rightDelim = makeSpan(["nulldelimiter"]);
        } else {
            rightDelim = delimiter.leftRightDelim(
                group.value.right, innerHeight, innerDepth, options,
                group.mode);
        }
        // Add it to the end of the expression.
        inner.push(rightDelim);

        return makeSpan(
            ["minner", options.style.cls()], inner, options.getColor());
    },

    rule: function(group, options, prev) {
        // Make an empty span for the rule
        var rule = makeSpan(["mord", "rule"], [], options.getColor());

        // Calculate the shift, width, and height of the rule, and account for units
        var shift = 0;
        if (group.value.shift) {
            shift = group.value.shift.number;
            if (group.value.shift.unit === "ex") {
                shift *= fontMetrics.metrics.xHeight;
            }
        }

        var width = group.value.width.number;
        if (group.value.width.unit === "ex") {
            width *= fontMetrics.metrics.xHeight;
        }

        var height = group.value.height.number;
        if (group.value.height.unit === "ex") {
            height *= fontMetrics.metrics.xHeight;
        }

        // The sizes of rules are absolute, so make it larger if we are in a
        // smaller style.
        shift /= options.style.sizeMultiplier;
        width /= options.style.sizeMultiplier;
        height /= options.style.sizeMultiplier;

        // Style the rule to the right size
        rule.style.borderRightWidth = width + "em";
        rule.style.borderTopWidth = height + "em";
        rule.style.bottom = shift + "em";

        // Record the height and width
        rule.width = width;
        rule.height = height + shift;
        rule.depth = -shift;

        return rule;
    },

    accent: function(group, options, prev) {
        // Accents are handled in the TeXbook pg. 443, rule 12.
        var base = group.value.base;

        var supsubGroup;
        if (group.type === "supsub") {
            // If our base is a character box, and we have superscripts and
            // subscripts, the supsub will defer to us. In particular, we want
            // to attach the superscripts and subscripts to the inner body (so
            // that the position of the superscripts and subscripts won't be
            // affected by the height of the accent). We accomplish this by
            // sticking the base of the accent into the base of the supsub, and
            // rendering that, while keeping track of where the accent is.

            // The supsub group is the group that was passed in
            var supsub = group;
            // The real accent group is the base of the supsub group
            group = supsub.value.base;
            // The character box is the base of the accent group
            base = group.value.base;
            // Stick the character box into the base of the supsub group
            supsub.value.base = base;

            // Rerender the supsub group with its new base, and store that
            // result.
            supsubGroup = buildGroup(
                supsub, options.reset(), prev);
        }

        // Build the base group
        var body = buildGroup(
            base, options.withStyle(options.style.cramp()));

        // Calculate the skew of the accent. This is based on the line "If the
        // nucleus is not a single character, let s = 0; otherwise set s to the
        // kern amount for the nucleus followed by the \skewchar of its font."
        // Note that our skew metrics are just the kern between each character
        // and the skewchar.
        var skew;
        if (isCharacterBox(base)) {
            // If the base is a character box, then we want the skew of the
            // innermost character. To do that, we find the innermost character:
            var baseChar = getBaseElem(base);
            // Then, we render its group to get the symbol inside it
            var baseGroup = buildGroup(
                baseChar, options.withStyle(options.style.cramp()));
            // Finally, we pull the skew off of the symbol.
            skew = baseGroup.skew;
            // Note that we now throw away baseGroup, because the layers we
            // removed with getBaseElem might contain things like \color which
            // we can't get rid of.
            // TODO(emily): Find a better way to get the skew
        } else {
            skew = 0;
        }

        // calculate the amount of space between the body and the accent
        var clearance = Math.min(body.height, fontMetrics.metrics.xHeight);

        // Build the accent
        var accent = buildCommon.makeSymbol(
            group.value.accent, "Main-Regular", "math", options.getColor());
        // Remove the italic correction of the accent, because it only serves to
        // shift the accent over to a place we don't want.
        accent.italic = 0;

        // The \vec character that the fonts use is a combining character, and
        // thus shows up much too far to the left. To account for this, we add a
        // specific class which shifts the accent over to where we want it.
        // TODO(emily): Fix this in a better way, like by changing the font
        var vecClass = group.value.accent === "\\vec" ? "accent-vec" : null;

        var accentBody = makeSpan(["accent-body", vecClass], [
            makeSpan([], [accent])]);

        accentBody = buildCommon.makeVList([
            {type: "elem", elem: body},
            {type: "kern", size: -clearance},
            {type: "elem", elem: accentBody}
        ], "firstBaseline", null, options);

        // Shift the accent over by the skew. Note we shift by twice the skew
        // because we are centering the accent, so by adding 2*skew to the left,
        // we shift it to the right by 1*skew.
        accentBody.children[1].style.marginLeft = 2 * skew + "em";

        var accentWrap = makeSpan(["mord", "accent"], [accentBody]);

        if (supsubGroup) {
            // Here, we replace the "base" child of the supsub with our newly
            // generated accent.
            supsubGroup.children[0] = accentWrap;

            // Since we don't rerun the height calculation after replacing the
            // accent, we manually recalculate height.
            supsubGroup.height = Math.max(accentWrap.height, supsubGroup.height);

            // Accents should always be ords, even when their innards are not.
            supsubGroup.classes[0] = "mord";

            return supsubGroup;
        } else {
            return accentWrap;
        }
    }
};

/**
 * buildGroup is the function that takes a group and calls the correct groupType
 * function for it. It also handles the interaction of size and style changes
 * between parents and children.
 */
var buildGroup = function(group, options, prev) {
    if (!group) {
        return makeSpan();
    }

    if (groupTypes[group.type]) {
        // Call the groupTypes function
        var groupNode = groupTypes[group.type](group, options, prev);
        var multiplier;

        // If the style changed between the parent and the current group,
        // account for the size difference
        if (options.style !== options.parentStyle) {
            multiplier = options.style.sizeMultiplier /
                    options.parentStyle.sizeMultiplier;

            groupNode.height *= multiplier;
            groupNode.depth *= multiplier;
        }

        // If the size changed between the parent and the current group, account
        // for that size difference.
        if (options.size !== options.parentSize) {
            multiplier = buildCommon.sizingMultiplier[options.size] /
                    buildCommon.sizingMultiplier[options.parentSize];

            groupNode.height *= multiplier;
            groupNode.depth *= multiplier;
        }

        return groupNode;
    } else {
        throw new ParseError(
            "Got group of unknown type: '" + group.type + "'");
    }
};

/**
 * Take an entire parse tree, and build it into an appropriate set of HTML
 * nodes.
 */
var buildHTML = function(tree, settings) {
    var startStyle = Style.TEXT;
    if (settings.displayMode) {
        startStyle = Style.DISPLAY;
    }

    // Setup the default options
    var options = new Options(startStyle, "size5", "");

    // Build the expression contained in the tree
    var expression = buildExpression(tree, options);
    var body = makeSpan(["base", options.style.cls()], expression);

    // Add struts, which ensure that the top of the HTML element falls at the
    // height of the expression, and the bottom of the HTML element falls at the
    // depth of the expression.
    var topStrut = makeSpan(["strut"]);
    var bottomStrut = makeSpan(["strut", "bottom"]);

    topStrut.style.height = body.height + "em";
    bottomStrut.style.height = (body.height + body.depth) + "em";
    // We'd like to use `vertical-align: top` but in IE 9 this lowers the
    // baseline of the box to the bottom of this strut (instead staying in the
    // normal place) so we use an absolute value for vertical-align instead
    bottomStrut.style.verticalAlign = -body.depth + "em";

    // Wrap the struts and body together
    var htmlNode = makeSpan(["katex-html"], [topStrut, bottomStrut, body]);

    htmlNode.setAttribute("aria-hidden", "true");

    return htmlNode;
};

module.exports = buildHTML;

},{"./Options":5,"./ParseError":6,"./Style":9,"./buildCommon":10,"./delimiter":14,"./domTree":15,"./fontMetrics":16,"./utils":21}],12:[function(require,module,exports){
/**
 * This file converts a parse tree into a cooresponding MathML tree. The main
 * entry point is the `buildMathML` function, which takes a parse tree from the
 * parser.
 */

var buildCommon = require("./buildCommon");
var mathMLTree = require("./mathMLTree");
var ParseError = require("./ParseError");
var symbols = require("./symbols");

var makeSpan = buildCommon.makeSpan;

/**
 * Takes a symbol and converts it into a MathML text node after performing
 * optional replacement from symbols.js.
 */
var makeText = function(text, mode) {
    if (symbols[mode][text] && symbols[mode][text].replace) {
        text = symbols[mode][text].replace;
    }

    return new mathMLTree.TextNode(text);
};

/**
 * Functions for handling the different types of groups found in the parse
 * tree. Each function should take a parse group and return a MathML node.
 */
var groupTypes = {
    mathord: function(group) {
        var node = new mathMLTree.MathNode(
            "mi",
            [makeText(group.value, group.mode)]);

        return node;
    },

    textord: function(group) {
        var text = makeText(group.value, group.mode);

        var node;
        if (/[0-9]/.test(group.value)) {
            node = new mathMLTree.MathNode("mn", [text]);
        } else {
            node = new mathMLTree.MathNode("mi", [text]);
            node.setAttribute("mathvariant", "normal");
        }

        return node;
    },

    bin: function(group) {
        var node = new mathMLTree.MathNode(
            "mo", [makeText(group.value, group.mode)]);

        return node;
    },

    rel: function(group) {
        var node = new mathMLTree.MathNode(
            "mo", [makeText(group.value, group.mode)]);

        return node;
    },

    open: function(group) {
        var node = new mathMLTree.MathNode(
            "mo", [makeText(group.value, group.mode)]);

        return node;
    },

    close: function(group) {
        var node = new mathMLTree.MathNode(
            "mo", [makeText(group.value, group.mode)]);

        return node;
    },

    inner: function(group) {
        var node = new mathMLTree.MathNode(
            "mo", [makeText(group.value, group.mode)]);

        return node;
    },

    punct: function(group) {
        var node = new mathMLTree.MathNode(
            "mo", [makeText(group.value, group.mode)]);

        node.setAttribute("separator", "true");

        return node;
    },

    ordgroup: function(group) {
        var inner = buildExpression(group.value);

        var node = new mathMLTree.MathNode("mrow", inner);

        return node;
    },

    text: function(group) {
        var inner = buildExpression(group.value.body);

        var node = new mathMLTree.MathNode("mtext", inner);

        return node;
    },

    color: function(group) {
        var inner = buildExpression(group.value.value);

        var node = new mathMLTree.MathNode("mstyle", inner);

        node.setAttribute("mathcolor", group.value.color);

        return node;
    },

    supsub: function(group) {
        var children = [buildGroup(group.value.base)];

        if (group.value.sub) {
            children.push(buildGroup(group.value.sub));
        }

        if (group.value.sup) {
            children.push(buildGroup(group.value.sup));
        }

        var nodeType;
        if (!group.value.sub) {
            nodeType = "msup";
        } else if (!group.value.sup) {
            nodeType = "msub";
        } else {
            nodeType = "msubsup";
        }

        var node = new mathMLTree.MathNode(nodeType, children);

        return node;
    },

    genfrac: function(group) {
        var node = new mathMLTree.MathNode(
            "mfrac",
            [buildGroup(group.value.numer),
             buildGroup(group.value.denom)]);

        if (!group.value.hasBarLine) {
            node.setAttribute("linethickness", "0px");
        }

        if (group.value.leftDelim != null || group.value.rightDelim != null) {
            var withDelims = [];

            if (group.value.leftDelim != null) {
                var leftOp = new mathMLTree.MathNode(
                    "mo", [new mathMLTree.TextNode(group.value.leftDelim)]);

                leftOp.setAttribute("fence", "true");

                withDelims.push(leftOp);
            }

            withDelims.push(node);

            if (group.value.rightDelim != null) {
                var rightOp = new mathMLTree.MathNode(
                    "mo", [new mathMLTree.TextNode(group.value.rightDelim)]);

                rightOp.setAttribute("fence", "true");

                withDelims.push(rightOp);
            }

            var outerNode = new mathMLTree.MathNode("mrow", withDelims);

            return outerNode;
        }

        return node;
    },

    sqrt: function(group) {
        var node = new mathMLTree.MathNode(
            "msqrt", [buildGroup(group.value.body)]);

        return node;
    },

    leftright: function(group) {
        var inner = buildExpression(group.value.body);

        if (group.value.left !== ".") {
            var leftNode = new mathMLTree.MathNode(
                "mo", [makeText(group.value.left, group.mode)]);

            leftNode.setAttribute("fence", "true");

            inner.unshift(leftNode);
        }

        if (group.value.right !== ".") {
            var rightNode = new mathMLTree.MathNode(
                "mo", [makeText(group.value.right, group.mode)]);

            rightNode.setAttribute("fence", "true");

            inner.push(rightNode);
        }

        var outerNode = new mathMLTree.MathNode("mrow", inner);

        return outerNode;
    },

    accent: function(group) {
        var accentNode = new mathMLTree.MathNode(
            "mo", [makeText(group.value.accent, group.mode)]);

        var node = new mathMLTree.MathNode(
            "mover",
            [buildGroup(group.value.base),
             accentNode]);

        node.setAttribute("accent", "true");

        return node;
    },

    spacing: function(group) {
        var node;

        if (group.value === "\\ " || group.value === "\\space" ||
            group.value === " " || group.value === "~") {
            node = new mathMLTree.MathNode(
                "mtext", [new mathMLTree.TextNode("\u00a0")]);
        } else {
            node = new mathMLTree.MathNode("mspace");

            node.setAttribute(
                "width", buildCommon.spacingFunctions[group.value].size);
        }

        return node;
    },

    op: function(group) {
        var node;

        // TODO(emily): handle big operators using the `largeop` attribute

        if (group.value.symbol) {
            // This is a symbol. Just add the symbol.
            node = new mathMLTree.MathNode(
                "mo", [makeText(group.value.body, group.mode)]);
        } else {
            // This is a text operator. Add all of the characters from the
            // operator's name.
            // TODO(emily): Add a space in the middle of some of these
            // operators, like \limsup.
            node = new mathMLTree.MathNode(
                "mo", [new mathMLTree.TextNode(group.value.body.slice(1))]);
        }

        return node;
    },

    katex: function(group) {
        var node = new mathMLTree.MathNode(
            "mtext", [new mathMLTree.TextNode("KaTeX")]);

        return node;
    },

    delimsizing: function(group) {
        var children = [];

        if (group.value.value !== ".") {
            children.push(makeText(group.value.value, group.mode));
        }

        var node = new mathMLTree.MathNode("mo", children);

        if (group.value.delimType === "open" ||
            group.value.delimType === "close") {
            // Only some of the delimsizing functions act as fences, and they
            // return "open" or "close" delimTypes.
            node.setAttribute("fence", "true");
        } else {
            // Explicitly disable fencing if it's not a fence, to override the
            // defaults.
            node.setAttribute("fence", "false");
        }

        return node;
    },

    styling: function(group) {
        var inner = buildExpression(group.value.value, inner);

        var node = new mathMLTree.MathNode("mstyle", inner);

        var styleAttributes = {
            "display": ["0", "true"],
            "text": ["0", "false"],
            "script": ["1", "false"],
            "scriptscript": ["2", "false"]
        };

        var attr = styleAttributes[group.value.style];

        node.setAttribute("scriptlevel", attr[0]);
        node.setAttribute("displaystyle", attr[1]);

        return node;
    },

    sizing: function(group) {
        var inner = buildExpression(group.value.value);

        var node = new mathMLTree.MathNode("mstyle", inner);

        // TODO(emily): This doesn't produce the correct size for nested size
        // changes, because we don't keep state of what style we're currently
        // in, so we can't reset the size to normal before changing it.
        node.setAttribute(
            "mathsize", buildCommon.sizingMultiplier[group.value.size] + "em");

        return node;
    },

    overline: function(group) {
        var operator = new mathMLTree.MathNode(
            "mo", [new mathMLTree.TextNode("\u203e")]);
        operator.setAttribute("stretchy", "true");

        var node = new mathMLTree.MathNode(
            "mover",
            [buildGroup(group.value.body),
             operator]);
        node.setAttribute("accent", "true");

        return node;
    },

    rule: function(group) {
        // TODO(emily): Figure out if there's an actual way to draw black boxes
        // in MathML.
        var node = new mathMLTree.MathNode("mrow");

        return node;
    },

    llap: function(group) {
        var node = new mathMLTree.MathNode(
            "mpadded", [buildGroup(group.value.body)]);

        node.setAttribute("lspace", "-1width");
        node.setAttribute("width", "0px");

        return node;
    },

    rlap: function(group) {
        var node = new mathMLTree.MathNode(
            "mpadded", [buildGroup(group.value.body)]);

        node.setAttribute("width", "0px");

        return node;
    }
};

/**
 * Takes a list of nodes, builds them, and returns a list of the generated
 * MathML nodes. A little simpler than the HTML version because we don't do any
 * previous-node handling.
 */
var buildExpression = function(expression) {
    var groups = [];
    for (var i = 0; i < expression.length; i++) {
        var group = expression[i];
        groups.push(buildGroup(group));
    }
    return groups;
};

/**
 * Takes a group from the parser and calls the appropriate groupTypes function
 * on it to produce a MathML node.
 */
var buildGroup = function(group) {
    if (!group) {
        return new mathMLTree.MathNode("mrow");
    }

    if (groupTypes[group.type]) {
        // Call the groupTypes function
        return groupTypes[group.type](group);
    } else {
        throw new ParseError(
            "Got group of unknown type: '" + group.type + "'");
    }
};

/**
 * Takes a full parse tree and settings and builds a MathML representation of
 * it. In particular, we put the elements from building the parse tree into a
 * <semantics> tag so we can also include that TeX source as an annotation.
 *
 * Note that we actually return a domTree element with a `<math>` inside it so
 * we can do appropriate styling.
 */
var buildMathML = function(tree, texExpression, settings) {
    var expression = buildExpression(tree);

    // Wrap up the expression in an mrow so it is presented in the semantics
    // tag correctly.
    var wrapper = new mathMLTree.MathNode("mrow", expression);

    // Build a TeX annotation of the source
    var annotation = new mathMLTree.MathNode(
        "annotation", [new mathMLTree.TextNode(texExpression)]);

    annotation.setAttribute("encoding", "application/x-tex");

    var semantics = new mathMLTree.MathNode(
        "semantics", [wrapper, annotation]);

    var math = new mathMLTree.MathNode("math", [semantics]);

    // You can't style <math> nodes, so we wrap the node in a span.
    return makeSpan(["katex-mathml"], [math]);
};

module.exports = buildMathML;

},{"./ParseError":6,"./buildCommon":10,"./mathMLTree":18,"./symbols":20}],13:[function(require,module,exports){

var buildHTML = require("./buildHTML");
var buildMathML = require("./buildMathML");
var buildCommon = require("./buildCommon");

var makeSpan = buildCommon.makeSpan;

var buildTree = function(tree, expression, settings) {
    // `buildHTML` sometimes messes with the parse tree (like turning bins ->
    // ords), so we build the MathML version first.
    var mathMLNode = buildMathML(tree, expression, settings);
    var htmlNode = buildHTML(tree, settings);

    var katexNode = makeSpan(["katex"], [
        mathMLNode, htmlNode
    ]);

    if (settings.displayMode) {
        return makeSpan(["katex-display"], [katexNode]);
    } else {
        return katexNode;
    }
};

module.exports = buildTree;

},{"./buildCommon":10,"./buildHTML":11,"./buildMathML":12}],14:[function(require,module,exports){
/**
 * This file deals with creating delimiters of various sizes. The TeXbook
 * discusses these routines on page 441-442, in the "Another subroutine sets box
 * x to a specified variable delimiter" paragraph.
 *
 * There are three main routines here. `makeSmallDelim` makes a delimiter in the
 * normal font, but in either text, script, or scriptscript style.
 * `makeLargeDelim` makes a delimiter in textstyle, but in one of the Size1,
 * Size2, Size3, or Size4 fonts. `makeStackedDelim` makes a delimiter out of
 * smaller pieces that are stacked on top of one another.
 *
 * The functions take a parameter `center`, which determines if the delimiter
 * should be centered around the axis.
 *
 * Then, there are three exposed functions. `sizedDelim` makes a delimiter in
 * one of the given sizes. This is used for things like `\bigl`.
 * `customSizedDelim` makes a delimiter with a given total height+depth. It is
 * called in places like `\sqrt`. `leftRightDelim` makes an appropriate
 * delimiter which surrounds an expression of a given height an depth. It is
 * used in `\left` and `\right`.
 */

var ParseError = require("./ParseError");
var Style = require("./Style");

var buildCommon = require("./buildCommon");
var fontMetrics = require("./fontMetrics");
var symbols = require("./symbols");
var utils = require("./utils");

var makeSpan = buildCommon.makeSpan;

/**
 * Get the metrics for a given symbol and font, after transformation (i.e.
 * after following replacement from symbols.js)
 */
var getMetrics = function(symbol, font) {
    if (symbols.math[symbol] && symbols.math[symbol].replace) {
        return fontMetrics.getCharacterMetrics(
            symbols.math[symbol].replace, font);
    } else {
        return fontMetrics.getCharacterMetrics(
            symbol, font);
    }
};

/**
 * Builds a symbol in the given font size (note size is an integer)
 */
var mathrmSize = function(value, size, mode) {
    return buildCommon.makeSymbol(value, "Size" + size + "-Regular", mode);
};

/**
 * Puts a delimiter span in a given style, and adds appropriate height, depth,
 * and maxFontSizes.
 */
var styleWrap = function(delim, toStyle, options) {
    var span = makeSpan(
        ["style-wrap", options.style.reset(), toStyle.cls()], [delim]);

    var multiplier = toStyle.sizeMultiplier / options.style.sizeMultiplier;

    span.height *= multiplier;
    span.depth *= multiplier;
    span.maxFontSize = toStyle.sizeMultiplier;

    return span;
};

/**
 * Makes a small delimiter. This is a delimiter that comes in the Main-Regular
 * font, but is restyled to either be in textstyle, scriptstyle, or
 * scriptscriptstyle.
 */
var makeSmallDelim = function(delim, style, center, options, mode) {
    var text = buildCommon.makeSymbol(delim, "Main-Regular", mode);

    var span = styleWrap(text, style, options);

    if (center) {
        var shift =
            (1 - options.style.sizeMultiplier / style.sizeMultiplier) *
            fontMetrics.metrics.axisHeight;

        span.style.top = shift + "em";
        span.height -= shift;
        span.depth += shift;
    }

    return span;
};

/**
 * Makes a large delimiter. This is a delimiter that comes in the Size1, Size2,
 * Size3, or Size4 fonts. It is always rendered in textstyle.
 */
var makeLargeDelim = function(delim, size, center, options, mode) {
    var inner = mathrmSize(delim, size, mode);

    var span = styleWrap(
        makeSpan(["delimsizing", "size" + size],
                 [inner], options.getColor()),
        Style.TEXT, options);

    if (center) {
        var shift = (1 - options.style.sizeMultiplier) *
            fontMetrics.metrics.axisHeight;

        span.style.top = shift + "em";
        span.height -= shift;
        span.depth += shift;
    }

    return span;
};

/**
 * Make an inner span with the given offset and in the given font. This is used
 * in `makeStackedDelim` to make the stacking pieces for the delimiter.
 */
var makeInner = function(symbol, font, mode) {
    var sizeClass;
    // Apply the correct CSS class to choose the right font.
    if (font === "Size1-Regular") {
        sizeClass = "delim-size1";
    } else if (font === "Size4-Regular") {
        sizeClass = "delim-size4";
    }

    var inner = makeSpan(
        ["delimsizinginner", sizeClass],
        [makeSpan([], [buildCommon.makeSymbol(symbol, font, mode)])]);

    // Since this will be passed into `makeVList` in the end, wrap the element
    // in the appropriate tag that VList uses.
    return {type: "elem", elem: inner};
};

/**
 * Make a stacked delimiter out of a given delimiter, with the total height at
 * least `heightTotal`. This routine is mentioned on page 442 of the TeXbook.
 */
var makeStackedDelim = function(delim, heightTotal, center, options, mode) {
    // There are four parts, the top, an optional middle, a repeated part, and a
    // bottom.
    var top, middle, repeat, bottom;
    top = repeat = bottom = delim;
    middle = null;
    // Also keep track of what font the delimiters are in
    var font = "Size1-Regular";

    // We set the parts and font based on the symbol. Note that we use
    // '\u23d0' instead of '|' and '\u2016' instead of '\\|' for the
    // repeats of the arrows
    if (delim === "\\uparrow") {
        repeat = bottom = "\u23d0";
    } else if (delim === "\\Uparrow") {
        repeat = bottom = "\u2016";
    } else if (delim === "\\downarrow") {
        top = repeat = "\u23d0";
    } else if (delim === "\\Downarrow") {
        top = repeat = "\u2016";
    } else if (delim === "\\updownarrow") {
        top = "\\uparrow";
        repeat = "\u23d0";
        bottom = "\\downarrow";
    } else if (delim === "\\Updownarrow") {
        top = "\\Uparrow";
        repeat = "\u2016";
        bottom = "\\Downarrow";
    } else if (delim === "[" || delim === "\\lbrack") {
        top = "\u23a1";
        repeat = "\u23a2";
        bottom = "\u23a3";
        font = "Size4-Regular";
    } else if (delim === "]" || delim === "\\rbrack") {
        top = "\u23a4";
        repeat = "\u23a5";
        bottom = "\u23a6";
        font = "Size4-Regular";
    } else if (delim === "\\lfloor") {
        repeat = top = "\u23a2";
        bottom = "\u23a3";
        font = "Size4-Regular";
    } else if (delim === "\\lceil") {
        top = "\u23a1";
        repeat = bottom = "\u23a2";
        font = "Size4-Regular";
    } else if (delim === "\\rfloor") {
        repeat = top = "\u23a5";
        bottom = "\u23a6";
        font = "Size4-Regular";
    } else if (delim === "\\rceil") {
        top = "\u23a4";
        repeat = bottom = "\u23a5";
        font = "Size4-Regular";
    } else if (delim === "(") {
        top = "\u239b";
        repeat = "\u239c";
        bottom = "\u239d";
        font = "Size4-Regular";
    } else if (delim === ")") {
        top = "\u239e";
        repeat = "\u239f";
        bottom = "\u23a0";
        font = "Size4-Regular";
    } else if (delim === "\\{" || delim === "\\lbrace") {
        top = "\u23a7";
        middle = "\u23a8";
        bottom = "\u23a9";
        repeat = "\u23aa";
        font = "Size4-Regular";
    } else if (delim === "\\}" || delim === "\\rbrace") {
        top = "\u23ab";
        middle = "\u23ac";
        bottom = "\u23ad";
        repeat = "\u23aa";
        font = "Size4-Regular";
    } else if (delim === "\\surd") {
        top = "\ue001";
        bottom = "\u23b7";
        repeat = "\ue000";
        font = "Size4-Regular";
    }

    // Get the metrics of the four sections
    var topMetrics = getMetrics(top, font);
    var topHeightTotal = topMetrics.height + topMetrics.depth;
    var repeatMetrics = getMetrics(repeat, font);
    var repeatHeightTotal = repeatMetrics.height + repeatMetrics.depth;
    var bottomMetrics = getMetrics(bottom, font);
    var bottomHeightTotal = bottomMetrics.height + bottomMetrics.depth;
    var middleMetrics, middleHeightTotal;
    if (middle !== null) {
        middleMetrics = getMetrics(middle, font);
        middleHeightTotal = middleMetrics.height + middleMetrics.depth;
    }

    // Calcuate the real height that the delimiter will have. It is at least the
    // size of the top, bottom, and optional middle combined.
    var realHeightTotal = topHeightTotal + bottomHeightTotal;
    if (middle !== null) {
        realHeightTotal += middleHeightTotal;
    }

    // Then add repeated pieces until we reach the specified height.
    while (realHeightTotal < heightTotal) {
        realHeightTotal += repeatHeightTotal;
        if (middle !== null) {
            // If there is a middle section, we need an equal number of pieces
            // on the top and bottom.
            realHeightTotal += repeatHeightTotal;
        }
    }

    // The center of the delimiter is placed at the center of the axis. Note
    // that in this context, "center" means that the delimiter should be
    // centered around the axis in the current style, while normally it is
    // centered around the axis in textstyle.
    var axisHeight = fontMetrics.metrics.axisHeight;
    if (center) {
        axisHeight *= options.style.sizeMultiplier;
    }
    // Calculate the depth
    var depth = realHeightTotal / 2 - axisHeight;

    // Now, we start building the pieces that will go into the vlist

    // Keep a list of the inner pieces
    var inners = [];

    // Add the bottom symbol
    inners.push(makeInner(bottom, font, mode));

    var i;
    if (middle === null) {
        // Calculate the number of repeated symbols we need
        var repeatHeight = realHeightTotal - topHeightTotal - bottomHeightTotal;
        var symbolCount = Math.ceil(repeatHeight / repeatHeightTotal);

        // Add that many symbols
        for (i = 0; i < symbolCount; i++) {
            inners.push(makeInner(repeat, font, mode));
        }
    } else {
        // When there is a middle bit, we need the middle part and two repeated
        // sections

        // Calculate the number of symbols needed for the top and bottom
        // repeated parts
        var topRepeatHeight =
            realHeightTotal / 2 - topHeightTotal - middleHeightTotal / 2;
        var topSymbolCount = Math.ceil(topRepeatHeight / repeatHeightTotal);

        var bottomRepeatHeight =
            realHeightTotal / 2 - topHeightTotal - middleHeightTotal / 2;
        var bottomSymbolCount =
            Math.ceil(bottomRepeatHeight / repeatHeightTotal);

        // Add the top repeated part
        for (i = 0; i < topSymbolCount; i++) {
            inners.push(makeInner(repeat, font, mode));
        }

        // Add the middle piece
        inners.push(makeInner(middle, font, mode));

        // Add the bottom repeated part
        for (i = 0; i < bottomSymbolCount; i++) {
            inners.push(makeInner(repeat, font, mode));
        }
    }

    // Add the top symbol
    inners.push(makeInner(top, font, mode));

    // Finally, build the vlist
    var inner = buildCommon.makeVList(inners, "bottom", depth, options);

    return styleWrap(
        makeSpan(["delimsizing", "mult"], [inner], options.getColor()),
        Style.TEXT, options);
};

// There are three kinds of delimiters, delimiters that stack when they become
// too large
var stackLargeDelimiters = [
    "(", ")", "[", "\\lbrack", "]", "\\rbrack",
    "\\{", "\\lbrace", "\\}", "\\rbrace",
    "\\lfloor", "\\rfloor", "\\lceil", "\\rceil",
    "\\surd"
];

// delimiters that always stack
var stackAlwaysDelimiters = [
    "\\uparrow", "\\downarrow", "\\updownarrow",
    "\\Uparrow", "\\Downarrow", "\\Updownarrow",
    "|", "\\|", "\\vert", "\\Vert"
];

// and delimiters that never stack
var stackNeverDelimiters = [
    "<", ">", "\\langle", "\\rangle", "/", "\\backslash"
];

// Metrics of the different sizes. Found by looking at TeX's output of
// $\bigl| // \Bigl| \biggl| \Biggl| \showlists$
// Used to create stacked delimiters of appropriate sizes in makeSizedDelim.
var sizeToMaxHeight = [0, 1.2, 1.8, 2.4, 3.0];

/**
 * Used to create a delimiter of a specific size, where `size` is 1, 2, 3, or 4.
 */
var makeSizedDelim = function(delim, size, options, mode) {
    // < and > turn into \langle and \rangle in delimiters
    if (delim === "<") {
        delim = "\\langle";
    } else if (delim === ">") {
        delim = "\\rangle";
    }

    // Sized delimiters are never centered.
    if (utils.contains(stackLargeDelimiters, delim) ||
        utils.contains(stackNeverDelimiters, delim)) {
        return makeLargeDelim(delim, size, false, options, mode);
    } else if (utils.contains(stackAlwaysDelimiters, delim)) {
        return makeStackedDelim(
            delim, sizeToMaxHeight[size], false, options, mode);
    } else {
        throw new ParseError("Illegal delimiter: '" + delim + "'");
    }
};

/**
 * There are three different sequences of delimiter sizes that the delimiters
 * follow depending on the kind of delimiter. This is used when creating custom
 * sized delimiters to decide whether to create a small, large, or stacked
 * delimiter.
 *
 * In real TeX, these sequences aren't explicitly defined, but are instead
 * defined inside the font metrics. Since there are only three sequences that
 * are possible for the delimiters that TeX defines, it is easier to just encode
 * them explicitly here.
 */

// Delimiters that never stack try small delimiters and large delimiters only
var stackNeverDelimiterSequence = [
    {type: "small", style: Style.SCRIPTSCRIPT},
    {type: "small", style: Style.SCRIPT},
    {type: "small", style: Style.TEXT},
    {type: "large", size: 1},
    {type: "large", size: 2},
    {type: "large", size: 3},
    {type: "large", size: 4}
];

// Delimiters that always stack try the small delimiters first, then stack
var stackAlwaysDelimiterSequence = [
    {type: "small", style: Style.SCRIPTSCRIPT},
    {type: "small", style: Style.SCRIPT},
    {type: "small", style: Style.TEXT},
    {type: "stack"}
];

// Delimiters that stack when large try the small and then large delimiters, and
// stack afterwards
var stackLargeDelimiterSequence = [
    {type: "small", style: Style.SCRIPTSCRIPT},
    {type: "small", style: Style.SCRIPT},
    {type: "small", style: Style.TEXT},
    {type: "large", size: 1},
    {type: "large", size: 2},
    {type: "large", size: 3},
    {type: "large", size: 4},
    {type: "stack"}
];

/**
 * Get the font used in a delimiter based on what kind of delimiter it is.
 */
var delimTypeToFont = function(type) {
    if (type.type === "small") {
        return "Main-Regular";
    } else if (type.type === "large") {
        return "Size" + type.size + "-Regular";
    } else if (type.type === "stack") {
        return "Size4-Regular";
    }
};

/**
 * Traverse a sequence of types of delimiters to decide what kind of delimiter
 * should be used to create a delimiter of the given height+depth.
 */
var traverseSequence = function(delim, height, sequence, options) {
    // Here, we choose the index we should start at in the sequences. In smaller
    // sizes (which correspond to larger numbers in style.size) we start earlier
    // in the sequence. Thus, scriptscript starts at index 3-3=0, script starts
    // at index 3-2=1, text starts at 3-1=2, and display starts at min(2,3-0)=2
    var start = Math.min(2, 3 - options.style.size);
    for (var i = start; i < sequence.length; i++) {
        if (sequence[i].type === "stack") {
            // This is always the last delimiter, so we just break the loop now.
            break;
        }

        var metrics = getMetrics(delim, delimTypeToFont(sequence[i]));
        var heightDepth = metrics.height + metrics.depth;

        // Small delimiters are scaled down versions of the same font, so we
        // account for the style change size.

        if (sequence[i].type === "small") {
            heightDepth *= sequence[i].style.sizeMultiplier;
        }

        // Check if the delimiter at this size works for the given height.
        if (heightDepth > height) {
            return sequence[i];
        }
    }

    // If we reached the end of the sequence, return the last sequence element.
    return sequence[sequence.length - 1];
};

/**
 * Make a delimiter of a given height+depth, with optional centering. Here, we
 * traverse the sequences, and create a delimiter that the sequence tells us to.
 */
var makeCustomSizedDelim = function(delim, height, center, options, mode) {
    if (delim === "<") {
        delim = "\\langle";
    } else if (delim === ">") {
        delim = "\\rangle";
    }

    // Decide what sequence to use
    var sequence;
    if (utils.contains(stackNeverDelimiters, delim)) {
        sequence = stackNeverDelimiterSequence;
    } else if (utils.contains(stackLargeDelimiters, delim)) {
        sequence = stackLargeDelimiterSequence;
    } else {
        sequence = stackAlwaysDelimiterSequence;
    }

    // Look through the sequence
    var delimType = traverseSequence(delim, height, sequence, options);

    // Depending on the sequence element we decided on, call the appropriate
    // function.
    if (delimType.type === "small") {
        return makeSmallDelim(delim, delimType.style, center, options, mode);
    } else if (delimType.type === "large") {
        return makeLargeDelim(delim, delimType.size, center, options, mode);
    } else if (delimType.type === "stack") {
        return makeStackedDelim(delim, height, center, options, mode);
    }
};

/**
 * Make a delimiter for use with `\left` and `\right`, given a height and depth
 * of an expression that the delimiters surround.
 */
var makeLeftRightDelim = function(delim, height, depth, options, mode) {
    // We always center \left/\right delimiters, so the axis is always shifted
    var axisHeight =
        fontMetrics.metrics.axisHeight * options.style.sizeMultiplier;

    // Taken from TeX source, tex.web, function make_left_right
    var delimiterFactor = 901;
    var delimiterExtend = 5.0 / fontMetrics.metrics.ptPerEm;

    var maxDistFromAxis = Math.max(
        height - axisHeight, depth + axisHeight);

    var totalHeight = Math.max(
        // In real TeX, calculations are done using integral values which are
        // 65536 per pt, or 655360 per em. So, the division here truncates in
        // TeX but doesn't here, producing different results. If we wanted to
        // exactly match TeX's calculation, we could do
        //   Math.floor(655360 * maxDistFromAxis / 500) *
        //    delimiterFactor / 655360
        // (To see the difference, compare
        //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
        // in TeX and KaTeX)
        maxDistFromAxis / 500 * delimiterFactor,
        2 * maxDistFromAxis - delimiterExtend);

    // Finally, we defer to `makeCustomSizedDelim` with our calculated total
    // height
    return makeCustomSizedDelim(delim, totalHeight, true, options, mode);
};

module.exports = {
    sizedDelim: makeSizedDelim,
    customSizedDelim: makeCustomSizedDelim,
    leftRightDelim: makeLeftRightDelim
};

},{"./ParseError":6,"./Style":9,"./buildCommon":10,"./fontMetrics":16,"./symbols":20,"./utils":21}],15:[function(require,module,exports){
/**
 * These objects store the data about the DOM nodes we create, as well as some
 * extra data. They can then be transformed into real DOM nodes with the
 * `toNode` function or HTML markup using `toMarkup`. They are useful for both
 * storing extra properties on the nodes, as well as providing a way to easily
 * work with the DOM.
 *
 * Similar functions for working with MathML nodes exist in mathMLTree.js.
 */

var utils = require("./utils");

/**
 * Create an HTML className based on a list of classes. In addition to joining
 * with spaces, we also remove null or empty classes.
 */
var createClass = function(classes) {
    classes = classes.slice();
    for (var i = classes.length - 1; i >= 0; i--) {
        if (!classes[i]) {
            classes.splice(i, 1);
        }
    }

    return classes.join(" ");
};

/**
 * This node represents a span node, with a className, a list of children, and
 * an inline style. It also contains information about its height, depth, and
 * maxFontSize.
 */
function span(classes, children, height, depth, maxFontSize, style) {
    this.classes = classes || [];
    this.children = children || [];
    this.height = height || 0;
    this.depth = depth || 0;
    this.maxFontSize = maxFontSize || 0;
    this.style = style || {};
    this.attributes = {};
}

/**
 * Sets an arbitrary attribute on the span. Warning: use this wisely. Not all
 * browsers support attributes the same, and having too many custom attributes
 * is probably bad.
 */
span.prototype.setAttribute = function(attribute, value) {
    this.attributes[attribute] = value;
};

/**
 * Convert the span into an HTML node
 */
span.prototype.toNode = function() {
    var span = document.createElement("span");

    // Apply the class
    span.className = createClass(this.classes);

    // Apply inline styles
    for (var style in this.style) {
        if (Object.prototype.hasOwnProperty.call(this.style, style)) {
            span.style[style] = this.style[style];
        }
    }

    // Apply attributes
    for (var attr in this.attributes) {
        if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            span.setAttribute(attr, this.attributes[attr]);
        }
    }

    // Append the children, also as HTML nodes
    for (var i = 0; i < this.children.length; i++) {
        span.appendChild(this.children[i].toNode());
    }

    return span;
};

/**
 * Convert the span into an HTML markup string
 */
span.prototype.toMarkup = function() {
    var markup = "<span";

    // Add the class
    if (this.classes.length) {
        markup += " class=\"";
        markup += utils.escape(createClass(this.classes));
        markup += "\"";
    }

    var styles = "";

    // Add the styles, after hyphenation
    for (var style in this.style) {
        if (this.style.hasOwnProperty(style)) {
            styles += utils.hyphenate(style) + ":" + this.style[style] + ";";
        }
    }

    if (styles) {
        markup += " style=\"" + utils.escape(styles) + "\"";
    }

    // Add the attributes
    for (var attr in this.attributes) {
        if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            markup += " " + attr + "=\"";
            markup += utils.escape(this.attributes[attr]);
            markup += "\"";
        }
    }

    markup += ">";

    // Add the markup of the children, also as markup
    for (var i = 0; i < this.children.length; i++) {
        markup += this.children[i].toMarkup();
    }

    markup += "</span>";

    return markup;
};

/**
 * This node represents a document fragment, which contains elements, but when
 * placed into the DOM doesn't have any representation itself. Thus, it only
 * contains children and doesn't have any HTML properties. It also keeps track
 * of a height, depth, and maxFontSize.
 */
function documentFragment(children, height, depth, maxFontSize) {
    this.children = children || [];
    this.height = height || 0;
    this.depth = depth || 0;
    this.maxFontSize = maxFontSize || 0;
}

/**
 * Convert the fragment into a node
 */
documentFragment.prototype.toNode = function() {
    // Create a fragment
    var frag = document.createDocumentFragment();

    // Append the children
    for (var i = 0; i < this.children.length; i++) {
        frag.appendChild(this.children[i].toNode());
    }

    return frag;
};

/**
 * Convert the fragment into HTML markup
 */
documentFragment.prototype.toMarkup = function() {
    var markup = "";

    // Simply concatenate the markup for the children together
    for (var i = 0; i < this.children.length; i++) {
        markup += this.children[i].toMarkup();
    }

    return markup;
};

/**
 * A symbol node contains information about a single symbol. It either renders
 * to a single text node, or a span with a single text node in it, depending on
 * whether it has CSS classes, styles, or needs italic correction.
 */
function symbolNode(value, height, depth, italic, skew, classes, style) {
    this.value = value || "";
    this.height = height || 0;
    this.depth = depth || 0;
    this.italic = italic || 0;
    this.skew = skew || 0;
    this.classes = classes || [];
    this.style = style || {};
    this.maxFontSize = 0;
}

/**
 * Creates a text node or span from a symbol node. Note that a span is only
 * created if it is needed.
 */
symbolNode.prototype.toNode = function() {
    var node = document.createTextNode(this.value);
    var span = null;

    if (this.italic > 0) {
        span = document.createElement("span");
        span.style.marginRight = this.italic + "em";
    }

    if (this.classes.length > 0) {
        span = span || document.createElement("span");
        span.className = createClass(this.classes);
    }

    for (var style in this.style) {
        if (this.style.hasOwnProperty(style)) {
            span = span || document.createElement("span");
            span.style[style] = this.style[style];
        }
    }

    if (span) {
        span.appendChild(node);
        return span;
    } else {
        return node;
    }
};

/**
 * Creates markup for a symbol node.
 */
symbolNode.prototype.toMarkup = function() {
    // TODO(alpert): More duplication than I'd like from
    // span.prototype.toMarkup and symbolNode.prototype.toNode...
    var needsSpan = false;

    var markup = "<span";

    if (this.classes.length) {
        needsSpan = true;
        markup += " class=\"";
        markup += utils.escape(createClass(this.classes));
        markup += "\"";
    }

    var styles = "";

    if (this.italic > 0) {
        styles += "margin-right:" + this.italic + "em;";
    }
    for (var style in this.style) {
        if (this.style.hasOwnProperty(style)) {
            styles += utils.hyphenate(style) + ":" + this.style[style] + ";";
        }
    }

    if (styles) {
        needsSpan = true;
        markup += " style=\"" + utils.escape(styles) + "\"";
    }

    var escaped = utils.escape(this.value);
    if (needsSpan) {
        markup += ">";
        markup += escaped;
        markup += "</span>";
        return markup;
    } else {
        return escaped;
    }
};

module.exports = {
    span: span,
    documentFragment: documentFragment,
    symbolNode: symbolNode
};

},{"./utils":21}],16:[function(require,module,exports){
/* jshint unused:false */

var Style = require("./Style");

/**
 * This file contains metrics regarding fonts and individual symbols. The sigma
 * and xi variables, as well as the metricMap map contain data extracted from
 * TeX, TeX font metrics, and the TTF files. These data are then exposed via the
 * `metrics` variable and the getCharacterMetrics function.
 */

// These font metrics are extracted from TeX by using
// \font\a=cmmi10
// \showthe\fontdimenX\a
// where X is the corresponding variable number. These correspond to the font
// parameters of the symbol fonts. In TeX, there are actually three sets of
// dimensions, one for each of textstyle, scriptstyle, and scriptscriptstyle,
// but we only use the textstyle ones, and scale certain dimensions accordingly.
// See the TeXbook, page 441.
var sigma1 = 0.025;
var sigma2 = 0;
var sigma3 = 0;
var sigma4 = 0;
var sigma5 = 0.431;
var sigma6 = 1;
var sigma7 = 0;
var sigma8 = 0.677;
var sigma9 = 0.394;
var sigma10 = 0.444;
var sigma11 = 0.686;
var sigma12 = 0.345;
var sigma13 = 0.413;
var sigma14 = 0.363;
var sigma15 = 0.289;
var sigma16 = 0.150;
var sigma17 = 0.247;
var sigma18 = 0.386;
var sigma19 = 0.050;
var sigma20 = 2.390;
var sigma21 = 1.01;
var sigma21Script = 0.81;
var sigma21ScriptScript = 0.71;
var sigma22 = 0.250;

// These font metrics are extracted from TeX by using
// \font\a=cmex10
// \showthe\fontdimenX\a
// where X is the corresponding variable number. These correspond to the font
// parameters of the extension fonts (family 3). See the TeXbook, page 441.
var xi1 = 0;
var xi2 = 0;
var xi3 = 0;
var xi4 = 0;
var xi5 = 0.431;
var xi6 = 1;
var xi7 = 0;
var xi8 = 0.04;
var xi9 = 0.111;
var xi10 = 0.166;
var xi11 = 0.2;
var xi12 = 0.6;
var xi13 = 0.1;

// This value determines how large a pt is, for metrics which are defined in
// terms of pts.
// This value is also used in katex.less; if you change it make sure the values
// match.
var ptPerEm = 10.0;

/**
 * This is just a mapping from common names to real metrics
 */
var metrics = {
    xHeight: sigma5,
    quad: sigma6,
    num1: sigma8,
    num2: sigma9,
    num3: sigma10,
    denom1: sigma11,
    denom2: sigma12,
    sup1: sigma13,
    sup2: sigma14,
    sup3: sigma15,
    sub1: sigma16,
    sub2: sigma17,
    supDrop: sigma18,
    subDrop: sigma19,
    axisHeight: sigma22,
    defaultRuleThickness: xi8,
    bigOpSpacing1: xi9,
    bigOpSpacing2: xi10,
    bigOpSpacing3: xi11,
    bigOpSpacing4: xi12,
    bigOpSpacing5: xi13,
    ptPerEm: ptPerEm,

    // TODO(alpert): Missing parallel structure here. We should probably add
    // style-specific metrics for all of these.
    delim1: sigma20,
    getDelim2: function(style) {
        if (style.size === Style.TEXT.size) {
            return sigma21;
        } else if (style.size === Style.SCRIPT.size) {
            return sigma21Script;
        } else if (style.size === Style.SCRIPTSCRIPT.size) {
            return sigma21ScriptScript;
        }
        throw new Error("Unexpected style size: " + style.size);
    }
};

// This map contains a mapping from font name and character code to character
// metrics, including height, depth, italic correction, and skew (kern from the
// character to the corresponding \skewchar)
// This map is generated via `make metrics`. It should not be changed manually.
var metricMap = {"AMS-Regular":{"8672":{"depth":-0.064,"height":0.437,"italic":0,"skew":0},"8674":{"depth":-0.064,"height":0.437,"italic":0,"skew":0},"10003":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"10016":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"1008":{"depth":0.0,"height":0.43056,"italic":0.04028,"skew":0.0},"107":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"10731":{"depth":0.11111,"height":0.69224,"italic":0.0,"skew":0.0},"10846":{"depth":0.19444,"height":0.75583,"italic":0.0,"skew":0.0},"10877":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"10878":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"10885":{"depth":0.25583,"height":0.75583,"italic":0.0,"skew":0.0},"10886":{"depth":0.25583,"height":0.75583,"italic":0.0,"skew":0.0},"10887":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"10888":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"10889":{"depth":0.26167,"height":0.75726,"italic":0.0,"skew":0.0},"10890":{"depth":0.26167,"height":0.75726,"italic":0.0,"skew":0.0},"10891":{"depth":0.48256,"height":0.98256,"italic":0.0,"skew":0.0},"10892":{"depth":0.48256,"height":0.98256,"italic":0.0,"skew":0.0},"10901":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"10902":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"10933":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"10934":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"10935":{"depth":0.26167,"height":0.75726,"italic":0.0,"skew":0.0},"10936":{"depth":0.26167,"height":0.75726,"italic":0.0,"skew":0.0},"10937":{"depth":0.26167,"height":0.75726,"italic":0.0,"skew":0.0},"10938":{"depth":0.26167,"height":0.75726,"italic":0.0,"skew":0.0},"10949":{"depth":0.25583,"height":0.75583,"italic":0.0,"skew":0.0},"10950":{"depth":0.25583,"height":0.75583,"italic":0.0,"skew":0.0},"10955":{"depth":0.28481,"height":0.79383,"italic":0.0,"skew":0.0},"10956":{"depth":0.28481,"height":0.79383,"italic":0.0,"skew":0.0},"165":{"depth":0.0,"height":0.675,"italic":0.025,"skew":0.0},"174":{"depth":0.15559,"height":0.69224,"italic":0.0,"skew":0.0},"240":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"295":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"57350":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"57351":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"57352":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"57353":{"depth":0.0,"height":0.43056,"italic":0.04028,"skew":0.0},"57356":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"57357":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"57358":{"depth":0.41951,"height":0.91951,"italic":0.0,"skew":0.0},"57359":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"57360":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"57361":{"depth":0.41951,"height":0.91951,"italic":0.0,"skew":0.0},"57366":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"57367":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"57368":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"57369":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"57370":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"57371":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"65":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"66":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"67":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"68":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"69":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"70":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"71":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"710":{"depth":0.0,"height":0.825,"italic":0.0,"skew":0.0},"72":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"73":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"732":{"depth":0.0,"height":0.9,"italic":0.0,"skew":0.0},"74":{"depth":0.16667,"height":0.68889,"italic":0.0,"skew":0.0},"75":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"76":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"77":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"770":{"depth":0.0,"height":0.825,"italic":0.0,"skew":0.0},"771":{"depth":0.0,"height":0.9,"italic":0.0,"skew":0.0},"78":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"79":{"depth":0.16667,"height":0.68889,"italic":0.0,"skew":0.0},"80":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"81":{"depth":0.16667,"height":0.68889,"italic":0.0,"skew":0.0},"82":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8245":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"83":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"84":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8463":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8487":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8498":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"85":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8502":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8503":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8504":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8513":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8592":{"depth":-0.03598,"height":0.46402,"italic":0.0,"skew":0.0},"8594":{"depth":-0.03598,"height":0.46402,"italic":0.0,"skew":0.0},"86":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8602":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8603":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8606":{"depth":0.01354,"height":0.52239,"italic":0.0,"skew":0.0},"8608":{"depth":0.01354,"height":0.52239,"italic":0.0,"skew":0.0},"8610":{"depth":0.01354,"height":0.52239,"italic":0.0,"skew":0.0},"8611":{"depth":0.01354,"height":0.52239,"italic":0.0,"skew":0.0},"8619":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"8620":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"8621":{"depth":-0.13313,"height":0.37788,"italic":0.0,"skew":0.0},"8622":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8624":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8625":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8630":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"8631":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"8634":{"depth":0.08198,"height":0.58198,"italic":0.0,"skew":0.0},"8635":{"depth":0.08198,"height":0.58198,"italic":0.0,"skew":0.0},"8638":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"8639":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"8642":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"8643":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"8644":{"depth":0.1808,"height":0.675,"italic":0.0,"skew":0.0},"8646":{"depth":0.1808,"height":0.675,"italic":0.0,"skew":0.0},"8647":{"depth":0.1808,"height":0.675,"italic":0.0,"skew":0.0},"8648":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"8649":{"depth":0.1808,"height":0.675,"italic":0.0,"skew":0.0},"8650":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"8651":{"depth":0.01354,"height":0.52239,"italic":0.0,"skew":0.0},"8652":{"depth":0.01354,"height":0.52239,"italic":0.0,"skew":0.0},"8653":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8654":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8655":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8666":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"8667":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"8669":{"depth":-0.13313,"height":0.37788,"italic":0.0,"skew":0.0},"87":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8705":{"depth":0.0,"height":0.825,"italic":0.0,"skew":0.0},"8708":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8709":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"8717":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"8722":{"depth":-0.03598,"height":0.46402,"italic":0.0,"skew":0.0},"8724":{"depth":0.08198,"height":0.69224,"italic":0.0,"skew":0.0},"8726":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"8733":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8736":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8737":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8738":{"depth":0.03517,"height":0.52239,"italic":0.0,"skew":0.0},"8739":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"8740":{"depth":0.25142,"height":0.74111,"italic":0.0,"skew":0.0},"8741":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"8742":{"depth":0.25142,"height":0.74111,"italic":0.0,"skew":0.0},"8756":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8757":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8764":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8765":{"depth":-0.13313,"height":0.37788,"italic":0.0,"skew":0.0},"8769":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8770":{"depth":-0.03625,"height":0.46375,"italic":0.0,"skew":0.0},"8774":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8776":{"depth":-0.01688,"height":0.48312,"italic":0.0,"skew":0.0},"8778":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"8782":{"depth":0.06062,"height":0.54986,"italic":0.0,"skew":0.0},"8783":{"depth":0.06062,"height":0.54986,"italic":0.0,"skew":0.0},"8785":{"depth":0.08198,"height":0.58198,"italic":0.0,"skew":0.0},"8786":{"depth":0.08198,"height":0.58198,"italic":0.0,"skew":0.0},"8787":{"depth":0.08198,"height":0.58198,"italic":0.0,"skew":0.0},"8790":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8791":{"depth":0.22958,"height":0.72958,"italic":0.0,"skew":0.0},"8796":{"depth":0.08198,"height":0.91667,"italic":0.0,"skew":0.0},"88":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8806":{"depth":0.25583,"height":0.75583,"italic":0.0,"skew":0.0},"8807":{"depth":0.25583,"height":0.75583,"italic":0.0,"skew":0.0},"8808":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"8809":{"depth":0.25142,"height":0.75726,"italic":0.0,"skew":0.0},"8812":{"depth":0.25583,"height":0.75583,"italic":0.0,"skew":0.0},"8814":{"depth":0.20576,"height":0.70576,"italic":0.0,"skew":0.0},"8815":{"depth":0.20576,"height":0.70576,"italic":0.0,"skew":0.0},"8816":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8817":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8818":{"depth":0.22958,"height":0.72958,"italic":0.0,"skew":0.0},"8819":{"depth":0.22958,"height":0.72958,"italic":0.0,"skew":0.0},"8822":{"depth":0.1808,"height":0.675,"italic":0.0,"skew":0.0},"8823":{"depth":0.1808,"height":0.675,"italic":0.0,"skew":0.0},"8828":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"8829":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"8830":{"depth":0.22958,"height":0.72958,"italic":0.0,"skew":0.0},"8831":{"depth":0.22958,"height":0.72958,"italic":0.0,"skew":0.0},"8832":{"depth":0.20576,"height":0.70576,"italic":0.0,"skew":0.0},"8833":{"depth":0.20576,"height":0.70576,"italic":0.0,"skew":0.0},"8840":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8841":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8842":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"8843":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"8847":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"8848":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"8858":{"depth":0.08198,"height":0.58198,"italic":0.0,"skew":0.0},"8859":{"depth":0.08198,"height":0.58198,"italic":0.0,"skew":0.0},"8861":{"depth":0.08198,"height":0.58198,"italic":0.0,"skew":0.0},"8862":{"depth":0.0,"height":0.675,"italic":0.0,"skew":0.0},"8863":{"depth":0.0,"height":0.675,"italic":0.0,"skew":0.0},"8864":{"depth":0.0,"height":0.675,"italic":0.0,"skew":0.0},"8865":{"depth":0.0,"height":0.675,"italic":0.0,"skew":0.0},"8872":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8873":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8874":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8876":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8877":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8878":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8879":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8882":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"8883":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"8884":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"8885":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"8888":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"8890":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.0},"8891":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"8892":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"89":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8901":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"8903":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"8905":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"8906":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0},"8907":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8908":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8909":{"depth":-0.03598,"height":0.46402,"italic":0.0,"skew":0.0},"8910":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"8911":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"8912":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"8913":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"8914":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"8915":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"8916":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8918":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8919":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8920":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"8921":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"8922":{"depth":0.38569,"height":0.88569,"italic":0.0,"skew":0.0},"8923":{"depth":0.38569,"height":0.88569,"italic":0.0,"skew":0.0},"8926":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"8927":{"depth":0.13667,"height":0.63667,"italic":0.0,"skew":0.0},"8928":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8929":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8934":{"depth":0.23222,"height":0.74111,"italic":0.0,"skew":0.0},"8935":{"depth":0.23222,"height":0.74111,"italic":0.0,"skew":0.0},"8936":{"depth":0.23222,"height":0.74111,"italic":0.0,"skew":0.0},"8937":{"depth":0.23222,"height":0.74111,"italic":0.0,"skew":0.0},"8938":{"depth":0.20576,"height":0.70576,"italic":0.0,"skew":0.0},"8939":{"depth":0.20576,"height":0.70576,"italic":0.0,"skew":0.0},"8940":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8941":{"depth":0.30274,"height":0.79383,"italic":0.0,"skew":0.0},"8994":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"8995":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"90":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"9416":{"depth":0.15559,"height":0.69224,"italic":0.0,"skew":0.0},"9484":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"9488":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"9492":{"depth":0.0,"height":0.37788,"italic":0.0,"skew":0.0},"9496":{"depth":0.0,"height":0.37788,"italic":0.0,"skew":0.0},"9585":{"depth":0.19444,"height":0.68889,"italic":0.0,"skew":0.0},"9586":{"depth":0.19444,"height":0.74111,"italic":0.0,"skew":0.0},"9632":{"depth":0.0,"height":0.675,"italic":0.0,"skew":0.0},"9633":{"depth":0.0,"height":0.675,"italic":0.0,"skew":0.0},"9650":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"9651":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"9654":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"9660":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"9661":{"depth":0.0,"height":0.54986,"italic":0.0,"skew":0.0},"9664":{"depth":0.03517,"height":0.54986,"italic":0.0,"skew":0.0},"9674":{"depth":0.11111,"height":0.69224,"italic":0.0,"skew":0.0},"9733":{"depth":0.19444,"height":0.69224,"italic":0.0,"skew":0.0},"989":{"depth":0.08167,"height":0.58167,"italic":0.0,"skew":0.0}},"Main-Bold":{"100":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"101":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"102":{"depth":0.0,"height":0.69444,"italic":0.10903,"skew":0.0},"10216":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"10217":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"103":{"depth":0.19444,"height":0.44444,"italic":0.01597,"skew":0.0},"104":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"105":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"106":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"107":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"108":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"10815":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"109":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"10927":{"depth":0.19667,"height":0.69667,"italic":0.0,"skew":0.0},"10928":{"depth":0.19667,"height":0.69667,"italic":0.0,"skew":0.0},"110":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"111":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"112":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"113":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"114":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"115":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"116":{"depth":0.0,"height":0.63492,"italic":0.0,"skew":0.0},"117":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"118":{"depth":0.0,"height":0.44444,"italic":0.01597,"skew":0.0},"119":{"depth":0.0,"height":0.44444,"italic":0.01597,"skew":0.0},"120":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"121":{"depth":0.19444,"height":0.44444,"italic":0.01597,"skew":0.0},"122":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"123":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"124":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"125":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"126":{"depth":0.35,"height":0.34444,"italic":0.0,"skew":0.0},"168":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"172":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"175":{"depth":0.0,"height":0.59611,"italic":0.0,"skew":0.0},"176":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"177":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"180":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"215":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"247":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"305":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"33":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"34":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"35":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"36":{"depth":0.05556,"height":0.75,"italic":0.0,"skew":0.0},"37":{"depth":0.05556,"height":0.75,"italic":0.0,"skew":0.0},"38":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"39":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"40":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"41":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"42":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"43":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"44":{"depth":0.19444,"height":0.15556,"italic":0.0,"skew":0.0},"45":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"46":{"depth":0.0,"height":0.15556,"italic":0.0,"skew":0.0},"47":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"48":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"49":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"50":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"51":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"52":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"53":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"54":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"55":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"56":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"567":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"57":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"58":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"59":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"60":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"61":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"62":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"63":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"64":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"65":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"66":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"67":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"68":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"69":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"70":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"71":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"710":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"711":{"depth":0.0,"height":0.63194,"italic":0.0,"skew":0.0},"713":{"depth":0.0,"height":0.59611,"italic":0.0,"skew":0.0},"714":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"715":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"72":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"728":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"729":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"73":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"730":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"732":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"74":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"75":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"76":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"768":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"769":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"77":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"770":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"771":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"772":{"depth":0.0,"height":0.59611,"italic":0.0,"skew":0.0},"774":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"775":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"776":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"778":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"779":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"78":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"780":{"depth":0.0,"height":0.63194,"italic":0.0,"skew":0.0},"79":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"80":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"81":{"depth":0.19444,"height":0.68611,"italic":0.0,"skew":0.0},"82":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"8211":{"depth":0.0,"height":0.44444,"italic":0.03194,"skew":0.0},"8212":{"depth":0.0,"height":0.44444,"italic":0.03194,"skew":0.0},"8216":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8217":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8220":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8221":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8224":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8225":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"824":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8242":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"83":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"84":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"8407":{"depth":0.0,"height":0.72444,"italic":0.15486,"skew":0.0},"8463":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8465":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8467":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8472":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"8476":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"85":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"8501":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8592":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8593":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8594":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8595":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8596":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8597":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8598":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8599":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"86":{"depth":0.0,"height":0.68611,"italic":0.01597,"skew":0.0},"8600":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8601":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8636":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8637":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8640":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8641":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8656":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8657":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8658":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8659":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8660":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8661":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"87":{"depth":0.0,"height":0.68611,"italic":0.01597,"skew":0.0},"8704":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8706":{"depth":0.0,"height":0.69444,"italic":0.06389,"skew":0.0},"8707":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8709":{"depth":0.05556,"height":0.75,"italic":0.0,"skew":0.0},"8711":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"8712":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"8715":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"8722":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"8723":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"8725":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8726":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8727":{"depth":-0.02778,"height":0.47222,"italic":0.0,"skew":0.0},"8728":{"depth":-0.02639,"height":0.47361,"italic":0.0,"skew":0.0},"8729":{"depth":-0.02639,"height":0.47361,"italic":0.0,"skew":0.0},"8730":{"depth":0.18,"height":0.82,"italic":0.0,"skew":0.0},"8733":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"8734":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"8736":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8739":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8741":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8743":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8744":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8745":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8746":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8747":{"depth":0.19444,"height":0.69444,"italic":0.12778,"skew":0.0},"8764":{"depth":-0.10889,"height":0.39111,"italic":0.0,"skew":0.0},"8768":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8771":{"depth":0.00222,"height":0.50222,"italic":0.0,"skew":0.0},"8776":{"depth":0.02444,"height":0.52444,"italic":0.0,"skew":0.0},"8781":{"depth":0.00222,"height":0.50222,"italic":0.0,"skew":0.0},"88":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"8801":{"depth":0.00222,"height":0.50222,"italic":0.0,"skew":0.0},"8804":{"depth":0.19667,"height":0.69667,"italic":0.0,"skew":0.0},"8805":{"depth":0.19667,"height":0.69667,"italic":0.0,"skew":0.0},"8810":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"8811":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"8826":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"8827":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"8834":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"8835":{"depth":0.08556,"height":0.58556,"italic":0.0,"skew":0.0},"8838":{"depth":0.19667,"height":0.69667,"italic":0.0,"skew":0.0},"8839":{"depth":0.19667,"height":0.69667,"italic":0.0,"skew":0.0},"8846":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8849":{"depth":0.19667,"height":0.69667,"italic":0.0,"skew":0.0},"8850":{"depth":0.19667,"height":0.69667,"italic":0.0,"skew":0.0},"8851":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8852":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8853":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"8854":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"8855":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"8856":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"8857":{"depth":0.13333,"height":0.63333,"italic":0.0,"skew":0.0},"8866":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8867":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8868":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8869":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"89":{"depth":0.0,"height":0.68611,"italic":0.02875,"skew":0.0},"8900":{"depth":-0.02639,"height":0.47361,"italic":0.0,"skew":0.0},"8901":{"depth":-0.02639,"height":0.47361,"italic":0.0,"skew":0.0},"8902":{"depth":-0.02778,"height":0.47222,"italic":0.0,"skew":0.0},"8968":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8969":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8970":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8971":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8994":{"depth":-0.13889,"height":0.36111,"italic":0.0,"skew":0.0},"8995":{"depth":-0.13889,"height":0.36111,"italic":0.0,"skew":0.0},"90":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"91":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"915":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"916":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"92":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"920":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"923":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"926":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"928":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"93":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"931":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"933":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"934":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"936":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"937":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"94":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"95":{"depth":0.31,"height":0.13444,"italic":0.03194,"skew":0.0},"96":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"9651":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"9657":{"depth":-0.02778,"height":0.47222,"italic":0.0,"skew":0.0},"9661":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"9667":{"depth":-0.02778,"height":0.47222,"italic":0.0,"skew":0.0},"97":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"9711":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"98":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"9824":{"depth":0.12963,"height":0.69444,"italic":0.0,"skew":0.0},"9825":{"depth":0.12963,"height":0.69444,"italic":0.0,"skew":0.0},"9826":{"depth":0.12963,"height":0.69444,"italic":0.0,"skew":0.0},"9827":{"depth":0.12963,"height":0.69444,"italic":0.0,"skew":0.0},"9837":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"9838":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"9839":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"99":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0}},"Main-Italic":{"100":{"depth":0.0,"height":0.69444,"italic":0.10333,"skew":0.0},"101":{"depth":0.0,"height":0.43056,"italic":0.07514,"skew":0.0},"102":{"depth":0.19444,"height":0.69444,"italic":0.21194,"skew":0.0},"103":{"depth":0.19444,"height":0.43056,"italic":0.08847,"skew":0.0},"104":{"depth":0.0,"height":0.69444,"italic":0.07671,"skew":0.0},"105":{"depth":0.0,"height":0.65536,"italic":0.1019,"skew":0.0},"106":{"depth":0.19444,"height":0.65536,"italic":0.14467,"skew":0.0},"107":{"depth":0.0,"height":0.69444,"italic":0.10764,"skew":0.0},"108":{"depth":0.0,"height":0.69444,"italic":0.10333,"skew":0.0},"109":{"depth":0.0,"height":0.43056,"italic":0.07671,"skew":0.0},"110":{"depth":0.0,"height":0.43056,"italic":0.07671,"skew":0.0},"111":{"depth":0.0,"height":0.43056,"italic":0.06312,"skew":0.0},"112":{"depth":0.19444,"height":0.43056,"italic":0.06312,"skew":0.0},"113":{"depth":0.19444,"height":0.43056,"italic":0.08847,"skew":0.0},"114":{"depth":0.0,"height":0.43056,"italic":0.10764,"skew":0.0},"115":{"depth":0.0,"height":0.43056,"italic":0.08208,"skew":0.0},"116":{"depth":0.0,"height":0.61508,"italic":0.09486,"skew":0.0},"117":{"depth":0.0,"height":0.43056,"italic":0.07671,"skew":0.0},"118":{"depth":0.0,"height":0.43056,"italic":0.10764,"skew":0.0},"119":{"depth":0.0,"height":0.43056,"italic":0.10764,"skew":0.0},"120":{"depth":0.0,"height":0.43056,"italic":0.12042,"skew":0.0},"121":{"depth":0.19444,"height":0.43056,"italic":0.08847,"skew":0.0},"122":{"depth":0.0,"height":0.43056,"italic":0.12292,"skew":0.0},"126":{"depth":0.35,"height":0.31786,"italic":0.11585,"skew":0.0},"163":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"305":{"depth":0.0,"height":0.43056,"italic":0.07671,"skew":0.0},"33":{"depth":0.0,"height":0.69444,"italic":0.12417,"skew":0.0},"34":{"depth":0.0,"height":0.69444,"italic":0.06961,"skew":0.0},"35":{"depth":0.19444,"height":0.69444,"italic":0.06616,"skew":0.0},"37":{"depth":0.05556,"height":0.75,"italic":0.13639,"skew":0.0},"38":{"depth":0.0,"height":0.69444,"italic":0.09694,"skew":0.0},"39":{"depth":0.0,"height":0.69444,"italic":0.12417,"skew":0.0},"40":{"depth":0.25,"height":0.75,"italic":0.16194,"skew":0.0},"41":{"depth":0.25,"height":0.75,"italic":0.03694,"skew":0.0},"42":{"depth":0.0,"height":0.75,"italic":0.14917,"skew":0.0},"43":{"depth":0.05667,"height":0.56167,"italic":0.03694,"skew":0.0},"44":{"depth":0.19444,"height":0.10556,"italic":0.0,"skew":0.0},"45":{"depth":0.0,"height":0.43056,"italic":0.02826,"skew":0.0},"46":{"depth":0.0,"height":0.10556,"italic":0.0,"skew":0.0},"47":{"depth":0.25,"height":0.75,"italic":0.16194,"skew":0.0},"48":{"depth":0.0,"height":0.64444,"italic":0.13556,"skew":0.0},"49":{"depth":0.0,"height":0.64444,"italic":0.13556,"skew":0.0},"50":{"depth":0.0,"height":0.64444,"italic":0.13556,"skew":0.0},"51":{"depth":0.0,"height":0.64444,"italic":0.13556,"skew":0.0},"52":{"depth":0.19444,"height":0.64444,"italic":0.13556,"skew":0.0},"53":{"depth":0.0,"height":0.64444,"italic":0.13556,"skew":0.0},"54":{"depth":0.0,"height":0.64444,"italic":0.13556,"skew":0.0},"55":{"depth":0.19444,"height":0.64444,"italic":0.13556,"skew":0.0},"56":{"depth":0.0,"height":0.64444,"italic":0.13556,"skew":0.0},"567":{"depth":0.19444,"height":0.43056,"italic":0.03736,"skew":0.0},"57":{"depth":0.0,"height":0.64444,"italic":0.13556,"skew":0.0},"58":{"depth":0.0,"height":0.43056,"italic":0.0582,"skew":0.0},"59":{"depth":0.19444,"height":0.43056,"italic":0.0582,"skew":0.0},"61":{"depth":-0.13313,"height":0.36687,"italic":0.06616,"skew":0.0},"63":{"depth":0.0,"height":0.69444,"italic":0.1225,"skew":0.0},"64":{"depth":0.0,"height":0.69444,"italic":0.09597,"skew":0.0},"65":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"66":{"depth":0.0,"height":0.68333,"italic":0.10257,"skew":0.0},"67":{"depth":0.0,"height":0.68333,"italic":0.14528,"skew":0.0},"68":{"depth":0.0,"height":0.68333,"italic":0.09403,"skew":0.0},"69":{"depth":0.0,"height":0.68333,"italic":0.12028,"skew":0.0},"70":{"depth":0.0,"height":0.68333,"italic":0.13305,"skew":0.0},"71":{"depth":0.0,"height":0.68333,"italic":0.08722,"skew":0.0},"72":{"depth":0.0,"height":0.68333,"italic":0.16389,"skew":0.0},"73":{"depth":0.0,"height":0.68333,"italic":0.15806,"skew":0.0},"74":{"depth":0.0,"height":0.68333,"italic":0.14028,"skew":0.0},"75":{"depth":0.0,"height":0.68333,"italic":0.14528,"skew":0.0},"76":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"768":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"769":{"depth":0.0,"height":0.69444,"italic":0.09694,"skew":0.0},"77":{"depth":0.0,"height":0.68333,"italic":0.16389,"skew":0.0},"770":{"depth":0.0,"height":0.69444,"italic":0.06646,"skew":0.0},"771":{"depth":0.0,"height":0.66786,"italic":0.11585,"skew":0.0},"772":{"depth":0.0,"height":0.56167,"italic":0.10333,"skew":0.0},"774":{"depth":0.0,"height":0.69444,"italic":0.10806,"skew":0.0},"775":{"depth":0.0,"height":0.66786,"italic":0.11752,"skew":0.0},"776":{"depth":0.0,"height":0.66786,"italic":0.10474,"skew":0.0},"778":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"779":{"depth":0.0,"height":0.69444,"italic":0.1225,"skew":0.0},"78":{"depth":0.0,"height":0.68333,"italic":0.16389,"skew":0.0},"780":{"depth":0.0,"height":0.62847,"italic":0.08295,"skew":0.0},"79":{"depth":0.0,"height":0.68333,"italic":0.09403,"skew":0.0},"80":{"depth":0.0,"height":0.68333,"italic":0.10257,"skew":0.0},"81":{"depth":0.19444,"height":0.68333,"italic":0.09403,"skew":0.0},"82":{"depth":0.0,"height":0.68333,"italic":0.03868,"skew":0.0},"8211":{"depth":0.0,"height":0.43056,"italic":0.09208,"skew":0.0},"8212":{"depth":0.0,"height":0.43056,"italic":0.09208,"skew":0.0},"8216":{"depth":0.0,"height":0.69444,"italic":0.12417,"skew":0.0},"8217":{"depth":0.0,"height":0.69444,"italic":0.12417,"skew":0.0},"8220":{"depth":0.0,"height":0.69444,"italic":0.1685,"skew":0.0},"8221":{"depth":0.0,"height":0.69444,"italic":0.06961,"skew":0.0},"83":{"depth":0.0,"height":0.68333,"italic":0.11972,"skew":0.0},"84":{"depth":0.0,"height":0.68333,"italic":0.13305,"skew":0.0},"8463":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"85":{"depth":0.0,"height":0.68333,"italic":0.16389,"skew":0.0},"86":{"depth":0.0,"height":0.68333,"italic":0.18361,"skew":0.0},"87":{"depth":0.0,"height":0.68333,"italic":0.18361,"skew":0.0},"88":{"depth":0.0,"height":0.68333,"italic":0.15806,"skew":0.0},"89":{"depth":0.0,"height":0.68333,"italic":0.19383,"skew":0.0},"90":{"depth":0.0,"height":0.68333,"italic":0.14528,"skew":0.0},"91":{"depth":0.25,"height":0.75,"italic":0.1875,"skew":0.0},"915":{"depth":0.0,"height":0.68333,"italic":0.13305,"skew":0.0},"916":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"920":{"depth":0.0,"height":0.68333,"italic":0.09403,"skew":0.0},"923":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"926":{"depth":0.0,"height":0.68333,"italic":0.15294,"skew":0.0},"928":{"depth":0.0,"height":0.68333,"italic":0.16389,"skew":0.0},"93":{"depth":0.25,"height":0.75,"italic":0.10528,"skew":0.0},"931":{"depth":0.0,"height":0.68333,"italic":0.12028,"skew":0.0},"933":{"depth":0.0,"height":0.68333,"italic":0.11111,"skew":0.0},"934":{"depth":0.0,"height":0.68333,"italic":0.05986,"skew":0.0},"936":{"depth":0.0,"height":0.68333,"italic":0.11111,"skew":0.0},"937":{"depth":0.0,"height":0.68333,"italic":0.10257,"skew":0.0},"94":{"depth":0.0,"height":0.69444,"italic":0.06646,"skew":0.0},"95":{"depth":0.31,"height":0.12056,"italic":0.09208,"skew":0.0},"97":{"depth":0.0,"height":0.43056,"italic":0.07671,"skew":0.0},"98":{"depth":0.0,"height":0.69444,"italic":0.06312,"skew":0.0},"99":{"depth":0.0,"height":0.43056,"italic":0.05653,"skew":0.0}},"Main-Regular":{"32":{"depth":-0.0,"height":0.0,"italic":0,"skew":0},"160":{"depth":-0.0,"height":0.0,"italic":0,"skew":0},"8230":{"depth":-0.0,"height":0.12,"italic":0,"skew":0},"8614":{"depth":0.011,"height":0.511,"italic":0,"skew":0},"8617":{"depth":0.011,"height":0.511,"italic":0,"skew":0},"8618":{"depth":0.011,"height":0.511,"italic":0,"skew":0},"8652":{"depth":0.011,"height":0.671,"italic":0,"skew":0},"8773":{"depth":-0.022,"height":0.589,"italic":0,"skew":0},"8784":{"depth":-0.133,"height":0.67,"italic":0,"skew":0},"8800":{"depth":0.215,"height":0.716,"italic":0,"skew":0},"8872":{"depth":0.249,"height":0.75,"italic":0,"skew":0},"8904":{"depth":0.005,"height":0.505,"italic":0,"skew":0},"8942":{"depth":0.03,"height":0.9,"italic":0,"skew":0},"8943":{"depth":-0.19,"height":0.31,"italic":0,"skew":0},"8945":{"depth":-0.1,"height":0.82,"italic":0,"skew":0},"9136":{"depth":0.244,"height":0.744,"italic":0,"skew":0},"9137":{"depth":0.244,"height":0.744,"italic":0,"skew":0},"10222":{"depth":0.244,"height":0.744,"italic":0,"skew":0},"10223":{"depth":0.244,"height":0.744,"italic":0,"skew":0},"10229":{"depth":0.011,"height":0.511,"italic":0,"skew":0},"10230":{"depth":0.011,"height":0.511,"italic":0,"skew":0},"10231":{"depth":0.011,"height":0.511,"italic":0,"skew":0},"10232":{"depth":0.024,"height":0.525,"italic":0,"skew":0},"10233":{"depth":0.024,"height":0.525,"italic":0,"skew":0},"10234":{"depth":0.024,"height":0.525,"italic":0,"skew":0},"10236":{"depth":0.011,"height":0.511,"italic":0,"skew":0},"100":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"101":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"102":{"depth":0.0,"height":0.69444,"italic":0.07778,"skew":0.0},"10216":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"10217":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"103":{"depth":0.19444,"height":0.43056,"italic":0.01389,"skew":0.0},"104":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"105":{"depth":0.0,"height":0.66786,"italic":0.0,"skew":0.0},"106":{"depth":0.19444,"height":0.66786,"italic":0.0,"skew":0.0},"107":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"108":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"10815":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"109":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"10927":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"10928":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"110":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"111":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"112":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.0},"113":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.0},"114":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"115":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"116":{"depth":0.0,"height":0.61508,"italic":0.0,"skew":0.0},"117":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"118":{"depth":0.0,"height":0.43056,"italic":0.01389,"skew":0.0},"119":{"depth":0.0,"height":0.43056,"italic":0.01389,"skew":0.0},"120":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"121":{"depth":0.19444,"height":0.43056,"italic":0.01389,"skew":0.0},"122":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"123":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"124":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"125":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"126":{"depth":0.35,"height":0.31786,"italic":0.0,"skew":0.0},"168":{"depth":0.0,"height":0.66786,"italic":0.0,"skew":0.0},"172":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"175":{"depth":0.0,"height":0.56778,"italic":0.0,"skew":0.0},"176":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"177":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"180":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"215":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"247":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"305":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.02778},"33":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"34":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"35":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"36":{"depth":0.05556,"height":0.75,"italic":0.0,"skew":0.0},"37":{"depth":0.05556,"height":0.75,"italic":0.0,"skew":0.0},"38":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"39":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"40":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"41":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"42":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"43":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"44":{"depth":0.19444,"height":0.10556,"italic":0.0,"skew":0.0},"45":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"46":{"depth":0.0,"height":0.10556,"italic":0.0,"skew":0.0},"47":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"48":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"49":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"50":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"51":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"52":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"53":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"54":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"55":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"56":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"567":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"57":{"depth":0.0,"height":0.64444,"italic":0.0,"skew":0.0},"58":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"59":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.0},"60":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"61":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"62":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"63":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"64":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"65":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"66":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"67":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"68":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"69":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"70":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"71":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"710":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"711":{"depth":0.0,"height":0.62847,"italic":0.0,"skew":0.0},"713":{"depth":0.0,"height":0.56778,"italic":0.0,"skew":0.0},"714":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"715":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"72":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"728":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"729":{"depth":0.0,"height":0.66786,"italic":0.0,"skew":0.0},"73":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"730":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"732":{"depth":0.0,"height":0.66786,"italic":0.0,"skew":0.0},"74":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"75":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"76":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"768":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"769":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"77":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"770":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"771":{"depth":0.0,"height":0.66786,"italic":0.0,"skew":0.0},"772":{"depth":0.0,"height":0.56778,"italic":0.0,"skew":0.0},"774":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"775":{"depth":0.0,"height":0.66786,"italic":0.0,"skew":0.0},"776":{"depth":0.0,"height":0.66786,"italic":0.0,"skew":0.0},"778":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"779":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"78":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"780":{"depth":0.0,"height":0.62847,"italic":0.0,"skew":0.0},"79":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"80":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"81":{"depth":0.19444,"height":0.68333,"italic":0.0,"skew":0.0},"82":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"8211":{"depth":0.0,"height":0.43056,"italic":0.02778,"skew":0.0},"8212":{"depth":0.0,"height":0.43056,"italic":0.02778,"skew":0.0},"8216":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8217":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8220":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8221":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8224":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8225":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"824":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8242":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"83":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"84":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"8407":{"depth":0.0,"height":0.71444,"italic":0.15382,"skew":0.0},"8463":{"depth":0.0,"height":0.68889,"italic":0.0,"skew":0.0},"8465":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8467":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.11111},"8472":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.11111},"8476":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"85":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"8501":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8592":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8593":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8594":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8595":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8596":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8597":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8598":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8599":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"86":{"depth":0.0,"height":0.68333,"italic":0.01389,"skew":0.0},"8600":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8601":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8636":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8637":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8640":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8641":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8656":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8657":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8658":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8659":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8660":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8661":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"87":{"depth":0.0,"height":0.68333,"italic":0.01389,"skew":0.0},"8704":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8706":{"depth":0.0,"height":0.69444,"italic":0.05556,"skew":0.08334},"8707":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8709":{"depth":0.05556,"height":0.75,"italic":0.0,"skew":0.0},"8711":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"8712":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8715":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8722":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"8723":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"8725":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8726":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8727":{"depth":-0.03472,"height":0.46528,"italic":0.0,"skew":0.0},"8728":{"depth":-0.05555,"height":0.44445,"italic":0.0,"skew":0.0},"8729":{"depth":-0.05555,"height":0.44445,"italic":0.0,"skew":0.0},"8730":{"depth":0.2,"height":0.8,"italic":0.0,"skew":0.0},"8733":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"8734":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"8736":{"depth":0.0,"height":0.69224,"italic":0.0,"skew":0.0},"8739":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8741":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8743":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8744":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8745":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8746":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8747":{"depth":0.19444,"height":0.69444,"italic":0.11111,"skew":0.0},"8764":{"depth":-0.13313,"height":0.36687,"italic":0.0,"skew":0.0},"8768":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"8771":{"depth":-0.03625,"height":0.46375,"italic":0.0,"skew":0.0},"8776":{"depth":-0.01688,"height":0.48312,"italic":0.0,"skew":0.0},"8781":{"depth":-0.03625,"height":0.46375,"italic":0.0,"skew":0.0},"88":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"8801":{"depth":-0.03625,"height":0.46375,"italic":0.0,"skew":0.0},"8804":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"8805":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"8810":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8811":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8826":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8827":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8834":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8835":{"depth":0.0391,"height":0.5391,"italic":0.0,"skew":0.0},"8838":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"8839":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"8846":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8849":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"8850":{"depth":0.13597,"height":0.63597,"italic":0.0,"skew":0.0},"8851":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8852":{"depth":0.0,"height":0.55556,"italic":0.0,"skew":0.0},"8853":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"8854":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"8855":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"8856":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"8857":{"depth":0.08333,"height":0.58333,"italic":0.0,"skew":0.0},"8866":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8867":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8868":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"8869":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"89":{"depth":0.0,"height":0.68333,"italic":0.025,"skew":0.0},"8900":{"depth":-0.05555,"height":0.44445,"italic":0.0,"skew":0.0},"8901":{"depth":-0.05555,"height":0.44445,"italic":0.0,"skew":0.0},"8902":{"depth":-0.03472,"height":0.46528,"italic":0.0,"skew":0.0},"8968":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8969":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8970":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8971":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"8994":{"depth":-0.14236,"height":0.35764,"italic":0.0,"skew":0.0},"8995":{"depth":-0.14236,"height":0.35764,"italic":0.0,"skew":0.0},"90":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"91":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"915":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"916":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"92":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"920":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"923":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"926":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"928":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"93":{"depth":0.25,"height":0.75,"italic":0.0,"skew":0.0},"931":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"933":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"934":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"936":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"937":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.0},"94":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"95":{"depth":0.31,"height":0.12056,"italic":0.02778,"skew":0.0},"96":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"9651":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"9657":{"depth":-0.03472,"height":0.46528,"italic":0.0,"skew":0.0},"9661":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"9667":{"depth":-0.03472,"height":0.46528,"italic":0.0,"skew":0.0},"97":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"9711":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"98":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"9824":{"depth":0.12963,"height":0.69444,"italic":0.0,"skew":0.0},"9825":{"depth":0.12963,"height":0.69444,"italic":0.0,"skew":0.0},"9826":{"depth":0.12963,"height":0.69444,"italic":0.0,"skew":0.0},"9827":{"depth":0.12963,"height":0.69444,"italic":0.0,"skew":0.0},"9837":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"9838":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"9839":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"99":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0}},"Math-BoldItalic":{"100":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"1009":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"101":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"1013":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"102":{"depth":0.19444,"height":0.69444,"italic":0.11042,"skew":0.0},"103":{"depth":0.19444,"height":0.44444,"italic":0.03704,"skew":0.0},"104":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"105":{"depth":0.0,"height":0.69326,"italic":0.0,"skew":0.0},"106":{"depth":0.19444,"height":0.69326,"italic":0.0622,"skew":0.0},"107":{"depth":0.0,"height":0.69444,"italic":0.01852,"skew":0.0},"108":{"depth":0.0,"height":0.69444,"italic":0.0088,"skew":0.0},"109":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"110":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"111":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"112":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"113":{"depth":0.19444,"height":0.44444,"italic":0.03704,"skew":0.0},"114":{"depth":0.0,"height":0.44444,"italic":0.03194,"skew":0.0},"115":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"116":{"depth":0.0,"height":0.63492,"italic":0.0,"skew":0.0},"117":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"118":{"depth":0.0,"height":0.44444,"italic":0.03704,"skew":0.0},"119":{"depth":0.0,"height":0.44444,"italic":0.02778,"skew":0.0},"120":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"121":{"depth":0.19444,"height":0.44444,"italic":0.03704,"skew":0.0},"122":{"depth":0.0,"height":0.44444,"italic":0.04213,"skew":0.0},"47":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"65":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"66":{"depth":0.0,"height":0.68611,"italic":0.04835,"skew":0.0},"67":{"depth":0.0,"height":0.68611,"italic":0.06979,"skew":0.0},"68":{"depth":0.0,"height":0.68611,"italic":0.03194,"skew":0.0},"69":{"depth":0.0,"height":0.68611,"italic":0.05451,"skew":0.0},"70":{"depth":0.0,"height":0.68611,"italic":0.15972,"skew":0.0},"71":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"72":{"depth":0.0,"height":0.68611,"italic":0.08229,"skew":0.0},"73":{"depth":0.0,"height":0.68611,"italic":0.07778,"skew":0.0},"74":{"depth":0.0,"height":0.68611,"italic":0.10069,"skew":0.0},"75":{"depth":0.0,"height":0.68611,"italic":0.06979,"skew":0.0},"76":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"77":{"depth":0.0,"height":0.68611,"italic":0.11424,"skew":0.0},"78":{"depth":0.0,"height":0.68611,"italic":0.11424,"skew":0.0},"79":{"depth":0.0,"height":0.68611,"italic":0.03194,"skew":0.0},"80":{"depth":0.0,"height":0.68611,"italic":0.15972,"skew":0.0},"81":{"depth":0.19444,"height":0.68611,"italic":0.0,"skew":0.0},"82":{"depth":0.0,"height":0.68611,"italic":0.00421,"skew":0.0},"83":{"depth":0.0,"height":0.68611,"italic":0.05382,"skew":0.0},"84":{"depth":0.0,"height":0.68611,"italic":0.15972,"skew":0.0},"85":{"depth":0.0,"height":0.68611,"italic":0.11424,"skew":0.0},"86":{"depth":0.0,"height":0.68611,"italic":0.25555,"skew":0.0},"87":{"depth":0.0,"height":0.68611,"italic":0.15972,"skew":0.0},"88":{"depth":0.0,"height":0.68611,"italic":0.07778,"skew":0.0},"89":{"depth":0.0,"height":0.68611,"italic":0.25555,"skew":0.0},"90":{"depth":0.0,"height":0.68611,"italic":0.06979,"skew":0.0},"915":{"depth":0.0,"height":0.68611,"italic":0.15972,"skew":0.0},"916":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"920":{"depth":0.0,"height":0.68611,"italic":0.03194,"skew":0.0},"923":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"926":{"depth":0.0,"height":0.68611,"italic":0.07458,"skew":0.0},"928":{"depth":0.0,"height":0.68611,"italic":0.08229,"skew":0.0},"931":{"depth":0.0,"height":0.68611,"italic":0.05451,"skew":0.0},"933":{"depth":0.0,"height":0.68611,"italic":0.15972,"skew":0.0},"934":{"depth":0.0,"height":0.68611,"italic":0.0,"skew":0.0},"936":{"depth":0.0,"height":0.68611,"italic":0.11653,"skew":0.0},"937":{"depth":0.0,"height":0.68611,"italic":0.04835,"skew":0.0},"945":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"946":{"depth":0.19444,"height":0.69444,"italic":0.03403,"skew":0.0},"947":{"depth":0.19444,"height":0.44444,"italic":0.06389,"skew":0.0},"948":{"depth":0.0,"height":0.69444,"italic":0.03819,"skew":0.0},"949":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"950":{"depth":0.19444,"height":0.69444,"italic":0.06215,"skew":0.0},"951":{"depth":0.19444,"height":0.44444,"italic":0.03704,"skew":0.0},"952":{"depth":0.0,"height":0.69444,"italic":0.03194,"skew":0.0},"953":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"954":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"955":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"956":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"957":{"depth":0.0,"height":0.44444,"italic":0.06898,"skew":0.0},"958":{"depth":0.19444,"height":0.69444,"italic":0.03021,"skew":0.0},"959":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"960":{"depth":0.0,"height":0.44444,"italic":0.03704,"skew":0.0},"961":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"962":{"depth":0.09722,"height":0.44444,"italic":0.07917,"skew":0.0},"963":{"depth":0.0,"height":0.44444,"italic":0.03704,"skew":0.0},"964":{"depth":0.0,"height":0.44444,"italic":0.13472,"skew":0.0},"965":{"depth":0.0,"height":0.44444,"italic":0.03704,"skew":0.0},"966":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"967":{"depth":0.19444,"height":0.44444,"italic":0.0,"skew":0.0},"968":{"depth":0.19444,"height":0.69444,"italic":0.03704,"skew":0.0},"969":{"depth":0.0,"height":0.44444,"italic":0.03704,"skew":0.0},"97":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0},"977":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"98":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"981":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"982":{"depth":0.0,"height":0.44444,"italic":0.03194,"skew":0.0},"99":{"depth":0.0,"height":0.44444,"italic":0.0,"skew":0.0}},"Math-Italic":{"100":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.16667},"1009":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"101":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"1013":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"102":{"depth":0.19444,"height":0.69444,"italic":0.10764,"skew":0.16667},"103":{"depth":0.19444,"height":0.43056,"italic":0.03588,"skew":0.02778},"104":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"105":{"depth":0.0,"height":0.65952,"italic":0.0,"skew":0.0},"106":{"depth":0.19444,"height":0.65952,"italic":0.05724,"skew":0.0},"107":{"depth":0.0,"height":0.69444,"italic":0.03148,"skew":0.0},"108":{"depth":0.0,"height":0.69444,"italic":0.01968,"skew":0.08334},"109":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"110":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"111":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"112":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"113":{"depth":0.19444,"height":0.43056,"italic":0.03588,"skew":0.08334},"114":{"depth":0.0,"height":0.43056,"italic":0.02778,"skew":0.05556},"115":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"116":{"depth":0.0,"height":0.61508,"italic":0.0,"skew":0.08334},"117":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.02778},"118":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.02778},"119":{"depth":0.0,"height":0.43056,"italic":0.02691,"skew":0.08334},"120":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.02778},"121":{"depth":0.19444,"height":0.43056,"italic":0.03588,"skew":0.05556},"122":{"depth":0.0,"height":0.43056,"italic":0.04398,"skew":0.05556},"47":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.0},"65":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.13889},"66":{"depth":0.0,"height":0.68333,"italic":0.05017,"skew":0.08334},"67":{"depth":0.0,"height":0.68333,"italic":0.07153,"skew":0.08334},"68":{"depth":0.0,"height":0.68333,"italic":0.02778,"skew":0.05556},"69":{"depth":0.0,"height":0.68333,"italic":0.05764,"skew":0.08334},"70":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.08334},"71":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.08334},"72":{"depth":0.0,"height":0.68333,"italic":0.08125,"skew":0.05556},"73":{"depth":0.0,"height":0.68333,"italic":0.07847,"skew":0.11111},"74":{"depth":0.0,"height":0.68333,"italic":0.09618,"skew":0.16667},"75":{"depth":0.0,"height":0.68333,"italic":0.07153,"skew":0.05556},"76":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.02778},"77":{"depth":0.0,"height":0.68333,"italic":0.10903,"skew":0.08334},"78":{"depth":0.0,"height":0.68333,"italic":0.10903,"skew":0.08334},"79":{"depth":0.0,"height":0.68333,"italic":0.02778,"skew":0.08334},"80":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.08334},"81":{"depth":0.19444,"height":0.68333,"italic":0.0,"skew":0.08334},"82":{"depth":0.0,"height":0.68333,"italic":0.00773,"skew":0.08334},"83":{"depth":0.0,"height":0.68333,"italic":0.05764,"skew":0.08334},"84":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.08334},"85":{"depth":0.0,"height":0.68333,"italic":0.10903,"skew":0.02778},"86":{"depth":0.0,"height":0.68333,"italic":0.22222,"skew":0.0},"87":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.0},"88":{"depth":0.0,"height":0.68333,"italic":0.07847,"skew":0.08334},"89":{"depth":0.0,"height":0.68333,"italic":0.22222,"skew":0.0},"90":{"depth":0.0,"height":0.68333,"italic":0.07153,"skew":0.08334},"915":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.08334},"916":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.16667},"920":{"depth":0.0,"height":0.68333,"italic":0.02778,"skew":0.08334},"923":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.16667},"926":{"depth":0.0,"height":0.68333,"italic":0.07569,"skew":0.08334},"928":{"depth":0.0,"height":0.68333,"italic":0.08125,"skew":0.05556},"931":{"depth":0.0,"height":0.68333,"italic":0.05764,"skew":0.08334},"933":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.05556},"934":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.08334},"936":{"depth":0.0,"height":0.68333,"italic":0.11,"skew":0.05556},"937":{"depth":0.0,"height":0.68333,"italic":0.05017,"skew":0.08334},"945":{"depth":0.0,"height":0.43056,"italic":0.0037,"skew":0.02778},"946":{"depth":0.19444,"height":0.69444,"italic":0.05278,"skew":0.08334},"947":{"depth":0.19444,"height":0.43056,"italic":0.05556,"skew":0.0},"948":{"depth":0.0,"height":0.69444,"italic":0.03785,"skew":0.05556},"949":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.08334},"950":{"depth":0.19444,"height":0.69444,"italic":0.07378,"skew":0.08334},"951":{"depth":0.19444,"height":0.43056,"italic":0.03588,"skew":0.05556},"952":{"depth":0.0,"height":0.69444,"italic":0.02778,"skew":0.08334},"953":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"954":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"955":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"956":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.02778},"957":{"depth":0.0,"height":0.43056,"italic":0.06366,"skew":0.02778},"958":{"depth":0.19444,"height":0.69444,"italic":0.04601,"skew":0.11111},"959":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"960":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.0},"961":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"962":{"depth":0.09722,"height":0.43056,"italic":0.07986,"skew":0.08334},"963":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.0},"964":{"depth":0.0,"height":0.43056,"italic":0.1132,"skew":0.02778},"965":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.02778},"966":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"967":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.05556},"968":{"depth":0.19444,"height":0.69444,"italic":0.03588,"skew":0.11111},"969":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.0},"97":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"977":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.08334},"98":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"981":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.08334},"982":{"depth":0.0,"height":0.43056,"italic":0.02778,"skew":0.0},"99":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556}},"Math-Regular":{"100":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.16667},"1009":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"101":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"1013":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"102":{"depth":0.19444,"height":0.69444,"italic":0.10764,"skew":0.16667},"103":{"depth":0.19444,"height":0.43056,"italic":0.03588,"skew":0.02778},"104":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"105":{"depth":0.0,"height":0.65952,"italic":0.0,"skew":0.0},"106":{"depth":0.19444,"height":0.65952,"italic":0.05724,"skew":0.0},"107":{"depth":0.0,"height":0.69444,"italic":0.03148,"skew":0.0},"108":{"depth":0.0,"height":0.69444,"italic":0.01968,"skew":0.08334},"109":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"110":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"111":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"112":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"113":{"depth":0.19444,"height":0.43056,"italic":0.03588,"skew":0.08334},"114":{"depth":0.0,"height":0.43056,"italic":0.02778,"skew":0.05556},"115":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"116":{"depth":0.0,"height":0.61508,"italic":0.0,"skew":0.08334},"117":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.02778},"118":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.02778},"119":{"depth":0.0,"height":0.43056,"italic":0.02691,"skew":0.08334},"120":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.02778},"121":{"depth":0.19444,"height":0.43056,"italic":0.03588,"skew":0.05556},"122":{"depth":0.0,"height":0.43056,"italic":0.04398,"skew":0.05556},"65":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.13889},"66":{"depth":0.0,"height":0.68333,"italic":0.05017,"skew":0.08334},"67":{"depth":0.0,"height":0.68333,"italic":0.07153,"skew":0.08334},"68":{"depth":0.0,"height":0.68333,"italic":0.02778,"skew":0.05556},"69":{"depth":0.0,"height":0.68333,"italic":0.05764,"skew":0.08334},"70":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.08334},"71":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.08334},"72":{"depth":0.0,"height":0.68333,"italic":0.08125,"skew":0.05556},"73":{"depth":0.0,"height":0.68333,"italic":0.07847,"skew":0.11111},"74":{"depth":0.0,"height":0.68333,"italic":0.09618,"skew":0.16667},"75":{"depth":0.0,"height":0.68333,"italic":0.07153,"skew":0.05556},"76":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.02778},"77":{"depth":0.0,"height":0.68333,"italic":0.10903,"skew":0.08334},"78":{"depth":0.0,"height":0.68333,"italic":0.10903,"skew":0.08334},"79":{"depth":0.0,"height":0.68333,"italic":0.02778,"skew":0.08334},"80":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.08334},"81":{"depth":0.19444,"height":0.68333,"italic":0.0,"skew":0.08334},"82":{"depth":0.0,"height":0.68333,"italic":0.00773,"skew":0.08334},"83":{"depth":0.0,"height":0.68333,"italic":0.05764,"skew":0.08334},"84":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.08334},"85":{"depth":0.0,"height":0.68333,"italic":0.10903,"skew":0.02778},"86":{"depth":0.0,"height":0.68333,"italic":0.22222,"skew":0.0},"87":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.0},"88":{"depth":0.0,"height":0.68333,"italic":0.07847,"skew":0.08334},"89":{"depth":0.0,"height":0.68333,"italic":0.22222,"skew":0.0},"90":{"depth":0.0,"height":0.68333,"italic":0.07153,"skew":0.08334},"915":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.08334},"916":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.16667},"920":{"depth":0.0,"height":0.68333,"italic":0.02778,"skew":0.08334},"923":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.16667},"926":{"depth":0.0,"height":0.68333,"italic":0.07569,"skew":0.08334},"928":{"depth":0.0,"height":0.68333,"italic":0.08125,"skew":0.05556},"931":{"depth":0.0,"height":0.68333,"italic":0.05764,"skew":0.08334},"933":{"depth":0.0,"height":0.68333,"italic":0.13889,"skew":0.05556},"934":{"depth":0.0,"height":0.68333,"italic":0.0,"skew":0.08334},"936":{"depth":0.0,"height":0.68333,"italic":0.11,"skew":0.05556},"937":{"depth":0.0,"height":0.68333,"italic":0.05017,"skew":0.08334},"945":{"depth":0.0,"height":0.43056,"italic":0.0037,"skew":0.02778},"946":{"depth":0.19444,"height":0.69444,"italic":0.05278,"skew":0.08334},"947":{"depth":0.19444,"height":0.43056,"italic":0.05556,"skew":0.0},"948":{"depth":0.0,"height":0.69444,"italic":0.03785,"skew":0.05556},"949":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.08334},"950":{"depth":0.19444,"height":0.69444,"italic":0.07378,"skew":0.08334},"951":{"depth":0.19444,"height":0.43056,"italic":0.03588,"skew":0.05556},"952":{"depth":0.0,"height":0.69444,"italic":0.02778,"skew":0.08334},"953":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"954":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"955":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"956":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.02778},"957":{"depth":0.0,"height":0.43056,"italic":0.06366,"skew":0.02778},"958":{"depth":0.19444,"height":0.69444,"italic":0.04601,"skew":0.11111},"959":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556},"960":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.0},"961":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"962":{"depth":0.09722,"height":0.43056,"italic":0.07986,"skew":0.08334},"963":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.0},"964":{"depth":0.0,"height":0.43056,"italic":0.1132,"skew":0.02778},"965":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.02778},"966":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.08334},"967":{"depth":0.19444,"height":0.43056,"italic":0.0,"skew":0.05556},"968":{"depth":0.19444,"height":0.69444,"italic":0.03588,"skew":0.11111},"969":{"depth":0.0,"height":0.43056,"italic":0.03588,"skew":0.0},"97":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.0},"977":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.08334},"98":{"depth":0.0,"height":0.69444,"italic":0.0,"skew":0.0},"981":{"depth":0.19444,"height":0.69444,"italic":0.0,"skew":0.08334},"982":{"depth":0.0,"height":0.43056,"italic":0.02778,"skew":0.0},"99":{"depth":0.0,"height":0.43056,"italic":0.0,"skew":0.05556}},"Size1-Regular":{"8748":{"depth":0.306,"height":0.805,"italic":0.19445,"skew":0.0},"8749":{"depth":0.306,"height":0.805,"italic":0.19445,"skew":0.0},"10216":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"10217":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"10752":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"10753":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"10754":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"10756":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"10758":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"123":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"125":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"40":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"41":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"47":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"710":{"depth":0.0,"height":0.72222,"italic":0.0,"skew":0.0},"732":{"depth":0.0,"height":0.72222,"italic":0.0,"skew":0.0},"770":{"depth":0.0,"height":0.72222,"italic":0.0,"skew":0.0},"771":{"depth":0.0,"height":0.72222,"italic":0.0,"skew":0.0},"8214":{"depth":-0.00099,"height":0.601,"italic":0.0,"skew":0.0},"8593":{"depth":1e-05,"height":0.6,"italic":0.0,"skew":0.0},"8595":{"depth":1e-05,"height":0.6,"italic":0.0,"skew":0.0},"8657":{"depth":1e-05,"height":0.6,"italic":0.0,"skew":0.0},"8659":{"depth":1e-05,"height":0.6,"italic":0.0,"skew":0.0},"8719":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"8720":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"8721":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"8730":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"8739":{"depth":-0.00599,"height":0.606,"italic":0.0,"skew":0.0},"8741":{"depth":-0.00599,"height":0.606,"italic":0.0,"skew":0.0},"8747":{"depth":0.30612,"height":0.805,"italic":0.19445,"skew":0.0},"8750":{"depth":0.30612,"height":0.805,"italic":0.19445,"skew":0.0},"8896":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"8897":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"8898":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"8899":{"depth":0.25001,"height":0.75,"italic":0.0,"skew":0.0},"8968":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"8969":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"8970":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"8971":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"91":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"9168":{"depth":-0.00099,"height":0.601,"italic":0.0,"skew":0.0},"92":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0},"93":{"depth":0.35001,"height":0.85,"italic":0.0,"skew":0.0}},"Size2-Regular":{"8748":{"depth":0.862,"height":1.36,"italic":0.44445,"skew":0.0},"8749":{"depth":0.862,"height":1.36,"italic":0.44445,"skew":0.0},"10216":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"10217":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"10752":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"10753":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"10754":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"10756":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"10758":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"123":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"125":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"40":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"41":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"47":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"710":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"732":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"770":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"771":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"8719":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"8720":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"8721":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"8730":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"8747":{"depth":0.86225,"height":1.36,"italic":0.44445,"skew":0.0},"8750":{"depth":0.86225,"height":1.36,"italic":0.44445,"skew":0.0},"8896":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"8897":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"8898":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"8899":{"depth":0.55001,"height":1.05,"italic":0.0,"skew":0.0},"8968":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"8969":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"8970":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"8971":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"91":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"92":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"93":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0}},"Size3-Regular":{"10216":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"10217":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"123":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"125":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"40":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"41":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"47":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"710":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"732":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"770":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"771":{"depth":0.0,"height":0.75,"italic":0.0,"skew":0.0},"8730":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"8968":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"8969":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"8970":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"8971":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"91":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"92":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0},"93":{"depth":0.95003,"height":1.45,"italic":0.0,"skew":0.0}},"Size4-Regular":{"10216":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"10217":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"123":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"125":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"40":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"41":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"47":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"57344":{"depth":-0.00499,"height":0.605,"italic":0.0,"skew":0.0},"57345":{"depth":-0.00499,"height":0.605,"italic":0.0,"skew":0.0},"57680":{"depth":0.0,"height":0.12,"italic":0.0,"skew":0.0},"57681":{"depth":0.0,"height":0.12,"italic":0.0,"skew":0.0},"57682":{"depth":0.0,"height":0.12,"italic":0.0,"skew":0.0},"57683":{"depth":0.0,"height":0.12,"italic":0.0,"skew":0.0},"710":{"depth":0.0,"height":0.825,"italic":0.0,"skew":0.0},"732":{"depth":0.0,"height":0.825,"italic":0.0,"skew":0.0},"770":{"depth":0.0,"height":0.825,"italic":0.0,"skew":0.0},"771":{"depth":0.0,"height":0.825,"italic":0.0,"skew":0.0},"8730":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"8968":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"8969":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"8970":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"8971":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"91":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"9115":{"depth":0.64502,"height":1.155,"italic":0.0,"skew":0.0},"9116":{"depth":1e-05,"height":0.6,"italic":0.0,"skew":0.0},"9117":{"depth":0.64502,"height":1.155,"italic":0.0,"skew":0.0},"9118":{"depth":0.64502,"height":1.155,"italic":0.0,"skew":0.0},"9119":{"depth":1e-05,"height":0.6,"italic":0.0,"skew":0.0},"9120":{"depth":0.64502,"height":1.155,"italic":0.0,"skew":0.0},"9121":{"depth":0.64502,"height":1.155,"italic":0.0,"skew":0.0},"9122":{"depth":-0.00099,"height":0.601,"italic":0.0,"skew":0.0},"9123":{"depth":0.64502,"height":1.155,"italic":0.0,"skew":0.0},"9124":{"depth":0.64502,"height":1.155,"italic":0.0,"skew":0.0},"9125":{"depth":-0.00099,"height":0.601,"italic":0.0,"skew":0.0},"9126":{"depth":0.64502,"height":1.155,"italic":0.0,"skew":0.0},"9127":{"depth":1e-05,"height":0.9,"italic":0.0,"skew":0.0},"9128":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"9129":{"depth":0.90001,"height":0.0,"italic":0.0,"skew":0.0},"9130":{"depth":0.0,"height":0.3,"italic":0.0,"skew":0.0},"9131":{"depth":1e-05,"height":0.9,"italic":0.0,"skew":0.0},"9132":{"depth":0.65002,"height":1.15,"italic":0.0,"skew":0.0},"9133":{"depth":0.90001,"height":0.0,"italic":0.0,"skew":0.0},"9143":{"depth":0.88502,"height":0.915,"italic":0.0,"skew":0.0},"92":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0},"93":{"depth":1.25003,"height":1.75,"italic":0.0,"skew":0.0}}};

/**
 * This function is a convience function for looking up information in the
 * metricMap table. It takes a character as a string, and a style
 */
var getCharacterMetrics = function(character, style) {
    return metricMap[style][character.charCodeAt(0)];
};

module.exports = {
    metrics: metrics,
    getCharacterMetrics: getCharacterMetrics
};

},{"./Style":9}],17:[function(require,module,exports){
var utils = require("./utils");
var ParseError = require("./ParseError");

// This file contains a list of functions that we parse. The functions map
// contains the following data:

/*
 * Keys are the name of the functions to parse
 * The data contains the following keys:
 *  - numArgs: The number of arguments the function takes.
 *  - argTypes: (optional) An array corresponding to each argument of the
 *              function, giving the type of argument that should be parsed. Its
 *              length should be equal to `numArgs + numOptionalArgs`. Valid
 *              types:
 *               - "size": A size-like thing, such as "1em" or "5ex"
 *               - "color": An html color, like "#abc" or "blue"
 *               - "original": The same type as the environment that the
 *                             function being parsed is in (e.g. used for the
 *                             bodies of functions like \color where the first
 *                             argument is special and the second argument is
 *                             parsed normally)
 *              Other possible types (probably shouldn't be used)
 *               - "text": Text-like (e.g. \text)
 *               - "math": Normal math
 *              If undefined, this will be treated as an appropriate length
 *              array of "original" strings
 *  - greediness: (optional) The greediness of the function to use ungrouped
 *                arguments.
 *
 *                E.g. if you have an expression
 *                  \sqrt \frac 1 2
 *                since \frac has greediness=2 vs \sqrt's greediness=1, \frac
 *                will use the two arguments '1' and '2' as its two arguments,
 *                then that whole function will be used as the argument to
 *                \sqrt. On the other hand, the expressions
 *                  \frac \frac 1 2 3
 *                and
 *                  \frac \sqrt 1 2
 *                will fail because \frac and \frac have equal greediness
 *                and \sqrt has a lower greediness than \frac respectively. To
 *                make these parse, we would have to change them to:
 *                  \frac {\frac 1 2} 3
 *                and
 *                  \frac {\sqrt 1} 2
 *
 *                The default value is `1`
 *  - allowedInText: (optional) Whether or not the function is allowed inside
 *                   text mode (default false)
 *  - numOptionalArgs: (optional) The number of optional arguments the function
 *                     should parse. If the optional arguments aren't found,
 *                     `null` will be passed to the handler in their place.
 *                     (default 0)
 *  - handler: The function that is called to handle this function and its
 *             arguments. The arguments are:
 *              - func: the text of the function
 *              - [args]: the next arguments are the arguments to the function,
 *                        of which there are numArgs of them
 *              - positions: the positions in the overall string of the function
 *                           and the arguments. Should only be used to produce
 *                           error messages
 *             The function should return an object with the following keys:
 *              - type: The type of element that this is. This is then used in
 *                      buildHTML/buildMathML to determine which function
 *                      should be called to build this node into a DOM node
 *             Any other data can be added to the object, which will be passed
 *             in to the function in buildHTML/buildMathML as `group.value`.
 */

var functions = {
    // A normal square root
    "\\sqrt": {
        numArgs: 1,
        numOptionalArgs: 1,
        handler: function(func, optional, body, positions) {
            if (optional != null) {
                throw new ParseError(
                    "Optional arguments to \\sqrt aren't supported yet",
                    this.lexer, positions[1] - 1);
            }

            return {
                type: "sqrt",
                body: body
            };
        }
    },

    // Some non-mathy text
    "\\text": {
        numArgs: 1,
        argTypes: ["text"],
        greediness: 2,
        handler: function(func, body) {
            // Since the corresponding buildHTML/buildMathML function expects a
            // list of elements, we normalize for different kinds of arguments
            // TODO(emily): maybe this should be done somewhere else
            var inner;
            if (body.type === "ordgroup") {
                inner = body.value;
            } else {
                inner = [body];
            }

            return {
                type: "text",
                body: inner
            };
        }
    },

    // A two-argument custom color
    "\\color": {
        numArgs: 2,
        allowedInText: true,
        argTypes: ["color", "original"],
        handler: function(func, color, body) {
            // Normalize the different kinds of bodies (see \text above)
            var inner;
            if (body.type === "ordgroup") {
                inner = body.value;
            } else {
                inner = [body];
            }

            return {
                type: "color",
                color: color.value,
                value: inner
            };
        }
    },

    // An overline
    "\\overline": {
        numArgs: 1,
        handler: function(func, body) {
            return {
                type: "overline",
                body: body
            };
        }
    },

    // A box of the width and height
    "\\rule": {
        numArgs: 2,
        numOptionalArgs: 1,
        argTypes: ["size", "size", "size"],
        handler: function(func, shift, width, height) {
            return {
                type: "rule",
                shift: shift && shift.value,
                width: width.value,
                height: height.value
            };
        }
    },

    // A KaTeX logo
    "\\KaTeX": {
        numArgs: 0,
        handler: function(func) {
            return {
                type: "katex"
            };
        }
    }
};

// Extra data needed for the delimiter handler down below
var delimiterSizes = {
    "\\bigl" : {type: "open",    size: 1},
    "\\Bigl" : {type: "open",    size: 2},
    "\\biggl": {type: "open",    size: 3},
    "\\Biggl": {type: "open",    size: 4},
    "\\bigr" : {type: "close",   size: 1},
    "\\Bigr" : {type: "close",   size: 2},
    "\\biggr": {type: "close",   size: 3},
    "\\Biggr": {type: "close",   size: 4},
    "\\bigm" : {type: "rel",     size: 1},
    "\\Bigm" : {type: "rel",     size: 2},
    "\\biggm": {type: "rel",     size: 3},
    "\\Biggm": {type: "rel",     size: 4},
    "\\big"  : {type: "textord", size: 1},
    "\\Big"  : {type: "textord", size: 2},
    "\\bigg" : {type: "textord", size: 3},
    "\\Bigg" : {type: "textord", size: 4}
};

var delimiters = [
    "(", ")", "[", "\\lbrack", "]", "\\rbrack",
    "\\{", "\\lbrace", "\\}", "\\rbrace",
    "\\lfloor", "\\rfloor", "\\lceil", "\\rceil",
    "<", ">", "\\langle", "\\rangle",
    "/", "\\backslash",
    "|", "\\vert", "\\|", "\\Vert",
    "\\uparrow", "\\Uparrow",
    "\\downarrow", "\\Downarrow",
    "\\updownarrow", "\\Updownarrow",
    "."
];

/*
 * This is a list of functions which each have the same function but have
 * different names so that we don't have to duplicate the data a bunch of times.
 * Each element in the list is an object with the following keys:
 *  - funcs: A list of function names to be associated with the data
 *  - data: An objecty with the same data as in each value of the `function`
 *          table above
 */
var duplicatedFunctions = [
    // Single-argument color functions
    {
        funcs: [
            "\\blue", "\\orange", "\\pink", "\\red",
            "\\green", "\\gray", "\\purple"
        ],
        data: {
            numArgs: 1,
            allowedInText: true,
            handler: function(func, body) {
                var atoms;
                if (body.type === "ordgroup") {
                    atoms = body.value;
                } else {
                    atoms = [body];
                }

                return {
                    type: "color",
                    color: "katex-" + func.slice(1),
                    value: atoms
                };
            }
        }
    },

    // There are 2 flags for operators; whether they produce limits in
    // displaystyle, and whether they are symbols and should grow in
    // displaystyle. These four groups cover the four possible choices.

    // No limits, not symbols
    {
        funcs: [
            "\\arcsin", "\\arccos", "\\arctan", "\\arg", "\\cos", "\\cosh",
            "\\cot", "\\coth", "\\csc", "\\deg", "\\dim", "\\exp", "\\hom",
            "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh",
            "\\tan","\\tanh"
        ],
        data: {
            numArgs: 0,
            handler: function(func) {
                return {
                    type: "op",
                    limits: false,
                    symbol: false,
                    body: func
                };
            }
        }
    },

    // Limits, not symbols
    {
        funcs: [
            "\\det", "\\gcd", "\\inf", "\\lim", "\\liminf", "\\limsup", "\\max",
            "\\min", "\\Pr", "\\sup"
        ],
        data: {
            numArgs: 0,
            handler: function(func) {
                return {
                    type: "op",
                    limits: true,
                    symbol: false,
                    body: func
                };
            }
        }
    },

    // No limits, symbols
    {
        funcs: [
            "\\int", "\\iint", "\\iiint", "\\oint"
        ],
        data: {
            numArgs: 0,
            handler: function(func) {
                return {
                    type: "op",
                    limits: false,
                    symbol: true,
                    body: func
                };
            }
        }
    },

    // Limits, symbols
    {
        funcs: [
            "\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap",
            "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes",
            "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint"
        ],
        data: {
            numArgs: 0,
            handler: function(func) {
                return {
                    type: "op",
                    limits: true,
                    symbol: true,
                    body: func
                };
            }
        }
    },

    // Fractions
    {
        funcs: [
            "\\dfrac", "\\frac", "\\tfrac",
            "\\dbinom", "\\binom", "\\tbinom"
        ],
        data: {
            numArgs: 2,
            greediness: 2,
            handler: function(func, numer, denom) {
                var hasBarLine;
                var leftDelim = null;
                var rightDelim = null;
                var size = "auto";

                switch (func) {
                    case "\\dfrac":
                    case "\\frac":
                    case "\\tfrac":
                        hasBarLine = true;
                        break;
                    case "\\dbinom":
                    case "\\binom":
                    case "\\tbinom":
                        hasBarLine = false;
                        leftDelim = "(";
                        rightDelim = ")";
                        break;
                    default:
                        throw new Error("Unrecognized genfrac command");
                }

                switch (func) {
                    case "\\dfrac":
                    case "\\dbinom":
                        size = "display";
                        break;
                    case "\\tfrac":
                    case "\\tbinom":
                        size = "text";
                        break;
                }

                return {
                    type: "genfrac",
                    numer: numer,
                    denom: denom,
                    hasBarLine: hasBarLine,
                    leftDelim: leftDelim,
                    rightDelim: rightDelim,
                    size: size
                };
            }
        }
    },

    // Left and right overlap functions
    {
        funcs: ["\\llap", "\\rlap"],
        data: {
            numArgs: 1,
            allowedInText: true,
            handler: function(func, body) {
                return {
                    type: func.slice(1),
                    body: body
                };
            }
        }
    },

    // Delimiter functions
    {
        funcs: [
            "\\bigl", "\\Bigl", "\\biggl", "\\Biggl",
            "\\bigr", "\\Bigr", "\\biggr", "\\Biggr",
            "\\bigm", "\\Bigm", "\\biggm", "\\Biggm",
            "\\big",  "\\Big",  "\\bigg",  "\\Bigg",
            "\\left", "\\right"
        ],
        data: {
            numArgs: 1,
            handler: function(func, delim, positions) {
                if (!utils.contains(delimiters, delim.value)) {
                    throw new ParseError(
                        "Invalid delimiter: '" + delim.value + "' after '" +
                            func + "'",
                        this.lexer, positions[1]);
                }

                // \left and \right are caught somewhere in Parser.js, which is
                // why this data doesn't match what is in buildHTML.
                if (func === "\\left" || func === "\\right") {
                    return {
                        type: "leftright",
                        value: delim.value
                    };
                } else {
                    return {
                        type: "delimsizing",
                        size: delimiterSizes[func].size,
                        delimType: delimiterSizes[func].type,
                        value: delim.value
                    };
                }
            }
        }
    },

    // Sizing functions (handled in Parser.js explicitly, hence no handler)
    {
        funcs: [
            "\\tiny", "\\scriptsize", "\\footnotesize", "\\small",
            "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"
        ],
        data: {
            numArgs: 0
        }
    },

    // Style changing functions (handled in Parser.js explicitly, hence no
    // handler)
    {
        funcs: [
            "\\displaystyle", "\\textstyle", "\\scriptstyle",
            "\\scriptscriptstyle"
        ],
        data: {
            numArgs: 0
        }
    },

    // Accents
    {
        funcs: [
            "\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve",
            "\\check", "\\hat", "\\vec", "\\dot"
            // We don't support expanding accents yet
            // "\\widetilde", "\\widehat"
        ],
        data: {
            numArgs: 1,
            handler: function(func, base) {
                return {
                    type: "accent",
                    accent: func,
                    base: base
                };
            }
        }
    },

    // Infix generalized fractions
    {
        funcs: ["\\over", "\\choose"],
        data: {
            numArgs: 0,
            handler: function (func) {
                var replaceWith;
                switch (func) {
                    case "\\over":
                        replaceWith = "\\frac";
                        break;
                    case "\\choose":
                        replaceWith = "\\binom";
                        break;
                    default:
                        throw new Error("Unrecognized infix genfrac command");
                }
                return {
                    type: "infix",
                    replaceWith: replaceWith
                };
            }
        }
    }
];

var addFuncsWithData = function(funcs, data) {
    for (var i = 0; i < funcs.length; i++) {
        functions[funcs[i]] = data;
    }
};

// Add all of the functions in duplicatedFunctions to the functions map
for (var i = 0; i < duplicatedFunctions.length; i++) {
    addFuncsWithData(duplicatedFunctions[i].funcs, duplicatedFunctions[i].data);
}

// Set default values of functions
for (var f in functions) {
    if (functions.hasOwnProperty(f)) {
        var func = functions[f];

        functions[f] = {
            numArgs: func.numArgs,
            argTypes: func.argTypes,
            greediness: (func.greediness === undefined) ? 1 : func.greediness,
            allowedInText: func.allowedInText ? func.allowedInText : false,
            numOptionalArgs: (func.numOptionalArgs === undefined) ? 0 :
                func.numOptionalArgs,
            handler: func.handler
        };
    }
}

module.exports = {
    funcs: functions
};

},{"./ParseError":6,"./utils":21}],18:[function(require,module,exports){
/**
 * These objects store data about MathML nodes. This is the MathML equivalent
 * of the types in domTree.js. Since MathML handles its own rendering, and
 * since we're mainly using MathML to improve accessibility, we don't manage
 * any of the styling state that the plain DOM nodes do.
 *
 * The `toNode` and `toMarkup` functions work simlarly to how they do in
 * domTree.js, creating namespaced DOM nodes and HTML text markup respectively.
 */

var utils = require("./utils");

/**
 * This node represents a general purpose MathML node of any type. The
 * constructor requires the type of node to create (for example, `"mo"` or
 * `"mspace"`, corresponding to `<mo>` and `<mspace>` tags).
 */
function MathNode(type, children) {
    this.type = type;
    this.attributes = {};
    this.children = children || [];
}

/**
 * Sets an attribute on a MathML node. MathML depends on attributes to convey a
 * semantic content, so this is used heavily.
 */
MathNode.prototype.setAttribute = function(name, value) {
    this.attributes[name] = value;
};

/**
 * Converts the math node into a MathML-namespaced DOM element.
 */
MathNode.prototype.toNode = function() {
    var node = document.createElementNS(
        "http://www.w3.org/1998/Math/MathML", this.type);

    for (var attr in this.attributes) {
        if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            node.setAttribute(attr, this.attributes[attr]);
        }
    }

    for (var i = 0; i < this.children.length; i++) {
        node.appendChild(this.children[i].toNode());
    }

    return node;
};

/**
 * Converts the math node into an HTML markup string.
 */
MathNode.prototype.toMarkup = function() {
    var markup = "<" + this.type;

    // Add the attributes
    for (var attr in this.attributes) {
        if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
            markup += " " + attr + "=\"";
            markup += utils.escape(this.attributes[attr]);
            markup += "\"";
        }
    }

    markup += ">";

    for (var i = 0; i < this.children.length; i++) {
        markup += this.children[i].toMarkup();
    }

    markup += "</" + this.type + ">";

    return markup;
};

/**
 * This node represents a piece of text.
 */
function TextNode(text) {
    this.text = text;
}

/**
 * Converts the text node into a DOM text node.
 */
TextNode.prototype.toNode = function() {
    return document.createTextNode(this.text);
};

/**
 * Converts the text node into HTML markup (which is just the text itself).
 */
TextNode.prototype.toMarkup = function() {
    return utils.escape(this.text);
};

module.exports = {
    MathNode: MathNode,
    TextNode: TextNode
};

},{"./utils":21}],19:[function(require,module,exports){
/**
 * Provides a single function for parsing an expression using a Parser
 * TODO(emily): Remove this
 */

var Parser = require("./Parser");

/**
 * Parses an expression using a Parser, then returns the parsed result.
 */
var parseTree = function(toParse, settings) {
    var parser = new Parser(toParse, settings);

    return parser.parse();
};

module.exports = parseTree;

},{"./Parser":7}],20:[function(require,module,exports){
/**
 * This file holds a list of all no-argument functions and single-character
 * symbols (like 'a' or ';').
 *
 * For each of the symbols, there are three properties they can have:
 * - font (required): the font to be used for this symbol. Either "main" (the
     normal font), or "ams" (the ams fonts).
 * - group (required): the ParseNode group type the symbol should have (i.e.
     "textord", "mathord", etc).
 * - replace (optional): the character that this symbol or function should be
 *   replaced with (i.e. "\phi" has a replace value of "\u03d5", the phi
 *   character in the main font).
 *
 * The outermost map in the table indicates what mode the symbols should be
 * accepted in (e.g. "math" or "text").
 */

var symbols = {
    "math": {
        // Relation Symbols
        "\\equiv": {
            font: "main",
            group: "rel",
            replace: "\u2261"
        },
        "\\prec": {
            font: "main",
            group: "rel",
            replace: "\u227a"
        },
        "\\succ": {
            font: "main",
            group: "rel",
            replace: "\u227b"
        },
        "\\sim": {
            font: "main",
            group: "rel",
            replace: "\u223c"
        },
        "\\perp": {
            font: "main",
            group: "rel",
            replace: "\u22a5"
        },
        "\\preceq": {
            font: "main",
            group: "rel",
            replace: "\u2aaf"
        },
        "\\succeq": {
            font: "main",
            group: "rel",
            replace: "\u2ab0"
        },
        "\\simeq": {
            font: "main",
            group: "rel",
            replace: "\u2243"
        },
        "\\mid": {
            font: "main",
            group: "rel",
            replace: "\u2223"
        },
        "\\ll": {
            font: "main",
            group: "rel",
            replace: "\u226a"
        },
        "\\gg": {
            font: "main",
            group: "rel",
            replace: "\u226b"
        },
        "\\asymp": {
            font: "main",
            group: "rel",
            replace: "\u224d"
        },
        "\\parallel": {
            font: "main",
            group: "rel",
            replace: "\u2225"
        },
        "\\bowtie": {
            font: "main",
            group: "rel",
            replace: "\u22c8"
        },
        "\\smile": {
            font: "main",
            group: "rel",
            replace: "\u2323"
        },
        "\\sqsubseteq": {
            font: "main",
            group: "rel",
            replace: "\u2291"
        },
        "\\sqsupseteq": {
            font: "main",
            group: "rel",
            replace: "\u2292"
        },
        "\\doteq": {
            font: "main",
            group: "rel",
            replace: "\u2250"
        },
        "\\frown": {
            font: "main",
            group: "rel",
            replace: "\u2322"
        },
        "\\ni": {
            font: "main",
            group: "rel",
            replace: "\u220b"
        },
        "\\propto": {
            font: "main",
            group: "rel",
            replace: "\u221d"
        },
        "\\vdash": {
            font: "main",
            group: "rel",
            replace: "\u22a2"
        },
        "\\dashv": {
            font: "main",
            group: "rel",
            replace: "\u22a3"
        },
        "\\owns": {
            font: "main",
            group: "rel",
            replace: "\u220b"
        },

        // Punctuation
        "\\ldotp": {
            font: "main",
            group: "punct",
            replace: "\u002e"
        },
        "\\cdotp": {
            font: "main",
            group: "punct",
            replace: "\u22c5"
        },

        // Misc Symbols
        "\\aleph": {
            font: "main",
            group: "textord",
            replace: "\u2135"
        },
        "\\forall": {
            font: "main",
            group: "textord",
            replace: "\u2200"
        },
        "\\hbar": {
            font: "main",
            group: "textord",
            replace: "\u210f"
        },
        "\\exists": {
            font: "main",
            group: "textord",
            replace: "\u2203"
        },
        "\\nabla": {
            font: "main",
            group: "textord",
            replace: "\u2207"
        },
        "\\flat": {
            font: "main",
            group: "textord",
            replace: "\u266d"
        },
        "\\ell": {
            font: "main",
            group: "textord",
            replace: "\u2113"
        },
        "\\natural": {
            font: "main",
            group: "textord",
            replace: "\u266e"
        },
        "\\clubsuit": {
            font: "main",
            group: "textord",
            replace: "\u2663"
        },
        "\\wp": {
            font: "main",
            group: "textord",
            replace: "\u2118"
        },
        "\\sharp": {
            font: "main",
            group: "textord",
            replace: "\u266f"
        },
        "\\diamondsuit": {
            font: "main",
            group: "textord",
            replace: "\u2662"
        },
        "\\Re": {
            font: "main",
            group: "textord",
            replace: "\u211c"
        },
        "\\heartsuit": {
            font: "main",
            group: "textord",
            replace: "\u2661"
        },
        "\\Im": {
            font: "main",
            group: "textord",
            replace: "\u2111"
        },
        "\\spadesuit": {
            font: "main",
            group: "textord",
            replace: "\u2660"
        },

        // Math and Text
        "\\dag": {
            font: "main",
            group: "textord",
            replace: "\u2020"
        },
        "\\ddag": {
            font: "main",
            group: "textord",
            replace: "\u2021"
        },

        // Large Delimiters
        "\\rmoustache": {
            font: "main",
            group: "close",
            replace: "\u23b1"
        },
        "\\lmoustache": {
            font: "main",
            group: "open",
            replace: "\u23b0"
        },
        "\\rgroup": {
            font: "main",
            group: "close",
            replace: "\u27ef"
        },
        "\\lgroup": {
            font: "main",
            group: "open",
            replace: "\u27ee"
        },

        // Binary Operators
        "\\mp": {
            font: "main",
            group: "bin",
            replace: "\u2213"
        },
        "\\ominus": {
            font: "main",
            group: "bin",
            replace: "\u2296"
        },
        "\\uplus": {
            font: "main",
            group: "bin",
            replace: "\u228e"
        },
        "\\sqcap": {
            font: "main",
            group: "bin",
            replace: "\u2293"
        },
        "\\ast": {
            font: "main",
            group: "bin",
            replace: "\u2217"
        },
        "\\sqcup": {
            font: "main",
            group: "bin",
            replace: "\u2294"
        },
        "\\bigcirc": {
            font: "main",
            group: "bin",
            replace: "\u25ef"
        },
        "\\bullet": {
            font: "main",
            group: "bin",
            replace: "\u2219"
        },
        "\\ddagger": {
            font: "main",
            group: "bin",
            replace: "\u2021"
        },
        "\\wr": {
            font: "main",
            group: "bin",
            replace: "\u2240"
        },
        "\\amalg": {
            font: "main",
            group: "bin",
            replace: "\u2a3f"
        },

        // Arrow Symbols
        "\\longleftarrow": {
            font: "main",
            group: "rel",
            replace: "\u27f5"
        },
        "\\Leftarrow": {
            font: "main",
            group: "rel",
            replace: "\u21d0"
        },
        "\\Longleftarrow": {
            font: "main",
            group: "rel",
            replace: "\u27f8"
        },
        "\\longrightarrow": {
            font: "main",
            group: "rel",
            replace: "\u27f6"
        },
        "\\Rightarrow": {
            font: "main",
            group: "rel",
            replace: "\u21d2"
        },
        "\\Longrightarrow": {
            font: "main",
            group: "rel",
            replace: "\u27f9"
        },
        "\\leftrightarrow": {
            font: "main",
            group: "rel",
            replace: "\u2194"
        },
        "\\longleftrightarrow": {
            font: "main",
            group: "rel",
            replace: "\u27f7"
        },
        "\\Leftrightarrow": {
            font: "main",
            group: "rel",
            replace: "\u21d4"
        },
        "\\Longleftrightarrow": {
            font: "main",
            group: "rel",
            replace: "\u27fa"
        },
        "\\mapsto": {
            font: "main",
            group: "rel",
            replace: "\u21a6"
        },
        "\\longmapsto": {
            font: "main",
            group: "rel",
            replace: "\u27fc"
        },
        "\\nearrow": {
            font: "main",
            group: "rel",
            replace: "\u2197"
        },
        "\\hookleftarrow": {
            font: "main",
            group: "rel",
            replace: "\u21a9"
        },
        "\\hookrightarrow": {
            font: "main",
            group: "rel",
            replace: "\u21aa"
        },
        "\\searrow": {
            font: "main",
            group: "rel",
            replace: "\u2198"
        },
        "\\leftharpoonup": {
            font: "main",
            group: "rel",
            replace: "\u21bc"
        },
        "\\rightharpoonup": {
            font: "main",
            group: "rel",
            replace: "\u21c0"
        },
        "\\swarrow": {
            font: "main",
            group: "rel",
            replace: "\u2199"
        },
        "\\leftharpoondown": {
            font: "main",
            group: "rel",
            replace: "\u21bd"
        },
        "\\rightharpoondown": {
            font: "main",
            group: "rel",
            replace: "\u21c1"
        },
        "\\nwarrow": {
            font: "main",
            group: "rel",
            replace: "\u2196"
        },
        "\\rightleftharpoons": {
            font: "main",
            group: "rel",
            replace: "\u21cc"
        },

        // AMS Negated Binary Relations
        "\\nless": {
            font: "ams",
            group: "rel",
            replace: "\u226e"
        },
        "\\nleqslant": {
            font: "ams",
            group: "rel",
            replace: "\ue010"
        },
        "\\nleqq": {
            font: "ams",
            group: "rel",
            replace: "\ue011"
        },
        "\\lneq": {
            font: "ams",
            group: "rel",
            replace: "\u2a87"
        },
        "\\lneqq": {
            font: "ams",
            group: "rel",
            replace: "\u2268"
        },
        "\\lvertneqq": {
            font: "ams",
            group: "rel",
            replace: "\ue00c"
        },
        "\\lnsim": {
            font: "ams",
            group: "rel",
            replace: "\u22e6"
        },
        "\\lnapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2a89"
        },
        "\\nprec": {
            font: "ams",
            group: "rel",
            replace: "\u2280"
        },
        "\\npreceq": {
            font: "ams",
            group: "rel",
            replace: "\u22e0"
        },
        "\\precnsim": {
            font: "ams",
            group: "rel",
            replace: "\u22e8"
        },
        "\\precnapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2ab9"
        },
        "\\nsim": {
            font: "ams",
            group: "rel",
            replace: "\u2241"
        },
        "\\nshortmid": {
            font: "ams",
            group: "rel",
            replace: "\ue006"
        },
        "\\nmid": {
            font: "ams",
            group: "rel",
            replace: "\u2224"
        },
        "\\nvdash": {
            font: "ams",
            group: "rel",
            replace: "\u22ac"
        },
        "\\nvDash": {
            font: "ams",
            group: "rel",
            replace: "\u22ad"
        },
        "\\ntriangleleft": {
            font: "ams",
            group: "rel",
            replace: "\u22ea"
        },
        "\\ntrianglelefteq": {
            font: "ams",
            group: "rel",
            replace: "\u22ec"
        },
        "\\subsetneq": {
            font: "ams",
            group: "rel",
            replace: "\u228a"
        },
        "\\varsubsetneq": {
            font: "ams",
            group: "rel",
            replace: "\ue01a"
        },
        "\\subsetneqq": {
            font: "ams",
            group: "rel",
            replace: "\u2acb"
        },
        "\\varsubsetneqq": {
            font: "ams",
            group: "rel",
            replace: "\ue017"
        },
        "\\ngtr": {
            font: "ams",
            group: "rel",
            replace: "\u226f"
        },
        "\\ngeqslant": {
            font: "ams",
            group: "rel",
            replace: "\ue00f"
        },
        "\\ngeqq": {
            font: "ams",
            group: "rel",
            replace: "\ue00e"
        },
        "\\gneq": {
            font: "ams",
            group: "rel",
            replace: "\u2a88"
        },
        "\\gneqq": {
            font: "ams",
            group: "rel",
            replace: "\u2269"
        },
        "\\gvertneqq": {
            font: "ams",
            group: "rel",
            replace: "\ue00d"
        },
        "\\gnsim": {
            font: "ams",
            group: "rel",
            replace: "\u22e7"
        },
        "\\gnapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2a8a"
        },
        "\\nsucc": {
            font: "ams",
            group: "rel",
            replace: "\u2281"
        },
        "\\nsucceq": {
            font: "ams",
            group: "rel",
            replace: "\u22e1"
        },
        "\\succnsim": {
            font: "ams",
            group: "rel",
            replace: "\u22e9"
        },
        "\\succnapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2aba"
        },
        "\\ncong": {
            font: "ams",
            group: "rel",
            replace: "\u2246"
        },
        "\\nshortparallel": {
            font: "ams",
            group: "rel",
            replace: "\ue007"
        },
        "\\nparallel": {
            font: "ams",
            group: "rel",
            replace: "\u2226"
        },
        "\\nVDash": {
            font: "ams",
            group: "rel",
            replace: "\u22af"
        },
        "\\ntriangleright": {
            font: "ams",
            group: "rel",
            replace: "\u22eb"
        },
        "\\ntrianglerighteq": {
            font: "ams",
            group: "rel",
            replace: "\u22ed"
        },
        "\\nsupseteqq": {
            font: "ams",
            group: "rel",
            replace: "\ue018"
        },
        "\\supsetneq": {
            font: "ams",
            group: "rel",
            replace: "\u228b"
        },
        "\\varsupsetneq": {
            font: "ams",
            group: "rel",
            replace: "\ue01b"
        },
        "\\supsetneqq": {
            font: "ams",
            group: "rel",
            replace: "\u2acc"
        },
        "\\varsupsetneqq": {
            font: "ams",
            group: "rel",
            replace: "\ue019"
        },
        "\\nVdash": {
            font: "ams",
            group: "rel",
            replace: "\u22ae"
        },
        "\\precneqq": {
            font: "ams",
            group: "rel",
            replace: "\u2ab5"
        },
        "\\succneqq": {
            font: "ams",
            group: "rel",
            replace: "\u2ab6"
        },
        "\\nsubseteqq": {
            font: "ams",
            group: "rel",
            replace: "\ue016"
        },
        "\\unlhd": {
            font: "ams",
            group: "bin",
            replace: "\u22b4"
        },
        "\\unrhd": {
            font: "ams",
            group: "bin",
            replace: "\u22b5"
        },

        // AMS Negated Arrows
         "\\nleftarrow": {
            font: "ams",
            group: "rel",
            replace: "\u219a"
        },
        "\\nrightarrow": {
            font: "ams",
            group: "rel",
            replace: "\u219b"
        },
        "\\nLeftarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21cd"
        },
        "\\nRightarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21cf"
        },
        "\\nleftrightarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21ae"
        },
        "\\nLeftrightarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21ce"
        },

        // AMS Misc
        "\\vartriangle": {
            font: "ams",
            group: "rel",
            replace: "\u25b3"
        },
        "\\hslash": {
            font: "ams",
            group: "textord",
            replace: "\u210f"
        },
        "\\triangledown": {
            font: "ams",
            group: "textord",
            replace: "\u25bd"
        },
        "\\lozenge": {
            font: "ams",
            group: "textord",
            replace: "\u25ca"
        },
        "\\circledS": {
            font: "ams",
            group: "textord",
            replace: "\u24c8"
        },
        "\\measuredangle": {
            font: "ams",
            group: "textord",
            replace: "\u2221"
        },
        "\\nexists": {
            font: "ams",
            group: "textord",
            replace: "\u2204"
        },
        "\\mho": {
            font: "ams",
            group: "textord",
            replace: "\u2127"
        },
        "\\Finv": {
            font: "ams",
            group: "textord",
            replace: "\u2132"
        },
        "\\Game": {
            font: "ams",
            group: "textord",
            replace: "\u2141"
        },
        "\\Bbbk": {
            font: "ams",
            group: "textord",
            replace: "\u006b"
        },
        "\\backprime": {
            font: "ams",
            group: "textord",
            replace: "\u2035"
        },
        "\\blacktriangle": {
            font: "ams",
            group: "textord",
            replace: "\u25b2"
        },
        "\\blacktriangledown": {
            font: "ams",
            group: "textord",
            replace: "\u25bc"
        },
        "\\blacksquare": {
            font: "ams",
            group: "textord",
            replace: "\u25a0"
        },
        "\\blacklozenge": {
            font: "ams",
            group: "textord",
            replace: "\u29eb"
        },
        "\\bigstar": {
            font: "ams",
            group: "textord",
            replace: "\u2605"
        },
        "\\sphericalangle": {
            font: "ams",
            group: "textord",
            replace: "\u2222"
        },
        "\\complement": {
            font: "ams",
            group: "textord",
            replace: "\u2201"
        },
        "\\eth": {
            font: "ams",
            group: "textord",
            replace: "\u00f0"
        },
        "\\diagup": {
            font: "ams",
            group: "textord",
            replace: "\u2571"
        },
        "\\diagdown": {
            font: "ams",
            group: "textord",
            replace: "\u2572"
        },
        "\\square": {
            font: "ams",
            group: "textord",
            replace: "\u25a1"
        },
        "\\Box": {
            font: "ams",
            group: "textord",
            replace: "\u25a1"
        },
        "\\Diamond": {
            font: "ams",
            group: "textord",
            replace: "\u25ca"
        },
        "\\yen": {
            font: "ams",
            group: "textord",
            replace: "\u00a5"
        },

        // AMS Hebrew
        "\\beth": {
            font: "ams",
            group: "textord",
            replace: "\u2136"
        },
        "\\daleth": {
            font: "ams",
            group: "textord",
            replace: "\u2138"
        },
        "\\gimel": {
            font: "ams",
            group: "textord",
            replace: "\u2137"
        },

        // AMS Greek
        "\\digamma": {
            font: "ams",
            group: "textord",
            replace: "\u03dd"
        },
        "\\varkappa": {
            font: "ams",
            group: "textord",
            replace: "\u03f0"
        },

        // AMS Delimiters
        "\\ulcorner": {
            font: "ams",
            group: "textord",
            replace: "\u250c"
        },
        "\\urcorner": {
            font: "ams",
            group: "textord",
            replace: "\u2510"
        },
        "\\llcorner": {
            font: "ams",
            group: "textord",
            replace: "\u2514"
        },
        "\\lrcorner": {
            font: "ams",
            group: "textord",
            replace: "\u2518"
        },

        // AMS Binary Relations
        "\\leqq": {
            font: "ams",
            group: "rel",
            replace: "\u2266"
        },
        "\\leqslant": {
            font: "ams",
            group: "rel",
            replace: "\u2a7d"
        },
        "\\eqslantless": {
            font: "ams",
            group: "rel",
            replace: "\u2a95"
        },
        "\\lesssim": {
            font: "ams",
            group: "rel",
            replace: "\u2272"
        },
        "\\lessapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2a85"
        },
        "\\approxeq": {
            font: "ams",
            group: "rel",
            replace: "\u224a"
        },
        "\\lessdot": {
            font: "ams",
            group: "bin",
            replace: "\u22d6"
        },
        "\\lll": {
            font: "ams",
            group: "rel",
            replace: "\u22d8"
        },
        "\\lessgtr": {
            font: "ams",
            group: "rel",
            replace: "\u2276"
        },
        "\\lesseqgtr": {
            font: "ams",
            group: "rel",
            replace: "\u22da"
        },
        "\\lesseqqgtr": {
            font: "ams",
            group: "rel",
            replace: "\u2a8b"
        },
        "\\doteqdot": {
            font: "ams",
            group: "rel",
            replace: "\u2251"
        },
        "\\risingdotseq": {
            font: "ams",
            group: "rel",
            replace: "\u2253"
        },
        "\\fallingdotseq": {
            font: "ams",
            group: "rel",
            replace: "\u2252"
        },
        "\\backsim": {
            font: "ams",
            group: "rel",
            replace: "\u223d"
        },
        "\\backsimeq": {
            font: "ams",
            group: "rel",
            replace: "\u22cd"
        },
        "\\subseteqq": {
            font: "ams",
            group: "rel",
            replace: "\u2ac5"
        },
        "\\Subset": {
            font: "ams",
            group: "rel",
            replace: "\u22d0"
        },
        "\\sqsubset": {
            font: "ams",
            group: "rel",
            replace: "\u228f"
        },
        "\\preccurlyeq": {
            font: "ams",
            group: "rel",
            replace: "\u227c"
        },
        "\\curlyeqprec": {
            font: "ams",
            group: "rel",
            replace: "\u22de"
        },
        "\\precsim": {
            font: "ams",
            group: "rel",
            replace: "\u227e"
        },
        "\\precapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2ab7"
        },
        "\\vartriangleleft": {
            font: "ams",
            group: "rel",
            replace: "\u22b2"
        },
        "\\trianglelefteq": {
            font: "ams",
            group: "rel",
            replace: "\u22b4"
        },
        "\\vDash": {
            font: "ams",
            group: "rel",
            replace: "\u22a8"
        },
        "\\Vvdash": {
            font: "ams",
            group: "rel",
            replace: "\u22aa"
        },
        "\\smallsmile": {
            font: "ams",
            group: "rel",
            replace: "\u2323"
        },
        "\\smallfrown": {
            font: "ams",
            group: "rel",
            replace: "\u2322"
        },
        "\\bumpeq": {
            font: "ams",
            group: "rel",
            replace: "\u224f"
        },
        "\\Bumpeq": {
            font: "ams",
            group: "rel",
            replace: "\u224e"
        },
        "\\geqq": {
            font: "ams",
            group: "rel",
            replace: "\u2267"
        },
        "\\geqslant": {
            font: "ams",
            group: "rel",
            replace: "\u2a7e"
        },
        "\\eqslantgtr": {
            font: "ams",
            group: "rel",
            replace: "\u2a96"
        },
        "\\gtrsim": {
            font: "ams",
            group: "rel",
            replace: "\u2273"
        },
        "\\gtrapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2a86"
        },
        "\\gtrdot": {
            font: "ams",
            group: "bin",
            replace: "\u22d7"
        },
        "\\ggg": {
            font: "ams",
            group: "rel",
            replace: "\u22d9"
        },
        "\\gtrless": {
            font: "ams",
            group: "rel",
            replace: "\u2277"
        },
        "\\gtreqless": {
            font: "ams",
            group: "rel",
            replace: "\u22db"
        },
        "\\gtreqqless": {
            font: "ams",
            group: "rel",
            replace: "\u2a8c"
        },
        "\\eqcirc": {
            font: "ams",
            group: "rel",
            replace: "\u2256"
        },
        "\\circeq": {
            font: "ams",
            group: "rel",
            replace: "\u2257"
        },
        "\\triangleq": {
            font: "ams",
            group: "rel",
            replace: "\u225c"
        },
        "\\thicksim": {
            font: "ams",
            group: "rel",
            replace: "\u223c"
        },
        "\\thickapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2248"
        },
        "\\supseteqq": {
            font: "ams",
            group: "rel",
            replace: "\u2ac6"
        },
        "\\Supset": {
            font: "ams",
            group: "rel",
            replace: "\u22d1"
        },
        "\\sqsupset": {
            font: "ams",
            group: "rel",
            replace: "\u2290"
        },
        "\\succcurlyeq": {
            font: "ams",
            group: "rel",
            replace: "\u227d"
        },
        "\\curlyeqsucc": {
            font: "ams",
            group: "rel",
            replace: "\u22df"
        },
        "\\succsim": {
            font: "ams",
            group: "rel",
            replace: "\u227f"
        },
        "\\succapprox": {
            font: "ams",
            group: "rel",
            replace: "\u2ab8"
        },
        "\\vartriangleright": {
            font: "ams",
            group: "rel",
            replace: "\u22b3"
        },
        "\\trianglerighteq": {
            font: "ams",
            group: "rel",
            replace: "\u22b5"
        },
        "\\Vdash": {
            font: "ams",
            group: "rel",
            replace: "\u22a9"
        },
        "\\shortmid": {
            font: "ams",
            group: "rel",
            replace: "\u2223"
        },
        "\\shortparallel": {
            font: "ams",
            group: "rel",
            replace: "\u2225"
        },
        "\\between": {
            font: "ams",
            group: "rel",
            replace: "\u226c"
        },
        "\\pitchfork": {
            font: "ams",
            group: "rel",
            replace: "\u22d4"
        },
        "\\varpropto": {
            font: "ams",
            group: "rel",
            replace: "\u221d"
        },
        "\\blacktriangleleft": {
            font: "ams",
            group: "rel",
            replace: "\u25c0"
        },
        "\\therefore": {
            font: "ams",
            group: "rel",
            replace: "\u2234"
        },
        "\\backepsilon": {
            font: "ams",
            group: "rel",
            replace: "\u220d"
        },
        "\\blacktriangleright": {
            font: "ams",
            group: "rel",
            replace: "\u25b6"
        },
        "\\because": {
            font: "ams",
            group: "rel",
            replace: "\u2235"
        },
        "\\llless": {
            font: "ams",
            group: "rel",
            replace: "\u22d8"
        },
        "\\gggtr": {
            font: "ams",
            group: "rel",
            replace: "\u22d9"
        },
        "\\lhd": {
            font: "ams",
            group: "bin",
            replace: "\u22b2"
        },
        "\\rhd": {
            font: "ams",
            group: "bin",
            replace: "\u22b3"
        },
        "\\eqsim": {
            font: "ams",
            group: "rel",
            replace: "\u2242"
        },
        "\\Join": {
            font: "main",
            group: "rel",
            replace: "\u22c8"
        },
        "\\Doteq": {
            font: "ams",
            group: "rel",
            replace: "\u2251"
        },

        // AMS Binary Operators
        "\\dotplus": {
            font: "ams",
            group: "bin",
            replace: "\u2214"
        },
        "\\smallsetminus": {
            font: "ams",
            group: "bin",
            replace: "\u2216"
        },
        "\\Cap": {
            font: "ams",
            group: "bin",
            replace: "\u22d2"
        },
        "\\Cup": {
            font: "ams",
            group: "bin",
            replace: "\u22d3"
        },
        "\\doublebarwedge": {
            font: "ams",
            group: "bin",
            replace: "\u2a5e"
        },
        "\\boxminus": {
            font: "ams",
            group: "bin",
            replace: "\u229f"
        },
        "\\boxplus": {
            font: "ams",
            group: "bin",
            replace: "\u229e"
        },
        "\\divideontimes": {
            font: "ams",
            group: "bin",
            replace: "\u22c7"
        },
        "\\ltimes": {
            font: "ams",
            group: "bin",
            replace: "\u22c9"
        },
        "\\rtimes": {
            font: "ams",
            group: "bin",
            replace: "\u22ca"
        },
        "\\leftthreetimes": {
            font: "ams",
            group: "bin",
            replace: "\u22cb"
        },
        "\\rightthreetimes": {
            font: "ams",
            group: "bin",
            replace: "\u22cc"
        },
        "\\curlywedge": {
            font: "ams",
            group: "bin",
            replace: "\u22cf"
        },
        "\\curlyvee": {
            font: "ams",
            group: "bin",
            replace: "\u22ce"
        },
        "\\circleddash": {
            font: "ams",
            group: "bin",
            replace: "\u229d"
        },
        "\\circledast": {
            font: "ams",
            group: "bin",
            replace: "\u229b"
        },
        "\\centerdot": {
            font: "ams",
            group: "bin",
            replace: "\u22c5"
        },
        "\\intercal": {
            font: "ams",
            group: "bin",
            replace: "\u22ba"
        },
        "\\doublecap": {
            font: "ams",
            group: "bin",
            replace: "\u22d2"
        },
        "\\doublecup": {
            font: "ams",
            group: "bin",
            replace: "\u22d3"
        },
        "\\boxtimes": {
            font: "ams",
            group: "bin",
            replace: "\u22a0"
        },

        // AMS Arrows
        "\\dashrightarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21e2"
        },
        "\\dashleftarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21e0"
        },
        "\\leftleftarrows": {
            font: "ams",
            group: "rel",
            replace: "\u21c7"
        },
        "\\leftrightarrows": {
            font: "ams",
            group: "rel",
            replace: "\u21c6"
        },
        "\\Lleftarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21da"
        },
        "\\twoheadleftarrow": {
            font: "ams",
            group: "rel",
            replace: "\u219e"
        },
        "\\leftarrowtail": {
            font: "ams",
            group: "rel",
            replace: "\u21a2"
        },
        "\\looparrowleft": {
            font: "ams",
            group: "rel",
            replace: "\u21ab"
        },
        "\\leftrightharpoons": {
            font: "ams",
            group: "rel",
            replace: "\u21cb"
        },
        "\\curvearrowleft": {
            font: "ams",
            group: "rel",
            replace: "\u21b6"
        },
        "\\circlearrowleft": {
            font: "ams",
            group: "rel",
            replace: "\u21ba"
        },
        "\\Lsh": {
            font: "ams",
            group: "rel",
            replace: "\u21b0"
        },
        "\\upuparrows": {
            font: "ams",
            group: "rel",
            replace: "\u21c8"
        },
        "\\upharpoonleft": {
            font: "ams",
            group: "rel",
            replace: "\u21bf"
        },
        "\\downharpoonleft": {
            font: "ams",
            group: "rel",
            replace: "\u21c3"
        },
        "\\multimap": {
            font: "ams",
            group: "rel",
            replace: "\u22b8"
        },
        "\\leftrightsquigarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21ad"
        },
        "\\rightrightarrows": {
            font: "ams",
            group: "rel",
            replace: "\u21c9"
        },
        "\\rightleftarrows": {
            font: "ams",
            group: "rel",
            replace: "\u21c4"
        },
        "\\twoheadrightarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21a0"
        },
        "\\rightarrowtail": {
            font: "ams",
            group: "rel",
            replace: "\u21a3"
        },
        "\\looparrowright": {
            font: "ams",
            group: "rel",
            replace: "\u21ac"
        },
        "\\curvearrowright": {
            font: "ams",
            group: "rel",
            replace: "\u21b7"
        },
        "\\circlearrowright": {
            font: "ams",
            group: "rel",
            replace: "\u21bb"
        },
        "\\Rsh": {
            font: "ams",
            group: "rel",
            replace: "\u21b1"
        },
        "\\downdownarrows": {
            font: "ams",
            group: "rel",
            replace: "\u21ca"
        },
        "\\upharpoonright": {
            font: "ams",
            group: "rel",
            replace: "\u21be"
        },
        "\\downharpoonright": {
            font: "ams",
            group: "rel",
            replace: "\u21c2"
        },
        "\\rightsquigarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21dd"
        },
        "\\leadsto": {
            font: "ams",
            group: "rel",
            replace: "\u21dd"
        },
        "\\Rrightarrow": {
            font: "ams",
            group: "rel",
            replace: "\u21db"
        },
        "\\restriction": {
            font: "ams",
            group: "rel",
            replace: "\u21be"
        },

        "`": {
            font: "main",
            group: "textord",
            replace: "\u2018"
        },
        "\\$": {
            font: "main",
            group: "textord",
            replace: "$"
        },
        "\\%": {
            font: "main",
            group: "textord",
            replace: "%"
        },
        "\\_": {
            font: "main",
            group: "textord",
            replace: "_"
        },
        "\\angle": {
            font: "main",
            group: "textord",
            replace: "\u2220"
        },
        "\\infty": {
            font: "main",
            group: "textord",
            replace: "\u221e"
        },
        "\\prime": {
            font: "main",
            group: "textord",
            replace: "\u2032"
        },
        "\\triangle": {
            font: "main",
            group: "textord",
            replace: "\u25b3"
        },
        "\\Gamma": {
            font: "main",
            group: "textord",
            replace: "\u0393"
        },
        "\\Delta": {
            font: "main",
            group: "textord",
            replace: "\u0394"
        },
        "\\Theta": {
            font: "main",
            group: "textord",
            replace: "\u0398"
        },
        "\\Lambda": {
            font: "main",
            group: "textord",
            replace: "\u039b"
        },
        "\\Xi": {
            font: "main",
            group: "textord",
            replace: "\u039e"
        },
        "\\Pi": {
            font: "main",
            group: "textord",
            replace: "\u03a0"
        },
        "\\Sigma": {
            font: "main",
            group: "textord",
            replace: "\u03a3"
        },
        "\\Upsilon": {
            font: "main",
            group: "textord",
            replace: "\u03a5"
        },
        "\\Phi": {
            font: "main",
            group: "textord",
            replace: "\u03a6"
        },
        "\\Psi": {
            font: "main",
            group: "textord",
            replace: "\u03a8"
        },
        "\\Omega": {
            font: "main",
            group: "textord",
            replace: "\u03a9"
        },
        "\\neg": {
            font: "main",
            group: "textord",
            replace: "\u00ac"
        },
        "\\lnot": {
            font: "main",
            group: "textord",
            replace: "\u00ac"
        },
        "\\top": {
            font: "main",
            group: "textord",
            replace: "\u22a4"
        },
        "\\bot": {
            font: "main",
            group: "textord",
            replace: "\u22a5"
        },
        "\\emptyset": {
            font: "main",
            group: "textord",
            replace: "\u2205"
        },
        "\\varnothing": {
            font: "ams",
            group: "textord",
            replace: "\u2205"
        },
        "\\alpha": {
            font: "main",
            group: "mathord",
            replace: "\u03b1"
        },
        "\\beta": {
            font: "main",
            group: "mathord",
            replace: "\u03b2"
        },
        "\\gamma": {
            font: "main",
            group: "mathord",
            replace: "\u03b3"
        },
        "\\delta": {
            font: "main",
            group: "mathord",
            replace: "\u03b4"
        },
        "\\epsilon": {
            font: "main",
            group: "mathord",
            replace: "\u03f5"
        },
        "\\zeta": {
            font: "main",
            group: "mathord",
            replace: "\u03b6"
        },
        "\\eta": {
            font: "main",
            group: "mathord",
            replace: "\u03b7"
        },
        "\\theta": {
            font: "main",
            group: "mathord",
            replace: "\u03b8"
        },
        "\\iota": {
            font: "main",
            group: "mathord",
            replace: "\u03b9"
        },
        "\\kappa": {
            font: "main",
            group: "mathord",
            replace: "\u03ba"
        },
        "\\lambda": {
            font: "main",
            group: "mathord",
            replace: "\u03bb"
        },
        "\\mu": {
            font: "main",
            group: "mathord",
            replace: "\u03bc"
        },
        "\\nu": {
            font: "main",
            group: "mathord",
            replace: "\u03bd"
        },
        "\\xi": {
            font: "main",
            group: "mathord",
            replace: "\u03be"
        },
        "\\omicron": {
            font: "main",
            group: "mathord",
            replace: "o"
        },
        "\\pi": {
            font: "main",
            group: "mathord",
            replace: "\u03c0"
        },
        "\\rho": {
            font: "main",
            group: "mathord",
            replace: "\u03c1"
        },
        "\\sigma": {
            font: "main",
            group: "mathord",
            replace: "\u03c3"
        },
        "\\tau": {
            font: "main",
            group: "mathord",
            replace: "\u03c4"
        },
        "\\upsilon": {
            font: "main",
            group: "mathord",
            replace: "\u03c5"
        },
        "\\phi": {
            font: "main",
            group: "mathord",
            replace: "\u03d5"
        },
        "\\chi": {
            font: "main",
            group: "mathord",
            replace: "\u03c7"
        },
        "\\psi": {
            font: "main",
            group: "mathord",
            replace: "\u03c8"
        },
        "\\omega": {
            font: "main",
            group: "mathord",
            replace: "\u03c9"
        },
        "\\varepsilon": {
            font: "main",
            group: "mathord",
            replace: "\u03b5"
        },
        "\\vartheta": {
            font: "main",
            group: "mathord",
            replace: "\u03d1"
        },
        "\\varpi": {
            font: "main",
            group: "mathord",
            replace: "\u03d6"
        },
        "\\varrho": {
            font: "main",
            group: "mathord",
            replace: "\u03f1"
        },
        "\\varsigma": {
            font: "main",
            group: "mathord",
            replace: "\u03c2"
        },
        "\\varphi": {
            font: "main",
            group: "mathord",
            replace: "\u03c6"
        },
        "*": {
            font: "main",
            group: "bin",
            replace: "\u2217"
        },
        "+": {
            font: "main",
            group: "bin"
        },
        "-": {
            font: "main",
            group: "bin",
            replace: "\u2212"
        },
        "\\cdot": {
            font: "main",
            group: "bin",
            replace: "\u22c5"
        },
        "\\circ": {
            font: "main",
            group: "bin",
            replace: "\u2218"
        },
        "\\div": {
            font: "main",
            group: "bin",
            replace: "\u00f7"
        },
        "\\pm": {
            font: "main",
            group: "bin",
            replace: "\u00b1"
        },
        "\\times": {
            font: "main",
            group: "bin",
            replace: "\u00d7"
        },
        "\\cap": {
            font: "main",
            group: "bin",
            replace: "\u2229"
        },
        "\\cup": {
            font: "main",
            group: "bin",
            replace: "\u222a"
        },
        "\\setminus": {
            font: "main",
            group: "bin",
            replace: "\u2216"
        },
        "\\land": {
            font: "main",
            group: "bin",
            replace: "\u2227"
        },
        "\\lor": {
            font: "main",
            group: "bin",
            replace: "\u2228"
        },
        "\\wedge": {
            font: "main",
            group: "bin",
            replace: "\u2227"
        },
        "\\vee": {
            font: "main",
            group: "bin",
            replace: "\u2228"
        },
        "\\surd": {
            font: "main",
            group: "textord",
            replace: "\u221a"
        },
        "(": {
            font: "main",
            group: "open"
        },
        "[": {
            font: "main",
            group: "open"
        },
        "\\langle": {
            font: "main",
            group: "open",
            replace: "\u27e8"
        },
        "\\lvert": {
            font: "main",
            group: "open",
            replace: "\u2223"
        },
        ")": {
            font: "main",
            group: "close"
        },
        "]": {
            font: "main",
            group: "close"
        },
        "?": {
            font: "main",
            group: "close"
        },
        "!": {
            font: "main",
            group: "close"
        },
        "\\rangle": {
            font: "main",
            group: "close",
            replace: "\u27e9"
        },
        "\\rvert": {
            font: "main",
            group: "close",
            replace: "\u2223"
        },
        "=": {
            font: "main",
            group: "rel"
        },
        "<": {
            font: "main",
            group: "rel"
        },
        ">": {
            font: "main",
            group: "rel"
        },
        ":": {
            font: "main",
            group: "rel"
        },
        "\\approx": {
            font: "main",
            group: "rel",
            replace: "\u2248"
        },
        "\\cong": {
            font: "main",
            group: "rel",
            replace: "\u2245"
        },
        "\\ge": {
            font: "main",
            group: "rel",
            replace: "\u2265"
        },
        "\\geq": {
            font: "main",
            group: "rel",
            replace: "\u2265"
        },
        "\\gets": {
            font: "main",
            group: "rel",
            replace: "\u2190"
        },
        "\\in": {
            font: "main",
            group: "rel",
            replace: "\u2208"
        },
        "\\notin": {
            font: "main",
            group: "rel",
            replace: "\u2209"
        },
        "\\subset": {
            font: "main",
            group: "rel",
            replace: "\u2282"
        },
        "\\supset": {
            font: "main",
            group: "rel",
            replace: "\u2283"
        },
        "\\subseteq": {
            font: "main",
            group: "rel",
            replace: "\u2286"
        },
        "\\supseteq": {
            font: "main",
            group: "rel",
            replace: "\u2287"
        },
        "\\nsubseteq": {
            font: "ams",
            group: "rel",
            replace: "\u2288"
        },
        "\\nsupseteq": {
            font: "ams",
            group: "rel",
            replace: "\u2289"
        },
        "\\models": {
            font: "main",
            group: "rel",
            replace: "\u22a8"
        },
        "\\leftarrow": {
            font: "main",
            group: "rel",
            replace: "\u2190"
        },
        "\\le": {
            font: "main",
            group: "rel",
            replace: "\u2264"
        },
        "\\leq": {
            font: "main",
            group: "rel",
            replace: "\u2264"
        },
        "\\ne": {
            font: "main",
            group: "rel",
            replace: "\u2260"
        },
        "\\neq": {
            font: "main",
            group: "rel",
            replace: "\u2260"
        },
        "\\rightarrow": {
            font: "main",
            group: "rel",
            replace: "\u2192"
        },
        "\\to": {
            font: "main",
            group: "rel",
            replace: "\u2192"
        },
        "\\ngeq": {
            font: "ams",
            group: "rel",
            replace: "\u2271"
        },
        "\\nleq": {
            font: "ams",
            group: "rel",
            replace: "\u2270"
        },
        "\\!": {
            font: "main",
            group: "spacing"
        },
        "\\ ": {
            font: "main",
            group: "spacing",
            replace: "\u00a0"
        },
        "~": {
            font: "main",
            group: "spacing",
            replace: "\u00a0"
        },
        "\\,": {
            font: "main",
            group: "spacing"
        },
        "\\:": {
            font: "main",
            group: "spacing"
        },
        "\\;": {
            font: "main",
            group: "spacing"
        },
        "\\enspace": {
            font: "main",
            group: "spacing"
        },
        "\\qquad": {
            font: "main",
            group: "spacing"
        },
        "\\quad": {
            font: "main",
            group: "spacing"
        },
        "\\space": {
            font: "main",
            group: "spacing",
            replace: "\u00a0"
        },
        ",": {
            font: "main",
            group: "punct"
        },
        ";": {
            font: "main",
            group: "punct"
        },
        "\\colon": {
            font: "main",
            group: "punct",
            replace: ":"
        },
        "\\barwedge": {
            font: "ams",
            group: "textord",
            replace: "\u22bc"
        },
        "\\veebar": {
            font: "ams",
            group: "textord",
            replace: "\u22bb"
        },
        "\\odot": {
            font: "main",
            group: "textord",
            replace: "\u2299"
        },
        "\\oplus": {
            font: "main",
            group: "textord",
            replace: "\u2295"
        },
        "\\otimes": {
            font: "main",
            group: "textord",
            replace: "\u2297"
        },
        "\\partial":{
            font: "main",
            group: "textord",
            replace: "\u2202"
        },
        "\\oslash": {
            font: "main",
            group: "textord",
            replace: "\u2298"
        },
        "\\circledcirc": {
            font: "ams",
            group: "textord",
            replace: "\u229a"
        },
        "\\boxdot": {
            font: "ams",
            group: "textord",
            replace: "\u22a1"
        },
        "\\bigtriangleup": {
            font: "main",
            group: "textord",
            replace: "\u25b3"
        },
        "\\bigtriangledown": {
            font: "main",
            group: "textord",
            replace: "\u25bd"
        },
        "\\dagger": {
            font: "main",
            group: "textord",
            replace: "\u2020"
        },
        "\\diamond": {
            font: "main",
            group: "textord",
            replace: "\u22c4"
        },
        "\\star": {
            font: "main",
            group: "textord",
            replace: "\u22c6"
        },
        "\\triangleleft": {
            font: "main",
            group: "textord",
            replace: "\u25c3"
        },
        "\\triangleright": {
            font: "main",
            group: "textord",
            replace: "\u25b9"
        },
        "\\{": {
            font: "main",
            group: "open",
            replace: "{"
        },
        "\\}": {
            font: "main",
            group: "close",
            replace: "}"
        },
        "\\lbrace": {
            font: "main",
            group: "open",
            replace: "{"
        },
        "\\rbrace": {
            font: "main",
            group: "close",
            replace: "}"
        },
        "\\lbrack": {
            font: "main",
            group: "open",
            replace: "["
        },
        "\\rbrack": {
            font: "main",
            group: "close",
            replace: "]"
        },
        "\\lfloor": {
            font: "main",
            group: "open",
            replace: "\u230a"
        },
        "\\rfloor": {
            font: "main",
            group: "close",
            replace: "\u230b"
        },
        "\\lceil": {
            font: "main",
            group: "open",
            replace: "\u2308"
        },
        "\\rceil": {
            font: "main",
            group: "close",
            replace: "\u2309"
        },
        "\\backslash": {
            font: "main",
            group: "textord",
            replace: "\\"
        },
        "|": {
            font: "main",
            group: "textord",
            replace: "\u2223"
        },
        "\\vert": {
            font: "main",
            group: "textord",
            replace: "\u2223"
        },
        "\\|": {
            font: "main",
            group: "textord",
            replace: "\u2225"
        },
        "\\Vert": {
            font: "main",
            group: "textord",
            replace: "\u2225"
        },
        "\\uparrow": {
            font: "main",
            group: "textord",
            replace: "\u2191"
        },
        "\\Uparrow": {
            font: "main",
            group: "textord",
            replace: "\u21d1"
        },
        "\\downarrow": {
            font: "main",
            group: "textord",
            replace: "\u2193"
        },
        "\\Downarrow": {
            font: "main",
            group: "textord",
            replace: "\u21d3"
        },
        "\\updownarrow": {
            font: "main",
            group: "textord",
            replace: "\u2195"
        },
        "\\Updownarrow": {
            font: "main",
            group: "textord",
            replace: "\u21d5"
        },
        "\\coprod": {
            font: "math",
            group: "op",
            replace: "\u2210"
        },
        "\\bigvee": {
            font: "math",
            group: "op",
            replace: "\u22c1"
        },
        "\\bigwedge": {
            font: "math",
            group: "op",
            replace: "\u22c0"
        },
        "\\biguplus": {
            font: "math",
            group: "op",
            replace: "\u2a04"
        },
        "\\bigcap": {
            font: "math",
            group: "op",
            replace: "\u22c2"
        },
        "\\bigcup": {
            font: "math",
            group: "op",
            replace: "\u22c3"
        },
        "\\int": {
            font: "math",
            group: "op",
            replace: "\u222b"
        },
        "\\intop": {
            font: "math",
            group: "op",
            replace: "\u222b"
        },
        "\\iint": {
            font: "math",
            group: "op",
            replace: "\u222c"
        },
        "\\iiint": {
            font: "math",
            group: "op",
            replace: "\u222d"
        },
        "\\prod": {
            font: "math",
            group: "op",
            replace: "\u220f"
        },
        "\\sum": {
            font: "math",
            group: "op",
            replace: "\u2211"
        },
        "\\bigotimes": {
            font: "math",
            group: "op",
            replace: "\u2a02"
        },
        "\\bigoplus": {
            font: "math",
            group: "op",
            replace: "\u2a01"
        },
        "\\bigodot": {
            font: "math",
            group: "op",
            replace: "\u2a00"
        },
        "\\oint": {
            font: "math",
            group: "op",
            replace: "\u222e"
        },
        "\\bigsqcup": {
            font: "math",
            group: "op",
            replace: "\u2a06"
        },
        "\\smallint": {
            font: "math",
            group: "op",
            replace: "\u222b"
        },
        "\\ldots": {
            font: "main",
            group: "punct",
            replace: "\u2026"
        },
        "\\cdots": {
            font: "main",
            group: "inner",
            replace: "\u22ef"
        },
        "\\ddots": {
            font: "main",
            group: "inner",
            replace: "\u22f1"
        },
        "\\vdots": {
            font: "main",
            group: "textord",
            replace: "\u22ee"
        },
        "\\acute": {
            font: "main",
            group: "accent",
            replace: "\u00b4"
        },
        "\\grave": {
            font: "main",
            group: "accent",
            replace: "\u0060"
        },
        "\\ddot": {
            font: "main",
            group: "accent",
            replace: "\u00a8"
        },
        "\\tilde": {
            font: "main",
            group: "accent",
            replace: "\u007e"
        },
        "\\bar": {
            font: "main",
            group: "accent",
            replace: "\u00af"
        },
        "\\breve": {
            font: "main",
            group: "accent",
            replace: "\u02d8"
        },
        "\\check": {
            font: "main",
            group: "accent",
            replace: "\u02c7"
        },
        "\\hat": {
            font: "main",
            group: "accent",
            replace: "\u005e"
        },
        "\\vec": {
            font: "main",
            group: "accent",
            replace: "\u20d7"
        },
        "\\dot": {
            font: "main",
            group: "accent",
            replace: "\u02d9"
        }
    },
    "text": {
        "\\ ": {
            font: "main",
            group: "spacing",
            replace: "\u00a0"
        },
        " ": {
            font: "main",
            group: "spacing",
            replace: "\u00a0"
        },
        "~": {
            font: "main",
            group: "spacing",
            replace: "\u00a0"
        }
    }
};

// There are lots of symbols which are the same, so we add them in afterwards.

// All of these are textords in math mode
var mathTextSymbols = "0123456789/@.\"";
for (var i = 0; i < mathTextSymbols.length; i++) {
    var ch = mathTextSymbols.charAt(i);
    symbols.math[ch] = {
        font: "main",
        group: "textord"
    };
}

// All of these are textords in text mode
var textSymbols = "0123456789`!@*()-=+[]'\";:?/.,";
for (var i = 0; i < textSymbols.length; i++) {
    var ch = textSymbols.charAt(i);
    symbols.text[ch] = {
        font: "main",
        group: "textord"
    };
}

// All of these are textords in text mode, and mathords in math mode
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (var i = 0; i < letters.length; i++) {
    var ch = letters.charAt(i);
    symbols.math[ch] = {
        font: "main",
        group: "mathord"
    };
    symbols.text[ch] = {
        font: "main",
        group: "textord"
    };
}

module.exports = symbols;

},{}],21:[function(require,module,exports){
/**
 * This file contains a list of utility functions which are useful in other
 * files.
 */

/**
 * Provide an `indexOf` function which works in IE8, but defers to native if
 * possible.
 */
var nativeIndexOf = Array.prototype.indexOf;
var indexOf = function(list, elem) {
    if (list == null) {
        return -1;
    }
    if (nativeIndexOf && list.indexOf === nativeIndexOf) {
        return list.indexOf(elem);
    }
    var i = 0, l = list.length;
    for (; i < l; i++) {
        if (list[i] === elem) {
            return i;
        }
    }
    return -1;
};

/**
 * Return whether an element is contained in a list
 */
var contains = function(list, elem) {
    return indexOf(list, elem) !== -1;
};

// hyphenate and escape adapted from Facebook's React under Apache 2 license

var uppercase = /([A-Z])/g;
var hyphenate = function(str) {
    return str.replace(uppercase, "-$1").toLowerCase();
};

var ESCAPE_LOOKUP = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  "\"": "&quot;",
  "'": "&#x27;"
};

var ESCAPE_REGEX = /[&><"']/g;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escape(text) {
  return ("" + text).replace(ESCAPE_REGEX, escaper);
}

/**
 * A function to set the text content of a DOM element in all supported
 * browsers. Note that we don't define this if there is no document.
 */
var setTextContent;
if (typeof document !== "undefined") {
    var testNode = document.createElement("span");
    if ("textContent" in testNode) {
        setTextContent = function(node, text) {
            node.textContent = text;
        };
    } else {
        setTextContent = function(node, text) {
            node.innerText = text;
        };
    }
}

/**
 * A function to clear a node.
 */
function clearNode(node) {
    setTextContent(node, "");
}

module.exports = {
    contains: contains,
    escape: escape,
    hyphenate: hyphenate,
    indexOf: indexOf,
    setTextContent: setTextContent,
    clearNode: clearNode
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvYmVzcG9rZS1tYXRoLmpzIiwibm9kZV9tb2R1bGVzL2luc2VydC1jc3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMva2F0ZXgva2F0ZXguanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL0xleGVyLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9PcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9QYXJzZUVycm9yLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9QYXJzZXIuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL1NldHRpbmdzLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9TdHlsZS5qcyIsIm5vZGVfbW9kdWxlcy9rYXRleC9zcmMvYnVpbGRDb21tb24uanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL2J1aWxkSFRNTC5qcyIsIm5vZGVfbW9kdWxlcy9rYXRleC9zcmMvYnVpbGRNYXRoTUwuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL2J1aWxkVHJlZS5qcyIsIm5vZGVfbW9kdWxlcy9rYXRleC9zcmMvZGVsaW1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9kb21UcmVlLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9mb250TWV0cmljcy5qcyIsIm5vZGVfbW9kdWxlcy9rYXRleC9zcmMvZnVuY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9tYXRoTUxUcmVlLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9wYXJzZVRyZWUuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL3N5bWJvbHMuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaGhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDLytFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBrYXRleCA9IHJlcXVpcmUoJ2thdGV4JyksXG4gIGluc2VydENzcyA9IHJlcXVpcmUoJ2luc2VydC1jc3MnKTtcbiAgXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIG1hdGhFbGVtZW50cyA9IGRlY2sucGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXRoJyk7XG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWF0aEVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICB2YXIgaW5saW5lID0gZWwudGFnTmFtZSA9PT0gJ3NwYW4nO1xuICAgICAgZWwuaW5uZXJIVE1MID0ga2F0ZXgucmVuZGVyVG9TdHJpbmcoZWwuaW5uZXJUZXh0LCB7IGRpc3BsYXlNb2RlOiBpbmxpbmUgfSk7XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKG1hdGhFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNzcyA9IFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9BTVM7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX0FNUy1SZWd1bGFyLmVvdCk7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX0FNUy1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9BTVMtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybChmb250cy9LYVRlWF9BTVMtUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSx1cmwoZm9udHMvS2FUZVhfQU1TLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9DYWxpZ3JhcGhpYztcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfQ2FsaWdyYXBoaWMtQm9sZC5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9DYWxpZ3JhcGhpYy1Cb2xkLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9DYWxpZ3JhcGhpYy1Cb2xkLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX0NhbGlncmFwaGljLUJvbGQud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX0NhbGlncmFwaGljLUJvbGQudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9DYWxpZ3JhcGhpYztcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfQ2FsaWdyYXBoaWMtUmVndWxhci5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9DYWxpZ3JhcGhpYy1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9DYWxpZ3JhcGhpYy1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX0NhbGlncmFwaGljLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX0NhbGlncmFwaGljLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9GcmFrdHVyO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9GcmFrdHVyLUJvbGQuZW90KTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfRnJha3R1ci1Cb2xkLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9GcmFrdHVyLUJvbGQud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfRnJha3R1ci1Cb2xkLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9GcmFrdHVyLUJvbGQudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9GcmFrdHVyO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9GcmFrdHVyLVJlZ3VsYXIuZW90KTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfRnJha3R1ci1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9GcmFrdHVyLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfRnJha3R1ci1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9GcmFrdHVyLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9NYWluO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9NYWluLUJvbGQuZW90KTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfTWFpbi1Cb2xkLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9NYWluLUJvbGQud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfTWFpbi1Cb2xkLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9NYWluLUJvbGQudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9NYWluO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9NYWluLUl0YWxpYy5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9NYWluLUl0YWxpYy5lb3QjaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoZm9udHMvS2FUZVhfTWFpbi1JdGFsaWMud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfTWFpbi1JdGFsaWMud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX01haW4tSXRhbGljLnR0ZikgZm9ybWF0KCd0dGYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogS2FUZVhfTWFpbjtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfTWFpbi1SZWd1bGFyLmVvdCk7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX01haW4tUmVndWxhci5lb3QjaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoZm9udHMvS2FUZVhfTWFpbi1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX01haW4tUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSx1cmwoZm9udHMvS2FUZVhfTWFpbi1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0dGYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogS2FUZVhfTWF0aDtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfTWF0aC1Cb2xkSXRhbGljLmVvdCk7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX01hdGgtQm9sZEl0YWxpYy5lb3QjaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoZm9udHMvS2FUZVhfTWF0aC1Cb2xkSXRhbGljLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX01hdGgtQm9sZEl0YWxpYy53b2ZmKSBmb3JtYXQoJ3dvZmYnKSx1cmwoZm9udHMvS2FUZVhfTWF0aC1Cb2xkSXRhbGljLnR0ZikgZm9ybWF0KCd0dGYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogS2FUZVhfTWF0aDtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfTWF0aC1JdGFsaWMuZW90KTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfTWF0aC1JdGFsaWMuZW90I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKGZvbnRzL0thVGVYX01hdGgtSXRhbGljLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX01hdGgtSXRhbGljLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9NYXRoLUl0YWxpYy50dGYpIGZvcm1hdCgndHRmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEthVGVYX01hdGg7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX01hdGgtUmVndWxhci5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9NYXRoLVJlZ3VsYXIuZW90I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKGZvbnRzL0thVGVYX01hdGgtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybChmb250cy9LYVRlWF9NYXRoLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX01hdGgtUmVndWxhci50dGYpIGZvcm1hdCgndHRmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbFxcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEthVGVYX1NhbnNTZXJpZjtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLUJvbGQuZW90KTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLUJvbGQuZW90I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKGZvbnRzL0thVGVYX1NhbnNTZXJpZi1Cb2xkLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX1NhbnNTZXJpZi1Cb2xkLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9TYW5zU2VyaWYtQm9sZC50dGYpIGZvcm1hdCgndHRmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbFxcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEthVGVYX1NhbnNTZXJpZjtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLUl0YWxpYy5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9TYW5zU2VyaWYtSXRhbGljLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9TYW5zU2VyaWYtSXRhbGljLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX1NhbnNTZXJpZi1JdGFsaWMud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX1NhbnNTZXJpZi1JdGFsaWMudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWNcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TYW5zU2VyaWY7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX1NhbnNTZXJpZi1SZWd1bGFyLmVvdCk7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX1NhbnNTZXJpZi1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9TYW5zU2VyaWYtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybChmb250cy9LYVRlWF9TYW5zU2VyaWYtUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSx1cmwoZm9udHMvS2FUZVhfU2Fuc1NlcmlmLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TY3JpcHQ7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX1NjcmlwdC1SZWd1bGFyLmVvdCk7XFxyXFxuICAgIHNyYzogdXJsKGZvbnRzL0thVGVYX1NjcmlwdC1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9TY3JpcHQtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybChmb250cy9LYVRlWF9TY3JpcHQtUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSx1cmwoZm9udHMvS2FUZVhfU2NyaXB0LVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2l6ZTEtUmVndWxhci5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9TaXplMS1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9TaXplMS1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX1NpemUxLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX1NpemUxLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMjtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2l6ZTItUmVndWxhci5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9TaXplMi1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9TaXplMi1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX1NpemUyLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX1NpemUyLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMztcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2l6ZTMtUmVndWxhci5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9TaXplMy1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9TaXplMy1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX1NpemUzLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX1NpemUzLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplNDtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfU2l6ZTQtUmVndWxhci5lb3QpO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9TaXplNC1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9TaXplNC1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX1NpemU0LVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX1NpemU0LVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9UeXBld3JpdGVyO1xcclxcbiAgICBzcmM6IHVybChmb250cy9LYVRlWF9UeXBld3JpdGVyLVJlZ3VsYXIuZW90KTtcXHJcXG4gICAgc3JjOiB1cmwoZm9udHMvS2FUZVhfVHlwZXdyaXRlci1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9UeXBld3JpdGVyLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfVHlwZXdyaXRlci1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9UeXBld3JpdGVyLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4LWRpc3BsYXkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAxZW0gMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxyXFxufVxcclxcblxcclxcbi5rYXRleC1kaXNwbGF5Pi5rYXRleCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xcclxcbn1cXHJcXG5cXHJcXG5tYXRoLmthdGV4IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjIxZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjJcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IHtcXHJcXG4gICAgZm9udDogNDAwIDEuMjFlbSBLYVRlWF9NYWluO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAua2F0ZXgtaHRtbCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmthdGV4LW1hdGhtbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XFxyXFxuICAgIGNsaXA6IHJlY3QoMXB4LDFweCwxcHgsMXB4KTtcXHJcXG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogMCFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogMXB4IWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IDFweCFpbXBvcnRhbnQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW5cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5iYXNlLC5rYXRleCAuc3RydXQge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5tYXRoaXQge1xcclxcbiAgICBmb250LWZhbWlseTogS2FUZVhfTWF0aDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuYW1zcm0ge1xcclxcbiAgICBmb250LWZhbWlseTogS2FUZVhfQU1TXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAudGV4dHN0eWxlPi5tb3JkKy5tb3Age1xcclxcbiAgICBtYXJnaW4tbGVmdDogLjE2NjY3ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC50ZXh0c3R5bGU+Lm1vcmQrLm1iaW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLjIyMjIyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC50ZXh0c3R5bGU+Lm1vcmQrLm1yZWwge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLjI3Nzc4ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC50ZXh0c3R5bGU+Lm1vcCsubW9wLC5rYXRleCAudGV4dHN0eWxlPi5tb3ArLm1vcmQsLmthdGV4IC50ZXh0c3R5bGU+Lm1vcmQrLm1pbm5lciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAuMTY2NjdlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnRleHRzdHlsZT4ubW9wKy5tcmVsIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC4yNzc3OGVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAudGV4dHN0eWxlPi5tb3ArLm1pbm5lciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAuMTY2NjdlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnRleHRzdHlsZT4ubWJpbisubWlubmVyLC5rYXRleCAudGV4dHN0eWxlPi5tYmluKy5tb3AsLmthdGV4IC50ZXh0c3R5bGU+Lm1iaW4rLm1vcGVuLC5rYXRleCAudGV4dHN0eWxlPi5tYmluKy5tb3JkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC4yMjIyMmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAudGV4dHN0eWxlPi5tcmVsKy5taW5uZXIsLmthdGV4IC50ZXh0c3R5bGU+Lm1yZWwrLm1vcCwua2F0ZXggLnRleHRzdHlsZT4ubXJlbCsubW9wZW4sLmthdGV4IC50ZXh0c3R5bGU+Lm1yZWwrLm1vcmQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLjI3Nzc4ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC50ZXh0c3R5bGU+Lm1jbG9zZSsubW9wIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC4xNjY2N2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAudGV4dHN0eWxlPi5tY2xvc2UrLm1iaW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLjIyMjIyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC50ZXh0c3R5bGU+Lm1jbG9zZSsubXJlbCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAuMjc3NzhlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnRleHRzdHlsZT4ubWNsb3NlKy5taW5uZXIsLmthdGV4IC50ZXh0c3R5bGU+Lm1pbm5lcisubW9wLC5rYXRleCAudGV4dHN0eWxlPi5taW5uZXIrLm1vcmQsLmthdGV4IC50ZXh0c3R5bGU+Lm1wdW5jdCsubWNsb3NlLC5rYXRleCAudGV4dHN0eWxlPi5tcHVuY3QrLm1pbm5lciwua2F0ZXggLnRleHRzdHlsZT4ubXB1bmN0Ky5tb3AsLmthdGV4IC50ZXh0c3R5bGU+Lm1wdW5jdCsubW9wZW4sLmthdGV4IC50ZXh0c3R5bGU+Lm1wdW5jdCsubW9yZCwua2F0ZXggLnRleHRzdHlsZT4ubXB1bmN0Ky5tcHVuY3QsLmthdGV4IC50ZXh0c3R5bGU+Lm1wdW5jdCsubXJlbCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAuMTY2NjdlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnRleHRzdHlsZT4ubWlubmVyKy5tYmluIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC4yMjIyMmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAudGV4dHN0eWxlPi5taW5uZXIrLm1yZWwge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLjI3Nzc4ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5tY2xvc2UrLm1vcCwua2F0ZXggLm1pbm5lcisubW9wLC5rYXRleCAubW9wKy5tb3AsLmthdGV4IC5tb3ArLm1vcmQsLmthdGV4IC5tb3JkKy5tb3AsLmthdGV4IC50ZXh0c3R5bGU+Lm1pbm5lcisubWlubmVyLC5rYXRleCAudGV4dHN0eWxlPi5taW5uZXIrLm1vcGVuLC5rYXRleCAudGV4dHN0eWxlPi5taW5uZXIrLm1wdW5jdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAuMTY2NjdlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnJlc2V0LXRleHRzdHlsZS50ZXh0c3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnJlc2V0LXRleHRzdHlsZS5zY3JpcHRzdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnJlc2V0LXRleHRzdHlsZS5zY3JpcHRzY3JpcHRzdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnJlc2V0LXNjcmlwdHN0eWxlLnRleHRzdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40Mjg1N2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAucmVzZXQtc2NyaXB0c3R5bGUuc2NyaXB0c3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnJlc2V0LXNjcmlwdHN0eWxlLnNjcmlwdHNjcmlwdHN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNzE0MjllbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnJlc2V0LXNjcmlwdHNjcmlwdHN0eWxlLnRleHRzdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAucmVzZXQtc2NyaXB0c2NyaXB0c3R5bGUuc2NyaXB0c3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNGVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAucmVzZXQtc2NyaXB0c2NyaXB0c3R5bGUuc2NyaXB0c2NyaXB0c3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnN0eWxlLXdyYXAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC52bGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnZsaXN0PnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC52bGlzdD5zcGFuPnNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC52bGlzdCAuYmFzZWxpbmUtZml4IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAubXN1cHN1YiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnRcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5tZnJhYz5zcGFuPnNwYW4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5tZnJhYyAuZnJhYy1saW5lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCVcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5tZnJhYyAuZnJhYy1saW5lOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBibG9ja1xcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLm1mcmFjIC5mcmFjLWxpbmU6YWZ0ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogLjA0ZW07XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogLTFweFxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLm1zcGFjZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLm1zcGFjZS5uZWdhdGl2ZXRoaW5zcGFjZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtLjE2NjY3ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5tc3BhY2UudGhpbnNwYWNlIHtcXHJcXG4gICAgd2lkdGg6IC4xNjY2N2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAubXNwYWNlLm1lZGl1bXNwYWNlIHtcXHJcXG4gICAgd2lkdGg6IC4yMjIyMmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAubXNwYWNlLnRoaWNrc3BhY2Uge1xcclxcbiAgICB3aWR0aDogLjI3Nzc4ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5tc3BhY2UuZW5zcGFjZSB7XFxyXFxuICAgIHdpZHRoOiAuNWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAubXNwYWNlLnF1YWQge1xcclxcbiAgICB3aWR0aDogMWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAubXNwYWNlLnFxdWFkIHtcXHJcXG4gICAgd2lkdGg6IDJlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmxsYXAsLmthdGV4IC5ybGFwIHtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmxsYXA+LmlubmVyLC5rYXRleCAucmxhcD4uaW5uZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5sbGFwPi5maXgsLmthdGV4IC5ybGFwPi5maXgge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5sbGFwPi5pbm5lciB7XFxyXFxuICAgIHJpZ2h0OiAwXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAucmxhcD4uaW5uZXIge1xcclxcbiAgICBsZWZ0OiAwXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAua2F0ZXgtbG9nbyAuYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1ZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtLjMyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtLjJlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmthdGV4LWxvZ28gLnQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLS4yM2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAua2F0ZXgtbG9nbyAuZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtLjE2NjdlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IC4yMTU1ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5rYXRleC1sb2dvIC54IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5ydWxlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5vdmVybGluZSAub3ZlcmxpbmUtbGluZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAub3ZlcmxpbmUgLm92ZXJsaW5lLWxpbmU6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAub3ZlcmxpbmUgLm92ZXJsaW5lLWxpbmU6YWZ0ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogLjA0ZW07XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogLTFweFxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnNxcnQ+LnNxcnQtc2lnbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnNxcnQgLnNxcnQtbGluZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuc3FydCAuc3FydC1saW5lOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBibG9ja1xcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLnNxcnQgLnNxcnQtbGluZTphZnRlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAuMDRlbTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMXB4XFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlciwua2F0ZXggLnNpemluZyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTEge1xcclxcbiAgICBmb250LXNpemU6IDFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTIsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTIge1xcclxcbiAgICBmb250LXNpemU6IDEuNGVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplMywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxLnNpemU0LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxLnNpemU0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTUge1xcclxcbiAgICBmb250LXNpemU6IDJlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTYge1xcclxcbiAgICBmb250LXNpemU6IDIuNGVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplNywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplNyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi44OGVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplOCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplOCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy40NmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplOSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplOSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNC4xNGVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplMTAsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTEwIHtcXHJcXG4gICAgZm9udC1zaXplOiA0Ljk4ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUyLnNpemUxLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUyLnNpemUxIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNzE0Mjg1NzFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTIsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTIge1xcclxcbiAgICBmb250LXNpemU6IDFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTMsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTMge1xcclxcbiAgICBmb250LXNpemU6IDEuMTQyODU3MTRlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTQge1xcclxcbiAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTUge1xcclxcbiAgICBmb250LXNpemU6IDEuNDI4NTcxNDNlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTYge1xcclxcbiAgICBmb250LXNpemU6IDEuNzE0Mjg1NzFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTcge1xcclxcbiAgICBmb250LXNpemU6IDIuMDU3MTQyODZlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTgsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTgge1xcclxcbiAgICBmb250LXNpemU6IDIuNDcxNDI4NTdlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTksLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTkge1xcclxcbiAgICBmb250LXNpemU6IDIuOTU3MTQyODZlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTEwLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUyLnNpemUxMCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41NTcxNDI4NmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjYyNWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjg3NWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplNCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplNCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTUge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTYge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplNywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplNyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUzLnNpemU4LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUzLnNpemU4IHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjE2MjVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTksLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTkge1xcclxcbiAgICBmb250LXNpemU6IDIuNTg3NWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMTAsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTEwIHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjExMjVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTEge1xcclxcbiAgICBmb250LXNpemU6IC41NTU1NTU1NmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc3Nzc3Nzc4ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU0LnNpemUzLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU0LnNpemUzIHtcXHJcXG4gICAgZm9udC1zaXplOiAuODg4ODg4ODllbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTQge1xcclxcbiAgICBmb250LXNpemU6IDFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTUge1xcclxcbiAgICBmb250LXNpemU6IDEuMTExMTExMTFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTYge1xcclxcbiAgICBmb250LXNpemU6IDEuMzMzMzMzMzNlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTcge1xcclxcbiAgICBmb250LXNpemU6IDEuNmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplOCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplOCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS45MjIyMjIyMmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplOSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplOSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4zZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU0LnNpemUxMCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplMTAge1xcclxcbiAgICBmb250LXNpemU6IDIuNzY2NjY2NjdlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTEge1xcclxcbiAgICBmb250LXNpemU6IC41ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemUyLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemUyIHtcXHJcXG4gICAgZm9udC1zaXplOiAuN2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNS5zaXplMywua2F0ZXggLnNpemluZy5yZXNldC1zaXplNS5zaXplMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTQge1xcclxcbiAgICBmb250LXNpemU6IC45ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemU1LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemU1IHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemU2LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemU2IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTcge1xcclxcbiAgICBmb250LXNpemU6IDEuNDRlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTgsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTgge1xcclxcbiAgICBmb250LXNpemU6IDEuNzNlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTksLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTkge1xcclxcbiAgICBmb250LXNpemU6IDIuMDdlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTEwLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemUxMCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40OWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplMSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjQxNjY2NjY3ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU2LnNpemUyLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU2LnNpemUyIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNTgzMzMzMzNlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTMsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTMge1xcclxcbiAgICBmb250LXNpemU6IC42NjY2NjY2N2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplNCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplNCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU2LnNpemU1LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU2LnNpemU1IHtcXHJcXG4gICAgZm9udC1zaXplOiAuODMzMzMzMzNlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTYge1xcclxcbiAgICBmb250LXNpemU6IDFlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTcge1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplOCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplOCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40NDE2NjY2N2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplOSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplOSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43MjVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTEwLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU2LnNpemUxMCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4wNzVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTEge1xcclxcbiAgICBmb250LXNpemU6IC4zNDcyMjIyMmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNy5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNy5zaXplMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjQ4NjExMTExZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemUzLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemUzIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNTU1NTU1NTZlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTQge1xcclxcbiAgICBmb250LXNpemU6IC42MjVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTUge1xcclxcbiAgICBmb250LXNpemU6IC42OTQ0NDQ0NGVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNy5zaXplNiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNy5zaXplNiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjgzMzMzMzMzZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemU3LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemU3IHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemU4LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemU4IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjIwMTM4ODg5ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemU5LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemU5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjQzNzVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTEwLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemUxMCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43MjkxNjY2N2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOC5zaXplMSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjI4OTAxNzM0ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemUyLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemUyIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNDA0NjI0MjhlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTguc2l6ZTMsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTMge1xcclxcbiAgICBmb250LXNpemU6IC40NjI0Mjc3NWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOC5zaXplNCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplNCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjUyMDIzMTIxZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemU1LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemU1IHtcXHJcXG4gICAgZm9udC1zaXplOiAuNTc4MDM0NjhlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTguc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTYge1xcclxcbiAgICBmb250LXNpemU6IC42OTM2NDE2MmVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOC5zaXplNywua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplNyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjgzMjM2OTk0ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemU4LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemU4IHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemU5LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemU5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjE5NjUzMTc5ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemUxMCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplMTAge1xcclxcbiAgICBmb250LXNpemU6IDEuNDM5MzA2MzZlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTEge1xcclxcbiAgICBmb250LXNpemU6IC4yNDE1NDU4OWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjMzODE2NDI1ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemUzLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemUzIHtcXHJcXG4gICAgZm9udC1zaXplOiAuMzg2NDczNDNlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTQge1xcclxcbiAgICBmb250LXNpemU6IC40MzQ3ODI2MWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplNSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplNSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjQ4MzA5MTc5ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemU2LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemU2IHtcXHJcXG4gICAgZm9udC1zaXplOiAuNTc5NzEwMTRlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTcge1xcclxcbiAgICBmb250LXNpemU6IC42OTU2NTIxN2VtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplOCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplOCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjgzNTc0ODc5ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemU5LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemU5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemUxMCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplMTAge1xcclxcbiAgICBmb250LXNpemU6IDEuMjAyODk4NTVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemUxLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxMC5zaXplMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjIwMDgwMzIxZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTIge1xcclxcbiAgICBmb250LXNpemU6IC4yODExMjQ1ZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplMywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTMge1xcclxcbiAgICBmb250LXNpemU6IC4zMjEyODUxNGVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMTAuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEwLnNpemU0IHtcXHJcXG4gICAgZm9udC1zaXplOiAuMzYxNDQ1NzhlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU1LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxMC5zaXplNSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjQwMTYwNjQzZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplNiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTYge1xcclxcbiAgICBmb250LXNpemU6IC40ODE5Mjc3MWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMTAuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEwLnNpemU3IHtcXHJcXG4gICAgZm9udC1zaXplOiAuNTc4MzEzMjVlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU4LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxMC5zaXplOCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjY5NDc3OTEyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplOSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTkge1xcclxcbiAgICBmb250LXNpemU6IC44MzEzMjUzZW1cXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplMTAsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEwLnNpemUxMCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZGVsaW1zaXppbmcuc2l6ZTEge1xcclxcbiAgICBmb250LWZhbWlseTogS2FUZVhfU2l6ZTFcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5kZWxpbXNpemluZy5zaXplMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMlxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmRlbGltc2l6aW5nLnNpemUzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEthVGVYX1NpemUzXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZGVsaW1zaXppbmcuc2l6ZTQge1xcclxcbiAgICBmb250LWZhbWlseTogS2FUZVhfU2l6ZTRcXHJcXG59XFxyXFxuXFxyXFxuLmthdGV4IC5kZWxpbXNpemluZy5tdWx0IC5kZWxpbS1zaXplMT5zcGFuIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEthVGVYX1NpemUxXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuZGVsaW1zaXppbmcubXVsdCAuZGVsaW0tc2l6ZTQ+c3BhbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplNFxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLm51bGxkZWxpbWl0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAuMTJlbVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLm9wLXN5bWJvbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLm9wLXN5bWJvbC5zbWFsbC1vcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMVxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLm9wLXN5bWJvbC5sYXJnZS1vcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLYVRlWF9TaXplMlxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmFjY2VudD4udmxpc3Q+c3Bhbiwua2F0ZXggLm9wLWxpbWl0cz4udmxpc3Q+c3BhbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxcclxcbn1cXHJcXG5cXHJcXG4ua2F0ZXggLmFjY2VudCAuYWNjZW50LWJvZHk+c3BhbiB7XFxyXFxuICAgIHdpZHRoOiAwXFxyXFxufVxcclxcblxcclxcbi5rYXRleCAuYWNjZW50IC5hY2NlbnQtYm9keS5hY2NlbnQtdmVjPnNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IC4zMjZlbVxcclxcbn1cXHJcXG5cIjtcbiAgICAgICAgaW5zZXJ0Q3NzKGNzcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ0l0IHdhcyBub3QgcG9zc2libGUgdG8gbG9hZCB0aGUgQ1NTIGZyb20gS2FUZVguIERldGFpbHM6ICcgKyBlKTtcbiAgICB9XG4gIH07XG59O1xuIiwidmFyIGluc2VydGVkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcywgb3B0aW9ucykge1xuICAgIGlmIChpbnNlcnRlZFtjc3NdKSByZXR1cm47XG4gICAgaW5zZXJ0ZWRbY3NzXSA9IHRydWU7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG5cbiAgICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9XG4gICAgXG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJlcGVuZCkge1xuICAgICAgICBoZWFkLmluc2VydEJlZm9yZShlbGVtLCBoZWFkLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgS2FUZVguIEhlcmUsIHdlIGV4cG9zZSBmdW5jdGlvbnMgZm9yXG4gKiByZW5kZXJpbmcgZXhwcmVzc2lvbnMgZWl0aGVyIHRvIERPTSBub2RlcyBvciB0byBtYXJrdXAgc3RyaW5ncy5cbiAqXG4gKiBXZSBhbHNvIGV4cG9zZSB0aGUgUGFyc2VFcnJvciBjbGFzcyB0byBjaGVjayBpZiBlcnJvcnMgdGhyb3duIGZyb20gS2FUZVggYXJlXG4gKiBlcnJvcnMgaW4gdGhlIGV4cHJlc3Npb24sIG9yIGVycm9ycyBpbiBqYXZhc2NyaXB0IGhhbmRsaW5nLlxuICovXG5cbnZhciBQYXJzZUVycm9yID0gcmVxdWlyZShcIi4vc3JjL1BhcnNlRXJyb3JcIik7XG52YXIgU2V0dGluZ3MgPSByZXF1aXJlKFwiLi9zcmMvU2V0dGluZ3NcIik7XG5cbnZhciBidWlsZFRyZWUgPSByZXF1aXJlKFwiLi9zcmMvYnVpbGRUcmVlXCIpO1xudmFyIHBhcnNlVHJlZSA9IHJlcXVpcmUoXCIuL3NyYy9wYXJzZVRyZWVcIik7XG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi9zcmMvdXRpbHNcIik7XG5cbi8qKlxuICogUGFyc2UgYW5kIGJ1aWxkIGFuIGV4cHJlc3Npb24sIGFuZCBwbGFjZSB0aGF0IGV4cHJlc3Npb24gaW4gdGhlIERPTSBub2RlXG4gKiBnaXZlbi5cbiAqL1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKGV4cHJlc3Npb24sIGJhc2VOb2RlLCBvcHRpb25zKSB7XG4gICAgdXRpbHMuY2xlYXJOb2RlKGJhc2VOb2RlKTtcblxuICAgIHZhciBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyhvcHRpb25zKTtcblxuICAgIHZhciB0cmVlID0gcGFyc2VUcmVlKGV4cHJlc3Npb24sIHNldHRpbmdzKTtcbiAgICB2YXIgbm9kZSA9IGJ1aWxkVHJlZSh0cmVlLCBleHByZXNzaW9uLCBzZXR0aW5ncykudG9Ob2RlKCk7XG5cbiAgICBiYXNlTm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbn07XG5cbi8vIEthVGVYJ3Mgc3R5bGVzIGRvbid0IHdvcmsgcHJvcGVybHkgaW4gcXVpcmtzIG1vZGUuIFByaW50IG91dCBhbiBlcnJvciwgYW5kXG4vLyBkaXNhYmxlIHJlbmRlcmluZy5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAoZG9jdW1lbnQuY29tcGF0TW9kZSAhPT0gXCJDU1MxQ29tcGF0XCIpIHtcbiAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJXYXJuaW5nOiBLYVRlWCBkb2Vzbid0IHdvcmsgaW4gcXVpcmtzIG1vZGUuIE1ha2Ugc3VyZSB5b3VyIFwiICtcbiAgICAgICAgICAgICAgICBcIndlYnNpdGUgaGFzIGEgc3VpdGFibGUgZG9jdHlwZS5cIik7XG5cbiAgICAgICAgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcIkthVGVYIGRvZXNuJ3Qgd29yayBpbiBxdWlya3MgbW9kZS5cIik7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuZCBidWlsZCBhbiBleHByZXNzaW9uLCBhbmQgcmV0dXJuIHRoZSBtYXJrdXAgZm9yIHRoYXQuXG4gKi9cbnZhciByZW5kZXJUb1N0cmluZyA9IGZ1bmN0aW9uKGV4cHJlc3Npb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3Mob3B0aW9ucyk7XG5cbiAgICB2YXIgdHJlZSA9IHBhcnNlVHJlZShleHByZXNzaW9uLCBzZXR0aW5ncyk7XG4gICAgcmV0dXJuIGJ1aWxkVHJlZSh0cmVlLCBleHByZXNzaW9uLCBzZXR0aW5ncykudG9NYXJrdXAoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJlbmRlcjogcmVuZGVyLFxuICAgIHJlbmRlclRvU3RyaW5nOiByZW5kZXJUb1N0cmluZyxcbiAgICBQYXJzZUVycm9yOiBQYXJzZUVycm9yXG59O1xuIiwiLyoqXG4gKiBUaGUgTGV4ZXIgY2xhc3MgaGFuZGxlcyB0b2tlbml6aW5nIHRoZSBpbnB1dCBpbiB2YXJpb3VzIHdheXMuIFNpbmNlIG91clxuICogcGFyc2VyIGV4cGVjdHMgdXMgdG8gYmUgYWJsZSB0byBiYWNrdHJhY2ssIHRoZSBsZXhlciBhbGxvd3MgbGV4aW5nIGZyb20gYW55XG4gKiBnaXZlbiBzdGFydGluZyBwb2ludC5cbiAqXG4gKiBJdHMgbWFpbiBleHBvc2VkIGZ1bmN0aW9uIGlzIHRoZSBgbGV4YCBmdW5jdGlvbiwgd2hpY2ggdGFrZXMgYSBwb3NpdGlvbiB0b1xuICogbGV4IGZyb20gYW5kIGEgdHlwZSBvZiB0b2tlbiB0byBsZXguIEl0IGRlZmVycyB0byB0aGUgYXBwcm9wcmlhdGUgYF9pbm5lckxleGBcbiAqIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSB2YXJpb3VzIGBfaW5uZXJMZXhgIGZ1bmN0aW9ucyBwZXJmb3JtIHRoZSBhY3R1YWwgbGV4aW5nIG9mIGRpZmZlcmVudFxuICoga2luZHMuXG4gKi9cblxudmFyIFBhcnNlRXJyb3IgPSByZXF1aXJlKFwiLi9QYXJzZUVycm9yXCIpO1xuXG4vLyBUaGUgbWFpbiBsZXhlciBjbGFzc1xuZnVuY3Rpb24gTGV4ZXIoaW5wdXQpIHtcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xufVxuXG4vLyBUaGUgcmVzdWx0aW5nIHRva2VuIHJldHVybmVkIGZyb20gYGxleGAuXG5mdW5jdGlvbiBUb2tlbih0ZXh0LCBkYXRhLCBwb3NpdGlvbikge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG59XG5cbi8vIFwibm9ybWFsXCIgdHlwZXMgb2YgdG9rZW5zLiBUaGVzZSBhcmUgdG9rZW5zIHdoaWNoIGNhbiBiZSBtYXRjaGVkIGJ5IGEgc2ltcGxlXG4vLyByZWdleFxudmFyIG1hdGhOb3JtYWxzID0gW1xuICAgIC9eWy98QC5cIlwiYDAtOWEtekEtWl0vLCAvLyBvcmRzXG4gICAgL15bKistXS8sIC8vIGJpbnNcbiAgICAvXls9PD46XS8sIC8vIHJlbHNcbiAgICAvXlssO10vLCAvLyBwdW5jdHVhdGlvblxuICAgIC9eWydcXF5fe31dLywgLy8gbWlzY1xuICAgIC9eWyhcXFtdLywgLy8gb3BlbnNcbiAgICAvXlspXFxdPyFdLywgLy8gY2xvc2VzXG4gICAgL15+LyAvLyBzcGFjaW5nXG5dO1xuXG4vLyBUaGVzZSBhcmUgXCJub3JtYWxcIiB0b2tlbnMgbGlrZSBhYm92ZSwgYnV0IHNob3VsZCBpbnN0ZWFkIGJlIHBhcnNlZCBpbiB0ZXh0XG4vLyBtb2RlLlxudmFyIHRleHROb3JtYWxzID0gW1xuICAgIC9eW2EtekEtWjAtOWAhQCooKS09K1xcW1xcXSdcIjs6P1xcLy4sXS8sIC8vIG9yZHNcbiAgICAvXlt7fV0vLCAvLyBncm91cGluZ1xuICAgIC9efi8gLy8gc3BhY2luZ1xuXTtcblxuLy8gUmVnZXhlcyBmb3IgbWF0Y2hpbmcgd2hpdGVzcGFjZVxudmFyIHdoaXRlc3BhY2VSZWdleCA9IC9eXFxzKi87XG52YXIgd2hpdGVzcGFjZUNvbmNhdFJlZ2V4ID0gL14oICt8XFxcXCAgKykvO1xuXG4vLyBUaGlzIHJlZ2V4IG1hdGNoZXMgYW55IG90aGVyIFRlWCBmdW5jdGlvbiwgd2hpY2ggaXMgYSBiYWNrc2xhc2ggZm9sbG93ZWQgYnkgYVxuLy8gd29yZCBvciBhIHNpbmdsZSBzeW1ib2xcbnZhciBhbnlGdW5jID0gL15cXFxcKD86W2EtekEtWl0rfC4pLztcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxleGVzIGEgc2luZ2xlIG5vcm1hbCB0b2tlbi4gSXQgdGFrZXMgYSBwb3NpdGlvbiwgYSBsaXN0IG9mXG4gKiBcIm5vcm1hbFwiIHRva2VucyB0byB0cnksIGFuZCB3aGV0aGVyIGl0IHNob3VsZCBjb21wbGV0ZWx5IGlnbm9yZSB3aGl0ZXNwYWNlIG9yXG4gKiBub3QuXG4gKi9cbkxleGVyLnByb3RvdHlwZS5faW5uZXJMZXggPSBmdW5jdGlvbihwb3MsIG5vcm1hbHMsIGlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShwb3MpO1xuICAgIHZhciB3aGl0ZXNwYWNlO1xuXG4gICAgaWYgKGlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgLy8gR2V0IHJpZCBvZiB3aGl0ZXNwYWNlLlxuICAgICAgICB3aGl0ZXNwYWNlID0gaW5wdXQubWF0Y2god2hpdGVzcGFjZVJlZ2V4KVswXTtcbiAgICAgICAgcG9zICs9IHdoaXRlc3BhY2UubGVuZ3RoO1xuICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKHdoaXRlc3BhY2UubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEbyB0aGUgZnVua3kgY29uY2F0ZW5hdGlvbiBvZiB3aGl0ZXNwYWNlIHRoYXQgaGFwcGVucyBpbiB0ZXh0IG1vZGUuXG4gICAgICAgIHdoaXRlc3BhY2UgPSBpbnB1dC5tYXRjaCh3aGl0ZXNwYWNlQ29uY2F0UmVnZXgpO1xuICAgICAgICBpZiAod2hpdGVzcGFjZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihcIiBcIiwgbnVsbCwgcG9zICsgd2hpdGVzcGFjZVswXS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBubyBtb3JlIGlucHV0IHRvIHBhcnNlLCByZXR1cm4gYW4gRU9GIHRva2VuXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFwiRU9GXCIsIG51bGwsIHBvcyk7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoO1xuICAgIGlmICgobWF0Y2ggPSBpbnB1dC5tYXRjaChhbnlGdW5jKSkpIHtcbiAgICAgICAgLy8gSWYgd2UgbWF0Y2ggYSBmdW5jdGlvbiB0b2tlbiwgcmV0dXJuIGl0XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4obWF0Y2hbMF0sIG51bGwsIHBvcyArIG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBsb29rIHRocm91Z2ggdGhlIG5vcm1hbCB0b2tlbiByZWdleGVzIGFuZCBzZWUgaWYgaXQnc1xuICAgICAgICAvLyBvbmUgb2YgdGhlbS5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub3JtYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9ybWFsID0gbm9ybWFsc1tpXTtcblxuICAgICAgICAgICAgaWYgKChtYXRjaCA9IGlucHV0Lm1hdGNoKG5vcm1hbCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgaXMsIHJldHVybiBpdFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoWzBdLCBudWxsLCBwb3MgKyBtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXCJVbmV4cGVjdGVkIGNoYXJhY3RlcjogJ1wiICsgaW5wdXRbMF0gK1xuICAgICAgICBcIidcIiwgdGhpcywgcG9zKTtcbn07XG5cbi8vIEEgcmVnZXggdG8gbWF0Y2ggYSBDU1MgY29sb3IgKGxpa2UgI2ZmZmZmZiBvciBCbHVlVmlvbGV0KVxudmFyIGNzc0NvbG9yID0gL14oI1thLXowLTldK3xbYS16XSspL2k7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBsZXhlcyBhIENTUyBjb2xvci5cbiAqL1xuTGV4ZXIucHJvdG90eXBlLl9pbm5lckxleENvbG9yID0gZnVuY3Rpb24ocG9zKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UocG9zKTtcblxuICAgIC8vIElnbm9yZSB3aGl0ZXNwYWNlXG4gICAgdmFyIHdoaXRlc3BhY2UgPSBpbnB1dC5tYXRjaCh3aGl0ZXNwYWNlUmVnZXgpWzBdO1xuICAgIHBvcyArPSB3aGl0ZXNwYWNlLmxlbmd0aDtcbiAgICBpbnB1dCA9IGlucHV0LnNsaWNlKHdoaXRlc3BhY2UubGVuZ3RoKTtcblxuICAgIHZhciBtYXRjaDtcbiAgICBpZiAoKG1hdGNoID0gaW5wdXQubWF0Y2goY3NzQ29sb3IpKSkge1xuICAgICAgICAvLyBJZiB3ZSBsb29rIGxpa2UgYSBjb2xvciwgcmV0dXJuIGEgY29sb3JcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihtYXRjaFswXSwgbnVsbCwgcG9zICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcIkludmFsaWQgY29sb3JcIiwgdGhpcywgcG9zKTtcbiAgICB9XG59O1xuXG4vLyBBIHJlZ2V4IHRvIG1hdGNoIGEgZGltZW5zaW9uLiBEaW1lbnNpb25zIGxvb2sgbGlrZVxuLy8gXCIxLjJlbVwiIG9yIFwiLjRwdFwiIG9yIFwiMSBleFwiXG52YXIgc2l6ZVJlZ2V4ID0gL14oLT8pXFxzKihcXGQrKD86XFwuXFxkKik/fFxcLlxcZCspXFxzKihbYS16XXsyfSkvO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbGV4ZXMgYSBkaW1lbnNpb24uXG4gKi9cbkxleGVyLnByb3RvdHlwZS5faW5uZXJMZXhTaXplID0gZnVuY3Rpb24ocG9zKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UocG9zKTtcblxuICAgIC8vIElnbm9yZSB3aGl0ZXNwYWNlXG4gICAgdmFyIHdoaXRlc3BhY2UgPSBpbnB1dC5tYXRjaCh3aGl0ZXNwYWNlUmVnZXgpWzBdO1xuICAgIHBvcyArPSB3aGl0ZXNwYWNlLmxlbmd0aDtcbiAgICBpbnB1dCA9IGlucHV0LnNsaWNlKHdoaXRlc3BhY2UubGVuZ3RoKTtcblxuICAgIHZhciBtYXRjaDtcbiAgICBpZiAoKG1hdGNoID0gaW5wdXQubWF0Y2goc2l6ZVJlZ2V4KSkpIHtcbiAgICAgICAgdmFyIHVuaXQgPSBtYXRjaFszXTtcbiAgICAgICAgLy8gV2Ugb25seSBjdXJyZW50bHkgaGFuZGxlIFwiZW1cIiBhbmQgXCJleFwiIHVuaXRzXG4gICAgICAgIGlmICh1bml0ICE9PSBcImVtXCIgJiYgdW5pdCAhPT0gXCJleFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcIkludmFsaWQgdW5pdDogJ1wiICsgdW5pdCArIFwiJ1wiLCB0aGlzLCBwb3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4obWF0Y2hbMF0sIHtcbiAgICAgICAgICAgICAgICBudW1iZXI6ICsobWF0Y2hbMV0gKyBtYXRjaFsyXSksXG4gICAgICAgICAgICAgICAgdW5pdDogdW5pdFxuICAgICAgICAgICAgfSwgcG9zICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcIkludmFsaWQgc2l6ZVwiLCB0aGlzLCBwb3MpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxleGVzIGEgc3RyaW5nIG9mIHdoaXRlc3BhY2UuXG4gKi9cbkxleGVyLnByb3RvdHlwZS5faW5uZXJMZXhXaGl0ZXNwYWNlID0gZnVuY3Rpb24ocG9zKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UocG9zKTtcblxuICAgIHZhciB3aGl0ZXNwYWNlID0gaW5wdXQubWF0Y2god2hpdGVzcGFjZVJlZ2V4KVswXTtcbiAgICBwb3MgKz0gd2hpdGVzcGFjZS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbmV3IFRva2VuKHdoaXRlc3BhY2UsIG51bGwsIHBvcyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbGV4ZXMgYSBzaW5nbGUgdG9rZW4gc3RhcnRpbmcgYXQgYHBvc2AgYW5kIG9mIHRoZSBnaXZlbiBtb2RlLlxuICogQmFzZWQgb24gdGhlIG1vZGUsIHdlIGRlZmVyIHRvIG9uZSBvZiB0aGUgYF9pbm5lckxleGAgZnVuY3Rpb25zLlxuICovXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24ocG9zLCBtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09IFwibWF0aFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lckxleChwb3MsIG1hdGhOb3JtYWxzLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lckxleChwb3MsIHRleHROb3JtYWxzLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lubmVyTGV4Q29sb3IocG9zKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwic2l6ZVwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lckxleFNpemUocG9zKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwid2hpdGVzcGFjZVwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lckxleFdoaXRlc3BhY2UocG9zKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExleGVyO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9wdGlvbnMgdGhhdCB0aGUgUGFyc2VyIGNhcnJpZXNcbiAqIGFyb3VuZCB3aXRoIGl0IHdoaWxlIHBhcnNpbmcuIERhdGEgaXMgaGVsZCBpbiBhbiBgT3B0aW9uc2Agb2JqZWN0LCBhbmQgd2hlblxuICogcmVjdXJzaW5nLCBhIG5ldyBgT3B0aW9uc2Agb2JqZWN0IGNhbiBiZSBjcmVhdGVkIHdpdGggdGhlIGAud2l0aCpgIGFuZFxuICogYC5yZXNldGAgZnVuY3Rpb25zLlxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgbWFpbiBvcHRpb25zIGNsYXNzLiBJdCBjb250YWlucyB0aGUgc3R5bGUsIHNpemUsIGFuZCBjb2xvciBvZiB0aGVcbiAqIGN1cnJlbnQgcGFyc2UgbGV2ZWwuIEl0IGFsc28gY29udGFpbnMgdGhlIHN0eWxlIGFuZCBzaXplIG9mIHRoZSBwYXJlbnQgcGFyc2VcbiAqIGxldmVsLCBzbyBzaXplIGNoYW5nZXMgY2FuIGJlIGhhbmRsZWQgZWZmaWNpZW50bHkuXG4gKlxuICogRWFjaCBvZiB0aGUgYC53aXRoKmAgYW5kIGAucmVzZXRgIGZ1bmN0aW9ucyBwYXNzZXMgaXRzIGN1cnJlbnQgc3R5bGUgYW5kIHNpemVcbiAqIGFzIHRoZSBwYXJlbnRTdHlsZSBhbmQgcGFyZW50U2l6ZSBvZiB0aGUgbmV3IG9wdGlvbnMgY2xhc3MsIHNvIHBhcmVudFxuICogaGFuZGxpbmcgaXMgdGFrZW4gY2FyZSBvZiBhdXRvbWF0aWNhbGx5LlxuICovXG5mdW5jdGlvbiBPcHRpb25zKHN0eWxlLCBzaXplLCBjb2xvciwgcGFyZW50U3R5bGUsIHBhcmVudFNpemUpIHtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG5cbiAgICBpZiAocGFyZW50U3R5bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJlbnRTdHlsZSA9IHN0eWxlO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFN0eWxlID0gcGFyZW50U3R5bGU7XG5cbiAgICBpZiAocGFyZW50U2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmVudFNpemUgPSBzaXplO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudFNpemUgPSBwYXJlbnRTaXplO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBzdHlsZS5cbiAqL1xuT3B0aW9ucy5wcm90b3R5cGUud2l0aFN0eWxlID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbnMoc3R5bGUsIHRoaXMuc2l6ZSwgdGhpcy5jb2xvciwgdGhpcy5zdHlsZSwgdGhpcy5zaXplKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIGdpdmVuIHNpemUuXG4gKi9cbk9wdGlvbnMucHJvdG90eXBlLndpdGhTaXplID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgIHJldHVybiBuZXcgT3B0aW9ucyh0aGlzLnN0eWxlLCBzaXplLCB0aGlzLmNvbG9yLCB0aGlzLnN0eWxlLCB0aGlzLnNpemUpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gY29sb3IuXG4gKi9cbk9wdGlvbnMucHJvdG90eXBlLndpdGhDb2xvciA9IGZ1bmN0aW9uKGNvbG9yKSB7XG4gICAgcmV0dXJuIG5ldyBPcHRpb25zKHRoaXMuc3R5bGUsIHRoaXMuc2l6ZSwgY29sb3IsIHRoaXMuc3R5bGUsIHRoaXMuc2l6ZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBzYW1lIHN0eWxlLCBzaXplLCBhbmQgY29sb3IuIFRoaXMgaXNcbiAqIHVzZWQgc28gdGhhdCBwYXJlbnQgc3R5bGUgYW5kIHNpemUgY2hhbmdlcyBhcmUgaGFuZGxlZCBjb3JyZWN0bHkuXG4gKi9cbk9wdGlvbnMucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBPcHRpb25zKFxuICAgICAgICB0aGlzLnN0eWxlLCB0aGlzLnNpemUsIHRoaXMuY29sb3IsIHRoaXMuc3R5bGUsIHRoaXMuc2l6ZSk7XG59O1xuXG4vKipcbiAqIEEgbWFwIG9mIGNvbG9yIG5hbWVzIHRvIENTUyBjb2xvcnMuXG4gKiBUT0RPKGVtaWx5KTogUmVtb3ZlIHRoaXMgd2hlbiB3ZSBoYXZlIHJlYWwgbWFjcm9zXG4gKi9cbnZhciBjb2xvck1hcCA9IHtcbiAgICBcImthdGV4LWJsdWVcIjogXCIjNjQ5NWVkXCIsXG4gICAgXCJrYXRleC1vcmFuZ2VcIjogXCIjZmZhNTAwXCIsXG4gICAgXCJrYXRleC1waW5rXCI6IFwiI2ZmMDBhZlwiLFxuICAgIFwia2F0ZXgtcmVkXCI6IFwiI2RmMDAzMFwiLFxuICAgIFwia2F0ZXgtZ3JlZW5cIjogXCIjMjhhZTdiXCIsXG4gICAgXCJrYXRleC1ncmF5XCI6IFwiZ3JheVwiLFxuICAgIFwia2F0ZXgtcHVycGxlXCI6IFwiIzlkMzhiZFwiXG59O1xuXG4vKipcbiAqIEdldHMgdGhlIENTUyBjb2xvciBvZiB0aGUgY3VycmVudCBvcHRpb25zIG9iamVjdCwgYWNjb3VudGluZyBmb3IgdGhlXG4gKiBgY29sb3JNYXBgLlxuICovXG5PcHRpb25zLnByb3RvdHlwZS5nZXRDb2xvciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb2xvck1hcFt0aGlzLmNvbG9yXSB8fCB0aGlzLmNvbG9yO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25zO1xuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSBQYXJzZUVycm9yIGNsYXNzLCB3aGljaCBpcyB0aGUgbWFpbiBlcnJvciB0aHJvd24gYnkgS2FUZVhcbiAqIGZ1bmN0aW9ucyB3aGVuIHNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZy4gVGhpcyBpcyB1c2VkIHRvIGRpc3Rpbmd1aXNoIGludGVybmFsXG4gKiBlcnJvcnMgZnJvbSBlcnJvcnMgaW4gdGhlIGV4cHJlc3Npb24gdGhhdCB0aGUgdXNlciBwcm92aWRlZC5cbiAqL1xuZnVuY3Rpb24gUGFyc2VFcnJvcihtZXNzYWdlLCBsZXhlciwgcG9zaXRpb24pIHtcbiAgICB2YXIgZXJyb3IgPSBcIkthVGVYIHBhcnNlIGVycm9yOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAobGV4ZXIgIT09IHVuZGVmaW5lZCAmJiBwb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgdGhlIGlucHV0IGFuZCBhIHBvc2l0aW9uLCBtYWtlIHRoZSBlcnJvciBhIGJpdCBmYW5jaWVyXG5cbiAgICAgICAgLy8gUHJlcGVuZCBzb21lIGluZm9ybWF0aW9uXG4gICAgICAgIGVycm9yICs9IFwiIGF0IHBvc2l0aW9uIFwiICsgcG9zaXRpb24gKyBcIjogXCI7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBpbnB1dFxuICAgICAgICB2YXIgaW5wdXQgPSBsZXhlci5faW5wdXQ7XG4gICAgICAgIC8vIEluc2VydCBhIGNvbWJpbmluZyB1bmRlcnNjb3JlIGF0IHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMCwgcG9zaXRpb24pICsgXCJcXHUwMzMyXCIgK1xuICAgICAgICAgICAgaW5wdXQuc2xpY2UocG9zaXRpb24pO1xuXG4gICAgICAgIC8vIEV4dHJhY3Qgc29tZSBjb250ZXh0IGZyb20gdGhlIGlucHV0IGFuZCBhZGQgaXQgdG8gdGhlIGVycm9yXG4gICAgICAgIHZhciBiZWdpbiA9IE1hdGgubWF4KDAsIHBvc2l0aW9uIC0gMTUpO1xuICAgICAgICB2YXIgZW5kID0gcG9zaXRpb24gKyAxNTtcbiAgICAgICAgZXJyb3IgKz0gaW5wdXQuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgfVxuXG4gICAgLy8gU29tZSBoYWNrZXJ5IHRvIG1ha2UgUGFyc2VFcnJvciBhIHByb3RvdHlwZSBvZiBFcnJvclxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84NDYwNzUzXG4gICAgdmFyIHNlbGYgPSBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIHNlbGYubmFtZSA9IFwiUGFyc2VFcnJvclwiO1xuICAgIHNlbGYuX19wcm90b19fID0gUGFyc2VFcnJvci5wcm90b3R5cGU7XG5cbiAgICBzZWxmLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgcmV0dXJuIHNlbGY7XG59XG5cbi8vIE1vcmUgaGFja2VyeVxuUGFyc2VFcnJvci5wcm90b3R5cGUuX19wcm90b19fID0gRXJyb3IucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlRXJyb3I7XG4iLCJ2YXIgZnVuY3Rpb25zID0gcmVxdWlyZShcIi4vZnVuY3Rpb25zXCIpO1xudmFyIExleGVyID0gcmVxdWlyZShcIi4vTGV4ZXJcIik7XG52YXIgc3ltYm9scyA9IHJlcXVpcmUoXCIuL3N5bWJvbHNcIik7XG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIFBhcnNlRXJyb3IgPSByZXF1aXJlKFwiLi9QYXJzZUVycm9yXCIpO1xuXG4vKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgcGFyc2VyIHVzZWQgdG8gcGFyc2Ugb3V0IGEgVGVYIGV4cHJlc3Npb24gZnJvbSB0aGVcbiAqIGlucHV0LiBTaW5jZSBUZVggaXNuJ3QgY29udGV4dC1mcmVlLCBzdGFuZGFyZCBwYXJzZXJzIGRvbid0IHdvcmsgcGFydGljdWxhcmx5XG4gKiB3ZWxsLlxuICpcbiAqIFRoZSBzdHJhdGVneSBvZiB0aGlzIHBhcnNlciBpcyBhcyBzdWNoOlxuICpcbiAqIFRoZSBtYWluIGZ1bmN0aW9ucyAodGhlIGAucGFyc2UuLi5gIG9uZXMpIHRha2UgYSBwb3NpdGlvbiBpbiB0aGUgY3VycmVudFxuICogcGFyc2Ugc3RyaW5nIHRvIHBhcnNlIHRva2VucyBmcm9tLiBUaGUgbGV4ZXIgKGZvdW5kIGluIExleGVyLmpzLCBzdG9yZWQgYXRcbiAqIHRoaXMubGV4ZXIpIGFsc28gc3VwcG9ydHMgcHVsbGluZyBvdXQgdG9rZW5zIGF0IGFyYml0cmFyeSBwbGFjZXMuIFdoZW5cbiAqIGluZGl2aWR1YWwgdG9rZW5zIGFyZSBuZWVkZWQgYXQgYSBwb3NpdGlvbiwgdGhlIGxleGVyIGlzIGNhbGxlZCB0byBwdWxsIG91dCBhXG4gKiB0b2tlbiwgd2hpY2ggaXMgdGhlbiB1c2VkLlxuICpcbiAqIFRoZSBtYWluIGZ1bmN0aW9ucyBhbHNvIHRha2UgYSBtb2RlIHRoYXQgdGhlIHBhcnNlciBpcyBjdXJyZW50bHkgaW5cbiAqIChjdXJyZW50bHkgXCJtYXRoXCIgb3IgXCJ0ZXh0XCIpLCB3aGljaCBkZW5vdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnRcbiAqIGlzIGEgbWF0aC15IG9uZSBvciBhIHRleHQteSBvbmUgKGUuZy4gaW5zaWRlIFxcdGV4dCkuIEN1cnJlbnRseSwgdGhpcyBzZXJ2ZXNcbiAqIHRvIGxpbWl0IHRoZSBmdW5jdGlvbnMgd2hpY2ggY2FuIGJlIHVzZWQgaW4gdGV4dCBtb2RlLlxuICpcbiAqIFRoZSBtYWluIGZ1bmN0aW9ucyB0aGVuIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggY29udGFpbnMgdGhlIHVzZWZ1bCBkYXRhIHRoYXRcbiAqIHdhcyBwYXJzZWQgYXQgaXRzIGdpdmVuIHBvaW50LCBhbmQgYSBuZXcgcG9zaXRpb24gYXQgdGhlIGVuZCBvZiB0aGUgcGFyc2VkXG4gKiBkYXRhLiBUaGUgbWFpbiBmdW5jdGlvbnMgY2FuIGNhbGwgZWFjaCBvdGhlciBhbmQgY29udGludWUgdGhlIHBhcnNpbmcgYnlcbiAqIHVzaW5nIHRoZSByZXR1cm5lZCBwb3NpdGlvbiBhcyBhIG5ldyBzdGFydGluZyBwb2ludC5cbiAqXG4gKiBUaGVyZSBhcmUgYWxzbyBleHRyYSBgLmhhbmRsZS4uLmAgZnVuY3Rpb25zLCB3aGljaCBwdWxsIG91dCBzb21lIHJldXNlZFxuICogZnVuY3Rpb25hbGl0eSBpbnRvIHNlbGYtY29udGFpbmVkIGZ1bmN0aW9ucy5cbiAqXG4gKiBUaGUgZWFybGllciBmdW5jdGlvbnMgcmV0dXJuIGBQYXJzZVJlc3VsdGBzLCB3aGljaCBjb250YWluIGEgUGFyc2VOb2RlIGFuZCBhXG4gKiBuZXcgcG9zaXRpb24uXG4gKlxuICogVGhlIGxhdGVyIGZ1bmN0aW9ucyAod2hpY2ggYXJlIGNhbGxlZCBkZWVwZXIgaW4gdGhlIHBhcnNlKSBzb21ldGltZXMgcmV0dXJuXG4gKiBQYXJzZUZ1bmNPckFyZ3VtZW50LCB3aGljaCBjb250YWluIGEgUGFyc2VSZXN1bHQgYXMgd2VsbCBhcyBzb21lIGRhdGEgYWJvdXRcbiAqIHdoZXRoZXIgdGhlIHBhcnNlZCBvYmplY3QgaXMgYSBmdW5jdGlvbiB3aGljaCBpcyBtaXNzaW5nIHNvbWUgYXJndW1lbnRzLCBvciBhXG4gKiBzdGFuZGFsb25lIG9iamVjdCB3aGljaCBjYW4gYmUgdXNlZCBhcyBhbiBhcmd1bWVudCB0byBhbm90aGVyIGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogTWFpbiBQYXJzZXIgY2xhc3NcbiAqL1xuZnVuY3Rpb24gUGFyc2VyKGlucHV0LCBzZXR0aW5ncykge1xuICAgIC8vIE1ha2UgYSBuZXcgbGV4ZXJcbiAgICB0aGlzLmxleGVyID0gbmV3IExleGVyKGlucHV0KTtcbiAgICAvLyBTdG9yZSB0aGUgc2V0dGluZ3MgZm9yIHVzZSBpbiBwYXJzaW5nXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xufVxuXG4vKipcbiAqIFRoZSByZXN1bHRpbmcgcGFyc2UgdHJlZSBub2RlcyBvZiB0aGUgcGFyc2UgdHJlZS5cbiAqL1xuZnVuY3Rpb24gUGFyc2VOb2RlKHR5cGUsIHZhbHVlLCBtb2RlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbn1cblxuLyoqXG4gKiBBIHJlc3VsdCBhbmQgZmluYWwgcG9zaXRpb24gcmV0dXJuZWQgYnkgdGhlIGAucGFyc2UuLi5gIGZ1bmN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gUGFyc2VSZXN1bHQocmVzdWx0LCBuZXdQb3NpdGlvbikge1xuICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbn1cblxuLyoqXG4gKiBBbiBpbml0aWFsIGZ1bmN0aW9uICh3aXRob3V0IGl0cyBhcmd1bWVudHMpLCBvciBhbiBhcmd1bWVudCB0byBhIGZ1bmN0aW9uLlxuICogVGhlIGByZXN1bHRgIGFyZ3VtZW50IHNob3VsZCBiZSBhIFBhcnNlUmVzdWx0LlxuICovXG5mdW5jdGlvbiBQYXJzZUZ1bmNPckFyZ3VtZW50KHJlc3VsdCwgaXNGdW5jdGlvbikge1xuICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIC8vIElzIHRoaXMgYSBmdW5jdGlvbiAoaS5lLiBpcyBpdCBzb21ldGhpbmcgZGVmaW5lZCBpbiBmdW5jdGlvbnMuanMpP1xuICAgIHRoaXMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG59XG5cbi8qKlxuICogQ2hlY2tzIGEgcmVzdWx0IHRvIG1ha2Ugc3VyZSBpdCBoYXMgdGhlIHJpZ2h0IHR5cGUsIGFuZCB0aHJvd3MgYW5cbiAqIGFwcHJvcHJpYXRlIGVycm9yIG90aGVyd2lzZS5cbiAqL1xuUGFyc2VyLnByb3RvdHlwZS5leHBlY3QgPSBmdW5jdGlvbihyZXN1bHQsIHRleHQpIHtcbiAgICBpZiAocmVzdWx0LnRleHQgIT09IHRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkV4cGVjdGVkICdcIiArIHRleHQgKyBcIicsIGdvdCAnXCIgKyByZXN1bHQudGV4dCArIFwiJ1wiLFxuICAgICAgICAgICAgdGhpcy5sZXhlciwgcmVzdWx0LnBvc2l0aW9uXG4gICAgICAgICk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYWluIHBhcnNpbmcgZnVuY3Rpb24sIHdoaWNoIHBhcnNlcyBhbiBlbnRpcmUgaW5wdXQuXG4gKlxuICogQHJldHVybiB7P0FycmF5LjxQYXJzZU5vZGU+fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAvLyBUcnkgdG8gcGFyc2UgdGhlIGlucHV0XG4gICAgdmFyIHBhcnNlID0gdGhpcy5wYXJzZUlucHV0KDAsIFwibWF0aFwiKTtcbiAgICByZXR1cm4gcGFyc2UucmVzdWx0O1xufTtcblxuLyoqXG4gKiBQYXJzZXMgYW4gZW50aXJlIGlucHV0IHRyZWUuXG4gKi9cblBhcnNlci5wcm90b3R5cGUucGFyc2VJbnB1dCA9IGZ1bmN0aW9uKHBvcywgbW9kZSkge1xuICAgIC8vIFBhcnNlIGFuIGV4cHJlc3Npb25cbiAgICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMucGFyc2VFeHByZXNzaW9uKHBvcywgbW9kZSwgZmFsc2UsIG51bGwpO1xuICAgIC8vIElmIHdlIHN1Y2NlZWRlZCwgbWFrZSBzdXJlIHRoZXJlJ3MgYW4gRU9GIGF0IHRoZSBlbmRcbiAgICB2YXIgRU9GID0gdGhpcy5sZXhlci5sZXgoZXhwcmVzc2lvbi5wb3NpdGlvbiwgbW9kZSk7XG4gICAgdGhpcy5leHBlY3QoRU9GLCBcIkVPRlwiKTtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbn07XG5cbi8qKlxuICogUGFyc2VzIGFuIFwiZXhwcmVzc2lvblwiLCB3aGljaCBpcyBhIGxpc3Qgb2YgYXRvbXMuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBicmVha09uSW5maXggU2hvdWxkIHRoZSBwYXJzaW5nIHN0b3Agd2hlbiB3ZSBoaXQgaW5maXhcbiAqICAgICAgICAgICAgICAgICAgbm9kZXM/IFRoaXMgaGFwcGVucyB3aGVuIGZ1bmN0aW9ucyBoYXZlIGhpZ2hlciBwcmVjZW5kZW5jZVxuICogICAgICAgICAgICAgICAgICB0aGFuIGluZml4IG5vZGVzIGluIGltcGxpY2l0IHBhcnNlcy5cbiAqXG4gKiBAcGFyYW0gez9zdHJpbmd9IGJyZWFrT25Ub2tlbiBUaGUgdG9rZW4gdGhhdCB0aGUgZXhwcmVzc2lvbiBzaG91bGQgZW5kIHdpdGgsXG4gKiAgICAgICAgICAgICAgICAgIG9yIGBudWxsYCBpZiBzb21ldGhpbmcgZWxzZSBzaG91bGQgZW5kIHRoZSBleHByZXNzaW9uLlxuICpcbiAqIEByZXR1cm4ge1BhcnNlUmVzdWx0fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKHBvcywgbW9kZSwgYnJlYWtPbkluZml4LCBicmVha09uVG9rZW4pIHtcbiAgICB2YXIgYm9keSA9IFtdO1xuICAgIC8vIEtlZXAgYWRkaW5nIGF0b21zIHRvIHRoZSBib2R5IHVudGlsIHdlIGNhbid0IHBhcnNlIGFueSBtb3JlIGF0b21zIChlaXRoZXJcbiAgICAvLyB3ZSByZWFjaGVkIHRoZSBlbmQsIGEgfSwgb3IgYSBcXHJpZ2h0KVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBsZXggPSB0aGlzLmxleGVyLmxleChwb3MsIG1vZGUpO1xuICAgICAgICBpZiAoYnJlYWtPblRva2VuICE9IG51bGwgJiYgbGV4LnRleHQgPT09IGJyZWFrT25Ub2tlbikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0b20gPSB0aGlzLnBhcnNlQXRvbShwb3MsIG1vZGUpO1xuICAgICAgICBpZiAoIWF0b20pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChicmVha09uSW5maXggJiYgYXRvbS5yZXN1bHQudHlwZSA9PT0gXCJpbmZpeFwiKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBib2R5LnB1c2goYXRvbS5yZXN1bHQpO1xuICAgICAgICBwb3MgPSBhdG9tLnBvc2l0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBhcnNlUmVzdWx0KHRoaXMuaGFuZGxlSW5maXhOb2Rlcyhib2R5LCBtb2RlKSwgcG9zKTtcbn07XG5cbi8qKlxuICogUmV3cml0ZXMgaW5maXggb3BlcmF0b3JzIHN1Y2ggYXMgXFxvdmVyIHdpdGggY29ycmVzcG9uZGluZyBjb21tYW5kcyBzdWNoXG4gKiBhcyBcXGZyYWMuXG4gKlxuICogVGhlcmUgY2FuIG9ubHkgYmUgb25lIGluZml4IG9wZXJhdG9yIHBlciBncm91cC4gIElmIHRoZXJlJ3MgbW9yZSB0aGFuIG9uZVxuICogdGhlbiB0aGUgZXhwcmVzc2lvbiBpcyBhbWJpZ3VvdXMuICBUaGlzIGNhbiBiZSByZXNvbHZlZCBieSBhZGRpbmcge30uXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5QYXJzZXIucHJvdG90eXBlLmhhbmRsZUluZml4Tm9kZXMgPSBmdW5jdGlvbiAoYm9keSwgbW9kZSkge1xuICAgIHZhciBvdmVySW5kZXggPSAtMTtcbiAgICB2YXIgZnVuYztcbiAgICB2YXIgZnVuY05hbWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBib2R5W2ldO1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSBcImluZml4XCIpIHtcbiAgICAgICAgICAgIGlmIChvdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXCJvbmx5IG9uZSBpbmZpeCBvcGVyYXRvciBwZXIgZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXhlciwgLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3ZlckluZGV4ID0gaTtcbiAgICAgICAgICAgIGZ1bmNOYW1lID0gbm9kZS52YWx1ZS5yZXBsYWNlV2l0aDtcbiAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbnMuZnVuY3NbZnVuY05hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG92ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdmFyIG51bWVyTm9kZSwgZGVub21Ob2RlO1xuXG4gICAgICAgIHZhciBudW1lckJvZHkgPSBib2R5LnNsaWNlKDAsIG92ZXJJbmRleCk7XG4gICAgICAgIHZhciBkZW5vbUJvZHkgPSBib2R5LnNsaWNlKG92ZXJJbmRleCArIDEpO1xuXG4gICAgICAgIGlmIChudW1lckJvZHkubGVuZ3RoID09PSAxICYmIG51bWVyQm9keVswXS50eXBlID09PSBcIm9yZGdyb3VwXCIpIHtcbiAgICAgICAgICAgIG51bWVyTm9kZSA9IG51bWVyQm9keVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWVyTm9kZSA9IG5ldyBQYXJzZU5vZGUoXCJvcmRncm91cFwiLCBudW1lckJvZHksIG1vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlbm9tQm9keS5sZW5ndGggPT09IDEgJiYgZGVub21Cb2R5WzBdLnR5cGUgPT09IFwib3JkZ3JvdXBcIikge1xuICAgICAgICAgICAgZGVub21Ob2RlID0gZGVub21Cb2R5WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVub21Ob2RlID0gbmV3IFBhcnNlTm9kZShcIm9yZGdyb3VwXCIsIGRlbm9tQm9keSwgbW9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSBmdW5jLmhhbmRsZXIoZnVuY05hbWUsIG51bWVyTm9kZSwgZGVub21Ob2RlKTtcbiAgICAgICAgcmV0dXJuIFtuZXcgUGFyc2VOb2RlKHZhbHVlLnR5cGUsIHZhbHVlLCBtb2RlKV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfVxufTtcblxuLy8gVGhlIGdyZWVkaW5lc3Mgb2YgYSBzdXBlcnNjcmlwdCBvciBzdWJzY3JpcHRcbnZhciBTVVBTVUJfR1JFRURJTkVTUyA9IDE7XG5cbi8qKlxuICogSGFuZGxlIGEgc3Vic2NyaXB0IG9yIHN1cGVyc2NyaXB0IHdpdGggbmljZSBlcnJvcnMuXG4gKi9cblBhcnNlci5wcm90b3R5cGUuaGFuZGxlU3VwU3Vic2NyaXB0ID0gZnVuY3Rpb24ocG9zLCBtb2RlLCBzeW1ib2wsIG5hbWUpIHtcbiAgICB2YXIgZ3JvdXAgPSB0aGlzLnBhcnNlR3JvdXAocG9zLCBtb2RlKTtcblxuICAgIGlmICghZ3JvdXApIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkV4cGVjdGVkIGdyb3VwIGFmdGVyICdcIiArIHN5bWJvbCArIFwiJ1wiLCB0aGlzLmxleGVyLCBwb3MpO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAuaXNGdW5jdGlvbikge1xuICAgICAgICAvLyBeIGFuZCBfIGhhdmUgYSBncmVlZGluZXNzLCBzbyBoYW5kbGUgaW50ZXJhY3Rpb25zIHdpdGggZnVuY3Rpb25zJ1xuICAgICAgICAvLyBncmVlZGluZXNzXG4gICAgICAgIHZhciBmdW5jR3JlZWRpbmVzcyA9IGZ1bmN0aW9ucy5mdW5jc1tncm91cC5yZXN1bHQucmVzdWx0XS5ncmVlZGluZXNzO1xuICAgICAgICBpZiAoZnVuY0dyZWVkaW5lc3MgPiBTVVBTVUJfR1JFRURJTkVTUykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbihwb3MsIG1vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJHb3QgZnVuY3Rpb24gJ1wiICsgZ3JvdXAucmVzdWx0LnJlc3VsdCArIFwiJyB3aXRoIG5vIGFyZ3VtZW50cyBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiYXMgXCIgKyBuYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMubGV4ZXIsIHBvcyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ3JvdXAucmVzdWx0O1xuICAgIH1cbn07XG5cbi8qKlxuICogUGFyc2VzIGEgZ3JvdXAgd2l0aCBvcHRpb25hbCBzdXBlci9zdWJzY3JpcHRzLlxuICpcbiAqIEByZXR1cm4gez9QYXJzZVJlc3VsdH1cbiAqL1xuUGFyc2VyLnByb3RvdHlwZS5wYXJzZUF0b20gPSBmdW5jdGlvbihwb3MsIG1vZGUpIHtcbiAgICAvLyBUaGUgYm9keSBvZiBhbiBhdG9tIGlzIGFuIGltcGxpY2l0IGdyb3VwLCBzbyB0aGF0IHRoaW5ncyBsaWtlXG4gICAgLy8gXFxsZWZ0KHhcXHJpZ2h0KV4yIHdvcmsgY29ycmVjdGx5LlxuICAgIHZhciBiYXNlID0gdGhpcy5wYXJzZUltcGxpY2l0R3JvdXAocG9zLCBtb2RlKTtcblxuICAgIC8vIEluIHRleHQgbW9kZSwgd2UgZG9uJ3QgaGF2ZSBzdXBlcnNjcmlwdHMgb3Igc3Vic2NyaXB0c1xuICAgIGlmIChtb2RlID09PSBcInRleHRcIikge1xuICAgICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYW4gZW1wdHkgYmFzZVxuICAgIHZhciBjdXJyUG9zO1xuICAgIGlmICghYmFzZSkge1xuICAgICAgICBjdXJyUG9zID0gcG9zO1xuICAgICAgICBiYXNlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJQb3MgPSBiYXNlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHZhciBzdXBlcnNjcmlwdDtcbiAgICB2YXIgc3Vic2NyaXB0O1xuICAgIHZhciByZXN1bHQ7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgLy8gTGV4IHRoZSBmaXJzdCB0b2tlblxuICAgICAgICB2YXIgbGV4ID0gdGhpcy5sZXhlci5sZXgoY3VyclBvcywgbW9kZSk7XG5cbiAgICAgICAgaWYgKGxleC50ZXh0ID09PSBcIl5cIikge1xuICAgICAgICAgICAgLy8gV2UgZ290IGEgc3VwZXJzY3JpcHQgc3RhcnRcbiAgICAgICAgICAgIGlmIChzdXBlcnNjcmlwdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICBcIkRvdWJsZSBzdXBlcnNjcmlwdFwiLCB0aGlzLmxleGVyLCBjdXJyUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuaGFuZGxlU3VwU3Vic2NyaXB0KFxuICAgICAgICAgICAgICAgIGxleC5wb3NpdGlvbiwgbW9kZSwgbGV4LnRleHQsIFwic3VwZXJzY3JpcHRcIik7XG4gICAgICAgICAgICBjdXJyUG9zID0gcmVzdWx0LnBvc2l0aW9uO1xuICAgICAgICAgICAgc3VwZXJzY3JpcHQgPSByZXN1bHQucmVzdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKGxleC50ZXh0ID09PSBcIl9cIikge1xuICAgICAgICAgICAgLy8gV2UgZ290IGEgc3Vic2NyaXB0IHN0YXJ0XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIFwiRG91YmxlIHN1YnNjcmlwdFwiLCB0aGlzLmxleGVyLCBjdXJyUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuaGFuZGxlU3VwU3Vic2NyaXB0KFxuICAgICAgICAgICAgICAgIGxleC5wb3NpdGlvbiwgbW9kZSwgbGV4LnRleHQsIFwic3Vic2NyaXB0XCIpO1xuICAgICAgICAgICAgY3VyclBvcyA9IHJlc3VsdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHN1YnNjcmlwdCA9IHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAobGV4LnRleHQgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICAvLyBXZSBnb3QgYSBwcmltZVxuICAgICAgICAgICAgdmFyIHByaW1lID0gbmV3IFBhcnNlTm9kZShcInRleHRvcmRcIiwgXCJcXFxccHJpbWVcIiwgbW9kZSk7XG5cbiAgICAgICAgICAgIC8vIE1hbnkgcHJpbWVzIGNhbiBiZSBncm91cGVkIHRvZ2V0aGVyLCBzbyB3ZSBoYW5kbGUgdGhpcyBoZXJlXG4gICAgICAgICAgICB2YXIgcHJpbWVzID0gW3ByaW1lXTtcbiAgICAgICAgICAgIGN1cnJQb3MgPSBsZXgucG9zaXRpb247XG4gICAgICAgICAgICAvLyBLZWVwIGxleGluZyB0b2tlbnMgdW50aWwgd2UgZ2V0IHNvbWV0aGluZyB0aGF0J3Mgbm90IGEgcHJpbWVcbiAgICAgICAgICAgIHdoaWxlICgobGV4ID0gdGhpcy5sZXhlci5sZXgoY3VyclBvcywgbW9kZSkpLnRleHQgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggb25lLCBhZGQgYW5vdGhlciBwcmltZSB0byB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIHByaW1lcy5wdXNoKHByaW1lKTtcbiAgICAgICAgICAgICAgICBjdXJyUG9zID0gbGV4LnBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHV0IHRoZW0gaW50byBhbiBvcmRncm91cCBhcyB0aGUgc3VwZXJzY3JpcHRcbiAgICAgICAgICAgIHN1cGVyc2NyaXB0ID0gbmV3IFBhcnNlTm9kZShcIm9yZGdyb3VwXCIsIHByaW1lcywgbW9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBpdCB3YXNuJ3QgXiwgXywgb3IgJywgc3RvcCBwYXJzaW5nIHN1cGVyL3N1YnNjcmlwdHNcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyc2NyaXB0IHx8IHN1YnNjcmlwdCkge1xuICAgICAgICAvLyBJZiB3ZSBnb3QgZWl0aGVyIGEgc3VwZXJzY3JpcHQgb3Igc3Vic2NyaXB0LCBjcmVhdGUgYSBzdXBzdWJcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZVJlc3VsdChcbiAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUoXCJzdXBzdWJcIiwge1xuICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UgJiYgYmFzZS5yZXN1bHQsXG4gICAgICAgICAgICAgICAgc3VwOiBzdXBlcnNjcmlwdCxcbiAgICAgICAgICAgICAgICBzdWI6IHN1YnNjcmlwdFxuICAgICAgICAgICAgfSwgbW9kZSksXG4gICAgICAgICAgICBjdXJyUG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBvcmlnaW5hbCBib2R5XG4gICAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbn07XG5cbi8vIEEgbGlzdCBvZiB0aGUgc2l6ZS1jaGFuZ2luZyBmdW5jdGlvbnMsIGZvciB1c2UgaW4gcGFyc2VJbXBsaWNpdEdyb3VwXG52YXIgc2l6ZUZ1bmNzID0gW1xuICAgIFwiXFxcXHRpbnlcIiwgXCJcXFxcc2NyaXB0c2l6ZVwiLCBcIlxcXFxmb290bm90ZXNpemVcIiwgXCJcXFxcc21hbGxcIiwgXCJcXFxcbm9ybWFsc2l6ZVwiLFxuICAgIFwiXFxcXGxhcmdlXCIsIFwiXFxcXExhcmdlXCIsIFwiXFxcXExBUkdFXCIsIFwiXFxcXGh1Z2VcIiwgXCJcXFxcSHVnZVwiXG5dO1xuXG4vLyBBIGxpc3Qgb2YgdGhlIHN0eWxlLWNoYW5naW5nIGZ1bmN0aW9ucywgZm9yIHVzZSBpbiBwYXJzZUltcGxpY2l0R3JvdXBcbnZhciBzdHlsZUZ1bmNzID0gW1xuICAgIFwiXFxcXGRpc3BsYXlzdHlsZVwiLCBcIlxcXFx0ZXh0c3R5bGVcIiwgXCJcXFxcc2NyaXB0c3R5bGVcIiwgXCJcXFxcc2NyaXB0c2NyaXB0c3R5bGVcIlxuXTtcblxuLyoqXG4gKiBQYXJzZXMgYW4gaW1wbGljaXQgZ3JvdXAsIHdoaWNoIGlzIGEgZ3JvdXAgdGhhdCBzdGFydHMgYXQgdGhlIGVuZCBvZiBhXG4gKiBzcGVjaWZpZWQsIGFuZCBlbmRzIHJpZ2h0IGJlZm9yZSBhIGhpZ2hlciBleHBsaWNpdCBncm91cCBlbmRzLCBvciBhdCBFT0wuIEl0XG4gKiBpcyB1c2VkIGZvciBmdW5jdGlvbnMgdGhhdCBhcHBlYXIgdG8gYWZmZWN0IHRoZSBjdXJyZW50IHN0eWxlLCBsaWtlIFxcTGFyZ2Ugb3JcbiAqIFxcdGV4dHJtLCB3aGVyZSBpbnN0ZWFkIG9mIGtlZXBpbmcgYSBzdHlsZSB3ZSBqdXN0IHByZXRlbmQgdGhhdCB0aGVyZSBpcyBhblxuICogaW1wbGljaXQgZ3JvdXBpbmcgYWZ0ZXIgaXQgdW50aWwgdGhlIGVuZCBvZiB0aGUgZ3JvdXAuIEUuZy5cbiAqICAgc21hbGwgdGV4dCB7XFxMYXJnZSBsYXJnZSB0ZXh0fSBzbWFsbCB0ZXh0IGFnYWluXG4gKiBJdCBpcyBhbHNvIHVzZWQgZm9yIFxcbGVmdCBhbmQgXFxyaWdodCB0byBnZXQgdGhlIGNvcnJlY3QgZ3JvdXBpbmcuXG4gKlxuICogQHJldHVybiB7P1BhcnNlUmVzdWx0fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlSW1wbGljaXRHcm91cCA9IGZ1bmN0aW9uKHBvcywgbW9kZSkge1xuICAgIHZhciBzdGFydCA9IHRoaXMucGFyc2VTeW1ib2wocG9zLCBtb2RlKTtcblxuICAgIGlmICghc3RhcnQgfHwgIXN0YXJ0LnJlc3VsdCkge1xuICAgICAgICAvLyBJZiB3ZSBkaWRuJ3QgZ2V0IGFueXRoaW5nIHdlIGhhbmRsZSwgZmFsbCBiYWNrIHRvIHBhcnNlRnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbihwb3MsIG1vZGUpO1xuICAgIH1cblxuICAgIHZhciBmdW5jID0gc3RhcnQucmVzdWx0LnJlc3VsdDtcbiAgICB2YXIgYm9keTtcblxuICAgIGlmIChmdW5jID09PSBcIlxcXFxsZWZ0XCIpIHtcbiAgICAgICAgLy8gSWYgd2Ugc2VlIGEgbGVmdDpcbiAgICAgICAgLy8gUGFyc2UgdGhlIGVudGlyZSBsZWZ0IGZ1bmN0aW9uIChpbmNsdWRpbmcgdGhlIGRlbGltaXRlcilcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnBhcnNlRnVuY3Rpb24ocG9zLCBtb2RlKTtcbiAgICAgICAgLy8gUGFyc2Ugb3V0IHRoZSBpbXBsaWNpdCBib2R5XG4gICAgICAgIGJvZHkgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbihsZWZ0LnBvc2l0aW9uLCBtb2RlLCBmYWxzZSwgXCJ9XCIpO1xuICAgICAgICAvLyBDaGVjayB0aGUgbmV4dCB0b2tlblxuICAgICAgICB2YXIgcmlnaHRMZXggPSB0aGlzLnBhcnNlU3ltYm9sKGJvZHkucG9zaXRpb24sIG1vZGUpO1xuXG4gICAgICAgIGlmIChyaWdodExleCAmJiByaWdodExleC5yZXN1bHQucmVzdWx0ID09PSBcIlxcXFxyaWdodFwiKSB7XG4gICAgICAgICAgICAvLyBJZiBpdCdzIGEgXFxyaWdodCwgcGFyc2UgdGhlIGVudGlyZSByaWdodCBmdW5jdGlvbiAoaW5jbHVkaW5nIHRoZSBkZWxpbWl0ZXIpXG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLnBhcnNlRnVuY3Rpb24oYm9keS5wb3NpdGlvbiwgbW9kZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICAgICAgbmV3IFBhcnNlTm9kZShcImxlZnRyaWdodFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHkucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LnJlc3VsdC52YWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LnJlc3VsdC52YWx1ZS52YWx1ZVxuICAgICAgICAgICAgICAgIH0sIG1vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0LnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFwiTWlzc2luZyBcXFxccmlnaHRcIiwgdGhpcy5sZXhlciwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZ1bmMgPT09IFwiXFxcXHJpZ2h0XCIpIHtcbiAgICAgICAgLy8gSWYgd2Ugc2VlIGEgcmlnaHQsIGV4cGxpY2l0bHkgZmFpbCB0aGUgcGFyc2luZyBoZXJlIHNvIHRoZSBcXGxlZnRcbiAgICAgICAgLy8gaGFuZGxpbmcgZW5kcyB0aGUgZ3JvdXBcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmICh1dGlscy5jb250YWlucyhzaXplRnVuY3MsIGZ1bmMpKSB7XG4gICAgICAgIC8vIElmIHdlIHNlZSBhIHNpemluZyBmdW5jdGlvbiwgcGFyc2Ugb3V0IHRoZSBpbXBsaWN0IGJvZHlcbiAgICAgICAgYm9keSA9IHRoaXMucGFyc2VFeHByZXNzaW9uKHN0YXJ0LnJlc3VsdC5wb3NpdGlvbiwgbW9kZSwgZmFsc2UsIFwifVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZVJlc3VsdChcbiAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUoXCJzaXppbmdcIiwge1xuICAgICAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hhdCBzaXplIHRvIHVzZSBiYXNlZCBvbiB0aGUgbGlzdCBvZiBmdW5jdGlvbnMgYWJvdmVcbiAgICAgICAgICAgICAgICBzaXplOiBcInNpemVcIiArICh1dGlscy5pbmRleE9mKHNpemVGdW5jcywgZnVuYykgKyAxKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYm9keS5yZXN1bHRcbiAgICAgICAgICAgIH0sIG1vZGUpLFxuICAgICAgICAgICAgYm9keS5wb3NpdGlvbik7XG4gICAgfSBlbHNlIGlmICh1dGlscy5jb250YWlucyhzdHlsZUZ1bmNzLCBmdW5jKSkge1xuICAgICAgICAvLyBJZiB3ZSBzZWUgYSBzdHlsaW5nIGZ1bmN0aW9uLCBwYXJzZSBvdXQgdGhlIGltcGxpY3QgYm9keVxuICAgICAgICBib2R5ID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oc3RhcnQucmVzdWx0LnBvc2l0aW9uLCBtb2RlLCB0cnVlLCBcIn1cIik7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICBuZXcgUGFyc2VOb2RlKFwic3R5bGluZ1wiLCB7XG4gICAgICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGF0IHN0eWxlIHRvIHVzZSBieSBwdWxsaW5nIG91dCB0aGUgc3R5bGUgZnJvbVxuICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBuYW1lXG4gICAgICAgICAgICAgICAgc3R5bGU6IGZ1bmMuc2xpY2UoMSwgZnVuYy5sZW5ndGggLSA1KSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYm9keS5yZXN1bHRcbiAgICAgICAgICAgIH0sIG1vZGUpLFxuICAgICAgICAgICAgYm9keS5wb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVmZXIgdG8gcGFyc2VGdW5jdGlvbiBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uIHdlIGhhbmRsZVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKHBvcywgbW9kZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBQYXJzZXMgYW4gZW50aXJlIGZ1bmN0aW9uLCBpbmNsdWRpbmcgaXRzIGJhc2UgYW5kIGFsbCBvZiBpdHMgYXJndW1lbnRzXG4gKlxuICogQHJldHVybiB7P1BhcnNlUmVzdWx0fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlRnVuY3Rpb24gPSBmdW5jdGlvbihwb3MsIG1vZGUpIHtcbiAgICB2YXIgYmFzZUdyb3VwID0gdGhpcy5wYXJzZUdyb3VwKHBvcywgbW9kZSk7XG5cbiAgICBpZiAoYmFzZUdyb3VwKSB7XG4gICAgICAgIGlmIChiYXNlR3JvdXAuaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGZ1bmMgPSBiYXNlR3JvdXAucmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgIHZhciBmdW5jRGF0YSA9IGZ1bmN0aW9ucy5mdW5jc1tmdW5jXTtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcInRleHRcIiAmJiAhZnVuY0RhdGEuYWxsb3dlZEluVGV4dCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICBcIkNhbid0IHVzZSBmdW5jdGlvbiAnXCIgKyBmdW5jICsgXCInIGluIHRleHQgbW9kZVwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleGVyLCBiYXNlR3JvdXAucG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbmV3UG9zID0gYmFzZUdyb3VwLnJlc3VsdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgICAgIHZhciB0b3RhbEFyZ3MgPSBmdW5jRGF0YS5udW1BcmdzICsgZnVuY0RhdGEubnVtT3B0aW9uYWxBcmdzO1xuXG4gICAgICAgICAgICBpZiAodG90YWxBcmdzID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlR3JlZWRpbmVzcyA9IGZ1bmNEYXRhLmdyZWVkaW5lc3M7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbZnVuY107XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9ucyA9IFtuZXdQb3NdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbEFyZ3M7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnVHlwZSA9IGZ1bmNEYXRhLmFyZ1R5cGVzICYmIGZ1bmNEYXRhLmFyZ1R5cGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGZ1bmNEYXRhLm51bU9wdGlvbmFsQXJncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSB0aGlzLnBhcnNlU3BlY2lhbEdyb3VwKG5ld1BvcywgYXJnVHlwZSwgbW9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHRoaXMucGFyc2VPcHRpb25hbEdyb3VwKG5ld1BvcywgbW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChuZXdQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSB0aGlzLnBhcnNlU3BlY2lhbEdyb3VwKG5ld1BvcywgYXJnVHlwZSwgbW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHRoaXMucGFyc2VHcm91cChuZXdQb3MsIG1vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFeHBlY3RlZCBncm91cCBhZnRlciAnXCIgKyBiYXNlR3JvdXAucmVzdWx0LnJlc3VsdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIidcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXhlciwgbmV3UG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZy5pc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJnR3JlZWRpbmVzcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLmZ1bmNzW2FyZy5yZXN1bHQucmVzdWx0XS5ncmVlZGluZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ0dyZWVkaW5lc3MgPiBiYXNlR3JlZWRpbmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ05vZGUgPSB0aGlzLnBhcnNlRnVuY3Rpb24obmV3UG9zLCBtb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR290IGZ1bmN0aW9uICdcIiArIGFyZy5yZXN1bHQucmVzdWx0ICsgXCInIGFzIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJndW1lbnQgdG8gZnVuY3Rpb24gJ1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VHcm91cC5yZXN1bHQucmVzdWx0ICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV4ZXIsIGFyZy5yZXN1bHQucG9zaXRpb24gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ05vZGUgPSBhcmcucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmdOb2RlLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKGFyZ05vZGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPSBhcmdOb2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChwb3NpdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZnVuY3Rpb25zLmZ1bmNzW2Z1bmNdLmhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZ1bmN0aW9ucy5mdW5jc1tmdW5jXS5oYW5kbGVyLmFwcGx5KHRoaXMsIFtmdW5jXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICAgICAgbmV3IFBhcnNlTm9kZShyZXN1bHQudHlwZSwgcmVzdWx0LCBtb2RlKSxcbiAgICAgICAgICAgICAgICBuZXdQb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGJhc2VHcm91cC5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhIGdyb3VwIHdoZW4gdGhlIG1vZGUgaXMgY2hhbmdpbmcuIFRha2VzIGEgcG9zaXRpb24sIGEgbmV3IG1vZGUsIGFuZFxuICogYW4gb3V0ZXIgbW9kZSB0aGF0IGlzIHVzZWQgdG8gcGFyc2UgdGhlIG91dHNpZGUuXG4gKlxuICogQHJldHVybiB7P1BhcnNlRnVuY09yQXJndW1lbnR9XG4gKi9cblBhcnNlci5wcm90b3R5cGUucGFyc2VTcGVjaWFsR3JvdXAgPSBmdW5jdGlvbihwb3MsIG1vZGUsIG91dGVyTW9kZSwgb3B0aW9uYWwpIHtcbiAgICAvLyBIYW5kbGUgYG9yaWdpbmFsYCBhcmdUeXBlc1xuICAgIGlmIChtb2RlID09PSBcIm9yaWdpbmFsXCIpIHtcbiAgICAgICAgbW9kZSA9IG91dGVyTW9kZTtcbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gXCJjb2xvclwiIHx8IG1vZGUgPT09IFwic2l6ZVwiKSB7XG4gICAgICAgIC8vIGNvbG9yIGFuZCBzaXplIG1vZGVzIGFyZSBzcGVjaWFsIGJlY2F1c2UgdGhleSBzaG91bGQgaGF2ZSBicmFjZXMgYW5kXG4gICAgICAgIC8vIHNob3VsZCBvbmx5IGxleCBhIHNpbmdsZSBzeW1ib2wgaW5zaWRlXG4gICAgICAgIHZhciBvcGVuQnJhY2UgPSB0aGlzLmxleGVyLmxleChwb3MsIG91dGVyTW9kZSk7XG4gICAgICAgIGlmIChvcHRpb25hbCAmJiBvcGVuQnJhY2UudGV4dCAhPT0gXCJbXCIpIHtcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIGFyZ3VtZW50cyBzaG91bGQgcmV0dXJuIG51bGwgaWYgdGhleSBkb24ndCBleGlzdFxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leHBlY3Qob3BlbkJyYWNlLCBvcHRpb25hbCA/IFwiW1wiIDogXCJ7XCIpO1xuICAgICAgICB2YXIgaW5uZXIgPSB0aGlzLmxleGVyLmxleChvcGVuQnJhY2UucG9zaXRpb24sIG1vZGUpO1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgaWYgKG1vZGUgPT09IFwiY29sb3JcIikge1xuICAgICAgICAgICAgZGF0YSA9IGlubmVyLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gaW5uZXIuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xvc2VCcmFjZSA9IHRoaXMubGV4ZXIubGV4KGlubmVyLnBvc2l0aW9uLCBvdXRlck1vZGUpO1xuICAgICAgICB0aGlzLmV4cGVjdChjbG9zZUJyYWNlLCBvcHRpb25hbCA/IFwiXVwiIDogXCJ9XCIpO1xuICAgICAgICByZXR1cm4gbmV3IFBhcnNlRnVuY09yQXJndW1lbnQoXG4gICAgICAgICAgICBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICAgICAgbmV3IFBhcnNlTm9kZShtb2RlLCBkYXRhLCBvdXRlck1vZGUpLFxuICAgICAgICAgICAgICAgIGNsb3NlQnJhY2UucG9zaXRpb24pLFxuICAgICAgICAgICAgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgLy8gdGV4dCBtb2RlIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBzaG91bGQgaWdub3JlIHRoZSB3aGl0ZXNwYWNlIGJlZm9yZVxuICAgICAgICAvLyBpdFxuICAgICAgICB2YXIgd2hpdGVzcGFjZSA9IHRoaXMubGV4ZXIubGV4KHBvcywgXCJ3aGl0ZXNwYWNlXCIpO1xuICAgICAgICBwb3MgPSB3aGl0ZXNwYWNlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9wdGlvbmFsR3JvdXAocG9zLCBtb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUdyb3VwKHBvcywgbW9kZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBncm91cCwgd2hpY2ggaXMgZWl0aGVyIGEgc2luZ2xlIG51Y2xldXMgKGxpa2UgXCJ4XCIpIG9yIGFuIGV4cHJlc3Npb25cbiAqIGluIGJyYWNlcyAobGlrZSBcInt4K3l9XCIpXG4gKlxuICogQHJldHVybiB7P1BhcnNlRnVuY09yQXJndW1lbnR9XG4gKi9cblBhcnNlci5wcm90b3R5cGUucGFyc2VHcm91cCA9IGZ1bmN0aW9uKHBvcywgbW9kZSkge1xuICAgIHZhciBzdGFydCA9IHRoaXMubGV4ZXIubGV4KHBvcywgbW9kZSk7XG4gICAgLy8gVHJ5IHRvIHBhcnNlIGFuIG9wZW4gYnJhY2VcbiAgICBpZiAoc3RhcnQudGV4dCA9PT0gXCJ7XCIpIHtcbiAgICAgICAgLy8gSWYgd2UgZ2V0IGEgYnJhY2UsIHBhcnNlIGFuIGV4cHJlc3Npb25cbiAgICAgICAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLnBhcnNlRXhwcmVzc2lvbihzdGFydC5wb3NpdGlvbiwgbW9kZSwgZmFsc2UsIFwifVwiKTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGdldCBhIGNsb3NlIGJyYWNlXG4gICAgICAgIHZhciBjbG9zZUJyYWNlID0gdGhpcy5sZXhlci5sZXgoZXhwcmVzc2lvbi5wb3NpdGlvbiwgbW9kZSk7XG4gICAgICAgIHRoaXMuZXhwZWN0KGNsb3NlQnJhY2UsIFwifVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZUZ1bmNPckFyZ3VtZW50KFxuICAgICAgICAgICAgbmV3IFBhcnNlUmVzdWx0KFxuICAgICAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUoXCJvcmRncm91cFwiLCBleHByZXNzaW9uLnJlc3VsdCwgbW9kZSksXG4gICAgICAgICAgICAgICAgY2xvc2VCcmFjZS5wb3NpdGlvbiksXG4gICAgICAgICAgICBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJldHVybiBhIG51Y2xldXNcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTeW1ib2wocG9zLCBtb2RlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhIGdyb3VwLCB3aGljaCBpcyBhbiBleHByZXNzaW9uIGluIGJyYWNrZXRzIChsaWtlIFwiW3greV1cIilcbiAqXG4gKiBAcmV0dXJuIHs/UGFyc2VGdW5jT3JBcmd1bWVudH1cbiAqL1xuUGFyc2VyLnByb3RvdHlwZS5wYXJzZU9wdGlvbmFsR3JvdXAgPSBmdW5jdGlvbihwb3MsIG1vZGUpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmxleGVyLmxleChwb3MsIG1vZGUpO1xuICAgIC8vIFRyeSB0byBwYXJzZSBhbiBvcGVuIGJyYWNrZXRcbiAgICBpZiAoc3RhcnQudGV4dCA9PT0gXCJbXCIpIHtcbiAgICAgICAgLy8gSWYgd2UgZ2V0IGEgYnJhY2UsIHBhcnNlIGFuIGV4cHJlc3Npb25cbiAgICAgICAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLnBhcnNlRXhwcmVzc2lvbihzdGFydC5wb3NpdGlvbiwgbW9kZSwgZmFsc2UsIFwiXVwiKTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGdldCBhIGNsb3NlIGJyYWNrZXRcbiAgICAgICAgdmFyIGNsb3NlQnJhY2tldCA9IHRoaXMubGV4ZXIubGV4KGV4cHJlc3Npb24ucG9zaXRpb24sIG1vZGUpO1xuICAgICAgICB0aGlzLmV4cGVjdChjbG9zZUJyYWNrZXQsIFwiXVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZUZ1bmNPckFyZ3VtZW50KFxuICAgICAgICAgICAgbmV3IFBhcnNlUmVzdWx0KFxuICAgICAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUoXCJvcmRncm91cFwiLCBleHByZXNzaW9uLnJlc3VsdCwgbW9kZSksXG4gICAgICAgICAgICAgICAgY2xvc2VCcmFja2V0LnBvc2l0aW9uKSxcbiAgICAgICAgICAgIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBudWxsLFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgc2luZ2xlIHN5bWJvbCBvdXQgb2YgdGhlIHN0cmluZy4gSGVyZSwgd2UgaGFuZGxlIGJvdGggdGhlIGZ1bmN0aW9uc1xuICogd2UgaGF2ZSBkZWZpbmVkLCBhcyB3ZWxsIGFzIHRoZSBzaW5nbGUgY2hhcmFjdGVyIHN5bWJvbHNcbiAqXG4gKiBAcmV0dXJuIHs/UGFyc2VGdW5jT3JBcmd1bWVudH1cbiAqL1xuUGFyc2VyLnByb3RvdHlwZS5wYXJzZVN5bWJvbCA9IGZ1bmN0aW9uKHBvcywgbW9kZSkge1xuICAgIHZhciBudWNsZXVzID0gdGhpcy5sZXhlci5sZXgocG9zLCBtb2RlKTtcblxuICAgIGlmIChmdW5jdGlvbnMuZnVuY3NbbnVjbGV1cy50ZXh0XSkge1xuICAgICAgICAvLyBJZiB0aGVyZSBleGlzdHMgYSBmdW5jdGlvbiB3aXRoIHRoaXMgbmFtZSwgd2UgcmV0dXJuIHRoZSBmdW5jdGlvbiBhbmRcbiAgICAgICAgLy8gc2F5IHRoYXQgaXQgaXMgYSBmdW5jdGlvbi5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZUZ1bmNPckFyZ3VtZW50KFxuICAgICAgICAgICAgbmV3IFBhcnNlUmVzdWx0KG51Y2xldXMudGV4dCwgbnVjbGV1cy5wb3NpdGlvbiksXG4gICAgICAgICAgICB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHN5bWJvbHNbbW9kZV1bbnVjbGV1cy50ZXh0XSkge1xuICAgICAgICAvLyBPdGhlcndpc2UgaWYgdGhpcyBpcyBhIG5vLWFyZ3VtZW50IGZ1bmN0aW9uLCBmaW5kIHRoZSB0eXBlIGl0XG4gICAgICAgIC8vIGNvcnJlc3BvbmRzIHRvIGluIHRoZSBzeW1ib2xzIG1hcFxuICAgICAgICByZXR1cm4gbmV3IFBhcnNlRnVuY09yQXJndW1lbnQoXG4gICAgICAgICAgICBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICAgICAgbmV3IFBhcnNlTm9kZShzeW1ib2xzW21vZGVdW251Y2xldXMudGV4dF0uZ3JvdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWNsZXVzLnRleHQsIG1vZGUpLFxuICAgICAgICAgICAgICAgIG51Y2xldXMucG9zaXRpb24pLFxuICAgICAgICAgICAgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuIiwiLyoqXG4gKiBUaGlzIGlzIGEgbW9kdWxlIGZvciBzdG9yaW5nIHNldHRpbmdzIHBhc3NlZCBpbnRvIEthVGVYLiBJdCBjb3JyZWN0bHkgaGFuZGxlc1xuICogZGVmYXVsdCBzZXR0aW5ncy5cbiAqL1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZ2V0dGluZyBhIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBnZXQob3B0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gb3B0aW9uID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiBvcHRpb247XG59XG5cbi8qKlxuICogVGhlIG1haW4gU2V0dGluZ3Mgb2JqZWN0XG4gKlxuICogVGhlIGN1cnJlbnQgb3B0aW9ucyBzdG9yZWQgYXJlOlxuICogIC0gZGlzcGxheU1vZGU6IFdoZXRoZXIgdGhlIGV4cHJlc3Npb24gc2hvdWxkIGJlIHR5cGVzZXQgYnkgZGVmYXVsdCBpblxuICogICAgICAgICAgICAgICAgIHRleHRzdHlsZSBvciBkaXNwbGF5c3R5bGUgKGRlZmF1bHQgZmFsc2UpXG4gKi9cbmZ1bmN0aW9uIFNldHRpbmdzKG9wdGlvbnMpIHtcbiAgICAvLyBhbGxvdyBudWxsIG9wdGlvbnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmRpc3BsYXlNb2RlID0gZ2V0KG9wdGlvbnMuZGlzcGxheU1vZGUsIGZhbHNlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5ncztcbiIsIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGluZm9ybWF0aW9uIGFuZCBjbGFzc2VzIGZvciB0aGUgdmFyaW91cyBraW5kcyBvZiBzdHlsZXNcbiAqIHVzZWQgaW4gVGVYLiBJdCBwcm92aWRlcyBhIGdlbmVyaWMgYFN0eWxlYCBjbGFzcywgd2hpY2ggaG9sZHMgaW5mb3JtYXRpb25cbiAqIGFib3V0IGEgc3BlY2lmaWMgc3R5bGUuIEl0IHRoZW4gcHJvdmlkZXMgaW5zdGFuY2VzIG9mIGFsbCB0aGUgZGlmZmVyZW50IGtpbmRzXG4gKiBvZiBzdHlsZXMgcG9zc2libGUsIGFuZCBwcm92aWRlcyBmdW5jdGlvbnMgdG8gbW92ZSBiZXR3ZWVuIHRoZW0gYW5kIGdldFxuICogaW5mb3JtYXRpb24gYWJvdXQgdGhlbS5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYWluIHN0eWxlIGNsYXNzLiBDb250YWlucyBhIHVuaXF1ZSBpZCBmb3IgdGhlIHN0eWxlLCBhIHNpemUgKHdoaWNoIGlzXG4gKiB0aGUgc2FtZSBmb3IgY3JhbXBlZCBhbmQgdW5jcmFtcGVkIHZlcnNpb24gb2YgYSBzdHlsZSksIGEgY3JhbXBlZCBmbGFnLCBhbmQgYVxuICogc2l6ZSBtdWx0aXBsaWVyLCB3aGljaCBnaXZlcyB0aGUgc2l6ZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBzdHlsZSBhbmRcbiAqIHRleHRzdHlsZS5cbiAqL1xuZnVuY3Rpb24gU3R5bGUoaWQsIHNpemUsIG11bHRpcGxpZXIsIGNyYW1wZWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmNyYW1wZWQgPSBjcmFtcGVkO1xuICAgIHRoaXMuc2l6ZU11bHRpcGxpZXIgPSBtdWx0aXBsaWVyO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc3R5bGUgb2YgYSBzdXBlcnNjcmlwdCBnaXZlbiBhIGJhc2UgaW4gdGhlIGN1cnJlbnQgc3R5bGUuXG4gKi9cblN0eWxlLnByb3RvdHlwZS5zdXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc3R5bGVzW3N1cFt0aGlzLmlkXV07XG59O1xuXG4vKipcbiAqIEdldCB0aGUgc3R5bGUgb2YgYSBzdWJzY3JpcHQgZ2l2ZW4gYSBiYXNlIGluIHRoZSBjdXJyZW50IHN0eWxlLlxuICovXG5TdHlsZS5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN0eWxlc1tzdWJbdGhpcy5pZF1dO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHN0eWxlIG9mIGEgZnJhY3Rpb24gbnVtZXJhdG9yIGdpdmVuIHRoZSBmcmFjdGlvbiBpbiB0aGUgY3VycmVudFxuICogc3R5bGUuXG4gKi9cblN0eWxlLnByb3RvdHlwZS5mcmFjTnVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN0eWxlc1tmcmFjTnVtW3RoaXMuaWRdXTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzdHlsZSBvZiBhIGZyYWN0aW9uIGRlbm9taW5hdG9yIGdpdmVuIHRoZSBmcmFjdGlvbiBpbiB0aGUgY3VycmVudFxuICogc3R5bGUuXG4gKi9cblN0eWxlLnByb3RvdHlwZS5mcmFjRGVuID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN0eWxlc1tmcmFjRGVuW3RoaXMuaWRdXTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjcmFtcGVkIHZlcnNpb24gb2YgYSBzdHlsZSAoaW4gcGFydGljdWxhciwgY3JhbXBpbmcgYSBjcmFtcGVkIHN0eWxlXG4gKiBkb2Vzbid0IGNoYW5nZSB0aGUgc3R5bGUpLlxuICovXG5TdHlsZS5wcm90b3R5cGUuY3JhbXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc3R5bGVzW2NyYW1wW3RoaXMuaWRdXTtcbn07XG5cbi8qKlxuICogSFRNTCBjbGFzcyBuYW1lLCBsaWtlIFwiZGlzcGxheXN0eWxlIGNyYW1wZWRcIlxuICovXG5TdHlsZS5wcm90b3R5cGUuY2xzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNpemVOYW1lc1t0aGlzLnNpemVdICsgKHRoaXMuY3JhbXBlZCA/IFwiIGNyYW1wZWRcIiA6IFwiIHVuY3JhbXBlZFwiKTtcbn07XG5cbi8qKlxuICogSFRNTCBSZXNldCBjbGFzcyBuYW1lLCBsaWtlIFwicmVzZXQtdGV4dHN0eWxlXCJcbiAqL1xuU3R5bGUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHJlc2V0TmFtZXNbdGhpcy5zaXplXTtcbn07XG5cbi8vIElEcyBvZiB0aGUgZGlmZmVyZW50IHN0eWxlc1xudmFyIEQgPSAwO1xudmFyIERjID0gMTtcbnZhciBUID0gMjtcbnZhciBUYyA9IDM7XG52YXIgUyA9IDQ7XG52YXIgU2MgPSA1O1xudmFyIFNTID0gNjtcbnZhciBTU2MgPSA3O1xuXG4vLyBTdHJpbmcgbmFtZXMgZm9yIHRoZSBkaWZmZXJlbnQgc2l6ZXNcbnZhciBzaXplTmFtZXMgPSBbXG4gICAgXCJkaXNwbGF5c3R5bGUgdGV4dHN0eWxlXCIsXG4gICAgXCJ0ZXh0c3R5bGVcIixcbiAgICBcInNjcmlwdHN0eWxlXCIsXG4gICAgXCJzY3JpcHRzY3JpcHRzdHlsZVwiXG5dO1xuXG4vLyBSZXNldCBuYW1lcyBmb3IgdGhlIGRpZmZlcmVudCBzaXplc1xudmFyIHJlc2V0TmFtZXMgPSBbXG4gICAgXCJyZXNldC10ZXh0c3R5bGVcIixcbiAgICBcInJlc2V0LXRleHRzdHlsZVwiLFxuICAgIFwicmVzZXQtc2NyaXB0c3R5bGVcIixcbiAgICBcInJlc2V0LXNjcmlwdHNjcmlwdHN0eWxlXCJcbl07XG5cbi8vIEluc3RhbmNlcyBvZiB0aGUgZGlmZmVyZW50IHN0eWxlc1xudmFyIHN0eWxlcyA9IFtcbiAgICBuZXcgU3R5bGUoRCwgMCwgMS4wLCBmYWxzZSksXG4gICAgbmV3IFN0eWxlKERjLCAwLCAxLjAsIHRydWUpLFxuICAgIG5ldyBTdHlsZShULCAxLCAxLjAsIGZhbHNlKSxcbiAgICBuZXcgU3R5bGUoVGMsIDEsIDEuMCwgdHJ1ZSksXG4gICAgbmV3IFN0eWxlKFMsIDIsIDAuNywgZmFsc2UpLFxuICAgIG5ldyBTdHlsZShTYywgMiwgMC43LCB0cnVlKSxcbiAgICBuZXcgU3R5bGUoU1MsIDMsIDAuNSwgZmFsc2UpLFxuICAgIG5ldyBTdHlsZShTU2MsIDMsIDAuNSwgdHJ1ZSlcbl07XG5cbi8vIExvb2t1cCB0YWJsZXMgZm9yIHN3aXRjaGluZyBmcm9tIG9uZSBzdHlsZSB0byBhbm90aGVyXG52YXIgc3VwID0gW1MsIFNjLCBTLCBTYywgU1MsIFNTYywgU1MsIFNTY107XG52YXIgc3ViID0gW1NjLCBTYywgU2MsIFNjLCBTU2MsIFNTYywgU1NjLCBTU2NdO1xudmFyIGZyYWNOdW0gPSBbVCwgVGMsIFMsIFNjLCBTUywgU1NjLCBTUywgU1NjXTtcbnZhciBmcmFjRGVuID0gW1RjLCBUYywgU2MsIFNjLCBTU2MsIFNTYywgU1NjLCBTU2NdO1xudmFyIGNyYW1wID0gW0RjLCBEYywgVGMsIFRjLCBTYywgU2MsIFNTYywgU1NjXTtcblxuLy8gV2Ugb25seSBleHBvcnQgc29tZSBvZiB0aGUgc3R5bGVzLiBBbHNvLCB3ZSBkb24ndCBleHBvcnQgdGhlIGBTdHlsZWAgY2xhc3Mgc29cbi8vIG5vIG1vcmUgc3R5bGVzIGNhbiBiZSBnZW5lcmF0ZWQuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBESVNQTEFZOiBzdHlsZXNbRF0sXG4gICAgVEVYVDogc3R5bGVzW1RdLFxuICAgIFNDUklQVDogc3R5bGVzW1NdLFxuICAgIFNDUklQVFNDUklQVDogc3R5bGVzW1NTXVxufTtcbiIsIi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZ2VuZXJhbCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYnVpbGRpbmdcbiAqIGRpZmZlcmVudCBraW5kcyBvZiBkb21UcmVlIG5vZGVzIGluIGEgY29uc2lzdGVudCBtYW5uZXIuXG4gKi9cblxudmFyIGRvbVRyZWUgPSByZXF1aXJlKFwiLi9kb21UcmVlXCIpO1xudmFyIGZvbnRNZXRyaWNzID0gcmVxdWlyZShcIi4vZm9udE1ldHJpY3NcIik7XG52YXIgc3ltYm9scyA9IHJlcXVpcmUoXCIuL3N5bWJvbHNcIik7XG5cbi8qKlxuICogTWFrZXMgYSBzeW1ib2xOb2RlIGFmdGVyIHRyYW5zbGF0aW9uIHZpYSB0aGUgbGlzdCBvZiBzeW1ib2xzIGluIHN5bWJvbHMuanMuXG4gKiBDb3JyZWN0bHkgcHVsbHMgb3V0IG1ldHJpY3MgZm9yIHRoZSBjaGFyYWN0ZXIsIGFuZCBvcHRpb25hbGx5IHRha2VzIGEgbGlzdCBvZlxuICogY2xhc3NlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgbm9kZS5cbiAqL1xudmFyIG1ha2VTeW1ib2wgPSBmdW5jdGlvbih2YWx1ZSwgc3R5bGUsIG1vZGUsIGNvbG9yLCBjbGFzc2VzKSB7XG4gICAgLy8gUmVwbGFjZSB0aGUgdmFsdWUgd2l0aCBpdHMgcmVwbGFjZWQgdmFsdWUgZnJvbSBzeW1ib2wuanNcbiAgICBpZiAoc3ltYm9sc1ttb2RlXVt2YWx1ZV0gJiYgc3ltYm9sc1ttb2RlXVt2YWx1ZV0ucmVwbGFjZSkge1xuICAgICAgICB2YWx1ZSA9IHN5bWJvbHNbbW9kZV1bdmFsdWVdLnJlcGxhY2U7XG4gICAgfVxuXG4gICAgdmFyIG1ldHJpY3MgPSBmb250TWV0cmljcy5nZXRDaGFyYWN0ZXJNZXRyaWNzKHZhbHVlLCBzdHlsZSk7XG5cbiAgICB2YXIgc3ltYm9sTm9kZTtcbiAgICBpZiAobWV0cmljcykge1xuICAgICAgICBzeW1ib2xOb2RlID0gbmV3IGRvbVRyZWUuc3ltYm9sTm9kZShcbiAgICAgICAgICAgIHZhbHVlLCBtZXRyaWNzLmhlaWdodCwgbWV0cmljcy5kZXB0aCwgbWV0cmljcy5pdGFsaWMsIG1ldHJpY3Muc2tldyxcbiAgICAgICAgICAgIGNsYXNzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE8oZW1pbHkpOiBGaWd1cmUgb3V0IGEgZ29vZCB3YXkgdG8gb25seSBwcmludCB0aGlzIGluIGRldmVsb3BtZW50XG4gICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiTm8gY2hhcmFjdGVyIG1ldHJpY3MgZm9yICdcIiArIHZhbHVlICsgXCInIGluIHN0eWxlICdcIiArXG4gICAgICAgICAgICAgICAgc3R5bGUgKyBcIidcIik7XG4gICAgICAgIHN5bWJvbE5vZGUgPSBuZXcgZG9tVHJlZS5zeW1ib2xOb2RlKHZhbHVlLCAwLCAwLCAwLCAwLCBjbGFzc2VzKTtcbiAgICB9XG5cbiAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgc3ltYm9sTm9kZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBzeW1ib2xOb2RlO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIHN5bWJvbCBpbiB0aGUgaXRhbGljIG1hdGggZm9udC5cbiAqL1xudmFyIG1hdGhpdCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlLCBjb2xvciwgY2xhc3Nlcykge1xuICAgIHJldHVybiBtYWtlU3ltYm9sKFxuICAgICAgICB2YWx1ZSwgXCJNYXRoLUl0YWxpY1wiLCBtb2RlLCBjb2xvciwgY2xhc3Nlcy5jb25jYXQoW1wibWF0aGl0XCJdKSk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgc3ltYm9sIGluIHRoZSB1cHJpZ2h0IHJvbWFuIGZvbnQuXG4gKi9cbnZhciBtYXRocm0gPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSwgY29sb3IsIGNsYXNzZXMpIHtcbiAgICAvLyBEZWNpZGUgd2hhdCBmb250IHRvIHJlbmRlciB0aGUgc3ltYm9sIGluIGJ5IGl0cyBlbnRyeSBpbiB0aGUgc3ltYm9sc1xuICAgIC8vIHRhYmxlLlxuICAgIGlmIChzeW1ib2xzW21vZGVdW3ZhbHVlXS5mb250ID09PSBcIm1haW5cIikge1xuICAgICAgICByZXR1cm4gbWFrZVN5bWJvbCh2YWx1ZSwgXCJNYWluLVJlZ3VsYXJcIiwgbW9kZSwgY29sb3IsIGNsYXNzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYWtlU3ltYm9sKFxuICAgICAgICAgICAgdmFsdWUsIFwiQU1TLVJlZ3VsYXJcIiwgbW9kZSwgY29sb3IsIGNsYXNzZXMuY29uY2F0KFtcImFtc3JtXCJdKSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGhlaWdodCwgZGVwdGgsIGFuZCBtYXhGb250U2l6ZSBvZiBhbiBlbGVtZW50IGJhc2VkIG9uIGl0c1xuICogY2hpbGRyZW4uXG4gKi9cbnZhciBzaXplRWxlbWVudEZyb21DaGlsZHJlbiA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBtYXhGb250U2l6ZSA9IDA7XG5cbiAgICBpZiAoZWxlbS5jaGlsZHJlbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbGVtLmNoaWxkcmVuW2ldLmhlaWdodCA+IGhlaWdodCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IGVsZW0uY2hpbGRyZW5baV0uaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW5baV0uZGVwdGggPiBkZXB0aCkge1xuICAgICAgICAgICAgICAgIGRlcHRoID0gZWxlbS5jaGlsZHJlbltpXS5kZXB0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtLmNoaWxkcmVuW2ldLm1heEZvbnRTaXplID4gbWF4Rm9udFNpemUpIHtcbiAgICAgICAgICAgICAgICBtYXhGb250U2l6ZSA9IGVsZW0uY2hpbGRyZW5baV0ubWF4Rm9udFNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtLmhlaWdodCA9IGhlaWdodDtcbiAgICBlbGVtLmRlcHRoID0gZGVwdGg7XG4gICAgZWxlbS5tYXhGb250U2l6ZSA9IG1heEZvbnRTaXplO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIHNwYW4gd2l0aCB0aGUgZ2l2ZW4gbGlzdCBvZiBjbGFzc2VzLCBsaXN0IG9mIGNoaWxkcmVuLCBhbmQgY29sb3IuXG4gKi9cbnZhciBtYWtlU3BhbiA9IGZ1bmN0aW9uKGNsYXNzZXMsIGNoaWxkcmVuLCBjb2xvcikge1xuICAgIHZhciBzcGFuID0gbmV3IGRvbVRyZWUuc3BhbihjbGFzc2VzLCBjaGlsZHJlbik7XG5cbiAgICBzaXplRWxlbWVudEZyb21DaGlsZHJlbihzcGFuKTtcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYW47XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZG9jdW1lbnQgZnJhZ21lbnQgd2l0aCB0aGUgZ2l2ZW4gbGlzdCBvZiBjaGlsZHJlbi5cbiAqL1xudmFyIG1ha2VGcmFnbWVudCA9IGZ1bmN0aW9uKGNoaWxkcmVuKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gbmV3IGRvbVRyZWUuZG9jdW1lbnRGcmFnbWVudChjaGlsZHJlbik7XG5cbiAgICBzaXplRWxlbWVudEZyb21DaGlsZHJlbihmcmFnbWVudCk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59O1xuXG4vKipcbiAqIE1ha2VzIGFuIGVsZW1lbnQgcGxhY2VkIGluIGVhY2ggb2YgdGhlIHZsaXN0IGVsZW1lbnRzIHRvIGVuc3VyZSB0aGF0IGVhY2hcbiAqIGVsZW1lbnQgaGFzIHRoZSBzYW1lIG1heCBmb250IHNpemUuIFRvIGRvIHRoaXMsIHdlIGNyZWF0ZSBhIHplcm8td2lkdGggc3BhY2VcbiAqIHdpdGggdGhlIGNvcnJlY3QgZm9udCBzaXplLlxuICovXG52YXIgbWFrZUZvbnRTaXplciA9IGZ1bmN0aW9uKG9wdGlvbnMsIGZvbnRTaXplKSB7XG4gICAgdmFyIGZvbnRTaXplSW5uZXIgPSBtYWtlU3BhbihbXSwgW25ldyBkb21UcmVlLnN5bWJvbE5vZGUoXCJcXHUyMDBiXCIpXSk7XG4gICAgZm9udFNpemVJbm5lci5zdHlsZS5mb250U2l6ZSA9IChmb250U2l6ZSAvIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXIpICsgXCJlbVwiO1xuXG4gICAgdmFyIGZvbnRTaXplciA9IG1ha2VTcGFuKFxuICAgICAgICBbXCJmb250c2l6ZS1lbnN1cmVyXCIsIFwicmVzZXQtXCIgKyBvcHRpb25zLnNpemUsIFwic2l6ZTVcIl0sXG4gICAgICAgIFtmb250U2l6ZUlubmVyXSk7XG5cbiAgICByZXR1cm4gZm9udFNpemVyO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIHZlcnRpY2FsIGxpc3QgYnkgc3RhY2tpbmcgZWxlbWVudHMgYW5kIGtlcm5zIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICogQWxsb3dzIGZvciBtYW55IGRpZmZlcmVudCB3YXlzIG9mIHNwZWNpZnlpbmcgdGhlIHBvc2l0aW9uaW5nIG1ldGhvZC5cbiAqXG4gKiBBcmd1bWVudHM6XG4gKiAgLSBjaGlsZHJlbjogQSBsaXN0IG9mIGNoaWxkIG9yIGtlcm4gbm9kZXMgdG8gYmUgc3RhY2tlZCBvbiB0b3Agb2YgZWFjaCBvdGhlclxuICogICAgICAgICAgICAgIChpLmUuIHRoZSBmaXJzdCBlbGVtZW50IHdpbGwgYmUgYXQgdGhlIGJvdHRvbSwgYW5kIHRoZSBsYXN0IGF0XG4gKiAgICAgICAgICAgICAgdGhlIHRvcCkuIEVsZW1lbnQgbm9kZXMgYXJlIHNwZWNpZmllZCBhc1xuICogICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBub2RlfVxuICogICAgICAgICAgICAgIHdoaWxlIGtlcm4gbm9kZXMgYXJlIHNwZWNpZmllZCBhc1xuICogICAgICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiBzaXplfVxuICogIC0gcG9zaXRpb25UeXBlOiBUaGUgbWV0aG9kIGJ5IHdoaWNoIHRoZSB2bGlzdCBzaG91bGQgYmUgcG9zaXRpb25lZC4gVmFsaWRcbiAqICAgICAgICAgICAgICAgICAgdmFsdWVzIGFyZTpcbiAqICAgICAgICAgICAgICAgICAgIC0gXCJpbmRpdmlkdWFsU2hpZnRcIjogVGhlIGNoaWxkcmVuIGxpc3Qgb25seSBjb250YWlucyBlbGVtXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlcywgYW5kIGVhY2ggbm9kZSBjb250YWlucyBhbiBleHRyYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaGlmdFwiIHZhbHVlIG9mIGhvdyBtdWNoIGl0IHNob3VsZCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRlZCAobm90ZSB0aGF0IHNoaWZ0aW5nIGlzIGFsd2F5c1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aW5nIGRvd253YXJkcykuIHBvc2l0aW9uRGF0YSBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZC5cbiAqICAgICAgICAgICAgICAgICAgIC0gXCJ0b3BcIjogVGhlIHBvc2l0aW9uRGF0YSBzcGVjaWZpZXMgdGhlIHRvcG1vc3QgcG9pbnQgb2ZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSB2bGlzdCAobm90ZSB0aGlzIGlzIGV4cGVjdGVkIHRvIGJlIGEgaGVpZ2h0LFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgc28gcG9zaXRpdmUgdmFsdWVzIG1vdmUgdXApXG4gKiAgICAgICAgICAgICAgICAgICAtIFwiYm90dG9tXCI6IFRoZSBwb3NpdGlvbkRhdGEgc3BlY2lmaWVzIHRoZSBib3R0b21tb3N0IHBvaW50XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgdmxpc3QgKG5vdGUgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCwgc28gcG9zaXRpdmUgdmFsdWVzIG1vdmUgZG93blxuICogICAgICAgICAgICAgICAgICAgLSBcInNoaWZ0XCI6IFRoZSB2bGlzdCB3aWxsIGJlIHBvc2l0aW9uZWQgc3VjaCB0aGF0IGl0c1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlbGluZSBpcyBwb3NpdGlvbkRhdGEgYXdheSBmcm9tIHRoZSBiYXNlbGluZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgZmlyc3QgY2hpbGQuIFBvc2l0aXZlIHZhbHVlcyBtb3ZlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd253YXJkcy5cbiAqICAgICAgICAgICAgICAgICAgIC0gXCJmaXJzdEJhc2VsaW5lXCI6IFRoZSB2bGlzdCB3aWxsIGJlIHBvc2l0aW9uZWQgc3VjaCB0aGF0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRzIGJhc2VsaW5lIGlzIGFsaWduZWQgd2l0aCB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlbGluZSBvZiB0aGUgZmlyc3QgY2hpbGQuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25EYXRhIGlzIGlnbm9yZWQuICh0aGlzIGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1aXZhbGVudCB0byBcInNoaWZ0XCIgd2l0aFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uRGF0YT0wKVxuICogIC0gcG9zaXRpb25EYXRhOiBEYXRhIHVzZWQgaW4gZGlmZmVyZW50IHdheXMgZGVwZW5kaW5nIG9uIHBvc2l0aW9uVHlwZVxuICogIC0gb3B0aW9uczogQW4gT3B0aW9ucyBvYmplY3RcbiAqXG4gKi9cbnZhciBtYWtlVkxpc3QgPSBmdW5jdGlvbihjaGlsZHJlbiwgcG9zaXRpb25UeXBlLCBwb3NpdGlvbkRhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGVwdGg7XG4gICAgdmFyIGN1cnJQb3M7XG4gICAgdmFyIGk7XG4gICAgaWYgKHBvc2l0aW9uVHlwZSA9PT0gXCJpbmRpdmlkdWFsU2hpZnRcIikge1xuICAgICAgICB2YXIgb2xkQ2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgY2hpbGRyZW4gPSBbb2xkQ2hpbGRyZW5bMF1dO1xuXG4gICAgICAgIC8vIEFkZCBpbiBrZXJucyB0byB0aGUgbGlzdCBvZiBjaGlsZHJlbiB0byBnZXQgZWFjaCBlbGVtZW50IHRvIGJlXG4gICAgICAgIC8vIHNoaWZ0ZWQgdG8gdGhlIGNvcnJlY3Qgc3BlY2lmaWVkIHNoaWZ0XG4gICAgICAgIGRlcHRoID0gLW9sZENoaWxkcmVuWzBdLnNoaWZ0IC0gb2xkQ2hpbGRyZW5bMF0uZWxlbS5kZXB0aDtcbiAgICAgICAgY3VyclBvcyA9IGRlcHRoO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgb2xkQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gLW9sZENoaWxkcmVuW2ldLnNoaWZ0IC0gY3VyclBvcyAtXG4gICAgICAgICAgICAgICAgb2xkQ2hpbGRyZW5baV0uZWxlbS5kZXB0aDtcbiAgICAgICAgICAgIHZhciBzaXplID0gZGlmZiAtXG4gICAgICAgICAgICAgICAgKG9sZENoaWxkcmVuW2kgLSAxXS5lbGVtLmhlaWdodCArXG4gICAgICAgICAgICAgICAgIG9sZENoaWxkcmVuW2kgLSAxXS5lbGVtLmRlcHRoKTtcblxuICAgICAgICAgICAgY3VyclBvcyA9IGN1cnJQb3MgKyBkaWZmO1xuXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogc2l6ZX0pO1xuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChvbGRDaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uVHlwZSA9PT0gXCJ0b3BcIikge1xuICAgICAgICAvLyBXZSBhbHdheXMgc3RhcnQgYXQgdGhlIGJvdHRvbSwgc28gY2FsY3VsYXRlIHRoZSBib3R0b20gYnkgYWRkaW5nIHVwXG4gICAgICAgIC8vIGFsbCB0aGUgc2l6ZXNcbiAgICAgICAgdmFyIGJvdHRvbSA9IHBvc2l0aW9uRGF0YTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5baV0udHlwZSA9PT0gXCJrZXJuXCIpIHtcbiAgICAgICAgICAgICAgICBib3R0b20gLT0gY2hpbGRyZW5baV0uc2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm90dG9tIC09IGNoaWxkcmVuW2ldLmVsZW0uaGVpZ2h0ICsgY2hpbGRyZW5baV0uZWxlbS5kZXB0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZXB0aCA9IGJvdHRvbTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uVHlwZSA9PT0gXCJib3R0b21cIikge1xuICAgICAgICBkZXB0aCA9IC1wb3NpdGlvbkRhdGE7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvblR5cGUgPT09IFwic2hpZnRcIikge1xuICAgICAgICBkZXB0aCA9IC1jaGlsZHJlblswXS5lbGVtLmRlcHRoIC0gcG9zaXRpb25EYXRhO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb25UeXBlID09PSBcImZpcnN0QmFzZWxpbmVcIikge1xuICAgICAgICBkZXB0aCA9IC1jaGlsZHJlblswXS5lbGVtLmRlcHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRoID0gMDtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHRoZSBmb250U2l6ZXJcbiAgICB2YXIgbWF4Rm9udFNpemUgPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hpbGRyZW5baV0udHlwZSA9PT0gXCJlbGVtXCIpIHtcbiAgICAgICAgICAgIG1heEZvbnRTaXplID0gTWF0aC5tYXgobWF4Rm9udFNpemUsIGNoaWxkcmVuW2ldLmVsZW0ubWF4Rm9udFNpemUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBmb250U2l6ZXIgPSBtYWtlRm9udFNpemVyKG9wdGlvbnMsIG1heEZvbnRTaXplKTtcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBsaXN0IG9mIGFjdHVhbCBjaGlsZHJlbiBhdCB0aGUgY29ycmVjdCBvZmZzZXRzXG4gICAgdmFyIHJlYWxDaGlsZHJlbiA9IFtdO1xuICAgIGN1cnJQb3MgPSBkZXB0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldLnR5cGUgPT09IFwia2VyblwiKSB7XG4gICAgICAgICAgICBjdXJyUG9zICs9IGNoaWxkcmVuW2ldLnNpemU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXS5lbGVtO1xuXG4gICAgICAgICAgICB2YXIgc2hpZnQgPSAtY2hpbGQuZGVwdGggLSBjdXJyUG9zO1xuICAgICAgICAgICAgY3VyclBvcyArPSBjaGlsZC5oZWlnaHQgKyBjaGlsZC5kZXB0aDtcblxuICAgICAgICAgICAgdmFyIGNoaWxkV3JhcCA9IG1ha2VTcGFuKFtdLCBbZm9udFNpemVyLCBjaGlsZF0pO1xuICAgICAgICAgICAgY2hpbGRXcmFwLmhlaWdodCAtPSBzaGlmdDtcbiAgICAgICAgICAgIGNoaWxkV3JhcC5kZXB0aCArPSBzaGlmdDtcbiAgICAgICAgICAgIGNoaWxkV3JhcC5zdHlsZS50b3AgPSBzaGlmdCArIFwiZW1cIjtcblxuICAgICAgICAgICAgcmVhbENoaWxkcmVuLnB1c2goY2hpbGRXcmFwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBpbiBhbiBlbGVtZW50IGF0IHRoZSBlbmQgd2l0aCBubyBvZmZzZXQgdG8gZml4IHRoZSBjYWxjdWxhdGlvbiBvZlxuICAgIC8vIGJhc2VsaW5lcyBpbiBzb21lIGJyb3dzZXJzIChuYW1lbHkgSUUsIHNvbWV0aW1lcyBzYWZhcmkpXG4gICAgdmFyIGJhc2VsaW5lRml4ID0gbWFrZVNwYW4oXG4gICAgICAgIFtcImJhc2VsaW5lLWZpeFwiXSwgW2ZvbnRTaXplciwgbmV3IGRvbVRyZWUuc3ltYm9sTm9kZShcIlxcdTIwMGJcIildKTtcbiAgICByZWFsQ2hpbGRyZW4ucHVzaChiYXNlbGluZUZpeCk7XG5cbiAgICB2YXIgdmxpc3QgPSBtYWtlU3BhbihbXCJ2bGlzdFwiXSwgcmVhbENoaWxkcmVuKTtcbiAgICAvLyBGaXggdGhlIGZpbmFsIGhlaWdodCBhbmQgZGVwdGgsIGluIGNhc2UgdGhlcmUgd2VyZSBrZXJucyBhdCB0aGUgZW5kc1xuICAgIC8vIHNpbmNlIHRoZSBtYWtlU3BhbiBjYWxjdWxhdGlvbiB3b24ndCB0YWtlIHRoYXQgaW4gdG8gYWNjb3VudC5cbiAgICB2bGlzdC5oZWlnaHQgPSBNYXRoLm1heChjdXJyUG9zLCB2bGlzdC5oZWlnaHQpO1xuICAgIHZsaXN0LmRlcHRoID0gTWF0aC5tYXgoLWRlcHRoLCB2bGlzdC5kZXB0aCk7XG4gICAgcmV0dXJuIHZsaXN0O1xufTtcblxuLy8gQSB0YWJsZSBvZiBzaXplIC0+IGZvbnQgc2l6ZSBmb3IgdGhlIGRpZmZlcmVudCBzaXppbmcgZnVuY3Rpb25zXG52YXIgc2l6aW5nTXVsdGlwbGllciA9IHtcbiAgICBzaXplMTogMC41LFxuICAgIHNpemUyOiAwLjcsXG4gICAgc2l6ZTM6IDAuOCxcbiAgICBzaXplNDogMC45LFxuICAgIHNpemU1OiAxLjAsXG4gICAgc2l6ZTY6IDEuMixcbiAgICBzaXplNzogMS40NCxcbiAgICBzaXplODogMS43MyxcbiAgICBzaXplOTogMi4wNyxcbiAgICBzaXplMTA6IDIuNDlcbn07XG5cbi8vIEEgbWFwIG9mIHNwYWNpbmcgZnVuY3Rpb25zIHRvIHRoZWlyIGF0dHJpYnV0ZXMsIGxpa2Ugc2l6ZSBhbmQgY29ycmVzcG9uZGluZ1xuLy8gQ1NTIGNsYXNzXG52YXIgc3BhY2luZ0Z1bmN0aW9ucyA9IHtcbiAgICBcIlxcXFxxcXVhZFwiOiB7XG4gICAgICAgIHNpemU6IFwiMmVtXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJxcXVhZFwiXG4gICAgfSxcbiAgICBcIlxcXFxxdWFkXCI6IHtcbiAgICAgICAgc2l6ZTogXCIxZW1cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInF1YWRcIlxuICAgIH0sXG4gICAgXCJcXFxcZW5zcGFjZVwiOiB7XG4gICAgICAgIHNpemU6IFwiMC41ZW1cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcImVuc3BhY2VcIlxuICAgIH0sXG4gICAgXCJcXFxcO1wiOiB7XG4gICAgICAgIHNpemU6IFwiMC4yNzc3NzhlbVwiLFxuICAgICAgICBjbGFzc05hbWU6IFwidGhpY2tzcGFjZVwiXG4gICAgfSxcbiAgICBcIlxcXFw6XCI6IHtcbiAgICAgICAgc2l6ZTogXCIwLjIyMjIyZW1cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIm1lZGl1bXNwYWNlXCJcbiAgICB9LFxuICAgIFwiXFxcXCxcIjoge1xuICAgICAgICBzaXplOiBcIjAuMTY2NjdlbVwiLFxuICAgICAgICBjbGFzc05hbWU6IFwidGhpbnNwYWNlXCJcbiAgICB9LFxuICAgIFwiXFxcXCFcIjoge1xuICAgICAgICBzaXplOiBcIi0wLjE2NjY3ZW1cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIm5lZ2F0aXZldGhpbnNwYWNlXCJcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtYWtlU3ltYm9sOiBtYWtlU3ltYm9sLFxuICAgIG1hdGhpdDogbWF0aGl0LFxuICAgIG1hdGhybTogbWF0aHJtLFxuICAgIG1ha2VTcGFuOiBtYWtlU3BhbixcbiAgICBtYWtlRnJhZ21lbnQ6IG1ha2VGcmFnbWVudCxcbiAgICBtYWtlVkxpc3Q6IG1ha2VWTGlzdCxcbiAgICBzaXppbmdNdWx0aXBsaWVyOiBzaXppbmdNdWx0aXBsaWVyLFxuICAgIHNwYWNpbmdGdW5jdGlvbnM6IHNwYWNpbmdGdW5jdGlvbnNcbn07XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBkb2VzIHRoZSBtYWluIHdvcmsgb2YgYnVpbGRpbmcgYSBkb21UcmVlIHN0cnVjdHVyZSBmcm9tIGEgcGFyc2VcbiAqIHRyZWUuIFRoZSBlbnRyeSBwb2ludCBpcyB0aGUgYGJ1aWxkSFRNTGAgZnVuY3Rpb24sIHdoaWNoIHRha2VzIGEgcGFyc2UgdHJlZS5cbiAqIFRoZW4sIHRoZSBidWlsZEV4cHJlc3Npb24sIGJ1aWxkR3JvdXAsIGFuZCB2YXJpb3VzIGdyb3VwVHlwZXMgZnVuY3Rpb25zIGFyZVxuICogY2FsbGVkLCB0byBwcm9kdWNlIGEgZmluYWwgSFRNTCB0cmVlLlxuICovXG5cbnZhciBPcHRpb25zID0gcmVxdWlyZShcIi4vT3B0aW9uc1wiKTtcbnZhciBQYXJzZUVycm9yID0gcmVxdWlyZShcIi4vUGFyc2VFcnJvclwiKTtcbnZhciBTdHlsZSA9IHJlcXVpcmUoXCIuL1N0eWxlXCIpO1xuXG52YXIgYnVpbGRDb21tb24gPSByZXF1aXJlKFwiLi9idWlsZENvbW1vblwiKTtcbnZhciBkZWxpbWl0ZXIgPSByZXF1aXJlKFwiLi9kZWxpbWl0ZXJcIik7XG52YXIgZG9tVHJlZSA9IHJlcXVpcmUoXCIuL2RvbVRyZWVcIik7XG52YXIgZm9udE1ldHJpY3MgPSByZXF1aXJlKFwiLi9mb250TWV0cmljc1wiKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgbWFrZVNwYW4gPSBidWlsZENvbW1vbi5tYWtlU3BhbjtcblxuLyoqXG4gKiBUYWtlIGEgbGlzdCBvZiBub2RlcywgYnVpbGQgdGhlbSBpbiBvcmRlciwgYW5kIHJldHVybiBhIGxpc3Qgb2YgdGhlIGJ1aWx0XG4gKiBub2Rlcy4gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBgcHJldmAgbm9kZSBjb3JyZWN0bHksIGFuZCBwYXNzZXMgdGhlXG4gKiBwcmV2aW91cyBlbGVtZW50IGZyb20gdGhlIGxpc3QgYXMgdGhlIHByZXYgb2YgdGhlIG5leHQgZWxlbWVudC5cbiAqL1xudmFyIGJ1aWxkRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKGV4cHJlc3Npb24sIG9wdGlvbnMsIHByZXYpIHtcbiAgICB2YXIgZ3JvdXBzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHByZXNzaW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBncm91cCA9IGV4cHJlc3Npb25baV07XG4gICAgICAgIGdyb3Vwcy5wdXNoKGJ1aWxkR3JvdXAoZ3JvdXAsIG9wdGlvbnMsIHByZXYpKTtcbiAgICAgICAgcHJldiA9IGdyb3VwO1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXBzO1xufTtcblxuLy8gTGlzdCBvZiB0eXBlcyB1c2VkIGJ5IGdldFR5cGVPZkdyb3VwXG52YXIgZ3JvdXBUb1R5cGUgPSB7XG4gICAgbWF0aG9yZDogXCJtb3JkXCIsXG4gICAgdGV4dG9yZDogXCJtb3JkXCIsXG4gICAgYmluOiBcIm1iaW5cIixcbiAgICByZWw6IFwibXJlbFwiLFxuICAgIHRleHQ6IFwibW9yZFwiLFxuICAgIG9wZW46IFwibW9wZW5cIixcbiAgICBjbG9zZTogXCJtY2xvc2VcIixcbiAgICBpbm5lcjogXCJtaW5uZXJcIixcbiAgICBnZW5mcmFjOiBcIm1pbm5lclwiLFxuICAgIHNwYWNpbmc6IFwibW9yZFwiLFxuICAgIHB1bmN0OiBcIm1wdW5jdFwiLFxuICAgIG9yZGdyb3VwOiBcIm1vcmRcIixcbiAgICBvcDogXCJtb3BcIixcbiAgICBrYXRleDogXCJtb3JkXCIsXG4gICAgb3ZlcmxpbmU6IFwibW9yZFwiLFxuICAgIHJ1bGU6IFwibW9yZFwiLFxuICAgIGxlZnRyaWdodDogXCJtaW5uZXJcIixcbiAgICBzcXJ0OiBcIm1vcmRcIixcbiAgICBhY2NlbnQ6IFwibW9yZFwiXG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGZpbmFsIG1hdGggdHlwZSBvZiBhbiBleHByZXNzaW9uLCBnaXZlbiBpdHMgZ3JvdXAgdHlwZS4gVGhpcyB0eXBlIGlzXG4gKiB1c2VkIHRvIGRldGVybWluZSBzcGFjaW5nIGJldHdlZW4gZWxlbWVudHMsIGFuZCBhZmZlY3RzIGJpbiBlbGVtZW50cyBieVxuICogY2F1c2luZyB0aGVtIHRvIGNoYW5nZSBkZXBlbmRpbmcgb24gd2hhdCB0eXBlcyBhcmUgYXJvdW5kIHRoZW0uIFRoaXMgdHlwZVxuICogbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgb3V0ZXJtb3N0IG5vZGUgb2YgYW4gZWxlbWVudCBhcyBhIENTUyBjbGFzcyBzbyB0aGF0XG4gKiBzcGFjaW5nIHdpdGggaXRzIHN1cnJvdW5kaW5nIGVsZW1lbnRzIHdvcmtzIGNvcnJlY3RseS5cbiAqXG4gKiBTb21lIGVsZW1lbnRzIGNhbiBiZSBtYXBwZWQgb25lLXRvLW9uZSBmcm9tIGdyb3VwIHR5cGUgdG8gbWF0aCB0eXBlLCBhbmRcbiAqIHRob3NlIGFyZSBsaXN0ZWQgaW4gdGhlIGBncm91cFRvVHlwZWAgdGFibGUuXG4gKlxuICogT3RoZXJzICh1c3VhbGx5IGVsZW1lbnRzIHRoYXQgd3JhcCBhcm91bmQgb3RoZXIgZWxlbWVudHMpIG9mdGVuIGhhdmVcbiAqIHJlY3Vyc2l2ZSBkZWZpbml0aW9ucywgYW5kIHRodXMgY2FsbCBgZ2V0VHlwZU9mR3JvdXBgIG9uIHRoZWlyIGlubmVyXG4gKiBlbGVtZW50cy5cbiAqL1xudmFyIGdldFR5cGVPZkdyb3VwID0gZnVuY3Rpb24oZ3JvdXApIHtcbiAgICBpZiAoZ3JvdXAgPT0gbnVsbCkge1xuICAgICAgICAvLyBMaWtlIHdoZW4gdHlwZXNldHRpbmcgJF4zJFxuICAgICAgICByZXR1cm4gZ3JvdXBUb1R5cGUubWF0aG9yZDtcbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwic3Vwc3ViXCIpIHtcbiAgICAgICAgcmV0dXJuIGdldFR5cGVPZkdyb3VwKGdyb3VwLnZhbHVlLmJhc2UpO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAudHlwZSA9PT0gXCJsbGFwXCIgfHwgZ3JvdXAudHlwZSA9PT0gXCJybGFwXCIpIHtcbiAgICAgICAgcmV0dXJuIGdldFR5cGVPZkdyb3VwKGdyb3VwLnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwiY29sb3JcIikge1xuICAgICAgICByZXR1cm4gZ2V0VHlwZU9mR3JvdXAoZ3JvdXAudmFsdWUudmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAudHlwZSA9PT0gXCJzaXppbmdcIikge1xuICAgICAgICByZXR1cm4gZ2V0VHlwZU9mR3JvdXAoZ3JvdXAudmFsdWUudmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAudHlwZSA9PT0gXCJzdHlsaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGdldFR5cGVPZkdyb3VwKGdyb3VwLnZhbHVlLnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwiZGVsaW1zaXppbmdcIikge1xuICAgICAgICByZXR1cm4gZ3JvdXBUb1R5cGVbZ3JvdXAudmFsdWUuZGVsaW1UeXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ3JvdXBUb1R5cGVbZ3JvdXAudHlwZV07XG4gICAgfVxufTtcblxuLyoqXG4gKiBTb21ldGltZXMsIGdyb3VwcyBwZXJmb3JtIHNwZWNpYWwgcnVsZXMgd2hlbiB0aGV5IGhhdmUgc3VwZXJzY3JpcHRzIG9yXG4gKiBzdWJzY3JpcHRzIGF0dGFjaGVkIHRvIHRoZW0uIFRoaXMgZnVuY3Rpb24gbGV0cyB0aGUgYHN1cHN1YmAgZ3JvdXAga25vdyB0aGF0XG4gKiBpdHMgaW5uZXIgZWxlbWVudCBzaG91bGQgaGFuZGxlIHRoZSBzdXBlcnNjcmlwdHMgYW5kIHN1YnNjcmlwdHMgaW5zdGVhZCBvZlxuICogaGFuZGxpbmcgdGhlbSBpdHNlbGYuXG4gKi9cbnZhciBzaG91bGRIYW5kbGVTdXBTdWIgPSBmdW5jdGlvbihncm91cCwgb3B0aW9ucykge1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAudHlwZSA9PT0gXCJvcFwiKSB7XG4gICAgICAgIC8vIE9wZXJhdG9ycyBoYW5kbGUgc3Vwc3VicyBkaWZmZXJlbnRseSB3aGVuIHRoZXkgaGF2ZSBsaW1pdHNcbiAgICAgICAgLy8gKGUuZy4gYFxcZGlzcGxheXN0eWxlXFxzdW1fMl4zYClcbiAgICAgICAgcmV0dXJuIGdyb3VwLnZhbHVlLmxpbWl0cyAmJiBvcHRpb25zLnN0eWxlLnNpemUgPT09IFN0eWxlLkRJU1BMQVkuc2l6ZTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwiYWNjZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIGlzQ2hhcmFjdGVyQm94KGdyb3VwLnZhbHVlLmJhc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5cbi8qKlxuICogU29tZXRpbWVzIHdlIHdhbnQgdG8gcHVsbCBvdXQgdGhlIGlubmVybW9zdCBlbGVtZW50IG9mIGEgZ3JvdXAuIEluIG1vc3RcbiAqIGNhc2VzLCB0aGlzIHdpbGwganVzdCBiZSB0aGUgZ3JvdXAgaXRzZWxmLCBidXQgd2hlbiBvcmRncm91cHMgYW5kIGNvbG9ycyBoYXZlXG4gKiBhIHNpbmdsZSBlbGVtZW50LCB3ZSB3YW50IHRvIHB1bGwgdGhhdCBvdXQuXG4gKi9cbnZhciBnZXRCYXNlRWxlbSA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgaWYgKCFncm91cCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChncm91cC50eXBlID09PSBcIm9yZGdyb3VwXCIpIHtcbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJhc2VFbGVtKGdyb3VwLnZhbHVlWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBncm91cDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3JvdXAudHlwZSA9PT0gXCJjb2xvclwiKSB7XG4gICAgICAgIGlmIChncm91cC52YWx1ZS52YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCYXNlRWxlbShncm91cC52YWx1ZS52YWx1ZVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUZVhib29rIGFsZ29yaXRobXMgb2Z0ZW4gcmVmZXJlbmNlIFwiY2hhcmFjdGVyIGJveGVzXCIsIHdoaWNoIGFyZSBzaW1wbHkgZ3JvdXBzXG4gKiB3aXRoIGEgc2luZ2xlIGNoYXJhY3RlciBpbiB0aGVtLiBUbyBkZWNpZGUgaWYgc29tZXRoaW5nIGlzIGEgY2hhcmFjdGVyIGJveCxcbiAqIHdlIGZpbmQgaXRzIGlubmVybW9zdCBncm91cCwgYW5kIHNlZSBpZiBpdCBpcyBhIHNpbmdsZSBjaGFyYWN0ZXIuXG4gKi9cbnZhciBpc0NoYXJhY3RlckJveCA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgdmFyIGJhc2VFbGVtID0gZ2V0QmFzZUVsZW0oZ3JvdXApO1xuXG4gICAgLy8gVGhlc2UgYXJlIGFsbCB0aGV5IHR5cGVzIG9mIGdyb3VwcyB3aGljaCBob2xkIHNpbmdsZSBjaGFyYWN0ZXJzXG4gICAgcmV0dXJuIGJhc2VFbGVtLnR5cGUgPT09IFwibWF0aG9yZFwiIHx8XG4gICAgICAgIGJhc2VFbGVtLnR5cGUgPT09IFwidGV4dG9yZFwiIHx8XG4gICAgICAgIGJhc2VFbGVtLnR5cGUgPT09IFwiYmluXCIgfHxcbiAgICAgICAgYmFzZUVsZW0udHlwZSA9PT0gXCJyZWxcIiB8fFxuICAgICAgICBiYXNlRWxlbS50eXBlID09PSBcImlubmVyXCIgfHxcbiAgICAgICAgYmFzZUVsZW0udHlwZSA9PT0gXCJvcGVuXCIgfHxcbiAgICAgICAgYmFzZUVsZW0udHlwZSA9PT0gXCJjbG9zZVwiIHx8XG4gICAgICAgIGJhc2VFbGVtLnR5cGUgPT09IFwicHVuY3RcIjtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBhIG1hcCBvZiBncm91cCB0eXBlcyB0byB0aGUgZnVuY3Rpb24gdXNlZCB0byBoYW5kbGUgdGhhdCB0eXBlLlxuICogU2ltcGxlciB0eXBlcyBjb21lIGF0IHRoZSBiZWdpbm5pbmcsIHdoaWxlIGNvbXBsaWNhdGVkIHR5cGVzIGNvbWUgYWZ0ZXJ3YXJkcy5cbiAqL1xudmFyIGdyb3VwVHlwZXMgPSB7XG4gICAgbWF0aG9yZDogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29tbW9uLm1hdGhpdChcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLCBncm91cC5tb2RlLCBvcHRpb25zLmdldENvbG9yKCksIFtcIm1vcmRcIl0pO1xuICAgIH0sXG5cbiAgICB0ZXh0b3JkOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICByZXR1cm4gYnVpbGRDb21tb24ubWF0aHJtKFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUsIG9wdGlvbnMuZ2V0Q29sb3IoKSwgW1wibW9yZFwiXSk7XG4gICAgfSxcblxuICAgIGJpbjogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IFwibWJpblwiO1xuICAgICAgICAvLyBQdWxsIG91dCB0aGUgbW9zdCByZWNlbnQgZWxlbWVudC4gRG8gc29tZSBzcGVjaWFsIGhhbmRsaW5nIHRvIGZpbmRcbiAgICAgICAgLy8gdGhpbmdzIGF0IHRoZSBlbmQgb2YgYSBcXGNvbG9yIGdyb3VwLiBOb3RlIHRoYXQgd2UgZG9uJ3QgdXNlIHRoZSBzYW1lXG4gICAgICAgIC8vIGxvZ2ljIGZvciBvcmRncm91cHMgKHdoaWNoIGNvdW50IGFzIG9yZHMpLlxuICAgICAgICB2YXIgcHJldkF0b20gPSBwcmV2O1xuICAgICAgICB3aGlsZSAocHJldkF0b20gJiYgcHJldkF0b20udHlwZSA9PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgIHZhciBhdG9tcyA9IHByZXZBdG9tLnZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgcHJldkF0b20gPSBhdG9tc1thdG9tcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZWUgVGVYYm9vayBwZy4gNDQyLTQ0NiwgUnVsZXMgNSBhbmQgNiwgYW5kIHRoZSB0ZXh0IGJlZm9yZSBSdWxlIDE5LlxuICAgICAgICAvLyBIZXJlLCB3ZSBkZXRlcm1pbmUgd2hldGhlciB0aGUgYmluIHNob3VsZCB0dXJuIGludG8gYW4gb3JkLiBXZVxuICAgICAgICAvLyBjdXJyZW50bHkgb25seSBhcHBseSBSdWxlIDUuXG4gICAgICAgIGlmICghcHJldiB8fCB1dGlscy5jb250YWlucyhbXCJtYmluXCIsIFwibW9wZW5cIiwgXCJtcmVsXCIsIFwibW9wXCIsIFwibXB1bmN0XCJdLFxuICAgICAgICAgICAgICAgIGdldFR5cGVPZkdyb3VwKHByZXZBdG9tKSkpIHtcbiAgICAgICAgICAgIGdyb3VwLnR5cGUgPSBcInRleHRvcmRcIjtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwibW9yZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29tbW9uLm1hdGhybShcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLCBncm91cC5tb2RlLCBvcHRpb25zLmdldENvbG9yKCksIFtjbGFzc05hbWVdKTtcbiAgICB9LFxuXG4gICAgcmVsOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICByZXR1cm4gYnVpbGRDb21tb24ubWF0aHJtKFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUsIG9wdGlvbnMuZ2V0Q29sb3IoKSwgW1wibXJlbFwiXSk7XG4gICAgfSxcblxuICAgIG9wZW46IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHJldHVybiBidWlsZENvbW1vbi5tYXRocm0oXG4gICAgICAgICAgICBncm91cC52YWx1ZSwgZ3JvdXAubW9kZSwgb3B0aW9ucy5nZXRDb2xvcigpLCBbXCJtb3BlblwiXSk7XG4gICAgfSxcblxuICAgIGNsb3NlOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICByZXR1cm4gYnVpbGRDb21tb24ubWF0aHJtKFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUsIG9wdGlvbnMuZ2V0Q29sb3IoKSwgW1wibWNsb3NlXCJdKTtcbiAgICB9LFxuXG4gICAgaW5uZXI6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHJldHVybiBidWlsZENvbW1vbi5tYXRocm0oXG4gICAgICAgICAgICBncm91cC52YWx1ZSwgZ3JvdXAubW9kZSwgb3B0aW9ucy5nZXRDb2xvcigpLCBbXCJtaW5uZXJcIl0pO1xuICAgIH0sXG5cbiAgICBwdW5jdDogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29tbW9uLm1hdGhybShcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLCBncm91cC5tb2RlLCBvcHRpb25zLmdldENvbG9yKCksIFtcIm1wdW5jdFwiXSk7XG4gICAgfSxcblxuICAgIG9yZGdyb3VwOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICByZXR1cm4gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJtb3JkXCIsIG9wdGlvbnMuc3R5bGUuY2xzKCldLFxuICAgICAgICAgICAgYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlLCBvcHRpb25zLnJlc2V0KCkpXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIHRleHQ6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHJldHVybiBtYWtlU3BhbihbXCJ0ZXh0XCIsIFwibW9yZFwiLCBvcHRpb25zLnN0eWxlLmNscygpXSxcbiAgICAgICAgICAgIGJ1aWxkRXhwcmVzc2lvbihncm91cC52YWx1ZS5ib2R5LCBvcHRpb25zLnJlc2V0KCkpKTtcbiAgICB9LFxuXG4gICAgY29sb3I6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGJ1aWxkRXhwcmVzc2lvbihcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgb3B0aW9ucy53aXRoQ29sb3IoZ3JvdXAudmFsdWUuY29sb3IpLFxuICAgICAgICAgICAgcHJldlxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFxcY29sb3IgaXNuJ3Qgc3VwcG9zZWQgdG8gYWZmZWN0IHRoZSB0eXBlIG9mIHRoZSBlbGVtZW50cyBpdCBjb250YWlucy5cbiAgICAgICAgLy8gVG8gYWNjb21wbGlzaCB0aGlzLCB3ZSB3cmFwIHRoZSByZXN1bHRzIGluIGEgZnJhZ21lbnQsIHNvIHRoZSBpbm5lclxuICAgICAgICAvLyBlbGVtZW50cyB3aWxsIGJlIGFibGUgdG8gZGlyZWN0bHkgaW50ZXJhY3Qgd2l0aCB0aGVpciBuZWlnaGJvcnMuIEZvclxuICAgICAgICAvLyBleGFtcGxlLCBgXFxjb2xvcntyZWR9ezIgK30gM2AgaGFzIHRoZSBzYW1lIHNwYWNpbmcgYXMgYDIgKyAzYFxuICAgICAgICByZXR1cm4gbmV3IGJ1aWxkQ29tbW9uLm1ha2VGcmFnbWVudChlbGVtZW50cyk7XG4gICAgfSxcblxuICAgIHN1cHN1YjogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgLy8gU3VwZXJzY3JpcHQgYW5kIHN1YnNjcmlwdHMgYXJlIGhhbmRsZWQgaW4gdGhlIFRlWGJvb2sgb24gcGFnZVxuICAgICAgICAvLyA0NDUtNDQ2LCBydWxlcyAxOChhLWYpLlxuXG4gICAgICAgIC8vIEhlcmUgaXMgd2hlcmUgd2UgZGVmZXIgdG8gdGhlIGlubmVyIGdyb3VwIGlmIGl0IHNob3VsZCBoYW5kbGVcbiAgICAgICAgLy8gc3VwZXJzY3JpcHRzIGFuZCBzdWJzY3JpcHRzIGl0c2VsZi5cbiAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN1cFN1Yihncm91cC52YWx1ZS5iYXNlLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGdyb3VwVHlwZXNbZ3JvdXAudmFsdWUuYmFzZS50eXBlXShncm91cCwgb3B0aW9ucywgcHJldik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYmFzZSA9IGJ1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYmFzZSwgb3B0aW9ucy5yZXNldCgpKTtcbiAgICAgICAgdmFyIHN1cG1pZCwgc3VibWlkLCBzdXAsIHN1YjtcblxuICAgICAgICBpZiAoZ3JvdXAudmFsdWUuc3VwKSB7XG4gICAgICAgICAgICBzdXAgPSBidWlsZEdyb3VwKGdyb3VwLnZhbHVlLnN1cCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aXRoU3R5bGUob3B0aW9ucy5zdHlsZS5zdXAoKSkpO1xuICAgICAgICAgICAgc3VwbWlkID0gbWFrZVNwYW4oXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zLnN0eWxlLnJlc2V0KCksIG9wdGlvbnMuc3R5bGUuc3VwKCkuY2xzKCldLCBbc3VwXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ3JvdXAudmFsdWUuc3ViKSB7XG4gICAgICAgICAgICBzdWIgPSBidWlsZEdyb3VwKGdyb3VwLnZhbHVlLnN1YixcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aXRoU3R5bGUob3B0aW9ucy5zdHlsZS5zdWIoKSkpO1xuICAgICAgICAgICAgc3VibWlkID0gbWFrZVNwYW4oXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zLnN0eWxlLnJlc2V0KCksIG9wdGlvbnMuc3R5bGUuc3ViKCkuY2xzKCldLCBbc3ViXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdWxlIDE4YVxuICAgICAgICB2YXIgc3VwU2hpZnQsIHN1YlNoaWZ0O1xuICAgICAgICBpZiAoaXNDaGFyYWN0ZXJCb3goZ3JvdXAudmFsdWUuYmFzZSkpIHtcbiAgICAgICAgICAgIHN1cFNoaWZ0ID0gMDtcbiAgICAgICAgICAgIHN1YlNoaWZ0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cFNoaWZ0ID0gYmFzZS5oZWlnaHQgLSBmb250TWV0cmljcy5tZXRyaWNzLnN1cERyb3A7XG4gICAgICAgICAgICBzdWJTaGlmdCA9IGJhc2UuZGVwdGggKyBmb250TWV0cmljcy5tZXRyaWNzLnN1YkRyb3A7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdWxlIDE4Y1xuICAgICAgICB2YXIgbWluU3VwU2hpZnQ7XG4gICAgICAgIGlmIChvcHRpb25zLnN0eWxlID09PSBTdHlsZS5ESVNQTEFZKSB7XG4gICAgICAgICAgICBtaW5TdXBTaGlmdCA9IGZvbnRNZXRyaWNzLm1ldHJpY3Muc3VwMTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnN0eWxlLmNyYW1wZWQpIHtcbiAgICAgICAgICAgIG1pblN1cFNoaWZ0ID0gZm9udE1ldHJpY3MubWV0cmljcy5zdXAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWluU3VwU2hpZnQgPSBmb250TWV0cmljcy5tZXRyaWNzLnN1cDI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzY3JpcHRzcGFjZSBpcyBhIGZvbnQtc2l6ZS1pbmRlcGVuZGVudCBzaXplLCBzbyBzY2FsZSBpdFxuICAgICAgICAvLyBhcHByb3ByaWF0ZWx5XG4gICAgICAgIHZhciBtdWx0aXBsaWVyID0gU3R5bGUuVEVYVC5zaXplTXVsdGlwbGllciAqXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgdmFyIHNjcmlwdHNwYWNlID1cbiAgICAgICAgICAgICgwLjUgLyBmb250TWV0cmljcy5tZXRyaWNzLnB0UGVyRW0pIC8gbXVsdGlwbGllciArIFwiZW1cIjtcblxuICAgICAgICB2YXIgc3Vwc3ViO1xuICAgICAgICBpZiAoIWdyb3VwLnZhbHVlLnN1cCkge1xuICAgICAgICAgICAgLy8gUnVsZSAxOGJcbiAgICAgICAgICAgIHN1YlNoaWZ0ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgc3ViU2hpZnQsIGZvbnRNZXRyaWNzLm1ldHJpY3Muc3ViMSxcbiAgICAgICAgICAgICAgICBzdWIuaGVpZ2h0IC0gMC44ICogZm9udE1ldHJpY3MubWV0cmljcy54SGVpZ2h0KTtcblxuICAgICAgICAgICAgc3Vwc3ViID0gYnVpbGRDb21tb24ubWFrZVZMaXN0KFtcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IHN1Ym1pZH1cbiAgICAgICAgICAgIF0sIFwic2hpZnRcIiwgc3ViU2hpZnQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICBzdXBzdWIuY2hpbGRyZW5bMF0uc3R5bGUubWFyZ2luUmlnaHQgPSBzY3JpcHRzcGFjZTtcblxuICAgICAgICAgICAgLy8gU3Vic2NyaXB0cyBzaG91bGRuJ3QgYmUgc2hpZnRlZCBieSB0aGUgYmFzZSdzIGl0YWxpYyBjb3JyZWN0aW9uLlxuICAgICAgICAgICAgLy8gQWNjb3VudCBmb3IgdGhhdCBieSBzaGlmdGluZyB0aGUgc3Vic2NyaXB0IGJhY2sgdGhlIGFwcHJvcHJpYXRlXG4gICAgICAgICAgICAvLyBhbW91bnQuIE5vdGUgd2Ugb25seSBkbyB0aGlzIHdoZW4gdGhlIGJhc2UgaXMgYSBzaW5nbGUgc3ltYm9sLlxuICAgICAgICAgICAgaWYgKGJhc2UgaW5zdGFuY2VvZiBkb21UcmVlLnN5bWJvbE5vZGUpIHtcbiAgICAgICAgICAgICAgICBzdXBzdWIuY2hpbGRyZW5bMF0uc3R5bGUubWFyZ2luTGVmdCA9IC1iYXNlLml0YWxpYyArIFwiZW1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghZ3JvdXAudmFsdWUuc3ViKSB7XG4gICAgICAgICAgICAvLyBSdWxlIDE4YywgZFxuICAgICAgICAgICAgc3VwU2hpZnQgPSBNYXRoLm1heChzdXBTaGlmdCwgbWluU3VwU2hpZnQsXG4gICAgICAgICAgICAgICAgc3VwLmRlcHRoICsgMC4yNSAqIGZvbnRNZXRyaWNzLm1ldHJpY3MueEhlaWdodCk7XG5cbiAgICAgICAgICAgIHN1cHN1YiA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChbXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBzdXBtaWR9XG4gICAgICAgICAgICBdLCBcInNoaWZ0XCIsIC1zdXBTaGlmdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHN1cHN1Yi5jaGlsZHJlblswXS5zdHlsZS5tYXJnaW5SaWdodCA9IHNjcmlwdHNwYWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwU2hpZnQgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICBzdXBTaGlmdCwgbWluU3VwU2hpZnQsXG4gICAgICAgICAgICAgICAgc3VwLmRlcHRoICsgMC4yNSAqIGZvbnRNZXRyaWNzLm1ldHJpY3MueEhlaWdodCk7XG4gICAgICAgICAgICBzdWJTaGlmdCA9IE1hdGgubWF4KHN1YlNoaWZ0LCBmb250TWV0cmljcy5tZXRyaWNzLnN1YjIpO1xuXG4gICAgICAgICAgICB2YXIgcnVsZVdpZHRoID0gZm9udE1ldHJpY3MubWV0cmljcy5kZWZhdWx0UnVsZVRoaWNrbmVzcztcblxuICAgICAgICAgICAgLy8gUnVsZSAxOGVcbiAgICAgICAgICAgIGlmICgoc3VwU2hpZnQgLSBzdXAuZGVwdGgpIC0gKHN1Yi5oZWlnaHQgLSBzdWJTaGlmdCkgPFxuICAgICAgICAgICAgICAgICAgICA0ICogcnVsZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgc3ViU2hpZnQgPSA0ICogcnVsZVdpZHRoIC0gKHN1cFNoaWZ0IC0gc3VwLmRlcHRoKSArIHN1Yi5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIHBzaSA9IDAuOCAqIGZvbnRNZXRyaWNzLm1ldHJpY3MueEhlaWdodCAtXG4gICAgICAgICAgICAgICAgICAgIChzdXBTaGlmdCAtIHN1cC5kZXB0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHBzaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwU2hpZnQgKz0gcHNpO1xuICAgICAgICAgICAgICAgICAgICBzdWJTaGlmdCAtPSBwc2k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdXBzdWIgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoW1xuICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogc3VibWlkLCBzaGlmdDogc3ViU2hpZnR9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogc3VwbWlkLCBzaGlmdDogLXN1cFNoaWZ0fVxuICAgICAgICAgICAgXSwgXCJpbmRpdmlkdWFsU2hpZnRcIiwgbnVsbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIFNlZSBjb21tZW50IGFib3ZlIGFib3V0IHN1YnNjcmlwdHMgbm90IGJlaW5nIHNoaWZ0ZWRcbiAgICAgICAgICAgIGlmIChiYXNlIGluc3RhbmNlb2YgZG9tVHJlZS5zeW1ib2xOb2RlKSB7XG4gICAgICAgICAgICAgICAgc3Vwc3ViLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpbkxlZnQgPSAtYmFzZS5pdGFsaWMgKyBcImVtXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1cHN1Yi5jaGlsZHJlblswXS5zdHlsZS5tYXJnaW5SaWdodCA9IHNjcmlwdHNwYWNlO1xuICAgICAgICAgICAgc3Vwc3ViLmNoaWxkcmVuWzFdLnN0eWxlLm1hcmdpblJpZ2h0ID0gc2NyaXB0c3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFrZVNwYW4oW2dldFR5cGVPZkdyb3VwKGdyb3VwLnZhbHVlLmJhc2UpXSxcbiAgICAgICAgICAgIFtiYXNlLCBzdXBzdWJdKTtcbiAgICB9LFxuXG4gICAgZ2VuZnJhYzogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgLy8gRnJhY3Rpb25zIGFyZSBoYW5kbGVkIGluIHRoZSBUZVhib29rIG9uIHBhZ2VzIDQ0NC00NDUsIHJ1bGVzIDE1KGEtZSkuXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hhdCBzdHlsZSB0aGlzIGZyYWN0aW9uIHNob3VsZCBiZSBpbiBiYXNlZCBvbiB0aGVcbiAgICAgICAgLy8gZnVuY3Rpb24gdXNlZFxuICAgICAgICB2YXIgZnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLnNpemUgPT09IFwiZGlzcGxheVwiKSB7XG4gICAgICAgICAgICBmc3R5bGUgPSBTdHlsZS5ESVNQTEFZO1xuICAgICAgICB9IGVsc2UgaWYgKGdyb3VwLnZhbHVlLnNpemUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICBmc3R5bGUgPSBTdHlsZS5URVhUO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5zdHlsZSA9IGZzdHlsZS5mcmFjTnVtKCk7XG4gICAgICAgIHZhciBkc3R5bGUgPSBmc3R5bGUuZnJhY0RlbigpO1xuXG4gICAgICAgIHZhciBudW1lciA9IGJ1aWxkR3JvdXAoZ3JvdXAudmFsdWUubnVtZXIsIG9wdGlvbnMud2l0aFN0eWxlKG5zdHlsZSkpO1xuICAgICAgICB2YXIgbnVtZXJyZXNldCA9IG1ha2VTcGFuKFtmc3R5bGUucmVzZXQoKSwgbnN0eWxlLmNscygpXSwgW251bWVyXSk7XG5cbiAgICAgICAgdmFyIGRlbm9tID0gYnVpbGRHcm91cChncm91cC52YWx1ZS5kZW5vbSwgb3B0aW9ucy53aXRoU3R5bGUoZHN0eWxlKSk7XG4gICAgICAgIHZhciBkZW5vbXJlc2V0ID0gbWFrZVNwYW4oW2ZzdHlsZS5yZXNldCgpLCBkc3R5bGUuY2xzKCldLCBbZGVub21dKTtcblxuICAgICAgICB2YXIgcnVsZVdpZHRoO1xuICAgICAgICBpZiAoZ3JvdXAudmFsdWUuaGFzQmFyTGluZSkge1xuICAgICAgICAgICAgcnVsZVdpZHRoID0gZm9udE1ldHJpY3MubWV0cmljcy5kZWZhdWx0UnVsZVRoaWNrbmVzcyAvXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJ1bGVXaWR0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdWxlIDE1YlxuICAgICAgICB2YXIgbnVtU2hpZnQ7XG4gICAgICAgIHZhciBjbGVhcmFuY2U7XG4gICAgICAgIHZhciBkZW5vbVNoaWZ0O1xuICAgICAgICBpZiAoZnN0eWxlLnNpemUgPT09IFN0eWxlLkRJU1BMQVkuc2l6ZSkge1xuICAgICAgICAgICAgbnVtU2hpZnQgPSBmb250TWV0cmljcy5tZXRyaWNzLm51bTE7XG4gICAgICAgICAgICBpZiAocnVsZVdpZHRoID4gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFyYW5jZSA9IDMgKiBydWxlV2lkdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFyYW5jZSA9IDcgKiBmb250TWV0cmljcy5tZXRyaWNzLmRlZmF1bHRSdWxlVGhpY2tuZXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVub21TaGlmdCA9IGZvbnRNZXRyaWNzLm1ldHJpY3MuZGVub20xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJ1bGVXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBudW1TaGlmdCA9IGZvbnRNZXRyaWNzLm1ldHJpY3MubnVtMjtcbiAgICAgICAgICAgICAgICBjbGVhcmFuY2UgPSBydWxlV2lkdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG51bVNoaWZ0ID0gZm9udE1ldHJpY3MubWV0cmljcy5udW0zO1xuICAgICAgICAgICAgICAgIGNsZWFyYW5jZSA9IDMgKiBmb250TWV0cmljcy5tZXRyaWNzLmRlZmF1bHRSdWxlVGhpY2tuZXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVub21TaGlmdCA9IGZvbnRNZXRyaWNzLm1ldHJpY3MuZGVub20yO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZyYWM7XG4gICAgICAgIGlmIChydWxlV2lkdGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIFJ1bGUgMTVjXG4gICAgICAgICAgICB2YXIgY2FuZGlhdGVDbGVhcmFuY2UgPVxuICAgICAgICAgICAgICAgIChudW1TaGlmdCAtIG51bWVyLmRlcHRoKSAtIChkZW5vbS5oZWlnaHQgLSBkZW5vbVNoaWZ0KTtcbiAgICAgICAgICAgIGlmIChjYW5kaWF0ZUNsZWFyYW5jZSA8IGNsZWFyYW5jZSkge1xuICAgICAgICAgICAgICAgIG51bVNoaWZ0ICs9IDAuNSAqIChjbGVhcmFuY2UgLSBjYW5kaWF0ZUNsZWFyYW5jZSk7XG4gICAgICAgICAgICAgICAgZGVub21TaGlmdCArPSAwLjUgKiAoY2xlYXJhbmNlIC0gY2FuZGlhdGVDbGVhcmFuY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcmFjID0gYnVpbGRDb21tb24ubWFrZVZMaXN0KFtcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IGRlbm9tcmVzZXQsIHNoaWZ0OiBkZW5vbVNoaWZ0fSxcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IG51bWVycmVzZXQsIHNoaWZ0OiAtbnVtU2hpZnR9XG4gICAgICAgICAgICBdLCBcImluZGl2aWR1YWxTaGlmdFwiLCBudWxsLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJ1bGUgMTVkXG4gICAgICAgICAgICB2YXIgYXhpc0hlaWdodCA9IGZvbnRNZXRyaWNzLm1ldHJpY3MuYXhpc0hlaWdodDtcblxuICAgICAgICAgICAgaWYgKChudW1TaGlmdCAtIG51bWVyLmRlcHRoKSAtIChheGlzSGVpZ2h0ICsgMC41ICogcnVsZVdpZHRoKVxuICAgICAgICAgICAgICAgICAgICA8IGNsZWFyYW5jZSkge1xuICAgICAgICAgICAgICAgIG51bVNoaWZ0ICs9XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyYW5jZSAtICgobnVtU2hpZnQgLSBudW1lci5kZXB0aCkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF4aXNIZWlnaHQgKyAwLjUgKiBydWxlV2lkdGgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKChheGlzSGVpZ2h0IC0gMC41ICogcnVsZVdpZHRoKSAtIChkZW5vbS5oZWlnaHQgLSBkZW5vbVNoaWZ0KVxuICAgICAgICAgICAgICAgICAgICA8IGNsZWFyYW5jZSkge1xuICAgICAgICAgICAgICAgIGRlbm9tU2hpZnQgKz1cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJhbmNlIC0gKChheGlzSGVpZ2h0IC0gMC41ICogcnVsZVdpZHRoKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVub20uaGVpZ2h0IC0gZGVub21TaGlmdCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWlkID0gbWFrZVNwYW4oXG4gICAgICAgICAgICAgICAgW29wdGlvbnMuc3R5bGUucmVzZXQoKSwgU3R5bGUuVEVYVC5jbHMoKSwgXCJmcmFjLWxpbmVcIl0pO1xuICAgICAgICAgICAgLy8gTWFudWFsbHkgc2V0IHRoZSBoZWlnaHQgb2YgdGhlIGxpbmUgYmVjYXVzZSBpdHMgaGVpZ2h0IGlzXG4gICAgICAgICAgICAvLyBjcmVhdGVkIGluIENTU1xuICAgICAgICAgICAgbWlkLmhlaWdodCA9IHJ1bGVXaWR0aDtcblxuICAgICAgICAgICAgdmFyIG1pZFNoaWZ0ID0gLShheGlzSGVpZ2h0IC0gMC41ICogcnVsZVdpZHRoKTtcblxuICAgICAgICAgICAgZnJhYyA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChbXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBkZW5vbXJlc2V0LCBzaGlmdDogZGVub21TaGlmdH0sXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBtaWQsICAgICAgICBzaGlmdDogbWlkU2hpZnR9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogbnVtZXJyZXNldCwgc2hpZnQ6IC1udW1TaGlmdH1cbiAgICAgICAgICAgIF0sIFwiaW5kaXZpZHVhbFNoaWZ0XCIsIG51bGwsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2luY2Ugd2UgbWFudWFsbHkgY2hhbmdlIHRoZSBzdHlsZSBzb21ldGltZXMgKHdpdGggXFxkZnJhYyBvciBcXHRmcmFjKSxcbiAgICAgICAgLy8gYWNjb3VudCBmb3IgdGhlIHBvc3NpYmxlIHNpemUgY2hhbmdlIGhlcmUuXG4gICAgICAgIGZyYWMuaGVpZ2h0ICo9IGZzdHlsZS5zaXplTXVsdGlwbGllciAvIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG4gICAgICAgIGZyYWMuZGVwdGggKj0gZnN0eWxlLnNpemVNdWx0aXBsaWVyIC8gb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcblxuICAgICAgICAvLyBSdWxlIDE1ZVxuICAgICAgICB2YXIgaW5uZXJDaGlsZHJlbiA9IFttYWtlU3BhbihbXCJtZnJhY1wiXSwgW2ZyYWNdKV07XG5cbiAgICAgICAgdmFyIGRlbGltU2l6ZTtcbiAgICAgICAgaWYgKGZzdHlsZS5zaXplID09PSBTdHlsZS5ESVNQTEFZLnNpemUpIHtcbiAgICAgICAgICAgIGRlbGltU2l6ZSA9IGZvbnRNZXRyaWNzLm1ldHJpY3MuZGVsaW0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsaW1TaXplID0gZm9udE1ldHJpY3MubWV0cmljcy5nZXREZWxpbTIoZnN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5sZWZ0RGVsaW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5uZXJDaGlsZHJlbi51bnNoaWZ0KFxuICAgICAgICAgICAgICAgIGRlbGltaXRlci5jdXN0b21TaXplZERlbGltKFxuICAgICAgICAgICAgICAgICAgICBncm91cC52YWx1ZS5sZWZ0RGVsaW0sIGRlbGltU2l6ZSwgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aXRoU3R5bGUoZnN0eWxlKSwgZ3JvdXAubW9kZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLnJpZ2h0RGVsaW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5uZXJDaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAgICAgIGRlbGltaXRlci5jdXN0b21TaXplZERlbGltKFxuICAgICAgICAgICAgICAgICAgICBncm91cC52YWx1ZS5yaWdodERlbGltLCBkZWxpbVNpemUsIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2l0aFN0eWxlKGZzdHlsZSksIGdyb3VwLm1vZGUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFxuICAgICAgICAgICAgW1wibWlubmVyXCIsIG9wdGlvbnMuc3R5bGUucmVzZXQoKSwgZnN0eWxlLmNscygpXSxcbiAgICAgICAgICAgIGlubmVyQ2hpbGRyZW4sXG4gICAgICAgICAgICBvcHRpb25zLmdldENvbG9yKCkpO1xuICAgIH0sXG5cbiAgICBzcGFjaW5nOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICBpZiAoZ3JvdXAudmFsdWUgPT09IFwiXFxcXCBcIiB8fCBncm91cC52YWx1ZSA9PT0gXCJcXFxcc3BhY2VcIiB8fFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUgPT09IFwiIFwiIHx8IGdyb3VwLnZhbHVlID09PSBcIn5cIikge1xuICAgICAgICAgICAgLy8gU3BhY2VzIGFyZSBnZW5lcmF0ZWQgYnkgYWRkaW5nIGFuIGFjdHVhbCBzcGFjZS4gRWFjaCBvZiB0aGVzZVxuICAgICAgICAgICAgLy8gdGhpbmdzIGhhcyBhbiBlbnRyeSBpbiB0aGUgc3ltYm9scyB0YWJsZSwgc28gdGhlc2Ugd2lsbCBiZSB0dXJuZWRcbiAgICAgICAgICAgIC8vIGludG8gYXBwcm9wcmlhdGUgb3V0cHV0cy5cbiAgICAgICAgICAgIHJldHVybiBtYWtlU3BhbihcbiAgICAgICAgICAgICAgICBbXCJtb3JkXCIsIFwibXNwYWNlXCJdLFxuICAgICAgICAgICAgICAgIFtidWlsZENvbW1vbi5tYXRocm0oZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyIGtpbmRzIG9mIHNwYWNlcyBhcmUgb2YgYXJiaXRyYXJ5IHdpZHRoLiBXZSB1c2UgQ1NTIHRvXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSB0aGVzZS5cbiAgICAgICAgICAgIHJldHVybiBtYWtlU3BhbihcbiAgICAgICAgICAgICAgICBbXCJtb3JkXCIsIFwibXNwYWNlXCIsXG4gICAgICAgICAgICAgICAgIGJ1aWxkQ29tbW9uLnNwYWNpbmdGdW5jdGlvbnNbZ3JvdXAudmFsdWVdLmNsYXNzTmFtZV0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGxsYXA6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHZhciBpbm5lciA9IG1ha2VTcGFuKFxuICAgICAgICAgICAgW1wiaW5uZXJcIl0sIFtidWlsZEdyb3VwKGdyb3VwLnZhbHVlLmJvZHksIG9wdGlvbnMucmVzZXQoKSldKTtcbiAgICAgICAgdmFyIGZpeCA9IG1ha2VTcGFuKFtcImZpeFwiXSwgW10pO1xuICAgICAgICByZXR1cm4gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJsbGFwXCIsIG9wdGlvbnMuc3R5bGUuY2xzKCldLCBbaW5uZXIsIGZpeF0pO1xuICAgIH0sXG5cbiAgICBybGFwOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICB2YXIgaW5uZXIgPSBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcImlubmVyXCJdLCBbYnVpbGRHcm91cChncm91cC52YWx1ZS5ib2R5LCBvcHRpb25zLnJlc2V0KCkpXSk7XG4gICAgICAgIHZhciBmaXggPSBtYWtlU3BhbihbXCJmaXhcIl0sIFtdKTtcbiAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFxuICAgICAgICAgICAgW1wicmxhcFwiLCBvcHRpb25zLnN0eWxlLmNscygpXSwgW2lubmVyLCBmaXhdKTtcbiAgICB9LFxuXG4gICAgb3A6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIC8vIE9wZXJhdG9ycyBhcmUgaGFuZGxlZCBpbiB0aGUgVGVYYm9vayBwZy4gNDQzLTQ0NCwgcnVsZSAxMyhhKS5cbiAgICAgICAgdmFyIHN1cEdyb3VwO1xuICAgICAgICB2YXIgc3ViR3JvdXA7XG4gICAgICAgIHZhciBoYXNMaW1pdHMgPSBmYWxzZTtcbiAgICAgICAgaWYgKGdyb3VwLnR5cGUgPT09IFwic3Vwc3ViXCIgKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGxpbWl0cywgc3Vwc3ViIHdpbGwgcGFzcyB1cyBpdHMgZ3JvdXAgdG8gaGFuZGxlLiBQdWxsXG4gICAgICAgICAgICAvLyBvdXQgdGhlIHN1cGVyc2NyaXB0IGFuZCBzdWJzY3JpcHQgYW5kIHNldCB0aGUgZ3JvdXAgdG8gdGhlIG9wIGluXG4gICAgICAgICAgICAvLyBpdHMgYmFzZS5cbiAgICAgICAgICAgIHN1cEdyb3VwID0gZ3JvdXAudmFsdWUuc3VwO1xuICAgICAgICAgICAgc3ViR3JvdXAgPSBncm91cC52YWx1ZS5zdWI7XG4gICAgICAgICAgICBncm91cCA9IGdyb3VwLnZhbHVlLmJhc2U7XG4gICAgICAgICAgICBoYXNMaW1pdHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW9zdCBvcGVyYXRvcnMgaGF2ZSBhIGxhcmdlIHN1Y2Nlc3NvciBzeW1ib2wsIGJ1dCB0aGVzZSBkb24ndC5cbiAgICAgICAgdmFyIG5vU3VjY2Vzc29yID0gW1xuICAgICAgICAgICAgXCJcXFxcc21hbGxpbnRcIlxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBsYXJnZSA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9ucy5zdHlsZS5zaXplID09PSBTdHlsZS5ESVNQTEFZLnNpemUgJiZcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLnN5bWJvbCAmJlxuICAgICAgICAgICAgIXV0aWxzLmNvbnRhaW5zKG5vU3VjY2Vzc29yLCBncm91cC52YWx1ZS5ib2R5KSkge1xuXG4gICAgICAgICAgICAvLyBNb3N0IHN5bWJvbCBvcGVyYXRvcnMgZ2V0IGxhcmdlciBpbiBkaXNwbGF5c3R5bGUgKHJ1bGUgMTMpXG4gICAgICAgICAgICBsYXJnZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYmFzZTtcbiAgICAgICAgdmFyIGJhc2VTaGlmdCA9IDA7XG4gICAgICAgIHZhciBzbGFudCA9IDA7XG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBzeW1ib2wsIGNyZWF0ZSB0aGUgc3ltYm9sLlxuICAgICAgICAgICAgdmFyIHN0eWxlID0gbGFyZ2UgPyBcIlNpemUyLVJlZ3VsYXJcIiA6IFwiU2l6ZTEtUmVndWxhclwiO1xuICAgICAgICAgICAgYmFzZSA9IGJ1aWxkQ29tbW9uLm1ha2VTeW1ib2woXG4gICAgICAgICAgICAgICAgZ3JvdXAudmFsdWUuYm9keSwgc3R5bGUsIFwibWF0aFwiLCBvcHRpb25zLmdldENvbG9yKCksXG4gICAgICAgICAgICAgICAgW1wib3Atc3ltYm9sXCIsIGxhcmdlID8gXCJsYXJnZS1vcFwiIDogXCJzbWFsbC1vcFwiLCBcIm1vcFwiXSk7XG5cbiAgICAgICAgICAgIC8vIFNoaWZ0IHRoZSBzeW1ib2wgc28gaXRzIGNlbnRlciBsaWVzIG9uIHRoZSBheGlzIChydWxlIDEzKS4gSXRcbiAgICAgICAgICAgIC8vIGFwcGVhcnMgdGhhdCBvdXIgZm9udHMgaGF2ZSB0aGUgY2VudGVycyBvZiB0aGUgc3ltYm9scyBhbHJlYWR5XG4gICAgICAgICAgICAvLyBhbG1vc3Qgb24gdGhlIGF4aXMsIHNvIHRoZXNlIG51bWJlcnMgYXJlIHZlcnkgc21hbGwuIE5vdGUgd2VcbiAgICAgICAgICAgIC8vIGRvbid0IGFjdHVhbGx5IGFwcGx5IHRoaXMgaGVyZSwgYnV0IGluc3RlYWQgaXQgaXMgdXNlZCBlaXRoZXIgaW5cbiAgICAgICAgICAgIC8vIHRoZSB2bGlzdCBjcmVhdGlvbiBvciBzZXBhcmF0ZWx5IHdoZW4gdGhlcmUgYXJlIG5vIGxpbWl0cy5cbiAgICAgICAgICAgIGJhc2VTaGlmdCA9IChiYXNlLmhlaWdodCAtIGJhc2UuZGVwdGgpIC8gMiAtXG4gICAgICAgICAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5heGlzSGVpZ2h0ICpcbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICAvLyBUaGUgc2xhbnQgb2YgdGhlIHN5bWJvbCBpcyBqdXN0IGl0cyBpdGFsaWMgY29ycmVjdGlvbi5cbiAgICAgICAgICAgIHNsYW50ID0gYmFzZS5pdGFsaWM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgaXMgYSB0ZXh0IG9wZXJhdG9yLiBCdWlsZCB0aGUgdGV4dCBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gb3BlcmF0b3IncyBuYW1lLlxuICAgICAgICAgICAgLy8gVE9ETyhlbWlseSk6IEFkZCBhIHNwYWNlIGluIHRoZSBtaWRkbGUgb2Ygc29tZSBvZiB0aGVzZVxuICAgICAgICAgICAgLy8gb3BlcmF0b3JzLCBsaWtlIFxcbGltc3VwXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGdyb3VwLnZhbHVlLmJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChidWlsZENvbW1vbi5tYXRocm0oZ3JvdXAudmFsdWUuYm9keVtpXSwgZ3JvdXAubW9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmFzZSA9IG1ha2VTcGFuKFtcIm1vcFwiXSwgb3V0cHV0LCBvcHRpb25zLmdldENvbG9yKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc0xpbWl0cykge1xuICAgICAgICAgICAgLy8gSUUgOCBjbGlwcyBcXGludCBpZiBpdCBpcyBpbiBhIGRpc3BsYXk6IGlubGluZS1ibG9jay4gV2Ugd3JhcCBpdFxuICAgICAgICAgICAgLy8gaW4gYSBuZXcgc3BhbiBzbyBpdCBpcyBhbiBpbmxpbmUsIGFuZCB3b3Jrcy5cbiAgICAgICAgICAgIGJhc2UgPSBtYWtlU3BhbihbXSwgW2Jhc2VdKTtcblxuICAgICAgICAgICAgdmFyIHN1cG1pZCwgc3VwS2Vybiwgc3VibWlkLCBzdWJLZXJuO1xuICAgICAgICAgICAgLy8gV2UgbWFudWFsbHkgaGF2ZSB0byBoYW5kbGUgdGhlIHN1cGVyc2NyaXB0cyBhbmQgc3Vic2NyaXB0cy4gVGhpcyxcbiAgICAgICAgICAgIC8vIGFzaWRlIGZyb20gdGhlIGtlcm4gY2FsY3VsYXRpb25zLCBpcyBjb3BpZWQgZnJvbSBzdXBzdWIuXG4gICAgICAgICAgICBpZiAoc3VwR3JvdXApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwID0gYnVpbGRHcm91cChcbiAgICAgICAgICAgICAgICAgICAgc3VwR3JvdXAsIG9wdGlvbnMud2l0aFN0eWxlKG9wdGlvbnMuc3R5bGUuc3VwKCkpKTtcbiAgICAgICAgICAgICAgICBzdXBtaWQgPSBtYWtlU3BhbihcbiAgICAgICAgICAgICAgICAgICAgW29wdGlvbnMuc3R5bGUucmVzZXQoKSwgb3B0aW9ucy5zdHlsZS5zdXAoKS5jbHMoKV0sIFtzdXBdKTtcblxuICAgICAgICAgICAgICAgIHN1cEtlcm4gPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5iaWdPcFNwYWNpbmcxLFxuICAgICAgICAgICAgICAgICAgICBmb250TWV0cmljcy5tZXRyaWNzLmJpZ09wU3BhY2luZzMgLSBzdXAuZGVwdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3ViR3JvdXApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gYnVpbGRHcm91cChcbiAgICAgICAgICAgICAgICAgICAgc3ViR3JvdXAsIG9wdGlvbnMud2l0aFN0eWxlKG9wdGlvbnMuc3R5bGUuc3ViKCkpKTtcbiAgICAgICAgICAgICAgICBzdWJtaWQgPSBtYWtlU3BhbihcbiAgICAgICAgICAgICAgICAgICAgW29wdGlvbnMuc3R5bGUucmVzZXQoKSwgb3B0aW9ucy5zdHlsZS5zdWIoKS5jbHMoKV0sXG4gICAgICAgICAgICAgICAgICAgIFtzdWJdKTtcblxuICAgICAgICAgICAgICAgIHN1Yktlcm4gPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5iaWdPcFNwYWNpbmcyLFxuICAgICAgICAgICAgICAgICAgICBmb250TWV0cmljcy5tZXRyaWNzLmJpZ09wU3BhY2luZzQgLSBzdWIuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIGZpbmFsIGdyb3VwIGFzIGEgdmxpc3Qgb2YgdGhlIHBvc3NpYmxlIHN1YnNjcmlwdCwgYmFzZSxcbiAgICAgICAgICAgIC8vIGFuZCBwb3NzaWJsZSBzdXBlcnNjcmlwdC5cbiAgICAgICAgICAgIHZhciBmaW5hbEdyb3VwLCB0b3AsIGJvdHRvbTtcbiAgICAgICAgICAgIGlmICghc3VwR3JvdXApIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBiYXNlLmhlaWdodCAtIGJhc2VTaGlmdDtcblxuICAgICAgICAgICAgICAgIGZpbmFsR3JvdXAgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoW1xuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IGZvbnRNZXRyaWNzLm1ldHJpY3MuYmlnT3BTcGFjaW5nNX0sXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogc3VibWlkfSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiBzdWJLZXJufSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBiYXNlfVxuICAgICAgICAgICAgICAgIF0sIFwidG9wXCIsIHRvcCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBIZXJlLCB3ZSBzaGlmdCB0aGUgbGltaXRzIGJ5IHRoZSBzbGFudCBvZiB0aGUgc3ltYm9sLiBOb3RlXG4gICAgICAgICAgICAgICAgLy8gdGhhdCB3ZSBhcmUgc3VwcG9zZWQgdG8gc2hpZnQgdGhlIGxpbWl0cyBieSAxLzIgb2YgdGhlIHNsYW50LFxuICAgICAgICAgICAgICAgIC8vIGJ1dCBzaW5jZSB3ZSBhcmUgY2VudGVyaW5nIHRoZSBsaW1pdHMgYWRkaW5nIGEgZnVsbCBzbGFudCBvZlxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbiB3aWxsIHNoaWZ0IGJ5IDEvMiB0aGF0LlxuICAgICAgICAgICAgICAgIGZpbmFsR3JvdXAuY2hpbGRyZW5bMF0uc3R5bGUubWFyZ2luTGVmdCA9IC1zbGFudCArIFwiZW1cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN1Ykdyb3VwKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gYmFzZS5kZXB0aCArIGJhc2VTaGlmdDtcblxuICAgICAgICAgICAgICAgIGZpbmFsR3JvdXAgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoW1xuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IGJhc2V9LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IHN1cEtlcm59LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IHN1cG1pZH0sXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogZm9udE1ldHJpY3MubWV0cmljcy5iaWdPcFNwYWNpbmc1fVxuICAgICAgICAgICAgICAgIF0sIFwiYm90dG9tXCIsIGJvdHRvbSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWUgY29tbWVudCBhYm92ZSBhYm91dCBzbGFudHNcbiAgICAgICAgICAgICAgICBmaW5hbEdyb3VwLmNoaWxkcmVuWzFdLnN0eWxlLm1hcmdpbkxlZnQgPSBzbGFudCArIFwiZW1cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN1cEdyb3VwICYmICFzdWJHcm91cCkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FzZSBwcm9iYWJseSBzaG91bGRuJ3Qgb2NjdXIgKHRoaXMgd291bGQgbWVhbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBzdXBzdWIgd2FzIHNlbmRpbmcgdXMgYSBncm91cCB3aXRoIG5vIHN1cGVyc2NyaXB0IG9yXG4gICAgICAgICAgICAgICAgLy8gc3Vic2NyaXB0KSBidXQgYmUgc2FmZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gZm9udE1ldHJpY3MubWV0cmljcy5iaWdPcFNwYWNpbmc1ICtcbiAgICAgICAgICAgICAgICAgICAgc3VibWlkLmhlaWdodCArIHN1Ym1pZC5kZXB0aCArXG4gICAgICAgICAgICAgICAgICAgIHN1Yktlcm4gK1xuICAgICAgICAgICAgICAgICAgICBiYXNlLmRlcHRoICsgYmFzZVNoaWZ0O1xuXG4gICAgICAgICAgICAgICAgZmluYWxHcm91cCA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChbXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogZm9udE1ldHJpY3MubWV0cmljcy5iaWdPcFNwYWNpbmc1fSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBzdWJtaWR9LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IHN1Yktlcm59LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IGJhc2V9LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IHN1cEtlcm59LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IHN1cG1pZH0sXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogZm9udE1ldHJpY3MubWV0cmljcy5iaWdPcFNwYWNpbmc1fVxuICAgICAgICAgICAgICAgIF0sIFwiYm90dG9tXCIsIGJvdHRvbSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWUgY29tbWVudCBhYm92ZSBhYm91dCBzbGFudHNcbiAgICAgICAgICAgICAgICBmaW5hbEdyb3VwLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpbkxlZnQgPSAtc2xhbnQgKyBcImVtXCI7XG4gICAgICAgICAgICAgICAgZmluYWxHcm91cC5jaGlsZHJlblsyXS5zdHlsZS5tYXJnaW5MZWZ0ID0gc2xhbnQgKyBcImVtXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYWtlU3BhbihbXCJtb3BcIiwgXCJvcC1saW1pdHNcIl0sIFtmaW5hbEdyb3VwXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZ3JvdXAudmFsdWUuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgYmFzZS5zdHlsZS50b3AgPSBiYXNlU2hpZnQgKyBcImVtXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBiYXNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGthdGV4OiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBUaGUgS2FUZVggbG9nby4gVGhlIG9mZnNldHMgZm9yIHRoZSBLIGFuZCBhIHdlcmUgY2hvc2VuIHRvIGxvb2tcbiAgICAgICAgLy8gZ29vZCwgYnV0IHRoZSBvZmZzZXRzIGZvciB0aGUgVCwgRSwgYW5kIFggd2VyZSB0YWtlbiBmcm9tIHRoZVxuICAgICAgICAvLyBkZWZpbml0aW9uIG9mIFxcVGVYIGluIFRlWCAoc2VlIFRlWGJvb2sgcGcuIDM1NilcbiAgICAgICAgdmFyIGsgPSBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcImtcIl0sIFtidWlsZENvbW1vbi5tYXRocm0oXCJLXCIsIGdyb3VwLm1vZGUpXSk7XG4gICAgICAgIHZhciBhID0gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJhXCJdLCBbYnVpbGRDb21tb24ubWF0aHJtKFwiQVwiLCBncm91cC5tb2RlKV0pO1xuXG4gICAgICAgIGEuaGVpZ2h0ID0gKGEuaGVpZ2h0ICsgMC4yKSAqIDAuNzU7XG4gICAgICAgIGEuZGVwdGggPSAoYS5oZWlnaHQgLSAwLjIpICogMC43NTtcblxuICAgICAgICB2YXIgdCA9IG1ha2VTcGFuKFxuICAgICAgICAgICAgW1widFwiXSwgW2J1aWxkQ29tbW9uLm1hdGhybShcIlRcIiwgZ3JvdXAubW9kZSldKTtcbiAgICAgICAgdmFyIGUgPSBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcImVcIl0sIFtidWlsZENvbW1vbi5tYXRocm0oXCJFXCIsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgZS5oZWlnaHQgPSAoZS5oZWlnaHQgLSAwLjIxNTUpO1xuICAgICAgICBlLmRlcHRoID0gKGUuZGVwdGggKyAwLjIxNTUpO1xuXG4gICAgICAgIHZhciB4ID0gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJ4XCJdLCBbYnVpbGRDb21tb24ubWF0aHJtKFwiWFwiLCBncm91cC5tb2RlKV0pO1xuXG4gICAgICAgIHJldHVybiBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcImthdGV4LWxvZ29cIl0sIFtrLCBhLCB0LCBlLCB4XSwgb3B0aW9ucy5nZXRDb2xvcigpKTtcbiAgICB9LFxuXG4gICAgb3ZlcmxpbmU6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIC8vIE92ZXJsaW5lcyBhcmUgaGFuZGxlZCBpbiB0aGUgVGVYYm9vayBwZyA0NDMsIFJ1bGUgOS5cblxuICAgICAgICAvLyBCdWlsZCB0aGUgaW5uZXIgZ3JvdXAgaW4gdGhlIGNyYW1wZWQgc3R5bGUuXG4gICAgICAgIHZhciBpbm5lckdyb3VwID0gYnVpbGRHcm91cChncm91cC52YWx1ZS5ib2R5LFxuICAgICAgICAgICAgICAgIG9wdGlvbnMud2l0aFN0eWxlKG9wdGlvbnMuc3R5bGUuY3JhbXAoKSkpO1xuXG4gICAgICAgIHZhciBydWxlV2lkdGggPSBmb250TWV0cmljcy5tZXRyaWNzLmRlZmF1bHRSdWxlVGhpY2tuZXNzIC9cbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaW5lIGFib3ZlIHRoZSBib2R5XG4gICAgICAgIHZhciBsaW5lID0gbWFrZVNwYW4oXG4gICAgICAgICAgICBbb3B0aW9ucy5zdHlsZS5yZXNldCgpLCBTdHlsZS5URVhULmNscygpLCBcIm92ZXJsaW5lLWxpbmVcIl0pO1xuICAgICAgICBsaW5lLmhlaWdodCA9IHJ1bGVXaWR0aDtcbiAgICAgICAgbGluZS5tYXhGb250U2l6ZSA9IDEuMDtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgdmxpc3QsIHdpdGggdGhlIGFwcHJvcHJpYXRlIGtlcm5zXG4gICAgICAgIHZhciB2bGlzdCA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChbXG4gICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IGlubmVyR3JvdXB9LFxuICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiAzICogcnVsZVdpZHRofSxcbiAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogbGluZX0sXG4gICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IHJ1bGVXaWR0aH1cbiAgICAgICAgXSwgXCJmaXJzdEJhc2VsaW5lXCIsIG51bGwsIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiBtYWtlU3BhbihbXCJvdmVybGluZVwiLCBcIm1vcmRcIl0sIFt2bGlzdF0sIG9wdGlvbnMuZ2V0Q29sb3IoKSk7XG4gICAgfSxcblxuICAgIHNxcnQ6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIC8vIFNxdWFyZSByb290cyBhcmUgaGFuZGxlZCBpbiB0aGUgVGVYYm9vayBwZy4gNDQzLCBSdWxlIDExLlxuXG4gICAgICAgIC8vIEZpcnN0LCB3ZSBkbyB0aGUgc2FtZSBzdGVwcyBhcyBpbiBvdmVybGluZSB0byBidWlsZCB0aGUgaW5uZXIgZ3JvdXBcbiAgICAgICAgLy8gYW5kIGxpbmVcbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRHcm91cChncm91cC52YWx1ZS5ib2R5LFxuICAgICAgICAgICAgICAgIG9wdGlvbnMud2l0aFN0eWxlKG9wdGlvbnMuc3R5bGUuY3JhbXAoKSkpO1xuXG4gICAgICAgIHZhciBydWxlV2lkdGggPSBmb250TWV0cmljcy5tZXRyaWNzLmRlZmF1bHRSdWxlVGhpY2tuZXNzIC9cbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG5cbiAgICAgICAgdmFyIGxpbmUgPSBtYWtlU3BhbihcbiAgICAgICAgICAgIFtvcHRpb25zLnN0eWxlLnJlc2V0KCksIFN0eWxlLlRFWFQuY2xzKCksIFwic3FydC1saW5lXCJdLCBbXSxcbiAgICAgICAgICAgIG9wdGlvbnMuZ2V0Q29sb3IoKSk7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gcnVsZVdpZHRoO1xuICAgICAgICBsaW5lLm1heEZvbnRTaXplID0gMS4wO1xuXG4gICAgICAgIHZhciBwaGkgPSBydWxlV2lkdGg7XG4gICAgICAgIGlmIChvcHRpb25zLnN0eWxlLmlkIDwgU3R5bGUuVEVYVC5pZCkge1xuICAgICAgICAgICAgcGhpID0gZm9udE1ldHJpY3MubWV0cmljcy54SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBjbGVhcmFuY2UgYmV0d2VlbiB0aGUgYm9keSBhbmQgbGluZVxuICAgICAgICB2YXIgbGluZUNsZWFyYW5jZSA9IHJ1bGVXaWR0aCArIHBoaSAvIDQ7XG5cbiAgICAgICAgdmFyIGlubmVySGVpZ2h0ID1cbiAgICAgICAgICAgIChpbm5lci5oZWlnaHQgKyBpbm5lci5kZXB0aCkgKiBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuICAgICAgICB2YXIgbWluRGVsaW1pdGVySGVpZ2h0ID0gaW5uZXJIZWlnaHQgKyBsaW5lQ2xlYXJhbmNlICsgcnVsZVdpZHRoO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIFxcc3VyZCBkZWxpbWl0ZXIgb2YgdGhlIHJlcXVpcmVkIG1pbmltdW0gc2l6ZVxuICAgICAgICB2YXIgZGVsaW0gPSBtYWtlU3BhbihbXCJzcXJ0LXNpZ25cIl0sIFtcbiAgICAgICAgICAgIGRlbGltaXRlci5jdXN0b21TaXplZERlbGltKFwiXFxcXHN1cmRcIiwgbWluRGVsaW1pdGVySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIG9wdGlvbnMsIGdyb3VwLm1vZGUpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5nZXRDb2xvcigpKTtcblxuICAgICAgICB2YXIgZGVsaW1EZXB0aCA9IChkZWxpbS5oZWlnaHQgKyBkZWxpbS5kZXB0aCkgLSBydWxlV2lkdGg7XG5cbiAgICAgICAgLy8gQWRqdXN0IHRoZSBjbGVhcmFuY2UgYmFzZWQgb24gdGhlIGRlbGltaXRlciBzaXplXG4gICAgICAgIGlmIChkZWxpbURlcHRoID4gaW5uZXIuaGVpZ2h0ICsgaW5uZXIuZGVwdGggKyBsaW5lQ2xlYXJhbmNlKSB7XG4gICAgICAgICAgICBsaW5lQ2xlYXJhbmNlID1cbiAgICAgICAgICAgICAgICAobGluZUNsZWFyYW5jZSArIGRlbGltRGVwdGggLSBpbm5lci5oZWlnaHQgLSBpbm5lci5kZXB0aCkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hpZnQgdGhlIGRlbGltaXRlciBzbyB0aGF0IGl0cyB0b3AgbGluZXMgdXAgd2l0aCB0aGUgdG9wIG9mIHRoZSBsaW5lXG4gICAgICAgIHZhciBkZWxpbVNoaWZ0ID0gLShpbm5lci5oZWlnaHQgKyBsaW5lQ2xlYXJhbmNlICsgcnVsZVdpZHRoKSArIGRlbGltLmhlaWdodDtcbiAgICAgICAgZGVsaW0uc3R5bGUudG9wID0gZGVsaW1TaGlmdCArIFwiZW1cIjtcbiAgICAgICAgZGVsaW0uaGVpZ2h0IC09IGRlbGltU2hpZnQ7XG4gICAgICAgIGRlbGltLmRlcHRoICs9IGRlbGltU2hpZnQ7XG5cbiAgICAgICAgLy8gV2UgYWRkIGEgc3BlY2lhbCBjYXNlIGhlcmUsIGJlY2F1c2UgZXZlbiB3aGVuIGBpbm5lcmAgaXMgZW1wdHksIHdlXG4gICAgICAgIC8vIHN0aWxsIGdldCBhIGxpbmUuIFNvLCB3ZSB1c2UgYSBzaW1wbGUgaGV1cmlzdGljIHRvIGRlY2lkZSBpZiB3ZVxuICAgICAgICAvLyBzaG91bGQgb21pdCB0aGUgYm9keSBlbnRpcmVseS4gKG5vdGUgdGhpcyBkb2Vzbid0IHdvcmsgZm9yIHNvbWV0aGluZ1xuICAgICAgICAvLyBsaWtlIGBcXHNxcnR7XFxybGFwe3h9fWAsIGJ1dCBpZiBzb21lb25lIGlzIGRvaW5nIHRoYXQgdGhleSBkZXNlcnZlIGZvclxuICAgICAgICAvLyBpdCBub3QgdG8gd29yay5cbiAgICAgICAgdmFyIGJvZHk7XG4gICAgICAgIGlmIChpbm5lci5oZWlnaHQgPT09IDAgJiYgaW5uZXIuZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIGJvZHkgPSBtYWtlU3BhbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keSA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChbXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBpbm5lcn0sXG4gICAgICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiBsaW5lQ2xlYXJhbmNlfSxcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IGxpbmV9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogcnVsZVdpZHRofVxuICAgICAgICAgICAgXSwgXCJmaXJzdEJhc2VsaW5lXCIsIG51bGwsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFtcInNxcnRcIiwgXCJtb3JkXCJdLCBbZGVsaW0sIGJvZHldKTtcbiAgICB9LFxuXG4gICAgc2l6aW5nOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBIYW5kbGUgc2l6aW5nIG9wZXJhdG9ycyBsaWtlIFxcSHVnZS4gUmVhbCBUZVggZG9lc24ndCBhY3R1YWxseSBhbGxvd1xuICAgICAgICAvLyB0aGVzZSBmdW5jdGlvbnMgaW5zaWRlIG9mIG1hdGggZXhwcmVzc2lvbnMsIHNvIHdlIGRvIHNvbWUgc3BlY2lhbFxuICAgICAgICAvLyBoYW5kbGluZy5cbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMud2l0aFNpemUoZ3JvdXAudmFsdWUuc2l6ZSksIHByZXYpO1xuXG4gICAgICAgIHZhciBzcGFuID0gbWFrZVNwYW4oW1wibW9yZFwiXSxcbiAgICAgICAgICAgIFttYWtlU3BhbihbXCJzaXppbmdcIiwgXCJyZXNldC1cIiArIG9wdGlvbnMuc2l6ZSwgZ3JvdXAudmFsdWUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zdHlsZS5jbHMoKV0sXG4gICAgICAgICAgICAgICAgICAgICAgaW5uZXIpXSk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBjb3JyZWN0IG1heEZvbnRTaXplIG1hbnVhbGx5XG4gICAgICAgIHZhciBmb250U2l6ZSA9IGJ1aWxkQ29tbW9uLnNpemluZ011bHRpcGxpZXJbZ3JvdXAudmFsdWUuc2l6ZV07XG4gICAgICAgIHNwYW4ubWF4Rm9udFNpemUgPSBmb250U2l6ZSAqIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG5cbiAgICAgICAgcmV0dXJuIHNwYW47XG4gICAgfSxcblxuICAgIHN0eWxpbmc6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIC8vIFN0eWxlIGNoYW5nZXMgYXJlIGhhbmRsZWQgaW4gdGhlIFRlWGJvb2sgb24gcGcuIDQ0MiwgUnVsZSAzLlxuXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hhdCBzdHlsZSB3ZSdyZSBjaGFuZ2luZyB0by5cbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFN0eWxlLkRJU1BMQVksXG4gICAgICAgICAgICBcInRleHRcIjogU3R5bGUuVEVYVCxcbiAgICAgICAgICAgIFwic2NyaXB0XCI6IFN0eWxlLlNDUklQVCxcbiAgICAgICAgICAgIFwic2NyaXB0c2NyaXB0XCI6IFN0eWxlLlNDUklQVFNDUklQVFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBuZXdTdHlsZSA9IHN0eWxlW2dyb3VwLnZhbHVlLnN0eWxlXTtcblxuICAgICAgICAvLyBCdWlsZCB0aGUgaW5uZXIgZXhwcmVzc2lvbiBpbiB0aGUgbmV3IHN0eWxlLlxuICAgICAgICB2YXIgaW5uZXIgPSBidWlsZEV4cHJlc3Npb24oXG4gICAgICAgICAgICBncm91cC52YWx1ZS52YWx1ZSwgb3B0aW9ucy53aXRoU3R5bGUobmV3U3R5bGUpLCBwcmV2KTtcblxuICAgICAgICByZXR1cm4gbWFrZVNwYW4oW29wdGlvbnMuc3R5bGUucmVzZXQoKSwgbmV3U3R5bGUuY2xzKCldLCBpbm5lcik7XG4gICAgfSxcblxuICAgIGRlbGltc2l6aW5nOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICB2YXIgZGVsaW0gPSBncm91cC52YWx1ZS52YWx1ZTtcblxuICAgICAgICBpZiAoZGVsaW0gPT09IFwiLlwiKSB7XG4gICAgICAgICAgICAvLyBFbXB0eSBkZWxpbWl0ZXJzIHN0aWxsIGNvdW50IGFzIGVsZW1lbnRzLCBldmVuIHRob3VnaCB0aGV5IGRvbid0XG4gICAgICAgICAgICAvLyBzaG93IGFueXRoaW5nLlxuICAgICAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFtncm91cFRvVHlwZVtncm91cC52YWx1ZS5kZWxpbVR5cGVdXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVc2UgZGVsaW1pdGVyLnNpemVkRGVsaW0gdG8gZ2VuZXJhdGUgdGhlIGRlbGltaXRlci5cbiAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFxuICAgICAgICAgICAgW2dyb3VwVG9UeXBlW2dyb3VwLnZhbHVlLmRlbGltVHlwZV1dLFxuICAgICAgICAgICAgW2RlbGltaXRlci5zaXplZERlbGltKFxuICAgICAgICAgICAgICAgIGRlbGltLCBncm91cC52YWx1ZS5zaXplLCBvcHRpb25zLCBncm91cC5tb2RlKV0pO1xuICAgIH0sXG5cbiAgICBsZWZ0cmlnaHQ6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIC8vIEJ1aWxkIHRoZSBpbm5lciBleHByZXNzaW9uXG4gICAgICAgIHZhciBpbm5lciA9IGJ1aWxkRXhwcmVzc2lvbihncm91cC52YWx1ZS5ib2R5LCBvcHRpb25zLnJlc2V0KCkpO1xuXG4gICAgICAgIHZhciBpbm5lckhlaWdodCA9IDA7XG4gICAgICAgIHZhciBpbm5lckRlcHRoID0gMDtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgaXRzIGhlaWdodCBhbmQgZGVwdGhcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbm5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5uZXJIZWlnaHQgPSBNYXRoLm1heChpbm5lcltpXS5oZWlnaHQsIGlubmVySGVpZ2h0KTtcbiAgICAgICAgICAgIGlubmVyRGVwdGggPSBNYXRoLm1heChpbm5lcltpXS5kZXB0aCwgaW5uZXJEZXB0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgc2l6ZSBvZiBkZWxpbWl0ZXJzIGlzIHRoZSBzYW1lLCByZWdhcmRsZXNzIG9mIHdoYXQgc3R5bGUgd2UgYXJlXG4gICAgICAgIC8vIGluLiBUaHVzLCB0byBjb3JyZWN0bHkgY2FsY3VsYXRlIHRoZSBzaXplIG9mIGRlbGltaXRlciB3ZSBuZWVkIGFyb3VuZFxuICAgICAgICAvLyBhIGdyb3VwLCB3ZSBzY2FsZSBkb3duIHRoZSBpbm5lciBzaXplIGJhc2VkIG9uIHRoZSBzaXplLlxuICAgICAgICBpbm5lckhlaWdodCAqPSBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuICAgICAgICBpbm5lckRlcHRoICo9IG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG5cbiAgICAgICAgdmFyIGxlZnREZWxpbTtcbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLmxlZnQgPT09IFwiLlwiKSB7XG4gICAgICAgICAgICAvLyBFbXB0eSBkZWxpbWl0ZXJzIGluIFxcbGVmdCBhbmQgXFxyaWdodCBtYWtlIG51bGwgZGVsaW1pdGVyIHNwYWNlcy5cbiAgICAgICAgICAgIGxlZnREZWxpbSA9IG1ha2VTcGFuKFtcIm51bGxkZWxpbWl0ZXJcIl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgbGVmdFJpZ2h0RGVsaW0gdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3Qgc2l6ZWRcbiAgICAgICAgICAgIC8vIGRlbGltaXRlci5cbiAgICAgICAgICAgIGxlZnREZWxpbSA9IGRlbGltaXRlci5sZWZ0UmlnaHREZWxpbShcbiAgICAgICAgICAgICAgICBncm91cC52YWx1ZS5sZWZ0LCBpbm5lckhlaWdodCwgaW5uZXJEZXB0aCwgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBncm91cC5tb2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgZXhwcmVzc2lvblxuICAgICAgICBpbm5lci51bnNoaWZ0KGxlZnREZWxpbSk7XG5cbiAgICAgICAgdmFyIHJpZ2h0RGVsaW07XG4gICAgICAgIC8vIFNhbWUgZm9yIHRoZSByaWdodCBkZWxpbWl0ZXJcbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLnJpZ2h0ID09PSBcIi5cIikge1xuICAgICAgICAgICAgcmlnaHREZWxpbSA9IG1ha2VTcGFuKFtcIm51bGxkZWxpbWl0ZXJcIl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmlnaHREZWxpbSA9IGRlbGltaXRlci5sZWZ0UmlnaHREZWxpbShcbiAgICAgICAgICAgICAgICBncm91cC52YWx1ZS5yaWdodCwgaW5uZXJIZWlnaHQsIGlubmVyRGVwdGgsIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZ3JvdXAubW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBlbmQgb2YgdGhlIGV4cHJlc3Npb24uXG4gICAgICAgIGlubmVyLnB1c2gocmlnaHREZWxpbSk7XG5cbiAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFxuICAgICAgICAgICAgW1wibWlubmVyXCIsIG9wdGlvbnMuc3R5bGUuY2xzKCldLCBpbm5lciwgb3B0aW9ucy5nZXRDb2xvcigpKTtcbiAgICB9LFxuXG4gICAgcnVsZTogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgLy8gTWFrZSBhbiBlbXB0eSBzcGFuIGZvciB0aGUgcnVsZVxuICAgICAgICB2YXIgcnVsZSA9IG1ha2VTcGFuKFtcIm1vcmRcIiwgXCJydWxlXCJdLCBbXSwgb3B0aW9ucy5nZXRDb2xvcigpKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHNoaWZ0LCB3aWR0aCwgYW5kIGhlaWdodCBvZiB0aGUgcnVsZSwgYW5kIGFjY291bnQgZm9yIHVuaXRzXG4gICAgICAgIHZhciBzaGlmdCA9IDA7XG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zaGlmdCkge1xuICAgICAgICAgICAgc2hpZnQgPSBncm91cC52YWx1ZS5zaGlmdC5udW1iZXI7XG4gICAgICAgICAgICBpZiAoZ3JvdXAudmFsdWUuc2hpZnQudW5pdCA9PT0gXCJleFwiKSB7XG4gICAgICAgICAgICAgICAgc2hpZnQgKj0gZm9udE1ldHJpY3MubWV0cmljcy54SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdpZHRoID0gZ3JvdXAudmFsdWUud2lkdGgubnVtYmVyO1xuICAgICAgICBpZiAoZ3JvdXAudmFsdWUud2lkdGgudW5pdCA9PT0gXCJleFwiKSB7XG4gICAgICAgICAgICB3aWR0aCAqPSBmb250TWV0cmljcy5tZXRyaWNzLnhIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGVpZ2h0ID0gZ3JvdXAudmFsdWUuaGVpZ2h0Lm51bWJlcjtcbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLmhlaWdodC51bml0ID09PSBcImV4XCIpIHtcbiAgICAgICAgICAgIGhlaWdodCAqPSBmb250TWV0cmljcy5tZXRyaWNzLnhIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgc2l6ZXMgb2YgcnVsZXMgYXJlIGFic29sdXRlLCBzbyBtYWtlIGl0IGxhcmdlciBpZiB3ZSBhcmUgaW4gYVxuICAgICAgICAvLyBzbWFsbGVyIHN0eWxlLlxuICAgICAgICBzaGlmdCAvPSBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuICAgICAgICB3aWR0aCAvPSBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuICAgICAgICBoZWlnaHQgLz0gb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcblxuICAgICAgICAvLyBTdHlsZSB0aGUgcnVsZSB0byB0aGUgcmlnaHQgc2l6ZVxuICAgICAgICBydWxlLnN0eWxlLmJvcmRlclJpZ2h0V2lkdGggPSB3aWR0aCArIFwiZW1cIjtcbiAgICAgICAgcnVsZS5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IGhlaWdodCArIFwiZW1cIjtcbiAgICAgICAgcnVsZS5zdHlsZS5ib3R0b20gPSBzaGlmdCArIFwiZW1cIjtcblxuICAgICAgICAvLyBSZWNvcmQgdGhlIGhlaWdodCBhbmQgd2lkdGhcbiAgICAgICAgcnVsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBydWxlLmhlaWdodCA9IGhlaWdodCArIHNoaWZ0O1xuICAgICAgICBydWxlLmRlcHRoID0gLXNoaWZ0O1xuXG4gICAgICAgIHJldHVybiBydWxlO1xuICAgIH0sXG5cbiAgICBhY2NlbnQ6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIC8vIEFjY2VudHMgYXJlIGhhbmRsZWQgaW4gdGhlIFRlWGJvb2sgcGcuIDQ0MywgcnVsZSAxMi5cbiAgICAgICAgdmFyIGJhc2UgPSBncm91cC52YWx1ZS5iYXNlO1xuXG4gICAgICAgIHZhciBzdXBzdWJHcm91cDtcbiAgICAgICAgaWYgKGdyb3VwLnR5cGUgPT09IFwic3Vwc3ViXCIpIHtcbiAgICAgICAgICAgIC8vIElmIG91ciBiYXNlIGlzIGEgY2hhcmFjdGVyIGJveCwgYW5kIHdlIGhhdmUgc3VwZXJzY3JpcHRzIGFuZFxuICAgICAgICAgICAgLy8gc3Vic2NyaXB0cywgdGhlIHN1cHN1YiB3aWxsIGRlZmVyIHRvIHVzLiBJbiBwYXJ0aWN1bGFyLCB3ZSB3YW50XG4gICAgICAgICAgICAvLyB0byBhdHRhY2ggdGhlIHN1cGVyc2NyaXB0cyBhbmQgc3Vic2NyaXB0cyB0byB0aGUgaW5uZXIgYm9keSAoc29cbiAgICAgICAgICAgIC8vIHRoYXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzdXBlcnNjcmlwdHMgYW5kIHN1YnNjcmlwdHMgd29uJ3QgYmVcbiAgICAgICAgICAgIC8vIGFmZmVjdGVkIGJ5IHRoZSBoZWlnaHQgb2YgdGhlIGFjY2VudCkuIFdlIGFjY29tcGxpc2ggdGhpcyBieVxuICAgICAgICAgICAgLy8gc3RpY2tpbmcgdGhlIGJhc2Ugb2YgdGhlIGFjY2VudCBpbnRvIHRoZSBiYXNlIG9mIHRoZSBzdXBzdWIsIGFuZFxuICAgICAgICAgICAgLy8gcmVuZGVyaW5nIHRoYXQsIHdoaWxlIGtlZXBpbmcgdHJhY2sgb2Ygd2hlcmUgdGhlIGFjY2VudCBpcy5cblxuICAgICAgICAgICAgLy8gVGhlIHN1cHN1YiBncm91cCBpcyB0aGUgZ3JvdXAgdGhhdCB3YXMgcGFzc2VkIGluXG4gICAgICAgICAgICB2YXIgc3Vwc3ViID0gZ3JvdXA7XG4gICAgICAgICAgICAvLyBUaGUgcmVhbCBhY2NlbnQgZ3JvdXAgaXMgdGhlIGJhc2Ugb2YgdGhlIHN1cHN1YiBncm91cFxuICAgICAgICAgICAgZ3JvdXAgPSBzdXBzdWIudmFsdWUuYmFzZTtcbiAgICAgICAgICAgIC8vIFRoZSBjaGFyYWN0ZXIgYm94IGlzIHRoZSBiYXNlIG9mIHRoZSBhY2NlbnQgZ3JvdXBcbiAgICAgICAgICAgIGJhc2UgPSBncm91cC52YWx1ZS5iYXNlO1xuICAgICAgICAgICAgLy8gU3RpY2sgdGhlIGNoYXJhY3RlciBib3ggaW50byB0aGUgYmFzZSBvZiB0aGUgc3Vwc3ViIGdyb3VwXG4gICAgICAgICAgICBzdXBzdWIudmFsdWUuYmFzZSA9IGJhc2U7XG5cbiAgICAgICAgICAgIC8vIFJlcmVuZGVyIHRoZSBzdXBzdWIgZ3JvdXAgd2l0aCBpdHMgbmV3IGJhc2UsIGFuZCBzdG9yZSB0aGF0XG4gICAgICAgICAgICAvLyByZXN1bHQuXG4gICAgICAgICAgICBzdXBzdWJHcm91cCA9IGJ1aWxkR3JvdXAoXG4gICAgICAgICAgICAgICAgc3Vwc3ViLCBvcHRpb25zLnJlc2V0KCksIHByZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnVpbGQgdGhlIGJhc2UgZ3JvdXBcbiAgICAgICAgdmFyIGJvZHkgPSBidWlsZEdyb3VwKFxuICAgICAgICAgICAgYmFzZSwgb3B0aW9ucy53aXRoU3R5bGUob3B0aW9ucy5zdHlsZS5jcmFtcCgpKSk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBza2V3IG9mIHRoZSBhY2NlbnQuIFRoaXMgaXMgYmFzZWQgb24gdGhlIGxpbmUgXCJJZiB0aGVcbiAgICAgICAgLy8gbnVjbGV1cyBpcyBub3QgYSBzaW5nbGUgY2hhcmFjdGVyLCBsZXQgcyA9IDA7IG90aGVyd2lzZSBzZXQgcyB0byB0aGVcbiAgICAgICAgLy8ga2VybiBhbW91bnQgZm9yIHRoZSBudWNsZXVzIGZvbGxvd2VkIGJ5IHRoZSBcXHNrZXdjaGFyIG9mIGl0cyBmb250LlwiXG4gICAgICAgIC8vIE5vdGUgdGhhdCBvdXIgc2tldyBtZXRyaWNzIGFyZSBqdXN0IHRoZSBrZXJuIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJcbiAgICAgICAgLy8gYW5kIHRoZSBza2V3Y2hhci5cbiAgICAgICAgdmFyIHNrZXc7XG4gICAgICAgIGlmIChpc0NoYXJhY3RlckJveChiYXNlKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGJhc2UgaXMgYSBjaGFyYWN0ZXIgYm94LCB0aGVuIHdlIHdhbnQgdGhlIHNrZXcgb2YgdGhlXG4gICAgICAgICAgICAvLyBpbm5lcm1vc3QgY2hhcmFjdGVyLiBUbyBkbyB0aGF0LCB3ZSBmaW5kIHRoZSBpbm5lcm1vc3QgY2hhcmFjdGVyOlxuICAgICAgICAgICAgdmFyIGJhc2VDaGFyID0gZ2V0QmFzZUVsZW0oYmFzZSk7XG4gICAgICAgICAgICAvLyBUaGVuLCB3ZSByZW5kZXIgaXRzIGdyb3VwIHRvIGdldCB0aGUgc3ltYm9sIGluc2lkZSBpdFxuICAgICAgICAgICAgdmFyIGJhc2VHcm91cCA9IGJ1aWxkR3JvdXAoXG4gICAgICAgICAgICAgICAgYmFzZUNoYXIsIG9wdGlvbnMud2l0aFN0eWxlKG9wdGlvbnMuc3R5bGUuY3JhbXAoKSkpO1xuICAgICAgICAgICAgLy8gRmluYWxseSwgd2UgcHVsbCB0aGUgc2tldyBvZmYgb2YgdGhlIHN5bWJvbC5cbiAgICAgICAgICAgIHNrZXcgPSBiYXNlR3JvdXAuc2tldztcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBub3cgdGhyb3cgYXdheSBiYXNlR3JvdXAsIGJlY2F1c2UgdGhlIGxheWVycyB3ZVxuICAgICAgICAgICAgLy8gcmVtb3ZlZCB3aXRoIGdldEJhc2VFbGVtIG1pZ2h0IGNvbnRhaW4gdGhpbmdzIGxpa2UgXFxjb2xvciB3aGljaFxuICAgICAgICAgICAgLy8gd2UgY2FuJ3QgZ2V0IHJpZCBvZi5cbiAgICAgICAgICAgIC8vIFRPRE8oZW1pbHkpOiBGaW5kIGEgYmV0dGVyIHdheSB0byBnZXQgdGhlIHNrZXdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNrZXcgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgYm9keSBhbmQgdGhlIGFjY2VudFxuICAgICAgICB2YXIgY2xlYXJhbmNlID0gTWF0aC5taW4oYm9keS5oZWlnaHQsIGZvbnRNZXRyaWNzLm1ldHJpY3MueEhlaWdodCk7XG5cbiAgICAgICAgLy8gQnVpbGQgdGhlIGFjY2VudFxuICAgICAgICB2YXIgYWNjZW50ID0gYnVpbGRDb21tb24ubWFrZVN5bWJvbChcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLmFjY2VudCwgXCJNYWluLVJlZ3VsYXJcIiwgXCJtYXRoXCIsIG9wdGlvbnMuZ2V0Q29sb3IoKSk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaXRhbGljIGNvcnJlY3Rpb24gb2YgdGhlIGFjY2VudCwgYmVjYXVzZSBpdCBvbmx5IHNlcnZlcyB0b1xuICAgICAgICAvLyBzaGlmdCB0aGUgYWNjZW50IG92ZXIgdG8gYSBwbGFjZSB3ZSBkb24ndCB3YW50LlxuICAgICAgICBhY2NlbnQuaXRhbGljID0gMDtcblxuICAgICAgICAvLyBUaGUgXFx2ZWMgY2hhcmFjdGVyIHRoYXQgdGhlIGZvbnRzIHVzZSBpcyBhIGNvbWJpbmluZyBjaGFyYWN0ZXIsIGFuZFxuICAgICAgICAvLyB0aHVzIHNob3dzIHVwIG11Y2ggdG9vIGZhciB0byB0aGUgbGVmdC4gVG8gYWNjb3VudCBmb3IgdGhpcywgd2UgYWRkIGFcbiAgICAgICAgLy8gc3BlY2lmaWMgY2xhc3Mgd2hpY2ggc2hpZnRzIHRoZSBhY2NlbnQgb3ZlciB0byB3aGVyZSB3ZSB3YW50IGl0LlxuICAgICAgICAvLyBUT0RPKGVtaWx5KTogRml4IHRoaXMgaW4gYSBiZXR0ZXIgd2F5LCBsaWtlIGJ5IGNoYW5naW5nIHRoZSBmb250XG4gICAgICAgIHZhciB2ZWNDbGFzcyA9IGdyb3VwLnZhbHVlLmFjY2VudCA9PT0gXCJcXFxcdmVjXCIgPyBcImFjY2VudC12ZWNcIiA6IG51bGw7XG5cbiAgICAgICAgdmFyIGFjY2VudEJvZHkgPSBtYWtlU3BhbihbXCJhY2NlbnQtYm9keVwiLCB2ZWNDbGFzc10sIFtcbiAgICAgICAgICAgIG1ha2VTcGFuKFtdLCBbYWNjZW50XSldKTtcblxuICAgICAgICBhY2NlbnRCb2R5ID0gYnVpbGRDb21tb24ubWFrZVZMaXN0KFtcbiAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogYm9keX0sXG4gICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IC1jbGVhcmFuY2V9LFxuICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBhY2NlbnRCb2R5fVxuICAgICAgICBdLCBcImZpcnN0QmFzZWxpbmVcIiwgbnVsbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gU2hpZnQgdGhlIGFjY2VudCBvdmVyIGJ5IHRoZSBza2V3LiBOb3RlIHdlIHNoaWZ0IGJ5IHR3aWNlIHRoZSBza2V3XG4gICAgICAgIC8vIGJlY2F1c2Ugd2UgYXJlIGNlbnRlcmluZyB0aGUgYWNjZW50LCBzbyBieSBhZGRpbmcgMipza2V3IHRvIHRoZSBsZWZ0LFxuICAgICAgICAvLyB3ZSBzaGlmdCBpdCB0byB0aGUgcmlnaHQgYnkgMSpza2V3LlxuICAgICAgICBhY2NlbnRCb2R5LmNoaWxkcmVuWzFdLnN0eWxlLm1hcmdpbkxlZnQgPSAyICogc2tldyArIFwiZW1cIjtcblxuICAgICAgICB2YXIgYWNjZW50V3JhcCA9IG1ha2VTcGFuKFtcIm1vcmRcIiwgXCJhY2NlbnRcIl0sIFthY2NlbnRCb2R5XSk7XG5cbiAgICAgICAgaWYgKHN1cHN1Ykdyb3VwKSB7XG4gICAgICAgICAgICAvLyBIZXJlLCB3ZSByZXBsYWNlIHRoZSBcImJhc2VcIiBjaGlsZCBvZiB0aGUgc3Vwc3ViIHdpdGggb3VyIG5ld2x5XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZWQgYWNjZW50LlxuICAgICAgICAgICAgc3Vwc3ViR3JvdXAuY2hpbGRyZW5bMF0gPSBhY2NlbnRXcmFwO1xuXG4gICAgICAgICAgICAvLyBTaW5jZSB3ZSBkb24ndCByZXJ1biB0aGUgaGVpZ2h0IGNhbGN1bGF0aW9uIGFmdGVyIHJlcGxhY2luZyB0aGVcbiAgICAgICAgICAgIC8vIGFjY2VudCwgd2UgbWFudWFsbHkgcmVjYWxjdWxhdGUgaGVpZ2h0LlxuICAgICAgICAgICAgc3Vwc3ViR3JvdXAuaGVpZ2h0ID0gTWF0aC5tYXgoYWNjZW50V3JhcC5oZWlnaHQsIHN1cHN1Ykdyb3VwLmhlaWdodCk7XG5cbiAgICAgICAgICAgIC8vIEFjY2VudHMgc2hvdWxkIGFsd2F5cyBiZSBvcmRzLCBldmVuIHdoZW4gdGhlaXIgaW5uYXJkcyBhcmUgbm90LlxuICAgICAgICAgICAgc3Vwc3ViR3JvdXAuY2xhc3Nlc1swXSA9IFwibW9yZFwiO1xuXG4gICAgICAgICAgICByZXR1cm4gc3Vwc3ViR3JvdXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZW50V3JhcDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogYnVpbGRHcm91cCBpcyB0aGUgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIGdyb3VwIGFuZCBjYWxscyB0aGUgY29ycmVjdCBncm91cFR5cGVcbiAqIGZ1bmN0aW9uIGZvciBpdC4gSXQgYWxzbyBoYW5kbGVzIHRoZSBpbnRlcmFjdGlvbiBvZiBzaXplIGFuZCBzdHlsZSBjaGFuZ2VzXG4gKiBiZXR3ZWVuIHBhcmVudHMgYW5kIGNoaWxkcmVuLlxuICovXG52YXIgYnVpbGRHcm91cCA9IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgaWYgKCFncm91cCkge1xuICAgICAgICByZXR1cm4gbWFrZVNwYW4oKTtcbiAgICB9XG5cbiAgICBpZiAoZ3JvdXBUeXBlc1tncm91cC50eXBlXSkge1xuICAgICAgICAvLyBDYWxsIHRoZSBncm91cFR5cGVzIGZ1bmN0aW9uXG4gICAgICAgIHZhciBncm91cE5vZGUgPSBncm91cFR5cGVzW2dyb3VwLnR5cGVdKGdyb3VwLCBvcHRpb25zLCBwcmV2KTtcbiAgICAgICAgdmFyIG11bHRpcGxpZXI7XG5cbiAgICAgICAgLy8gSWYgdGhlIHN0eWxlIGNoYW5nZWQgYmV0d2VlbiB0aGUgcGFyZW50IGFuZCB0aGUgY3VycmVudCBncm91cCxcbiAgICAgICAgLy8gYWNjb3VudCBmb3IgdGhlIHNpemUgZGlmZmVyZW5jZVxuICAgICAgICBpZiAob3B0aW9ucy5zdHlsZSAhPT0gb3B0aW9ucy5wYXJlbnRTdHlsZSkge1xuICAgICAgICAgICAgbXVsdGlwbGllciA9IG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXIgL1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhcmVudFN0eWxlLnNpemVNdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICBncm91cE5vZGUuaGVpZ2h0ICo9IG11bHRpcGxpZXI7XG4gICAgICAgICAgICBncm91cE5vZGUuZGVwdGggKj0gbXVsdGlwbGllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBzaXplIGNoYW5nZWQgYmV0d2VlbiB0aGUgcGFyZW50IGFuZCB0aGUgY3VycmVudCBncm91cCwgYWNjb3VudFxuICAgICAgICAvLyBmb3IgdGhhdCBzaXplIGRpZmZlcmVuY2UuXG4gICAgICAgIGlmIChvcHRpb25zLnNpemUgIT09IG9wdGlvbnMucGFyZW50U2l6ZSkge1xuICAgICAgICAgICAgbXVsdGlwbGllciA9IGJ1aWxkQ29tbW9uLnNpemluZ011bHRpcGxpZXJbb3B0aW9ucy5zaXplXSAvXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkQ29tbW9uLnNpemluZ011bHRpcGxpZXJbb3B0aW9ucy5wYXJlbnRTaXplXTtcblxuICAgICAgICAgICAgZ3JvdXBOb2RlLmhlaWdodCAqPSBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgZ3JvdXBOb2RlLmRlcHRoICo9IG11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBOb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJHb3QgZ3JvdXAgb2YgdW5rbm93biB0eXBlOiAnXCIgKyBncm91cC50eXBlICsgXCInXCIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGFrZSBhbiBlbnRpcmUgcGFyc2UgdHJlZSwgYW5kIGJ1aWxkIGl0IGludG8gYW4gYXBwcm9wcmlhdGUgc2V0IG9mIEhUTUxcbiAqIG5vZGVzLlxuICovXG52YXIgYnVpbGRIVE1MID0gZnVuY3Rpb24odHJlZSwgc2V0dGluZ3MpIHtcbiAgICB2YXIgc3RhcnRTdHlsZSA9IFN0eWxlLlRFWFQ7XG4gICAgaWYgKHNldHRpbmdzLmRpc3BsYXlNb2RlKSB7XG4gICAgICAgIHN0YXJ0U3R5bGUgPSBTdHlsZS5ESVNQTEFZO1xuICAgIH1cblxuICAgIC8vIFNldHVwIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgb3B0aW9ucyA9IG5ldyBPcHRpb25zKHN0YXJ0U3R5bGUsIFwic2l6ZTVcIiwgXCJcIik7XG5cbiAgICAvLyBCdWlsZCB0aGUgZXhwcmVzc2lvbiBjb250YWluZWQgaW4gdGhlIHRyZWVcbiAgICB2YXIgZXhwcmVzc2lvbiA9IGJ1aWxkRXhwcmVzc2lvbih0cmVlLCBvcHRpb25zKTtcbiAgICB2YXIgYm9keSA9IG1ha2VTcGFuKFtcImJhc2VcIiwgb3B0aW9ucy5zdHlsZS5jbHMoKV0sIGV4cHJlc3Npb24pO1xuXG4gICAgLy8gQWRkIHN0cnV0cywgd2hpY2ggZW5zdXJlIHRoYXQgdGhlIHRvcCBvZiB0aGUgSFRNTCBlbGVtZW50IGZhbGxzIGF0IHRoZVxuICAgIC8vIGhlaWdodCBvZiB0aGUgZXhwcmVzc2lvbiwgYW5kIHRoZSBib3R0b20gb2YgdGhlIEhUTUwgZWxlbWVudCBmYWxscyBhdCB0aGVcbiAgICAvLyBkZXB0aCBvZiB0aGUgZXhwcmVzc2lvbi5cbiAgICB2YXIgdG9wU3RydXQgPSBtYWtlU3BhbihbXCJzdHJ1dFwiXSk7XG4gICAgdmFyIGJvdHRvbVN0cnV0ID0gbWFrZVNwYW4oW1wic3RydXRcIiwgXCJib3R0b21cIl0pO1xuXG4gICAgdG9wU3RydXQuc3R5bGUuaGVpZ2h0ID0gYm9keS5oZWlnaHQgKyBcImVtXCI7XG4gICAgYm90dG9tU3RydXQuc3R5bGUuaGVpZ2h0ID0gKGJvZHkuaGVpZ2h0ICsgYm9keS5kZXB0aCkgKyBcImVtXCI7XG4gICAgLy8gV2UnZCBsaWtlIHRvIHVzZSBgdmVydGljYWwtYWxpZ246IHRvcGAgYnV0IGluIElFIDkgdGhpcyBsb3dlcnMgdGhlXG4gICAgLy8gYmFzZWxpbmUgb2YgdGhlIGJveCB0byB0aGUgYm90dG9tIG9mIHRoaXMgc3RydXQgKGluc3RlYWQgc3RheWluZyBpbiB0aGVcbiAgICAvLyBub3JtYWwgcGxhY2UpIHNvIHdlIHVzZSBhbiBhYnNvbHV0ZSB2YWx1ZSBmb3IgdmVydGljYWwtYWxpZ24gaW5zdGVhZFxuICAgIGJvdHRvbVN0cnV0LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAtYm9keS5kZXB0aCArIFwiZW1cIjtcblxuICAgIC8vIFdyYXAgdGhlIHN0cnV0cyBhbmQgYm9keSB0b2dldGhlclxuICAgIHZhciBodG1sTm9kZSA9IG1ha2VTcGFuKFtcImthdGV4LWh0bWxcIl0sIFt0b3BTdHJ1dCwgYm90dG9tU3RydXQsIGJvZHldKTtcblxuICAgIGh0bWxOb2RlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGRIVE1MO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udmVydHMgYSBwYXJzZSB0cmVlIGludG8gYSBjb29yZXNwb25kaW5nIE1hdGhNTCB0cmVlLiBUaGUgbWFpblxuICogZW50cnkgcG9pbnQgaXMgdGhlIGBidWlsZE1hdGhNTGAgZnVuY3Rpb24sIHdoaWNoIHRha2VzIGEgcGFyc2UgdHJlZSBmcm9tIHRoZVxuICogcGFyc2VyLlxuICovXG5cbnZhciBidWlsZENvbW1vbiA9IHJlcXVpcmUoXCIuL2J1aWxkQ29tbW9uXCIpO1xudmFyIG1hdGhNTFRyZWUgPSByZXF1aXJlKFwiLi9tYXRoTUxUcmVlXCIpO1xudmFyIFBhcnNlRXJyb3IgPSByZXF1aXJlKFwiLi9QYXJzZUVycm9yXCIpO1xudmFyIHN5bWJvbHMgPSByZXF1aXJlKFwiLi9zeW1ib2xzXCIpO1xuXG52YXIgbWFrZVNwYW4gPSBidWlsZENvbW1vbi5tYWtlU3BhbjtcblxuLyoqXG4gKiBUYWtlcyBhIHN5bWJvbCBhbmQgY29udmVydHMgaXQgaW50byBhIE1hdGhNTCB0ZXh0IG5vZGUgYWZ0ZXIgcGVyZm9ybWluZ1xuICogb3B0aW9uYWwgcmVwbGFjZW1lbnQgZnJvbSBzeW1ib2xzLmpzLlxuICovXG52YXIgbWFrZVRleHQgPSBmdW5jdGlvbih0ZXh0LCBtb2RlKSB7XG4gICAgaWYgKHN5bWJvbHNbbW9kZV1bdGV4dF0gJiYgc3ltYm9sc1ttb2RlXVt0ZXh0XS5yZXBsYWNlKSB7XG4gICAgICAgIHRleHQgPSBzeW1ib2xzW21vZGVdW3RleHRdLnJlcGxhY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBtYXRoTUxUcmVlLlRleHROb2RlKHRleHQpO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbnMgZm9yIGhhbmRsaW5nIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgZ3JvdXBzIGZvdW5kIGluIHRoZSBwYXJzZVxuICogdHJlZS4gRWFjaCBmdW5jdGlvbiBzaG91bGQgdGFrZSBhIHBhcnNlIGdyb3VwIGFuZCByZXR1cm4gYSBNYXRoTUwgbm9kZS5cbiAqL1xudmFyIGdyb3VwVHlwZXMgPSB7XG4gICAgbWF0aG9yZDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgIFwibWlcIixcbiAgICAgICAgICAgIFttYWtlVGV4dChncm91cC52YWx1ZSwgZ3JvdXAubW9kZSldKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgdGV4dG9yZDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIHRleHQgPSBtYWtlVGV4dChncm91cC52YWx1ZSwgZ3JvdXAubW9kZSk7XG5cbiAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgIGlmICgvWzAtOV0vLnRlc3QoZ3JvdXAudmFsdWUpKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtblwiLCBbdGV4dF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibWlcIiwgW3RleHRdKTtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwibWF0aHZhcmlhbnRcIiwgXCJub3JtYWxcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgYmluOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHJlbDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgIFwibW9cIiwgW21ha2VUZXh0KGdyb3VwLnZhbHVlLCBncm91cC5tb2RlKV0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBvcGVuOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGNsb3NlOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGlubmVyOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHB1bmN0OiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzZXBhcmF0b3JcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBvcmRncm91cDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlKTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXJvd1wiLCBpbm5lcik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHRleHQ6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBpbm5lciA9IGJ1aWxkRXhwcmVzc2lvbihncm91cC52YWx1ZS5ib2R5KTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXRleHRcIiwgaW5uZXIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBjb2xvcjogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlLnZhbHVlKTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXN0eWxlXCIsIGlubmVyKTtcblxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIm1hdGhjb2xvclwiLCBncm91cC52YWx1ZS5jb2xvcik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHN1cHN1YjogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gW2J1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYmFzZSldO1xuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zdWIpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goYnVpbGRHcm91cChncm91cC52YWx1ZS5zdWIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zdXApIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goYnVpbGRHcm91cChncm91cC52YWx1ZS5zdXApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub2RlVHlwZTtcbiAgICAgICAgaWYgKCFncm91cC52YWx1ZS5zdWIpIHtcbiAgICAgICAgICAgIG5vZGVUeXBlID0gXCJtc3VwXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoIWdyb3VwLnZhbHVlLnN1cCkge1xuICAgICAgICAgICAgbm9kZVR5cGUgPSBcIm1zdWJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVUeXBlID0gXCJtc3Vic3VwXCI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKG5vZGVUeXBlLCBjaGlsZHJlbik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGdlbmZyYWM6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm1mcmFjXCIsXG4gICAgICAgICAgICBbYnVpbGRHcm91cChncm91cC52YWx1ZS5udW1lciksXG4gICAgICAgICAgICAgYnVpbGRHcm91cChncm91cC52YWx1ZS5kZW5vbSldKTtcblxuICAgICAgICBpZiAoIWdyb3VwLnZhbHVlLmhhc0JhckxpbmUpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwibGluZXRoaWNrbmVzc1wiLCBcIjBweFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5sZWZ0RGVsaW0gIT0gbnVsbCB8fCBncm91cC52YWx1ZS5yaWdodERlbGltICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciB3aXRoRGVsaW1zID0gW107XG5cbiAgICAgICAgICAgIGlmIChncm91cC52YWx1ZS5sZWZ0RGVsaW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBsZWZ0T3AgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgICAgICAgICAgXCJtb1wiLCBbbmV3IG1hdGhNTFRyZWUuVGV4dE5vZGUoZ3JvdXAudmFsdWUubGVmdERlbGltKV0pO1xuXG4gICAgICAgICAgICAgICAgbGVmdE9wLnNldEF0dHJpYnV0ZShcImZlbmNlXCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgICAgIHdpdGhEZWxpbXMucHVzaChsZWZ0T3ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aXRoRGVsaW1zLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91cC52YWx1ZS5yaWdodERlbGltICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRPcCA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgICAgICAgICBcIm1vXCIsIFtuZXcgbWF0aE1MVHJlZS5UZXh0Tm9kZShncm91cC52YWx1ZS5yaWdodERlbGltKV0pO1xuXG4gICAgICAgICAgICAgICAgcmlnaHRPcC5zZXRBdHRyaWJ1dGUoXCJmZW5jZVwiLCBcInRydWVcIik7XG5cbiAgICAgICAgICAgICAgICB3aXRoRGVsaW1zLnB1c2gocmlnaHRPcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvdXRlck5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcIm1yb3dcIiwgd2l0aERlbGltcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRlck5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgc3FydDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgIFwibXNxcnRcIiwgW2J1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYm9keSldKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgbGVmdHJpZ2h0OiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgaW5uZXIgPSBidWlsZEV4cHJlc3Npb24oZ3JvdXAudmFsdWUuYm9keSk7XG5cbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLmxlZnQgIT09IFwiLlwiKSB7XG4gICAgICAgICAgICB2YXIgbGVmdE5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgICAgICBcIm1vXCIsIFttYWtlVGV4dChncm91cC52YWx1ZS5sZWZ0LCBncm91cC5tb2RlKV0pO1xuXG4gICAgICAgICAgICBsZWZ0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJmZW5jZVwiLCBcInRydWVcIik7XG5cbiAgICAgICAgICAgIGlubmVyLnVuc2hpZnQobGVmdE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLnJpZ2h0ICE9PSBcIi5cIikge1xuICAgICAgICAgICAgdmFyIHJpZ2h0Tm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgICAgIFwibW9cIiwgW21ha2VUZXh0KGdyb3VwLnZhbHVlLnJpZ2h0LCBncm91cC5tb2RlKV0pO1xuXG4gICAgICAgICAgICByaWdodE5vZGUuc2V0QXR0cmlidXRlKFwiZmVuY2VcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgICAgICBpbm5lci5wdXNoKHJpZ2h0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3V0ZXJOb2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtcm93XCIsIGlubmVyKTtcblxuICAgICAgICByZXR1cm4gb3V0ZXJOb2RlO1xuICAgIH0sXG5cbiAgICBhY2NlbnQ6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBhY2NlbnROb2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm1vXCIsIFttYWtlVGV4dChncm91cC52YWx1ZS5hY2NlbnQsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgIFwibW92ZXJcIixcbiAgICAgICAgICAgIFtidWlsZEdyb3VwKGdyb3VwLnZhbHVlLmJhc2UpLFxuICAgICAgICAgICAgIGFjY2VudE5vZGVdKTtcblxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImFjY2VudFwiLCBcInRydWVcIik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHNwYWNpbmc6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBub2RlO1xuXG4gICAgICAgIGlmIChncm91cC52YWx1ZSA9PT0gXCJcXFxcIFwiIHx8IGdyb3VwLnZhbHVlID09PSBcIlxcXFxzcGFjZVwiIHx8XG4gICAgICAgICAgICBncm91cC52YWx1ZSA9PT0gXCIgXCIgfHwgZ3JvdXAudmFsdWUgPT09IFwiflwiKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICAgICAgXCJtdGV4dFwiLCBbbmV3IG1hdGhNTFRyZWUuVGV4dE5vZGUoXCJcXHUwMGEwXCIpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtc3BhY2VcIik7XG5cbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwid2lkdGhcIiwgYnVpbGRDb21tb24uc3BhY2luZ0Z1bmN0aW9uc1tncm91cC52YWx1ZV0uc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgb3A6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBub2RlO1xuXG4gICAgICAgIC8vIFRPRE8oZW1pbHkpOiBoYW5kbGUgYmlnIG9wZXJhdG9ycyB1c2luZyB0aGUgYGxhcmdlb3BgIGF0dHJpYnV0ZVxuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBzeW1ib2wuIEp1c3QgYWRkIHRoZSBzeW1ib2wuXG4gICAgICAgICAgICBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUuYm9keSwgZ3JvdXAubW9kZSldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSB0ZXh0IG9wZXJhdG9yLiBBZGQgYWxsIG9mIHRoZSBjaGFyYWN0ZXJzIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBvcGVyYXRvcidzIG5hbWUuXG4gICAgICAgICAgICAvLyBUT0RPKGVtaWx5KTogQWRkIGEgc3BhY2UgaW4gdGhlIG1pZGRsZSBvZiBzb21lIG9mIHRoZXNlXG4gICAgICAgICAgICAvLyBvcGVyYXRvcnMsIGxpa2UgXFxsaW1zdXAuXG4gICAgICAgICAgICBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICAgICAgXCJtb1wiLCBbbmV3IG1hdGhNTFRyZWUuVGV4dE5vZGUoZ3JvdXAudmFsdWUuYm9keS5zbGljZSgxKSldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBrYXRleDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgIFwibXRleHRcIiwgW25ldyBtYXRoTUxUcmVlLlRleHROb2RlKFwiS2FUZVhcIildKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgZGVsaW1zaXppbmc6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS52YWx1ZSAhPT0gXCIuXCIpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gobWFrZVRleHQoZ3JvdXAudmFsdWUudmFsdWUsIGdyb3VwLm1vZGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtb1wiLCBjaGlsZHJlbik7XG5cbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLmRlbGltVHlwZSA9PT0gXCJvcGVuXCIgfHxcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLmRlbGltVHlwZSA9PT0gXCJjbG9zZVwiKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHNvbWUgb2YgdGhlIGRlbGltc2l6aW5nIGZ1bmN0aW9ucyBhY3QgYXMgZmVuY2VzLCBhbmQgdGhleVxuICAgICAgICAgICAgLy8gcmV0dXJuIFwib3BlblwiIG9yIFwiY2xvc2VcIiBkZWxpbVR5cGVzLlxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJmZW5jZVwiLCBcInRydWVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IGRpc2FibGUgZmVuY2luZyBpZiBpdCdzIG5vdCBhIGZlbmNlLCB0byBvdmVycmlkZSB0aGVcbiAgICAgICAgICAgIC8vIGRlZmF1bHRzLlxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJmZW5jZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHN0eWxpbmc6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBpbm5lciA9IGJ1aWxkRXhwcmVzc2lvbihncm91cC52YWx1ZS52YWx1ZSwgaW5uZXIpO1xuXG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtc3R5bGVcIiwgaW5uZXIpO1xuXG4gICAgICAgIHZhciBzdHlsZUF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogW1wiMFwiLCBcInRydWVcIl0sXG4gICAgICAgICAgICBcInRleHRcIjogW1wiMFwiLCBcImZhbHNlXCJdLFxuICAgICAgICAgICAgXCJzY3JpcHRcIjogW1wiMVwiLCBcImZhbHNlXCJdLFxuICAgICAgICAgICAgXCJzY3JpcHRzY3JpcHRcIjogW1wiMlwiLCBcImZhbHNlXCJdXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGF0dHIgPSBzdHlsZUF0dHJpYnV0ZXNbZ3JvdXAudmFsdWUuc3R5bGVdO1xuXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic2NyaXB0bGV2ZWxcIiwgYXR0clswXSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGlzcGxheXN0eWxlXCIsIGF0dHJbMV0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBzaXppbmc6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBpbm5lciA9IGJ1aWxkRXhwcmVzc2lvbihncm91cC52YWx1ZS52YWx1ZSk7XG5cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcIm1zdHlsZVwiLCBpbm5lcik7XG5cbiAgICAgICAgLy8gVE9ETyhlbWlseSk6IFRoaXMgZG9lc24ndCBwcm9kdWNlIHRoZSBjb3JyZWN0IHNpemUgZm9yIG5lc3RlZCBzaXplXG4gICAgICAgIC8vIGNoYW5nZXMsIGJlY2F1c2Ugd2UgZG9uJ3Qga2VlcCBzdGF0ZSBvZiB3aGF0IHN0eWxlIHdlJ3JlIGN1cnJlbnRseVxuICAgICAgICAvLyBpbiwgc28gd2UgY2FuJ3QgcmVzZXQgdGhlIHNpemUgdG8gbm9ybWFsIGJlZm9yZSBjaGFuZ2luZyBpdC5cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcIm1hdGhzaXplXCIsIGJ1aWxkQ29tbW9uLnNpemluZ011bHRpcGxpZXJbZ3JvdXAudmFsdWUuc2l6ZV0gKyBcImVtXCIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBvdmVybGluZTogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIG9wZXJhdG9yID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm1vXCIsIFtuZXcgbWF0aE1MVHJlZS5UZXh0Tm9kZShcIlxcdTIwM2VcIildKTtcbiAgICAgICAgb3BlcmF0b3Iuc2V0QXR0cmlidXRlKFwic3RyZXRjaHlcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm1vdmVyXCIsXG4gICAgICAgICAgICBbYnVpbGRHcm91cChncm91cC52YWx1ZS5ib2R5KSxcbiAgICAgICAgICAgICBvcGVyYXRvcl0pO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImFjY2VudFwiLCBcInRydWVcIik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHJ1bGU6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIC8vIFRPRE8oZW1pbHkpOiBGaWd1cmUgb3V0IGlmIHRoZXJlJ3MgYW4gYWN0dWFsIHdheSB0byBkcmF3IGJsYWNrIGJveGVzXG4gICAgICAgIC8vIGluIE1hdGhNTC5cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcIm1yb3dcIik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGxsYXA6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm1wYWRkZWRcIiwgW2J1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYm9keSldKTtcblxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImxzcGFjZVwiLCBcIi0xd2lkdGhcIik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIwcHhcIik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHJsYXA6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm1wYWRkZWRcIiwgW2J1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYm9keSldKTtcblxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMHB4XCIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGFrZXMgYSBsaXN0IG9mIG5vZGVzLCBidWlsZHMgdGhlbSwgYW5kIHJldHVybnMgYSBsaXN0IG9mIHRoZSBnZW5lcmF0ZWRcbiAqIE1hdGhNTCBub2Rlcy4gQSBsaXR0bGUgc2ltcGxlciB0aGFuIHRoZSBIVE1MIHZlcnNpb24gYmVjYXVzZSB3ZSBkb24ndCBkbyBhbnlcbiAqIHByZXZpb3VzLW5vZGUgaGFuZGxpbmcuXG4gKi9cbnZhciBidWlsZEV4cHJlc3Npb24gPSBmdW5jdGlvbihleHByZXNzaW9uKSB7XG4gICAgdmFyIGdyb3VwcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwcmVzc2lvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZ3JvdXAgPSBleHByZXNzaW9uW2ldO1xuICAgICAgICBncm91cHMucHVzaChidWlsZEdyb3VwKGdyb3VwKSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cHM7XG59O1xuXG4vKipcbiAqIFRha2VzIGEgZ3JvdXAgZnJvbSB0aGUgcGFyc2VyIGFuZCBjYWxscyB0aGUgYXBwcm9wcmlhdGUgZ3JvdXBUeXBlcyBmdW5jdGlvblxuICogb24gaXQgdG8gcHJvZHVjZSBhIE1hdGhNTCBub2RlLlxuICovXG52YXIgYnVpbGRHcm91cCA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgaWYgKCFncm91cCkge1xuICAgICAgICByZXR1cm4gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtcm93XCIpO1xuICAgIH1cblxuICAgIGlmIChncm91cFR5cGVzW2dyb3VwLnR5cGVdKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIGdyb3VwVHlwZXMgZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIGdyb3VwVHlwZXNbZ3JvdXAudHlwZV0oZ3JvdXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJHb3QgZ3JvdXAgb2YgdW5rbm93biB0eXBlOiAnXCIgKyBncm91cC50eXBlICsgXCInXCIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGFrZXMgYSBmdWxsIHBhcnNlIHRyZWUgYW5kIHNldHRpbmdzIGFuZCBidWlsZHMgYSBNYXRoTUwgcmVwcmVzZW50YXRpb24gb2ZcbiAqIGl0LiBJbiBwYXJ0aWN1bGFyLCB3ZSBwdXQgdGhlIGVsZW1lbnRzIGZyb20gYnVpbGRpbmcgdGhlIHBhcnNlIHRyZWUgaW50byBhXG4gKiA8c2VtYW50aWNzPiB0YWcgc28gd2UgY2FuIGFsc28gaW5jbHVkZSB0aGF0IFRlWCBzb3VyY2UgYXMgYW4gYW5ub3RhdGlvbi5cbiAqXG4gKiBOb3RlIHRoYXQgd2UgYWN0dWFsbHkgcmV0dXJuIGEgZG9tVHJlZSBlbGVtZW50IHdpdGggYSBgPG1hdGg+YCBpbnNpZGUgaXQgc29cbiAqIHdlIGNhbiBkbyBhcHByb3ByaWF0ZSBzdHlsaW5nLlxuICovXG52YXIgYnVpbGRNYXRoTUwgPSBmdW5jdGlvbih0cmVlLCB0ZXhFeHByZXNzaW9uLCBzZXR0aW5ncykge1xuICAgIHZhciBleHByZXNzaW9uID0gYnVpbGRFeHByZXNzaW9uKHRyZWUpO1xuXG4gICAgLy8gV3JhcCB1cCB0aGUgZXhwcmVzc2lvbiBpbiBhbiBtcm93IHNvIGl0IGlzIHByZXNlbnRlZCBpbiB0aGUgc2VtYW50aWNzXG4gICAgLy8gdGFnIGNvcnJlY3RseS5cbiAgICB2YXIgd3JhcHBlciA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXJvd1wiLCBleHByZXNzaW9uKTtcblxuICAgIC8vIEJ1aWxkIGEgVGVYIGFubm90YXRpb24gb2YgdGhlIHNvdXJjZVxuICAgIHZhciBhbm5vdGF0aW9uID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgIFwiYW5ub3RhdGlvblwiLCBbbmV3IG1hdGhNTFRyZWUuVGV4dE5vZGUodGV4RXhwcmVzc2lvbildKTtcblxuICAgIGFubm90YXRpb24uc2V0QXR0cmlidXRlKFwiZW5jb2RpbmdcIiwgXCJhcHBsaWNhdGlvbi94LXRleFwiKTtcblxuICAgIHZhciBzZW1hbnRpY3MgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgXCJzZW1hbnRpY3NcIiwgW3dyYXBwZXIsIGFubm90YXRpb25dKTtcblxuICAgIHZhciBtYXRoID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtYXRoXCIsIFtzZW1hbnRpY3NdKTtcblxuICAgIC8vIFlvdSBjYW4ndCBzdHlsZSA8bWF0aD4gbm9kZXMsIHNvIHdlIHdyYXAgdGhlIG5vZGUgaW4gYSBzcGFuLlxuICAgIHJldHVybiBtYWtlU3BhbihbXCJrYXRleC1tYXRobWxcIl0sIFttYXRoXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkTWF0aE1MO1xuIiwiXG52YXIgYnVpbGRIVE1MID0gcmVxdWlyZShcIi4vYnVpbGRIVE1MXCIpO1xudmFyIGJ1aWxkTWF0aE1MID0gcmVxdWlyZShcIi4vYnVpbGRNYXRoTUxcIik7XG52YXIgYnVpbGRDb21tb24gPSByZXF1aXJlKFwiLi9idWlsZENvbW1vblwiKTtcblxudmFyIG1ha2VTcGFuID0gYnVpbGRDb21tb24ubWFrZVNwYW47XG5cbnZhciBidWlsZFRyZWUgPSBmdW5jdGlvbih0cmVlLCBleHByZXNzaW9uLCBzZXR0aW5ncykge1xuICAgIC8vIGBidWlsZEhUTUxgIHNvbWV0aW1lcyBtZXNzZXMgd2l0aCB0aGUgcGFyc2UgdHJlZSAobGlrZSB0dXJuaW5nIGJpbnMgLT5cbiAgICAvLyBvcmRzKSwgc28gd2UgYnVpbGQgdGhlIE1hdGhNTCB2ZXJzaW9uIGZpcnN0LlxuICAgIHZhciBtYXRoTUxOb2RlID0gYnVpbGRNYXRoTUwodHJlZSwgZXhwcmVzc2lvbiwgc2V0dGluZ3MpO1xuICAgIHZhciBodG1sTm9kZSA9IGJ1aWxkSFRNTCh0cmVlLCBzZXR0aW5ncyk7XG5cbiAgICB2YXIga2F0ZXhOb2RlID0gbWFrZVNwYW4oW1wia2F0ZXhcIl0sIFtcbiAgICAgICAgbWF0aE1MTm9kZSwgaHRtbE5vZGVcbiAgICBdKTtcblxuICAgIGlmIChzZXR0aW5ncy5kaXNwbGF5TW9kZSkge1xuICAgICAgICByZXR1cm4gbWFrZVNwYW4oW1wia2F0ZXgtZGlzcGxheVwiXSwgW2thdGV4Tm9kZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrYXRleE5vZGU7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZFRyZWU7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBkZWFscyB3aXRoIGNyZWF0aW5nIGRlbGltaXRlcnMgb2YgdmFyaW91cyBzaXplcy4gVGhlIFRlWGJvb2tcbiAqIGRpc2N1c3NlcyB0aGVzZSByb3V0aW5lcyBvbiBwYWdlIDQ0MS00NDIsIGluIHRoZSBcIkFub3RoZXIgc3Vicm91dGluZSBzZXRzIGJveFxuICogeCB0byBhIHNwZWNpZmllZCB2YXJpYWJsZSBkZWxpbWl0ZXJcIiBwYXJhZ3JhcGguXG4gKlxuICogVGhlcmUgYXJlIHRocmVlIG1haW4gcm91dGluZXMgaGVyZS4gYG1ha2VTbWFsbERlbGltYCBtYWtlcyBhIGRlbGltaXRlciBpbiB0aGVcbiAqIG5vcm1hbCBmb250LCBidXQgaW4gZWl0aGVyIHRleHQsIHNjcmlwdCwgb3Igc2NyaXB0c2NyaXB0IHN0eWxlLlxuICogYG1ha2VMYXJnZURlbGltYCBtYWtlcyBhIGRlbGltaXRlciBpbiB0ZXh0c3R5bGUsIGJ1dCBpbiBvbmUgb2YgdGhlIFNpemUxLFxuICogU2l6ZTIsIFNpemUzLCBvciBTaXplNCBmb250cy4gYG1ha2VTdGFja2VkRGVsaW1gIG1ha2VzIGEgZGVsaW1pdGVyIG91dCBvZlxuICogc21hbGxlciBwaWVjZXMgdGhhdCBhcmUgc3RhY2tlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyB0YWtlIGEgcGFyYW1ldGVyIGBjZW50ZXJgLCB3aGljaCBkZXRlcm1pbmVzIGlmIHRoZSBkZWxpbWl0ZXJcbiAqIHNob3VsZCBiZSBjZW50ZXJlZCBhcm91bmQgdGhlIGF4aXMuXG4gKlxuICogVGhlbiwgdGhlcmUgYXJlIHRocmVlIGV4cG9zZWQgZnVuY3Rpb25zLiBgc2l6ZWREZWxpbWAgbWFrZXMgYSBkZWxpbWl0ZXIgaW5cbiAqIG9uZSBvZiB0aGUgZ2l2ZW4gc2l6ZXMuIFRoaXMgaXMgdXNlZCBmb3IgdGhpbmdzIGxpa2UgYFxcYmlnbGAuXG4gKiBgY3VzdG9tU2l6ZWREZWxpbWAgbWFrZXMgYSBkZWxpbWl0ZXIgd2l0aCBhIGdpdmVuIHRvdGFsIGhlaWdodCtkZXB0aC4gSXQgaXNcbiAqIGNhbGxlZCBpbiBwbGFjZXMgbGlrZSBgXFxzcXJ0YC4gYGxlZnRSaWdodERlbGltYCBtYWtlcyBhbiBhcHByb3ByaWF0ZVxuICogZGVsaW1pdGVyIHdoaWNoIHN1cnJvdW5kcyBhbiBleHByZXNzaW9uIG9mIGEgZ2l2ZW4gaGVpZ2h0IGFuIGRlcHRoLiBJdCBpc1xuICogdXNlZCBpbiBgXFxsZWZ0YCBhbmQgYFxccmlnaHRgLlxuICovXG5cbnZhciBQYXJzZUVycm9yID0gcmVxdWlyZShcIi4vUGFyc2VFcnJvclwiKTtcbnZhciBTdHlsZSA9IHJlcXVpcmUoXCIuL1N0eWxlXCIpO1xuXG52YXIgYnVpbGRDb21tb24gPSByZXF1aXJlKFwiLi9idWlsZENvbW1vblwiKTtcbnZhciBmb250TWV0cmljcyA9IHJlcXVpcmUoXCIuL2ZvbnRNZXRyaWNzXCIpO1xudmFyIHN5bWJvbHMgPSByZXF1aXJlKFwiLi9zeW1ib2xzXCIpO1xudmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBtYWtlU3BhbiA9IGJ1aWxkQ29tbW9uLm1ha2VTcGFuO1xuXG4vKipcbiAqIEdldCB0aGUgbWV0cmljcyBmb3IgYSBnaXZlbiBzeW1ib2wgYW5kIGZvbnQsIGFmdGVyIHRyYW5zZm9ybWF0aW9uIChpLmUuXG4gKiBhZnRlciBmb2xsb3dpbmcgcmVwbGFjZW1lbnQgZnJvbSBzeW1ib2xzLmpzKVxuICovXG52YXIgZ2V0TWV0cmljcyA9IGZ1bmN0aW9uKHN5bWJvbCwgZm9udCkge1xuICAgIGlmIChzeW1ib2xzLm1hdGhbc3ltYm9sXSAmJiBzeW1ib2xzLm1hdGhbc3ltYm9sXS5yZXBsYWNlKSB7XG4gICAgICAgIHJldHVybiBmb250TWV0cmljcy5nZXRDaGFyYWN0ZXJNZXRyaWNzKFxuICAgICAgICAgICAgc3ltYm9scy5tYXRoW3N5bWJvbF0ucmVwbGFjZSwgZm9udCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZvbnRNZXRyaWNzLmdldENoYXJhY3Rlck1ldHJpY3MoXG4gICAgICAgICAgICBzeW1ib2wsIGZvbnQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQnVpbGRzIGEgc3ltYm9sIGluIHRoZSBnaXZlbiBmb250IHNpemUgKG5vdGUgc2l6ZSBpcyBhbiBpbnRlZ2VyKVxuICovXG52YXIgbWF0aHJtU2l6ZSA9IGZ1bmN0aW9uKHZhbHVlLCBzaXplLCBtb2RlKSB7XG4gICAgcmV0dXJuIGJ1aWxkQ29tbW9uLm1ha2VTeW1ib2wodmFsdWUsIFwiU2l6ZVwiICsgc2l6ZSArIFwiLVJlZ3VsYXJcIiwgbW9kZSk7XG59O1xuXG4vKipcbiAqIFB1dHMgYSBkZWxpbWl0ZXIgc3BhbiBpbiBhIGdpdmVuIHN0eWxlLCBhbmQgYWRkcyBhcHByb3ByaWF0ZSBoZWlnaHQsIGRlcHRoLFxuICogYW5kIG1heEZvbnRTaXplcy5cbiAqL1xudmFyIHN0eWxlV3JhcCA9IGZ1bmN0aW9uKGRlbGltLCB0b1N0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIHNwYW4gPSBtYWtlU3BhbihcbiAgICAgICAgW1wic3R5bGUtd3JhcFwiLCBvcHRpb25zLnN0eWxlLnJlc2V0KCksIHRvU3R5bGUuY2xzKCldLCBbZGVsaW1dKTtcblxuICAgIHZhciBtdWx0aXBsaWVyID0gdG9TdHlsZS5zaXplTXVsdGlwbGllciAvIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG5cbiAgICBzcGFuLmhlaWdodCAqPSBtdWx0aXBsaWVyO1xuICAgIHNwYW4uZGVwdGggKj0gbXVsdGlwbGllcjtcbiAgICBzcGFuLm1heEZvbnRTaXplID0gdG9TdHlsZS5zaXplTXVsdGlwbGllcjtcblxuICAgIHJldHVybiBzcGFuO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIHNtYWxsIGRlbGltaXRlci4gVGhpcyBpcyBhIGRlbGltaXRlciB0aGF0IGNvbWVzIGluIHRoZSBNYWluLVJlZ3VsYXJcbiAqIGZvbnQsIGJ1dCBpcyByZXN0eWxlZCB0byBlaXRoZXIgYmUgaW4gdGV4dHN0eWxlLCBzY3JpcHRzdHlsZSwgb3JcbiAqIHNjcmlwdHNjcmlwdHN0eWxlLlxuICovXG52YXIgbWFrZVNtYWxsRGVsaW0gPSBmdW5jdGlvbihkZWxpbSwgc3R5bGUsIGNlbnRlciwgb3B0aW9ucywgbW9kZSkge1xuICAgIHZhciB0ZXh0ID0gYnVpbGRDb21tb24ubWFrZVN5bWJvbChkZWxpbSwgXCJNYWluLVJlZ3VsYXJcIiwgbW9kZSk7XG5cbiAgICB2YXIgc3BhbiA9IHN0eWxlV3JhcCh0ZXh0LCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgIHZhciBzaGlmdCA9XG4gICAgICAgICAgICAoMSAtIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXIgLyBzdHlsZS5zaXplTXVsdGlwbGllcikgKlxuICAgICAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5heGlzSGVpZ2h0O1xuXG4gICAgICAgIHNwYW4uc3R5bGUudG9wID0gc2hpZnQgKyBcImVtXCI7XG4gICAgICAgIHNwYW4uaGVpZ2h0IC09IHNoaWZ0O1xuICAgICAgICBzcGFuLmRlcHRoICs9IHNoaWZ0O1xuICAgIH1cblxuICAgIHJldHVybiBzcGFuO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGxhcmdlIGRlbGltaXRlci4gVGhpcyBpcyBhIGRlbGltaXRlciB0aGF0IGNvbWVzIGluIHRoZSBTaXplMSwgU2l6ZTIsXG4gKiBTaXplMywgb3IgU2l6ZTQgZm9udHMuIEl0IGlzIGFsd2F5cyByZW5kZXJlZCBpbiB0ZXh0c3R5bGUuXG4gKi9cbnZhciBtYWtlTGFyZ2VEZWxpbSA9IGZ1bmN0aW9uKGRlbGltLCBzaXplLCBjZW50ZXIsIG9wdGlvbnMsIG1vZGUpIHtcbiAgICB2YXIgaW5uZXIgPSBtYXRocm1TaXplKGRlbGltLCBzaXplLCBtb2RlKTtcblxuICAgIHZhciBzcGFuID0gc3R5bGVXcmFwKFxuICAgICAgICBtYWtlU3BhbihbXCJkZWxpbXNpemluZ1wiLCBcInNpemVcIiArIHNpemVdLFxuICAgICAgICAgICAgICAgICBbaW5uZXJdLCBvcHRpb25zLmdldENvbG9yKCkpLFxuICAgICAgICBTdHlsZS5URVhULCBvcHRpb25zKTtcblxuICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgdmFyIHNoaWZ0ID0gKDEgLSBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyKSAqXG4gICAgICAgICAgICBmb250TWV0cmljcy5tZXRyaWNzLmF4aXNIZWlnaHQ7XG5cbiAgICAgICAgc3Bhbi5zdHlsZS50b3AgPSBzaGlmdCArIFwiZW1cIjtcbiAgICAgICAgc3Bhbi5oZWlnaHQgLT0gc2hpZnQ7XG4gICAgICAgIHNwYW4uZGVwdGggKz0gc2hpZnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYW47XG59O1xuXG4vKipcbiAqIE1ha2UgYW4gaW5uZXIgc3BhbiB3aXRoIHRoZSBnaXZlbiBvZmZzZXQgYW5kIGluIHRoZSBnaXZlbiBmb250LiBUaGlzIGlzIHVzZWRcbiAqIGluIGBtYWtlU3RhY2tlZERlbGltYCB0byBtYWtlIHRoZSBzdGFja2luZyBwaWVjZXMgZm9yIHRoZSBkZWxpbWl0ZXIuXG4gKi9cbnZhciBtYWtlSW5uZXIgPSBmdW5jdGlvbihzeW1ib2wsIGZvbnQsIG1vZGUpIHtcbiAgICB2YXIgc2l6ZUNsYXNzO1xuICAgIC8vIEFwcGx5IHRoZSBjb3JyZWN0IENTUyBjbGFzcyB0byBjaG9vc2UgdGhlIHJpZ2h0IGZvbnQuXG4gICAgaWYgKGZvbnQgPT09IFwiU2l6ZTEtUmVndWxhclwiKSB7XG4gICAgICAgIHNpemVDbGFzcyA9IFwiZGVsaW0tc2l6ZTFcIjtcbiAgICB9IGVsc2UgaWYgKGZvbnQgPT09IFwiU2l6ZTQtUmVndWxhclwiKSB7XG4gICAgICAgIHNpemVDbGFzcyA9IFwiZGVsaW0tc2l6ZTRcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5uZXIgPSBtYWtlU3BhbihcbiAgICAgICAgW1wiZGVsaW1zaXppbmdpbm5lclwiLCBzaXplQ2xhc3NdLFxuICAgICAgICBbbWFrZVNwYW4oW10sIFtidWlsZENvbW1vbi5tYWtlU3ltYm9sKHN5bWJvbCwgZm9udCwgbW9kZSldKV0pO1xuXG4gICAgLy8gU2luY2UgdGhpcyB3aWxsIGJlIHBhc3NlZCBpbnRvIGBtYWtlVkxpc3RgIGluIHRoZSBlbmQsIHdyYXAgdGhlIGVsZW1lbnRcbiAgICAvLyBpbiB0aGUgYXBwcm9wcmlhdGUgdGFnIHRoYXQgVkxpc3QgdXNlcy5cbiAgICByZXR1cm4ge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBpbm5lcn07XG59O1xuXG4vKipcbiAqIE1ha2UgYSBzdGFja2VkIGRlbGltaXRlciBvdXQgb2YgYSBnaXZlbiBkZWxpbWl0ZXIsIHdpdGggdGhlIHRvdGFsIGhlaWdodCBhdFxuICogbGVhc3QgYGhlaWdodFRvdGFsYC4gVGhpcyByb3V0aW5lIGlzIG1lbnRpb25lZCBvbiBwYWdlIDQ0MiBvZiB0aGUgVGVYYm9vay5cbiAqL1xudmFyIG1ha2VTdGFja2VkRGVsaW0gPSBmdW5jdGlvbihkZWxpbSwgaGVpZ2h0VG90YWwsIGNlbnRlciwgb3B0aW9ucywgbW9kZSkge1xuICAgIC8vIFRoZXJlIGFyZSBmb3VyIHBhcnRzLCB0aGUgdG9wLCBhbiBvcHRpb25hbCBtaWRkbGUsIGEgcmVwZWF0ZWQgcGFydCwgYW5kIGFcbiAgICAvLyBib3R0b20uXG4gICAgdmFyIHRvcCwgbWlkZGxlLCByZXBlYXQsIGJvdHRvbTtcbiAgICB0b3AgPSByZXBlYXQgPSBib3R0b20gPSBkZWxpbTtcbiAgICBtaWRkbGUgPSBudWxsO1xuICAgIC8vIEFsc28ga2VlcCB0cmFjayBvZiB3aGF0IGZvbnQgdGhlIGRlbGltaXRlcnMgYXJlIGluXG4gICAgdmFyIGZvbnQgPSBcIlNpemUxLVJlZ3VsYXJcIjtcblxuICAgIC8vIFdlIHNldCB0aGUgcGFydHMgYW5kIGZvbnQgYmFzZWQgb24gdGhlIHN5bWJvbC4gTm90ZSB0aGF0IHdlIHVzZVxuICAgIC8vICdcXHUyM2QwJyBpbnN0ZWFkIG9mICd8JyBhbmQgJ1xcdTIwMTYnIGluc3RlYWQgb2YgJ1xcXFx8JyBmb3IgdGhlXG4gICAgLy8gcmVwZWF0cyBvZiB0aGUgYXJyb3dzXG4gICAgaWYgKGRlbGltID09PSBcIlxcXFx1cGFycm93XCIpIHtcbiAgICAgICAgcmVwZWF0ID0gYm90dG9tID0gXCJcXHUyM2QwXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxcVXBhcnJvd1wiKSB7XG4gICAgICAgIHJlcGVhdCA9IGJvdHRvbSA9IFwiXFx1MjAxNlwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXFxcXGRvd25hcnJvd1wiKSB7XG4gICAgICAgIHRvcCA9IHJlcGVhdCA9IFwiXFx1MjNkMFwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXFxcXERvd25hcnJvd1wiKSB7XG4gICAgICAgIHRvcCA9IHJlcGVhdCA9IFwiXFx1MjAxNlwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXFxcXHVwZG93bmFycm93XCIpIHtcbiAgICAgICAgdG9wID0gXCJcXFxcdXBhcnJvd1wiO1xuICAgICAgICByZXBlYXQgPSBcIlxcdTIzZDBcIjtcbiAgICAgICAgYm90dG9tID0gXCJcXFxcZG93bmFycm93XCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxcVXBkb3duYXJyb3dcIikge1xuICAgICAgICB0b3AgPSBcIlxcXFxVcGFycm93XCI7XG4gICAgICAgIHJlcGVhdCA9IFwiXFx1MjAxNlwiO1xuICAgICAgICBib3R0b20gPSBcIlxcXFxEb3duYXJyb3dcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIltcIiB8fCBkZWxpbSA9PT0gXCJcXFxcbGJyYWNrXCIpIHtcbiAgICAgICAgdG9wID0gXCJcXHUyM2ExXCI7XG4gICAgICAgIHJlcGVhdCA9IFwiXFx1MjNhMlwiO1xuICAgICAgICBib3R0b20gPSBcIlxcdTIzYTNcIjtcbiAgICAgICAgZm9udCA9IFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXVwiIHx8IGRlbGltID09PSBcIlxcXFxyYnJhY2tcIikge1xuICAgICAgICB0b3AgPSBcIlxcdTIzYTRcIjtcbiAgICAgICAgcmVwZWF0ID0gXCJcXHUyM2E1XCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNhNlwiO1xuICAgICAgICBmb250ID0gXCJTaXplNC1SZWd1bGFyXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxcbGZsb29yXCIpIHtcbiAgICAgICAgcmVwZWF0ID0gdG9wID0gXCJcXHUyM2EyXCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNhM1wiO1xuICAgICAgICBmb250ID0gXCJTaXplNC1SZWd1bGFyXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxcbGNlaWxcIikge1xuICAgICAgICB0b3AgPSBcIlxcdTIzYTFcIjtcbiAgICAgICAgcmVwZWF0ID0gYm90dG9tID0gXCJcXHUyM2EyXCI7XG4gICAgICAgIGZvbnQgPSBcIlNpemU0LVJlZ3VsYXJcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIlxcXFxyZmxvb3JcIikge1xuICAgICAgICByZXBlYXQgPSB0b3AgPSBcIlxcdTIzYTVcIjtcbiAgICAgICAgYm90dG9tID0gXCJcXHUyM2E2XCI7XG4gICAgICAgIGZvbnQgPSBcIlNpemU0LVJlZ3VsYXJcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIlxcXFxyY2VpbFwiKSB7XG4gICAgICAgIHRvcCA9IFwiXFx1MjNhNFwiO1xuICAgICAgICByZXBlYXQgPSBib3R0b20gPSBcIlxcdTIzYTVcIjtcbiAgICAgICAgZm9udCA9IFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiKFwiKSB7XG4gICAgICAgIHRvcCA9IFwiXFx1MjM5YlwiO1xuICAgICAgICByZXBlYXQgPSBcIlxcdTIzOWNcIjtcbiAgICAgICAgYm90dG9tID0gXCJcXHUyMzlkXCI7XG4gICAgICAgIGZvbnQgPSBcIlNpemU0LVJlZ3VsYXJcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIilcIikge1xuICAgICAgICB0b3AgPSBcIlxcdTIzOWVcIjtcbiAgICAgICAgcmVwZWF0ID0gXCJcXHUyMzlmXCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNhMFwiO1xuICAgICAgICBmb250ID0gXCJTaXplNC1SZWd1bGFyXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxce1wiIHx8IGRlbGltID09PSBcIlxcXFxsYnJhY2VcIikge1xuICAgICAgICB0b3AgPSBcIlxcdTIzYTdcIjtcbiAgICAgICAgbWlkZGxlID0gXCJcXHUyM2E4XCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNhOVwiO1xuICAgICAgICByZXBlYXQgPSBcIlxcdTIzYWFcIjtcbiAgICAgICAgZm9udCA9IFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXFxcXH1cIiB8fCBkZWxpbSA9PT0gXCJcXFxccmJyYWNlXCIpIHtcbiAgICAgICAgdG9wID0gXCJcXHUyM2FiXCI7XG4gICAgICAgIG1pZGRsZSA9IFwiXFx1MjNhY1wiO1xuICAgICAgICBib3R0b20gPSBcIlxcdTIzYWRcIjtcbiAgICAgICAgcmVwZWF0ID0gXCJcXHUyM2FhXCI7XG4gICAgICAgIGZvbnQgPSBcIlNpemU0LVJlZ3VsYXJcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIlxcXFxzdXJkXCIpIHtcbiAgICAgICAgdG9wID0gXCJcXHVlMDAxXCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNiN1wiO1xuICAgICAgICByZXBlYXQgPSBcIlxcdWUwMDBcIjtcbiAgICAgICAgZm9udCA9IFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbWV0cmljcyBvZiB0aGUgZm91ciBzZWN0aW9uc1xuICAgIHZhciB0b3BNZXRyaWNzID0gZ2V0TWV0cmljcyh0b3AsIGZvbnQpO1xuICAgIHZhciB0b3BIZWlnaHRUb3RhbCA9IHRvcE1ldHJpY3MuaGVpZ2h0ICsgdG9wTWV0cmljcy5kZXB0aDtcbiAgICB2YXIgcmVwZWF0TWV0cmljcyA9IGdldE1ldHJpY3MocmVwZWF0LCBmb250KTtcbiAgICB2YXIgcmVwZWF0SGVpZ2h0VG90YWwgPSByZXBlYXRNZXRyaWNzLmhlaWdodCArIHJlcGVhdE1ldHJpY3MuZGVwdGg7XG4gICAgdmFyIGJvdHRvbU1ldHJpY3MgPSBnZXRNZXRyaWNzKGJvdHRvbSwgZm9udCk7XG4gICAgdmFyIGJvdHRvbUhlaWdodFRvdGFsID0gYm90dG9tTWV0cmljcy5oZWlnaHQgKyBib3R0b21NZXRyaWNzLmRlcHRoO1xuICAgIHZhciBtaWRkbGVNZXRyaWNzLCBtaWRkbGVIZWlnaHRUb3RhbDtcbiAgICBpZiAobWlkZGxlICE9PSBudWxsKSB7XG4gICAgICAgIG1pZGRsZU1ldHJpY3MgPSBnZXRNZXRyaWNzKG1pZGRsZSwgZm9udCk7XG4gICAgICAgIG1pZGRsZUhlaWdodFRvdGFsID0gbWlkZGxlTWV0cmljcy5oZWlnaHQgKyBtaWRkbGVNZXRyaWNzLmRlcHRoO1xuICAgIH1cblxuICAgIC8vIENhbGN1YXRlIHRoZSByZWFsIGhlaWdodCB0aGF0IHRoZSBkZWxpbWl0ZXIgd2lsbCBoYXZlLiBJdCBpcyBhdCBsZWFzdCB0aGVcbiAgICAvLyBzaXplIG9mIHRoZSB0b3AsIGJvdHRvbSwgYW5kIG9wdGlvbmFsIG1pZGRsZSBjb21iaW5lZC5cbiAgICB2YXIgcmVhbEhlaWdodFRvdGFsID0gdG9wSGVpZ2h0VG90YWwgKyBib3R0b21IZWlnaHRUb3RhbDtcbiAgICBpZiAobWlkZGxlICE9PSBudWxsKSB7XG4gICAgICAgIHJlYWxIZWlnaHRUb3RhbCArPSBtaWRkbGVIZWlnaHRUb3RhbDtcbiAgICB9XG5cbiAgICAvLyBUaGVuIGFkZCByZXBlYXRlZCBwaWVjZXMgdW50aWwgd2UgcmVhY2ggdGhlIHNwZWNpZmllZCBoZWlnaHQuXG4gICAgd2hpbGUgKHJlYWxIZWlnaHRUb3RhbCA8IGhlaWdodFRvdGFsKSB7XG4gICAgICAgIHJlYWxIZWlnaHRUb3RhbCArPSByZXBlYXRIZWlnaHRUb3RhbDtcbiAgICAgICAgaWYgKG1pZGRsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBtaWRkbGUgc2VjdGlvbiwgd2UgbmVlZCBhbiBlcXVhbCBudW1iZXIgb2YgcGllY2VzXG4gICAgICAgICAgICAvLyBvbiB0aGUgdG9wIGFuZCBib3R0b20uXG4gICAgICAgICAgICByZWFsSGVpZ2h0VG90YWwgKz0gcmVwZWF0SGVpZ2h0VG90YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgY2VudGVyIG9mIHRoZSBkZWxpbWl0ZXIgaXMgcGxhY2VkIGF0IHRoZSBjZW50ZXIgb2YgdGhlIGF4aXMuIE5vdGVcbiAgICAvLyB0aGF0IGluIHRoaXMgY29udGV4dCwgXCJjZW50ZXJcIiBtZWFucyB0aGF0IHRoZSBkZWxpbWl0ZXIgc2hvdWxkIGJlXG4gICAgLy8gY2VudGVyZWQgYXJvdW5kIHRoZSBheGlzIGluIHRoZSBjdXJyZW50IHN0eWxlLCB3aGlsZSBub3JtYWxseSBpdCBpc1xuICAgIC8vIGNlbnRlcmVkIGFyb3VuZCB0aGUgYXhpcyBpbiB0ZXh0c3R5bGUuXG4gICAgdmFyIGF4aXNIZWlnaHQgPSBmb250TWV0cmljcy5tZXRyaWNzLmF4aXNIZWlnaHQ7XG4gICAgaWYgKGNlbnRlcikge1xuICAgICAgICBheGlzSGVpZ2h0ICo9IG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG4gICAgfVxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGVwdGhcbiAgICB2YXIgZGVwdGggPSByZWFsSGVpZ2h0VG90YWwgLyAyIC0gYXhpc0hlaWdodDtcblxuICAgIC8vIE5vdywgd2Ugc3RhcnQgYnVpbGRpbmcgdGhlIHBpZWNlcyB0aGF0IHdpbGwgZ28gaW50byB0aGUgdmxpc3RcblxuICAgIC8vIEtlZXAgYSBsaXN0IG9mIHRoZSBpbm5lciBwaWVjZXNcbiAgICB2YXIgaW5uZXJzID0gW107XG5cbiAgICAvLyBBZGQgdGhlIGJvdHRvbSBzeW1ib2xcbiAgICBpbm5lcnMucHVzaChtYWtlSW5uZXIoYm90dG9tLCBmb250LCBtb2RlKSk7XG5cbiAgICB2YXIgaTtcbiAgICBpZiAobWlkZGxlID09PSBudWxsKSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHJlcGVhdGVkIHN5bWJvbHMgd2UgbmVlZFxuICAgICAgICB2YXIgcmVwZWF0SGVpZ2h0ID0gcmVhbEhlaWdodFRvdGFsIC0gdG9wSGVpZ2h0VG90YWwgLSBib3R0b21IZWlnaHRUb3RhbDtcbiAgICAgICAgdmFyIHN5bWJvbENvdW50ID0gTWF0aC5jZWlsKHJlcGVhdEhlaWdodCAvIHJlcGVhdEhlaWdodFRvdGFsKTtcblxuICAgICAgICAvLyBBZGQgdGhhdCBtYW55IHN5bWJvbHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN5bWJvbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlubmVycy5wdXNoKG1ha2VJbm5lcihyZXBlYXQsIGZvbnQsIG1vZGUpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdoZW4gdGhlcmUgaXMgYSBtaWRkbGUgYml0LCB3ZSBuZWVkIHRoZSBtaWRkbGUgcGFydCBhbmQgdHdvIHJlcGVhdGVkXG4gICAgICAgIC8vIHNlY3Rpb25zXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc3ltYm9scyBuZWVkZWQgZm9yIHRoZSB0b3AgYW5kIGJvdHRvbVxuICAgICAgICAvLyByZXBlYXRlZCBwYXJ0c1xuICAgICAgICB2YXIgdG9wUmVwZWF0SGVpZ2h0ID1cbiAgICAgICAgICAgIHJlYWxIZWlnaHRUb3RhbCAvIDIgLSB0b3BIZWlnaHRUb3RhbCAtIG1pZGRsZUhlaWdodFRvdGFsIC8gMjtcbiAgICAgICAgdmFyIHRvcFN5bWJvbENvdW50ID0gTWF0aC5jZWlsKHRvcFJlcGVhdEhlaWdodCAvIHJlcGVhdEhlaWdodFRvdGFsKTtcblxuICAgICAgICB2YXIgYm90dG9tUmVwZWF0SGVpZ2h0ID1cbiAgICAgICAgICAgIHJlYWxIZWlnaHRUb3RhbCAvIDIgLSB0b3BIZWlnaHRUb3RhbCAtIG1pZGRsZUhlaWdodFRvdGFsIC8gMjtcbiAgICAgICAgdmFyIGJvdHRvbVN5bWJvbENvdW50ID1cbiAgICAgICAgICAgIE1hdGguY2VpbChib3R0b21SZXBlYXRIZWlnaHQgLyByZXBlYXRIZWlnaHRUb3RhbCk7XG5cbiAgICAgICAgLy8gQWRkIHRoZSB0b3AgcmVwZWF0ZWQgcGFydFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9wU3ltYm9sQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgaW5uZXJzLnB1c2gobWFrZUlubmVyKHJlcGVhdCwgZm9udCwgbW9kZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBtaWRkbGUgcGllY2VcbiAgICAgICAgaW5uZXJzLnB1c2gobWFrZUlubmVyKG1pZGRsZSwgZm9udCwgbW9kZSkpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgYm90dG9tIHJlcGVhdGVkIHBhcnRcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvdHRvbVN5bWJvbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlubmVycy5wdXNoKG1ha2VJbm5lcihyZXBlYXQsIGZvbnQsIG1vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgdG9wIHN5bWJvbFxuICAgIGlubmVycy5wdXNoKG1ha2VJbm5lcih0b3AsIGZvbnQsIG1vZGUpKTtcblxuICAgIC8vIEZpbmFsbHksIGJ1aWxkIHRoZSB2bGlzdFxuICAgIHZhciBpbm5lciA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChpbm5lcnMsIFwiYm90dG9tXCIsIGRlcHRoLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBzdHlsZVdyYXAoXG4gICAgICAgIG1ha2VTcGFuKFtcImRlbGltc2l6aW5nXCIsIFwibXVsdFwiXSwgW2lubmVyXSwgb3B0aW9ucy5nZXRDb2xvcigpKSxcbiAgICAgICAgU3R5bGUuVEVYVCwgb3B0aW9ucyk7XG59O1xuXG4vLyBUaGVyZSBhcmUgdGhyZWUga2luZHMgb2YgZGVsaW1pdGVycywgZGVsaW1pdGVycyB0aGF0IHN0YWNrIHdoZW4gdGhleSBiZWNvbWVcbi8vIHRvbyBsYXJnZVxudmFyIHN0YWNrTGFyZ2VEZWxpbWl0ZXJzID0gW1xuICAgIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXFxcXGxicmFja1wiLCBcIl1cIiwgXCJcXFxccmJyYWNrXCIsXG4gICAgXCJcXFxce1wiLCBcIlxcXFxsYnJhY2VcIiwgXCJcXFxcfVwiLCBcIlxcXFxyYnJhY2VcIixcbiAgICBcIlxcXFxsZmxvb3JcIiwgXCJcXFxccmZsb29yXCIsIFwiXFxcXGxjZWlsXCIsIFwiXFxcXHJjZWlsXCIsXG4gICAgXCJcXFxcc3VyZFwiXG5dO1xuXG4vLyBkZWxpbWl0ZXJzIHRoYXQgYWx3YXlzIHN0YWNrXG52YXIgc3RhY2tBbHdheXNEZWxpbWl0ZXJzID0gW1xuICAgIFwiXFxcXHVwYXJyb3dcIiwgXCJcXFxcZG93bmFycm93XCIsIFwiXFxcXHVwZG93bmFycm93XCIsXG4gICAgXCJcXFxcVXBhcnJvd1wiLCBcIlxcXFxEb3duYXJyb3dcIiwgXCJcXFxcVXBkb3duYXJyb3dcIixcbiAgICBcInxcIiwgXCJcXFxcfFwiLCBcIlxcXFx2ZXJ0XCIsIFwiXFxcXFZlcnRcIlxuXTtcblxuLy8gYW5kIGRlbGltaXRlcnMgdGhhdCBuZXZlciBzdGFja1xudmFyIHN0YWNrTmV2ZXJEZWxpbWl0ZXJzID0gW1xuICAgIFwiPFwiLCBcIj5cIiwgXCJcXFxcbGFuZ2xlXCIsIFwiXFxcXHJhbmdsZVwiLCBcIi9cIiwgXCJcXFxcYmFja3NsYXNoXCJcbl07XG5cbi8vIE1ldHJpY3Mgb2YgdGhlIGRpZmZlcmVudCBzaXplcy4gRm91bmQgYnkgbG9va2luZyBhdCBUZVgncyBvdXRwdXQgb2Zcbi8vICRcXGJpZ2x8IC8vIFxcQmlnbHwgXFxiaWdnbHwgXFxCaWdnbHwgXFxzaG93bGlzdHMkXG4vLyBVc2VkIHRvIGNyZWF0ZSBzdGFja2VkIGRlbGltaXRlcnMgb2YgYXBwcm9wcmlhdGUgc2l6ZXMgaW4gbWFrZVNpemVkRGVsaW0uXG52YXIgc2l6ZVRvTWF4SGVpZ2h0ID0gWzAsIDEuMiwgMS44LCAyLjQsIDMuMF07XG5cbi8qKlxuICogVXNlZCB0byBjcmVhdGUgYSBkZWxpbWl0ZXIgb2YgYSBzcGVjaWZpYyBzaXplLCB3aGVyZSBgc2l6ZWAgaXMgMSwgMiwgMywgb3IgNC5cbiAqL1xudmFyIG1ha2VTaXplZERlbGltID0gZnVuY3Rpb24oZGVsaW0sIHNpemUsIG9wdGlvbnMsIG1vZGUpIHtcbiAgICAvLyA8IGFuZCA+IHR1cm4gaW50byBcXGxhbmdsZSBhbmQgXFxyYW5nbGUgaW4gZGVsaW1pdGVyc1xuICAgIGlmIChkZWxpbSA9PT0gXCI8XCIpIHtcbiAgICAgICAgZGVsaW0gPSBcIlxcXFxsYW5nbGVcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIj5cIikge1xuICAgICAgICBkZWxpbSA9IFwiXFxcXHJhbmdsZVwiO1xuICAgIH1cblxuICAgIC8vIFNpemVkIGRlbGltaXRlcnMgYXJlIG5ldmVyIGNlbnRlcmVkLlxuICAgIGlmICh1dGlscy5jb250YWlucyhzdGFja0xhcmdlRGVsaW1pdGVycywgZGVsaW0pIHx8XG4gICAgICAgIHV0aWxzLmNvbnRhaW5zKHN0YWNrTmV2ZXJEZWxpbWl0ZXJzLCBkZWxpbSkpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VMYXJnZURlbGltKGRlbGltLCBzaXplLCBmYWxzZSwgb3B0aW9ucywgbW9kZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5jb250YWlucyhzdGFja0Fsd2F5c0RlbGltaXRlcnMsIGRlbGltKSkge1xuICAgICAgICByZXR1cm4gbWFrZVN0YWNrZWREZWxpbShcbiAgICAgICAgICAgIGRlbGltLCBzaXplVG9NYXhIZWlnaHRbc2l6ZV0sIGZhbHNlLCBvcHRpb25zLCBtb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcIklsbGVnYWwgZGVsaW1pdGVyOiAnXCIgKyBkZWxpbSArIFwiJ1wiKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoZXJlIGFyZSB0aHJlZSBkaWZmZXJlbnQgc2VxdWVuY2VzIG9mIGRlbGltaXRlciBzaXplcyB0aGF0IHRoZSBkZWxpbWl0ZXJzXG4gKiBmb2xsb3cgZGVwZW5kaW5nIG9uIHRoZSBraW5kIG9mIGRlbGltaXRlci4gVGhpcyBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgY3VzdG9tXG4gKiBzaXplZCBkZWxpbWl0ZXJzIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGNyZWF0ZSBhIHNtYWxsLCBsYXJnZSwgb3Igc3RhY2tlZFxuICogZGVsaW1pdGVyLlxuICpcbiAqIEluIHJlYWwgVGVYLCB0aGVzZSBzZXF1ZW5jZXMgYXJlbid0IGV4cGxpY2l0bHkgZGVmaW5lZCwgYnV0IGFyZSBpbnN0ZWFkXG4gKiBkZWZpbmVkIGluc2lkZSB0aGUgZm9udCBtZXRyaWNzLiBTaW5jZSB0aGVyZSBhcmUgb25seSB0aHJlZSBzZXF1ZW5jZXMgdGhhdFxuICogYXJlIHBvc3NpYmxlIGZvciB0aGUgZGVsaW1pdGVycyB0aGF0IFRlWCBkZWZpbmVzLCBpdCBpcyBlYXNpZXIgdG8ganVzdCBlbmNvZGVcbiAqIHRoZW0gZXhwbGljaXRseSBoZXJlLlxuICovXG5cbi8vIERlbGltaXRlcnMgdGhhdCBuZXZlciBzdGFjayB0cnkgc21hbGwgZGVsaW1pdGVycyBhbmQgbGFyZ2UgZGVsaW1pdGVycyBvbmx5XG52YXIgc3RhY2tOZXZlckRlbGltaXRlclNlcXVlbmNlID0gW1xuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5TQ1JJUFRTQ1JJUFR9LFxuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5TQ1JJUFR9LFxuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5URVhUfSxcbiAgICB7dHlwZTogXCJsYXJnZVwiLCBzaXplOiAxfSxcbiAgICB7dHlwZTogXCJsYXJnZVwiLCBzaXplOiAyfSxcbiAgICB7dHlwZTogXCJsYXJnZVwiLCBzaXplOiAzfSxcbiAgICB7dHlwZTogXCJsYXJnZVwiLCBzaXplOiA0fVxuXTtcblxuLy8gRGVsaW1pdGVycyB0aGF0IGFsd2F5cyBzdGFjayB0cnkgdGhlIHNtYWxsIGRlbGltaXRlcnMgZmlyc3QsIHRoZW4gc3RhY2tcbnZhciBzdGFja0Fsd2F5c0RlbGltaXRlclNlcXVlbmNlID0gW1xuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5TQ1JJUFRTQ1JJUFR9LFxuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5TQ1JJUFR9LFxuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5URVhUfSxcbiAgICB7dHlwZTogXCJzdGFja1wifVxuXTtcblxuLy8gRGVsaW1pdGVycyB0aGF0IHN0YWNrIHdoZW4gbGFyZ2UgdHJ5IHRoZSBzbWFsbCBhbmQgdGhlbiBsYXJnZSBkZWxpbWl0ZXJzLCBhbmRcbi8vIHN0YWNrIGFmdGVyd2FyZHNcbnZhciBzdGFja0xhcmdlRGVsaW1pdGVyU2VxdWVuY2UgPSBbXG4gICAge3R5cGU6IFwic21hbGxcIiwgc3R5bGU6IFN0eWxlLlNDUklQVFNDUklQVH0sXG4gICAge3R5cGU6IFwic21hbGxcIiwgc3R5bGU6IFN0eWxlLlNDUklQVH0sXG4gICAge3R5cGU6IFwic21hbGxcIiwgc3R5bGU6IFN0eWxlLlRFWFR9LFxuICAgIHt0eXBlOiBcImxhcmdlXCIsIHNpemU6IDF9LFxuICAgIHt0eXBlOiBcImxhcmdlXCIsIHNpemU6IDJ9LFxuICAgIHt0eXBlOiBcImxhcmdlXCIsIHNpemU6IDN9LFxuICAgIHt0eXBlOiBcImxhcmdlXCIsIHNpemU6IDR9LFxuICAgIHt0eXBlOiBcInN0YWNrXCJ9XG5dO1xuXG4vKipcbiAqIEdldCB0aGUgZm9udCB1c2VkIGluIGEgZGVsaW1pdGVyIGJhc2VkIG9uIHdoYXQga2luZCBvZiBkZWxpbWl0ZXIgaXQgaXMuXG4gKi9cbnZhciBkZWxpbVR5cGVUb0ZvbnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGUudHlwZSA9PT0gXCJzbWFsbFwiKSB7XG4gICAgICAgIHJldHVybiBcIk1haW4tUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAodHlwZS50eXBlID09PSBcImxhcmdlXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiU2l6ZVwiICsgdHlwZS5zaXplICsgXCItUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAodHlwZS50eXBlID09PSBcInN0YWNrXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH1cbn07XG5cbi8qKlxuICogVHJhdmVyc2UgYSBzZXF1ZW5jZSBvZiB0eXBlcyBvZiBkZWxpbWl0ZXJzIHRvIGRlY2lkZSB3aGF0IGtpbmQgb2YgZGVsaW1pdGVyXG4gKiBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBkZWxpbWl0ZXIgb2YgdGhlIGdpdmVuIGhlaWdodCtkZXB0aC5cbiAqL1xudmFyIHRyYXZlcnNlU2VxdWVuY2UgPSBmdW5jdGlvbihkZWxpbSwgaGVpZ2h0LCBzZXF1ZW5jZSwgb3B0aW9ucykge1xuICAgIC8vIEhlcmUsIHdlIGNob29zZSB0aGUgaW5kZXggd2Ugc2hvdWxkIHN0YXJ0IGF0IGluIHRoZSBzZXF1ZW5jZXMuIEluIHNtYWxsZXJcbiAgICAvLyBzaXplcyAod2hpY2ggY29ycmVzcG9uZCB0byBsYXJnZXIgbnVtYmVycyBpbiBzdHlsZS5zaXplKSB3ZSBzdGFydCBlYXJsaWVyXG4gICAgLy8gaW4gdGhlIHNlcXVlbmNlLiBUaHVzLCBzY3JpcHRzY3JpcHQgc3RhcnRzIGF0IGluZGV4IDMtMz0wLCBzY3JpcHQgc3RhcnRzXG4gICAgLy8gYXQgaW5kZXggMy0yPTEsIHRleHQgc3RhcnRzIGF0IDMtMT0yLCBhbmQgZGlzcGxheSBzdGFydHMgYXQgbWluKDIsMy0wKT0yXG4gICAgdmFyIHN0YXJ0ID0gTWF0aC5taW4oMiwgMyAtIG9wdGlvbnMuc3R5bGUuc2l6ZSk7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlcXVlbmNlW2ldLnR5cGUgPT09IFwic3RhY2tcIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbHdheXMgdGhlIGxhc3QgZGVsaW1pdGVyLCBzbyB3ZSBqdXN0IGJyZWFrIHRoZSBsb29wIG5vdy5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1ldHJpY3MgPSBnZXRNZXRyaWNzKGRlbGltLCBkZWxpbVR5cGVUb0ZvbnQoc2VxdWVuY2VbaV0pKTtcbiAgICAgICAgdmFyIGhlaWdodERlcHRoID0gbWV0cmljcy5oZWlnaHQgKyBtZXRyaWNzLmRlcHRoO1xuXG4gICAgICAgIC8vIFNtYWxsIGRlbGltaXRlcnMgYXJlIHNjYWxlZCBkb3duIHZlcnNpb25zIG9mIHRoZSBzYW1lIGZvbnQsIHNvIHdlXG4gICAgICAgIC8vIGFjY291bnQgZm9yIHRoZSBzdHlsZSBjaGFuZ2Ugc2l6ZS5cblxuICAgICAgICBpZiAoc2VxdWVuY2VbaV0udHlwZSA9PT0gXCJzbWFsbFwiKSB7XG4gICAgICAgICAgICBoZWlnaHREZXB0aCAqPSBzZXF1ZW5jZVtpXS5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBkZWxpbWl0ZXIgYXQgdGhpcyBzaXplIHdvcmtzIGZvciB0aGUgZ2l2ZW4gaGVpZ2h0LlxuICAgICAgICBpZiAoaGVpZ2h0RGVwdGggPiBoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXF1ZW5jZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2UsIHJldHVybiB0aGUgbGFzdCBzZXF1ZW5jZSBlbGVtZW50LlxuICAgIHJldHVybiBzZXF1ZW5jZVtzZXF1ZW5jZS5sZW5ndGggLSAxXTtcbn07XG5cbi8qKlxuICogTWFrZSBhIGRlbGltaXRlciBvZiBhIGdpdmVuIGhlaWdodCtkZXB0aCwgd2l0aCBvcHRpb25hbCBjZW50ZXJpbmcuIEhlcmUsIHdlXG4gKiB0cmF2ZXJzZSB0aGUgc2VxdWVuY2VzLCBhbmQgY3JlYXRlIGEgZGVsaW1pdGVyIHRoYXQgdGhlIHNlcXVlbmNlIHRlbGxzIHVzIHRvLlxuICovXG52YXIgbWFrZUN1c3RvbVNpemVkRGVsaW0gPSBmdW5jdGlvbihkZWxpbSwgaGVpZ2h0LCBjZW50ZXIsIG9wdGlvbnMsIG1vZGUpIHtcbiAgICBpZiAoZGVsaW0gPT09IFwiPFwiKSB7XG4gICAgICAgIGRlbGltID0gXCJcXFxcbGFuZ2xlXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCI+XCIpIHtcbiAgICAgICAgZGVsaW0gPSBcIlxcXFxyYW5nbGVcIjtcbiAgICB9XG5cbiAgICAvLyBEZWNpZGUgd2hhdCBzZXF1ZW5jZSB0byB1c2VcbiAgICB2YXIgc2VxdWVuY2U7XG4gICAgaWYgKHV0aWxzLmNvbnRhaW5zKHN0YWNrTmV2ZXJEZWxpbWl0ZXJzLCBkZWxpbSkpIHtcbiAgICAgICAgc2VxdWVuY2UgPSBzdGFja05ldmVyRGVsaW1pdGVyU2VxdWVuY2U7XG4gICAgfSBlbHNlIGlmICh1dGlscy5jb250YWlucyhzdGFja0xhcmdlRGVsaW1pdGVycywgZGVsaW0pKSB7XG4gICAgICAgIHNlcXVlbmNlID0gc3RhY2tMYXJnZURlbGltaXRlclNlcXVlbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcXVlbmNlID0gc3RhY2tBbHdheXNEZWxpbWl0ZXJTZXF1ZW5jZTtcbiAgICB9XG5cbiAgICAvLyBMb29rIHRocm91Z2ggdGhlIHNlcXVlbmNlXG4gICAgdmFyIGRlbGltVHlwZSA9IHRyYXZlcnNlU2VxdWVuY2UoZGVsaW0sIGhlaWdodCwgc2VxdWVuY2UsIG9wdGlvbnMpO1xuXG4gICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBzZXF1ZW5jZSBlbGVtZW50IHdlIGRlY2lkZWQgb24sIGNhbGwgdGhlIGFwcHJvcHJpYXRlXG4gICAgLy8gZnVuY3Rpb24uXG4gICAgaWYgKGRlbGltVHlwZS50eXBlID09PSBcInNtYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VTbWFsbERlbGltKGRlbGltLCBkZWxpbVR5cGUuc3R5bGUsIGNlbnRlciwgb3B0aW9ucywgbW9kZSk7XG4gICAgfSBlbHNlIGlmIChkZWxpbVR5cGUudHlwZSA9PT0gXCJsYXJnZVwiKSB7XG4gICAgICAgIHJldHVybiBtYWtlTGFyZ2VEZWxpbShkZWxpbSwgZGVsaW1UeXBlLnNpemUsIGNlbnRlciwgb3B0aW9ucywgbW9kZSk7XG4gICAgfSBlbHNlIGlmIChkZWxpbVR5cGUudHlwZSA9PT0gXCJzdGFja1wiKSB7XG4gICAgICAgIHJldHVybiBtYWtlU3RhY2tlZERlbGltKGRlbGltLCBoZWlnaHQsIGNlbnRlciwgb3B0aW9ucywgbW9kZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYWtlIGEgZGVsaW1pdGVyIGZvciB1c2Ugd2l0aCBgXFxsZWZ0YCBhbmQgYFxccmlnaHRgLCBnaXZlbiBhIGhlaWdodCBhbmQgZGVwdGhcbiAqIG9mIGFuIGV4cHJlc3Npb24gdGhhdCB0aGUgZGVsaW1pdGVycyBzdXJyb3VuZC5cbiAqL1xudmFyIG1ha2VMZWZ0UmlnaHREZWxpbSA9IGZ1bmN0aW9uKGRlbGltLCBoZWlnaHQsIGRlcHRoLCBvcHRpb25zLCBtb2RlKSB7XG4gICAgLy8gV2UgYWx3YXlzIGNlbnRlciBcXGxlZnQvXFxyaWdodCBkZWxpbWl0ZXJzLCBzbyB0aGUgYXhpcyBpcyBhbHdheXMgc2hpZnRlZFxuICAgIHZhciBheGlzSGVpZ2h0ID1cbiAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5heGlzSGVpZ2h0ICogb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcblxuICAgIC8vIFRha2VuIGZyb20gVGVYIHNvdXJjZSwgdGV4LndlYiwgZnVuY3Rpb24gbWFrZV9sZWZ0X3JpZ2h0XG4gICAgdmFyIGRlbGltaXRlckZhY3RvciA9IDkwMTtcbiAgICB2YXIgZGVsaW1pdGVyRXh0ZW5kID0gNS4wIC8gZm9udE1ldHJpY3MubWV0cmljcy5wdFBlckVtO1xuXG4gICAgdmFyIG1heERpc3RGcm9tQXhpcyA9IE1hdGgubWF4KFxuICAgICAgICBoZWlnaHQgLSBheGlzSGVpZ2h0LCBkZXB0aCArIGF4aXNIZWlnaHQpO1xuXG4gICAgdmFyIHRvdGFsSGVpZ2h0ID0gTWF0aC5tYXgoXG4gICAgICAgIC8vIEluIHJlYWwgVGVYLCBjYWxjdWxhdGlvbnMgYXJlIGRvbmUgdXNpbmcgaW50ZWdyYWwgdmFsdWVzIHdoaWNoIGFyZVxuICAgICAgICAvLyA2NTUzNiBwZXIgcHQsIG9yIDY1NTM2MCBwZXIgZW0uIFNvLCB0aGUgZGl2aXNpb24gaGVyZSB0cnVuY2F0ZXMgaW5cbiAgICAgICAgLy8gVGVYIGJ1dCBkb2Vzbid0IGhlcmUsIHByb2R1Y2luZyBkaWZmZXJlbnQgcmVzdWx0cy4gSWYgd2Ugd2FudGVkIHRvXG4gICAgICAgIC8vIGV4YWN0bHkgbWF0Y2ggVGVYJ3MgY2FsY3VsYXRpb24sIHdlIGNvdWxkIGRvXG4gICAgICAgIC8vICAgTWF0aC5mbG9vcig2NTUzNjAgKiBtYXhEaXN0RnJvbUF4aXMgLyA1MDApICpcbiAgICAgICAgLy8gICAgZGVsaW1pdGVyRmFjdG9yIC8gNjU1MzYwXG4gICAgICAgIC8vIChUbyBzZWUgdGhlIGRpZmZlcmVuY2UsIGNvbXBhcmVcbiAgICAgICAgLy8gICAgeF57eF57XFxsZWZ0KFxccnVsZXswLjFlbX17MC42OGVtfVxccmlnaHQpfX1cbiAgICAgICAgLy8gaW4gVGVYIGFuZCBLYVRlWClcbiAgICAgICAgbWF4RGlzdEZyb21BeGlzIC8gNTAwICogZGVsaW1pdGVyRmFjdG9yLFxuICAgICAgICAyICogbWF4RGlzdEZyb21BeGlzIC0gZGVsaW1pdGVyRXh0ZW5kKTtcblxuICAgIC8vIEZpbmFsbHksIHdlIGRlZmVyIHRvIGBtYWtlQ3VzdG9tU2l6ZWREZWxpbWAgd2l0aCBvdXIgY2FsY3VsYXRlZCB0b3RhbFxuICAgIC8vIGhlaWdodFxuICAgIHJldHVybiBtYWtlQ3VzdG9tU2l6ZWREZWxpbShkZWxpbSwgdG90YWxIZWlnaHQsIHRydWUsIG9wdGlvbnMsIG1vZGUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2l6ZWREZWxpbTogbWFrZVNpemVkRGVsaW0sXG4gICAgY3VzdG9tU2l6ZWREZWxpbTogbWFrZUN1c3RvbVNpemVkRGVsaW0sXG4gICAgbGVmdFJpZ2h0RGVsaW06IG1ha2VMZWZ0UmlnaHREZWxpbVxufTtcbiIsIi8qKlxuICogVGhlc2Ugb2JqZWN0cyBzdG9yZSB0aGUgZGF0YSBhYm91dCB0aGUgRE9NIG5vZGVzIHdlIGNyZWF0ZSwgYXMgd2VsbCBhcyBzb21lXG4gKiBleHRyYSBkYXRhLiBUaGV5IGNhbiB0aGVuIGJlIHRyYW5zZm9ybWVkIGludG8gcmVhbCBET00gbm9kZXMgd2l0aCB0aGVcbiAqIGB0b05vZGVgIGZ1bmN0aW9uIG9yIEhUTUwgbWFya3VwIHVzaW5nIGB0b01hcmt1cGAuIFRoZXkgYXJlIHVzZWZ1bCBmb3IgYm90aFxuICogc3RvcmluZyBleHRyYSBwcm9wZXJ0aWVzIG9uIHRoZSBub2RlcywgYXMgd2VsbCBhcyBwcm92aWRpbmcgYSB3YXkgdG8gZWFzaWx5XG4gKiB3b3JrIHdpdGggdGhlIERPTS5cbiAqXG4gKiBTaW1pbGFyIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIE1hdGhNTCBub2RlcyBleGlzdCBpbiBtYXRoTUxUcmVlLmpzLlxuICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBIVE1MIGNsYXNzTmFtZSBiYXNlZCBvbiBhIGxpc3Qgb2YgY2xhc3Nlcy4gSW4gYWRkaXRpb24gdG8gam9pbmluZ1xuICogd2l0aCBzcGFjZXMsIHdlIGFsc28gcmVtb3ZlIG51bGwgb3IgZW1wdHkgY2xhc3Nlcy5cbiAqL1xudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24oY2xhc3Nlcykge1xuICAgIGNsYXNzZXMgPSBjbGFzc2VzLnNsaWNlKCk7XG4gICAgZm9yICh2YXIgaSA9IGNsYXNzZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKCFjbGFzc2VzW2ldKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xufTtcblxuLyoqXG4gKiBUaGlzIG5vZGUgcmVwcmVzZW50cyBhIHNwYW4gbm9kZSwgd2l0aCBhIGNsYXNzTmFtZSwgYSBsaXN0IG9mIGNoaWxkcmVuLCBhbmRcbiAqIGFuIGlubGluZSBzdHlsZS4gSXQgYWxzbyBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBpdHMgaGVpZ2h0LCBkZXB0aCwgYW5kXG4gKiBtYXhGb250U2l6ZS5cbiAqL1xuZnVuY3Rpb24gc3BhbihjbGFzc2VzLCBjaGlsZHJlbiwgaGVpZ2h0LCBkZXB0aCwgbWF4Rm9udFNpemUsIHN0eWxlKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcyB8fCBbXTtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW107XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGggfHwgMDtcbiAgICB0aGlzLm1heEZvbnRTaXplID0gbWF4Rm9udFNpemUgfHwgMDtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGUgfHwge307XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG59XG5cbi8qKlxuICogU2V0cyBhbiBhcmJpdHJhcnkgYXR0cmlidXRlIG9uIHRoZSBzcGFuLiBXYXJuaW5nOiB1c2UgdGhpcyB3aXNlbHkuIE5vdCBhbGxcbiAqIGJyb3dzZXJzIHN1cHBvcnQgYXR0cmlidXRlcyB0aGUgc2FtZSwgYW5kIGhhdmluZyB0b28gbWFueSBjdXN0b20gYXR0cmlidXRlc1xuICogaXMgcHJvYmFibHkgYmFkLlxuICovXG5zcGFuLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgc3BhbiBpbnRvIGFuIEhUTUwgbm9kZVxuICovXG5zcGFuLnByb3RvdHlwZS50b05vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgLy8gQXBwbHkgdGhlIGNsYXNzXG4gICAgc3Bhbi5jbGFzc05hbWUgPSBjcmVhdGVDbGFzcyh0aGlzLmNsYXNzZXMpO1xuXG4gICAgLy8gQXBwbHkgaW5saW5lIHN0eWxlc1xuICAgIGZvciAodmFyIHN0eWxlIGluIHRoaXMuc3R5bGUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnN0eWxlLCBzdHlsZSkpIHtcbiAgICAgICAgICAgIHNwYW4uc3R5bGVbc3R5bGVdID0gdGhpcy5zdHlsZVtzdHlsZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgYXR0ciBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHIpKSB7XG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLmF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIHRoZSBjaGlsZHJlbiwgYWxzbyBhcyBIVE1MIG5vZGVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlbltpXS50b05vZGUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYW47XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIHNwYW4gaW50byBhbiBIVE1MIG1hcmt1cCBzdHJpbmdcbiAqL1xuc3Bhbi5wcm90b3R5cGUudG9NYXJrdXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbWFya3VwID0gXCI8c3BhblwiO1xuXG4gICAgLy8gQWRkIHRoZSBjbGFzc1xuICAgIGlmICh0aGlzLmNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIG1hcmt1cCArPSBcIiBjbGFzcz1cXFwiXCI7XG4gICAgICAgIG1hcmt1cCArPSB1dGlscy5lc2NhcGUoY3JlYXRlQ2xhc3ModGhpcy5jbGFzc2VzKSk7XG4gICAgICAgIG1hcmt1cCArPSBcIlxcXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gXCJcIjtcblxuICAgIC8vIEFkZCB0aGUgc3R5bGVzLCBhZnRlciBoeXBoZW5hdGlvblxuICAgIGZvciAodmFyIHN0eWxlIGluIHRoaXMuc3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgICAgICBzdHlsZXMgKz0gdXRpbHMuaHlwaGVuYXRlKHN0eWxlKSArIFwiOlwiICsgdGhpcy5zdHlsZVtzdHlsZV0gKyBcIjtcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHlsZXMpIHtcbiAgICAgICAgbWFya3VwICs9IFwiIHN0eWxlPVxcXCJcIiArIHV0aWxzLmVzY2FwZShzdHlsZXMpICsgXCJcXFwiXCI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgYXR0ciBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHIpKSB7XG4gICAgICAgICAgICBtYXJrdXAgKz0gXCIgXCIgKyBhdHRyICsgXCI9XFxcIlwiO1xuICAgICAgICAgICAgbWFya3VwICs9IHV0aWxzLmVzY2FwZSh0aGlzLmF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICAgICAgbWFya3VwICs9IFwiXFxcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya3VwICs9IFwiPlwiO1xuXG4gICAgLy8gQWRkIHRoZSBtYXJrdXAgb2YgdGhlIGNoaWxkcmVuLCBhbHNvIGFzIG1hcmt1cFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXJrdXAgKz0gdGhpcy5jaGlsZHJlbltpXS50b01hcmt1cCgpO1xuICAgIH1cblxuICAgIG1hcmt1cCArPSBcIjwvc3Bhbj5cIjtcblxuICAgIHJldHVybiBtYXJrdXA7XG59O1xuXG4vKipcbiAqIFRoaXMgbm9kZSByZXByZXNlbnRzIGEgZG9jdW1lbnQgZnJhZ21lbnQsIHdoaWNoIGNvbnRhaW5zIGVsZW1lbnRzLCBidXQgd2hlblxuICogcGxhY2VkIGludG8gdGhlIERPTSBkb2Vzbid0IGhhdmUgYW55IHJlcHJlc2VudGF0aW9uIGl0c2VsZi4gVGh1cywgaXQgb25seVxuICogY29udGFpbnMgY2hpbGRyZW4gYW5kIGRvZXNuJ3QgaGF2ZSBhbnkgSFRNTCBwcm9wZXJ0aWVzLiBJdCBhbHNvIGtlZXBzIHRyYWNrXG4gKiBvZiBhIGhlaWdodCwgZGVwdGgsIGFuZCBtYXhGb250U2l6ZS5cbiAqL1xuZnVuY3Rpb24gZG9jdW1lbnRGcmFnbWVudChjaGlsZHJlbiwgaGVpZ2h0LCBkZXB0aCwgbWF4Rm9udFNpemUpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW107XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGggfHwgMDtcbiAgICB0aGlzLm1heEZvbnRTaXplID0gbWF4Rm9udFNpemUgfHwgMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBmcmFnbWVudCBpbnRvIGEgbm9kZVxuICovXG5kb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS50b05vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBDcmVhdGUgYSBmcmFnbWVudFxuICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBjaGlsZHJlblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5baV0udG9Ob2RlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFnO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBmcmFnbWVudCBpbnRvIEhUTUwgbWFya3VwXG4gKi9cbmRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnRvTWFya3VwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1hcmt1cCA9IFwiXCI7XG5cbiAgICAvLyBTaW1wbHkgY29uY2F0ZW5hdGUgdGhlIG1hcmt1cCBmb3IgdGhlIGNoaWxkcmVuIHRvZ2V0aGVyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcmt1cCArPSB0aGlzLmNoaWxkcmVuW2ldLnRvTWFya3VwKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmt1cDtcbn07XG5cbi8qKlxuICogQSBzeW1ib2wgbm9kZSBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBhIHNpbmdsZSBzeW1ib2wuIEl0IGVpdGhlciByZW5kZXJzXG4gKiB0byBhIHNpbmdsZSB0ZXh0IG5vZGUsIG9yIGEgc3BhbiB3aXRoIGEgc2luZ2xlIHRleHQgbm9kZSBpbiBpdCwgZGVwZW5kaW5nIG9uXG4gKiB3aGV0aGVyIGl0IGhhcyBDU1MgY2xhc3Nlcywgc3R5bGVzLCBvciBuZWVkcyBpdGFsaWMgY29ycmVjdGlvbi5cbiAqL1xuZnVuY3Rpb24gc3ltYm9sTm9kZSh2YWx1ZSwgaGVpZ2h0LCBkZXB0aCwgaXRhbGljLCBza2V3LCBjbGFzc2VzLCBzdHlsZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCBcIlwiO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoIHx8IDA7XG4gICAgdGhpcy5pdGFsaWMgPSBpdGFsaWMgfHwgMDtcbiAgICB0aGlzLnNrZXcgPSBza2V3IHx8IDA7XG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcyB8fCBbXTtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGUgfHwge307XG4gICAgdGhpcy5tYXhGb250U2l6ZSA9IDA7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRleHQgbm9kZSBvciBzcGFuIGZyb20gYSBzeW1ib2wgbm9kZS4gTm90ZSB0aGF0IGEgc3BhbiBpcyBvbmx5XG4gKiBjcmVhdGVkIGlmIGl0IGlzIG5lZWRlZC5cbiAqL1xuc3ltYm9sTm9kZS5wcm90b3R5cGUudG9Ob2RlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnZhbHVlKTtcbiAgICB2YXIgc3BhbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pdGFsaWMgPiAwKSB7XG4gICAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5tYXJnaW5SaWdodCA9IHRoaXMuaXRhbGljICsgXCJlbVwiO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBzcGFuID0gc3BhbiB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBjcmVhdGVDbGFzcyh0aGlzLmNsYXNzZXMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIHN0eWxlIGluIHRoaXMuc3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgICAgICBzcGFuID0gc3BhbiB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW4uc3R5bGVbc3R5bGVdID0gdGhpcy5zdHlsZVtzdHlsZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gc3BhbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciBhIHN5bWJvbCBub2RlLlxuICovXG5zeW1ib2xOb2RlLnByb3RvdHlwZS50b01hcmt1cCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE8oYWxwZXJ0KTogTW9yZSBkdXBsaWNhdGlvbiB0aGFuIEknZCBsaWtlIGZyb21cbiAgICAvLyBzcGFuLnByb3RvdHlwZS50b01hcmt1cCBhbmQgc3ltYm9sTm9kZS5wcm90b3R5cGUudG9Ob2RlLi4uXG4gICAgdmFyIG5lZWRzU3BhbiA9IGZhbHNlO1xuXG4gICAgdmFyIG1hcmt1cCA9IFwiPHNwYW5cIjtcblxuICAgIGlmICh0aGlzLmNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIG5lZWRzU3BhbiA9IHRydWU7XG4gICAgICAgIG1hcmt1cCArPSBcIiBjbGFzcz1cXFwiXCI7XG4gICAgICAgIG1hcmt1cCArPSB1dGlscy5lc2NhcGUoY3JlYXRlQ2xhc3ModGhpcy5jbGFzc2VzKSk7XG4gICAgICAgIG1hcmt1cCArPSBcIlxcXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gXCJcIjtcblxuICAgIGlmICh0aGlzLml0YWxpYyA+IDApIHtcbiAgICAgICAgc3R5bGVzICs9IFwibWFyZ2luLXJpZ2h0OlwiICsgdGhpcy5pdGFsaWMgKyBcImVtO1wiO1xuICAgIH1cbiAgICBmb3IgKHZhciBzdHlsZSBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICAgICAgc3R5bGVzICs9IHV0aWxzLmh5cGhlbmF0ZShzdHlsZSkgKyBcIjpcIiArIHRoaXMuc3R5bGVbc3R5bGVdICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICAgIG5lZWRzU3BhbiA9IHRydWU7XG4gICAgICAgIG1hcmt1cCArPSBcIiBzdHlsZT1cXFwiXCIgKyB1dGlscy5lc2NhcGUoc3R5bGVzKSArIFwiXFxcIlwiO1xuICAgIH1cblxuICAgIHZhciBlc2NhcGVkID0gdXRpbHMuZXNjYXBlKHRoaXMudmFsdWUpO1xuICAgIGlmIChuZWVkc1NwYW4pIHtcbiAgICAgICAgbWFya3VwICs9IFwiPlwiO1xuICAgICAgICBtYXJrdXAgKz0gZXNjYXBlZDtcbiAgICAgICAgbWFya3VwICs9IFwiPC9zcGFuPlwiO1xuICAgICAgICByZXR1cm4gbWFya3VwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlc2NhcGVkO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNwYW46IHNwYW4sXG4gICAgZG9jdW1lbnRGcmFnbWVudDogZG9jdW1lbnRGcmFnbWVudCxcbiAgICBzeW1ib2xOb2RlOiBzeW1ib2xOb2RlXG59O1xuIiwiLyoganNoaW50IHVudXNlZDpmYWxzZSAqL1xuXG52YXIgU3R5bGUgPSByZXF1aXJlKFwiLi9TdHlsZVwiKTtcblxuLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgbWV0cmljcyByZWdhcmRpbmcgZm9udHMgYW5kIGluZGl2aWR1YWwgc3ltYm9scy4gVGhlIHNpZ21hXG4gKiBhbmQgeGkgdmFyaWFibGVzLCBhcyB3ZWxsIGFzIHRoZSBtZXRyaWNNYXAgbWFwIGNvbnRhaW4gZGF0YSBleHRyYWN0ZWQgZnJvbVxuICogVGVYLCBUZVggZm9udCBtZXRyaWNzLCBhbmQgdGhlIFRURiBmaWxlcy4gVGhlc2UgZGF0YSBhcmUgdGhlbiBleHBvc2VkIHZpYSB0aGVcbiAqIGBtZXRyaWNzYCB2YXJpYWJsZSBhbmQgdGhlIGdldENoYXJhY3Rlck1ldHJpY3MgZnVuY3Rpb24uXG4gKi9cblxuLy8gVGhlc2UgZm9udCBtZXRyaWNzIGFyZSBleHRyYWN0ZWQgZnJvbSBUZVggYnkgdXNpbmdcbi8vIFxcZm9udFxcYT1jbW1pMTBcbi8vIFxcc2hvd3RoZVxcZm9udGRpbWVuWFxcYVxuLy8gd2hlcmUgWCBpcyB0aGUgY29ycmVzcG9uZGluZyB2YXJpYWJsZSBudW1iZXIuIFRoZXNlIGNvcnJlc3BvbmQgdG8gdGhlIGZvbnRcbi8vIHBhcmFtZXRlcnMgb2YgdGhlIHN5bWJvbCBmb250cy4gSW4gVGVYLCB0aGVyZSBhcmUgYWN0dWFsbHkgdGhyZWUgc2V0cyBvZlxuLy8gZGltZW5zaW9ucywgb25lIGZvciBlYWNoIG9mIHRleHRzdHlsZSwgc2NyaXB0c3R5bGUsIGFuZCBzY3JpcHRzY3JpcHRzdHlsZSxcbi8vIGJ1dCB3ZSBvbmx5IHVzZSB0aGUgdGV4dHN0eWxlIG9uZXMsIGFuZCBzY2FsZSBjZXJ0YWluIGRpbWVuc2lvbnMgYWNjb3JkaW5nbHkuXG4vLyBTZWUgdGhlIFRlWGJvb2ssIHBhZ2UgNDQxLlxudmFyIHNpZ21hMSA9IDAuMDI1O1xudmFyIHNpZ21hMiA9IDA7XG52YXIgc2lnbWEzID0gMDtcbnZhciBzaWdtYTQgPSAwO1xudmFyIHNpZ21hNSA9IDAuNDMxO1xudmFyIHNpZ21hNiA9IDE7XG52YXIgc2lnbWE3ID0gMDtcbnZhciBzaWdtYTggPSAwLjY3NztcbnZhciBzaWdtYTkgPSAwLjM5NDtcbnZhciBzaWdtYTEwID0gMC40NDQ7XG52YXIgc2lnbWExMSA9IDAuNjg2O1xudmFyIHNpZ21hMTIgPSAwLjM0NTtcbnZhciBzaWdtYTEzID0gMC40MTM7XG52YXIgc2lnbWExNCA9IDAuMzYzO1xudmFyIHNpZ21hMTUgPSAwLjI4OTtcbnZhciBzaWdtYTE2ID0gMC4xNTA7XG52YXIgc2lnbWExNyA9IDAuMjQ3O1xudmFyIHNpZ21hMTggPSAwLjM4NjtcbnZhciBzaWdtYTE5ID0gMC4wNTA7XG52YXIgc2lnbWEyMCA9IDIuMzkwO1xudmFyIHNpZ21hMjEgPSAxLjAxO1xudmFyIHNpZ21hMjFTY3JpcHQgPSAwLjgxO1xudmFyIHNpZ21hMjFTY3JpcHRTY3JpcHQgPSAwLjcxO1xudmFyIHNpZ21hMjIgPSAwLjI1MDtcblxuLy8gVGhlc2UgZm9udCBtZXRyaWNzIGFyZSBleHRyYWN0ZWQgZnJvbSBUZVggYnkgdXNpbmdcbi8vIFxcZm9udFxcYT1jbWV4MTBcbi8vIFxcc2hvd3RoZVxcZm9udGRpbWVuWFxcYVxuLy8gd2hlcmUgWCBpcyB0aGUgY29ycmVzcG9uZGluZyB2YXJpYWJsZSBudW1iZXIuIFRoZXNlIGNvcnJlc3BvbmQgdG8gdGhlIGZvbnRcbi8vIHBhcmFtZXRlcnMgb2YgdGhlIGV4dGVuc2lvbiBmb250cyAoZmFtaWx5IDMpLiBTZWUgdGhlIFRlWGJvb2ssIHBhZ2UgNDQxLlxudmFyIHhpMSA9IDA7XG52YXIgeGkyID0gMDtcbnZhciB4aTMgPSAwO1xudmFyIHhpNCA9IDA7XG52YXIgeGk1ID0gMC40MzE7XG52YXIgeGk2ID0gMTtcbnZhciB4aTcgPSAwO1xudmFyIHhpOCA9IDAuMDQ7XG52YXIgeGk5ID0gMC4xMTE7XG52YXIgeGkxMCA9IDAuMTY2O1xudmFyIHhpMTEgPSAwLjI7XG52YXIgeGkxMiA9IDAuNjtcbnZhciB4aTEzID0gMC4xO1xuXG4vLyBUaGlzIHZhbHVlIGRldGVybWluZXMgaG93IGxhcmdlIGEgcHQgaXMsIGZvciBtZXRyaWNzIHdoaWNoIGFyZSBkZWZpbmVkIGluXG4vLyB0ZXJtcyBvZiBwdHMuXG4vLyBUaGlzIHZhbHVlIGlzIGFsc28gdXNlZCBpbiBrYXRleC5sZXNzOyBpZiB5b3UgY2hhbmdlIGl0IG1ha2Ugc3VyZSB0aGUgdmFsdWVzXG4vLyBtYXRjaC5cbnZhciBwdFBlckVtID0gMTAuMDtcblxuLyoqXG4gKiBUaGlzIGlzIGp1c3QgYSBtYXBwaW5nIGZyb20gY29tbW9uIG5hbWVzIHRvIHJlYWwgbWV0cmljc1xuICovXG52YXIgbWV0cmljcyA9IHtcbiAgICB4SGVpZ2h0OiBzaWdtYTUsXG4gICAgcXVhZDogc2lnbWE2LFxuICAgIG51bTE6IHNpZ21hOCxcbiAgICBudW0yOiBzaWdtYTksXG4gICAgbnVtMzogc2lnbWExMCxcbiAgICBkZW5vbTE6IHNpZ21hMTEsXG4gICAgZGVub20yOiBzaWdtYTEyLFxuICAgIHN1cDE6IHNpZ21hMTMsXG4gICAgc3VwMjogc2lnbWExNCxcbiAgICBzdXAzOiBzaWdtYTE1LFxuICAgIHN1YjE6IHNpZ21hMTYsXG4gICAgc3ViMjogc2lnbWExNyxcbiAgICBzdXBEcm9wOiBzaWdtYTE4LFxuICAgIHN1YkRyb3A6IHNpZ21hMTksXG4gICAgYXhpc0hlaWdodDogc2lnbWEyMixcbiAgICBkZWZhdWx0UnVsZVRoaWNrbmVzczogeGk4LFxuICAgIGJpZ09wU3BhY2luZzE6IHhpOSxcbiAgICBiaWdPcFNwYWNpbmcyOiB4aTEwLFxuICAgIGJpZ09wU3BhY2luZzM6IHhpMTEsXG4gICAgYmlnT3BTcGFjaW5nNDogeGkxMixcbiAgICBiaWdPcFNwYWNpbmc1OiB4aTEzLFxuICAgIHB0UGVyRW06IHB0UGVyRW0sXG5cbiAgICAvLyBUT0RPKGFscGVydCk6IE1pc3NpbmcgcGFyYWxsZWwgc3RydWN0dXJlIGhlcmUuIFdlIHNob3VsZCBwcm9iYWJseSBhZGRcbiAgICAvLyBzdHlsZS1zcGVjaWZpYyBtZXRyaWNzIGZvciBhbGwgb2YgdGhlc2UuXG4gICAgZGVsaW0xOiBzaWdtYTIwLFxuICAgIGdldERlbGltMjogZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgaWYgKHN0eWxlLnNpemUgPT09IFN0eWxlLlRFWFQuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNpZ21hMjE7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUuc2l6ZSA9PT0gU3R5bGUuU0NSSVBULnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBzaWdtYTIxU2NyaXB0O1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlLnNpemUgPT09IFN0eWxlLlNDUklQVFNDUklQVC5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gc2lnbWEyMVNjcmlwdFNjcmlwdDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHN0eWxlIHNpemU6IFwiICsgc3R5bGUuc2l6ZSk7XG4gICAgfVxufTtcblxuLy8gVGhpcyBtYXAgY29udGFpbnMgYSBtYXBwaW5nIGZyb20gZm9udCBuYW1lIGFuZCBjaGFyYWN0ZXIgY29kZSB0byBjaGFyYWN0ZXJcbi8vIG1ldHJpY3MsIGluY2x1ZGluZyBoZWlnaHQsIGRlcHRoLCBpdGFsaWMgY29ycmVjdGlvbiwgYW5kIHNrZXcgKGtlcm4gZnJvbSB0aGVcbi8vIGNoYXJhY3RlciB0byB0aGUgY29ycmVzcG9uZGluZyBcXHNrZXdjaGFyKVxuLy8gVGhpcyBtYXAgaXMgZ2VuZXJhdGVkIHZpYSBgbWFrZSBtZXRyaWNzYC4gSXQgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkIG1hbnVhbGx5LlxudmFyIG1ldHJpY01hcCA9IHtcIkFNUy1SZWd1bGFyXCI6e1wiODY3MlwiOntcImRlcHRoXCI6LTAuMDY0LFwiaGVpZ2h0XCI6MC40MzcsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODY3NFwiOntcImRlcHRoXCI6LTAuMDY0LFwiaGVpZ2h0XCI6MC40MzcsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiMTAwMDNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMDE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDA4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNDAyOCxcInNrZXdcIjowLjB9LFwiMTA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDczMVwiOntcImRlcHRoXCI6MC4xMTExMSxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODQ2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC43NTU4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4NzdcIjp7XCJkZXB0aFwiOjAuMTM2NjcsXCJoZWlnaHRcIjowLjYzNjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDg3OFwiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODg1XCI6e1wiZGVwdGhcIjowLjI1NTgzLFwiaGVpZ2h0XCI6MC43NTU4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4ODZcIjp7XCJkZXB0aFwiOjAuMjU1ODMsXCJoZWlnaHRcIjowLjc1NTgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDg4N1wiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODg4XCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4ODlcIjp7XCJkZXB0aFwiOjAuMjYxNjcsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDg5MFwiOntcImRlcHRoXCI6MC4yNjE2NyxcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODkxXCI6e1wiZGVwdGhcIjowLjQ4MjU2LFwiaGVpZ2h0XCI6MC45ODI1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4OTJcIjp7XCJkZXB0aFwiOjAuNDgyNTYsXCJoZWlnaHRcIjowLjk4MjU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkwMVwiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTAyXCI6e1wiZGVwdGhcIjowLjEzNjY3LFwiaGVpZ2h0XCI6MC42MzY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5MzNcIjp7XCJkZXB0aFwiOjAuMjUxNDIsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkzNFwiOntcImRlcHRoXCI6MC4yNTE0MixcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTM1XCI6e1wiZGVwdGhcIjowLjI2MTY3LFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5MzZcIjp7XCJkZXB0aFwiOjAuMjYxNjcsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkzN1wiOntcImRlcHRoXCI6MC4yNjE2NyxcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTM4XCI6e1wiZGVwdGhcIjowLjI2MTY3LFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5NDlcIjp7XCJkZXB0aFwiOjAuMjU1ODMsXCJoZWlnaHRcIjowLjc1NTgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDk1MFwiOntcImRlcHRoXCI6MC4yNTU4MyxcImhlaWdodFwiOjAuNzU1ODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTU1XCI6e1wiZGVwdGhcIjowLjI4NDgxLFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5NTZcIjp7XCJkZXB0aFwiOjAuMjg0ODEsXCJoZWlnaHRcIjowLjc5MzgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxNjVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wMjUsXCJza2V3XCI6MC4wfSxcIjE3NFwiOntcImRlcHRoXCI6MC4xNTU1OSxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjI0MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMjk1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM1MFwiOntcImRlcHRoXCI6MC4wODE2NyxcImhlaWdodFwiOjAuNTgxNjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzUxXCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNTJcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM1M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDQwMjgsXCJza2V3XCI6MC4wfSxcIjU3MzU2XCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNTdcIjp7XCJkZXB0aFwiOjAuMjUxNDIsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM1OFwiOntcImRlcHRoXCI6MC40MTk1MSxcImhlaWdodFwiOjAuOTE5NTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzU5XCI6e1wiZGVwdGhcIjowLjMwMjc0LFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNjBcIjp7XCJkZXB0aFwiOjAuMzAyNzQsXCJoZWlnaHRcIjowLjc5MzgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM2MVwiOntcImRlcHRoXCI6MC40MTk1MSxcImhlaWdodFwiOjAuOTE5NTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzY2XCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNjdcIjp7XCJkZXB0aFwiOjAuMjUxNDIsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM2OFwiOntcImRlcHRoXCI6MC4yNTE0MixcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzY5XCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNzBcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM3MVwiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuODI1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC45LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NFwiOntcImRlcHRoXCI6MC4xNjY2NyxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC44MjUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC45LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzlcIjp7XCJkZXB0aFwiOjAuMTY2NjcsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODFcIjp7XCJkZXB0aFwiOjAuMTY2NjcsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODI0NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDYzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDg3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDk4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODUwMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODUwM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODUwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODUxM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5MlwiOntcImRlcHRoXCI6LTAuMDM1OTgsXCJoZWlnaHRcIjowLjQ2NDAyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk0XCI6e1wiZGVwdGhcIjotMC4wMzU5OCxcImhlaWdodFwiOjAuNDY0MDIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjAyXCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MDNcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYwNlwiOntcImRlcHRoXCI6MC4wMTM1NCxcImhlaWdodFwiOjAuNTIyMzksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MDhcIjp7XCJkZXB0aFwiOjAuMDEzNTQsXCJoZWlnaHRcIjowLjUyMjM5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjEwXCI6e1wiZGVwdGhcIjowLjAxMzU0LFwiaGVpZ2h0XCI6MC41MjIzOSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYxMVwiOntcImRlcHRoXCI6MC4wMTM1NCxcImhlaWdodFwiOjAuNTIyMzksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MjFcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNzc4OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYyMlwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjI0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjI1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjMwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjMxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjM0XCI6e1wiZGVwdGhcIjowLjA4MTk4LFwiaGVpZ2h0XCI6MC41ODE5OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYzNVwiOntcImRlcHRoXCI6MC4wODE5OCxcImhlaWdodFwiOjAuNTgxOTgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MzhcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjM5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY0MlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NDNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjQ0XCI6e1wiZGVwdGhcIjowLjE4MDgsXCJoZWlnaHRcIjowLjY3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY0NlwiOntcImRlcHRoXCI6MC4xODA4LFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NDdcIjp7XCJkZXB0aFwiOjAuMTgwOCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjQ4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY0OVwiOntcImRlcHRoXCI6MC4xODA4LFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTBcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjUxXCI6e1wiZGVwdGhcIjowLjAxMzU0LFwiaGVpZ2h0XCI6MC41MjIzOSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1MlwiOntcImRlcHRoXCI6MC4wMTM1NCxcImhlaWdodFwiOjAuNTIyMzksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTNcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1NFwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjU1XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NjZcIjp7XCJkZXB0aFwiOjAuMTM2NjcsXCJoZWlnaHRcIjowLjYzNjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjY3XCI6e1wiZGVwdGhcIjowLjEzNjY3LFwiaGVpZ2h0XCI6MC42MzY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY2OVwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM3Nzg4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcwNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC44MjUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MDhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MDlcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzE3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzIyXCI6e1wiZGVwdGhcIjotMC4wMzU5OCxcImhlaWdodFwiOjAuNDY0MDIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjRcIjp7XCJkZXB0aFwiOjAuMDgxOTgsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzI2XCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczOFwiOntcImRlcHRoXCI6MC4wMzUxNyxcImhlaWdodFwiOjAuNTIyMzksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzlcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQwXCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NDExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0MVwiOntcImRlcHRoXCI6MC4wODE2NyxcImhlaWdodFwiOjAuNTgxNjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDJcIjp7XCJkZXB0aFwiOjAuMjUxNDIsXCJoZWlnaHRcIjowLjc0MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzU2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzU3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzY0XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NjVcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNzc4OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc2OVwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzcwXCI6e1wiZGVwdGhcIjotMC4wMzYyNSxcImhlaWdodFwiOjAuNDYzNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NzRcIjp7XCJkZXB0aFwiOjAuMzAyNzQsXCJoZWlnaHRcIjowLjc5MzgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4Nzc2XCI6e1wiZGVwdGhcIjotMC4wMTY4OCxcImhlaWdodFwiOjAuNDgzMTIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NzhcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzgyXCI6e1wiZGVwdGhcIjowLjA2MDYyLFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc4M1wiOntcImRlcHRoXCI6MC4wNjA2MixcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3ODVcIjp7XCJkZXB0aFwiOjAuMDgxOTgsXCJoZWlnaHRcIjowLjU4MTk4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4Nzg2XCI6e1wiZGVwdGhcIjowLjA4MTk4LFwiaGVpZ2h0XCI6MC41ODE5OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc4N1wiOntcImRlcHRoXCI6MC4wODE5OCxcImhlaWdodFwiOjAuNTgxOTgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3OTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3OTFcIjp7XCJkZXB0aFwiOjAuMjI5NTgsXCJoZWlnaHRcIjowLjcyOTU4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4Nzk2XCI6e1wiZGVwdGhcIjowLjA4MTk4LFwiaGVpZ2h0XCI6MC45MTY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MDZcIjp7XCJkZXB0aFwiOjAuMjU1ODMsXCJoZWlnaHRcIjowLjc1NTgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODA3XCI6e1wiZGVwdGhcIjowLjI1NTgzLFwiaGVpZ2h0XCI6MC43NTU4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgwOFwiOntcImRlcHRoXCI6MC4yNTE0MixcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MDlcIjp7XCJkZXB0aFwiOjAuMjUxNDIsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODEyXCI6e1wiZGVwdGhcIjowLjI1NTgzLFwiaGVpZ2h0XCI6MC43NTU4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgxNFwiOntcImRlcHRoXCI6MC4yMDU3NixcImhlaWdodFwiOjAuNzA1NzYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MTVcIjp7XCJkZXB0aFwiOjAuMjA1NzYsXCJoZWlnaHRcIjowLjcwNTc2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODE2XCI6e1wiZGVwdGhcIjowLjMwMjc0LFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgxN1wiOntcImRlcHRoXCI6MC4zMDI3NCxcImhlaWdodFwiOjAuNzkzODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MThcIjp7XCJkZXB0aFwiOjAuMjI5NTgsXCJoZWlnaHRcIjowLjcyOTU4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODE5XCI6e1wiZGVwdGhcIjowLjIyOTU4LFwiaGVpZ2h0XCI6MC43Mjk1OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgyMlwiOntcImRlcHRoXCI6MC4xODA4LFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MjNcIjp7XCJkZXB0aFwiOjAuMTgwOCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODI4XCI6e1wiZGVwdGhcIjowLjEzNjY3LFwiaGVpZ2h0XCI6MC42MzY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgyOVwiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MzBcIjp7XCJkZXB0aFwiOjAuMjI5NTgsXCJoZWlnaHRcIjowLjcyOTU4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODMxXCI6e1wiZGVwdGhcIjowLjIyOTU4LFwiaGVpZ2h0XCI6MC43Mjk1OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgzMlwiOntcImRlcHRoXCI6MC4yMDU3NixcImhlaWdodFwiOjAuNzA1NzYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MzNcIjp7XCJkZXB0aFwiOjAuMjA1NzYsXCJoZWlnaHRcIjowLjcwNTc2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODQwXCI6e1wiZGVwdGhcIjowLjMwMjc0LFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg0MVwiOntcImRlcHRoXCI6MC4zMDI3NCxcImhlaWdodFwiOjAuNzkzODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NDJcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODQzXCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg0N1wiOntcImRlcHRoXCI6MC4wMzUxNyxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NDhcIjp7XCJkZXB0aFwiOjAuMDM1MTcsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODU4XCI6e1wiZGVwdGhcIjowLjA4MTk4LFwiaGVpZ2h0XCI6MC41ODE5OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1OVwiOntcImRlcHRoXCI6MC4wODE5OCxcImhlaWdodFwiOjAuNTgxOTgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjFcIjp7XCJkZXB0aFwiOjAuMDgxOTgsXCJoZWlnaHRcIjowLjU4MTk4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODYyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg2M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg3MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg3M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg3NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg3NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg3N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg3OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg3OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg4MlwiOntcImRlcHRoXCI6MC4wMzUxNyxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4ODNcIjp7XCJkZXB0aFwiOjAuMDM1MTcsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODg0XCI6e1wiZGVwdGhcIjowLjEzNjY3LFwiaGVpZ2h0XCI6MC42MzY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg4NVwiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4ODhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4OTBcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODkxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg5MlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTAxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTAzXCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwNVwiOntcImRlcHRoXCI6MC4wODE2NyxcImhlaWdodFwiOjAuNTgxNjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MDZcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTA4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTA5XCI6e1wiZGVwdGhcIjotMC4wMzU5OCxcImhlaWdodFwiOjAuNDY0MDIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MTJcIjp7XCJkZXB0aFwiOjAuMDM1MTcsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTEzXCI6e1wiZGVwdGhcIjowLjAzNTE3LFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkxNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkxNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkxNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkxOFwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTE5XCI6e1wiZGVwdGhcIjowLjAzOTEsXCJoZWlnaHRcIjowLjUzOTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MjBcIjp7XCJkZXB0aFwiOjAuMDM1MTcsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTIxXCI6e1wiZGVwdGhcIjowLjAzNTE3LFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkyMlwiOntcImRlcHRoXCI6MC4zODU2OSxcImhlaWdodFwiOjAuODg1NjksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MjNcIjp7XCJkZXB0aFwiOjAuMzg1NjksXCJoZWlnaHRcIjowLjg4NTY5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTI2XCI6e1wiZGVwdGhcIjowLjEzNjY3LFwiaGVpZ2h0XCI6MC42MzY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkyN1wiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MjhcIjp7XCJkZXB0aFwiOjAuMzAyNzQsXCJoZWlnaHRcIjowLjc5MzgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTI5XCI6e1wiZGVwdGhcIjowLjMwMjc0LFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkzNFwiOntcImRlcHRoXCI6MC4yMzIyMixcImhlaWdodFwiOjAuNzQxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MzVcIjp7XCJkZXB0aFwiOjAuMjMyMjIsXCJoZWlnaHRcIjowLjc0MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTM2XCI6e1wiZGVwdGhcIjowLjIzMjIyLFwiaGVpZ2h0XCI6MC43NDExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkzN1wiOntcImRlcHRoXCI6MC4yMzIyMixcImhlaWdodFwiOjAuNzQxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MzhcIjp7XCJkZXB0aFwiOjAuMjA1NzYsXCJoZWlnaHRcIjowLjcwNTc2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTM5XCI6e1wiZGVwdGhcIjowLjIwNTc2LFwiaGVpZ2h0XCI6MC43MDU3NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk0MFwiOntcImRlcHRoXCI6MC4zMDI3NCxcImhlaWdodFwiOjAuNzkzODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NDFcIjp7XCJkZXB0aFwiOjAuMzAyNzQsXCJoZWlnaHRcIjowLjc5MzgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTk0XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk5NVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NDE2XCI6e1wiZGVwdGhcIjowLjE1NTU5LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTQ4NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTQ4OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTQ5MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC4zNzc4OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTQ5NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC4zNzc4OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTU4NVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1ODZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjc0MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjMyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTYzM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NTRcIjp7XCJkZXB0aFwiOjAuMDM1MTcsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjYwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjYxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjY0XCI6e1wiZGVwdGhcIjowLjAzNTE3LFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY3NFwiOntcImRlcHRoXCI6MC4xMTExMSxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk3MzNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODlcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH19LFwiTWFpbi1Cb2xkXCI6e1wiMTAwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTA5MDMsXCJza2V3XCI6MC4wfSxcIjEwMjE2XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAyMTdcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMTU5NyxcInNrZXdcIjowLjB9LFwiMTA0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDgxNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkyN1wiOntcImRlcHRoXCI6MC4xOTY2NyxcImhlaWdodFwiOjAuNjk2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTI4XCI6e1wiZGVwdGhcIjowLjE5NjY3LFwiaGVpZ2h0XCI6MC42OTY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExMlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExM1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjM0OTIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTE4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMTU5NyxcInNrZXdcIjowLjB9LFwiMTE5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMTU5NyxcInNrZXdcIjowLjB9LFwiMTIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMTU5NyxcInNrZXdcIjowLjB9LFwiMTIyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjNcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjRcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjVcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjZcIjp7XCJkZXB0aFwiOjAuMzUsXCJoZWlnaHRcIjowLjM0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxNjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjE3MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU5NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxNzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjE3N1wiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjE4MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMjE1XCI6e1wiZGVwdGhcIjowLjEzMzMzLFwiaGVpZ2h0XCI6MC42MzMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMjQ3XCI6e1wiZGVwdGhcIjowLjEzMzMzLFwiaGVpZ2h0XCI6MC42MzMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzA1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjM1XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzZcIjp7XCJkZXB0aFwiOjAuMDU1NTYsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzN1wiOntcImRlcHRoXCI6MC4wNTU1NixcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjM4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDBcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0M1wiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ0XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC4xNTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjE1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0N1wiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjUxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU2N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTlcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2MFwiOntcImRlcHRoXCI6MC4wODU1NixcImhlaWdodFwiOjAuNTg1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjYxXCI6e1wiZGVwdGhcIjotMC4xMDg4OSxcImhlaWdodFwiOjAuMzkxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjYyXCI6e1wiZGVwdGhcIjowLjA4NTU2LFwiaGVpZ2h0XCI6MC41ODU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjMxOTQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41OTYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzE0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcyOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzMyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTk2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzc5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzgwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYzMTk0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzMTk0LFwic2tld1wiOjAuMH0sXCI4MjEyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzE5NCxcInNrZXdcIjowLjB9LFwiODIxNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIxN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIyMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIyNFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMjVcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjRcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjQyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg0MDdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzI0NDQsXCJpdGFsaWNcIjowLjE1NDg2LFwic2tld1wiOjAuMH0sXCI4NDYzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDcyXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODQ3NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1MDFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTJcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5M1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTRcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5NVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTZcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5N1wiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OThcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAxNTk3LFwic2tld1wiOjAuMH0sXCI4NjAwXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYwMVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MzZcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYzN1wiOntcImRlcHRoXCI6LTAuMTA4ODksXCJoZWlnaHRcIjowLjM5MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjQwXCI6e1wiZGVwdGhcIjotMC4xMDg4OSxcImhlaWdodFwiOjAuMzkxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NDFcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1NlwiOntcImRlcHRoXCI6LTAuMTA4ODksXCJoZWlnaHRcIjowLjM5MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjU3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1OFwiOntcImRlcHRoXCI6LTAuMTA4ODksXCJoZWlnaHRcIjowLjM5MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjU5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY2MFwiOntcImRlcHRoXCI6LTAuMTA4ODksXCJoZWlnaHRcIjowLjM5MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjYxXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAxNTk3LFwic2tld1wiOjAuMH0sXCI4NzA0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzA2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNjM4OSxcInNrZXdcIjowLjB9LFwiODcwN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcwOVwiOntcImRlcHRoXCI6MC4wNTU1NixcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MTJcIjp7XCJkZXB0aFwiOjAuMDg1NTYsXCJoZWlnaHRcIjowLjU4NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzE1XCI6e1wiZGVwdGhcIjowLjA4NTU2LFwiaGVpZ2h0XCI6MC41ODU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyMlwiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjNcIjp7XCJkZXB0aFwiOjAuMTMzMzMsXCJoZWlnaHRcIjowLjYzMzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzI1XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyNlwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjdcIjp7XCJkZXB0aFwiOi0wLjAyNzc4LFwiaGVpZ2h0XCI6MC40NzIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyOFwiOntcImRlcHRoXCI6LTAuMDI2MzksXCJoZWlnaHRcIjowLjQ3MzYxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzI5XCI6e1wiZGVwdGhcIjotMC4wMjYzOSxcImhlaWdodFwiOjAuNDczNjEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzBcIjp7XCJkZXB0aFwiOjAuMTgsXCJoZWlnaHRcIjowLjgyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzM0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzM2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzM5XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMjc3OCxcInNrZXdcIjowLjB9LFwiODc2NFwiOntcImRlcHRoXCI6LTAuMTA4ODksXCJoZWlnaHRcIjowLjM5MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzY4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc3MVwiOntcImRlcHRoXCI6MC4wMDIyMixcImhlaWdodFwiOjAuNTAyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NzZcIjp7XCJkZXB0aFwiOjAuMDI0NDQsXCJoZWlnaHRcIjowLjUyNDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzgxXCI6e1wiZGVwdGhcIjowLjAwMjIyLFwiaGVpZ2h0XCI6MC41MDIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MDFcIjp7XCJkZXB0aFwiOjAuMDAyMjIsXCJoZWlnaHRcIjowLjUwMjIyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODA0XCI6e1wiZGVwdGhcIjowLjE5NjY3LFwiaGVpZ2h0XCI6MC42OTY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgwNVwiOntcImRlcHRoXCI6MC4xOTY2NyxcImhlaWdodFwiOjAuNjk2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MTBcIjp7XCJkZXB0aFwiOjAuMDg1NTYsXCJoZWlnaHRcIjowLjU4NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODExXCI6e1wiZGVwdGhcIjowLjA4NTU2LFwiaGVpZ2h0XCI6MC41ODU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgyNlwiOntcImRlcHRoXCI6MC4wODU1NixcImhlaWdodFwiOjAuNTg1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MjdcIjp7XCJkZXB0aFwiOjAuMDg1NTYsXCJoZWlnaHRcIjowLjU4NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODM0XCI6e1wiZGVwdGhcIjowLjA4NTU2LFwiaGVpZ2h0XCI6MC41ODU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgzNVwiOntcImRlcHRoXCI6MC4wODU1NixcImhlaWdodFwiOjAuNTg1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MzhcIjp7XCJkZXB0aFwiOjAuMTk2NjcsXCJoZWlnaHRcIjowLjY5NjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODM5XCI6e1wiZGVwdGhcIjowLjE5NjY3LFwiaGVpZ2h0XCI6MC42OTY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg0NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg0OVwiOntcImRlcHRoXCI6MC4xOTY2NyxcImhlaWdodFwiOjAuNjk2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTBcIjp7XCJkZXB0aFwiOjAuMTk2NjcsXCJoZWlnaHRcIjowLjY5NjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODUxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODUyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODUzXCI6e1wiZGVwdGhcIjowLjEzMzMzLFwiaGVpZ2h0XCI6MC42MzMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1NFwiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTVcIjp7XCJkZXB0aFwiOjAuMTMzMzMsXCJoZWlnaHRcIjowLjYzMzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODU2XCI6e1wiZGVwdGhcIjowLjEzMzMzLFwiaGVpZ2h0XCI6MC42MzMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1N1wiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wMjg3NSxcInNrZXdcIjowLjB9LFwiODkwMFwiOntcImRlcHRoXCI6LTAuMDI2MzksXCJoZWlnaHRcIjowLjQ3MzYxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTAxXCI6e1wiZGVwdGhcIjotMC4wMjYzOSxcImhlaWdodFwiOjAuNDczNjEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MDJcIjp7XCJkZXB0aFwiOi0wLjAyNzc4LFwiaGVpZ2h0XCI6MC40NzIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk2OFwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NjlcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTcwXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk3MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5OTRcIjp7XCJkZXB0aFwiOi0wLjEzODg5LFwiaGVpZ2h0XCI6MC4zNjExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk5NVwiOntcImRlcHRoXCI6LTAuMTM4ODksXCJoZWlnaHRcIjowLjM2MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTFcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTJcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTI2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTMxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTM2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NVwiOntcImRlcHRoXCI6MC4zMSxcImhlaWdodFwiOjAuMTM0NDQsXCJpdGFsaWNcIjowLjAzMTk0LFwic2tld1wiOjAuMH0sXCI5NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY1MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NTdcIjp7XCJkZXB0aFwiOi0wLjAyNzc4LFwiaGVpZ2h0XCI6MC40NzIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY2MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NjdcIjp7XCJkZXB0aFwiOi0wLjAyNzc4LFwiaGVpZ2h0XCI6MC40NzIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk3MTFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgyNFwiOntcImRlcHRoXCI6MC4xMjk2MyxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MjVcIjp7XCJkZXB0aFwiOjAuMTI5NjMsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODI2XCI6e1wiZGVwdGhcIjowLjEyOTYzLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgyN1wiOntcImRlcHRoXCI6MC4xMjk2MyxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MzhcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODM5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfX0sXCJNYWluLUl0YWxpY1wiOntcIjEwMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTAzMzMsXCJza2V3XCI6MC4wfSxcIjEwMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDc1MTQsXCJza2V3XCI6MC4wfSxcIjEwMlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjIxMTk0LFwic2tld1wiOjAuMH0sXCIxMDNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wODg0NyxcInNrZXdcIjowLjB9LFwiMTA0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNzY3MSxcInNrZXdcIjowLjB9LFwiMTA1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY1NTM2LFwiaXRhbGljXCI6MC4xMDE5LFwic2tld1wiOjAuMH0sXCIxMDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY1NTM2LFwiaXRhbGljXCI6MC4xNDQ2NyxcInNrZXdcIjowLjB9LFwiMTA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMDc2NCxcInNrZXdcIjowLjB9LFwiMTA4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMDMzMyxcInNrZXdcIjowLjB9LFwiMTA5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNzY3MSxcInNrZXdcIjowLjB9LFwiMTEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNzY3MSxcInNrZXdcIjowLjB9LFwiMTExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNjMxMixcInNrZXdcIjowLjB9LFwiMTEyXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDYzMTIsXCJza2V3XCI6MC4wfSxcIjExM1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA4ODQ3LFwic2tld1wiOjAuMH0sXCIxMTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjEwNzY0LFwic2tld1wiOjAuMH0sXCIxMTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA4MjA4LFwic2tld1wiOjAuMH0sXCIxMTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjE1MDgsXCJpdGFsaWNcIjowLjA5NDg2LFwic2tld1wiOjAuMH0sXCIxMTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA3NjcxLFwic2tld1wiOjAuMH0sXCIxMThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjEwNzY0LFwic2tld1wiOjAuMH0sXCIxMTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjEwNzY0LFwic2tld1wiOjAuMH0sXCIxMjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjEyMDQyLFwic2tld1wiOjAuMH0sXCIxMjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wODg0NyxcInNrZXdcIjowLjB9LFwiMTIyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4xMjI5MixcInNrZXdcIjowLjB9LFwiMTI2XCI6e1wiZGVwdGhcIjowLjM1LFwiaGVpZ2h0XCI6MC4zMTc4NixcIml0YWxpY1wiOjAuMTE1ODUsXCJza2V3XCI6MC4wfSxcIjE2M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzA1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNzY3MSxcInNrZXdcIjowLjB9LFwiMzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEyNDE3LFwic2tld1wiOjAuMH0sXCIzNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDY5NjEsXCJza2V3XCI6MC4wfSxcIjM1XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDY2MTYsXCJza2V3XCI6MC4wfSxcIjM3XCI6e1wiZGVwdGhcIjowLjA1NTU2LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMTM2MzksXCJza2V3XCI6MC4wfSxcIjM4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wOTY5NCxcInNrZXdcIjowLjB9LFwiMzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEyNDE3LFwic2tld1wiOjAuMH0sXCI0MFwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjE2MTk0LFwic2tld1wiOjAuMH0sXCI0MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAzNjk0LFwic2tld1wiOjAuMH0sXCI0MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMTQ5MTcsXCJza2V3XCI6MC4wfSxcIjQzXCI6e1wiZGVwdGhcIjowLjA1NjY3LFwiaGVpZ2h0XCI6MC41NjE2NyxcIml0YWxpY1wiOjAuMDM2OTQsXCJza2V3XCI6MC4wfSxcIjQ0XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC4xMDU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAyODI2LFwic2tld1wiOjAuMH0sXCI0NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC4xMDU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDdcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4xNjE5NCxcInNrZXdcIjowLjB9LFwiNDhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjEzNTU2LFwic2tld1wiOjAuMH0sXCI0OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMTM1NTYsXCJza2V3XCI6MC4wfSxcIjUwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4xMzU1NixcInNrZXdcIjowLjB9LFwiNTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjEzNTU2LFwic2tld1wiOjAuMH0sXCI1MlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjEzNTU2LFwic2tld1wiOjAuMH0sXCI1M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMTM1NTYsXCJza2V3XCI6MC4wfSxcIjU0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4xMzU1NixcInNrZXdcIjowLjB9LFwiNTVcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4xMzU1NixcInNrZXdcIjowLjB9LFwiNTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjEzNTU2LFwic2tld1wiOjAuMH0sXCI1NjdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzczNixcInNrZXdcIjowLjB9LFwiNTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjEzNTU2LFwic2tld1wiOjAuMH0sXCI1OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDU4MixcInNrZXdcIjowLjB9LFwiNTlcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNTgyLFwic2tld1wiOjAuMH0sXCI2MVwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wNjYxNixcInNrZXdcIjowLjB9LFwiNjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEyMjUsXCJza2V3XCI6MC4wfSxcIjY0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wOTU5NyxcInNrZXdcIjowLjB9LFwiNjVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMDI1NyxcInNrZXdcIjowLjB9LFwiNjdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE0NTI4LFwic2tld1wiOjAuMH0sXCI2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDk0MDMsXCJza2V3XCI6MC4wfSxcIjY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMjAyOCxcInNrZXdcIjowLjB9LFwiNzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzMzA1LFwic2tld1wiOjAuMH0sXCI3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDg3MjIsXCJza2V3XCI6MC4wfSxcIjcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNjM4OSxcInNrZXdcIjowLjB9LFwiNzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE1ODA2LFwic2tld1wiOjAuMH0sXCI3NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTQwMjgsXCJza2V3XCI6MC4wfSxcIjc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNDUyOCxcInNrZXdcIjowLjB9LFwiNzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wOTY5NCxcInNrZXdcIjowLjB9LFwiNzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE2Mzg5LFwic2tld1wiOjAuMH0sXCI3NzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA2NjQ2LFwic2tld1wiOjAuMH0sXCI3NzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjY3ODYsXCJpdGFsaWNcIjowLjExNTg1LFwic2tld1wiOjAuMH0sXCI3NzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTYxNjcsXCJpdGFsaWNcIjowLjEwMzMzLFwic2tld1wiOjAuMH0sXCI3NzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEwODA2LFwic2tld1wiOjAuMH0sXCI3NzVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjY3ODYsXCJpdGFsaWNcIjowLjExNzUyLFwic2tld1wiOjAuMH0sXCI3NzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjY3ODYsXCJpdGFsaWNcIjowLjEwNDc0LFwic2tld1wiOjAuMH0sXCI3NzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTIyNSxcInNrZXdcIjowLjB9LFwiNzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE2Mzg5LFwic2tld1wiOjAuMH0sXCI3ODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjI4NDcsXCJpdGFsaWNcIjowLjA4Mjk1LFwic2tld1wiOjAuMH0sXCI3OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDk0MDMsXCJza2V3XCI6MC4wfSxcIjgwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMDI1NyxcInNrZXdcIjowLjB9LFwiODFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wOTQwMyxcInNrZXdcIjowLjB9LFwiODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAzODY4LFwic2tld1wiOjAuMH0sXCI4MjExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wOTIwOCxcInNrZXdcIjowLjB9LFwiODIxMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDkyMDgsXCJza2V3XCI6MC4wfSxcIjgyMTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEyNDE3LFwic2tld1wiOjAuMH0sXCI4MjE3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMjQxNyxcInNrZXdcIjowLjB9LFwiODIyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTY4NSxcInNrZXdcIjowLjB9LFwiODIyMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDY5NjEsXCJza2V3XCI6MC4wfSxcIjgzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMTk3MixcInNrZXdcIjowLjB9LFwiODRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzMzA1LFwic2tld1wiOjAuMH0sXCI4NDYzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTYzODksXCJza2V3XCI6MC4wfSxcIjg2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xODM2MSxcInNrZXdcIjowLjB9LFwiODdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE4MzYxLFwic2tld1wiOjAuMH0sXCI4OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTU4MDYsXCJza2V3XCI6MC4wfSxcIjg5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xOTM4MyxcInNrZXdcIjowLjB9LFwiOTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE0NTI4LFwic2tld1wiOjAuMH0sXCI5MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjE4NzUsXCJza2V3XCI6MC4wfSxcIjkxNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTMzMDUsXCJza2V3XCI6MC4wfSxcIjkxNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wOTQwMyxcInNrZXdcIjowLjB9LFwiOTIzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE1Mjk0LFwic2tld1wiOjAuMH0sXCI5MjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE2Mzg5LFwic2tld1wiOjAuMH0sXCI5M1wiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjEwNTI4LFwic2tld1wiOjAuMH0sXCI5MzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEyMDI4LFwic2tld1wiOjAuMH0sXCI5MzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjExMTExLFwic2tld1wiOjAuMH0sXCI5MzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA1OTg2LFwic2tld1wiOjAuMH0sXCI5MzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjExMTExLFwic2tld1wiOjAuMH0sXCI5MzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEwMjU3LFwic2tld1wiOjAuMH0sXCI5NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDY2NDYsXCJza2V3XCI6MC4wfSxcIjk1XCI6e1wiZGVwdGhcIjowLjMxLFwiaGVpZ2h0XCI6MC4xMjA1NixcIml0YWxpY1wiOjAuMDkyMDgsXCJza2V3XCI6MC4wfSxcIjk3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNzY3MSxcInNrZXdcIjowLjB9LFwiOThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA2MzEyLFwic2tld1wiOjAuMH0sXCI5OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDU2NTMsXCJza2V3XCI6MC4wfX0sXCJNYWluLVJlZ3VsYXJcIjp7XCIzMlwiOntcImRlcHRoXCI6LTAuMCxcImhlaWdodFwiOjAuMCxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxNjBcIjp7XCJkZXB0aFwiOi0wLjAsXCJoZWlnaHRcIjowLjAsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODIzMFwiOntcImRlcHRoXCI6LTAuMCxcImhlaWdodFwiOjAuMTIsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODYxNFwiOntcImRlcHRoXCI6MC4wMTEsXCJoZWlnaHRcIjowLjUxMSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCI4NjE3XCI6e1wiZGVwdGhcIjowLjAxMSxcImhlaWdodFwiOjAuNTExLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg2MThcIjp7XCJkZXB0aFwiOjAuMDExLFwiaGVpZ2h0XCI6MC41MTEsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODY1MlwiOntcImRlcHRoXCI6MC4wMTEsXCJoZWlnaHRcIjowLjY3MSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCI4NzczXCI6e1wiZGVwdGhcIjotMC4wMjIsXCJoZWlnaHRcIjowLjU4OSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCI4Nzg0XCI6e1wiZGVwdGhcIjotMC4xMzMsXCJoZWlnaHRcIjowLjY3LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg4MDBcIjp7XCJkZXB0aFwiOjAuMjE1LFwiaGVpZ2h0XCI6MC43MTYsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODg3MlwiOntcImRlcHRoXCI6MC4yNDksXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg5MDRcIjp7XCJkZXB0aFwiOjAuMDA1LFwiaGVpZ2h0XCI6MC41MDUsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODk0MlwiOntcImRlcHRoXCI6MC4wMyxcImhlaWdodFwiOjAuOSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCI4OTQzXCI6e1wiZGVwdGhcIjotMC4xOSxcImhlaWdodFwiOjAuMzEsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODk0NVwiOntcImRlcHRoXCI6LTAuMSxcImhlaWdodFwiOjAuODIsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiOTEzNlwiOntcImRlcHRoXCI6MC4yNDQsXCJoZWlnaHRcIjowLjc0NCxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCI5MTM3XCI6e1wiZGVwdGhcIjowLjI0NCxcImhlaWdodFwiOjAuNzQ0LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjIyXCI6e1wiZGVwdGhcIjowLjI0NCxcImhlaWdodFwiOjAuNzQ0LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjIzXCI6e1wiZGVwdGhcIjowLjI0NCxcImhlaWdodFwiOjAuNzQ0LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjI5XCI6e1wiZGVwdGhcIjowLjAxMSxcImhlaWdodFwiOjAuNTExLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjMwXCI6e1wiZGVwdGhcIjowLjAxMSxcImhlaWdodFwiOjAuNTExLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjMxXCI6e1wiZGVwdGhcIjowLjAxMSxcImhlaWdodFwiOjAuNTExLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjMyXCI6e1wiZGVwdGhcIjowLjAyNCxcImhlaWdodFwiOjAuNTI1LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjMzXCI6e1wiZGVwdGhcIjowLjAyNCxcImhlaWdodFwiOjAuNTI1LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjM0XCI6e1wiZGVwdGhcIjowLjAyNCxcImhlaWdodFwiOjAuNTI1LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMjM2XCI6e1wiZGVwdGhcIjowLjAxMSxcImhlaWdodFwiOjAuNTExLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA3Nzc4LFwic2tld1wiOjAuMH0sXCIxMDIxNlwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMjE3XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDEzODksXCJza2V3XCI6MC4wfSxcIjEwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5MjdcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkyOFwiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYxNTA4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDEzODksXCJza2V3XCI6MC4wfSxcIjExOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDEzODksXCJza2V3XCI6MC4wfSxcIjEyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTIxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDEzODksXCJza2V3XCI6MC4wfSxcIjEyMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTIzXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI0XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI1XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI2XCI6e1wiZGVwdGhcIjowLjM1LFwiaGVpZ2h0XCI6MC4zMTc4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxNzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjE3NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41Njc3OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxNzdcIjp7XCJkZXB0aFwiOjAuMDgzMzMsXCJoZWlnaHRcIjowLjU4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjIxNVwiOntcImRlcHRoXCI6MC4wODMzMyxcImhlaWdodFwiOjAuNTgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjI0N1wiOntcImRlcHRoXCI6MC4wODMzMyxcImhlaWdodFwiOjAuNTgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjMwNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjAyNzc4fSxcIjMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzVcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzNlwiOntcImRlcHRoXCI6MC4wNTU1NixcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjM3XCI6e1wiZGVwdGhcIjowLjA1NTU2LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjM5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MFwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQxXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQzXCI6e1wiZGVwdGhcIjowLjA4MzMzLFwiaGVpZ2h0XCI6MC41ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDRcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjEwNTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuMTA1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ3XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjUyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTY3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjU3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTlcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2MFwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2MVwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2MlwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42Mjg0NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzEzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU2Nzc4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcyOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzI5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzMwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjY3ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjY3ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41Njc3OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzc0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjY3ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42Njc4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzc4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3ODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjI4NDcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIxMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wfSxcIjgyMTJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMH0sXCI4MjE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjE3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjIxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjI0XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIyNVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyNFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyNDJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODQwN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43MTQ0NCxcIml0YWxpY1wiOjAuMTUzODIsXCJza2V3XCI6MC4wfSxcIjg0NjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg0NjVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg0NjdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4xMTExMX0sXCI4NDcyXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjExMTExfSxcIjg0NzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTAxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTkyXCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk0XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTVcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk2XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTdcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5OVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wMTM4OSxcInNrZXdcIjowLjB9LFwiODYwMFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MDFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjM2XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MzdcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY0MFwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjQxXCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTZcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NThcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1OVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NjBcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY2MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wMTM4OSxcInNrZXdcIjowLjB9LFwiODcwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcwNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDU1NTYsXCJza2V3XCI6MC4wODMzNH0sXCI4NzA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzA5XCI6e1wiZGVwdGhcIjowLjA1NTU2LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcxMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcxMlwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzE1XCI6e1wiZGVwdGhcIjowLjAzOTEsXCJoZWlnaHRcIjowLjUzOTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjJcIjp7XCJkZXB0aFwiOjAuMDgzMzMsXCJoZWlnaHRcIjowLjU4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzIzXCI6e1wiZGVwdGhcIjowLjA4MzMzLFwiaGVpZ2h0XCI6MC41ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyNVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjZcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzI3XCI6e1wiZGVwdGhcIjotMC4wMzQ3MixcImhlaWdodFwiOjAuNDY1MjgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjhcIjp7XCJkZXB0aFwiOi0wLjA1NTU1LFwiaGVpZ2h0XCI6MC40NDQ0NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyOVwiOntcImRlcHRoXCI6LTAuMDU1NTUsXCJoZWlnaHRcIjowLjQ0NDQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzMwXCI6e1wiZGVwdGhcIjowLjIsXCJoZWlnaHRcIjowLjgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzlcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQxXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjExMTExLFwic2tld1wiOjAuMH0sXCI4NzY0XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NjhcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzcxXCI6e1wiZGVwdGhcIjotMC4wMzYyNSxcImhlaWdodFwiOjAuNDYzNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NzZcIjp7XCJkZXB0aFwiOi0wLjAxNjg4LFwiaGVpZ2h0XCI6MC40ODMxMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc4MVwiOntcImRlcHRoXCI6LTAuMDM2MjUsXCJoZWlnaHRcIjowLjQ2Mzc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgwMVwiOntcImRlcHRoXCI6LTAuMDM2MjUsXCJoZWlnaHRcIjowLjQ2Mzc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODA0XCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgwNVwiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MTBcIjp7XCJkZXB0aFwiOjAuMDM5MSxcImhlaWdodFwiOjAuNTM5MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgxMVwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODI2XCI6e1wiZGVwdGhcIjowLjAzOTEsXCJoZWlnaHRcIjowLjUzOTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MjdcIjp7XCJkZXB0aFwiOjAuMDM5MSxcImhlaWdodFwiOjAuNTM5MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgzNFwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODM1XCI6e1wiZGVwdGhcIjowLjAzOTEsXCJoZWlnaHRcIjowLjUzOTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MzhcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODM5XCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg0NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg0OVwiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTBcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODUxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODUyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODUzXCI6e1wiZGVwdGhcIjowLjA4MzMzLFwiaGVpZ2h0XCI6MC41ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1NFwiOntcImRlcHRoXCI6MC4wODMzMyxcImhlaWdodFwiOjAuNTgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTVcIjp7XCJkZXB0aFwiOjAuMDgzMzMsXCJoZWlnaHRcIjowLjU4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODU2XCI6e1wiZGVwdGhcIjowLjA4MzMzLFwiaGVpZ2h0XCI6MC41ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1N1wiOntcImRlcHRoXCI6MC4wODMzMyxcImhlaWdodFwiOjAuNTgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wMjUsXCJza2V3XCI6MC4wfSxcIjg5MDBcIjp7XCJkZXB0aFwiOi0wLjA1NTU1LFwiaGVpZ2h0XCI6MC40NDQ0NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwMVwiOntcImRlcHRoXCI6LTAuMDU1NTUsXCJoZWlnaHRcIjowLjQ0NDQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTAyXCI6e1wiZGVwdGhcIjotMC4wMzQ3MixcImhlaWdodFwiOjAuNDY1MjgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NjhcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY5XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk3MFwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzFcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTk0XCI6e1wiZGVwdGhcIjotMC4xNDIzNixcImhlaWdodFwiOjAuMzU3NjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5OTVcIjp7XCJkZXB0aFwiOi0wLjE0MjM2LFwiaGVpZ2h0XCI6MC4zNTc2NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTI4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5M1wiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTM3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTVcIjp7XCJkZXB0aFwiOjAuMzEsXCJoZWlnaHRcIjowLjEyMDU2LFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjB9LFwiOTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NTFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjU3XCI6e1wiZGVwdGhcIjotMC4wMzQ3MixcImhlaWdodFwiOjAuNDY1MjgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjY3XCI6e1wiZGVwdGhcIjotMC4wMzQ3MixcImhlaWdodFwiOjAuNDY1MjgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NzExXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MjRcIjp7XCJkZXB0aFwiOjAuMTI5NjMsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODI1XCI6e1wiZGVwdGhcIjowLjEyOTYzLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgyNlwiOntcImRlcHRoXCI6MC4xMjk2MyxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MjdcIjp7XCJkZXB0aFwiOjAuMTI5NjMsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODM3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODM4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgzOVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH19LFwiTWF0aC1Cb2xkSXRhbGljXCI6e1wiMTAwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDA5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDEzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMTA0MixcInNrZXdcIjowLjB9LFwiMTAzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDM3MDQsXCJza2V3XCI6MC4wfSxcIjEwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5MzI2LFwiaXRhbGljXCI6MC4wNjIyLFwic2tld1wiOjAuMH0sXCIxMDdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAxODUyLFwic2tld1wiOjAuMH0sXCIxMDhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAwODgsXCJza2V3XCI6MC4wfSxcIjEwOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExMlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExM1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzNzA0LFwic2tld1wiOjAuMH0sXCIxMTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzMTk0LFwic2tld1wiOjAuMH0sXCIxMTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42MzQ5MixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTE3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzNzA0LFwic2tld1wiOjAuMH0sXCIxMTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMH0sXCIxMjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyMVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzNzA0LFwic2tld1wiOjAuMH0sXCIxMjJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjA0MjEzLFwic2tld1wiOjAuMH0sXCI0N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDQ4MzUsXCJza2V3XCI6MC4wfSxcIjY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wNjk3OSxcInNrZXdcIjowLjB9LFwiNjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAzMTk0LFwic2tld1wiOjAuMH0sXCI2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDU0NTEsXCJza2V3XCI6MC4wfSxcIjcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xNTk3MixcInNrZXdcIjowLjB9LFwiNzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wODIyOSxcInNrZXdcIjowLjB9LFwiNzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjA3Nzc4LFwic2tld1wiOjAuMH0sXCI3NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMTAwNjksXCJza2V3XCI6MC4wfSxcIjc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wNjk3OSxcInNrZXdcIjowLjB9LFwiNzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xMTQyNCxcInNrZXdcIjowLjB9LFwiNzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjExNDI0LFwic2tld1wiOjAuMH0sXCI3OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDMxOTQsXCJza2V3XCI6MC4wfSxcIjgwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xNTk3MixcInNrZXdcIjowLjB9LFwiODFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDA0MjEsXCJza2V3XCI6MC4wfSxcIjgzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wNTM4MixcInNrZXdcIjowLjB9LFwiODRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjE1OTcyLFwic2tld1wiOjAuMH0sXCI4NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMTE0MjQsXCJza2V3XCI6MC4wfSxcIjg2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4yNTU1NSxcInNrZXdcIjowLjB9LFwiODdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjE1OTcyLFwic2tld1wiOjAuMH0sXCI4OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDc3NzgsXCJza2V3XCI6MC4wfSxcIjg5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4yNTU1NSxcInNrZXdcIjowLjB9LFwiOTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjA2OTc5LFwic2tld1wiOjAuMH0sXCI5MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjE1OTcyLFwic2tld1wiOjAuMH0sXCI5MTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDMxOTQsXCJza2V3XCI6MC4wfSxcIjkyM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTI2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wNzQ1OCxcInNrZXdcIjowLjB9LFwiOTI4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wODIyOSxcInNrZXdcIjowLjB9LFwiOTMxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wNTQ1MSxcInNrZXdcIjowLjB9LFwiOTMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xNTk3MixcInNrZXdcIjowLjB9LFwiOTM0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjExNjUzLFwic2tld1wiOjAuMH0sXCI5MzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjA0ODM1LFwic2tld1wiOjAuMH0sXCI5NDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk0NlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAzNDAzLFwic2tld1wiOjAuMH0sXCI5NDdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wNjM4OSxcInNrZXdcIjowLjB9LFwiOTQ4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMzgxOSxcInNrZXdcIjowLjB9LFwiOTQ5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NTBcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNjIxNSxcInNrZXdcIjowLjB9LFwiOTUxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDM3MDQsXCJza2V3XCI6MC4wfSxcIjk1MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDMxOTQsXCJza2V3XCI6MC4wfSxcIjk1M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTU0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1NlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDY4OTgsXCJza2V3XCI6MC4wfSxcIjk1OFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAzMDIxLFwic2tld1wiOjAuMH0sXCI5NTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDM3MDQsXCJza2V3XCI6MC4wfSxcIjk2MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2MlwiOntcImRlcHRoXCI6MC4wOTcyMixcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjA3OTE3LFwic2tld1wiOjAuMH0sXCI5NjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzNzA0LFwic2tld1wiOjAuMH0sXCI5NjRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjEzNDcyLFwic2tld1wiOjAuMH0sXCI5NjVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzNzA0LFwic2tld1wiOjAuMH0sXCI5NjZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjhcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMzcwNCxcInNrZXdcIjowLjB9LFwiOTY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzcwNCxcInNrZXdcIjowLjB9LFwiOTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk3N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDMxOTQsXCJza2V3XCI6MC4wfSxcIjk5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH19LFwiTWF0aC1JdGFsaWNcIjp7XCIxMDBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4xNjY2N30sXCIxMDA5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjEwMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjEwMTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCIxMDJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMDc2NCxcInNrZXdcIjowLjE2NjY3fSxcIjEwM1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMDI3Nzh9LFwiMTA0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjU5NTIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjU5NTIsXCJpdGFsaWNcIjowLjA1NzI0LFwic2tld1wiOjAuMH0sXCIxMDdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAzMTQ4LFwic2tld1wiOjAuMH0sXCIxMDhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAxOTY4LFwic2tld1wiOjAuMDgzMzR9LFwiMTA5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjExMlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCIxMTNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjA4MzM0fSxcIjExNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wNTU1Nn0sXCIxMTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCIxMTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjE1MDgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCIxMTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wMjc3OH0sXCIxMThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMDI3Nzh9LFwiMTE5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMjY5MSxcInNrZXdcIjowLjA4MzM0fSxcIjEyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjAyNzc4fSxcIjEyMVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMDU1NTZ9LFwiMTIyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNDM5OCxcInNrZXdcIjowLjA1NTU2fSxcIjQ3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4xMzg4OX0sXCI2NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDUwMTcsXCJza2V3XCI6MC4wODMzNH0sXCI2N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDcxNTMsXCJza2V3XCI6MC4wODMzNH0sXCI2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wNTU1Nn0sXCI2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDU3NjQsXCJza2V3XCI6MC4wODMzNH0sXCI3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTM4ODksXCJza2V3XCI6MC4wODMzNH0sXCI3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wODEyNSxcInNrZXdcIjowLjA1NTU2fSxcIjczXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzg0NyxcInNrZXdcIjowLjExMTExfSxcIjc0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wOTYxOCxcInNrZXdcIjowLjE2NjY3fSxcIjc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzE1MyxcInNrZXdcIjowLjA1NTU2fSxcIjc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDI3Nzh9LFwiNzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEwOTAzLFwic2tld1wiOjAuMDgzMzR9LFwiNzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEwOTAzLFwic2tld1wiOjAuMDgzMzR9LFwiNzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMDgzMzR9LFwiODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMDgzMzR9LFwiODFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAwNzczLFwic2tld1wiOjAuMDgzMzR9LFwiODNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA1NzY0LFwic2tld1wiOjAuMDgzMzR9LFwiODRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMDgzMzR9LFwiODVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEwOTAzLFwic2tld1wiOjAuMDI3Nzh9LFwiODZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjIyMjIyLFwic2tld1wiOjAuMH0sXCI4N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTM4ODksXCJza2V3XCI6MC4wfSxcIjg4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzg0NyxcInNrZXdcIjowLjA4MzM0fSxcIjg5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4yMjIyMixcInNrZXdcIjowLjB9LFwiOTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA3MTUzLFwic2tld1wiOjAuMDgzMzR9LFwiOTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzg4OSxcInNrZXdcIjowLjA4MzM0fSxcIjkxNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjE2NjY3fSxcIjkyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wODMzNH0sXCI5MjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4xNjY2N30sXCI5MjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA3NTY5LFwic2tld1wiOjAuMDgzMzR9LFwiOTI4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wODEyNSxcInNrZXdcIjowLjA1NTU2fSxcIjkzMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDU3NjQsXCJza2V3XCI6MC4wODMzNH0sXCI5MzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMDU1NTZ9LFwiOTM0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTM2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMSxcInNrZXdcIjowLjA1NTU2fSxcIjkzN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDUwMTcsXCJza2V3XCI6MC4wODMzNH0sXCI5NDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAwMzcsXCJza2V3XCI6MC4wMjc3OH0sXCI5NDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNTI3OCxcInNrZXdcIjowLjA4MzM0fSxcIjk0N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA1NTU2LFwic2tld1wiOjAuMH0sXCI5NDhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAzNzg1LFwic2tld1wiOjAuMDU1NTZ9LFwiOTQ5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTUwXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDczNzgsXCJza2V3XCI6MC4wODMzNH0sXCI5NTFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjA1NTU2fSxcIjk1MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wODMzNH0sXCI5NTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCI5NTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTU2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjAyNzc4fSxcIjk1N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDYzNjYsXCJza2V3XCI6MC4wMjc3OH0sXCI5NThcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNDYwMSxcInNrZXdcIjowLjExMTExfSxcIjk1OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjk2MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wfSxcIjk2MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI5NjJcIjp7XCJkZXB0aFwiOjAuMDk3MjIsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNzk4NixcInNrZXdcIjowLjA4MzM0fSxcIjk2M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wfSxcIjk2NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMTEzMixcInNrZXdcIjowLjAyNzc4fSxcIjk2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wMjc3OH0sXCI5NjZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTY3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjk2OFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMTExMTF9LFwiOTY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjB9LFwiOTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk3N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjk4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTgyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjB9LFwiOTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn19LFwiTWF0aC1SZWd1bGFyXCI6e1wiMTAwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMTY2Njd9LFwiMTAwOVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCIxMDFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCIxMDEzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiMTAyXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTA3NjQsXCJza2V3XCI6MC4xNjY2N30sXCIxMDNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjAyNzc4fSxcIjEwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY1OTUyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY1OTUyLFwiaXRhbGljXCI6MC4wNTcyNCxcInNrZXdcIjowLjB9LFwiMTA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMzE0OCxcInNrZXdcIjowLjB9LFwiMTA4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMTk2OCxcInNrZXdcIjowLjA4MzM0fSxcIjEwOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCIxMTJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiMTEzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wODMzNH0sXCIxMTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMDU1NTZ9LFwiMTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiMTE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYxNTA4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiMTE3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDI3Nzh9LFwiMTE4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjAyNzc4fSxcIjExOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDI2OTEsXCJza2V3XCI6MC4wODMzNH0sXCIxMjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wMjc3OH0sXCIxMjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjA1NTU2fSxcIjEyMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDQzOTgsXCJza2V3XCI6MC4wNTU1Nn0sXCI2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjEzODg5fSxcIjY2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNTAxNyxcInNrZXdcIjowLjA4MzM0fSxcIjY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzE1MyxcInNrZXdcIjowLjA4MzM0fSxcIjY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjA1NTU2fSxcIjY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNTc2NCxcInNrZXdcIjowLjA4MzM0fSxcIjcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzg4OSxcInNrZXdcIjowLjA4MzM0fSxcIjcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiNzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA4MTI1LFwic2tld1wiOjAuMDU1NTZ9LFwiNzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA3ODQ3LFwic2tld1wiOjAuMTExMTF9LFwiNzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA5NjE4LFwic2tld1wiOjAuMTY2Njd9LFwiNzVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA3MTUzLFwic2tld1wiOjAuMDU1NTZ9LFwiNzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wMjc3OH0sXCI3N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTA5MDMsXCJza2V3XCI6MC4wODMzNH0sXCI3OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTA5MDMsXCJza2V3XCI6MC4wODMzNH0sXCI3OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wODMzNH0sXCI4MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTM4ODksXCJza2V3XCI6MC4wODMzNH0sXCI4MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI4MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDA3NzMsXCJza2V3XCI6MC4wODMzNH0sXCI4M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDU3NjQsXCJza2V3XCI6MC4wODMzNH0sXCI4NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTM4ODksXCJza2V3XCI6MC4wODMzNH0sXCI4NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTA5MDMsXCJza2V3XCI6MC4wMjc3OH0sXCI4NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMjIyMjIsXCJza2V3XCI6MC4wfSxcIjg3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzg4OSxcInNrZXdcIjowLjB9LFwiODhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA3ODQ3LFwic2tld1wiOjAuMDgzMzR9LFwiODlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjIyMjIyLFwic2tld1wiOjAuMH0sXCI5MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDcxNTMsXCJza2V3XCI6MC4wODMzNH0sXCI5MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMDgzMzR9LFwiOTE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMTY2Njd9LFwiOTIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjA4MzM0fSxcIjkyM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjE2NjY3fSxcIjkyNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDc1NjksXCJza2V3XCI6MC4wODMzNH0sXCI5MjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA4MTI1LFwic2tld1wiOjAuMDU1NTZ9LFwiOTMxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNTc2NCxcInNrZXdcIjowLjA4MzM0fSxcIjkzM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTM4ODksXCJza2V3XCI6MC4wNTU1Nn0sXCI5MzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI5MzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjExLFwic2tld1wiOjAuMDU1NTZ9LFwiOTM3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNTAxNyxcInNrZXdcIjowLjA4MzM0fSxcIjk0NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDAzNyxcInNrZXdcIjowLjAyNzc4fSxcIjk0NlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA1Mjc4LFwic2tld1wiOjAuMDgzMzR9LFwiOTQ3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDU1NTYsXCJza2V3XCI6MC4wfSxcIjk0OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDM3ODUsXCJza2V3XCI6MC4wNTU1Nn0sXCI5NDlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI5NTBcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNzM3OCxcInNrZXdcIjowLjA4MzM0fSxcIjk1MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMDU1NTZ9LFwiOTUyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjA4MzM0fSxcIjk1M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjk1NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTU1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NTZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDI3Nzh9LFwiOTU3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNjM2NixcInNrZXdcIjowLjAyNzc4fSxcIjk1OFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA0NjAxLFwic2tld1wiOjAuMTExMTF9LFwiOTU5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiOTYwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjB9LFwiOTYxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjk2MlwiOntcImRlcHRoXCI6MC4wOTcyMixcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA3OTg2LFwic2tld1wiOjAuMDgzMzR9LFwiOTYzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjB9LFwiOTY0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4xMTMyLFwic2tld1wiOjAuMDI3Nzh9LFwiOTY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjAyNzc4fSxcIjk2NlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI5NjdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiOTY4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4xMTExMX0sXCI5NjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMH0sXCI5N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTc3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI5ODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMH0sXCI5OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fX0sXCJTaXplMS1SZWd1bGFyXCI6e1wiODc0OFwiOntcImRlcHRoXCI6MC4zMDYsXCJoZWlnaHRcIjowLjgwNSxcIml0YWxpY1wiOjAuMTk0NDUsXCJza2V3XCI6MC4wfSxcIjg3NDlcIjp7XCJkZXB0aFwiOjAuMzA2LFwiaGVpZ2h0XCI6MC44MDUsXCJpdGFsaWNcIjowLjE5NDQ1LFwic2tld1wiOjAuMH0sXCIxMDIxNlwiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMjE3XCI6e1wiZGVwdGhcIjowLjM1MDAxLFwiaGVpZ2h0XCI6MC44NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3NTJcIjp7XCJkZXB0aFwiOjAuMjUwMDEsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDc1M1wiOntcImRlcHRoXCI6MC4yNTAwMSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNzU0XCI6e1wiZGVwdGhcIjowLjI1MDAxLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3NTZcIjp7XCJkZXB0aFwiOjAuMjUwMDEsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDc1OFwiOntcImRlcHRoXCI6MC4yNTAwMSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyM1wiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyNVwiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQwXCI6e1wiZGVwdGhcIjowLjM1MDAxLFwiaGVpZ2h0XCI6MC44NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDFcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0N1wiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43MjIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzMyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjcyMjIyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzIyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43MjIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIxNFwiOntcImRlcHRoXCI6LTAuMDAwOTksXCJoZWlnaHRcIjowLjYwMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5M1wiOntcImRlcHRoXCI6MWUtMDUsXCJoZWlnaHRcIjowLjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTVcIjp7XCJkZXB0aFwiOjFlLTA1LFwiaGVpZ2h0XCI6MC42LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjU3XCI6e1wiZGVwdGhcIjoxZS0wNSxcImhlaWdodFwiOjAuNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1OVwiOntcImRlcHRoXCI6MWUtMDUsXCJoZWlnaHRcIjowLjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MTlcIjp7XCJkZXB0aFwiOjAuMjUwMDEsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzIwXCI6e1wiZGVwdGhcIjowLjI1MDAxLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyMVwiOntcImRlcHRoXCI6MC4yNTAwMSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzBcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzM5XCI6e1wiZGVwdGhcIjotMC4wMDU5OSxcImhlaWdodFwiOjAuNjA2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQxXCI6e1wiZGVwdGhcIjotMC4wMDU5OSxcImhlaWdodFwiOjAuNjA2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQ3XCI6e1wiZGVwdGhcIjowLjMwNjEyLFwiaGVpZ2h0XCI6MC44MDUsXCJpdGFsaWNcIjowLjE5NDQ1LFwic2tld1wiOjAuMH0sXCI4NzUwXCI6e1wiZGVwdGhcIjowLjMwNjEyLFwiaGVpZ2h0XCI6MC44MDUsXCJpdGFsaWNcIjowLjE5NDQ1LFwic2tld1wiOjAuMH0sXCI4ODk2XCI6e1wiZGVwdGhcIjowLjI1MDAxLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg5N1wiOntcImRlcHRoXCI6MC4yNTAwMSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4OThcIjp7XCJkZXB0aFwiOjAuMjUwMDEsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODk5XCI6e1wiZGVwdGhcIjowLjI1MDAxLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk2OFwiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NjlcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTcwXCI6e1wiZGVwdGhcIjowLjM1MDAxLFwiaGVpZ2h0XCI6MC44NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk3MVwiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxXCI6e1wiZGVwdGhcIjowLjM1MDAxLFwiaGVpZ2h0XCI6MC44NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTE2OFwiOntcImRlcHRoXCI6LTAuMDAwOTksXCJoZWlnaHRcIjowLjYwMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTJcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5M1wiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfX0sXCJTaXplMi1SZWd1bGFyXCI6e1wiODc0OFwiOntcImRlcHRoXCI6MC44NjIsXCJoZWlnaHRcIjoxLjM2LFwiaXRhbGljXCI6MC40NDQ0NSxcInNrZXdcIjowLjB9LFwiODc0OVwiOntcImRlcHRoXCI6MC44NjIsXCJoZWlnaHRcIjoxLjM2LFwiaXRhbGljXCI6MC40NDQ0NSxcInNrZXdcIjowLjB9LFwiMTAyMTZcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDIxN1wiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNzUyXCI6e1wiZGVwdGhcIjowLjU1MDAxLFwiaGVpZ2h0XCI6MS4wNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3NTNcIjp7XCJkZXB0aFwiOjAuNTUwMDEsXCJoZWlnaHRcIjoxLjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDc1NFwiOntcImRlcHRoXCI6MC41NTAwMSxcImhlaWdodFwiOjEuMDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNzU2XCI6e1wiZGVwdGhcIjowLjU1MDAxLFwiaGVpZ2h0XCI6MS4wNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3NThcIjp7XCJkZXB0aFwiOjAuNTUwMDEsXCJoZWlnaHRcIjoxLjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjNcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjVcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MFwiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQxXCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDdcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MTlcIjp7XCJkZXB0aFwiOjAuNTUwMDEsXCJoZWlnaHRcIjoxLjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzIwXCI6e1wiZGVwdGhcIjowLjU1MDAxLFwiaGVpZ2h0XCI6MS4wNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyMVwiOntcImRlcHRoXCI6MC41NTAwMSxcImhlaWdodFwiOjEuMDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzBcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQ3XCI6e1wiZGVwdGhcIjowLjg2MjI1LFwiaGVpZ2h0XCI6MS4zNixcIml0YWxpY1wiOjAuNDQ0NDUsXCJza2V3XCI6MC4wfSxcIjg3NTBcIjp7XCJkZXB0aFwiOjAuODYyMjUsXCJoZWlnaHRcIjoxLjM2LFwiaXRhbGljXCI6MC40NDQ0NSxcInNrZXdcIjowLjB9LFwiODg5NlwiOntcImRlcHRoXCI6MC41NTAwMSxcImhlaWdodFwiOjEuMDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4OTdcIjp7XCJkZXB0aFwiOjAuNTUwMDEsXCJoZWlnaHRcIjoxLjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODk4XCI6e1wiZGVwdGhcIjowLjU1MDAxLFwiaGVpZ2h0XCI6MS4wNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg5OVwiOntcImRlcHRoXCI6MC41NTAwMSxcImhlaWdodFwiOjEuMDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NjhcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY5XCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk3MFwiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzFcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MVwiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyXCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTNcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH19LFwiU2l6ZTMtUmVndWxhclwiOntcIjEwMjE2XCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAyMTdcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjNcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjVcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MFwiOntcImRlcHRoXCI6MC45NTAwMyxcImhlaWdodFwiOjEuNDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQxXCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDdcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzBcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY4XCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk2OVwiOntcImRlcHRoXCI6MC45NTAwMyxcImhlaWdodFwiOjEuNDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzBcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTcxXCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTFcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MlwiOntcImRlcHRoXCI6MC45NTAwMyxcImhlaWdodFwiOjEuNDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzXCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9fSxcIlNpemU0LVJlZ3VsYXJcIjp7XCIxMDIxNlwiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMjE3XCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTIzXCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI1XCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDBcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MVwiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ3XCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNDRcIjp7XCJkZXB0aFwiOi0wLjAwNDk5LFwiaGVpZ2h0XCI6MC42MDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzQ1XCI6e1wiZGVwdGhcIjotMC4wMDQ5OSxcImhlaWdodFwiOjAuNjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzY4MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC4xMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTc2ODFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuMTIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3NjgyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjEyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzY4M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC4xMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjgyNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzMyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjgyNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjgyNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjgyNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczMFwiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NjhcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY5XCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk3MFwiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzFcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MVwiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMTVcIjp7XCJkZXB0aFwiOjAuNjQ1MDIsXCJoZWlnaHRcIjoxLjE1NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTExNlwiOntcImRlcHRoXCI6MWUtMDUsXCJoZWlnaHRcIjowLjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMTdcIjp7XCJkZXB0aFwiOjAuNjQ1MDIsXCJoZWlnaHRcIjoxLjE1NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTExOFwiOntcImRlcHRoXCI6MC42NDUwMixcImhlaWdodFwiOjEuMTU1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTE5XCI6e1wiZGVwdGhcIjoxZS0wNSxcImhlaWdodFwiOjAuNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEyMFwiOntcImRlcHRoXCI6MC42NDUwMixcImhlaWdodFwiOjEuMTU1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTIxXCI6e1wiZGVwdGhcIjowLjY0NTAyLFwiaGVpZ2h0XCI6MS4xNTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMjJcIjp7XCJkZXB0aFwiOi0wLjAwMDk5LFwiaGVpZ2h0XCI6MC42MDEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMjNcIjp7XCJkZXB0aFwiOjAuNjQ1MDIsXCJoZWlnaHRcIjoxLjE1NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEyNFwiOntcImRlcHRoXCI6MC42NDUwMixcImhlaWdodFwiOjEuMTU1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTI1XCI6e1wiZGVwdGhcIjotMC4wMDA5OSxcImhlaWdodFwiOjAuNjAxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTI2XCI6e1wiZGVwdGhcIjowLjY0NTAyLFwiaGVpZ2h0XCI6MS4xNTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMjdcIjp7XCJkZXB0aFwiOjFlLTA1LFwiaGVpZ2h0XCI6MC45LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTI4XCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEyOVwiOntcImRlcHRoXCI6MC45MDAwMSxcImhlaWdodFwiOjAuMCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEzMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC4zLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTMxXCI6e1wiZGVwdGhcIjoxZS0wNSxcImhlaWdodFwiOjAuOSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEzMlwiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMzNcIjp7XCJkZXB0aFwiOjAuOTAwMDEsXCJoZWlnaHRcIjowLjAsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxNDNcIjp7XCJkZXB0aFwiOjAuODg1MDIsXCJoZWlnaHRcIjowLjkxNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTJcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5M1wiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfX19O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgYSBjb252aWVuY2UgZnVuY3Rpb24gZm9yIGxvb2tpbmcgdXAgaW5mb3JtYXRpb24gaW4gdGhlXG4gKiBtZXRyaWNNYXAgdGFibGUuIEl0IHRha2VzIGEgY2hhcmFjdGVyIGFzIGEgc3RyaW5nLCBhbmQgYSBzdHlsZVxuICovXG52YXIgZ2V0Q2hhcmFjdGVyTWV0cmljcyA9IGZ1bmN0aW9uKGNoYXJhY3Rlciwgc3R5bGUpIHtcbiAgICByZXR1cm4gbWV0cmljTWFwW3N0eWxlXVtjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtZXRyaWNzOiBtZXRyaWNzLFxuICAgIGdldENoYXJhY3Rlck1ldHJpY3M6IGdldENoYXJhY3Rlck1ldHJpY3Ncbn07XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciBQYXJzZUVycm9yID0gcmVxdWlyZShcIi4vUGFyc2VFcnJvclwiKTtcblxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGEgbGlzdCBvZiBmdW5jdGlvbnMgdGhhdCB3ZSBwYXJzZS4gVGhlIGZ1bmN0aW9ucyBtYXBcbi8vIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgZGF0YTpcblxuLypcbiAqIEtleXMgYXJlIHRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbnMgdG8gcGFyc2VcbiAqIFRoZSBkYXRhIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcga2V5czpcbiAqICAtIG51bUFyZ3M6IFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRoZSBmdW5jdGlvbiB0YWtlcy5cbiAqICAtIGFyZ1R5cGVzOiAob3B0aW9uYWwpIEFuIGFycmF5IGNvcnJlc3BvbmRpbmcgdG8gZWFjaCBhcmd1bWVudCBvZiB0aGVcbiAqICAgICAgICAgICAgICBmdW5jdGlvbiwgZ2l2aW5nIHRoZSB0eXBlIG9mIGFyZ3VtZW50IHRoYXQgc2hvdWxkIGJlIHBhcnNlZC4gSXRzXG4gKiAgICAgICAgICAgICAgbGVuZ3RoIHNob3VsZCBiZSBlcXVhbCB0byBgbnVtQXJncyArIG51bU9wdGlvbmFsQXJnc2AuIFZhbGlkXG4gKiAgICAgICAgICAgICAgdHlwZXM6XG4gKiAgICAgICAgICAgICAgIC0gXCJzaXplXCI6IEEgc2l6ZS1saWtlIHRoaW5nLCBzdWNoIGFzIFwiMWVtXCIgb3IgXCI1ZXhcIlxuICogICAgICAgICAgICAgICAtIFwiY29sb3JcIjogQW4gaHRtbCBjb2xvciwgbGlrZSBcIiNhYmNcIiBvciBcImJsdWVcIlxuICogICAgICAgICAgICAgICAtIFwib3JpZ2luYWxcIjogVGhlIHNhbWUgdHlwZSBhcyB0aGUgZW52aXJvbm1lbnQgdGhhdCB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBiZWluZyBwYXJzZWQgaXMgaW4gKGUuZy4gdXNlZCBmb3IgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9kaWVzIG9mIGZ1bmN0aW9ucyBsaWtlIFxcY29sb3Igd2hlcmUgdGhlIGZpcnN0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnQgaXMgc3BlY2lhbCBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCBub3JtYWxseSlcbiAqICAgICAgICAgICAgICBPdGhlciBwb3NzaWJsZSB0eXBlcyAocHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQpXG4gKiAgICAgICAgICAgICAgIC0gXCJ0ZXh0XCI6IFRleHQtbGlrZSAoZS5nLiBcXHRleHQpXG4gKiAgICAgICAgICAgICAgIC0gXCJtYXRoXCI6IE5vcm1hbCBtYXRoXG4gKiAgICAgICAgICAgICAgSWYgdW5kZWZpbmVkLCB0aGlzIHdpbGwgYmUgdHJlYXRlZCBhcyBhbiBhcHByb3ByaWF0ZSBsZW5ndGhcbiAqICAgICAgICAgICAgICBhcnJheSBvZiBcIm9yaWdpbmFsXCIgc3RyaW5nc1xuICogIC0gZ3JlZWRpbmVzczogKG9wdGlvbmFsKSBUaGUgZ3JlZWRpbmVzcyBvZiB0aGUgZnVuY3Rpb24gdG8gdXNlIHVuZ3JvdXBlZFxuICogICAgICAgICAgICAgICAgYXJndW1lbnRzLlxuICpcbiAqICAgICAgICAgICAgICAgIEUuZy4gaWYgeW91IGhhdmUgYW4gZXhwcmVzc2lvblxuICogICAgICAgICAgICAgICAgICBcXHNxcnQgXFxmcmFjIDEgMlxuICogICAgICAgICAgICAgICAgc2luY2UgXFxmcmFjIGhhcyBncmVlZGluZXNzPTIgdnMgXFxzcXJ0J3MgZ3JlZWRpbmVzcz0xLCBcXGZyYWNcbiAqICAgICAgICAgICAgICAgIHdpbGwgdXNlIHRoZSB0d28gYXJndW1lbnRzICcxJyBhbmQgJzInIGFzIGl0cyB0d28gYXJndW1lbnRzLFxuICogICAgICAgICAgICAgICAgdGhlbiB0aGF0IHdob2xlIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBhcyB0aGUgYXJndW1lbnQgdG9cbiAqICAgICAgICAgICAgICAgIFxcc3FydC4gT24gdGhlIG90aGVyIGhhbmQsIHRoZSBleHByZXNzaW9uc1xuICogICAgICAgICAgICAgICAgICBcXGZyYWMgXFxmcmFjIDEgMiAzXG4gKiAgICAgICAgICAgICAgICBhbmRcbiAqICAgICAgICAgICAgICAgICAgXFxmcmFjIFxcc3FydCAxIDJcbiAqICAgICAgICAgICAgICAgIHdpbGwgZmFpbCBiZWNhdXNlIFxcZnJhYyBhbmQgXFxmcmFjIGhhdmUgZXF1YWwgZ3JlZWRpbmVzc1xuICogICAgICAgICAgICAgICAgYW5kIFxcc3FydCBoYXMgYSBsb3dlciBncmVlZGluZXNzIHRoYW4gXFxmcmFjIHJlc3BlY3RpdmVseS4gVG9cbiAqICAgICAgICAgICAgICAgIG1ha2UgdGhlc2UgcGFyc2UsIHdlIHdvdWxkIGhhdmUgdG8gY2hhbmdlIHRoZW0gdG86XG4gKiAgICAgICAgICAgICAgICAgIFxcZnJhYyB7XFxmcmFjIDEgMn0gM1xuICogICAgICAgICAgICAgICAgYW5kXG4gKiAgICAgICAgICAgICAgICAgIFxcZnJhYyB7XFxzcXJ0IDF9IDJcbiAqXG4gKiAgICAgICAgICAgICAgICBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgMWBcbiAqICAtIGFsbG93ZWRJblRleHQ6IChvcHRpb25hbCkgV2hldGhlciBvciBub3QgdGhlIGZ1bmN0aW9uIGlzIGFsbG93ZWQgaW5zaWRlXG4gKiAgICAgICAgICAgICAgICAgICB0ZXh0IG1vZGUgKGRlZmF1bHQgZmFsc2UpXG4gKiAgLSBudW1PcHRpb25hbEFyZ3M6IChvcHRpb25hbCkgVGhlIG51bWJlciBvZiBvcHRpb25hbCBhcmd1bWVudHMgdGhlIGZ1bmN0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgIHNob3VsZCBwYXJzZS4gSWYgdGhlIG9wdGlvbmFsIGFyZ3VtZW50cyBhcmVuJ3QgZm91bmQsXG4gKiAgICAgICAgICAgICAgICAgICAgIGBudWxsYCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlciBpbiB0aGVpciBwbGFjZS5cbiAqICAgICAgICAgICAgICAgICAgICAgKGRlZmF1bHQgMClcbiAqICAtIGhhbmRsZXI6IFRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byBoYW5kbGUgdGhpcyBmdW5jdGlvbiBhbmQgaXRzXG4gKiAgICAgICAgICAgICBhcmd1bWVudHMuIFRoZSBhcmd1bWVudHMgYXJlOlxuICogICAgICAgICAgICAgIC0gZnVuYzogdGhlIHRleHQgb2YgdGhlIGZ1bmN0aW9uXG4gKiAgICAgICAgICAgICAgLSBbYXJnc106IHRoZSBuZXh0IGFyZ3VtZW50cyBhcmUgdGhlIGFyZ3VtZW50cyB0byB0aGUgZnVuY3Rpb24sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIG9mIHdoaWNoIHRoZXJlIGFyZSBudW1BcmdzIG9mIHRoZW1cbiAqICAgICAgICAgICAgICAtIHBvc2l0aW9uczogdGhlIHBvc2l0aW9ucyBpbiB0aGUgb3ZlcmFsbCBzdHJpbmcgb2YgdGhlIGZ1bmN0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB0aGUgYXJndW1lbnRzLiBTaG91bGQgb25seSBiZSB1c2VkIHRvIHByb2R1Y2VcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbWVzc2FnZXNcbiAqICAgICAgICAgICAgIFRoZSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcga2V5czpcbiAqICAgICAgICAgICAgICAtIHR5cGU6IFRoZSB0eXBlIG9mIGVsZW1lbnQgdGhhdCB0aGlzIGlzLiBUaGlzIGlzIHRoZW4gdXNlZCBpblxuICogICAgICAgICAgICAgICAgICAgICAgYnVpbGRIVE1ML2J1aWxkTWF0aE1MIHRvIGRldGVybWluZSB3aGljaCBmdW5jdGlvblxuICogICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIGJlIGNhbGxlZCB0byBidWlsZCB0aGlzIG5vZGUgaW50byBhIERPTSBub2RlXG4gKiAgICAgICAgICAgICBBbnkgb3RoZXIgZGF0YSBjYW4gYmUgYWRkZWQgdG8gdGhlIG9iamVjdCwgd2hpY2ggd2lsbCBiZSBwYXNzZWRcbiAqICAgICAgICAgICAgIGluIHRvIHRoZSBmdW5jdGlvbiBpbiBidWlsZEhUTUwvYnVpbGRNYXRoTUwgYXMgYGdyb3VwLnZhbHVlYC5cbiAqL1xuXG52YXIgZnVuY3Rpb25zID0ge1xuICAgIC8vIEEgbm9ybWFsIHNxdWFyZSByb290XG4gICAgXCJcXFxcc3FydFwiOiB7XG4gICAgICAgIG51bUFyZ3M6IDEsXG4gICAgICAgIG51bU9wdGlvbmFsQXJnczogMSxcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgb3B0aW9uYWwsIGJvZHksIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgXCJPcHRpb25hbCBhcmd1bWVudHMgdG8gXFxcXHNxcnQgYXJlbid0IHN1cHBvcnRlZCB5ZXRcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXhlciwgcG9zaXRpb25zWzFdIC0gMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcXJ0XCIsXG4gICAgICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTb21lIG5vbi1tYXRoeSB0ZXh0XG4gICAgXCJcXFxcdGV4dFwiOiB7XG4gICAgICAgIG51bUFyZ3M6IDEsXG4gICAgICAgIGFyZ1R5cGVzOiBbXCJ0ZXh0XCJdLFxuICAgICAgICBncmVlZGluZXNzOiAyLFxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jLCBib2R5KSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgY29ycmVzcG9uZGluZyBidWlsZEhUTUwvYnVpbGRNYXRoTUwgZnVuY3Rpb24gZXhwZWN0cyBhXG4gICAgICAgICAgICAvLyBsaXN0IG9mIGVsZW1lbnRzLCB3ZSBub3JtYWxpemUgZm9yIGRpZmZlcmVudCBraW5kcyBvZiBhcmd1bWVudHNcbiAgICAgICAgICAgIC8vIFRPRE8oZW1pbHkpOiBtYXliZSB0aGlzIHNob3VsZCBiZSBkb25lIHNvbWV3aGVyZSBlbHNlXG4gICAgICAgICAgICB2YXIgaW5uZXI7XG4gICAgICAgICAgICBpZiAoYm9keS50eXBlID09PSBcIm9yZGdyb3VwXCIpIHtcbiAgICAgICAgICAgICAgICBpbm5lciA9IGJvZHkudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlubmVyID0gW2JvZHldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IGlubmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEEgdHdvLWFyZ3VtZW50IGN1c3RvbSBjb2xvclxuICAgIFwiXFxcXGNvbG9yXCI6IHtcbiAgICAgICAgbnVtQXJnczogMixcbiAgICAgICAgYWxsb3dlZEluVGV4dDogdHJ1ZSxcbiAgICAgICAgYXJnVHlwZXM6IFtcImNvbG9yXCIsIFwib3JpZ2luYWxcIl0sXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMsIGNvbG9yLCBib2R5KSB7XG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIGRpZmZlcmVudCBraW5kcyBvZiBib2RpZXMgKHNlZSBcXHRleHQgYWJvdmUpXG4gICAgICAgICAgICB2YXIgaW5uZXI7XG4gICAgICAgICAgICBpZiAoYm9keS50eXBlID09PSBcIm9yZGdyb3VwXCIpIHtcbiAgICAgICAgICAgICAgICBpbm5lciA9IGJvZHkudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlubmVyID0gW2JvZHldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IudmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGlubmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFuIG92ZXJsaW5lXG4gICAgXCJcXFxcb3ZlcmxpbmVcIjoge1xuICAgICAgICBudW1BcmdzOiAxLFxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jLCBib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwib3ZlcmxpbmVcIixcbiAgICAgICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEEgYm94IG9mIHRoZSB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgXCJcXFxccnVsZVwiOiB7XG4gICAgICAgIG51bUFyZ3M6IDIsXG4gICAgICAgIG51bU9wdGlvbmFsQXJnczogMSxcbiAgICAgICAgYXJnVHlwZXM6IFtcInNpemVcIiwgXCJzaXplXCIsIFwic2l6ZVwiXSxcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgc2hpZnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJydWxlXCIsXG4gICAgICAgICAgICAgICAgc2hpZnQ6IHNoaWZ0ICYmIHNoaWZ0LnZhbHVlLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aC52YWx1ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodC52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBIEthVGVYIGxvZ29cbiAgICBcIlxcXFxLYVRlWFwiOiB7XG4gICAgICAgIG51bUFyZ3M6IDAsXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJrYXRleFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gRXh0cmEgZGF0YSBuZWVkZWQgZm9yIHRoZSBkZWxpbWl0ZXIgaGFuZGxlciBkb3duIGJlbG93XG52YXIgZGVsaW1pdGVyU2l6ZXMgPSB7XG4gICAgXCJcXFxcYmlnbFwiIDoge3R5cGU6IFwib3BlblwiLCAgICBzaXplOiAxfSxcbiAgICBcIlxcXFxCaWdsXCIgOiB7dHlwZTogXCJvcGVuXCIsICAgIHNpemU6IDJ9LFxuICAgIFwiXFxcXGJpZ2dsXCI6IHt0eXBlOiBcIm9wZW5cIiwgICAgc2l6ZTogM30sXG4gICAgXCJcXFxcQmlnZ2xcIjoge3R5cGU6IFwib3BlblwiLCAgICBzaXplOiA0fSxcbiAgICBcIlxcXFxiaWdyXCIgOiB7dHlwZTogXCJjbG9zZVwiLCAgIHNpemU6IDF9LFxuICAgIFwiXFxcXEJpZ3JcIiA6IHt0eXBlOiBcImNsb3NlXCIsICAgc2l6ZTogMn0sXG4gICAgXCJcXFxcYmlnZ3JcIjoge3R5cGU6IFwiY2xvc2VcIiwgICBzaXplOiAzfSxcbiAgICBcIlxcXFxCaWdnclwiOiB7dHlwZTogXCJjbG9zZVwiLCAgIHNpemU6IDR9LFxuICAgIFwiXFxcXGJpZ21cIiA6IHt0eXBlOiBcInJlbFwiLCAgICAgc2l6ZTogMX0sXG4gICAgXCJcXFxcQmlnbVwiIDoge3R5cGU6IFwicmVsXCIsICAgICBzaXplOiAyfSxcbiAgICBcIlxcXFxiaWdnbVwiOiB7dHlwZTogXCJyZWxcIiwgICAgIHNpemU6IDN9LFxuICAgIFwiXFxcXEJpZ2dtXCI6IHt0eXBlOiBcInJlbFwiLCAgICAgc2l6ZTogNH0sXG4gICAgXCJcXFxcYmlnXCIgIDoge3R5cGU6IFwidGV4dG9yZFwiLCBzaXplOiAxfSxcbiAgICBcIlxcXFxCaWdcIiAgOiB7dHlwZTogXCJ0ZXh0b3JkXCIsIHNpemU6IDJ9LFxuICAgIFwiXFxcXGJpZ2dcIiA6IHt0eXBlOiBcInRleHRvcmRcIiwgc2l6ZTogM30sXG4gICAgXCJcXFxcQmlnZ1wiIDoge3R5cGU6IFwidGV4dG9yZFwiLCBzaXplOiA0fVxufTtcblxudmFyIGRlbGltaXRlcnMgPSBbXG4gICAgXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJcXFxcbGJyYWNrXCIsIFwiXVwiLCBcIlxcXFxyYnJhY2tcIixcbiAgICBcIlxcXFx7XCIsIFwiXFxcXGxicmFjZVwiLCBcIlxcXFx9XCIsIFwiXFxcXHJicmFjZVwiLFxuICAgIFwiXFxcXGxmbG9vclwiLCBcIlxcXFxyZmxvb3JcIiwgXCJcXFxcbGNlaWxcIiwgXCJcXFxccmNlaWxcIixcbiAgICBcIjxcIiwgXCI+XCIsIFwiXFxcXGxhbmdsZVwiLCBcIlxcXFxyYW5nbGVcIixcbiAgICBcIi9cIiwgXCJcXFxcYmFja3NsYXNoXCIsXG4gICAgXCJ8XCIsIFwiXFxcXHZlcnRcIiwgXCJcXFxcfFwiLCBcIlxcXFxWZXJ0XCIsXG4gICAgXCJcXFxcdXBhcnJvd1wiLCBcIlxcXFxVcGFycm93XCIsXG4gICAgXCJcXFxcZG93bmFycm93XCIsIFwiXFxcXERvd25hcnJvd1wiLFxuICAgIFwiXFxcXHVwZG93bmFycm93XCIsIFwiXFxcXFVwZG93bmFycm93XCIsXG4gICAgXCIuXCJcbl07XG5cbi8qXG4gKiBUaGlzIGlzIGEgbGlzdCBvZiBmdW5jdGlvbnMgd2hpY2ggZWFjaCBoYXZlIHRoZSBzYW1lIGZ1bmN0aW9uIGJ1dCBoYXZlXG4gKiBkaWZmZXJlbnQgbmFtZXMgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGR1cGxpY2F0ZSB0aGUgZGF0YSBhIGJ1bmNoIG9mIHRpbWVzLlxuICogRWFjaCBlbGVtZW50IGluIHRoZSBsaXN0IGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcga2V5czpcbiAqICAtIGZ1bmNzOiBBIGxpc3Qgb2YgZnVuY3Rpb24gbmFtZXMgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBkYXRhXG4gKiAgLSBkYXRhOiBBbiBvYmplY3R5IHdpdGggdGhlIHNhbWUgZGF0YSBhcyBpbiBlYWNoIHZhbHVlIG9mIHRoZSBgZnVuY3Rpb25gXG4gKiAgICAgICAgICB0YWJsZSBhYm92ZVxuICovXG52YXIgZHVwbGljYXRlZEZ1bmN0aW9ucyA9IFtcbiAgICAvLyBTaW5nbGUtYXJndW1lbnQgY29sb3IgZnVuY3Rpb25zXG4gICAge1xuICAgICAgICBmdW5jczogW1xuICAgICAgICAgICAgXCJcXFxcYmx1ZVwiLCBcIlxcXFxvcmFuZ2VcIiwgXCJcXFxccGlua1wiLCBcIlxcXFxyZWRcIixcbiAgICAgICAgICAgIFwiXFxcXGdyZWVuXCIsIFwiXFxcXGdyYXlcIiwgXCJcXFxccHVycGxlXCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMSxcbiAgICAgICAgICAgIGFsbG93ZWRJblRleHQ6IHRydWUsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0b21zO1xuICAgICAgICAgICAgICAgIGlmIChib2R5LnR5cGUgPT09IFwib3JkZ3JvdXBcIikge1xuICAgICAgICAgICAgICAgICAgICBhdG9tcyA9IGJvZHkudmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXRvbXMgPSBbYm9keV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJrYXRleC1cIiArIGZ1bmMuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdG9tc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gVGhlcmUgYXJlIDIgZmxhZ3MgZm9yIG9wZXJhdG9yczsgd2hldGhlciB0aGV5IHByb2R1Y2UgbGltaXRzIGluXG4gICAgLy8gZGlzcGxheXN0eWxlLCBhbmQgd2hldGhlciB0aGV5IGFyZSBzeW1ib2xzIGFuZCBzaG91bGQgZ3JvdyBpblxuICAgIC8vIGRpc3BsYXlzdHlsZS4gVGhlc2UgZm91ciBncm91cHMgY292ZXIgdGhlIGZvdXIgcG9zc2libGUgY2hvaWNlcy5cblxuICAgIC8vIE5vIGxpbWl0cywgbm90IHN5bWJvbHNcbiAgICB7XG4gICAgICAgIGZ1bmNzOiBbXG4gICAgICAgICAgICBcIlxcXFxhcmNzaW5cIiwgXCJcXFxcYXJjY29zXCIsIFwiXFxcXGFyY3RhblwiLCBcIlxcXFxhcmdcIiwgXCJcXFxcY29zXCIsIFwiXFxcXGNvc2hcIixcbiAgICAgICAgICAgIFwiXFxcXGNvdFwiLCBcIlxcXFxjb3RoXCIsIFwiXFxcXGNzY1wiLCBcIlxcXFxkZWdcIiwgXCJcXFxcZGltXCIsIFwiXFxcXGV4cFwiLCBcIlxcXFxob21cIixcbiAgICAgICAgICAgIFwiXFxcXGtlclwiLCBcIlxcXFxsZ1wiLCBcIlxcXFxsblwiLCBcIlxcXFxsb2dcIiwgXCJcXFxcc2VjXCIsIFwiXFxcXHNpblwiLCBcIlxcXFxzaW5oXCIsXG4gICAgICAgICAgICBcIlxcXFx0YW5cIixcIlxcXFx0YW5oXCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMCxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZ1bmNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExpbWl0cywgbm90IHN5bWJvbHNcbiAgICB7XG4gICAgICAgIGZ1bmNzOiBbXG4gICAgICAgICAgICBcIlxcXFxkZXRcIiwgXCJcXFxcZ2NkXCIsIFwiXFxcXGluZlwiLCBcIlxcXFxsaW1cIiwgXCJcXFxcbGltaW5mXCIsIFwiXFxcXGxpbXN1cFwiLCBcIlxcXFxtYXhcIixcbiAgICAgICAgICAgIFwiXFxcXG1pblwiLCBcIlxcXFxQclwiLCBcIlxcXFxzdXBcIlxuICAgICAgICBdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAwLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib3BcIixcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmdW5jXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBObyBsaW1pdHMsIHN5bWJvbHNcbiAgICB7XG4gICAgICAgIGZ1bmNzOiBbXG4gICAgICAgICAgICBcIlxcXFxpbnRcIiwgXCJcXFxcaWludFwiLCBcIlxcXFxpaWludFwiLCBcIlxcXFxvaW50XCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMCxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZnVuY1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTGltaXRzLCBzeW1ib2xzXG4gICAge1xuICAgICAgICBmdW5jczogW1xuICAgICAgICAgICAgXCJcXFxcY29wcm9kXCIsIFwiXFxcXGJpZ3ZlZVwiLCBcIlxcXFxiaWd3ZWRnZVwiLCBcIlxcXFxiaWd1cGx1c1wiLCBcIlxcXFxiaWdjYXBcIixcbiAgICAgICAgICAgIFwiXFxcXGJpZ2N1cFwiLCBcIlxcXFxpbnRvcFwiLCBcIlxcXFxwcm9kXCIsIFwiXFxcXHN1bVwiLCBcIlxcXFxiaWdvdGltZXNcIixcbiAgICAgICAgICAgIFwiXFxcXGJpZ29wbHVzXCIsIFwiXFxcXGJpZ29kb3RcIiwgXCJcXFxcYmlnc3FjdXBcIiwgXCJcXFxcc21hbGxpbnRcIlxuICAgICAgICBdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAwLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib3BcIixcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZ1bmNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEZyYWN0aW9uc1xuICAgIHtcbiAgICAgICAgZnVuY3M6IFtcbiAgICAgICAgICAgIFwiXFxcXGRmcmFjXCIsIFwiXFxcXGZyYWNcIiwgXCJcXFxcdGZyYWNcIixcbiAgICAgICAgICAgIFwiXFxcXGRiaW5vbVwiLCBcIlxcXFxiaW5vbVwiLCBcIlxcXFx0Ymlub21cIlxuICAgICAgICBdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAyLFxuICAgICAgICAgICAgZ3JlZWRpbmVzczogMixcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMsIG51bWVyLCBkZW5vbSkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNCYXJMaW5lO1xuICAgICAgICAgICAgICAgIHZhciBsZWZ0RGVsaW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciByaWdodERlbGltID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IFwiYXV0b1wiO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChmdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcZGZyYWNcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcXFxmcmFjXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcdGZyYWNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0JhckxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcZGJpbm9tXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcYmlub21cIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcXFx0Ymlub21cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0JhckxpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnREZWxpbSA9IFwiKFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHREZWxpbSA9IFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnJlY29nbml6ZWQgZ2VuZnJhYyBjb21tYW5kXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZnVuYykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXGRmcmFjXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcZGJpbm9tXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gXCJkaXNwbGF5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcXFx0ZnJhY1wiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXHRiaW5vbVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJnZW5mcmFjXCIsXG4gICAgICAgICAgICAgICAgICAgIG51bWVyOiBudW1lcixcbiAgICAgICAgICAgICAgICAgICAgZGVub206IGRlbm9tLFxuICAgICAgICAgICAgICAgICAgICBoYXNCYXJMaW5lOiBoYXNCYXJMaW5lLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0RGVsaW06IGxlZnREZWxpbSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHREZWxpbTogcmlnaHREZWxpbSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTGVmdCBhbmQgcmlnaHQgb3ZlcmxhcCBmdW5jdGlvbnNcbiAgICB7XG4gICAgICAgIGZ1bmNzOiBbXCJcXFxcbGxhcFwiLCBcIlxcXFxybGFwXCJdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAxLFxuICAgICAgICAgICAgYWxsb3dlZEluVGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMsIGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmdW5jLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZWxpbWl0ZXIgZnVuY3Rpb25zXG4gICAge1xuICAgICAgICBmdW5jczogW1xuICAgICAgICAgICAgXCJcXFxcYmlnbFwiLCBcIlxcXFxCaWdsXCIsIFwiXFxcXGJpZ2dsXCIsIFwiXFxcXEJpZ2dsXCIsXG4gICAgICAgICAgICBcIlxcXFxiaWdyXCIsIFwiXFxcXEJpZ3JcIiwgXCJcXFxcYmlnZ3JcIiwgXCJcXFxcQmlnZ3JcIixcbiAgICAgICAgICAgIFwiXFxcXGJpZ21cIiwgXCJcXFxcQmlnbVwiLCBcIlxcXFxiaWdnbVwiLCBcIlxcXFxCaWdnbVwiLFxuICAgICAgICAgICAgXCJcXFxcYmlnXCIsICBcIlxcXFxCaWdcIiwgIFwiXFxcXGJpZ2dcIiwgIFwiXFxcXEJpZ2dcIixcbiAgICAgICAgICAgIFwiXFxcXGxlZnRcIiwgXCJcXFxccmlnaHRcIlxuICAgICAgICBdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAxLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgZGVsaW0sIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICghdXRpbHMuY29udGFpbnMoZGVsaW1pdGVycywgZGVsaW0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJbnZhbGlkIGRlbGltaXRlcjogJ1wiICsgZGVsaW0udmFsdWUgKyBcIicgYWZ0ZXIgJ1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxleGVyLCBwb3NpdGlvbnNbMV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFxcbGVmdCBhbmQgXFxyaWdodCBhcmUgY2F1Z2h0IHNvbWV3aGVyZSBpbiBQYXJzZXIuanMsIHdoaWNoIGlzXG4gICAgICAgICAgICAgICAgLy8gd2h5IHRoaXMgZGF0YSBkb2Vzbid0IG1hdGNoIHdoYXQgaXMgaW4gYnVpbGRIVE1MLlxuICAgICAgICAgICAgICAgIGlmIChmdW5jID09PSBcIlxcXFxsZWZ0XCIgfHwgZnVuYyA9PT0gXCJcXFxccmlnaHRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJsZWZ0cmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWxpbS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGltc2l6aW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBkZWxpbWl0ZXJTaXplc1tmdW5jXS5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1UeXBlOiBkZWxpbWl0ZXJTaXplc1tmdW5jXS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlbGltLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIFNpemluZyBmdW5jdGlvbnMgKGhhbmRsZWQgaW4gUGFyc2VyLmpzIGV4cGxpY2l0bHksIGhlbmNlIG5vIGhhbmRsZXIpXG4gICAge1xuICAgICAgICBmdW5jczogW1xuICAgICAgICAgICAgXCJcXFxcdGlueVwiLCBcIlxcXFxzY3JpcHRzaXplXCIsIFwiXFxcXGZvb3Rub3Rlc2l6ZVwiLCBcIlxcXFxzbWFsbFwiLFxuICAgICAgICAgICAgXCJcXFxcbm9ybWFsc2l6ZVwiLCBcIlxcXFxsYXJnZVwiLCBcIlxcXFxMYXJnZVwiLCBcIlxcXFxMQVJHRVwiLCBcIlxcXFxodWdlXCIsIFwiXFxcXEh1Z2VcIlxuICAgICAgICBdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU3R5bGUgY2hhbmdpbmcgZnVuY3Rpb25zIChoYW5kbGVkIGluIFBhcnNlci5qcyBleHBsaWNpdGx5LCBoZW5jZSBub1xuICAgIC8vIGhhbmRsZXIpXG4gICAge1xuICAgICAgICBmdW5jczogW1xuICAgICAgICAgICAgXCJcXFxcZGlzcGxheXN0eWxlXCIsIFwiXFxcXHRleHRzdHlsZVwiLCBcIlxcXFxzY3JpcHRzdHlsZVwiLFxuICAgICAgICAgICAgXCJcXFxcc2NyaXB0c2NyaXB0c3R5bGVcIlxuICAgICAgICBdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWNjZW50c1xuICAgIHtcbiAgICAgICAgZnVuY3M6IFtcbiAgICAgICAgICAgIFwiXFxcXGFjdXRlXCIsIFwiXFxcXGdyYXZlXCIsIFwiXFxcXGRkb3RcIiwgXCJcXFxcdGlsZGVcIiwgXCJcXFxcYmFyXCIsIFwiXFxcXGJyZXZlXCIsXG4gICAgICAgICAgICBcIlxcXFxjaGVja1wiLCBcIlxcXFxoYXRcIiwgXCJcXFxcdmVjXCIsIFwiXFxcXGRvdFwiXG4gICAgICAgICAgICAvLyBXZSBkb24ndCBzdXBwb3J0IGV4cGFuZGluZyBhY2NlbnRzIHlldFxuICAgICAgICAgICAgLy8gXCJcXFxcd2lkZXRpbGRlXCIsIFwiXFxcXHdpZGVoYXRcIlxuICAgICAgICBdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAxLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgYmFzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VudDogZnVuYyxcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogYmFzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gSW5maXggZ2VuZXJhbGl6ZWQgZnJhY3Rpb25zXG4gICAge1xuICAgICAgICBmdW5jczogW1wiXFxcXG92ZXJcIiwgXCJcXFxcY2hvb3NlXCJdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBudW1BcmdzOiAwLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZVdpdGg7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChmdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcb3ZlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVdpdGggPSBcIlxcXFxmcmFjXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcXFxjaG9vc2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VXaXRoID0gXCJcXFxcYmlub21cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIGluZml4IGdlbmZyYWMgY29tbWFuZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbmZpeFwiLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlV2l0aDogcmVwbGFjZVdpdGhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXTtcblxudmFyIGFkZEZ1bmNzV2l0aERhdGEgPSBmdW5jdGlvbihmdW5jcywgZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnVuY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZnVuY3Rpb25zW2Z1bmNzW2ldXSA9IGRhdGE7XG4gICAgfVxufTtcblxuLy8gQWRkIGFsbCBvZiB0aGUgZnVuY3Rpb25zIGluIGR1cGxpY2F0ZWRGdW5jdGlvbnMgdG8gdGhlIGZ1bmN0aW9ucyBtYXBcbmZvciAodmFyIGkgPSAwOyBpIDwgZHVwbGljYXRlZEZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGFkZEZ1bmNzV2l0aERhdGEoZHVwbGljYXRlZEZ1bmN0aW9uc1tpXS5mdW5jcywgZHVwbGljYXRlZEZ1bmN0aW9uc1tpXS5kYXRhKTtcbn1cblxuLy8gU2V0IGRlZmF1bHQgdmFsdWVzIG9mIGZ1bmN0aW9uc1xuZm9yICh2YXIgZiBpbiBmdW5jdGlvbnMpIHtcbiAgICBpZiAoZnVuY3Rpb25zLmhhc093blByb3BlcnR5KGYpKSB7XG4gICAgICAgIHZhciBmdW5jID0gZnVuY3Rpb25zW2ZdO1xuXG4gICAgICAgIGZ1bmN0aW9uc1tmXSA9IHtcbiAgICAgICAgICAgIG51bUFyZ3M6IGZ1bmMubnVtQXJncyxcbiAgICAgICAgICAgIGFyZ1R5cGVzOiBmdW5jLmFyZ1R5cGVzLFxuICAgICAgICAgICAgZ3JlZWRpbmVzczogKGZ1bmMuZ3JlZWRpbmVzcyA9PT0gdW5kZWZpbmVkKSA/IDEgOiBmdW5jLmdyZWVkaW5lc3MsXG4gICAgICAgICAgICBhbGxvd2VkSW5UZXh0OiBmdW5jLmFsbG93ZWRJblRleHQgPyBmdW5jLmFsbG93ZWRJblRleHQgOiBmYWxzZSxcbiAgICAgICAgICAgIG51bU9wdGlvbmFsQXJnczogKGZ1bmMubnVtT3B0aW9uYWxBcmdzID09PSB1bmRlZmluZWQpID8gMCA6XG4gICAgICAgICAgICAgICAgZnVuYy5udW1PcHRpb25hbEFyZ3MsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jLmhhbmRsZXJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZ1bmNzOiBmdW5jdGlvbnNcbn07XG4iLCIvKipcbiAqIFRoZXNlIG9iamVjdHMgc3RvcmUgZGF0YSBhYm91dCBNYXRoTUwgbm9kZXMuIFRoaXMgaXMgdGhlIE1hdGhNTCBlcXVpdmFsZW50XG4gKiBvZiB0aGUgdHlwZXMgaW4gZG9tVHJlZS5qcy4gU2luY2UgTWF0aE1MIGhhbmRsZXMgaXRzIG93biByZW5kZXJpbmcsIGFuZFxuICogc2luY2Ugd2UncmUgbWFpbmx5IHVzaW5nIE1hdGhNTCB0byBpbXByb3ZlIGFjY2Vzc2liaWxpdHksIHdlIGRvbid0IG1hbmFnZVxuICogYW55IG9mIHRoZSBzdHlsaW5nIHN0YXRlIHRoYXQgdGhlIHBsYWluIERPTSBub2RlcyBkby5cbiAqXG4gKiBUaGUgYHRvTm9kZWAgYW5kIGB0b01hcmt1cGAgZnVuY3Rpb25zIHdvcmsgc2ltbGFybHkgdG8gaG93IHRoZXkgZG8gaW5cbiAqIGRvbVRyZWUuanMsIGNyZWF0aW5nIG5hbWVzcGFjZWQgRE9NIG5vZGVzIGFuZCBIVE1MIHRleHQgbWFya3VwIHJlc3BlY3RpdmVseS5cbiAqL1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuLyoqXG4gKiBUaGlzIG5vZGUgcmVwcmVzZW50cyBhIGdlbmVyYWwgcHVycG9zZSBNYXRoTUwgbm9kZSBvZiBhbnkgdHlwZS4gVGhlXG4gKiBjb25zdHJ1Y3RvciByZXF1aXJlcyB0aGUgdHlwZSBvZiBub2RlIHRvIGNyZWF0ZSAoZm9yIGV4YW1wbGUsIGBcIm1vXCJgIG9yXG4gKiBgXCJtc3BhY2VcImAsIGNvcnJlc3BvbmRpbmcgdG8gYDxtbz5gIGFuZCBgPG1zcGFjZT5gIHRhZ3MpLlxuICovXG5mdW5jdGlvbiBNYXRoTm9kZSh0eXBlLCBjaGlsZHJlbikge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdO1xufVxuXG4vKipcbiAqIFNldHMgYW4gYXR0cmlidXRlIG9uIGEgTWF0aE1MIG5vZGUuIE1hdGhNTCBkZXBlbmRzIG9uIGF0dHJpYnV0ZXMgdG8gY29udmV5IGFcbiAqIHNlbWFudGljIGNvbnRlbnQsIHNvIHRoaXMgaXMgdXNlZCBoZWF2aWx5LlxuICovXG5NYXRoTm9kZS5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLmF0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG1hdGggbm9kZSBpbnRvIGEgTWF0aE1MLW5hbWVzcGFjZWQgRE9NIGVsZW1lbnQuXG4gKi9cbk1hdGhOb2RlLnByb3RvdHlwZS50b05vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIsIHRoaXMudHlwZSk7XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIHRoaXMuYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuYXR0cmlidXRlcywgYXR0cikpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMuYXR0cmlidXRlc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkcmVuW2ldLnRvTm9kZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIG1hdGggbm9kZSBpbnRvIGFuIEhUTUwgbWFya3VwIHN0cmluZy5cbiAqL1xuTWF0aE5vZGUucHJvdG90eXBlLnRvTWFya3VwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1hcmt1cCA9IFwiPFwiICsgdGhpcy50eXBlO1xuXG4gICAgLy8gQWRkIHRoZSBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgYXR0ciBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHIpKSB7XG4gICAgICAgICAgICBtYXJrdXAgKz0gXCIgXCIgKyBhdHRyICsgXCI9XFxcIlwiO1xuICAgICAgICAgICAgbWFya3VwICs9IHV0aWxzLmVzY2FwZSh0aGlzLmF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICAgICAgbWFya3VwICs9IFwiXFxcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya3VwICs9IFwiPlwiO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcmt1cCArPSB0aGlzLmNoaWxkcmVuW2ldLnRvTWFya3VwKCk7XG4gICAgfVxuXG4gICAgbWFya3VwICs9IFwiPC9cIiArIHRoaXMudHlwZSArIFwiPlwiO1xuXG4gICAgcmV0dXJuIG1hcmt1cDtcbn07XG5cbi8qKlxuICogVGhpcyBub2RlIHJlcHJlc2VudHMgYSBwaWVjZSBvZiB0ZXh0LlxuICovXG5mdW5jdGlvbiBUZXh0Tm9kZSh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdGV4dCBub2RlIGludG8gYSBET00gdGV4dCBub2RlLlxuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUudG9Ob2RlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dCk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB0ZXh0IG5vZGUgaW50byBIVE1MIG1hcmt1cCAod2hpY2ggaXMganVzdCB0aGUgdGV4dCBpdHNlbGYpLlxuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUudG9NYXJrdXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXRpbHMuZXNjYXBlKHRoaXMudGV4dCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBNYXRoTm9kZTogTWF0aE5vZGUsXG4gICAgVGV4dE5vZGU6IFRleHROb2RlXG59O1xuIiwiLyoqXG4gKiBQcm92aWRlcyBhIHNpbmdsZSBmdW5jdGlvbiBmb3IgcGFyc2luZyBhbiBleHByZXNzaW9uIHVzaW5nIGEgUGFyc2VyXG4gKiBUT0RPKGVtaWx5KTogUmVtb3ZlIHRoaXNcbiAqL1xuXG52YXIgUGFyc2VyID0gcmVxdWlyZShcIi4vUGFyc2VyXCIpO1xuXG4vKipcbiAqIFBhcnNlcyBhbiBleHByZXNzaW9uIHVzaW5nIGEgUGFyc2VyLCB0aGVuIHJldHVybnMgdGhlIHBhcnNlZCByZXN1bHQuXG4gKi9cbnZhciBwYXJzZVRyZWUgPSBmdW5jdGlvbih0b1BhcnNlLCBzZXR0aW5ncykge1xuICAgIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKHRvUGFyc2UsIHNldHRpbmdzKTtcblxuICAgIHJldHVybiBwYXJzZXIucGFyc2UoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VUcmVlO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgaG9sZHMgYSBsaXN0IG9mIGFsbCBuby1hcmd1bWVudCBmdW5jdGlvbnMgYW5kIHNpbmdsZS1jaGFyYWN0ZXJcbiAqIHN5bWJvbHMgKGxpa2UgJ2EnIG9yICc7JykuXG4gKlxuICogRm9yIGVhY2ggb2YgdGhlIHN5bWJvbHMsIHRoZXJlIGFyZSB0aHJlZSBwcm9wZXJ0aWVzIHRoZXkgY2FuIGhhdmU6XG4gKiAtIGZvbnQgKHJlcXVpcmVkKTogdGhlIGZvbnQgdG8gYmUgdXNlZCBmb3IgdGhpcyBzeW1ib2wuIEVpdGhlciBcIm1haW5cIiAodGhlXG4gICAgIG5vcm1hbCBmb250KSwgb3IgXCJhbXNcIiAodGhlIGFtcyBmb250cykuXG4gKiAtIGdyb3VwIChyZXF1aXJlZCk6IHRoZSBQYXJzZU5vZGUgZ3JvdXAgdHlwZSB0aGUgc3ltYm9sIHNob3VsZCBoYXZlIChpLmUuXG4gICAgIFwidGV4dG9yZFwiLCBcIm1hdGhvcmRcIiwgZXRjKS5cbiAqIC0gcmVwbGFjZSAob3B0aW9uYWwpOiB0aGUgY2hhcmFjdGVyIHRoYXQgdGhpcyBzeW1ib2wgb3IgZnVuY3Rpb24gc2hvdWxkIGJlXG4gKiAgIHJlcGxhY2VkIHdpdGggKGkuZS4gXCJcXHBoaVwiIGhhcyBhIHJlcGxhY2UgdmFsdWUgb2YgXCJcXHUwM2Q1XCIsIHRoZSBwaGlcbiAqICAgY2hhcmFjdGVyIGluIHRoZSBtYWluIGZvbnQpLlxuICpcbiAqIFRoZSBvdXRlcm1vc3QgbWFwIGluIHRoZSB0YWJsZSBpbmRpY2F0ZXMgd2hhdCBtb2RlIHRoZSBzeW1ib2xzIHNob3VsZCBiZVxuICogYWNjZXB0ZWQgaW4gKGUuZy4gXCJtYXRoXCIgb3IgXCJ0ZXh0XCIpLlxuICovXG5cbnZhciBzeW1ib2xzID0ge1xuICAgIFwibWF0aFwiOiB7XG4gICAgICAgIC8vIFJlbGF0aW9uIFN5bWJvbHNcbiAgICAgICAgXCJcXFxcZXF1aXZcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHByZWNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI3YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1Y2NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI3YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjNjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccGVycFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmE1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY2VxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhYWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdWNjZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNpbWVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxtaWRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNmFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxnZ1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjZiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYXN5bXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHBhcmFsbGVsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxib3d0aWVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNtaWxlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIzMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzcXN1YnNldGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyOTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzcXN1cHNldGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyOTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkb3RlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZnJvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjMyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5pXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxwcm9wdG9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZkYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkYXNodlwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb3duc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjBiXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBQdW5jdHVhdGlvblxuICAgICAgICBcIlxcXFxsZG90cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInB1bmN0XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwMmVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjZG90cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInB1bmN0XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzVcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIE1pc2MgU3ltYm9sc1xuICAgICAgICBcIlxcXFxhbGVwaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjEzNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGZvcmFsbFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGhiYXJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxleGlzdHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuYWJsYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGZsYXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI2NmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlbGxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuYXR1cmFsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNjZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2x1YnN1aXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI2NjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx3cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjExOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNoYXJwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNjZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGlhbW9uZHN1aXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI2NjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxSZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjExY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGhlYXJ0c3VpdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjY2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEltXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3BhZGVzdWl0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNjYwXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBNYXRoIGFuZCBUZXh0XG4gICAgICAgIFwiXFxcXGRhZ1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjAyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRkYWdcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIwMjFcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIExhcmdlIERlbGltaXRlcnNcbiAgICAgICAgXCJcXFxccm1vdXN0YWNoZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIzYjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsbW91c3RhY2hlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BlblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyM2IwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmdyb3VwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiY2xvc2VcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdlZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxncm91cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wZW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdlZVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQmluYXJ5IE9wZXJhdG9yc1xuICAgICAgICBcIlxcXFxtcFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb21pbnVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyOTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx1cGx1c1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjhlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FjYXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGFzdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjE3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FjdXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ2NpcmNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjVlZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJ1bGxldFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGRhZ2dlclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMDIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcd3JcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGFtYWxnXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhM2ZcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFycm93IFN5bWJvbHNcbiAgICAgICAgXCJcXFxcbG9uZ2xlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyN2Y1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcTGVmdGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxZDBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxMb25nbGVmdGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI3ZjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsb25ncmlnaHRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyN2Y2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcUmlnaHRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcTG9uZ3JpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdmOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnRyaWdodGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsb25nbGVmdHJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdmN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXExlZnRyaWdodGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxZDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxMb25nbGVmdHJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdmYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG1hcHN0b1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbG9uZ21hcHN0b1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyN2ZjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmVhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTk3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaG9va2xlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaG9va3JpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFhYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNlYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnRoYXJwb29udXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpZ2h0aGFycG9vbnVwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxYzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzd2Fycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZWZ0aGFycG9vbmRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpZ2h0aGFycG9vbmRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG53YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpZ2h0bGVmdGhhcnBvb25zXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxY2NcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFNUyBOZWdhdGVkIEJpbmFyeSBSZWxhdGlvbnNcbiAgICAgICAgXCJcXFxcbmxlc3NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmxlcXNsYW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5sZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAxMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxuZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbG5lcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbHZlcnRuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAwY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxuc2ltXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxuYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE4OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5wcmVjXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5wcmVjZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY25zaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY25hcHByb3hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYWI5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnNpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuc2hvcnRtaWRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbm1pZFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxudmRhc2hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmFjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnZEYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG50cmlhbmdsZWxlZnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmVhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnRyaWFuZ2xlbGVmdGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1YnNldG5lcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyOGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJzdWJzZXRuZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDFhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3Vic2V0bmVxcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhY2JcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJzdWJzZXRuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAxN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5ndHJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmdlcXNsYW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAwZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5nZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAwZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGduZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ25lcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ3ZlcnRuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAwZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGduc2ltXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGduYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE4YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdWNjXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdWNjZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY25zaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY25hcHByb3hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYWJhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmNvbmdcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnNob3J0cGFyYWxsZWxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDA3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnBhcmFsbGVsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5WRGFzaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxudHJpYW5nbGVyaWdodFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxudHJpYW5nbGVyaWdodGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdXBzZXRlcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3Vwc2V0bmVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnN1cHNldG5lcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdWUwMWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdXBzZXRuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFjY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnN1cHNldG5lcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcblZkYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHByZWNuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1Y2NuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdWJzZXRlcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdW5saGRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdW5yaGRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmI1XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBTVMgTmVnYXRlZCBBcnJvd3NcbiAgICAgICAgIFwiXFxcXG5sZWZ0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTlhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTliXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbkxlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxY2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuUmlnaHRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxY2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxubGVmdHJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWFlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbkxlZnRyaWdodGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjZVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQU1TIE1pc2NcbiAgICAgICAgXCJcXFxcdmFydHJpYW5nbGVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaHNsYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0cmlhbmdsZWRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxvemVuZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjVjYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNsZWRTXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI0YzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxtZWFzdXJlZGFuZ2xlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuZXhpc3RzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxtaG9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjEyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEZpbnZcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjEzMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEdhbWVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEJiYmtcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDA2YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJhY2twcmltZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMDM1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmxhY2t0cmlhbmdsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmxhY2t0cmlhbmdsZWRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJsYWNrc3F1YXJlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1YTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxibGFja2xvemVuZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjllYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ3N0YXJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjYwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNwaGVyaWNhbGFuZ2xlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjb21wbGVtZW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxldGhcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBmMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRpYWd1cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNTcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGlhZ2Rvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjU3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNxdWFyZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcQm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1YTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxEaWFtb25kXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1Y2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx5ZW5cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhNVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQU1TIEhlYnJld1xuICAgICAgICBcIlxcXFxiZXRoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMzZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkYWxldGhcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjEzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdpbWVsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMzdcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFNUyBHcmVla1xuICAgICAgICBcIlxcXFxkaWdhbW1hXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzZGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJrYXBwYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2YwXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBTVMgRGVsaW1pdGVyc1xuICAgICAgICBcIlxcXFx1bGNvcm5lclwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNTBjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdXJjb3JuZXJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjUxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxsY29ybmVyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1MTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxscmNvcm5lclwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNTE4XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBTVMgQmluYXJ5IFJlbGF0aW9uc1xuICAgICAgICBcIlxcXFxsZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlcXNsYW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE3ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGVxc2xhbnRsZXNzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlc3NzaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjcyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVzc2FwcHJveFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhODVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxhcHByb3hlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZXNzZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJkNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxsbFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZXNzZ3RyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlc3NlcWd0clwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZXNzZXFxZ3RyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE4YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvdGVxZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpc2luZ2RvdHNlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxmYWxsaW5nZG90c2VxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJhY2tzaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjNkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmFja3NpbWVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1YnNldGVxcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhYzVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxTdWJzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FzdWJzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjhmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY2N1cmx5ZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjdjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY3VybHllcXByZWNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmRlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY3NpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxwcmVjYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnRyaWFuZ2xlbGVmdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0cmlhbmdsZWxlZnRlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2RGFzaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYThcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxWdmRhc2hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmFhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc21hbGxzbWlsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIzMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzbWFsbGZyb3duXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjMyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJ1bXBlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxCdW1wZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjRlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ2VxcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxnZXFzbGFudFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlcXNsYW50Z3RyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE5NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGd0cnNpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxndHJhcHByb3hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTg2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ3RyZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJkN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdnZ1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxndHJsZXNzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI3N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGd0cmVxbGVzc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxndHJlcXFsZXNzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE4Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGVxY2lyY1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjaXJjZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjU3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHJpYW5nbGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI1Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRoaWNrc2ltXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIzY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRoaWNrYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1cHNldGVxcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhYzZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxTdXBzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FzdXBzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY2N1cmx5ZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjdkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY3VybHllcXN1Y2NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmRmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY3NpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyN2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdWNjYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnRyaWFuZ2xlcmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHJpYW5nbGVyaWdodGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXFZkYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNob3J0bWlkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNob3J0cGFyYWxsZWxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmV0d2VlblwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxwaXRjaGZvcmtcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmFycHJvcHRvXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJsYWNrdHJpYW5nbGVsZWZ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjVjMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRoZXJlZm9yZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiYWNrZXBzaWxvblwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxibGFja3RyaWFuZ2xlcmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmVjYXVzZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMzVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsbGxlc3NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ2dndHJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGhkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJoZFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlcXNpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxKb2luXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxEb3RlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNTFcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFNUyBCaW5hcnkgT3BlcmF0b3JzXG4gICAgICAgIFwiXFxcXGRvdHBsdXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjE0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc21hbGxzZXRtaW51c1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxDYXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcQ3VwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJkM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvdWJsZWJhcndlZGdlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE1ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJveG1pbnVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJveHBsdXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjllXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGl2aWRlb250aW1lc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsdGltZXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccnRpbWVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnR0aHJlZXRpbWVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpZ2h0dGhyZWV0aW1lc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyY2NcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjdXJseXdlZGdlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGN1cmx5dmVlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNsZWRkYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNsZWRhc3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjliXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2VudGVyZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGludGVyY2FsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvdWJsZWNhcFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkb3VibGVjdXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYm94dGltZXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmEwXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBTVMgQXJyb3dzXG4gICAgICAgIFwiXFxcXGRhc2hyaWdodGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFlMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRhc2hsZWZ0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVmdGxlZnRhcnJvd3NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVmdHJpZ2h0YXJyb3dzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXExsZWZ0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWRhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHdvaGVhZGxlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZWZ0YXJyb3d0YWlsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFhMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxvb3BhcnJvd2xlZnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWFiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVmdHJpZ2h0aGFycG9vbnNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWNiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY3VydmVhcnJvd2xlZnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2lyY2xlYXJyb3dsZWZ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXExzaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxYjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx1cHVwYXJyb3dzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHVwaGFycG9vbmxlZnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWJmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZG93bmhhcnBvb25sZWZ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG11bHRpbWFwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnRyaWdodHNxdWlnYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWFkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmlnaHRyaWdodGFycm93c1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxYzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxyaWdodGxlZnRhcnJvd3NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHdvaGVhZHJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmlnaHRhcnJvd3RhaWxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbG9vcGFycm93cmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWFjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY3VydmVhcnJvd3JpZ2h0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNsZWFycm93cmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcUnNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvd25kb3duYXJyb3dzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHVwaGFycG9vbnJpZ2h0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvd25oYXJwb29ucmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWMyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmlnaHRzcXVpZ2Fycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFkZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlYWRzdG9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWRkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcUnJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWRiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmVzdHJpY3Rpb25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWJlXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIwMThcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFwkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCIkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcJVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiJVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXF9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIl9cIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxhbmdsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGluZnR5XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjFlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJpbWVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIwMzJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0cmlhbmdsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEdhbW1hXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMzkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcRGVsdGFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzOTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxUaGV0YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDM5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXExhbWJkYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDM5YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXFhpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMzllXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcUGlcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxTaWdtYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNhM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXFVwc2lsb25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxQaGlcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxQc2lcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYThcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxPbWVnYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNhOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5lZ1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxub3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0b3BcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxib3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlbXB0eXNldFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcm5vdGhpbmdcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGFscGhhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2IxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmV0YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdhbW1hXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2IzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGVsdGFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlcHNpbG9uXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2Y1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcemV0YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGV0YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRoZXRhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2I4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaW90YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGthcHBhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2JhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGFtYmRhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2JiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbXVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxudVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHhpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2JlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb21pY3JvblwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwib1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHBpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2MwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmhvXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2MxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc2lnbWFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0YXVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx1cHNpbG9uXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2M1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccGhpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2Q1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2hpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2M3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHNpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2M4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb21lZ2FcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJlcHNpbG9uXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2I1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmFydGhldGFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzZDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJwaVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNkNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnJob1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNmMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnNpZ21hXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2MyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmFycGhpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2M2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIqXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIitcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIi1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNkb3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRpdlwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMGY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccG1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBiMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRpbWVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwZDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjYXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGN1cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjJhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc2V0bWludXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxhbmRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxvclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcd2VkZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZlZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VyZFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiKFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIltcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcGVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGFuZ2xlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BlblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyN2U4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbHZlcnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcGVuXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIilcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJjbG9zZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCI/XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiY2xvc2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIiFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJjbG9zZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJhbmdsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI3ZTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxydmVydFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIj1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIlxuICAgICAgICB9LFxuICAgICAgICBcIjxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIlxuICAgICAgICB9LFxuICAgICAgICBcIj5cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIlxuICAgICAgICB9LFxuICAgICAgICBcIjpcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxhcHByb3hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNvbmdcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxnZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdldHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGluXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxub3RpblwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3Vic2V0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyODJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdXBzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1YnNldGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyODZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdXBzZXRlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnN1YnNldGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdXBzZXRlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyODlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxtb2RlbHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjY0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5lcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjYwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmlnaHRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdG9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5nZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmxlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFwhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwic3BhY2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXCBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIn5cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFwsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwic3BhY2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXDpcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcO1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInNwYWNpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlbnNwYWNlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwic3BhY2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHFxdWFkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwic3BhY2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHF1YWRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3BhY2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIixcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJwdW5jdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiO1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInB1bmN0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY29sb25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJwdW5jdFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCI6XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmFyd2VkZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZlZWJhclwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb2RvdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG9wbHVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjk1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb3RpbWVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjk3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccGFydGlhbFwiOntcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb3NsYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjk4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2lyY2xlZGNpcmNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJveGRvdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmlndHJpYW5nbGV1cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ3RyaWFuZ2xlZG93blwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRhZ2dlclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjAyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRpYW1vbmRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdGFyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHJpYW5nbGVsZWZ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWMzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHJpYW5nbGVyaWdodFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHtcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcGVuXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIntcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx9XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiY2xvc2VcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwifVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxicmFjZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wZW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwie1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJicmFjZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIn1cIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsYnJhY2tcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcGVuXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIltcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxyYnJhY2tcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJjbG9zZVwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJdXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGZsb29yXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BlblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMzBhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmZsb29yXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiY2xvc2VcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjMwYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxjZWlsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BlblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMzA4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmNlaWxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJjbG9zZVwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMzA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmFja3NsYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXFxcXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ8XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmVydFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxWZXJ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdXBhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXFVwYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxZDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkb3duYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxEb3duYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxZDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx1cGRvd25hcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXFVwZG93bmFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWQ1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY29wcm9kXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ3ZlZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWd3ZWRnZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWd1cGx1c1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhMDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWdjYXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmMyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmlnY3VwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGludFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxpbnRvcFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMmJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxpaW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGlpaW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHByb2RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjBmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VtXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ290aW1lc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhMDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWdvcGx1c1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhMDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWdvZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmEwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG9pbnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjJlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmlnc3FjdXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc21hbGxpbnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGRvdHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJwdW5jdFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMDI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2RvdHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJpbm5lclwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmVmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGRvdHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJpbm5lclwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmYxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmRvdHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxhY3V0ZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMGI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ3JhdmVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJhY2NlbnRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDA2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRkb3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJhY2NlbnRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRpbGRlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiYXJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJhY2NlbnRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJyZXZlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAyZDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjaGVja1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMmM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaGF0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwNWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2ZWNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJhY2NlbnRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjBkN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMmQ5XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgXCJcXFxcIFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInNwYWNpbmdcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiIFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInNwYWNpbmdcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiflwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInNwYWNpbmdcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhMFwiXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBUaGVyZSBhcmUgbG90cyBvZiBzeW1ib2xzIHdoaWNoIGFyZSB0aGUgc2FtZSwgc28gd2UgYWRkIHRoZW0gaW4gYWZ0ZXJ3YXJkcy5cblxuLy8gQWxsIG9mIHRoZXNlIGFyZSB0ZXh0b3JkcyBpbiBtYXRoIG1vZGVcbnZhciBtYXRoVGV4dFN5bWJvbHMgPSBcIjAxMjM0NTY3ODkvQC5cXFwiXCI7XG5mb3IgKHZhciBpID0gMDsgaSA8IG1hdGhUZXh0U3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaCA9IG1hdGhUZXh0U3ltYm9scy5jaGFyQXQoaSk7XG4gICAgc3ltYm9scy5tYXRoW2NoXSA9IHtcbiAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgIGdyb3VwOiBcInRleHRvcmRcIlxuICAgIH07XG59XG5cbi8vIEFsbCBvZiB0aGVzZSBhcmUgdGV4dG9yZHMgaW4gdGV4dCBtb2RlXG52YXIgdGV4dFN5bWJvbHMgPSBcIjAxMjM0NTY3ODlgIUAqKCktPStbXSdcXFwiOzo/Ly4sXCI7XG5mb3IgKHZhciBpID0gMDsgaSA8IHRleHRTeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoID0gdGV4dFN5bWJvbHMuY2hhckF0KGkpO1xuICAgIHN5bWJvbHMudGV4dFtjaF0gPSB7XG4gICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCJcbiAgICB9O1xufVxuXG4vLyBBbGwgb2YgdGhlc2UgYXJlIHRleHRvcmRzIGluIHRleHQgbW9kZSwgYW5kIG1hdGhvcmRzIGluIG1hdGggbW9kZVxudmFyIGxldHRlcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbmZvciAodmFyIGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaCA9IGxldHRlcnMuY2hhckF0KGkpO1xuICAgIHN5bWJvbHMubWF0aFtjaF0gPSB7XG4gICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICBncm91cDogXCJtYXRob3JkXCJcbiAgICB9O1xuICAgIHN5bWJvbHMudGV4dFtjaF0gPSB7XG4gICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCJcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN5bWJvbHM7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhIGxpc3Qgb2YgdXRpbGl0eSBmdW5jdGlvbnMgd2hpY2ggYXJlIHVzZWZ1bCBpbiBvdGhlclxuICogZmlsZXMuXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlIGFuIGBpbmRleE9mYCBmdW5jdGlvbiB3aGljaCB3b3JrcyBpbiBJRTgsIGJ1dCBkZWZlcnMgdG8gbmF0aXZlIGlmXG4gKiBwb3NzaWJsZS5cbiAqL1xudmFyIG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbnZhciBpbmRleE9mID0gZnVuY3Rpb24obGlzdCwgZWxlbSkge1xuICAgIGlmIChsaXN0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBsaXN0LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuaW5kZXhPZihlbGVtKTtcbiAgICB9XG4gICAgdmFyIGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGxpc3RbaV0gPT09IGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBjb250YWluZWQgaW4gYSBsaXN0XG4gKi9cbnZhciBjb250YWlucyA9IGZ1bmN0aW9uKGxpc3QsIGVsZW0pIHtcbiAgICByZXR1cm4gaW5kZXhPZihsaXN0LCBlbGVtKSAhPT0gLTE7XG59O1xuXG4vLyBoeXBoZW5hdGUgYW5kIGVzY2FwZSBhZGFwdGVkIGZyb20gRmFjZWJvb2sncyBSZWFjdCB1bmRlciBBcGFjaGUgMiBsaWNlbnNlXG5cbnZhciB1cHBlcmNhc2UgPSAvKFtBLVpdKS9nO1xudmFyIGh5cGhlbmF0ZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSh1cHBlcmNhc2UsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgRVNDQVBFX0xPT0tVUCA9IHtcbiAgXCImXCI6IFwiJmFtcDtcIixcbiAgXCI+XCI6IFwiJmd0O1wiLFxuICBcIjxcIjogXCImbHQ7XCIsXG4gIFwiXFxcIlwiOiBcIiZxdW90O1wiLFxuICBcIidcIjogXCImI3gyNztcIlxufTtcblxudmFyIEVTQ0FQRV9SRUdFWCA9IC9bJj48XCInXS9nO1xuXG5mdW5jdGlvbiBlc2NhcGVyKG1hdGNoKSB7XG4gIHJldHVybiBFU0NBUEVfTE9PS1VQW21hdGNoXTtcbn1cblxuLyoqXG4gKiBFc2NhcGVzIHRleHQgdG8gcHJldmVudCBzY3JpcHRpbmcgYXR0YWNrcy5cbiAqXG4gKiBAcGFyYW0geyp9IHRleHQgVGV4dCB2YWx1ZSB0byBlc2NhcGUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEFuIGVzY2FwZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGUodGV4dCkge1xuICByZXR1cm4gKFwiXCIgKyB0ZXh0KS5yZXBsYWNlKEVTQ0FQRV9SRUdFWCwgZXNjYXBlcik7XG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBzZXQgdGhlIHRleHQgY29udGVudCBvZiBhIERPTSBlbGVtZW50IGluIGFsbCBzdXBwb3J0ZWRcbiAqIGJyb3dzZXJzLiBOb3RlIHRoYXQgd2UgZG9uJ3QgZGVmaW5lIHRoaXMgaWYgdGhlcmUgaXMgbm8gZG9jdW1lbnQuXG4gKi9cbnZhciBzZXRUZXh0Q29udGVudDtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgdGVzdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpZiAoXCJ0ZXh0Q29udGVudFwiIGluIHRlc3ROb2RlKSB7XG4gICAgICAgIHNldFRleHRDb250ZW50ID0gZnVuY3Rpb24obm9kZSwgdGV4dCkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbihub2RlLCB0ZXh0KSB7XG4gICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2xlYXIgYSBub2RlLlxuICovXG5mdW5jdGlvbiBjbGVhck5vZGUobm9kZSkge1xuICAgIHNldFRleHRDb250ZW50KG5vZGUsIFwiXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb250YWluczogY29udGFpbnMsXG4gICAgZXNjYXBlOiBlc2NhcGUsXG4gICAgaHlwaGVuYXRlOiBoeXBoZW5hdGUsXG4gICAgaW5kZXhPZjogaW5kZXhPZixcbiAgICBzZXRUZXh0Q29udGVudDogc2V0VGV4dENvbnRlbnQsXG4gICAgY2xlYXJOb2RlOiBjbGVhck5vZGVcbn07XG4iXX0=
