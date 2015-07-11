/*!
 * bespoke-math v1.0.1
 *
 * Copyright 2015, Flávio
 * This content is released under the MIT license
 * 
 */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.bespoke||(g.bespoke = {}));g=(g.plugins||(g.plugins = {}));g.math = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var katex = require('katex'),
  insertCss = require('insert-css');


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
        var css = "@font-face{font-family:KaTeX_AMS;src:url(fonts/KaTeX_AMS-Regular.eot);src:url(fonts/KaTeX_AMS-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_AMS-Regular.woff2) format('woff2'),url(fonts/KaTeX_AMS-Regular.woff) format('woff'),url(fonts/KaTeX_AMS-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Bold.eot);src:url(fonts/KaTeX_Main-Bold.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Bold.woff2) format('woff2'),url(fonts/KaTeX_Main-Bold.woff) format('woff'),url(fonts/KaTeX_Main-Bold.ttf) format('ttf');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Italic.eot);src:url(fonts/KaTeX_Main-Italic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Italic.woff2) format('woff2'),url(fonts/KaTeX_Main-Italic.woff) format('woff'),url(fonts/KaTeX_Main-Italic.ttf) format('ttf');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Regular.eot);src:url(fonts/KaTeX_Main-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Main-Regular.woff2) format('woff2'),url(fonts/KaTeX_Main-Regular.woff) format('woff'),url(fonts/KaTeX_Main-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(fonts/KaTeX_Math-BoldItalic.eot);src:url(fonts/KaTeX_Math-BoldItalic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Math-BoldItalic.woff2) format('woff2'),url(fonts/KaTeX_Math-BoldItalic.woff) format('woff'),url(fonts/KaTeX_Math-BoldItalic.ttf) format('ttf');font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(fonts/KaTeX_Math-Italic.eot);src:url(fonts/KaTeX_Math-Italic.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Math-Italic.woff2) format('woff2'),url(fonts/KaTeX_Math-Italic.woff) format('woff'),url(fonts/KaTeX_Math-Italic.ttf) format('ttf');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(fonts/KaTeX_Math-Regular.eot);src:url(fonts/KaTeX_Math-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Math-Regular.woff2) format('woff2'),url(fonts/KaTeX_Math-Regular.woff) format('woff'),url(fonts/KaTeX_Math-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(fonts/KaTeX_Size1-Regular.eot);src:url(fonts/KaTeX_Size1-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size1-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size1-Regular.woff) format('woff'),url(fonts/KaTeX_Size1-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(fonts/KaTeX_Size2-Regular.eot);src:url(fonts/KaTeX_Size2-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size2-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size2-Regular.woff) format('woff'),url(fonts/KaTeX_Size2-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(fonts/KaTeX_Size3-Regular.eot);src:url(fonts/KaTeX_Size3-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size3-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size3-Regular.woff) format('woff'),url(fonts/KaTeX_Size3-Regular.ttf) format('ttf');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(fonts/KaTeX_Size4-Regular.eot);src:url(fonts/KaTeX_Size4-Regular.eot#iefix) format('embedded-opentype'),url(fonts/KaTeX_Size4-Regular.woff2) format('woff2'),url(fonts/KaTeX_Size4-Regular.woff) format('woff'),url(fonts/KaTeX_Size4-Regular.ttf) format('ttf');font-weight:400;font-style:normal}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:inline-block}.katex{font:400 1.21em KaTeX_Main;line-height:1.2;white-space:nowrap;text-indent:0}.katex .katex-html{display:inline-block}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .base,.katex .strut{display:inline-block}.katex .mathit{font-family:KaTeX_Math;font-style:italic}.katex .amsrm{font-family:KaTeX_AMS}.katex .textstyle>.mord+.mop{margin-left:.16667em}.katex .textstyle>.mord+.mbin{margin-left:.22222em}.katex .textstyle>.mord+.mrel{margin-left:.27778em}.katex .textstyle>.mop+.mop,.katex .textstyle>.mop+.mord,.katex .textstyle>.mord+.minner{margin-left:.16667em}.katex .textstyle>.mop+.mrel{margin-left:.27778em}.katex .textstyle>.mop+.minner{margin-left:.16667em}.katex .textstyle>.mbin+.minner,.katex .textstyle>.mbin+.mop,.katex .textstyle>.mbin+.mopen,.katex .textstyle>.mbin+.mord{margin-left:.22222em}.katex .textstyle>.mrel+.minner,.katex .textstyle>.mrel+.mop,.katex .textstyle>.mrel+.mopen,.katex .textstyle>.mrel+.mord{margin-left:.27778em}.katex .textstyle>.mclose+.mop{margin-left:.16667em}.katex .textstyle>.mclose+.mbin{margin-left:.22222em}.katex .textstyle>.mclose+.mrel{margin-left:.27778em}.katex .textstyle>.mclose+.minner,.katex .textstyle>.minner+.mop,.katex .textstyle>.minner+.mord,.katex .textstyle>.mpunct+.mclose,.katex .textstyle>.mpunct+.minner,.katex .textstyle>.mpunct+.mop,.katex .textstyle>.mpunct+.mopen,.katex .textstyle>.mpunct+.mord,.katex .textstyle>.mpunct+.mpunct,.katex .textstyle>.mpunct+.mrel{margin-left:.16667em}.katex .textstyle>.minner+.mbin{margin-left:.22222em}.katex .textstyle>.minner+.mrel{margin-left:.27778em}.katex .mclose+.mop,.katex .minner+.mop,.katex .mop+.mop,.katex .mop+.mord,.katex .mord+.mop,.katex .textstyle>.minner+.minner,.katex .textstyle>.minner+.mopen,.katex .textstyle>.minner+.mpunct{margin-left:.16667em}.katex .reset-textstyle.textstyle{font-size:1em}.katex .reset-textstyle.scriptstyle{font-size:.7em}.katex .reset-textstyle.scriptscriptstyle{font-size:.5em}.katex .reset-scriptstyle.textstyle{font-size:1.42857em}.katex .reset-scriptstyle.scriptstyle{font-size:1em}.katex .reset-scriptstyle.scriptscriptstyle{font-size:.71429em}.katex .reset-scriptscriptstyle.textstyle{font-size:2em}.katex .reset-scriptscriptstyle.scriptstyle{font-size:1.4em}.katex .reset-scriptscriptstyle.scriptscriptstyle{font-size:1em}.katex .style-wrap{position:relative}.katex .vlist{display:inline-block}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist .baseline-fix{display:inline-table;table-layout:fixed}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{width:100%}.katex .mfrac .frac-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .mfrac .frac-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .mspace{display:inline-block}.katex .mspace.negativethinspace{margin-left:-.16667em}.katex .mspace.thinspace{width:.16667em}.katex .mspace.mediumspace{width:.22222em}.katex .mspace.thickspace{width:.27778em}.katex .mspace.enspace{width:.5em}.katex .mspace.quad{width:1em}.katex .mspace.qquad{width:2em}.katex .llap,.katex .rlap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .rlap>.inner{left:0}.katex .katex-logo .a{font-size:.75em;margin-left:-.32em;position:relative;top:-.2em}.katex .katex-logo .t{margin-left:-.23em}.katex .katex-logo .e{margin-left:-.1667em;position:relative;top:.2155em}.katex .katex-logo .x{margin-left:-.125em}.katex .rule{display:inline-block;border-style:solid;position:relative}.katex .overline .overline-line{width:100%}.katex .overline .overline-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .overline .overline-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .sqrt>.sqrt-sign{position:relative}.katex .sqrt .sqrt-line{width:100%}.katex .sqrt .sqrt-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .sqrt .sqrt-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer,.katex .sizing{display:inline-block}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:2em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:3.46em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:4.14em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.98em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.47142857em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.95714286em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.55714286em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.875em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.125em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.25em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.5em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.8em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.1625em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.5875em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:3.1125em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.77777778em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.88888889em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.6em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.92222222em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.3em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.76666667em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.7em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.8em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.9em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.2em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.44em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.73em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:2.07em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.49em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.58333333em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.66666667em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.75em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.83333333em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44166667em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.725em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.075em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.48611111em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.55555556em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.625em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.69444444em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.20138889em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.4375em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72916667em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.28901734em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.40462428em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.46242775em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.52023121em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.57803468em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69364162em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83236994em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.19653179em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.43930636em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.24154589em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.33816425em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.38647343em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.43478261em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.48309179em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.57971014em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69565217em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83574879em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20289855em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.20080321em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.2811245em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.32128514em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.36144578em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.40160643em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48192771em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57831325em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69477912em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.8313253em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist>span,.katex .op-limits>.vlist>span{text-align:center}.katex .accent .accent-body>span{width:0}.katex .accent .accent-body.accent-vec>span{position:relative;left:.326em}.katex .arraycolsep{display:inline-block}.katex .col-align-c>.vlist{text-align:center}.katex .col-align-l>.vlist{text-align:left}.katex .col-align-r>.vlist{text-align:right}";
        insertCss(css);
      } catch (e) {
        console.log('It was not possible to load the CSS from KaTeX. Details: ' + e);
      }
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

/**
 * Parse an expression and return the parse tree.
 */
var generateParseTree = function(expression, options) {
    var settings = new Settings(options);
    return parseTree(expression, settings);
};

module.exports = {
    render: render,
    renderToString: renderToString,
    /**
     * NOTE: This method is not currently recommended for public use.
     * The internal tree representation is unstable and is very likely
     * to change. Use at your own risk.
     */
    __parse: generateParseTree,
    ParseError: ParseError
};

},{"./src/ParseError":6,"./src/Settings":8,"./src/buildTree":13,"./src/parseTree":21,"./src/utils":23}],4:[function(require,module,exports){
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

var matchAt = require("match-at");

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
    /[/|@.""`0-9a-zA-Z]/, // ords
    /[*+-]/, // bins
    /[=<>:]/, // rels
    /[,;]/, // punctuation
    /['\^_{}]/, // misc
    /[(\[]/, // opens
    /[)\]?!]/, // closes
    /~/, // spacing
    /&/, // horizontal alignment
    /\\\\/ // line break
];

// These are "normal" tokens like above, but should instead be parsed in text
// mode.
var textNormals = [
    /[a-zA-Z0-9`!@*()-=+\[\]'";:?\/.,]/, // ords
    /[{}]/, // grouping
    /~/, // spacing
    /&/, // horizontal alignment
    /\\\\/ // line break
];

// Regexes for matching whitespace
var whitespaceRegex = /\s*/;
var whitespaceConcatRegex = / +|\\  +/;

// This regex matches any other TeX function, which is a backslash followed by a
// word or a single symbol
var anyFunc = /\\(?:[a-zA-Z]+|.)/;

/**
 * This function lexes a single normal token. It takes a position, a list of
 * "normal" tokens to try, and whether it should completely ignore whitespace or
 * not.
 */
Lexer.prototype._innerLex = function(pos, normals, ignoreWhitespace) {
    var input = this._input;
    var whitespace;

    if (ignoreWhitespace) {
        // Get rid of whitespace.
        whitespace = matchAt(whitespaceRegex, input, pos)[0];
        pos += whitespace.length;
    } else {
        // Do the funky concatenation of whitespace that happens in text mode.
        whitespace = matchAt(whitespaceConcatRegex, input, pos);
        if (whitespace !== null) {
            return new Token(" ", null, pos + whitespace[0].length);
        }
    }

    // If there's no more input to parse, return an EOF token
    if (pos === input.length) {
        return new Token("EOF", null, pos);
    }

    var match;
    if ((match = matchAt(anyFunc, input, pos))) {
        // If we match a function token, return it
        return new Token(match[0], null, pos + match[0].length);
    } else {
        // Otherwise, we look through the normal token regexes and see if it's
        // one of them.
        for (var i = 0; i < normals.length; i++) {
            var normal = normals[i];

            if ((match = matchAt(normal, input, pos))) {
                // If it is, return it
                return new Token(
                    match[0], null, pos + match[0].length);
            }
        }
    }

    throw new ParseError(
            "Unexpected character: '" + input[pos] + "'",
            this, pos);
};

// A regex to match a CSS color (like #ffffff or BlueViolet)
var cssColor = /#[a-z0-9]+|[a-z]+/i;

/**
 * This function lexes a CSS color.
 */
Lexer.prototype._innerLexColor = function(pos) {
    var input = this._input;

    // Ignore whitespace
    var whitespace = matchAt(whitespaceRegex, input, pos)[0];
    pos += whitespace.length;

    var match;
    if ((match = matchAt(cssColor, input, pos))) {
        // If we look like a color, return a color
        return new Token(match[0], null, pos + match[0].length);
    } else {
        throw new ParseError("Invalid color", this, pos);
    }
};

// A regex to match a dimension. Dimensions look like
// "1.2em" or ".4pt" or "1 ex"
var sizeRegex = /(-?)\s*(\d+(?:\.\d*)?|\.\d+)\s*([a-z]{2})/;

/**
 * This function lexes a dimension.
 */
Lexer.prototype._innerLexSize = function(pos) {
    var input = this._input;

    // Ignore whitespace
    var whitespace = matchAt(whitespaceRegex, input, pos)[0];
    pos += whitespace.length;

    var match;
    if ((match = matchAt(sizeRegex, input, pos))) {
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
    var input = this._input;

    var whitespace = matchAt(whitespaceRegex, input, pos)[0];
    pos += whitespace.length;

    return new Token(whitespace[0], null, pos);
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

},{"./ParseError":6,"match-at":24}],5:[function(require,module,exports){
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
function Options(data) {
    this.style = data.style;
    this.color = data.color;
    this.size = data.size;
    this.phantom = data.phantom;

    if (data.parentStyle === undefined) {
        this.parentStyle = data.style;
    } else {
        this.parentStyle = data.parentStyle;
    }

    if (data.parentSize === undefined) {
        this.parentSize = data.size;
    } else {
        this.parentSize = data.parentSize;
    }
}

/**
 * Returns a new options object with the same properties as "this".  Properties
 * from "extension" will be copied to the new options object.
 */
Options.prototype.extend = function(extension) {
    var data = {
        style: this.style,
        size: this.size,
        color: this.color,
        parentStyle: this.style,
        parentSize: this.size,
        phantom: this.phantom
    };

    for (var key in extension) {
        if (extension.hasOwnProperty(key)) {
            data[key] = extension[key];
        }
    }

    return new Options(data);
};

/**
 * Create a new options object with the given style.
 */
Options.prototype.withStyle = function(style) {
    return this.extend({
        style: style
    });
};

/**
 * Create a new options object with the given size.
 */
Options.prototype.withSize = function(size) {
    return this.extend({
        size: size
    });
};

/**
 * Create a new options object with the given color.
 */
Options.prototype.withColor = function(color) {
    return this.extend({
        color: color
    });
};

/**
 * Create a new options object with "phantom" set to true.
 */
Options.prototype.withPhantom = function() {
    return this.extend({
        phantom: true
    });
};

/**
 * Create a new options object with the same style, size, and color. This is
 * used so that parent style and size changes are handled correctly.
 */
Options.prototype.reset = function() {
    return this.extend({});
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
    "katex-purple": "#9d38bd",
    "katex-blueA": "#c7e9f1",
    "katex-blueB": "#9cdceb",
    "katex-blueC": "#58c4dd",
    "katex-blueD": "#29abca",
    "katex-blueE": "#1c758a",
    "katex-tealA": "#acead7",
    "katex-tealB": "#76ddc0",
    "katex-tealC": "#5cd0b3",
    "katex-tealD": "#55c1a7",
    "katex-tealE": "#49a88f",
    "katex-greenA": "#c9e2ae",
    "katex-greenB": "#a6cf8c",
    "katex-greenC": "#83c167",
    "katex-greenD": "#77b05d",
    "katex-greenE": "#699c52",
    "katex-goldA": "#f7c797",
    "katex-goldB": "#f9b775",
    "katex-goldC": "#f0ac5f",
    "katex-goldD": "#e1a158",
    "katex-goldE": "#c78d46",
    "katex-redA": "#f7a1a3",
    "katex-redB": "#ff8080",
    "katex-redC": "#fc6255",
    "katex-redD": "#e65a4c",
    "katex-redE": "#cf5044",
    "katex-maroonA": "#ecabc1",
    "katex-maroonB": "#ec92ab",
    "katex-maroonC": "#c55f73",
    "katex-maroonD": "#a24d61",
    "katex-maroonE": "#94424f",
    "katex-purpleA": "#caa3e8",
    "katex-purpleB": "#b189c6",
    "katex-purpleC": "#9a72ac",
    "katex-purpleD": "#715582",
    "katex-purpleE": "#644172",
    "katex-mintA": "#f5f9e8",
    "katex-mintB": "#edf2df",
    "katex-mintC": "#e0e5cc",
    "katex-grayA": "#fdfdfd",
    "katex-grayB": "#f7f7f7",
    "katex-grayC": "#eeeeee",
    "katex-grayD": "#dddddd",
    "katex-grayE": "#cccccc",
    "katex-grayF": "#aaaaaa",
    "katex-grayG": "#999999",
    "katex-grayH": "#555555",
    "katex-grayI": "#333333",
    "katex-kaBlue": "#314453",
    "katex-kaGreen": "#639b24"
};

/**
 * Gets the CSS color of the current options object, accounting for the
 * `colorMap`.
 */
Options.prototype.getColor = function() {
    if (this.phantom) {
        return "transparent";
    } else {
        return colorMap[this.color] || this.color;
    }
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
var environments = require("./environments");
var Lexer = require("./Lexer");
var symbols = require("./symbols");
var utils = require("./utils");

var parseData = require("./parseData");
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

var ParseNode = parseData.ParseNode;
var ParseResult = parseData.ParseResult;

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
    var expression = this.parseExpression(pos, mode, false);
    // If we succeeded, make sure there's an EOF at the end
    this.expect(expression.peek, "EOF");
    return expression;
};

var endOfExpression = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"];

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
    var lex = null;
    // Keep adding atoms to the body until we can't parse any more atoms (either
    // we reached the end, a }, or a \right)
    while (true) {
        lex = this.lexer.lex(pos, mode);
        if (endOfExpression.indexOf(lex.text) !== -1) {
            break;
        }
        if (breakOnToken && lex.text === breakOnToken) {
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
    var res = new ParseResult(this.handleInfixNodes(body, mode), pos);
    res.peek = lex;
    return res;
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
        body = this.parseExpression(left.position, mode, false);
        // Check the next token
        this.expect(body.peek, "\\right");
        var right = this.parseFunction(body.position, mode);
        return new ParseResult(
            new ParseNode("leftright", {
                body: body.result,
                left: left.result.value.value,
                right: right.result.value.value
            }, mode),
            right.position);
    } else if (func === "\\begin") {
        // begin...end is similar to left...right
        var begin = this.parseFunction(pos, mode);
        var envName = begin.result.value.name;
        if (!environments.hasOwnProperty(envName)) {
            throw new ParseError(
                "No such environment: " + envName,
                this.lexer, begin.result.value.namepos);
        }
        // Build the environment object. Arguments and other information will
        // be made available to the begin and end methods using properties.
        var env = environments[envName];
        var args = [null, mode, envName];
        var newPos = this.parseArguments(
            begin.position, mode, "\\begin{" + envName + "}", env, args);
        args[0] = newPos;
        var result = env.handler.apply(this, args);
        var endLex = this.lexer.lex(result.position, mode);
        this.expect(endLex, "\\end");
        var end = this.parseFunction(result.position, mode);
        if (end.result.value.name !== envName) {
            throw new ParseError(
                "Mismatch: \\begin{" + envName + "} matched " +
                "by \\end{" + end.result.value.name + "}",
                this.lexer, end.namepos);
        }
        result.position = end.position;
        return result;
    } else if (utils.contains(sizeFuncs, func)) {
        // If we see a sizing function, parse out the implict body
        body = this.parseExpression(start.result.position, mode, false);
        return new ParseResult(
            new ParseNode("sizing", {
                // Figure out what size to use based on the list of functions above
                size: "size" + (utils.indexOf(sizeFuncs, func) + 1),
                value: body.result
            }, mode),
            body.position);
    } else if (utils.contains(styleFuncs, func)) {
        // If we see a styling function, parse out the implict body
        body = this.parseExpression(start.result.position, mode, true);
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

            var args = [func];
            var newPos = this.parseArguments(
                baseGroup.result.position, mode, func, funcData, args);
            var result = functions.funcs[func].handler.apply(this, args);
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
 * Parses the arguments of a function or environment
 *
 * @param {string} func  "\name" or "\begin{name}"
 * @param {{numArgs:number,numOptionalArgs:number|undefined}} funcData
 * @param {Array} args  list of arguments to which new ones will be pushed
 * @return the position after all arguments have been parsed
 */
Parser.prototype.parseArguments = function(pos, mode, func, funcData, args) {
    var totalArgs = funcData.numArgs + funcData.numOptionalArgs;
    if (totalArgs === 0) {
        return pos;
    }

    var newPos = pos;
    var baseGreediness = funcData.greediness;
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
                    "Expected group after '" + func + "'",
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
                    "argument to '" + func + "'",
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

    return newPos;
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
        var expression = this.parseExpression(start.position, mode, false);
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

Parser.prototype.ParseNode = ParseNode;

module.exports = Parser;

},{"./Lexer":4,"./ParseError":6,"./environments":16,"./functions":18,"./parseData":20,"./symbols":22,"./utils":23}],8:[function(require,module,exports){
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

},{"./domTree":15,"./fontMetrics":17,"./symbols":22}],11:[function(require,module,exports){
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
    array: "minner",
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
        while (prevAtom && prevAtom.type === "color") {
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

            if ((numShift - numer.depth) - (axisHeight + 0.5 * ruleWidth) <
                    clearance) {
                numShift +=
                    clearance - ((numShift - numer.depth) -
                                 (axisHeight + 0.5 * ruleWidth));
            }

            if ((axisHeight - 0.5 * ruleWidth) - (denom.height - denomShift) <
                    clearance) {
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

    array: function(group, options, prev) {
        var r, c;
        var nr = group.value.body.length;
        var nc = 0;
        var body = new Array(nr);

        // Horizontal spacing
        var pt = 1 / fontMetrics.metrics.ptPerEm;
        var arraycolsep = 5 * pt; // \arraycolsep in article.cls

        // Vertical spacing
        var baselineskip = 12 * pt; // see size10.clo
        var arraystretch = 1; // factor, see lttab.dtx
        var arrayskip = arraystretch * baselineskip;
        var arstrutHeight = 0.7 * arrayskip; // \strutbox in ltfsstrc.dtx and
        var arstrutDepth = 0.3 * arrayskip;  // \@arstrutbox in lttab.dtx

        var totalHeight = 0;
        for (r = 0; r < group.value.body.length; ++r) {
            var inrow = group.value.body[r];
            var height = arstrutHeight; // \@array adds an \@arstrut
            var depth = arstrutDepth;   // to each tow (via the template)
            if (nc < inrow.length) {
                nc = inrow.length;
            }
            var outrow = new Array(inrow.length);
            for (c = 0; c < inrow.length; ++c) {
                var elt = buildGroup(inrow[c], options);
                if (depth < elt.depth) {
                    depth = elt.depth;
                }
                if (height < elt.height) {
                    height = elt.height;
                }
                outrow[c] = elt;
            }
            var gap = 0;
            if (group.value.rowGaps[r]) {
                gap = group.value.rowGaps[r].value;
                switch (gap.unit) {
                case "em":
                    gap = gap.number;
                    break;
                case "ex":
                    gap = gap.number * fontMetrics.metrics.emPerEx;
                    break;
                default:
                    console.error("Can't handle unit " + gap.unit);
                    gap = 0;
                }
                if (gap > 0) { // \@argarraycr
                    gap += arstrutDepth;
                    if (depth < gap) {
                        depth = gap; // \@xargarraycr
                    }
                    gap = 0;
                }
            }
            outrow.height = height;
            outrow.depth = depth;
            totalHeight += height;
            outrow.pos = totalHeight;
            totalHeight += depth + gap; // \@yargarraycr
            body[r] = outrow;
        }
        var offset = totalHeight / 2 + fontMetrics.metrics.axisHeight;
        var colalign = group.value.colalign || [];
        var cols = [];
        var colsep;
        for (c = 0; c < nc; ++c) {
            if (c > 0 || group.value.hskipBeforeAndAfter) {
                colsep = makeSpan(["arraycolsep"], []);
                colsep.style.width = arraycolsep + "em";
                cols.push(colsep);
            }
            var col = [];
            for (r = 0; r < nr; ++r) {
                var row = body[r];
                var elem = row[c];
                if (!elem) {
                    continue;
                }
                var shift = row.pos - offset;
                elem.depth = row.depth;
                elem.height = row.height;
                col.push({type: "elem", elem: elem, shift: shift});
            }
            col = buildCommon.makeVList(col, "individualShift", null, options);
            col = makeSpan(
                ["col-align-" + (colalign[c] || "c")],
                [col]);
            cols.push(col);
            if (c < nc - 1 || group.value.hskipBeforeAndAfter) {
                colsep = makeSpan(["arraycolsep"], []);
                colsep.style.width = arraycolsep + "em";
                cols.push(colsep);
            }
        }
        body = makeSpan(["mtable"], cols);
        return makeSpan(["minner"], [body], options.getColor());
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

        if (!group.value.index) {
            return makeSpan(["sqrt", "mord"], [delim, body]);
        } else {
            // Handle the optional root index

            // The index is always in scriptscript style
            var root = buildGroup(
                group.value.index,
                options.withStyle(Style.SCRIPTSCRIPT));
            var rootWrap = makeSpan(
                [options.style.reset(), Style.SCRIPTSCRIPT.cls()],
                [root]);

            // Figure out the height and depth of the inner part
            var innerRootHeight = Math.max(delim.height, body.height);
            var innerRootDepth = Math.max(delim.depth, body.depth);

            // The amount the index is shifted by. This is taken from the TeX
            // source, in the definition of `\r@@t`.
            var toShift = 0.6 * (innerRootHeight - innerRootDepth);

            // Build a VList with the superscript shifted up correctly
            var rootVList = buildCommon.makeVList(
                [{type: "elem", elem: rootWrap}],
                "shift", -toShift, options);
            // Add a class surrounding it so we can add on the appropriate
            // kerning
            var rootVListWrap = makeSpan(["root"], [rootVList]);

            return makeSpan(["sqrt", "mord"], [rootVListWrap, delim, body]);
        }
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
    },

    phantom: function(group, options, prev) {
        var elements = buildExpression(
            group.value.value,
            options.withPhantom(),
            prev
        );

        // \phantom isn't supposed to affect the elements it contains.
        // See "color" for more details.
        return new buildCommon.makeFragment(elements);
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
    // buildExpression is destructive, so we need to make a clone
    // of the incoming tree so that it isn't accidentally changed
    tree = JSON.parse(JSON.stringify(tree));

    var startStyle = Style.TEXT;
    if (settings.displayMode) {
        startStyle = Style.DISPLAY;
    }

    // Setup the default options
    var options = new Options({
        style: startStyle,
        size: "size5"
    });

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

},{"./Options":5,"./ParseError":6,"./Style":9,"./buildCommon":10,"./delimiter":14,"./domTree":15,"./fontMetrics":17,"./utils":23}],12:[function(require,module,exports){
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

    array: function(group) {
        return new mathMLTree.MathNode(
            "mtable", group.value.body.map(function(row) {
                return new mathMLTree.MathNode(
                    "mtr", row.map(function(cell) {
                        return new mathMLTree.MathNode(
                            "mtd", [buildGroup(cell)]);
                    }));
            }));
    },

    sqrt: function(group) {
        var node;
        if (group.value.index) {
            node = new mathMLTree.MathNode(
                "mroot", [
                    buildGroup(group.value.body),
                    buildGroup(group.value.index)
                ]);
        } else {
            node = new mathMLTree.MathNode(
                "msqrt", [buildGroup(group.value.body)]);
        }

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
                "mi", [new mathMLTree.TextNode(group.value.body.slice(1))]);
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
    },

    phantom: function(group, options, prev) {
        var inner = buildExpression(group.value.value);
        return new mathMLTree.MathNode("mphantom", inner);
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

},{"./ParseError":6,"./buildCommon":10,"./mathMLTree":19,"./symbols":22}],13:[function(require,module,exports){

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
    var middleHeightTotal = 0;
    var middleFactor = 1;
    if (middle !== null) {
        var middleMetrics = getMetrics(middle, font);
        middleHeightTotal = middleMetrics.height + middleMetrics.depth;
        middleFactor = 2; // repeat symmetrically above and below middle
    }

    // Calcuate the minimal height that the delimiter can have.
    // It is at least the size of the top, bottom, and optional middle combined.
    var minHeight = topHeightTotal + bottomHeightTotal + middleHeightTotal;

    // Compute the number of copies of the repeat symbol we will need
    var repeatCount = Math.ceil(
        (heightTotal - minHeight) / (middleFactor * repeatHeightTotal));

    // Compute the total height of the delimiter including all the symbols
    var realHeightTotal =
        minHeight + repeatCount * middleFactor * repeatHeightTotal;

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
        // Add that many symbols
        for (i = 0; i < repeatCount; i++) {
            inners.push(makeInner(repeat, font, mode));
        }
    } else {
        // When there is a middle bit, we need the middle part and two repeated
        // sections
        for (i = 0; i < repeatCount; i++) {
            inners.push(makeInner(repeat, font, mode));
        }
        inners.push(makeInner(middle, font, mode));
        for (i = 0; i < repeatCount; i++) {
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

},{"./ParseError":6,"./Style":9,"./buildCommon":10,"./fontMetrics":17,"./symbols":22,"./utils":23}],15:[function(require,module,exports){
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

},{"./utils":23}],16:[function(require,module,exports){
var parseData = require("./parseData");
var ParseError = require("./ParseError");

var ParseNode = parseData.ParseNode;
var ParseResult = parseData.ParseResult;

/**
 * Parse the body of the environment, with rows delimited by \\ and
 * columns delimited by &, and create a nested list in row-major order
 * with one group per cell.
 */
function parseArray(parser, pos, mode, result) {
    var row = [], body = [row], rowGaps = [];
    while (true) {
        var cell = parser.parseExpression(pos, mode, false, null);
        row.push(new ParseNode("ordgroup", cell.result, mode));
        pos = cell.position;
        var next = cell.peek.text;
        if (next === "&") {
            pos = cell.peek.position;
        } else if (next === "\\end") {
            break;
        } else if (next === "\\\\" || next === "\\cr") {
            var cr = parser.parseFunction(pos, mode);
            rowGaps.push(cr.result.value.size);
            pos = cr.position;
            row = [];
            body.push(row);
        } else {
            throw new ParseError("Expected & or \\\\ or \\end",
                                 parser.lexer, cell.peek.position);
        }
    }
    result.body = body;
    result.rowGaps = rowGaps;
    return new ParseResult(new ParseNode(result.type, result, mode), pos);
}

/*
 * An environment definition is very similar to a function definition.
 * Each element of the following array may contain
 *  - names: The names associated with a function. This can be used to
 *           share one implementation between several similar environments.
 *  - numArgs: The number of arguments after the \begin{name} function.
 *  - argTypes: (optional) Just like for a function
 *  - allowedInText: (optional) Whether or not the environment is allowed inside
 *                   text mode (default false) (not enforced yet)
 *  - numOptionalArgs: (optional) Just like for a function
 *  - handler: The function that is called to handle this environment.
 *             It will receive the following arguments:
 *             - pos: the current position of the parser.
 *             - mode: the current parsing mode.
 *             - envName: the name of the environment, one of the listed names.
 *             - [args]: the arguments passed to \begin.
 *             - positions: the positions associated with these arguments.
 */

var environmentDefinitions = [

    // Arrays are part of LaTeX, defined in lttab.dtx so its documentation
    // is part of the source2e.pdf file of LaTeX2e source documentation.
    {
        names: ["array"],
        numArgs: 1,
        handler: function(pos, mode, envName, colalign, positions) {
            var parser = this;
            // Currently only supports alignment, no separators like | yet.
            colalign = colalign.value.map ? colalign.value : [colalign];
            colalign = colalign.map(function(node) {
                var ca = node.value;
                if ("lcr".indexOf(ca) !== -1) {
                    return ca;
                }
                throw new ParseError(
                    "Unknown column alignment: " + node.value,
                    parser.lexer, positions[1]);
            });
            var res = {
                type: "array",
                colalign: colalign,
                hskipBeforeAndAfter: true // \@preamble in lttab.dtx
            };
            res = parseArray(parser, pos, mode, res);
            return res;
        }
    },

    // The matrix environments of amsmath builds on the array environment
    // of LaTeX, which is discussed above.
    {
        names: ["matrix", "pmatrix", "bmatrix", "vmatrix", "Vmatrix"],
        handler: function(pos, mode, envName) {
            var delimiters = {
                "matrix": null,
                "pmatrix": ["(", ")"],
                "bmatrix": ["[", "]"],
                "vmatrix": ["|", "|"],
                "Vmatrix": ["\\Vert", "\\Vert"]
            }[envName];
            var res = {
                type: "array",
                hskipBeforeAndAfter: false // \hskip -\arraycolsep in amsmath
            };
            res = parseArray(this, pos, mode, res);
            if (delimiters) {
                res.result = new ParseNode("leftright", {
                    body: [res.result],
                    left: delimiters[0],
                    right: delimiters[1]
                }, mode);
            }
            return res;
        }
    }

];

module.exports = (function() {
    // nested function so we don't leak i and j into the module scope
    var exports = {};
    for (var i = 0; i < environmentDefinitions.length; ++i) {
        var def = environmentDefinitions[i];
        def.greediness = 1;
        def.allowedInText = !!def.allowedInText;
        def.numArgs = def.numArgs || 0;
        def.numOptionalArgs = def.numOptionalArgs || 0;
        for (var j = 0; j < def.names.length; ++j) {
            exports[def.names[j]] = def;
        }
    }
    return exports;
})();

},{"./ParseError":6,"./parseData":20}],17:[function(require,module,exports){
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
    emPerEx: sigma5 / sigma6,

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

},{"./Style":9}],18:[function(require,module,exports){
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
        handler: function(func, index, body, positions) {
            return {
                type: "sqrt",
                body: body,
                index: index
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
        greediness: 3,
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
    },

    "\\phantom": {
        numArgs: 1,
        handler: function(func, body) {
            var inner;
            if (body.type === "ordgroup") {
                inner = body.value;
            } else {
                inner = [body];
            }

            return {
                type: "phantom",
                value: inner
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
            "\\green", "\\gray", "\\purple",
            "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE",
            "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE",
            "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE",
            "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE",
            "\\redA", "\\redB", "\\redC", "\\redD", "\\redE",
            "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE",
            "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE",
            "\\mintA", "\\mintB", "\\mintC",
            "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE",
            "\\grayF", "\\grayG", "\\grayH", "\\grayI",
            "\\kaBlue", "\\kaGreen"
        ],
        data: {
            numArgs: 1,
            allowedInText: true,
            greediness: 3,
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
    },

    // Row breaks for aligned data
    {
        funcs: ["\\\\", "\\cr"],
        data: {
            numArgs: 0,
            numOptionalArgs: 1,
            argTypes: ["size"],
            handler: function(func, size) {
                return {
                    type: "cr",
                    size: size
                };
            }
        }
    },

    // Environment delimiters
    {
        funcs: ["\\begin", "\\end"],
        data: {
            numArgs: 1,
            argTypes: ["text"],
            handler: function(func, nameGroup, positions) {
                if (nameGroup.type !== "ordgroup") {
                    throw new ParseError(
                        "Invalid environment name",
                        this.lexer, positions[1]);
                }
                var name = "";
                for (var i = 0; i < nameGroup.value.length; ++i) {
                    name += nameGroup.value[i].value;
                }
                return {
                    type: "environment",
                    name: name,
                    namepos: positions[1]
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

},{"./ParseError":6,"./utils":23}],19:[function(require,module,exports){
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

},{"./utils":23}],20:[function(require,module,exports){
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
 * 
 */
function ParseResult(result, newPosition, peek) {
    this.result = result;
    this.position = newPosition;
}

module.exports = {
    ParseNode: ParseNode,
    ParseResult: ParseResult
};


},{}],21:[function(require,module,exports){
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

},{"./Parser":7}],22:[function(require,module,exports){
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
        "\\#": {
          font: "main",
          group: "textord",
          replace: "\u0023"
        },
        "\\&": {
          font: "main",
          group: "textord",
          replace: "\u0026"
        },
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
            group: "bin",
            replace: "\u2299"
        },
        "\\oplus": {
            font: "main",
            group: "bin",
            replace: "\u2295"
        },
        "\\otimes": {
            font: "main",
            group: "bin",
            replace: "\u2297"
        },
        "\\partial":{
            font: "main",
            group: "textord",
            replace: "\u2202"
        },
        "\\oslash": {
            font: "main",
            group: "bin",
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
            group: "bin",
            replace: "\u25b3"
        },
        "\\bigtriangledown": {
            font: "main",
            group: "bin",
            replace: "\u25bd"
        },
        "\\dagger": {
            font: "main",
            group: "bin",
            replace: "\u2020"
        },
        "\\diamond": {
            font: "main",
            group: "bin",
            replace: "\u22c4"
        },
        "\\star": {
            font: "main",
            group: "bin",
            replace: "\u22c6"
        },
        "\\triangleleft": {
            font: "main",
            group: "bin",
            replace: "\u25c3"
        },
        "\\triangleright": {
            font: "main",
            group: "bin",
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
/** @flow */

"use strict";

function getRelocatable(re) {
  // In the future, this could use a WeakMap instead of an expando.
  if (!re.__matchAtRelocatable) {
    // Disjunctions are the lowest-precedence operator, so we can make any
    // pattern match the empty string by appending `|()` to it:
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-patterns
    var source = re.source + "|()";

    // We always make the new regex global.
    var flags = "g" + (re.ignoreCase ? "i" : "") + (re.multiline ? "m" : "") + (re.unicode ? "u" : "")
    // sticky (/.../y) doesn't make sense in conjunction with our relocation
    // logic, so we ignore it here.
    ;

    re.__matchAtRelocatable = new RegExp(source, flags);
  }
  return re.__matchAtRelocatable;
}

function matchAt(re, str, pos) {
  if (re.global || re.sticky) {
    throw new Error("matchAt(...): Only non-global regexes are supported");
  }
  var reloc = getRelocatable(re);
  reloc.lastIndex = pos;
  var match = reloc.exec(str);
  // Last capturing group is our sentinel that indicates whether the regex
  // matched at the given location.
  if (match[match.length - 1] == null) {
    // Original regex matched.
    match.length = match.length - 1;
    return match;
  } else {
    return null;
  }
}

module.exports = matchAt;
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvYmVzcG9rZS1tYXRoLmpzIiwibm9kZV9tb2R1bGVzL2luc2VydC1jc3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMva2F0ZXgva2F0ZXguanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL0xleGVyLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9PcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9QYXJzZUVycm9yLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9QYXJzZXIuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL1NldHRpbmdzLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9TdHlsZS5qcyIsIm5vZGVfbW9kdWxlcy9rYXRleC9zcmMvYnVpbGRDb21tb24uanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL2J1aWxkSFRNTC5qcyIsIm5vZGVfbW9kdWxlcy9rYXRleC9zcmMvYnVpbGRNYXRoTUwuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL2J1aWxkVHJlZS5qcyIsIm5vZGVfbW9kdWxlcy9rYXRleC9zcmMvZGVsaW1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9kb21UcmVlLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9lbnZpcm9ubWVudHMuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL2ZvbnRNZXRyaWNzLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9mdW5jdGlvbnMuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL21hdGhNTFRyZWUuanMiLCJub2RlX21vZHVsZXMva2F0ZXgvc3JjL3BhcnNlRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9rYXRleC9zcmMvcGFyc2VUcmVlLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy9zeW1ib2xzLmpzIiwibm9kZV9tb2R1bGVzL2thdGV4L3NyYy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9tYXRjaC1hdC9saWIvbWF0Y2hBdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdnhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbmRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDei9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGthdGV4ID0gcmVxdWlyZSgna2F0ZXgnKSxcbiAgaW5zZXJ0Q3NzID0gcmVxdWlyZSgnaW5zZXJ0LWNzcycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5saW5lTWF0aFNlbGVjdG9yLCBkaXNwbGF5TWF0aFNlbGVjdG9yKSB7XG4gIHZhciBpbmxpbmVWc0Rpc3BsYXlMb2dpYyA9IHR5cGVvZiBkaXNwbGF5TWF0aFNlbGVjdG9yICE9PSAndW5kZWZpbmVkJyA/ICdzZXBhcmF0ZVNlbGVjdG9yJyA6ICdzcGFuSXNJbmxpbmUnO1xuXG4gIGlubGluZU1hdGhTZWxlY3RvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gaW5saW5lTWF0aFNlbGVjdG9yIDogJy5tYXRoJztcblxuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBmb3VuZE1hdGggPSBmYWxzZSxcbiAgICAgIG1hdGhFbGVtZW50cztcbiAgICBzd2l0Y2ggKGlubGluZVZzRGlzcGxheUxvZ2ljKSB7XG4gICAgICBjYXNlICdzZXBhcmF0ZVNlbGVjdG9yJzpcbiAgICAgICAgbWF0aEVsZW1lbnRzID0gZGVjay5wYXJlbnQucXVlcnlTZWxlY3RvckFsbChpbmxpbmVNYXRoU2VsZWN0b3IpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtYXRoRWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBrYXRleC5yZW5kZXJUb1N0cmluZyhlbC5pbm5lclRleHQsIHsgZGlzcGxheU1vZGU6IGZhbHNlIH0pO1xuICAgICAgICAgIGZvdW5kTWF0aCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBtYXRoRWxlbWVudHMgPSBkZWNrLnBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKGRpc3BsYXlNYXRoU2VsZWN0b3IpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtYXRoRWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBlbC5pbm5lckhUTUwgPSBrYXRleC5yZW5kZXJUb1N0cmluZyhlbC5pbm5lclRleHQsIHsgZGlzcGxheU1vZGU6IHRydWUgfSk7XG4gICAgICAgICAgZm91bmRNYXRoID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzcGFuSXNJbmxpbmUnOlxuICAgICAgICBtYXRoRWxlbWVudHMgPSBkZWNrLnBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKGlubGluZU1hdGhTZWxlY3Rvcik7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1hdGhFbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGthdGV4LnJlbmRlclRvU3RyaW5nKGVsLmlubmVyVGV4dCwgeyBkaXNwbGF5TW9kZTogIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3NwYW4nIH0pO1xuICAgICAgICAgIGZvdW5kTWF0aCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZm91bmRNYXRoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgY3NzID0gXCJAZm9udC1mYWNle2ZvbnQtZmFtaWx5OkthVGVYX0FNUztzcmM6dXJsKGZvbnRzL0thVGVYX0FNUy1SZWd1bGFyLmVvdCk7c3JjOnVybChmb250cy9LYVRlWF9BTVMtUmVndWxhci5lb3QjaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoZm9udHMvS2FUZVhfQU1TLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfQU1TLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX0FNUy1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0dGYnKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9QGZvbnQtZmFjZXtmb250LWZhbWlseTpLYVRlWF9NYWluO3NyYzp1cmwoZm9udHMvS2FUZVhfTWFpbi1Cb2xkLmVvdCk7c3JjOnVybChmb250cy9LYVRlWF9NYWluLUJvbGQuZW90I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKGZvbnRzL0thVGVYX01haW4tQm9sZC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybChmb250cy9LYVRlWF9NYWluLUJvbGQud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX01haW4tQm9sZC50dGYpIGZvcm1hdCgndHRmJyk7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc3R5bGU6bm9ybWFsfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6S2FUZVhfTWFpbjtzcmM6dXJsKGZvbnRzL0thVGVYX01haW4tSXRhbGljLmVvdCk7c3JjOnVybChmb250cy9LYVRlWF9NYWluLUl0YWxpYy5lb3QjaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoZm9udHMvS2FUZVhfTWFpbi1JdGFsaWMud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfTWFpbi1JdGFsaWMud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX01haW4tSXRhbGljLnR0ZikgZm9ybWF0KCd0dGYnKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTppdGFsaWN9QGZvbnQtZmFjZXtmb250LWZhbWlseTpLYVRlWF9NYWluO3NyYzp1cmwoZm9udHMvS2FUZVhfTWFpbi1SZWd1bGFyLmVvdCk7c3JjOnVybChmb250cy9LYVRlWF9NYWluLVJlZ3VsYXIuZW90I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKGZvbnRzL0thVGVYX01haW4tUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybChmb250cy9LYVRlWF9NYWluLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX01haW4tUmVndWxhci50dGYpIGZvcm1hdCgndHRmJyk7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6S2FUZVhfTWF0aDtzcmM6dXJsKGZvbnRzL0thVGVYX01hdGgtQm9sZEl0YWxpYy5lb3QpO3NyYzp1cmwoZm9udHMvS2FUZVhfTWF0aC1Cb2xkSXRhbGljLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9NYXRoLUJvbGRJdGFsaWMud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfTWF0aC1Cb2xkSXRhbGljLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9NYXRoLUJvbGRJdGFsaWMudHRmKSBmb3JtYXQoJ3R0ZicpO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXN0eWxlOml0YWxpY31AZm9udC1mYWNle2ZvbnQtZmFtaWx5OkthVGVYX01hdGg7c3JjOnVybChmb250cy9LYVRlWF9NYXRoLUl0YWxpYy5lb3QpO3NyYzp1cmwoZm9udHMvS2FUZVhfTWF0aC1JdGFsaWMuZW90I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKGZvbnRzL0thVGVYX01hdGgtSXRhbGljLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX01hdGgtSXRhbGljLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9NYXRoLUl0YWxpYy50dGYpIGZvcm1hdCgndHRmJyk7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6aXRhbGljfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6S2FUZVhfTWF0aDtzcmM6dXJsKGZvbnRzL0thVGVYX01hdGgtUmVndWxhci5lb3QpO3NyYzp1cmwoZm9udHMvS2FUZVhfTWF0aC1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9NYXRoLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfTWF0aC1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9NYXRoLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH1AZm9udC1mYWNle2ZvbnQtZmFtaWx5OkthVGVYX1NpemUxO3NyYzp1cmwoZm9udHMvS2FUZVhfU2l6ZTEtUmVndWxhci5lb3QpO3NyYzp1cmwoZm9udHMvS2FUZVhfU2l6ZTEtUmVndWxhci5lb3QjaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoZm9udHMvS2FUZVhfU2l6ZTEtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybChmb250cy9LYVRlWF9TaXplMS1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9TaXplMS1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0dGYnKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9QGZvbnQtZmFjZXtmb250LWZhbWlseTpLYVRlWF9TaXplMjtzcmM6dXJsKGZvbnRzL0thVGVYX1NpemUyLVJlZ3VsYXIuZW90KTtzcmM6dXJsKGZvbnRzL0thVGVYX1NpemUyLVJlZ3VsYXIuZW90I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKGZvbnRzL0thVGVYX1NpemUyLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSx1cmwoZm9udHMvS2FUZVhfU2l6ZTItUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSx1cmwoZm9udHMvS2FUZVhfU2l6ZTItUmVndWxhci50dGYpIGZvcm1hdCgndHRmJyk7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6S2FUZVhfU2l6ZTM7c3JjOnVybChmb250cy9LYVRlWF9TaXplMy1SZWd1bGFyLmVvdCk7c3JjOnVybChmb250cy9LYVRlWF9TaXplMy1SZWd1bGFyLmVvdCNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybChmb250cy9LYVRlWF9TaXplMy1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKGZvbnRzL0thVGVYX1NpemUzLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKGZvbnRzL0thVGVYX1NpemUzLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH1AZm9udC1mYWNle2ZvbnQtZmFtaWx5OkthVGVYX1NpemU0O3NyYzp1cmwoZm9udHMvS2FUZVhfU2l6ZTQtUmVndWxhci5lb3QpO3NyYzp1cmwoZm9udHMvS2FUZVhfU2l6ZTQtUmVndWxhci5lb3QjaWVmaXgpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoZm9udHMvS2FUZVhfU2l6ZTQtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLHVybChmb250cy9LYVRlWF9TaXplNC1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpLHVybChmb250cy9LYVRlWF9TaXplNC1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0dGYnKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9LmthdGV4LWRpc3BsYXl7ZGlzcGxheTpibG9jazttYXJnaW46MWVtIDA7dGV4dC1hbGlnbjpjZW50ZXJ9LmthdGV4LWRpc3BsYXk+LmthdGV4e2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5rYXRleHtmb250OjQwMCAxLjIxZW0gS2FUZVhfTWFpbjtsaW5lLWhlaWdodDoxLjI7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtaW5kZW50OjB9LmthdGV4IC5rYXRleC1odG1se2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5rYXRleCAua2F0ZXgtbWF0aG1se3Bvc2l0aW9uOmFic29sdXRlO2NsaXA6cmVjdCgxcHgsMXB4LDFweCwxcHgpO3BhZGRpbmc6MDtib3JkZXI6MDtoZWlnaHQ6MXB4O3dpZHRoOjFweDtvdmVyZmxvdzpoaWRkZW59LmthdGV4IC5iYXNlLC5rYXRleCAuc3RydXR7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmthdGV4IC5tYXRoaXR7Zm9udC1mYW1pbHk6S2FUZVhfTWF0aDtmb250LXN0eWxlOml0YWxpY30ua2F0ZXggLmFtc3Jte2ZvbnQtZmFtaWx5OkthVGVYX0FNU30ua2F0ZXggLnRleHRzdHlsZT4ubW9yZCsubW9we21hcmdpbi1sZWZ0Oi4xNjY2N2VtfS5rYXRleCAudGV4dHN0eWxlPi5tb3JkKy5tYmlue21hcmdpbi1sZWZ0Oi4yMjIyMmVtfS5rYXRleCAudGV4dHN0eWxlPi5tb3JkKy5tcmVse21hcmdpbi1sZWZ0Oi4yNzc3OGVtfS5rYXRleCAudGV4dHN0eWxlPi5tb3ArLm1vcCwua2F0ZXggLnRleHRzdHlsZT4ubW9wKy5tb3JkLC5rYXRleCAudGV4dHN0eWxlPi5tb3JkKy5taW5uZXJ7bWFyZ2luLWxlZnQ6LjE2NjY3ZW19LmthdGV4IC50ZXh0c3R5bGU+Lm1vcCsubXJlbHttYXJnaW4tbGVmdDouMjc3NzhlbX0ua2F0ZXggLnRleHRzdHlsZT4ubW9wKy5taW5uZXJ7bWFyZ2luLWxlZnQ6LjE2NjY3ZW19LmthdGV4IC50ZXh0c3R5bGU+Lm1iaW4rLm1pbm5lciwua2F0ZXggLnRleHRzdHlsZT4ubWJpbisubW9wLC5rYXRleCAudGV4dHN0eWxlPi5tYmluKy5tb3Blbiwua2F0ZXggLnRleHRzdHlsZT4ubWJpbisubW9yZHttYXJnaW4tbGVmdDouMjIyMjJlbX0ua2F0ZXggLnRleHRzdHlsZT4ubXJlbCsubWlubmVyLC5rYXRleCAudGV4dHN0eWxlPi5tcmVsKy5tb3AsLmthdGV4IC50ZXh0c3R5bGU+Lm1yZWwrLm1vcGVuLC5rYXRleCAudGV4dHN0eWxlPi5tcmVsKy5tb3Jke21hcmdpbi1sZWZ0Oi4yNzc3OGVtfS5rYXRleCAudGV4dHN0eWxlPi5tY2xvc2UrLm1vcHttYXJnaW4tbGVmdDouMTY2NjdlbX0ua2F0ZXggLnRleHRzdHlsZT4ubWNsb3NlKy5tYmlue21hcmdpbi1sZWZ0Oi4yMjIyMmVtfS5rYXRleCAudGV4dHN0eWxlPi5tY2xvc2UrLm1yZWx7bWFyZ2luLWxlZnQ6LjI3Nzc4ZW19LmthdGV4IC50ZXh0c3R5bGU+Lm1jbG9zZSsubWlubmVyLC5rYXRleCAudGV4dHN0eWxlPi5taW5uZXIrLm1vcCwua2F0ZXggLnRleHRzdHlsZT4ubWlubmVyKy5tb3JkLC5rYXRleCAudGV4dHN0eWxlPi5tcHVuY3QrLm1jbG9zZSwua2F0ZXggLnRleHRzdHlsZT4ubXB1bmN0Ky5taW5uZXIsLmthdGV4IC50ZXh0c3R5bGU+Lm1wdW5jdCsubW9wLC5rYXRleCAudGV4dHN0eWxlPi5tcHVuY3QrLm1vcGVuLC5rYXRleCAudGV4dHN0eWxlPi5tcHVuY3QrLm1vcmQsLmthdGV4IC50ZXh0c3R5bGU+Lm1wdW5jdCsubXB1bmN0LC5rYXRleCAudGV4dHN0eWxlPi5tcHVuY3QrLm1yZWx7bWFyZ2luLWxlZnQ6LjE2NjY3ZW19LmthdGV4IC50ZXh0c3R5bGU+Lm1pbm5lcisubWJpbnttYXJnaW4tbGVmdDouMjIyMjJlbX0ua2F0ZXggLnRleHRzdHlsZT4ubWlubmVyKy5tcmVse21hcmdpbi1sZWZ0Oi4yNzc3OGVtfS5rYXRleCAubWNsb3NlKy5tb3AsLmthdGV4IC5taW5uZXIrLm1vcCwua2F0ZXggLm1vcCsubW9wLC5rYXRleCAubW9wKy5tb3JkLC5rYXRleCAubW9yZCsubW9wLC5rYXRleCAudGV4dHN0eWxlPi5taW5uZXIrLm1pbm5lciwua2F0ZXggLnRleHRzdHlsZT4ubWlubmVyKy5tb3Blbiwua2F0ZXggLnRleHRzdHlsZT4ubWlubmVyKy5tcHVuY3R7bWFyZ2luLWxlZnQ6LjE2NjY3ZW19LmthdGV4IC5yZXNldC10ZXh0c3R5bGUudGV4dHN0eWxle2ZvbnQtc2l6ZToxZW19LmthdGV4IC5yZXNldC10ZXh0c3R5bGUuc2NyaXB0c3R5bGV7Zm9udC1zaXplOi43ZW19LmthdGV4IC5yZXNldC10ZXh0c3R5bGUuc2NyaXB0c2NyaXB0c3R5bGV7Zm9udC1zaXplOi41ZW19LmthdGV4IC5yZXNldC1zY3JpcHRzdHlsZS50ZXh0c3R5bGV7Zm9udC1zaXplOjEuNDI4NTdlbX0ua2F0ZXggLnJlc2V0LXNjcmlwdHN0eWxlLnNjcmlwdHN0eWxle2ZvbnQtc2l6ZToxZW19LmthdGV4IC5yZXNldC1zY3JpcHRzdHlsZS5zY3JpcHRzY3JpcHRzdHlsZXtmb250LXNpemU6LjcxNDI5ZW19LmthdGV4IC5yZXNldC1zY3JpcHRzY3JpcHRzdHlsZS50ZXh0c3R5bGV7Zm9udC1zaXplOjJlbX0ua2F0ZXggLnJlc2V0LXNjcmlwdHNjcmlwdHN0eWxlLnNjcmlwdHN0eWxle2ZvbnQtc2l6ZToxLjRlbX0ua2F0ZXggLnJlc2V0LXNjcmlwdHNjcmlwdHN0eWxlLnNjcmlwdHNjcmlwdHN0eWxle2ZvbnQtc2l6ZToxZW19LmthdGV4IC5zdHlsZS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlfS5rYXRleCAudmxpc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmthdGV4IC52bGlzdD5zcGFue2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmV9LmthdGV4IC52bGlzdD5zcGFuPnNwYW57ZGlzcGxheTppbmxpbmUtYmxvY2t9LmthdGV4IC52bGlzdCAuYmFzZWxpbmUtZml4e2Rpc3BsYXk6aW5saW5lLXRhYmxlO3RhYmxlLWxheW91dDpmaXhlZH0ua2F0ZXggLm1zdXBzdWJ7dGV4dC1hbGlnbjpsZWZ0fS5rYXRleCAubWZyYWM+c3Bhbj5zcGFue3RleHQtYWxpZ246Y2VudGVyfS5rYXRleCAubWZyYWMgLmZyYWMtbGluZXt3aWR0aDoxMDAlfS5rYXRleCAubWZyYWMgLmZyYWMtbGluZTpiZWZvcmV7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLXdpZHRoOjFweDtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2t9LmthdGV4IC5tZnJhYyAuZnJhYy1saW5lOmFmdGVye2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDouMDRlbTtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDotMXB4fS5rYXRleCAubXNwYWNle2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5rYXRleCAubXNwYWNlLm5lZ2F0aXZldGhpbnNwYWNle21hcmdpbi1sZWZ0Oi0uMTY2NjdlbX0ua2F0ZXggLm1zcGFjZS50aGluc3BhY2V7d2lkdGg6LjE2NjY3ZW19LmthdGV4IC5tc3BhY2UubWVkaXVtc3BhY2V7d2lkdGg6LjIyMjIyZW19LmthdGV4IC5tc3BhY2UudGhpY2tzcGFjZXt3aWR0aDouMjc3NzhlbX0ua2F0ZXggLm1zcGFjZS5lbnNwYWNle3dpZHRoOi41ZW19LmthdGV4IC5tc3BhY2UucXVhZHt3aWR0aDoxZW19LmthdGV4IC5tc3BhY2UucXF1YWR7d2lkdGg6MmVtfS5rYXRleCAubGxhcCwua2F0ZXggLnJsYXB7d2lkdGg6MDtwb3NpdGlvbjpyZWxhdGl2ZX0ua2F0ZXggLmxsYXA+LmlubmVyLC5rYXRleCAucmxhcD4uaW5uZXJ7cG9zaXRpb246YWJzb2x1dGV9LmthdGV4IC5sbGFwPi5maXgsLmthdGV4IC5ybGFwPi5maXh7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmthdGV4IC5sbGFwPi5pbm5lcntyaWdodDowfS5rYXRleCAucmxhcD4uaW5uZXJ7bGVmdDowfS5rYXRleCAua2F0ZXgtbG9nbyAuYXtmb250LXNpemU6Ljc1ZW07bWFyZ2luLWxlZnQ6LS4zMmVtO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotLjJlbX0ua2F0ZXggLmthdGV4LWxvZ28gLnR7bWFyZ2luLWxlZnQ6LS4yM2VtfS5rYXRleCAua2F0ZXgtbG9nbyAuZXttYXJnaW4tbGVmdDotLjE2NjdlbTtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LjIxNTVlbX0ua2F0ZXggLmthdGV4LWxvZ28gLnh7bWFyZ2luLWxlZnQ6LS4xMjVlbX0ua2F0ZXggLnJ1bGV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXN0eWxlOnNvbGlkO3Bvc2l0aW9uOnJlbGF0aXZlfS5rYXRleCAub3ZlcmxpbmUgLm92ZXJsaW5lLWxpbmV7d2lkdGg6MTAwJX0ua2F0ZXggLm92ZXJsaW5lIC5vdmVybGluZS1saW5lOmJlZm9yZXtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20td2lkdGg6MXB4O2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTpibG9ja30ua2F0ZXggLm92ZXJsaW5lIC5vdmVybGluZS1saW5lOmFmdGVye2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDouMDRlbTtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDotMXB4fS5rYXRleCAuc3FydD4uc3FydC1zaWdue3Bvc2l0aW9uOnJlbGF0aXZlfS5rYXRleCAuc3FydCAuc3FydC1saW5le3dpZHRoOjEwMCV9LmthdGV4IC5zcXJ0IC5zcXJ0LWxpbmU6YmVmb3Jle2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrfS5rYXRleCAuc3FydCAuc3FydC1saW5lOmFmdGVye2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDouMDRlbTtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDotMXB4fS5rYXRleCAuc3FydD4ucm9vdHttYXJnaW4tbGVmdDouMjc3Nzc3NzhlbTttYXJnaW4tcmlnaHQ6LS41NTU1NTU1NmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlciwua2F0ZXggLnNpemluZ3tkaXNwbGF5OmlubGluZS1ibG9ja30ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTF7Zm9udC1zaXplOjFlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTIsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTJ7Zm9udC1zaXplOjEuNGVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplMywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplM3tmb250LXNpemU6MS42ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxLnNpemU0LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxLnNpemU0e2ZvbnQtc2l6ZToxLjhlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTV7Zm9udC1zaXplOjJlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTZ7Zm9udC1zaXplOjIuNGVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplNywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplN3tmb250LXNpemU6Mi44OGVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplOCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplOHtmb250LXNpemU6My40NmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplOSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMS5zaXplOXtmb250LXNpemU6NC4xNGVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMS5zaXplMTAsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEuc2l6ZTEwe2ZvbnQtc2l6ZTo0Ljk4ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUyLnNpemUxLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUyLnNpemUxe2ZvbnQtc2l6ZTouNzE0Mjg1NzFlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTIsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTJ7Zm9udC1zaXplOjFlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTMsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTN7Zm9udC1zaXplOjEuMTQyODU3MTRlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTR7Zm9udC1zaXplOjEuMjg1NzE0MjllbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTV7Zm9udC1zaXplOjEuNDI4NTcxNDNlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTZ7Zm9udC1zaXplOjEuNzE0Mjg1NzFlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTd7Zm9udC1zaXplOjIuMDU3MTQyODZlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTgsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTh7Zm9udC1zaXplOjIuNDcxNDI4NTdlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTksLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTIuc2l6ZTl7Zm9udC1zaXplOjIuOTU3MTQyODZlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTIuc2l6ZTEwLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUyLnNpemUxMHtmb250LXNpemU6My41NTcxNDI4NmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplMXtmb250LXNpemU6LjYyNWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplMntmb250LXNpemU6Ljg3NWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplM3tmb250LXNpemU6MWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplNCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplNHtmb250LXNpemU6MS4xMjVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTV7Zm9udC1zaXplOjEuMjVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTZ7Zm9udC1zaXplOjEuNWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplNywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMy5zaXplN3tmb250LXNpemU6MS44ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUzLnNpemU4LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUzLnNpemU4e2ZvbnQtc2l6ZToyLjE2MjVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTMuc2l6ZTksLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTl7Zm9udC1zaXplOjIuNTg3NWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMy5zaXplMTAsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTMuc2l6ZTEwe2ZvbnQtc2l6ZTozLjExMjVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTF7Zm9udC1zaXplOi41NTU1NTU1NmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplMntmb250LXNpemU6Ljc3Nzc3Nzc4ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU0LnNpemUzLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU0LnNpemUze2ZvbnQtc2l6ZTouODg4ODg4ODllbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTR7Zm9udC1zaXplOjFlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTV7Zm9udC1zaXplOjEuMTExMTExMTFlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTZ7Zm9udC1zaXplOjEuMzMzMzMzMzNlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTQuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTQuc2l6ZTd7Zm9udC1zaXplOjEuNmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplOCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplOHtmb250LXNpemU6MS45MjIyMjIyMmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNC5zaXplOSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplOXtmb250LXNpemU6Mi4zZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU0LnNpemUxMCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNC5zaXplMTB7Zm9udC1zaXplOjIuNzY2NjY2NjdlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTF7Zm9udC1zaXplOi41ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemUyLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemUye2ZvbnQtc2l6ZTouN2VtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNS5zaXplMywua2F0ZXggLnNpemluZy5yZXNldC1zaXplNS5zaXplM3tmb250LXNpemU6LjhlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTR7Zm9udC1zaXplOi45ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemU1LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemU1e2ZvbnQtc2l6ZToxZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU1LnNpemU2LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemU2e2ZvbnQtc2l6ZToxLjJlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTd7Zm9udC1zaXplOjEuNDRlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTgsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTh7Zm9udC1zaXplOjEuNzNlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTksLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTUuc2l6ZTl7Zm9udC1zaXplOjIuMDdlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTUuc2l6ZTEwLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU1LnNpemUxMHtmb250LXNpemU6Mi40OWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplMSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplMXtmb250LXNpemU6LjQxNjY2NjY3ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU2LnNpemUyLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU2LnNpemUye2ZvbnQtc2l6ZTouNTgzMzMzMzNlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTMsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTN7Zm9udC1zaXplOi42NjY2NjY2N2VtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplNCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplNHtmb250LXNpemU6Ljc1ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU2LnNpemU1LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU2LnNpemU1e2ZvbnQtc2l6ZTouODMzMzMzMzNlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTZ7Zm9udC1zaXplOjFlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTYuc2l6ZTd7Zm9udC1zaXplOjEuMmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplOCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplOHtmb250LXNpemU6MS40NDE2NjY2N2VtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNi5zaXplOSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNi5zaXplOXtmb250LXNpemU6MS43MjVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTYuc2l6ZTEwLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU2LnNpemUxMHtmb250LXNpemU6Mi4wNzVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTF7Zm9udC1zaXplOi4zNDcyMjIyMmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNy5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNy5zaXplMntmb250LXNpemU6LjQ4NjExMTExZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemUzLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemUze2ZvbnQtc2l6ZTouNTU1NTU1NTZlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTR7Zm9udC1zaXplOi42MjVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTUsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTcuc2l6ZTV7Zm9udC1zaXplOi42OTQ0NDQ0NGVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplNy5zaXplNiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplNy5zaXplNntmb250LXNpemU6LjgzMzMzMzMzZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemU3LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemU3e2ZvbnQtc2l6ZToxZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemU4LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemU4e2ZvbnQtc2l6ZToxLjIwMTM4ODg5ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU3LnNpemU5LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemU5e2ZvbnQtc2l6ZToxLjQzNzVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTcuc2l6ZTEwLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU3LnNpemUxMHtmb250LXNpemU6MS43MjkxNjY2N2VtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOC5zaXplMSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplMXtmb250LXNpemU6LjI4OTAxNzM0ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemUyLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemUye2ZvbnQtc2l6ZTouNDA0NjI0MjhlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTguc2l6ZTMsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTN7Zm9udC1zaXplOi40NjI0Mjc3NWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOC5zaXplNCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplNHtmb250LXNpemU6LjUyMDIzMTIxZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemU1LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemU1e2ZvbnQtc2l6ZTouNTc4MDM0NjhlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTguc2l6ZTYsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTguc2l6ZTZ7Zm9udC1zaXplOi42OTM2NDE2MmVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOC5zaXplNywua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplN3tmb250LXNpemU6LjgzMjM2OTk0ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemU4LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemU4e2ZvbnQtc2l6ZToxZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemU5LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU4LnNpemU5e2ZvbnQtc2l6ZToxLjE5NjUzMTc5ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU4LnNpemUxMCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOC5zaXplMTB7Zm9udC1zaXplOjEuNDM5MzA2MzZlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTEsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTF7Zm9udC1zaXplOi4yNDE1NDU4OWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplMntmb250LXNpemU6LjMzODE2NDI1ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemUzLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemUze2ZvbnQtc2l6ZTouMzg2NDczNDNlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTR7Zm9udC1zaXplOi40MzQ3ODI2MWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplNSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplNXtmb250LXNpemU6LjQ4MzA5MTc5ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemU2LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemU2e2ZvbnQtc2l6ZTouNTc5NzEwMTRlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTkuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTkuc2l6ZTd7Zm9udC1zaXplOi42OTU2NTIxN2VtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplOS5zaXplOCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplOHtmb250LXNpemU6LjgzNTc0ODc5ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemU5LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemU5LnNpemU5e2ZvbnQtc2l6ZToxZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemU5LnNpemUxMCwua2F0ZXggLnNpemluZy5yZXNldC1zaXplOS5zaXplMTB7Zm9udC1zaXplOjEuMjAyODk4NTVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemUxLC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxMC5zaXplMXtmb250LXNpemU6LjIwMDgwMzIxZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplMiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTJ7Zm9udC1zaXplOi4yODExMjQ1ZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplMywua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTN7Zm9udC1zaXplOi4zMjEyODUxNGVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMTAuc2l6ZTQsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEwLnNpemU0e2ZvbnQtc2l6ZTouMzYxNDQ1NzhlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU1LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxMC5zaXplNXtmb250LXNpemU6LjQwMTYwNjQzZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplNiwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTZ7Zm9udC1zaXplOi40ODE5Mjc3MWVtfS5rYXRleCAuZm9udHNpemUtZW5zdXJlci5yZXNldC1zaXplMTAuc2l6ZTcsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEwLnNpemU3e2ZvbnQtc2l6ZTouNTc4MzEzMjVlbX0ua2F0ZXggLmZvbnRzaXplLWVuc3VyZXIucmVzZXQtc2l6ZTEwLnNpemU4LC5rYXRleCAuc2l6aW5nLnJlc2V0LXNpemUxMC5zaXplOHtmb250LXNpemU6LjY5NDc3OTEyZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplOSwua2F0ZXggLnNpemluZy5yZXNldC1zaXplMTAuc2l6ZTl7Zm9udC1zaXplOi44MzEzMjUzZW19LmthdGV4IC5mb250c2l6ZS1lbnN1cmVyLnJlc2V0LXNpemUxMC5zaXplMTAsLmthdGV4IC5zaXppbmcucmVzZXQtc2l6ZTEwLnNpemUxMHtmb250LXNpemU6MWVtfS5rYXRleCAuZGVsaW1zaXppbmcuc2l6ZTF7Zm9udC1mYW1pbHk6S2FUZVhfU2l6ZTF9LmthdGV4IC5kZWxpbXNpemluZy5zaXplMntmb250LWZhbWlseTpLYVRlWF9TaXplMn0ua2F0ZXggLmRlbGltc2l6aW5nLnNpemUze2ZvbnQtZmFtaWx5OkthVGVYX1NpemUzfS5rYXRleCAuZGVsaW1zaXppbmcuc2l6ZTR7Zm9udC1mYW1pbHk6S2FUZVhfU2l6ZTR9LmthdGV4IC5kZWxpbXNpemluZy5tdWx0IC5kZWxpbS1zaXplMT5zcGFue2ZvbnQtZmFtaWx5OkthVGVYX1NpemUxfS5rYXRleCAuZGVsaW1zaXppbmcubXVsdCAuZGVsaW0tc2l6ZTQ+c3Bhbntmb250LWZhbWlseTpLYVRlWF9TaXplNH0ua2F0ZXggLm51bGxkZWxpbWl0ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6LjEyZW19LmthdGV4IC5vcC1zeW1ib2x7cG9zaXRpb246cmVsYXRpdmV9LmthdGV4IC5vcC1zeW1ib2wuc21hbGwtb3B7Zm9udC1mYW1pbHk6S2FUZVhfU2l6ZTF9LmthdGV4IC5vcC1zeW1ib2wubGFyZ2Utb3B7Zm9udC1mYW1pbHk6S2FUZVhfU2l6ZTJ9LmthdGV4IC5hY2NlbnQ+LnZsaXN0PnNwYW4sLmthdGV4IC5vcC1saW1pdHM+LnZsaXN0PnNwYW57dGV4dC1hbGlnbjpjZW50ZXJ9LmthdGV4IC5hY2NlbnQgLmFjY2VudC1ib2R5PnNwYW57d2lkdGg6MH0ua2F0ZXggLmFjY2VudCAuYWNjZW50LWJvZHkuYWNjZW50LXZlYz5zcGFue3Bvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6LjMyNmVtfS5rYXRleCAuYXJyYXljb2xzZXB7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmthdGV4IC5jb2wtYWxpZ24tYz4udmxpc3R7dGV4dC1hbGlnbjpjZW50ZXJ9LmthdGV4IC5jb2wtYWxpZ24tbD4udmxpc3R7dGV4dC1hbGlnbjpsZWZ0fS5rYXRleCAuY29sLWFsaWduLXI+LnZsaXN0e3RleHQtYWxpZ246cmlnaHR9XCI7XG4gICAgICAgIGluc2VydENzcyhjc3MpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnSXQgd2FzIG5vdCBwb3NzaWJsZSB0byBsb2FkIHRoZSBDU1MgZnJvbSBLYVRlWC4gRGV0YWlsczogJyArIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4iLCJ2YXIgaW5zZXJ0ZWQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzLCBvcHRpb25zKSB7XG4gICAgaWYgKGluc2VydGVkW2Nzc10pIHJldHVybjtcbiAgICBpbnNlcnRlZFtjc3NdID0gdHJ1ZTtcbiAgICBcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcblxuICAgIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH1cbiAgICBcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcmVwZW5kKSB7XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGVsZW0sIGhlYWQuY2hpbGROb2Rlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciBLYVRlWC4gSGVyZSwgd2UgZXhwb3NlIGZ1bmN0aW9ucyBmb3JcbiAqIHJlbmRlcmluZyBleHByZXNzaW9ucyBlaXRoZXIgdG8gRE9NIG5vZGVzIG9yIHRvIG1hcmt1cCBzdHJpbmdzLlxuICpcbiAqIFdlIGFsc28gZXhwb3NlIHRoZSBQYXJzZUVycm9yIGNsYXNzIHRvIGNoZWNrIGlmIGVycm9ycyB0aHJvd24gZnJvbSBLYVRlWCBhcmVcbiAqIGVycm9ycyBpbiB0aGUgZXhwcmVzc2lvbiwgb3IgZXJyb3JzIGluIGphdmFzY3JpcHQgaGFuZGxpbmcuXG4gKi9cblxudmFyIFBhcnNlRXJyb3IgPSByZXF1aXJlKFwiLi9zcmMvUGFyc2VFcnJvclwiKTtcbnZhciBTZXR0aW5ncyA9IHJlcXVpcmUoXCIuL3NyYy9TZXR0aW5nc1wiKTtcblxudmFyIGJ1aWxkVHJlZSA9IHJlcXVpcmUoXCIuL3NyYy9idWlsZFRyZWVcIik7XG52YXIgcGFyc2VUcmVlID0gcmVxdWlyZShcIi4vc3JjL3BhcnNlVHJlZVwiKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3NyYy91dGlsc1wiKTtcblxuLyoqXG4gKiBQYXJzZSBhbmQgYnVpbGQgYW4gZXhwcmVzc2lvbiwgYW5kIHBsYWNlIHRoYXQgZXhwcmVzc2lvbiBpbiB0aGUgRE9NIG5vZGVcbiAqIGdpdmVuLlxuICovXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oZXhwcmVzc2lvbiwgYmFzZU5vZGUsIG9wdGlvbnMpIHtcbiAgICB1dGlscy5jbGVhck5vZGUoYmFzZU5vZGUpO1xuXG4gICAgdmFyIHNldHRpbmdzID0gbmV3IFNldHRpbmdzKG9wdGlvbnMpO1xuXG4gICAgdmFyIHRyZWUgPSBwYXJzZVRyZWUoZXhwcmVzc2lvbiwgc2V0dGluZ3MpO1xuICAgIHZhciBub2RlID0gYnVpbGRUcmVlKHRyZWUsIGV4cHJlc3Npb24sIHNldHRpbmdzKS50b05vZGUoKTtcblxuICAgIGJhc2VOb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xufTtcblxuLy8gS2FUZVgncyBzdHlsZXMgZG9uJ3Qgd29yayBwcm9wZXJseSBpbiBxdWlya3MgbW9kZS4gUHJpbnQgb3V0IGFuIGVycm9yLCBhbmRcbi8vIGRpc2FibGUgcmVuZGVyaW5nLlxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChkb2N1bWVudC5jb21wYXRNb2RlICE9PSBcIkNTUzFDb21wYXRcIikge1xuICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIldhcm5pbmc6IEthVGVYIGRvZXNuJ3Qgd29yayBpbiBxdWlya3MgbW9kZS4gTWFrZSBzdXJlIHlvdXIgXCIgK1xuICAgICAgICAgICAgICAgIFwid2Vic2l0ZSBoYXMgYSBzdWl0YWJsZSBkb2N0eXBlLlwiKTtcblxuICAgICAgICByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFwiS2FUZVggZG9lc24ndCB3b3JrIGluIHF1aXJrcyBtb2RlLlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW5kIGJ1aWxkIGFuIGV4cHJlc3Npb24sIGFuZCByZXR1cm4gdGhlIG1hcmt1cCBmb3IgdGhhdC5cbiAqL1xudmFyIHJlbmRlclRvU3RyaW5nID0gZnVuY3Rpb24oZXhwcmVzc2lvbiwgb3B0aW9ucykge1xuICAgIHZhciBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyhvcHRpb25zKTtcblxuICAgIHZhciB0cmVlID0gcGFyc2VUcmVlKGV4cHJlc3Npb24sIHNldHRpbmdzKTtcbiAgICByZXR1cm4gYnVpbGRUcmVlKHRyZWUsIGV4cHJlc3Npb24sIHNldHRpbmdzKS50b01hcmt1cCgpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBhbiBleHByZXNzaW9uIGFuZCByZXR1cm4gdGhlIHBhcnNlIHRyZWUuXG4gKi9cbnZhciBnZW5lcmF0ZVBhcnNlVHJlZSA9IGZ1bmN0aW9uKGV4cHJlc3Npb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3Mob3B0aW9ucyk7XG4gICAgcmV0dXJuIHBhcnNlVHJlZShleHByZXNzaW9uLCBzZXR0aW5ncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICByZW5kZXI6IHJlbmRlcixcbiAgICByZW5kZXJUb1N0cmluZzogcmVuZGVyVG9TdHJpbmcsXG4gICAgLyoqXG4gICAgICogTk9URTogVGhpcyBtZXRob2QgaXMgbm90IGN1cnJlbnRseSByZWNvbW1lbmRlZCBmb3IgcHVibGljIHVzZS5cbiAgICAgKiBUaGUgaW50ZXJuYWwgdHJlZSByZXByZXNlbnRhdGlvbiBpcyB1bnN0YWJsZSBhbmQgaXMgdmVyeSBsaWtlbHlcbiAgICAgKiB0byBjaGFuZ2UuIFVzZSBhdCB5b3VyIG93biByaXNrLlxuICAgICAqL1xuICAgIF9fcGFyc2U6IGdlbmVyYXRlUGFyc2VUcmVlLFxuICAgIFBhcnNlRXJyb3I6IFBhcnNlRXJyb3Jcbn07XG4iLCIvKipcbiAqIFRoZSBMZXhlciBjbGFzcyBoYW5kbGVzIHRva2VuaXppbmcgdGhlIGlucHV0IGluIHZhcmlvdXMgd2F5cy4gU2luY2Ugb3VyXG4gKiBwYXJzZXIgZXhwZWN0cyB1cyB0byBiZSBhYmxlIHRvIGJhY2t0cmFjaywgdGhlIGxleGVyIGFsbG93cyBsZXhpbmcgZnJvbSBhbnlcbiAqIGdpdmVuIHN0YXJ0aW5nIHBvaW50LlxuICpcbiAqIEl0cyBtYWluIGV4cG9zZWQgZnVuY3Rpb24gaXMgdGhlIGBsZXhgIGZ1bmN0aW9uLCB3aGljaCB0YWtlcyBhIHBvc2l0aW9uIHRvXG4gKiBsZXggZnJvbSBhbmQgYSB0eXBlIG9mIHRva2VuIHRvIGxleC4gSXQgZGVmZXJzIHRvIHRoZSBhcHByb3ByaWF0ZSBgX2lubmVyTGV4YFxuICogZnVuY3Rpb24uXG4gKlxuICogVGhlIHZhcmlvdXMgYF9pbm5lckxleGAgZnVuY3Rpb25zIHBlcmZvcm0gdGhlIGFjdHVhbCBsZXhpbmcgb2YgZGlmZmVyZW50XG4gKiBraW5kcy5cbiAqL1xuXG52YXIgbWF0Y2hBdCA9IHJlcXVpcmUoXCJtYXRjaC1hdFwiKTtcblxudmFyIFBhcnNlRXJyb3IgPSByZXF1aXJlKFwiLi9QYXJzZUVycm9yXCIpO1xuXG4vLyBUaGUgbWFpbiBsZXhlciBjbGFzc1xuZnVuY3Rpb24gTGV4ZXIoaW5wdXQpIHtcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xufVxuXG4vLyBUaGUgcmVzdWx0aW5nIHRva2VuIHJldHVybmVkIGZyb20gYGxleGAuXG5mdW5jdGlvbiBUb2tlbih0ZXh0LCBkYXRhLCBwb3NpdGlvbikge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG59XG5cbi8vIFwibm9ybWFsXCIgdHlwZXMgb2YgdG9rZW5zLiBUaGVzZSBhcmUgdG9rZW5zIHdoaWNoIGNhbiBiZSBtYXRjaGVkIGJ5IGEgc2ltcGxlXG4vLyByZWdleFxudmFyIG1hdGhOb3JtYWxzID0gW1xuICAgIC9bL3xALlwiXCJgMC05YS16QS1aXS8sIC8vIG9yZHNcbiAgICAvWyorLV0vLCAvLyBiaW5zXG4gICAgL1s9PD46XS8sIC8vIHJlbHNcbiAgICAvWyw7XS8sIC8vIHB1bmN0dWF0aW9uXG4gICAgL1snXFxeX3t9XS8sIC8vIG1pc2NcbiAgICAvWyhcXFtdLywgLy8gb3BlbnNcbiAgICAvWylcXF0/IV0vLCAvLyBjbG9zZXNcbiAgICAvfi8sIC8vIHNwYWNpbmdcbiAgICAvJi8sIC8vIGhvcml6b250YWwgYWxpZ25tZW50XG4gICAgL1xcXFxcXFxcLyAvLyBsaW5lIGJyZWFrXG5dO1xuXG4vLyBUaGVzZSBhcmUgXCJub3JtYWxcIiB0b2tlbnMgbGlrZSBhYm92ZSwgYnV0IHNob3VsZCBpbnN0ZWFkIGJlIHBhcnNlZCBpbiB0ZXh0XG4vLyBtb2RlLlxudmFyIHRleHROb3JtYWxzID0gW1xuICAgIC9bYS16QS1aMC05YCFAKigpLT0rXFxbXFxdJ1wiOzo/XFwvLixdLywgLy8gb3Jkc1xuICAgIC9be31dLywgLy8gZ3JvdXBpbmdcbiAgICAvfi8sIC8vIHNwYWNpbmdcbiAgICAvJi8sIC8vIGhvcml6b250YWwgYWxpZ25tZW50XG4gICAgL1xcXFxcXFxcLyAvLyBsaW5lIGJyZWFrXG5dO1xuXG4vLyBSZWdleGVzIGZvciBtYXRjaGluZyB3aGl0ZXNwYWNlXG52YXIgd2hpdGVzcGFjZVJlZ2V4ID0gL1xccyovO1xudmFyIHdoaXRlc3BhY2VDb25jYXRSZWdleCA9IC8gK3xcXFxcICArLztcblxuLy8gVGhpcyByZWdleCBtYXRjaGVzIGFueSBvdGhlciBUZVggZnVuY3Rpb24sIHdoaWNoIGlzIGEgYmFja3NsYXNoIGZvbGxvd2VkIGJ5IGFcbi8vIHdvcmQgb3IgYSBzaW5nbGUgc3ltYm9sXG52YXIgYW55RnVuYyA9IC9cXFxcKD86W2EtekEtWl0rfC4pLztcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxleGVzIGEgc2luZ2xlIG5vcm1hbCB0b2tlbi4gSXQgdGFrZXMgYSBwb3NpdGlvbiwgYSBsaXN0IG9mXG4gKiBcIm5vcm1hbFwiIHRva2VucyB0byB0cnksIGFuZCB3aGV0aGVyIGl0IHNob3VsZCBjb21wbGV0ZWx5IGlnbm9yZSB3aGl0ZXNwYWNlIG9yXG4gKiBub3QuXG4gKi9cbkxleGVyLnByb3RvdHlwZS5faW5uZXJMZXggPSBmdW5jdGlvbihwb3MsIG5vcm1hbHMsIGlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLl9pbnB1dDtcbiAgICB2YXIgd2hpdGVzcGFjZTtcblxuICAgIGlmIChpZ25vcmVXaGl0ZXNwYWNlKSB7XG4gICAgICAgIC8vIEdldCByaWQgb2Ygd2hpdGVzcGFjZS5cbiAgICAgICAgd2hpdGVzcGFjZSA9IG1hdGNoQXQod2hpdGVzcGFjZVJlZ2V4LCBpbnB1dCwgcG9zKVswXTtcbiAgICAgICAgcG9zICs9IHdoaXRlc3BhY2UubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERvIHRoZSBmdW5reSBjb25jYXRlbmF0aW9uIG9mIHdoaXRlc3BhY2UgdGhhdCBoYXBwZW5zIGluIHRleHQgbW9kZS5cbiAgICAgICAgd2hpdGVzcGFjZSA9IG1hdGNoQXQod2hpdGVzcGFjZUNvbmNhdFJlZ2V4LCBpbnB1dCwgcG9zKTtcbiAgICAgICAgaWYgKHdoaXRlc3BhY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVG9rZW4oXCIgXCIsIG51bGwsIHBvcyArIHdoaXRlc3BhY2VbMF0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gbW9yZSBpbnB1dCB0byBwYXJzZSwgcmV0dXJuIGFuIEVPRiB0b2tlblxuICAgIGlmIChwb3MgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFwiRU9GXCIsIG51bGwsIHBvcyk7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoO1xuICAgIGlmICgobWF0Y2ggPSBtYXRjaEF0KGFueUZ1bmMsIGlucHV0LCBwb3MpKSkge1xuICAgICAgICAvLyBJZiB3ZSBtYXRjaCBhIGZ1bmN0aW9uIHRva2VuLCByZXR1cm4gaXRcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihtYXRjaFswXSwgbnVsbCwgcG9zICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGxvb2sgdGhyb3VnaCB0aGUgbm9ybWFsIHRva2VuIHJlZ2V4ZXMgYW5kIHNlZSBpZiBpdCdzXG4gICAgICAgIC8vIG9uZSBvZiB0aGVtLlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vcm1hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub3JtYWwgPSBub3JtYWxzW2ldO1xuXG4gICAgICAgICAgICBpZiAoKG1hdGNoID0gbWF0Y2hBdChub3JtYWwsIGlucHV0LCBwb3MpKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGl0IGlzLCByZXR1cm4gaXRcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRva2VuKFxuICAgICAgICAgICAgICAgICAgICBtYXRjaFswXSwgbnVsbCwgcG9zICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJVbmV4cGVjdGVkIGNoYXJhY3RlcjogJ1wiICsgaW5wdXRbcG9zXSArIFwiJ1wiLFxuICAgICAgICAgICAgdGhpcywgcG9zKTtcbn07XG5cbi8vIEEgcmVnZXggdG8gbWF0Y2ggYSBDU1MgY29sb3IgKGxpa2UgI2ZmZmZmZiBvciBCbHVlVmlvbGV0KVxudmFyIGNzc0NvbG9yID0gLyNbYS16MC05XSt8W2Etel0rL2k7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBsZXhlcyBhIENTUyBjb2xvci5cbiAqL1xuTGV4ZXIucHJvdG90eXBlLl9pbm5lckxleENvbG9yID0gZnVuY3Rpb24ocG9zKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5faW5wdXQ7XG5cbiAgICAvLyBJZ25vcmUgd2hpdGVzcGFjZVxuICAgIHZhciB3aGl0ZXNwYWNlID0gbWF0Y2hBdCh3aGl0ZXNwYWNlUmVnZXgsIGlucHV0LCBwb3MpWzBdO1xuICAgIHBvcyArPSB3aGl0ZXNwYWNlLmxlbmd0aDtcblxuICAgIHZhciBtYXRjaDtcbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hBdChjc3NDb2xvciwgaW5wdXQsIHBvcykpKSB7XG4gICAgICAgIC8vIElmIHdlIGxvb2sgbGlrZSBhIGNvbG9yLCByZXR1cm4gYSBjb2xvclxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKG1hdGNoWzBdLCBudWxsLCBwb3MgKyBtYXRjaFswXS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFwiSW52YWxpZCBjb2xvclwiLCB0aGlzLCBwb3MpO1xuICAgIH1cbn07XG5cbi8vIEEgcmVnZXggdG8gbWF0Y2ggYSBkaW1lbnNpb24uIERpbWVuc2lvbnMgbG9vayBsaWtlXG4vLyBcIjEuMmVtXCIgb3IgXCIuNHB0XCIgb3IgXCIxIGV4XCJcbnZhciBzaXplUmVnZXggPSAvKC0/KVxccyooXFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKVxccyooW2Etel17Mn0pLztcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxleGVzIGEgZGltZW5zaW9uLlxuICovXG5MZXhlci5wcm90b3R5cGUuX2lubmVyTGV4U2l6ZSA9IGZ1bmN0aW9uKHBvcykge1xuICAgIHZhciBpbnB1dCA9IHRoaXMuX2lucHV0O1xuXG4gICAgLy8gSWdub3JlIHdoaXRlc3BhY2VcbiAgICB2YXIgd2hpdGVzcGFjZSA9IG1hdGNoQXQod2hpdGVzcGFjZVJlZ2V4LCBpbnB1dCwgcG9zKVswXTtcbiAgICBwb3MgKz0gd2hpdGVzcGFjZS5sZW5ndGg7XG5cbiAgICB2YXIgbWF0Y2g7XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoQXQoc2l6ZVJlZ2V4LCBpbnB1dCwgcG9zKSkpIHtcbiAgICAgICAgdmFyIHVuaXQgPSBtYXRjaFszXTtcbiAgICAgICAgLy8gV2Ugb25seSBjdXJyZW50bHkgaGFuZGxlIFwiZW1cIiBhbmQgXCJleFwiIHVuaXRzXG4gICAgICAgIGlmICh1bml0ICE9PSBcImVtXCIgJiYgdW5pdCAhPT0gXCJleFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcIkludmFsaWQgdW5pdDogJ1wiICsgdW5pdCArIFwiJ1wiLCB0aGlzLCBwb3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4obWF0Y2hbMF0sIHtcbiAgICAgICAgICAgICAgICBudW1iZXI6ICsobWF0Y2hbMV0gKyBtYXRjaFsyXSksXG4gICAgICAgICAgICAgICAgdW5pdDogdW5pdFxuICAgICAgICAgICAgfSwgcG9zICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcIkludmFsaWQgc2l6ZVwiLCB0aGlzLCBwb3MpO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxleGVzIGEgc3RyaW5nIG9mIHdoaXRlc3BhY2UuXG4gKi9cbkxleGVyLnByb3RvdHlwZS5faW5uZXJMZXhXaGl0ZXNwYWNlID0gZnVuY3Rpb24ocG9zKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5faW5wdXQ7XG5cbiAgICB2YXIgd2hpdGVzcGFjZSA9IG1hdGNoQXQod2hpdGVzcGFjZVJlZ2V4LCBpbnB1dCwgcG9zKVswXTtcbiAgICBwb3MgKz0gd2hpdGVzcGFjZS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbmV3IFRva2VuKHdoaXRlc3BhY2VbMF0sIG51bGwsIHBvcyk7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbGV4ZXMgYSBzaW5nbGUgdG9rZW4gc3RhcnRpbmcgYXQgYHBvc2AgYW5kIG9mIHRoZSBnaXZlbiBtb2RlLlxuICogQmFzZWQgb24gdGhlIG1vZGUsIHdlIGRlZmVyIHRvIG9uZSBvZiB0aGUgYF9pbm5lckxleGAgZnVuY3Rpb25zLlxuICovXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24ocG9zLCBtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09IFwibWF0aFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lckxleChwb3MsIG1hdGhOb3JtYWxzLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lckxleChwb3MsIHRleHROb3JtYWxzLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lubmVyTGV4Q29sb3IocG9zKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwic2l6ZVwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lckxleFNpemUocG9zKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwid2hpdGVzcGFjZVwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbm5lckxleFdoaXRlc3BhY2UocG9zKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExleGVyO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9wdGlvbnMgdGhhdCB0aGUgUGFyc2VyIGNhcnJpZXNcbiAqIGFyb3VuZCB3aXRoIGl0IHdoaWxlIHBhcnNpbmcuIERhdGEgaXMgaGVsZCBpbiBhbiBgT3B0aW9uc2Agb2JqZWN0LCBhbmQgd2hlblxuICogcmVjdXJzaW5nLCBhIG5ldyBgT3B0aW9uc2Agb2JqZWN0IGNhbiBiZSBjcmVhdGVkIHdpdGggdGhlIGAud2l0aCpgIGFuZFxuICogYC5yZXNldGAgZnVuY3Rpb25zLlxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgbWFpbiBvcHRpb25zIGNsYXNzLiBJdCBjb250YWlucyB0aGUgc3R5bGUsIHNpemUsIGFuZCBjb2xvciBvZiB0aGVcbiAqIGN1cnJlbnQgcGFyc2UgbGV2ZWwuIEl0IGFsc28gY29udGFpbnMgdGhlIHN0eWxlIGFuZCBzaXplIG9mIHRoZSBwYXJlbnQgcGFyc2VcbiAqIGxldmVsLCBzbyBzaXplIGNoYW5nZXMgY2FuIGJlIGhhbmRsZWQgZWZmaWNpZW50bHkuXG4gKlxuICogRWFjaCBvZiB0aGUgYC53aXRoKmAgYW5kIGAucmVzZXRgIGZ1bmN0aW9ucyBwYXNzZXMgaXRzIGN1cnJlbnQgc3R5bGUgYW5kIHNpemVcbiAqIGFzIHRoZSBwYXJlbnRTdHlsZSBhbmQgcGFyZW50U2l6ZSBvZiB0aGUgbmV3IG9wdGlvbnMgY2xhc3MsIHNvIHBhcmVudFxuICogaGFuZGxpbmcgaXMgdGFrZW4gY2FyZSBvZiBhdXRvbWF0aWNhbGx5LlxuICovXG5mdW5jdGlvbiBPcHRpb25zKGRhdGEpIHtcbiAgICB0aGlzLnN0eWxlID0gZGF0YS5zdHlsZTtcbiAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gICAgdGhpcy5waGFudG9tID0gZGF0YS5waGFudG9tO1xuXG4gICAgaWYgKGRhdGEucGFyZW50U3R5bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnBhcmVudFN0eWxlID0gZGF0YS5zdHlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcmVudFN0eWxlID0gZGF0YS5wYXJlbnRTdHlsZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5wYXJlbnRTaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRTaXplID0gZGF0YS5zaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyZW50U2l6ZSA9IGRhdGEucGFyZW50U2l6ZTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgXCJ0aGlzXCIuICBQcm9wZXJ0aWVzXG4gKiBmcm9tIFwiZXh0ZW5zaW9uXCIgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBvcHRpb25zIG9iamVjdC5cbiAqL1xuT3B0aW9ucy5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlLFxuICAgICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICBwYXJlbnRTdHlsZTogdGhpcy5zdHlsZSxcbiAgICAgICAgcGFyZW50U2l6ZTogdGhpcy5zaXplLFxuICAgICAgICBwaGFudG9tOiB0aGlzLnBoYW50b21cbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGV4dGVuc2lvbikge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IGV4dGVuc2lvbltrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBPcHRpb25zKGRhdGEpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gc3R5bGUuXG4gKi9cbk9wdGlvbnMucHJvdG90eXBlLndpdGhTdHlsZSA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5kKHtcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBzaXplLlxuICovXG5PcHRpb25zLnByb3RvdHlwZS53aXRoU2l6ZSA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbmQoe1xuICAgICAgICBzaXplOiBzaXplXG4gICAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBjb2xvci5cbiAqL1xuT3B0aW9ucy5wcm90b3R5cGUud2l0aENvbG9yID0gZnVuY3Rpb24oY29sb3IpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbmQoe1xuICAgICAgICBjb2xvcjogY29sb3JcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG9wdGlvbnMgb2JqZWN0IHdpdGggXCJwaGFudG9tXCIgc2V0IHRvIHRydWUuXG4gKi9cbk9wdGlvbnMucHJvdG90eXBlLndpdGhQaGFudG9tID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5kKHtcbiAgICAgICAgcGhhbnRvbTogdHJ1ZVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzdHlsZSwgc2l6ZSwgYW5kIGNvbG9yLiBUaGlzIGlzXG4gKiB1c2VkIHNvIHRoYXQgcGFyZW50IHN0eWxlIGFuZCBzaXplIGNoYW5nZXMgYXJlIGhhbmRsZWQgY29ycmVjdGx5LlxuICovXG5PcHRpb25zLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVuZCh7fSk7XG59O1xuXG4vKipcbiAqIEEgbWFwIG9mIGNvbG9yIG5hbWVzIHRvIENTUyBjb2xvcnMuXG4gKiBUT0RPKGVtaWx5KTogUmVtb3ZlIHRoaXMgd2hlbiB3ZSBoYXZlIHJlYWwgbWFjcm9zXG4gKi9cbnZhciBjb2xvck1hcCA9IHtcbiAgICBcImthdGV4LWJsdWVcIjogXCIjNjQ5NWVkXCIsXG4gICAgXCJrYXRleC1vcmFuZ2VcIjogXCIjZmZhNTAwXCIsXG4gICAgXCJrYXRleC1waW5rXCI6IFwiI2ZmMDBhZlwiLFxuICAgIFwia2F0ZXgtcmVkXCI6IFwiI2RmMDAzMFwiLFxuICAgIFwia2F0ZXgtZ3JlZW5cIjogXCIjMjhhZTdiXCIsXG4gICAgXCJrYXRleC1ncmF5XCI6IFwiZ3JheVwiLFxuICAgIFwia2F0ZXgtcHVycGxlXCI6IFwiIzlkMzhiZFwiLFxuICAgIFwia2F0ZXgtYmx1ZUFcIjogXCIjYzdlOWYxXCIsXG4gICAgXCJrYXRleC1ibHVlQlwiOiBcIiM5Y2RjZWJcIixcbiAgICBcImthdGV4LWJsdWVDXCI6IFwiIzU4YzRkZFwiLFxuICAgIFwia2F0ZXgtYmx1ZURcIjogXCIjMjlhYmNhXCIsXG4gICAgXCJrYXRleC1ibHVlRVwiOiBcIiMxYzc1OGFcIixcbiAgICBcImthdGV4LXRlYWxBXCI6IFwiI2FjZWFkN1wiLFxuICAgIFwia2F0ZXgtdGVhbEJcIjogXCIjNzZkZGMwXCIsXG4gICAgXCJrYXRleC10ZWFsQ1wiOiBcIiM1Y2QwYjNcIixcbiAgICBcImthdGV4LXRlYWxEXCI6IFwiIzU1YzFhN1wiLFxuICAgIFwia2F0ZXgtdGVhbEVcIjogXCIjNDlhODhmXCIsXG4gICAgXCJrYXRleC1ncmVlbkFcIjogXCIjYzllMmFlXCIsXG4gICAgXCJrYXRleC1ncmVlbkJcIjogXCIjYTZjZjhjXCIsXG4gICAgXCJrYXRleC1ncmVlbkNcIjogXCIjODNjMTY3XCIsXG4gICAgXCJrYXRleC1ncmVlbkRcIjogXCIjNzdiMDVkXCIsXG4gICAgXCJrYXRleC1ncmVlbkVcIjogXCIjNjk5YzUyXCIsXG4gICAgXCJrYXRleC1nb2xkQVwiOiBcIiNmN2M3OTdcIixcbiAgICBcImthdGV4LWdvbGRCXCI6IFwiI2Y5Yjc3NVwiLFxuICAgIFwia2F0ZXgtZ29sZENcIjogXCIjZjBhYzVmXCIsXG4gICAgXCJrYXRleC1nb2xkRFwiOiBcIiNlMWExNThcIixcbiAgICBcImthdGV4LWdvbGRFXCI6IFwiI2M3OGQ0NlwiLFxuICAgIFwia2F0ZXgtcmVkQVwiOiBcIiNmN2ExYTNcIixcbiAgICBcImthdGV4LXJlZEJcIjogXCIjZmY4MDgwXCIsXG4gICAgXCJrYXRleC1yZWRDXCI6IFwiI2ZjNjI1NVwiLFxuICAgIFwia2F0ZXgtcmVkRFwiOiBcIiNlNjVhNGNcIixcbiAgICBcImthdGV4LXJlZEVcIjogXCIjY2Y1MDQ0XCIsXG4gICAgXCJrYXRleC1tYXJvb25BXCI6IFwiI2VjYWJjMVwiLFxuICAgIFwia2F0ZXgtbWFyb29uQlwiOiBcIiNlYzkyYWJcIixcbiAgICBcImthdGV4LW1hcm9vbkNcIjogXCIjYzU1ZjczXCIsXG4gICAgXCJrYXRleC1tYXJvb25EXCI6IFwiI2EyNGQ2MVwiLFxuICAgIFwia2F0ZXgtbWFyb29uRVwiOiBcIiM5NDQyNGZcIixcbiAgICBcImthdGV4LXB1cnBsZUFcIjogXCIjY2FhM2U4XCIsXG4gICAgXCJrYXRleC1wdXJwbGVCXCI6IFwiI2IxODljNlwiLFxuICAgIFwia2F0ZXgtcHVycGxlQ1wiOiBcIiM5YTcyYWNcIixcbiAgICBcImthdGV4LXB1cnBsZURcIjogXCIjNzE1NTgyXCIsXG4gICAgXCJrYXRleC1wdXJwbGVFXCI6IFwiIzY0NDE3MlwiLFxuICAgIFwia2F0ZXgtbWludEFcIjogXCIjZjVmOWU4XCIsXG4gICAgXCJrYXRleC1taW50QlwiOiBcIiNlZGYyZGZcIixcbiAgICBcImthdGV4LW1pbnRDXCI6IFwiI2UwZTVjY1wiLFxuICAgIFwia2F0ZXgtZ3JheUFcIjogXCIjZmRmZGZkXCIsXG4gICAgXCJrYXRleC1ncmF5QlwiOiBcIiNmN2Y3ZjdcIixcbiAgICBcImthdGV4LWdyYXlDXCI6IFwiI2VlZWVlZVwiLFxuICAgIFwia2F0ZXgtZ3JheURcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJrYXRleC1ncmF5RVwiOiBcIiNjY2NjY2NcIixcbiAgICBcImthdGV4LWdyYXlGXCI6IFwiI2FhYWFhYVwiLFxuICAgIFwia2F0ZXgtZ3JheUdcIjogXCIjOTk5OTk5XCIsXG4gICAgXCJrYXRleC1ncmF5SFwiOiBcIiM1NTU1NTVcIixcbiAgICBcImthdGV4LWdyYXlJXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwia2F0ZXgta2FCbHVlXCI6IFwiIzMxNDQ1M1wiLFxuICAgIFwia2F0ZXgta2FHcmVlblwiOiBcIiM2MzliMjRcIlxufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBDU1MgY29sb3Igb2YgdGhlIGN1cnJlbnQgb3B0aW9ucyBvYmplY3QsIGFjY291bnRpbmcgZm9yIHRoZVxuICogYGNvbG9yTWFwYC5cbiAqL1xuT3B0aW9ucy5wcm90b3R5cGUuZ2V0Q29sb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5waGFudG9tKSB7XG4gICAgICAgIHJldHVybiBcInRyYW5zcGFyZW50XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yTWFwW3RoaXMuY29sb3JdIHx8IHRoaXMuY29sb3I7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25zO1xuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSBQYXJzZUVycm9yIGNsYXNzLCB3aGljaCBpcyB0aGUgbWFpbiBlcnJvciB0aHJvd24gYnkgS2FUZVhcbiAqIGZ1bmN0aW9ucyB3aGVuIHNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZy4gVGhpcyBpcyB1c2VkIHRvIGRpc3Rpbmd1aXNoIGludGVybmFsXG4gKiBlcnJvcnMgZnJvbSBlcnJvcnMgaW4gdGhlIGV4cHJlc3Npb24gdGhhdCB0aGUgdXNlciBwcm92aWRlZC5cbiAqL1xuZnVuY3Rpb24gUGFyc2VFcnJvcihtZXNzYWdlLCBsZXhlciwgcG9zaXRpb24pIHtcbiAgICB2YXIgZXJyb3IgPSBcIkthVGVYIHBhcnNlIGVycm9yOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAobGV4ZXIgIT09IHVuZGVmaW5lZCAmJiBwb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgdGhlIGlucHV0IGFuZCBhIHBvc2l0aW9uLCBtYWtlIHRoZSBlcnJvciBhIGJpdCBmYW5jaWVyXG5cbiAgICAgICAgLy8gUHJlcGVuZCBzb21lIGluZm9ybWF0aW9uXG4gICAgICAgIGVycm9yICs9IFwiIGF0IHBvc2l0aW9uIFwiICsgcG9zaXRpb24gKyBcIjogXCI7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBpbnB1dFxuICAgICAgICB2YXIgaW5wdXQgPSBsZXhlci5faW5wdXQ7XG4gICAgICAgIC8vIEluc2VydCBhIGNvbWJpbmluZyB1bmRlcnNjb3JlIGF0IHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMCwgcG9zaXRpb24pICsgXCJcXHUwMzMyXCIgK1xuICAgICAgICAgICAgaW5wdXQuc2xpY2UocG9zaXRpb24pO1xuXG4gICAgICAgIC8vIEV4dHJhY3Qgc29tZSBjb250ZXh0IGZyb20gdGhlIGlucHV0IGFuZCBhZGQgaXQgdG8gdGhlIGVycm9yXG4gICAgICAgIHZhciBiZWdpbiA9IE1hdGgubWF4KDAsIHBvc2l0aW9uIC0gMTUpO1xuICAgICAgICB2YXIgZW5kID0gcG9zaXRpb24gKyAxNTtcbiAgICAgICAgZXJyb3IgKz0gaW5wdXQuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgfVxuXG4gICAgLy8gU29tZSBoYWNrZXJ5IHRvIG1ha2UgUGFyc2VFcnJvciBhIHByb3RvdHlwZSBvZiBFcnJvclxuICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84NDYwNzUzXG4gICAgdmFyIHNlbGYgPSBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIHNlbGYubmFtZSA9IFwiUGFyc2VFcnJvclwiO1xuICAgIHNlbGYuX19wcm90b19fID0gUGFyc2VFcnJvci5wcm90b3R5cGU7XG5cbiAgICBzZWxmLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgcmV0dXJuIHNlbGY7XG59XG5cbi8vIE1vcmUgaGFja2VyeVxuUGFyc2VFcnJvci5wcm90b3R5cGUuX19wcm90b19fID0gRXJyb3IucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlRXJyb3I7XG4iLCJ2YXIgZnVuY3Rpb25zID0gcmVxdWlyZShcIi4vZnVuY3Rpb25zXCIpO1xudmFyIGVudmlyb25tZW50cyA9IHJlcXVpcmUoXCIuL2Vudmlyb25tZW50c1wiKTtcbnZhciBMZXhlciA9IHJlcXVpcmUoXCIuL0xleGVyXCIpO1xudmFyIHN5bWJvbHMgPSByZXF1aXJlKFwiLi9zeW1ib2xzXCIpO1xudmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBwYXJzZURhdGEgPSByZXF1aXJlKFwiLi9wYXJzZURhdGFcIik7XG52YXIgUGFyc2VFcnJvciA9IHJlcXVpcmUoXCIuL1BhcnNlRXJyb3JcIik7XG5cbi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBwYXJzZXIgdXNlZCB0byBwYXJzZSBvdXQgYSBUZVggZXhwcmVzc2lvbiBmcm9tIHRoZVxuICogaW5wdXQuIFNpbmNlIFRlWCBpc24ndCBjb250ZXh0LWZyZWUsIHN0YW5kYXJkIHBhcnNlcnMgZG9uJ3Qgd29yayBwYXJ0aWN1bGFybHlcbiAqIHdlbGwuXG4gKlxuICogVGhlIHN0cmF0ZWd5IG9mIHRoaXMgcGFyc2VyIGlzIGFzIHN1Y2g6XG4gKlxuICogVGhlIG1haW4gZnVuY3Rpb25zICh0aGUgYC5wYXJzZS4uLmAgb25lcykgdGFrZSBhIHBvc2l0aW9uIGluIHRoZSBjdXJyZW50XG4gKiBwYXJzZSBzdHJpbmcgdG8gcGFyc2UgdG9rZW5zIGZyb20uIFRoZSBsZXhlciAoZm91bmQgaW4gTGV4ZXIuanMsIHN0b3JlZCBhdFxuICogdGhpcy5sZXhlcikgYWxzbyBzdXBwb3J0cyBwdWxsaW5nIG91dCB0b2tlbnMgYXQgYXJiaXRyYXJ5IHBsYWNlcy4gV2hlblxuICogaW5kaXZpZHVhbCB0b2tlbnMgYXJlIG5lZWRlZCBhdCBhIHBvc2l0aW9uLCB0aGUgbGV4ZXIgaXMgY2FsbGVkIHRvIHB1bGwgb3V0IGFcbiAqIHRva2VuLCB3aGljaCBpcyB0aGVuIHVzZWQuXG4gKlxuICogVGhlIG1haW4gZnVuY3Rpb25zIGFsc28gdGFrZSBhIG1vZGUgdGhhdCB0aGUgcGFyc2VyIGlzIGN1cnJlbnRseSBpblxuICogKGN1cnJlbnRseSBcIm1hdGhcIiBvciBcInRleHRcIiksIHdoaWNoIGRlbm90ZXMgd2hldGhlciB0aGUgY3VycmVudCBlbnZpcm9ubWVudFxuICogaXMgYSBtYXRoLXkgb25lIG9yIGEgdGV4dC15IG9uZSAoZS5nLiBpbnNpZGUgXFx0ZXh0KS4gQ3VycmVudGx5LCB0aGlzIHNlcnZlc1xuICogdG8gbGltaXQgdGhlIGZ1bmN0aW9ucyB3aGljaCBjYW4gYmUgdXNlZCBpbiB0ZXh0IG1vZGUuXG4gKlxuICogVGhlIG1haW4gZnVuY3Rpb25zIHRoZW4gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBjb250YWlucyB0aGUgdXNlZnVsIGRhdGEgdGhhdFxuICogd2FzIHBhcnNlZCBhdCBpdHMgZ2l2ZW4gcG9pbnQsIGFuZCBhIG5ldyBwb3NpdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJzZWRcbiAqIGRhdGEuIFRoZSBtYWluIGZ1bmN0aW9ucyBjYW4gY2FsbCBlYWNoIG90aGVyIGFuZCBjb250aW51ZSB0aGUgcGFyc2luZyBieVxuICogdXNpbmcgdGhlIHJldHVybmVkIHBvc2l0aW9uIGFzIGEgbmV3IHN0YXJ0aW5nIHBvaW50LlxuICpcbiAqIFRoZXJlIGFyZSBhbHNvIGV4dHJhIGAuaGFuZGxlLi4uYCBmdW5jdGlvbnMsIHdoaWNoIHB1bGwgb3V0IHNvbWUgcmV1c2VkXG4gKiBmdW5jdGlvbmFsaXR5IGludG8gc2VsZi1jb250YWluZWQgZnVuY3Rpb25zLlxuICpcbiAqIFRoZSBlYXJsaWVyIGZ1bmN0aW9ucyByZXR1cm4gYFBhcnNlUmVzdWx0YHMsIHdoaWNoIGNvbnRhaW4gYSBQYXJzZU5vZGUgYW5kIGFcbiAqIG5ldyBwb3NpdGlvbi5cbiAqXG4gKiBUaGUgbGF0ZXIgZnVuY3Rpb25zICh3aGljaCBhcmUgY2FsbGVkIGRlZXBlciBpbiB0aGUgcGFyc2UpIHNvbWV0aW1lcyByZXR1cm5cbiAqIFBhcnNlRnVuY09yQXJndW1lbnQsIHdoaWNoIGNvbnRhaW4gYSBQYXJzZVJlc3VsdCBhcyB3ZWxsIGFzIHNvbWUgZGF0YSBhYm91dFxuICogd2hldGhlciB0aGUgcGFyc2VkIG9iamVjdCBpcyBhIGZ1bmN0aW9uIHdoaWNoIGlzIG1pc3Npbmcgc29tZSBhcmd1bWVudHMsIG9yIGFcbiAqIHN0YW5kYWxvbmUgb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIGFzIGFuIGFyZ3VtZW50IHRvIGFub3RoZXIgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBNYWluIFBhcnNlciBjbGFzc1xuICovXG5mdW5jdGlvbiBQYXJzZXIoaW5wdXQsIHNldHRpbmdzKSB7XG4gICAgLy8gTWFrZSBhIG5ldyBsZXhlclxuICAgIHRoaXMubGV4ZXIgPSBuZXcgTGV4ZXIoaW5wdXQpO1xuICAgIC8vIFN0b3JlIHRoZSBzZXR0aW5ncyBmb3IgdXNlIGluIHBhcnNpbmdcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG59XG5cbnZhciBQYXJzZU5vZGUgPSBwYXJzZURhdGEuUGFyc2VOb2RlO1xudmFyIFBhcnNlUmVzdWx0ID0gcGFyc2VEYXRhLlBhcnNlUmVzdWx0O1xuXG4vKipcbiAqIEFuIGluaXRpYWwgZnVuY3Rpb24gKHdpdGhvdXQgaXRzIGFyZ3VtZW50cyksIG9yIGFuIGFyZ3VtZW50IHRvIGEgZnVuY3Rpb24uXG4gKiBUaGUgYHJlc3VsdGAgYXJndW1lbnQgc2hvdWxkIGJlIGEgUGFyc2VSZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIFBhcnNlRnVuY09yQXJndW1lbnQocmVzdWx0LCBpc0Z1bmN0aW9uKSB7XG4gICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgLy8gSXMgdGhpcyBhIGZ1bmN0aW9uIChpLmUuIGlzIGl0IHNvbWV0aGluZyBkZWZpbmVkIGluIGZ1bmN0aW9ucy5qcyk/XG4gICAgdGhpcy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBDaGVja3MgYSByZXN1bHQgdG8gbWFrZSBzdXJlIGl0IGhhcyB0aGUgcmlnaHQgdHlwZSwgYW5kIHRocm93cyBhblxuICogYXBwcm9wcmlhdGUgZXJyb3Igb3RoZXJ3aXNlLlxuICovXG5QYXJzZXIucHJvdG90eXBlLmV4cGVjdCA9IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dCkge1xuICAgIGlmIChyZXN1bHQudGV4dCAhPT0gdGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcbiAgICAgICAgICAgIFwiRXhwZWN0ZWQgJ1wiICsgdGV4dCArIFwiJywgZ290ICdcIiArIHJlc3VsdC50ZXh0ICsgXCInXCIsXG4gICAgICAgICAgICB0aGlzLmxleGVyLCByZXN1bHQucG9zaXRpb25cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1haW4gcGFyc2luZyBmdW5jdGlvbiwgd2hpY2ggcGFyc2VzIGFuIGVudGlyZSBpbnB1dC5cbiAqXG4gKiBAcmV0dXJuIHs/QXJyYXkuPFBhcnNlTm9kZT59XG4gKi9cblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIC8vIFRyeSB0byBwYXJzZSB0aGUgaW5wdXRcbiAgICB2YXIgcGFyc2UgPSB0aGlzLnBhcnNlSW5wdXQoMCwgXCJtYXRoXCIpO1xuICAgIHJldHVybiBwYXJzZS5yZXN1bHQ7XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhbiBlbnRpcmUgaW5wdXQgdHJlZS5cbiAqL1xuUGFyc2VyLnByb3RvdHlwZS5wYXJzZUlucHV0ID0gZnVuY3Rpb24ocG9zLCBtb2RlKSB7XG4gICAgLy8gUGFyc2UgYW4gZXhwcmVzc2lvblxuICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wYXJzZUV4cHJlc3Npb24ocG9zLCBtb2RlLCBmYWxzZSk7XG4gICAgLy8gSWYgd2Ugc3VjY2VlZGVkLCBtYWtlIHN1cmUgdGhlcmUncyBhbiBFT0YgYXQgdGhlIGVuZFxuICAgIHRoaXMuZXhwZWN0KGV4cHJlc3Npb24ucGVlaywgXCJFT0ZcIik7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG59O1xuXG52YXIgZW5kT2ZFeHByZXNzaW9uID0gW1wifVwiLCBcIlxcXFxlbmRcIiwgXCJcXFxccmlnaHRcIiwgXCImXCIsIFwiXFxcXFxcXFxcIiwgXCJcXFxcY3JcIl07XG5cbi8qKlxuICogUGFyc2VzIGFuIFwiZXhwcmVzc2lvblwiLCB3aGljaCBpcyBhIGxpc3Qgb2YgYXRvbXMuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBicmVha09uSW5maXggU2hvdWxkIHRoZSBwYXJzaW5nIHN0b3Agd2hlbiB3ZSBoaXQgaW5maXhcbiAqICAgICAgICAgICAgICAgICAgbm9kZXM/IFRoaXMgaGFwcGVucyB3aGVuIGZ1bmN0aW9ucyBoYXZlIGhpZ2hlciBwcmVjZW5kZW5jZVxuICogICAgICAgICAgICAgICAgICB0aGFuIGluZml4IG5vZGVzIGluIGltcGxpY2l0IHBhcnNlcy5cbiAqXG4gKiBAcGFyYW0gez9zdHJpbmd9IGJyZWFrT25Ub2tlbiBUaGUgdG9rZW4gdGhhdCB0aGUgZXhwcmVzc2lvbiBzaG91bGQgZW5kIHdpdGgsXG4gKiAgICAgICAgICAgICAgICAgIG9yIGBudWxsYCBpZiBzb21ldGhpbmcgZWxzZSBzaG91bGQgZW5kIHRoZSBleHByZXNzaW9uLlxuICpcbiAqIEByZXR1cm4ge1BhcnNlUmVzdWx0fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKHBvcywgbW9kZSwgYnJlYWtPbkluZml4LCBicmVha09uVG9rZW4pIHtcbiAgICB2YXIgYm9keSA9IFtdO1xuICAgIHZhciBsZXggPSBudWxsO1xuICAgIC8vIEtlZXAgYWRkaW5nIGF0b21zIHRvIHRoZSBib2R5IHVudGlsIHdlIGNhbid0IHBhcnNlIGFueSBtb3JlIGF0b21zIChlaXRoZXJcbiAgICAvLyB3ZSByZWFjaGVkIHRoZSBlbmQsIGEgfSwgb3IgYSBcXHJpZ2h0KVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGxleCA9IHRoaXMubGV4ZXIubGV4KHBvcywgbW9kZSk7XG4gICAgICAgIGlmIChlbmRPZkV4cHJlc3Npb24uaW5kZXhPZihsZXgudGV4dCkgIT09IC0xKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJlYWtPblRva2VuICYmIGxleC50ZXh0ID09PSBicmVha09uVG9rZW4pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdG9tID0gdGhpcy5wYXJzZUF0b20ocG9zLCBtb2RlKTtcbiAgICAgICAgaWYgKCFhdG9tKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJlYWtPbkluZml4ICYmIGF0b20ucmVzdWx0LnR5cGUgPT09IFwiaW5maXhcIikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYm9keS5wdXNoKGF0b20ucmVzdWx0KTtcbiAgICAgICAgcG9zID0gYXRvbS5wb3NpdGlvbjtcbiAgICB9XG4gICAgdmFyIHJlcyA9IG5ldyBQYXJzZVJlc3VsdCh0aGlzLmhhbmRsZUluZml4Tm9kZXMoYm9keSwgbW9kZSksIHBvcyk7XG4gICAgcmVzLnBlZWsgPSBsZXg7XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUmV3cml0ZXMgaW5maXggb3BlcmF0b3JzIHN1Y2ggYXMgXFxvdmVyIHdpdGggY29ycmVzcG9uZGluZyBjb21tYW5kcyBzdWNoXG4gKiBhcyBcXGZyYWMuXG4gKlxuICogVGhlcmUgY2FuIG9ubHkgYmUgb25lIGluZml4IG9wZXJhdG9yIHBlciBncm91cC4gIElmIHRoZXJlJ3MgbW9yZSB0aGFuIG9uZVxuICogdGhlbiB0aGUgZXhwcmVzc2lvbiBpcyBhbWJpZ3VvdXMuICBUaGlzIGNhbiBiZSByZXNvbHZlZCBieSBhZGRpbmcge30uXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5QYXJzZXIucHJvdG90eXBlLmhhbmRsZUluZml4Tm9kZXMgPSBmdW5jdGlvbiAoYm9keSwgbW9kZSkge1xuICAgIHZhciBvdmVySW5kZXggPSAtMTtcbiAgICB2YXIgZnVuYztcbiAgICB2YXIgZnVuY05hbWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBib2R5W2ldO1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSBcImluZml4XCIpIHtcbiAgICAgICAgICAgIGlmIChvdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXCJvbmx5IG9uZSBpbmZpeCBvcGVyYXRvciBwZXIgZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXhlciwgLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3ZlckluZGV4ID0gaTtcbiAgICAgICAgICAgIGZ1bmNOYW1lID0gbm9kZS52YWx1ZS5yZXBsYWNlV2l0aDtcbiAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbnMuZnVuY3NbZnVuY05hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG92ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdmFyIG51bWVyTm9kZSwgZGVub21Ob2RlO1xuXG4gICAgICAgIHZhciBudW1lckJvZHkgPSBib2R5LnNsaWNlKDAsIG92ZXJJbmRleCk7XG4gICAgICAgIHZhciBkZW5vbUJvZHkgPSBib2R5LnNsaWNlKG92ZXJJbmRleCArIDEpO1xuXG4gICAgICAgIGlmIChudW1lckJvZHkubGVuZ3RoID09PSAxICYmIG51bWVyQm9keVswXS50eXBlID09PSBcIm9yZGdyb3VwXCIpIHtcbiAgICAgICAgICAgIG51bWVyTm9kZSA9IG51bWVyQm9keVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWVyTm9kZSA9IG5ldyBQYXJzZU5vZGUoXCJvcmRncm91cFwiLCBudW1lckJvZHksIG1vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlbm9tQm9keS5sZW5ndGggPT09IDEgJiYgZGVub21Cb2R5WzBdLnR5cGUgPT09IFwib3JkZ3JvdXBcIikge1xuICAgICAgICAgICAgZGVub21Ob2RlID0gZGVub21Cb2R5WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVub21Ob2RlID0gbmV3IFBhcnNlTm9kZShcIm9yZGdyb3VwXCIsIGRlbm9tQm9keSwgbW9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWUgPSBmdW5jLmhhbmRsZXIoZnVuY05hbWUsIG51bWVyTm9kZSwgZGVub21Ob2RlKTtcbiAgICAgICAgcmV0dXJuIFtuZXcgUGFyc2VOb2RlKHZhbHVlLnR5cGUsIHZhbHVlLCBtb2RlKV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfVxufTtcblxuLy8gVGhlIGdyZWVkaW5lc3Mgb2YgYSBzdXBlcnNjcmlwdCBvciBzdWJzY3JpcHRcbnZhciBTVVBTVUJfR1JFRURJTkVTUyA9IDE7XG5cbi8qKlxuICogSGFuZGxlIGEgc3Vic2NyaXB0IG9yIHN1cGVyc2NyaXB0IHdpdGggbmljZSBlcnJvcnMuXG4gKi9cblBhcnNlci5wcm90b3R5cGUuaGFuZGxlU3VwU3Vic2NyaXB0ID0gZnVuY3Rpb24ocG9zLCBtb2RlLCBzeW1ib2wsIG5hbWUpIHtcbiAgICB2YXIgZ3JvdXAgPSB0aGlzLnBhcnNlR3JvdXAocG9zLCBtb2RlKTtcblxuICAgIGlmICghZ3JvdXApIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICBcIkV4cGVjdGVkIGdyb3VwIGFmdGVyICdcIiArIHN5bWJvbCArIFwiJ1wiLCB0aGlzLmxleGVyLCBwb3MpO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAuaXNGdW5jdGlvbikge1xuICAgICAgICAvLyBeIGFuZCBfIGhhdmUgYSBncmVlZGluZXNzLCBzbyBoYW5kbGUgaW50ZXJhY3Rpb25zIHdpdGggZnVuY3Rpb25zJ1xuICAgICAgICAvLyBncmVlZGluZXNzXG4gICAgICAgIHZhciBmdW5jR3JlZWRpbmVzcyA9IGZ1bmN0aW9ucy5mdW5jc1tncm91cC5yZXN1bHQucmVzdWx0XS5ncmVlZGluZXNzO1xuICAgICAgICBpZiAoZnVuY0dyZWVkaW5lc3MgPiBTVVBTVUJfR1JFRURJTkVTUykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbihwb3MsIG1vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJHb3QgZnVuY3Rpb24gJ1wiICsgZ3JvdXAucmVzdWx0LnJlc3VsdCArIFwiJyB3aXRoIG5vIGFyZ3VtZW50cyBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiYXMgXCIgKyBuYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMubGV4ZXIsIHBvcyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ3JvdXAucmVzdWx0O1xuICAgIH1cbn07XG5cbi8qKlxuICogUGFyc2VzIGEgZ3JvdXAgd2l0aCBvcHRpb25hbCBzdXBlci9zdWJzY3JpcHRzLlxuICpcbiAqIEByZXR1cm4gez9QYXJzZVJlc3VsdH1cbiAqL1xuUGFyc2VyLnByb3RvdHlwZS5wYXJzZUF0b20gPSBmdW5jdGlvbihwb3MsIG1vZGUpIHtcbiAgICAvLyBUaGUgYm9keSBvZiBhbiBhdG9tIGlzIGFuIGltcGxpY2l0IGdyb3VwLCBzbyB0aGF0IHRoaW5ncyBsaWtlXG4gICAgLy8gXFxsZWZ0KHhcXHJpZ2h0KV4yIHdvcmsgY29ycmVjdGx5LlxuICAgIHZhciBiYXNlID0gdGhpcy5wYXJzZUltcGxpY2l0R3JvdXAocG9zLCBtb2RlKTtcblxuICAgIC8vIEluIHRleHQgbW9kZSwgd2UgZG9uJ3QgaGF2ZSBzdXBlcnNjcmlwdHMgb3Igc3Vic2NyaXB0c1xuICAgIGlmIChtb2RlID09PSBcInRleHRcIikge1xuICAgICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYW4gZW1wdHkgYmFzZVxuICAgIHZhciBjdXJyUG9zO1xuICAgIGlmICghYmFzZSkge1xuICAgICAgICBjdXJyUG9zID0gcG9zO1xuICAgICAgICBiYXNlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJQb3MgPSBiYXNlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHZhciBzdXBlcnNjcmlwdDtcbiAgICB2YXIgc3Vic2NyaXB0O1xuICAgIHZhciByZXN1bHQ7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgLy8gTGV4IHRoZSBmaXJzdCB0b2tlblxuICAgICAgICB2YXIgbGV4ID0gdGhpcy5sZXhlci5sZXgoY3VyclBvcywgbW9kZSk7XG5cbiAgICAgICAgaWYgKGxleC50ZXh0ID09PSBcIl5cIikge1xuICAgICAgICAgICAgLy8gV2UgZ290IGEgc3VwZXJzY3JpcHQgc3RhcnRcbiAgICAgICAgICAgIGlmIChzdXBlcnNjcmlwdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICBcIkRvdWJsZSBzdXBlcnNjcmlwdFwiLCB0aGlzLmxleGVyLCBjdXJyUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuaGFuZGxlU3VwU3Vic2NyaXB0KFxuICAgICAgICAgICAgICAgIGxleC5wb3NpdGlvbiwgbW9kZSwgbGV4LnRleHQsIFwic3VwZXJzY3JpcHRcIik7XG4gICAgICAgICAgICBjdXJyUG9zID0gcmVzdWx0LnBvc2l0aW9uO1xuICAgICAgICAgICAgc3VwZXJzY3JpcHQgPSByZXN1bHQucmVzdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKGxleC50ZXh0ID09PSBcIl9cIikge1xuICAgICAgICAgICAgLy8gV2UgZ290IGEgc3Vic2NyaXB0IHN0YXJ0XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIFwiRG91YmxlIHN1YnNjcmlwdFwiLCB0aGlzLmxleGVyLCBjdXJyUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuaGFuZGxlU3VwU3Vic2NyaXB0KFxuICAgICAgICAgICAgICAgIGxleC5wb3NpdGlvbiwgbW9kZSwgbGV4LnRleHQsIFwic3Vic2NyaXB0XCIpO1xuICAgICAgICAgICAgY3VyclBvcyA9IHJlc3VsdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHN1YnNjcmlwdCA9IHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAobGV4LnRleHQgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICAvLyBXZSBnb3QgYSBwcmltZVxuICAgICAgICAgICAgdmFyIHByaW1lID0gbmV3IFBhcnNlTm9kZShcInRleHRvcmRcIiwgXCJcXFxccHJpbWVcIiwgbW9kZSk7XG5cbiAgICAgICAgICAgIC8vIE1hbnkgcHJpbWVzIGNhbiBiZSBncm91cGVkIHRvZ2V0aGVyLCBzbyB3ZSBoYW5kbGUgdGhpcyBoZXJlXG4gICAgICAgICAgICB2YXIgcHJpbWVzID0gW3ByaW1lXTtcbiAgICAgICAgICAgIGN1cnJQb3MgPSBsZXgucG9zaXRpb247XG4gICAgICAgICAgICAvLyBLZWVwIGxleGluZyB0b2tlbnMgdW50aWwgd2UgZ2V0IHNvbWV0aGluZyB0aGF0J3Mgbm90IGEgcHJpbWVcbiAgICAgICAgICAgIHdoaWxlICgobGV4ID0gdGhpcy5sZXhlci5sZXgoY3VyclBvcywgbW9kZSkpLnRleHQgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggb25lLCBhZGQgYW5vdGhlciBwcmltZSB0byB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIHByaW1lcy5wdXNoKHByaW1lKTtcbiAgICAgICAgICAgICAgICBjdXJyUG9zID0gbGV4LnBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHV0IHRoZW0gaW50byBhbiBvcmRncm91cCBhcyB0aGUgc3VwZXJzY3JpcHRcbiAgICAgICAgICAgIHN1cGVyc2NyaXB0ID0gbmV3IFBhcnNlTm9kZShcIm9yZGdyb3VwXCIsIHByaW1lcywgbW9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBpdCB3YXNuJ3QgXiwgXywgb3IgJywgc3RvcCBwYXJzaW5nIHN1cGVyL3N1YnNjcmlwdHNcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyc2NyaXB0IHx8IHN1YnNjcmlwdCkge1xuICAgICAgICAvLyBJZiB3ZSBnb3QgZWl0aGVyIGEgc3VwZXJzY3JpcHQgb3Igc3Vic2NyaXB0LCBjcmVhdGUgYSBzdXBzdWJcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZVJlc3VsdChcbiAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUoXCJzdXBzdWJcIiwge1xuICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UgJiYgYmFzZS5yZXN1bHQsXG4gICAgICAgICAgICAgICAgc3VwOiBzdXBlcnNjcmlwdCxcbiAgICAgICAgICAgICAgICBzdWI6IHN1YnNjcmlwdFxuICAgICAgICAgICAgfSwgbW9kZSksXG4gICAgICAgICAgICBjdXJyUG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBvcmlnaW5hbCBib2R5XG4gICAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbn07XG5cbi8vIEEgbGlzdCBvZiB0aGUgc2l6ZS1jaGFuZ2luZyBmdW5jdGlvbnMsIGZvciB1c2UgaW4gcGFyc2VJbXBsaWNpdEdyb3VwXG52YXIgc2l6ZUZ1bmNzID0gW1xuICAgIFwiXFxcXHRpbnlcIiwgXCJcXFxcc2NyaXB0c2l6ZVwiLCBcIlxcXFxmb290bm90ZXNpemVcIiwgXCJcXFxcc21hbGxcIiwgXCJcXFxcbm9ybWFsc2l6ZVwiLFxuICAgIFwiXFxcXGxhcmdlXCIsIFwiXFxcXExhcmdlXCIsIFwiXFxcXExBUkdFXCIsIFwiXFxcXGh1Z2VcIiwgXCJcXFxcSHVnZVwiXG5dO1xuXG4vLyBBIGxpc3Qgb2YgdGhlIHN0eWxlLWNoYW5naW5nIGZ1bmN0aW9ucywgZm9yIHVzZSBpbiBwYXJzZUltcGxpY2l0R3JvdXBcbnZhciBzdHlsZUZ1bmNzID0gW1xuICAgIFwiXFxcXGRpc3BsYXlzdHlsZVwiLCBcIlxcXFx0ZXh0c3R5bGVcIiwgXCJcXFxcc2NyaXB0c3R5bGVcIiwgXCJcXFxcc2NyaXB0c2NyaXB0c3R5bGVcIlxuXTtcblxuLyoqXG4gKiBQYXJzZXMgYW4gaW1wbGljaXQgZ3JvdXAsIHdoaWNoIGlzIGEgZ3JvdXAgdGhhdCBzdGFydHMgYXQgdGhlIGVuZCBvZiBhXG4gKiBzcGVjaWZpZWQsIGFuZCBlbmRzIHJpZ2h0IGJlZm9yZSBhIGhpZ2hlciBleHBsaWNpdCBncm91cCBlbmRzLCBvciBhdCBFT0wuIEl0XG4gKiBpcyB1c2VkIGZvciBmdW5jdGlvbnMgdGhhdCBhcHBlYXIgdG8gYWZmZWN0IHRoZSBjdXJyZW50IHN0eWxlLCBsaWtlIFxcTGFyZ2Ugb3JcbiAqIFxcdGV4dHJtLCB3aGVyZSBpbnN0ZWFkIG9mIGtlZXBpbmcgYSBzdHlsZSB3ZSBqdXN0IHByZXRlbmQgdGhhdCB0aGVyZSBpcyBhblxuICogaW1wbGljaXQgZ3JvdXBpbmcgYWZ0ZXIgaXQgdW50aWwgdGhlIGVuZCBvZiB0aGUgZ3JvdXAuIEUuZy5cbiAqICAgc21hbGwgdGV4dCB7XFxMYXJnZSBsYXJnZSB0ZXh0fSBzbWFsbCB0ZXh0IGFnYWluXG4gKiBJdCBpcyBhbHNvIHVzZWQgZm9yIFxcbGVmdCBhbmQgXFxyaWdodCB0byBnZXQgdGhlIGNvcnJlY3QgZ3JvdXBpbmcuXG4gKlxuICogQHJldHVybiB7P1BhcnNlUmVzdWx0fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlSW1wbGljaXRHcm91cCA9IGZ1bmN0aW9uKHBvcywgbW9kZSkge1xuICAgIHZhciBzdGFydCA9IHRoaXMucGFyc2VTeW1ib2wocG9zLCBtb2RlKTtcblxuICAgIGlmICghc3RhcnQgfHwgIXN0YXJ0LnJlc3VsdCkge1xuICAgICAgICAvLyBJZiB3ZSBkaWRuJ3QgZ2V0IGFueXRoaW5nIHdlIGhhbmRsZSwgZmFsbCBiYWNrIHRvIHBhcnNlRnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbihwb3MsIG1vZGUpO1xuICAgIH1cblxuICAgIHZhciBmdW5jID0gc3RhcnQucmVzdWx0LnJlc3VsdDtcbiAgICB2YXIgYm9keTtcblxuICAgIGlmIChmdW5jID09PSBcIlxcXFxsZWZ0XCIpIHtcbiAgICAgICAgLy8gSWYgd2Ugc2VlIGEgbGVmdDpcbiAgICAgICAgLy8gUGFyc2UgdGhlIGVudGlyZSBsZWZ0IGZ1bmN0aW9uIChpbmNsdWRpbmcgdGhlIGRlbGltaXRlcilcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnBhcnNlRnVuY3Rpb24ocG9zLCBtb2RlKTtcbiAgICAgICAgLy8gUGFyc2Ugb3V0IHRoZSBpbXBsaWNpdCBib2R5XG4gICAgICAgIGJvZHkgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbihsZWZ0LnBvc2l0aW9uLCBtb2RlLCBmYWxzZSk7XG4gICAgICAgIC8vIENoZWNrIHRoZSBuZXh0IHRva2VuXG4gICAgICAgIHRoaXMuZXhwZWN0KGJvZHkucGVlaywgXCJcXFxccmlnaHRcIik7XG4gICAgICAgIHZhciByaWdodCA9IHRoaXMucGFyc2VGdW5jdGlvbihib2R5LnBvc2l0aW9uLCBtb2RlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZVJlc3VsdChcbiAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUoXCJsZWZ0cmlnaHRcIiwge1xuICAgICAgICAgICAgICAgIGJvZHk6IGJvZHkucmVzdWx0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQucmVzdWx0LnZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiByaWdodC5yZXN1bHQudmFsdWUudmFsdWVcbiAgICAgICAgICAgIH0sIG1vZGUpLFxuICAgICAgICAgICAgcmlnaHQucG9zaXRpb24pO1xuICAgIH0gZWxzZSBpZiAoZnVuYyA9PT0gXCJcXFxcYmVnaW5cIikge1xuICAgICAgICAvLyBiZWdpbi4uLmVuZCBpcyBzaW1pbGFyIHRvIGxlZnQuLi5yaWdodFxuICAgICAgICB2YXIgYmVnaW4gPSB0aGlzLnBhcnNlRnVuY3Rpb24ocG9zLCBtb2RlKTtcbiAgICAgICAgdmFyIGVudk5hbWUgPSBiZWdpbi5yZXN1bHQudmFsdWUubmFtZTtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudHMuaGFzT3duUHJvcGVydHkoZW52TmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgIFwiTm8gc3VjaCBlbnZpcm9ubWVudDogXCIgKyBlbnZOYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMubGV4ZXIsIGJlZ2luLnJlc3VsdC52YWx1ZS5uYW1lcG9zKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCdWlsZCB0aGUgZW52aXJvbm1lbnQgb2JqZWN0LiBBcmd1bWVudHMgYW5kIG90aGVyIGluZm9ybWF0aW9uIHdpbGxcbiAgICAgICAgLy8gYmUgbWFkZSBhdmFpbGFibGUgdG8gdGhlIGJlZ2luIGFuZCBlbmQgbWV0aG9kcyB1c2luZyBwcm9wZXJ0aWVzLlxuICAgICAgICB2YXIgZW52ID0gZW52aXJvbm1lbnRzW2Vudk5hbWVdO1xuICAgICAgICB2YXIgYXJncyA9IFtudWxsLCBtb2RlLCBlbnZOYW1lXTtcbiAgICAgICAgdmFyIG5ld1BvcyA9IHRoaXMucGFyc2VBcmd1bWVudHMoXG4gICAgICAgICAgICBiZWdpbi5wb3NpdGlvbiwgbW9kZSwgXCJcXFxcYmVnaW57XCIgKyBlbnZOYW1lICsgXCJ9XCIsIGVudiwgYXJncyk7XG4gICAgICAgIGFyZ3NbMF0gPSBuZXdQb3M7XG4gICAgICAgIHZhciByZXN1bHQgPSBlbnYuaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgdmFyIGVuZExleCA9IHRoaXMubGV4ZXIubGV4KHJlc3VsdC5wb3NpdGlvbiwgbW9kZSk7XG4gICAgICAgIHRoaXMuZXhwZWN0KGVuZExleCwgXCJcXFxcZW5kXCIpO1xuICAgICAgICB2YXIgZW5kID0gdGhpcy5wYXJzZUZ1bmN0aW9uKHJlc3VsdC5wb3NpdGlvbiwgbW9kZSk7XG4gICAgICAgIGlmIChlbmQucmVzdWx0LnZhbHVlLm5hbWUgIT09IGVudk5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgIFwiTWlzbWF0Y2g6IFxcXFxiZWdpbntcIiArIGVudk5hbWUgKyBcIn0gbWF0Y2hlZCBcIiArXG4gICAgICAgICAgICAgICAgXCJieSBcXFxcZW5ke1wiICsgZW5kLnJlc3VsdC52YWx1ZS5uYW1lICsgXCJ9XCIsXG4gICAgICAgICAgICAgICAgdGhpcy5sZXhlciwgZW5kLm5hbWVwb3MpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wb3NpdGlvbiA9IGVuZC5wb3NpdGlvbjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmNvbnRhaW5zKHNpemVGdW5jcywgZnVuYykpIHtcbiAgICAgICAgLy8gSWYgd2Ugc2VlIGEgc2l6aW5nIGZ1bmN0aW9uLCBwYXJzZSBvdXQgdGhlIGltcGxpY3QgYm9keVxuICAgICAgICBib2R5ID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oc3RhcnQucmVzdWx0LnBvc2l0aW9uLCBtb2RlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICBuZXcgUGFyc2VOb2RlKFwic2l6aW5nXCIsIHtcbiAgICAgICAgICAgICAgICAvLyBGaWd1cmUgb3V0IHdoYXQgc2l6ZSB0byB1c2UgYmFzZWQgb24gdGhlIGxpc3Qgb2YgZnVuY3Rpb25zIGFib3ZlXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJzaXplXCIgKyAodXRpbHMuaW5kZXhPZihzaXplRnVuY3MsIGZ1bmMpICsgMSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGJvZHkucmVzdWx0XG4gICAgICAgICAgICB9LCBtb2RlKSxcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24pO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuY29udGFpbnMoc3R5bGVGdW5jcywgZnVuYykpIHtcbiAgICAgICAgLy8gSWYgd2Ugc2VlIGEgc3R5bGluZyBmdW5jdGlvbiwgcGFyc2Ugb3V0IHRoZSBpbXBsaWN0IGJvZHlcbiAgICAgICAgYm9keSA9IHRoaXMucGFyc2VFeHByZXNzaW9uKHN0YXJ0LnJlc3VsdC5wb3NpdGlvbiwgbW9kZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICBuZXcgUGFyc2VOb2RlKFwic3R5bGluZ1wiLCB7XG4gICAgICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGF0IHN0eWxlIHRvIHVzZSBieSBwdWxsaW5nIG91dCB0aGUgc3R5bGUgZnJvbVxuICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBuYW1lXG4gICAgICAgICAgICAgICAgc3R5bGU6IGZ1bmMuc2xpY2UoMSwgZnVuYy5sZW5ndGggLSA1KSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYm9keS5yZXN1bHRcbiAgICAgICAgICAgIH0sIG1vZGUpLFxuICAgICAgICAgICAgYm9keS5wb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVmZXIgdG8gcGFyc2VGdW5jdGlvbiBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uIHdlIGhhbmRsZVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKHBvcywgbW9kZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBQYXJzZXMgYW4gZW50aXJlIGZ1bmN0aW9uLCBpbmNsdWRpbmcgaXRzIGJhc2UgYW5kIGFsbCBvZiBpdHMgYXJndW1lbnRzXG4gKlxuICogQHJldHVybiB7P1BhcnNlUmVzdWx0fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlRnVuY3Rpb24gPSBmdW5jdGlvbihwb3MsIG1vZGUpIHtcbiAgICB2YXIgYmFzZUdyb3VwID0gdGhpcy5wYXJzZUdyb3VwKHBvcywgbW9kZSk7XG5cbiAgICBpZiAoYmFzZUdyb3VwKSB7XG4gICAgICAgIGlmIChiYXNlR3JvdXAuaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGZ1bmMgPSBiYXNlR3JvdXAucmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgIHZhciBmdW5jRGF0YSA9IGZ1bmN0aW9ucy5mdW5jc1tmdW5jXTtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcInRleHRcIiAmJiAhZnVuY0RhdGEuYWxsb3dlZEluVGV4dCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICBcIkNhbid0IHVzZSBmdW5jdGlvbiAnXCIgKyBmdW5jICsgXCInIGluIHRleHQgbW9kZVwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxleGVyLCBiYXNlR3JvdXAucG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtmdW5jXTtcbiAgICAgICAgICAgIHZhciBuZXdQb3MgPSB0aGlzLnBhcnNlQXJndW1lbnRzKFxuICAgICAgICAgICAgICAgIGJhc2VHcm91cC5yZXN1bHQucG9zaXRpb24sIG1vZGUsIGZ1bmMsIGZ1bmNEYXRhLCBhcmdzKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmdW5jdGlvbnMuZnVuY3NbZnVuY10uaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICAgICAgbmV3IFBhcnNlTm9kZShyZXN1bHQudHlwZSwgcmVzdWx0LCBtb2RlKSxcbiAgICAgICAgICAgICAgICBuZXdQb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGJhc2VHcm91cC5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogUGFyc2VzIHRoZSBhcmd1bWVudHMgb2YgYSBmdW5jdGlvbiBvciBlbnZpcm9ubWVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jICBcIlxcbmFtZVwiIG9yIFwiXFxiZWdpbntuYW1lfVwiXG4gKiBAcGFyYW0ge3tudW1BcmdzOm51bWJlcixudW1PcHRpb25hbEFyZ3M6bnVtYmVyfHVuZGVmaW5lZH19IGZ1bmNEYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzICBsaXN0IG9mIGFyZ3VtZW50cyB0byB3aGljaCBuZXcgb25lcyB3aWxsIGJlIHB1c2hlZFxuICogQHJldHVybiB0aGUgcG9zaXRpb24gYWZ0ZXIgYWxsIGFyZ3VtZW50cyBoYXZlIGJlZW4gcGFyc2VkXG4gKi9cblBhcnNlci5wcm90b3R5cGUucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbihwb3MsIG1vZGUsIGZ1bmMsIGZ1bmNEYXRhLCBhcmdzKSB7XG4gICAgdmFyIHRvdGFsQXJncyA9IGZ1bmNEYXRhLm51bUFyZ3MgKyBmdW5jRGF0YS5udW1PcHRpb25hbEFyZ3M7XG4gICAgaWYgKHRvdGFsQXJncyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cblxuICAgIHZhciBuZXdQb3MgPSBwb3M7XG4gICAgdmFyIGJhc2VHcmVlZGluZXNzID0gZnVuY0RhdGEuZ3JlZWRpbmVzcztcbiAgICB2YXIgcG9zaXRpb25zID0gW25ld1Bvc107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsQXJnczsgaSsrKSB7XG4gICAgICAgIHZhciBhcmdUeXBlID0gZnVuY0RhdGEuYXJnVHlwZXMgJiYgZnVuY0RhdGEuYXJnVHlwZXNbaV07XG4gICAgICAgIHZhciBhcmc7XG4gICAgICAgIGlmIChpIDwgZnVuY0RhdGEubnVtT3B0aW9uYWxBcmdzKSB7XG4gICAgICAgICAgICBpZiAoYXJnVHlwZSkge1xuICAgICAgICAgICAgICAgIGFyZyA9IHRoaXMucGFyc2VTcGVjaWFsR3JvdXAobmV3UG9zLCBhcmdUeXBlLCBtb2RlLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJnID0gdGhpcy5wYXJzZU9wdGlvbmFsR3JvdXAobmV3UG9zLCBtb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYXJnKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKG51bGwpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKG5ld1Bvcyk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYXJnVHlwZSkge1xuICAgICAgICAgICAgICAgIGFyZyA9IHRoaXMucGFyc2VTcGVjaWFsR3JvdXAobmV3UG9zLCBhcmdUeXBlLCBtb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJnID0gdGhpcy5wYXJzZUdyb3VwKG5ld1BvcywgbW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFyZykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICBcIkV4cGVjdGVkIGdyb3VwIGFmdGVyICdcIiArIGZ1bmMgKyBcIidcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXhlciwgbmV3UG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgYXJnTm9kZTtcbiAgICAgICAgaWYgKGFyZy5pc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYXJnR3JlZWRpbmVzcyA9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zLmZ1bmNzW2FyZy5yZXN1bHQucmVzdWx0XS5ncmVlZGluZXNzO1xuICAgICAgICAgICAgaWYgKGFyZ0dyZWVkaW5lc3MgPiBiYXNlR3JlZWRpbmVzcykge1xuICAgICAgICAgICAgICAgIGFyZ05vZGUgPSB0aGlzLnBhcnNlRnVuY3Rpb24obmV3UG9zLCBtb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIFwiR290IGZ1bmN0aW9uICdcIiArIGFyZy5yZXN1bHQucmVzdWx0ICsgXCInIGFzIFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJhcmd1bWVudCB0byAnXCIgKyBmdW5jICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV4ZXIsIGFyZy5yZXN1bHQucG9zaXRpb24gLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZ05vZGUgPSBhcmcucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGFyZ3MucHVzaChhcmdOb2RlLnJlc3VsdCk7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKGFyZ05vZGUucG9zaXRpb24pO1xuICAgICAgICBuZXdQb3MgPSBhcmdOb2RlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIGFyZ3MucHVzaChwb3NpdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ld1Bvcztcbn07XG5cblxuLyoqXG4gKiBQYXJzZXMgYSBncm91cCB3aGVuIHRoZSBtb2RlIGlzIGNoYW5naW5nLiBUYWtlcyBhIHBvc2l0aW9uLCBhIG5ldyBtb2RlLCBhbmRcbiAqIGFuIG91dGVyIG1vZGUgdGhhdCBpcyB1c2VkIHRvIHBhcnNlIHRoZSBvdXRzaWRlLlxuICpcbiAqIEByZXR1cm4gez9QYXJzZUZ1bmNPckFyZ3VtZW50fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlU3BlY2lhbEdyb3VwID0gZnVuY3Rpb24ocG9zLCBtb2RlLCBvdXRlck1vZGUsIG9wdGlvbmFsKSB7XG4gICAgLy8gSGFuZGxlIGBvcmlnaW5hbGAgYXJnVHlwZXNcbiAgICBpZiAobW9kZSA9PT0gXCJvcmlnaW5hbFwiKSB7XG4gICAgICAgIG1vZGUgPSBvdXRlck1vZGU7XG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09IFwiY29sb3JcIiB8fCBtb2RlID09PSBcInNpemVcIikge1xuICAgICAgICAvLyBjb2xvciBhbmQgc2l6ZSBtb2RlcyBhcmUgc3BlY2lhbCBiZWNhdXNlIHRoZXkgc2hvdWxkIGhhdmUgYnJhY2VzIGFuZFxuICAgICAgICAvLyBzaG91bGQgb25seSBsZXggYSBzaW5nbGUgc3ltYm9sIGluc2lkZVxuICAgICAgICB2YXIgb3BlbkJyYWNlID0gdGhpcy5sZXhlci5sZXgocG9zLCBvdXRlck1vZGUpO1xuICAgICAgICBpZiAob3B0aW9uYWwgJiYgb3BlbkJyYWNlLnRleHQgIT09IFwiW1wiKSB7XG4gICAgICAgICAgICAvLyBvcHRpb25hbCBhcmd1bWVudHMgc2hvdWxkIHJldHVybiBudWxsIGlmIHRoZXkgZG9uJ3QgZXhpc3RcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXhwZWN0KG9wZW5CcmFjZSwgb3B0aW9uYWwgPyBcIltcIiA6IFwie1wiKTtcbiAgICAgICAgdmFyIGlubmVyID0gdGhpcy5sZXhlci5sZXgob3BlbkJyYWNlLnBvc2l0aW9uLCBtb2RlKTtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIGlmIChtb2RlID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgIGRhdGEgPSBpbm5lci50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IGlubmVyLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsb3NlQnJhY2UgPSB0aGlzLmxleGVyLmxleChpbm5lci5wb3NpdGlvbiwgb3V0ZXJNb2RlKTtcbiAgICAgICAgdGhpcy5leHBlY3QoY2xvc2VCcmFjZSwgb3B0aW9uYWwgPyBcIl1cIiA6IFwifVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZUZ1bmNPckFyZ3VtZW50KFxuICAgICAgICAgICAgbmV3IFBhcnNlUmVzdWx0KFxuICAgICAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUobW9kZSwgZGF0YSwgb3V0ZXJNb2RlKSxcbiAgICAgICAgICAgICAgICBjbG9zZUJyYWNlLnBvc2l0aW9uKSxcbiAgICAgICAgICAgIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgIC8vIHRleHQgbW9kZSBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgc2hvdWxkIGlnbm9yZSB0aGUgd2hpdGVzcGFjZSBiZWZvcmVcbiAgICAgICAgLy8gaXRcbiAgICAgICAgdmFyIHdoaXRlc3BhY2UgPSB0aGlzLmxleGVyLmxleChwb3MsIFwid2hpdGVzcGFjZVwiKTtcbiAgICAgICAgcG9zID0gd2hpdGVzcGFjZS5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcHRpb25hbEdyb3VwKHBvcywgbW9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VHcm91cChwb3MsIG1vZGUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUGFyc2VzIGEgZ3JvdXAsIHdoaWNoIGlzIGVpdGhlciBhIHNpbmdsZSBudWNsZXVzIChsaWtlIFwieFwiKSBvciBhbiBleHByZXNzaW9uXG4gKiBpbiBicmFjZXMgKGxpa2UgXCJ7eCt5fVwiKVxuICpcbiAqIEByZXR1cm4gez9QYXJzZUZ1bmNPckFyZ3VtZW50fVxuICovXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlR3JvdXAgPSBmdW5jdGlvbihwb3MsIG1vZGUpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmxleGVyLmxleChwb3MsIG1vZGUpO1xuICAgIC8vIFRyeSB0byBwYXJzZSBhbiBvcGVuIGJyYWNlXG4gICAgaWYgKHN0YXJ0LnRleHQgPT09IFwie1wiKSB7XG4gICAgICAgIC8vIElmIHdlIGdldCBhIGJyYWNlLCBwYXJzZSBhbiBleHByZXNzaW9uXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oc3RhcnQucG9zaXRpb24sIG1vZGUsIGZhbHNlKTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGdldCBhIGNsb3NlIGJyYWNlXG4gICAgICAgIHZhciBjbG9zZUJyYWNlID0gdGhpcy5sZXhlci5sZXgoZXhwcmVzc2lvbi5wb3NpdGlvbiwgbW9kZSk7XG4gICAgICAgIHRoaXMuZXhwZWN0KGNsb3NlQnJhY2UsIFwifVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZUZ1bmNPckFyZ3VtZW50KFxuICAgICAgICAgICAgbmV3IFBhcnNlUmVzdWx0KFxuICAgICAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUoXCJvcmRncm91cFwiLCBleHByZXNzaW9uLnJlc3VsdCwgbW9kZSksXG4gICAgICAgICAgICAgICAgY2xvc2VCcmFjZS5wb3NpdGlvbiksXG4gICAgICAgICAgICBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJldHVybiBhIG51Y2xldXNcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTeW1ib2wocG9zLCBtb2RlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhIGdyb3VwLCB3aGljaCBpcyBhbiBleHByZXNzaW9uIGluIGJyYWNrZXRzIChsaWtlIFwiW3greV1cIilcbiAqXG4gKiBAcmV0dXJuIHs/UGFyc2VGdW5jT3JBcmd1bWVudH1cbiAqL1xuUGFyc2VyLnByb3RvdHlwZS5wYXJzZU9wdGlvbmFsR3JvdXAgPSBmdW5jdGlvbihwb3MsIG1vZGUpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmxleGVyLmxleChwb3MsIG1vZGUpO1xuICAgIC8vIFRyeSB0byBwYXJzZSBhbiBvcGVuIGJyYWNrZXRcbiAgICBpZiAoc3RhcnQudGV4dCA9PT0gXCJbXCIpIHtcbiAgICAgICAgLy8gSWYgd2UgZ2V0IGEgYnJhY2UsIHBhcnNlIGFuIGV4cHJlc3Npb25cbiAgICAgICAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLnBhcnNlRXhwcmVzc2lvbihzdGFydC5wb3NpdGlvbiwgbW9kZSwgZmFsc2UsIFwiXVwiKTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGdldCBhIGNsb3NlIGJyYWNrZXRcbiAgICAgICAgdmFyIGNsb3NlQnJhY2tldCA9IHRoaXMubGV4ZXIubGV4KGV4cHJlc3Npb24ucG9zaXRpb24sIG1vZGUpO1xuICAgICAgICB0aGlzLmV4cGVjdChjbG9zZUJyYWNrZXQsIFwiXVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZUZ1bmNPckFyZ3VtZW50KFxuICAgICAgICAgICAgbmV3IFBhcnNlUmVzdWx0KFxuICAgICAgICAgICAgICAgIG5ldyBQYXJzZU5vZGUoXCJvcmRncm91cFwiLCBleHByZXNzaW9uLnJlc3VsdCwgbW9kZSksXG4gICAgICAgICAgICAgICAgY2xvc2VCcmFja2V0LnBvc2l0aW9uKSxcbiAgICAgICAgICAgIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBudWxsLFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgc2luZ2xlIHN5bWJvbCBvdXQgb2YgdGhlIHN0cmluZy4gSGVyZSwgd2UgaGFuZGxlIGJvdGggdGhlIGZ1bmN0aW9uc1xuICogd2UgaGF2ZSBkZWZpbmVkLCBhcyB3ZWxsIGFzIHRoZSBzaW5nbGUgY2hhcmFjdGVyIHN5bWJvbHNcbiAqXG4gKiBAcmV0dXJuIHs/UGFyc2VGdW5jT3JBcmd1bWVudH1cbiAqL1xuUGFyc2VyLnByb3RvdHlwZS5wYXJzZVN5bWJvbCA9IGZ1bmN0aW9uKHBvcywgbW9kZSkge1xuICAgIHZhciBudWNsZXVzID0gdGhpcy5sZXhlci5sZXgocG9zLCBtb2RlKTtcblxuICAgIGlmIChmdW5jdGlvbnMuZnVuY3NbbnVjbGV1cy50ZXh0XSkge1xuICAgICAgICAvLyBJZiB0aGVyZSBleGlzdHMgYSBmdW5jdGlvbiB3aXRoIHRoaXMgbmFtZSwgd2UgcmV0dXJuIHRoZSBmdW5jdGlvbiBhbmRcbiAgICAgICAgLy8gc2F5IHRoYXQgaXQgaXMgYSBmdW5jdGlvbi5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZUZ1bmNPckFyZ3VtZW50KFxuICAgICAgICAgICAgbmV3IFBhcnNlUmVzdWx0KG51Y2xldXMudGV4dCwgbnVjbGV1cy5wb3NpdGlvbiksXG4gICAgICAgICAgICB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHN5bWJvbHNbbW9kZV1bbnVjbGV1cy50ZXh0XSkge1xuICAgICAgICAvLyBPdGhlcndpc2UgaWYgdGhpcyBpcyBhIG5vLWFyZ3VtZW50IGZ1bmN0aW9uLCBmaW5kIHRoZSB0eXBlIGl0XG4gICAgICAgIC8vIGNvcnJlc3BvbmRzIHRvIGluIHRoZSBzeW1ib2xzIG1hcFxuICAgICAgICByZXR1cm4gbmV3IFBhcnNlRnVuY09yQXJndW1lbnQoXG4gICAgICAgICAgICBuZXcgUGFyc2VSZXN1bHQoXG4gICAgICAgICAgICAgICAgbmV3IFBhcnNlTm9kZShzeW1ib2xzW21vZGVdW251Y2xldXMudGV4dF0uZ3JvdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWNsZXVzLnRleHQsIG1vZGUpLFxuICAgICAgICAgICAgICAgIG51Y2xldXMucG9zaXRpb24pLFxuICAgICAgICAgICAgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUuUGFyc2VOb2RlID0gUGFyc2VOb2RlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlcjtcbiIsIi8qKlxuICogVGhpcyBpcyBhIG1vZHVsZSBmb3Igc3RvcmluZyBzZXR0aW5ncyBwYXNzZWQgaW50byBLYVRlWC4gSXQgY29ycmVjdGx5IGhhbmRsZXNcbiAqIGRlZmF1bHQgc2V0dGluZ3MuXG4gKi9cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGdldHRpbmcgYSBkZWZhdWx0IHZhbHVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gZ2V0KG9wdGlvbiwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIG9wdGlvbiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogb3B0aW9uO1xufVxuXG4vKipcbiAqIFRoZSBtYWluIFNldHRpbmdzIG9iamVjdFxuICpcbiAqIFRoZSBjdXJyZW50IG9wdGlvbnMgc3RvcmVkIGFyZTpcbiAqICAtIGRpc3BsYXlNb2RlOiBXaGV0aGVyIHRoZSBleHByZXNzaW9uIHNob3VsZCBiZSB0eXBlc2V0IGJ5IGRlZmF1bHQgaW5cbiAqICAgICAgICAgICAgICAgICB0ZXh0c3R5bGUgb3IgZGlzcGxheXN0eWxlIChkZWZhdWx0IGZhbHNlKVxuICovXG5mdW5jdGlvbiBTZXR0aW5ncyhvcHRpb25zKSB7XG4gICAgLy8gYWxsb3cgbnVsbCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5kaXNwbGF5TW9kZSA9IGdldChvcHRpb25zLmRpc3BsYXlNb2RlLCBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3M7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBpbmZvcm1hdGlvbiBhbmQgY2xhc3NlcyBmb3IgdGhlIHZhcmlvdXMga2luZHMgb2Ygc3R5bGVzXG4gKiB1c2VkIGluIFRlWC4gSXQgcHJvdmlkZXMgYSBnZW5lcmljIGBTdHlsZWAgY2xhc3MsIHdoaWNoIGhvbGRzIGluZm9ybWF0aW9uXG4gKiBhYm91dCBhIHNwZWNpZmljIHN0eWxlLiBJdCB0aGVuIHByb3ZpZGVzIGluc3RhbmNlcyBvZiBhbGwgdGhlIGRpZmZlcmVudCBraW5kc1xuICogb2Ygc3R5bGVzIHBvc3NpYmxlLCBhbmQgcHJvdmlkZXMgZnVuY3Rpb25zIHRvIG1vdmUgYmV0d2VlbiB0aGVtIGFuZCBnZXRcbiAqIGluZm9ybWF0aW9uIGFib3V0IHRoZW0uXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFpbiBzdHlsZSBjbGFzcy4gQ29udGFpbnMgYSB1bmlxdWUgaWQgZm9yIHRoZSBzdHlsZSwgYSBzaXplICh3aGljaCBpc1xuICogdGhlIHNhbWUgZm9yIGNyYW1wZWQgYW5kIHVuY3JhbXBlZCB2ZXJzaW9uIG9mIGEgc3R5bGUpLCBhIGNyYW1wZWQgZmxhZywgYW5kIGFcbiAqIHNpemUgbXVsdGlwbGllciwgd2hpY2ggZ2l2ZXMgdGhlIHNpemUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgc3R5bGUgYW5kXG4gKiB0ZXh0c3R5bGUuXG4gKi9cbmZ1bmN0aW9uIFN0eWxlKGlkLCBzaXplLCBtdWx0aXBsaWVyLCBjcmFtcGVkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5jcmFtcGVkID0gY3JhbXBlZDtcbiAgICB0aGlzLnNpemVNdWx0aXBsaWVyID0gbXVsdGlwbGllcjtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHN0eWxlIG9mIGEgc3VwZXJzY3JpcHQgZ2l2ZW4gYSBiYXNlIGluIHRoZSBjdXJyZW50IHN0eWxlLlxuICovXG5TdHlsZS5wcm90b3R5cGUuc3VwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN0eWxlc1tzdXBbdGhpcy5pZF1dO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHN0eWxlIG9mIGEgc3Vic2NyaXB0IGdpdmVuIGEgYmFzZSBpbiB0aGUgY3VycmVudCBzdHlsZS5cbiAqL1xuU3R5bGUucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzdHlsZXNbc3ViW3RoaXMuaWRdXTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBzdHlsZSBvZiBhIGZyYWN0aW9uIG51bWVyYXRvciBnaXZlbiB0aGUgZnJhY3Rpb24gaW4gdGhlIGN1cnJlbnRcbiAqIHN0eWxlLlxuICovXG5TdHlsZS5wcm90b3R5cGUuZnJhY051bSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzdHlsZXNbZnJhY051bVt0aGlzLmlkXV07XG59O1xuXG4vKipcbiAqIEdldCB0aGUgc3R5bGUgb2YgYSBmcmFjdGlvbiBkZW5vbWluYXRvciBnaXZlbiB0aGUgZnJhY3Rpb24gaW4gdGhlIGN1cnJlbnRcbiAqIHN0eWxlLlxuICovXG5TdHlsZS5wcm90b3R5cGUuZnJhY0RlbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzdHlsZXNbZnJhY0Rlblt0aGlzLmlkXV07XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY3JhbXBlZCB2ZXJzaW9uIG9mIGEgc3R5bGUgKGluIHBhcnRpY3VsYXIsIGNyYW1waW5nIGEgY3JhbXBlZCBzdHlsZVxuICogZG9lc24ndCBjaGFuZ2UgdGhlIHN0eWxlKS5cbiAqL1xuU3R5bGUucHJvdG90eXBlLmNyYW1wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN0eWxlc1tjcmFtcFt0aGlzLmlkXV07XG59O1xuXG4vKipcbiAqIEhUTUwgY2xhc3MgbmFtZSwgbGlrZSBcImRpc3BsYXlzdHlsZSBjcmFtcGVkXCJcbiAqL1xuU3R5bGUucHJvdG90eXBlLmNscyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzaXplTmFtZXNbdGhpcy5zaXplXSArICh0aGlzLmNyYW1wZWQgPyBcIiBjcmFtcGVkXCIgOiBcIiB1bmNyYW1wZWRcIik7XG59O1xuXG4vKipcbiAqIEhUTUwgUmVzZXQgY2xhc3MgbmFtZSwgbGlrZSBcInJlc2V0LXRleHRzdHlsZVwiXG4gKi9cblN0eWxlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiByZXNldE5hbWVzW3RoaXMuc2l6ZV07XG59O1xuXG4vLyBJRHMgb2YgdGhlIGRpZmZlcmVudCBzdHlsZXNcbnZhciBEID0gMDtcbnZhciBEYyA9IDE7XG52YXIgVCA9IDI7XG52YXIgVGMgPSAzO1xudmFyIFMgPSA0O1xudmFyIFNjID0gNTtcbnZhciBTUyA9IDY7XG52YXIgU1NjID0gNztcblxuLy8gU3RyaW5nIG5hbWVzIGZvciB0aGUgZGlmZmVyZW50IHNpemVzXG52YXIgc2l6ZU5hbWVzID0gW1xuICAgIFwiZGlzcGxheXN0eWxlIHRleHRzdHlsZVwiLFxuICAgIFwidGV4dHN0eWxlXCIsXG4gICAgXCJzY3JpcHRzdHlsZVwiLFxuICAgIFwic2NyaXB0c2NyaXB0c3R5bGVcIlxuXTtcblxuLy8gUmVzZXQgbmFtZXMgZm9yIHRoZSBkaWZmZXJlbnQgc2l6ZXNcbnZhciByZXNldE5hbWVzID0gW1xuICAgIFwicmVzZXQtdGV4dHN0eWxlXCIsXG4gICAgXCJyZXNldC10ZXh0c3R5bGVcIixcbiAgICBcInJlc2V0LXNjcmlwdHN0eWxlXCIsXG4gICAgXCJyZXNldC1zY3JpcHRzY3JpcHRzdHlsZVwiXG5dO1xuXG4vLyBJbnN0YW5jZXMgb2YgdGhlIGRpZmZlcmVudCBzdHlsZXNcbnZhciBzdHlsZXMgPSBbXG4gICAgbmV3IFN0eWxlKEQsIDAsIDEuMCwgZmFsc2UpLFxuICAgIG5ldyBTdHlsZShEYywgMCwgMS4wLCB0cnVlKSxcbiAgICBuZXcgU3R5bGUoVCwgMSwgMS4wLCBmYWxzZSksXG4gICAgbmV3IFN0eWxlKFRjLCAxLCAxLjAsIHRydWUpLFxuICAgIG5ldyBTdHlsZShTLCAyLCAwLjcsIGZhbHNlKSxcbiAgICBuZXcgU3R5bGUoU2MsIDIsIDAuNywgdHJ1ZSksXG4gICAgbmV3IFN0eWxlKFNTLCAzLCAwLjUsIGZhbHNlKSxcbiAgICBuZXcgU3R5bGUoU1NjLCAzLCAwLjUsIHRydWUpXG5dO1xuXG4vLyBMb29rdXAgdGFibGVzIGZvciBzd2l0Y2hpbmcgZnJvbSBvbmUgc3R5bGUgdG8gYW5vdGhlclxudmFyIHN1cCA9IFtTLCBTYywgUywgU2MsIFNTLCBTU2MsIFNTLCBTU2NdO1xudmFyIHN1YiA9IFtTYywgU2MsIFNjLCBTYywgU1NjLCBTU2MsIFNTYywgU1NjXTtcbnZhciBmcmFjTnVtID0gW1QsIFRjLCBTLCBTYywgU1MsIFNTYywgU1MsIFNTY107XG52YXIgZnJhY0RlbiA9IFtUYywgVGMsIFNjLCBTYywgU1NjLCBTU2MsIFNTYywgU1NjXTtcbnZhciBjcmFtcCA9IFtEYywgRGMsIFRjLCBUYywgU2MsIFNjLCBTU2MsIFNTY107XG5cbi8vIFdlIG9ubHkgZXhwb3J0IHNvbWUgb2YgdGhlIHN0eWxlcy4gQWxzbywgd2UgZG9uJ3QgZXhwb3J0IHRoZSBgU3R5bGVgIGNsYXNzIHNvXG4vLyBubyBtb3JlIHN0eWxlcyBjYW4gYmUgZ2VuZXJhdGVkLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgRElTUExBWTogc3R5bGVzW0RdLFxuICAgIFRFWFQ6IHN0eWxlc1tUXSxcbiAgICBTQ1JJUFQ6IHN0eWxlc1tTXSxcbiAgICBTQ1JJUFRTQ1JJUFQ6IHN0eWxlc1tTU11cbn07XG4iLCIvKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGdlbmVyYWwgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGJ1aWxkaW5nXG4gKiBkaWZmZXJlbnQga2luZHMgb2YgZG9tVHJlZSBub2RlcyBpbiBhIGNvbnNpc3RlbnQgbWFubmVyLlxuICovXG5cbnZhciBkb21UcmVlID0gcmVxdWlyZShcIi4vZG9tVHJlZVwiKTtcbnZhciBmb250TWV0cmljcyA9IHJlcXVpcmUoXCIuL2ZvbnRNZXRyaWNzXCIpO1xudmFyIHN5bWJvbHMgPSByZXF1aXJlKFwiLi9zeW1ib2xzXCIpO1xuXG4vKipcbiAqIE1ha2VzIGEgc3ltYm9sTm9kZSBhZnRlciB0cmFuc2xhdGlvbiB2aWEgdGhlIGxpc3Qgb2Ygc3ltYm9scyBpbiBzeW1ib2xzLmpzLlxuICogQ29ycmVjdGx5IHB1bGxzIG91dCBtZXRyaWNzIGZvciB0aGUgY2hhcmFjdGVyLCBhbmQgb3B0aW9uYWxseSB0YWtlcyBhIGxpc3Qgb2ZcbiAqIGNsYXNzZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIG5vZGUuXG4gKi9cbnZhciBtYWtlU3ltYm9sID0gZnVuY3Rpb24odmFsdWUsIHN0eWxlLCBtb2RlLCBjb2xvciwgY2xhc3Nlcykge1xuICAgIC8vIFJlcGxhY2UgdGhlIHZhbHVlIHdpdGggaXRzIHJlcGxhY2VkIHZhbHVlIGZyb20gc3ltYm9sLmpzXG4gICAgaWYgKHN5bWJvbHNbbW9kZV1bdmFsdWVdICYmIHN5bWJvbHNbbW9kZV1bdmFsdWVdLnJlcGxhY2UpIHtcbiAgICAgICAgdmFsdWUgPSBzeW1ib2xzW21vZGVdW3ZhbHVlXS5yZXBsYWNlO1xuICAgIH1cblxuICAgIHZhciBtZXRyaWNzID0gZm9udE1ldHJpY3MuZ2V0Q2hhcmFjdGVyTWV0cmljcyh2YWx1ZSwgc3R5bGUpO1xuXG4gICAgdmFyIHN5bWJvbE5vZGU7XG4gICAgaWYgKG1ldHJpY3MpIHtcbiAgICAgICAgc3ltYm9sTm9kZSA9IG5ldyBkb21UcmVlLnN5bWJvbE5vZGUoXG4gICAgICAgICAgICB2YWx1ZSwgbWV0cmljcy5oZWlnaHQsIG1ldHJpY3MuZGVwdGgsIG1ldHJpY3MuaXRhbGljLCBtZXRyaWNzLnNrZXcsXG4gICAgICAgICAgICBjbGFzc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPKGVtaWx5KTogRmlndXJlIG91dCBhIGdvb2Qgd2F5IHRvIG9ubHkgcHJpbnQgdGhpcyBpbiBkZXZlbG9wbWVudFxuICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIk5vIGNoYXJhY3RlciBtZXRyaWNzIGZvciAnXCIgKyB2YWx1ZSArIFwiJyBpbiBzdHlsZSAnXCIgK1xuICAgICAgICAgICAgICAgIHN0eWxlICsgXCInXCIpO1xuICAgICAgICBzeW1ib2xOb2RlID0gbmV3IGRvbVRyZWUuc3ltYm9sTm9kZSh2YWx1ZSwgMCwgMCwgMCwgMCwgY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIHN5bWJvbE5vZGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ltYm9sTm9kZTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBzeW1ib2wgaW4gdGhlIGl0YWxpYyBtYXRoIGZvbnQuXG4gKi9cbnZhciBtYXRoaXQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSwgY29sb3IsIGNsYXNzZXMpIHtcbiAgICByZXR1cm4gbWFrZVN5bWJvbChcbiAgICAgICAgdmFsdWUsIFwiTWF0aC1JdGFsaWNcIiwgbW9kZSwgY29sb3IsIGNsYXNzZXMuY29uY2F0KFtcIm1hdGhpdFwiXSkpO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIHN5bWJvbCBpbiB0aGUgdXByaWdodCByb21hbiBmb250LlxuICovXG52YXIgbWF0aHJtID0gZnVuY3Rpb24odmFsdWUsIG1vZGUsIGNvbG9yLCBjbGFzc2VzKSB7XG4gICAgLy8gRGVjaWRlIHdoYXQgZm9udCB0byByZW5kZXIgdGhlIHN5bWJvbCBpbiBieSBpdHMgZW50cnkgaW4gdGhlIHN5bWJvbHNcbiAgICAvLyB0YWJsZS5cbiAgICBpZiAoc3ltYm9sc1ttb2RlXVt2YWx1ZV0uZm9udCA9PT0gXCJtYWluXCIpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VTeW1ib2wodmFsdWUsIFwiTWFpbi1SZWd1bGFyXCIsIG1vZGUsIGNvbG9yLCBjbGFzc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWFrZVN5bWJvbChcbiAgICAgICAgICAgIHZhbHVlLCBcIkFNUy1SZWd1bGFyXCIsIG1vZGUsIGNvbG9yLCBjbGFzc2VzLmNvbmNhdChbXCJhbXNybVwiXSkpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBoZWlnaHQsIGRlcHRoLCBhbmQgbWF4Rm9udFNpemUgb2YgYW4gZWxlbWVudCBiYXNlZCBvbiBpdHNcbiAqIGNoaWxkcmVuLlxuICovXG52YXIgc2l6ZUVsZW1lbnRGcm9tQ2hpbGRyZW4gPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgdmFyIGhlaWdodCA9IDA7XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICB2YXIgbWF4Rm9udFNpemUgPSAwO1xuXG4gICAgaWYgKGVsZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZWxlbS5jaGlsZHJlbltpXS5oZWlnaHQgPiBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBlbGVtLmNoaWxkcmVuW2ldLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtLmNoaWxkcmVuW2ldLmRlcHRoID4gZGVwdGgpIHtcbiAgICAgICAgICAgICAgICBkZXB0aCA9IGVsZW0uY2hpbGRyZW5baV0uZGVwdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbS5jaGlsZHJlbltpXS5tYXhGb250U2l6ZSA+IG1heEZvbnRTaXplKSB7XG4gICAgICAgICAgICAgICAgbWF4Rm9udFNpemUgPSBlbGVtLmNoaWxkcmVuW2ldLm1heEZvbnRTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxlbS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgZWxlbS5kZXB0aCA9IGRlcHRoO1xuICAgIGVsZW0ubWF4Rm9udFNpemUgPSBtYXhGb250U2l6ZTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBzcGFuIHdpdGggdGhlIGdpdmVuIGxpc3Qgb2YgY2xhc3NlcywgbGlzdCBvZiBjaGlsZHJlbiwgYW5kIGNvbG9yLlxuICovXG52YXIgbWFrZVNwYW4gPSBmdW5jdGlvbihjbGFzc2VzLCBjaGlsZHJlbiwgY29sb3IpIHtcbiAgICB2YXIgc3BhbiA9IG5ldyBkb21UcmVlLnNwYW4oY2xhc3NlcywgY2hpbGRyZW4pO1xuXG4gICAgc2l6ZUVsZW1lbnRGcm9tQ2hpbGRyZW4oc3Bhbik7XG5cbiAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBzcGFuO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGRvY3VtZW50IGZyYWdtZW50IHdpdGggdGhlIGdpdmVuIGxpc3Qgb2YgY2hpbGRyZW4uXG4gKi9cbnZhciBtYWtlRnJhZ21lbnQgPSBmdW5jdGlvbihjaGlsZHJlbikge1xuICAgIHZhciBmcmFnbWVudCA9IG5ldyBkb21UcmVlLmRvY3VtZW50RnJhZ21lbnQoY2hpbGRyZW4pO1xuXG4gICAgc2l6ZUVsZW1lbnRGcm9tQ2hpbGRyZW4oZnJhZ21lbnQpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xufTtcblxuLyoqXG4gKiBNYWtlcyBhbiBlbGVtZW50IHBsYWNlZCBpbiBlYWNoIG9mIHRoZSB2bGlzdCBlbGVtZW50cyB0byBlbnN1cmUgdGhhdCBlYWNoXG4gKiBlbGVtZW50IGhhcyB0aGUgc2FtZSBtYXggZm9udCBzaXplLiBUbyBkbyB0aGlzLCB3ZSBjcmVhdGUgYSB6ZXJvLXdpZHRoIHNwYWNlXG4gKiB3aXRoIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZS5cbiAqL1xudmFyIG1ha2VGb250U2l6ZXIgPSBmdW5jdGlvbihvcHRpb25zLCBmb250U2l6ZSkge1xuICAgIHZhciBmb250U2l6ZUlubmVyID0gbWFrZVNwYW4oW10sIFtuZXcgZG9tVHJlZS5zeW1ib2xOb2RlKFwiXFx1MjAwYlwiKV0pO1xuICAgIGZvbnRTaXplSW5uZXIuc3R5bGUuZm9udFNpemUgPSAoZm9udFNpemUgLyBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyKSArIFwiZW1cIjtcblxuICAgIHZhciBmb250U2l6ZXIgPSBtYWtlU3BhbihcbiAgICAgICAgW1wiZm9udHNpemUtZW5zdXJlclwiLCBcInJlc2V0LVwiICsgb3B0aW9ucy5zaXplLCBcInNpemU1XCJdLFxuICAgICAgICBbZm9udFNpemVJbm5lcl0pO1xuXG4gICAgcmV0dXJuIGZvbnRTaXplcjtcbn07XG5cbi8qKlxuICogTWFrZXMgYSB2ZXJ0aWNhbCBsaXN0IGJ5IHN0YWNraW5nIGVsZW1lbnRzIGFuZCBrZXJucyBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAqIEFsbG93cyBmb3IgbWFueSBkaWZmZXJlbnQgd2F5cyBvZiBzcGVjaWZ5aW5nIHRoZSBwb3NpdGlvbmluZyBtZXRob2QuXG4gKlxuICogQXJndW1lbnRzOlxuICogIC0gY2hpbGRyZW46IEEgbGlzdCBvZiBjaGlsZCBvciBrZXJuIG5vZGVzIHRvIGJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXJcbiAqICAgICAgICAgICAgICAoaS5lLiB0aGUgZmlyc3QgZWxlbWVudCB3aWxsIGJlIGF0IHRoZSBib3R0b20sIGFuZCB0aGUgbGFzdCBhdFxuICogICAgICAgICAgICAgIHRoZSB0b3ApLiBFbGVtZW50IG5vZGVzIGFyZSBzcGVjaWZpZWQgYXNcbiAqICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogbm9kZX1cbiAqICAgICAgICAgICAgICB3aGlsZSBrZXJuIG5vZGVzIGFyZSBzcGVjaWZpZWQgYXNcbiAqICAgICAgICAgICAgICAgIHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogc2l6ZX1cbiAqICAtIHBvc2l0aW9uVHlwZTogVGhlIG1ldGhvZCBieSB3aGljaCB0aGUgdmxpc3Qgc2hvdWxkIGJlIHBvc2l0aW9uZWQuIFZhbGlkXG4gKiAgICAgICAgICAgICAgICAgIHZhbHVlcyBhcmU6XG4gKiAgICAgICAgICAgICAgICAgICAtIFwiaW5kaXZpZHVhbFNoaWZ0XCI6IFRoZSBjaGlsZHJlbiBsaXN0IG9ubHkgY29udGFpbnMgZWxlbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMsIGFuZCBlYWNoIG5vZGUgY29udGFpbnMgYW4gZXh0cmFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hpZnRcIiB2YWx1ZSBvZiBob3cgbXVjaCBpdCBzaG91bGQgYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ZWQgKG5vdGUgdGhhdCBzaGlmdGluZyBpcyBhbHdheXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmluZyBkb3dud2FyZHMpLiBwb3NpdGlvbkRhdGEgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWQuXG4gKiAgICAgICAgICAgICAgICAgICAtIFwidG9wXCI6IFRoZSBwb3NpdGlvbkRhdGEgc3BlY2lmaWVzIHRoZSB0b3Btb3N0IHBvaW50IG9mXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgdmxpc3QgKG5vdGUgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhIGhlaWdodCxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvIHBvc2l0aXZlIHZhbHVlcyBtb3ZlIHVwKVxuICogICAgICAgICAgICAgICAgICAgLSBcImJvdHRvbVwiOiBUaGUgcG9zaXRpb25EYXRhIHNwZWNpZmllcyB0aGUgYm90dG9tbW9zdCBwb2ludFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhlIHZsaXN0IChub3RlIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGgsIHNvIHBvc2l0aXZlIHZhbHVlcyBtb3ZlIGRvd25cbiAqICAgICAgICAgICAgICAgICAgIC0gXCJzaGlmdFwiOiBUaGUgdmxpc3Qgd2lsbCBiZSBwb3NpdGlvbmVkIHN1Y2ggdGhhdCBpdHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZWxpbmUgaXMgcG9zaXRpb25EYXRhIGF3YXkgZnJvbSB0aGUgYmFzZWxpbmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2YgdGhlIGZpcnN0IGNoaWxkLiBQb3NpdGl2ZSB2YWx1ZXMgbW92ZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dud2FyZHMuXG4gKiAgICAgICAgICAgICAgICAgICAtIFwiZmlyc3RCYXNlbGluZVwiOiBUaGUgdmxpc3Qgd2lsbCBiZSBwb3NpdGlvbmVkIHN1Y2ggdGhhdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0cyBiYXNlbGluZSBpcyBhbGlnbmVkIHdpdGggdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZWxpbmUgb2YgdGhlIGZpcnN0IGNoaWxkLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uRGF0YSBpcyBpZ25vcmVkLiAodGhpcyBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxdWl2YWxlbnQgdG8gXCJzaGlmdFwiIHdpdGhcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkRhdGE9MClcbiAqICAtIHBvc2l0aW9uRGF0YTogRGF0YSB1c2VkIGluIGRpZmZlcmVudCB3YXlzIGRlcGVuZGluZyBvbiBwb3NpdGlvblR5cGVcbiAqICAtIG9wdGlvbnM6IEFuIE9wdGlvbnMgb2JqZWN0XG4gKlxuICovXG52YXIgbWFrZVZMaXN0ID0gZnVuY3Rpb24oY2hpbGRyZW4sIHBvc2l0aW9uVHlwZSwgcG9zaXRpb25EYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIGRlcHRoO1xuICAgIHZhciBjdXJyUG9zO1xuICAgIHZhciBpO1xuICAgIGlmIChwb3NpdGlvblR5cGUgPT09IFwiaW5kaXZpZHVhbFNoaWZ0XCIpIHtcbiAgICAgICAgdmFyIG9sZENoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcmVuID0gW29sZENoaWxkcmVuWzBdXTtcblxuICAgICAgICAvLyBBZGQgaW4ga2VybnMgdG8gdGhlIGxpc3Qgb2YgY2hpbGRyZW4gdG8gZ2V0IGVhY2ggZWxlbWVudCB0byBiZVxuICAgICAgICAvLyBzaGlmdGVkIHRvIHRoZSBjb3JyZWN0IHNwZWNpZmllZCBzaGlmdFxuICAgICAgICBkZXB0aCA9IC1vbGRDaGlsZHJlblswXS5zaGlmdCAtIG9sZENoaWxkcmVuWzBdLmVsZW0uZGVwdGg7XG4gICAgICAgIGN1cnJQb3MgPSBkZXB0aDtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG9sZENoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IC1vbGRDaGlsZHJlbltpXS5zaGlmdCAtIGN1cnJQb3MgLVxuICAgICAgICAgICAgICAgIG9sZENoaWxkcmVuW2ldLmVsZW0uZGVwdGg7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IGRpZmYgLVxuICAgICAgICAgICAgICAgIChvbGRDaGlsZHJlbltpIC0gMV0uZWxlbS5oZWlnaHQgK1xuICAgICAgICAgICAgICAgICBvbGRDaGlsZHJlbltpIC0gMV0uZWxlbS5kZXB0aCk7XG5cbiAgICAgICAgICAgIGN1cnJQb3MgPSBjdXJyUG9zICsgZGlmZjtcblxuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCh7dHlwZTogXCJrZXJuXCIsIHNpemU6IHNpemV9KTtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gob2xkQ2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvblR5cGUgPT09IFwidG9wXCIpIHtcbiAgICAgICAgLy8gV2UgYWx3YXlzIHN0YXJ0IGF0IHRoZSBib3R0b20sIHNvIGNhbGN1bGF0ZSB0aGUgYm90dG9tIGJ5IGFkZGluZyB1cFxuICAgICAgICAvLyBhbGwgdGhlIHNpemVzXG4gICAgICAgIHZhciBib3R0b20gPSBwb3NpdGlvbkRhdGE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldLnR5cGUgPT09IFwia2VyblwiKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tIC09IGNoaWxkcmVuW2ldLnNpemU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvdHRvbSAtPSBjaGlsZHJlbltpXS5lbGVtLmhlaWdodCArIGNoaWxkcmVuW2ldLmVsZW0uZGVwdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVwdGggPSBib3R0b207XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvblR5cGUgPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgZGVwdGggPSAtcG9zaXRpb25EYXRhO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb25UeXBlID09PSBcInNoaWZ0XCIpIHtcbiAgICAgICAgZGVwdGggPSAtY2hpbGRyZW5bMF0uZWxlbS5kZXB0aCAtIHBvc2l0aW9uRGF0YTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uVHlwZSA9PT0gXCJmaXJzdEJhc2VsaW5lXCIpIHtcbiAgICAgICAgZGVwdGggPSAtY2hpbGRyZW5bMF0uZWxlbS5kZXB0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aCA9IDA7XG4gICAgfVxuXG4gICAgLy8gTWFrZSB0aGUgZm9udFNpemVyXG4gICAgdmFyIG1heEZvbnRTaXplID0gMDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldLnR5cGUgPT09IFwiZWxlbVwiKSB7XG4gICAgICAgICAgICBtYXhGb250U2l6ZSA9IE1hdGgubWF4KG1heEZvbnRTaXplLCBjaGlsZHJlbltpXS5lbGVtLm1heEZvbnRTaXplKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZm9udFNpemVyID0gbWFrZUZvbnRTaXplcihvcHRpb25zLCBtYXhGb250U2l6ZSk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgbGlzdCBvZiBhY3R1YWwgY2hpbGRyZW4gYXQgdGhlIGNvcnJlY3Qgb2Zmc2V0c1xuICAgIHZhciByZWFsQ2hpbGRyZW4gPSBbXTtcbiAgICBjdXJyUG9zID0gZGVwdGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbltpXS50eXBlID09PSBcImtlcm5cIikge1xuICAgICAgICAgICAgY3VyclBvcyArPSBjaGlsZHJlbltpXS5zaXplO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV0uZWxlbTtcblxuICAgICAgICAgICAgdmFyIHNoaWZ0ID0gLWNoaWxkLmRlcHRoIC0gY3VyclBvcztcbiAgICAgICAgICAgIGN1cnJQb3MgKz0gY2hpbGQuaGVpZ2h0ICsgY2hpbGQuZGVwdGg7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZFdyYXAgPSBtYWtlU3BhbihbXSwgW2ZvbnRTaXplciwgY2hpbGRdKTtcbiAgICAgICAgICAgIGNoaWxkV3JhcC5oZWlnaHQgLT0gc2hpZnQ7XG4gICAgICAgICAgICBjaGlsZFdyYXAuZGVwdGggKz0gc2hpZnQ7XG4gICAgICAgICAgICBjaGlsZFdyYXAuc3R5bGUudG9wID0gc2hpZnQgKyBcImVtXCI7XG5cbiAgICAgICAgICAgIHJlYWxDaGlsZHJlbi5wdXNoKGNoaWxkV3JhcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaW4gYW4gZWxlbWVudCBhdCB0aGUgZW5kIHdpdGggbm8gb2Zmc2V0IHRvIGZpeCB0aGUgY2FsY3VsYXRpb24gb2ZcbiAgICAvLyBiYXNlbGluZXMgaW4gc29tZSBicm93c2VycyAobmFtZWx5IElFLCBzb21ldGltZXMgc2FmYXJpKVxuICAgIHZhciBiYXNlbGluZUZpeCA9IG1ha2VTcGFuKFxuICAgICAgICBbXCJiYXNlbGluZS1maXhcIl0sIFtmb250U2l6ZXIsIG5ldyBkb21UcmVlLnN5bWJvbE5vZGUoXCJcXHUyMDBiXCIpXSk7XG4gICAgcmVhbENoaWxkcmVuLnB1c2goYmFzZWxpbmVGaXgpO1xuXG4gICAgdmFyIHZsaXN0ID0gbWFrZVNwYW4oW1widmxpc3RcIl0sIHJlYWxDaGlsZHJlbik7XG4gICAgLy8gRml4IHRoZSBmaW5hbCBoZWlnaHQgYW5kIGRlcHRoLCBpbiBjYXNlIHRoZXJlIHdlcmUga2VybnMgYXQgdGhlIGVuZHNcbiAgICAvLyBzaW5jZSB0aGUgbWFrZVNwYW4gY2FsY3VsYXRpb24gd29uJ3QgdGFrZSB0aGF0IGluIHRvIGFjY291bnQuXG4gICAgdmxpc3QuaGVpZ2h0ID0gTWF0aC5tYXgoY3VyclBvcywgdmxpc3QuaGVpZ2h0KTtcbiAgICB2bGlzdC5kZXB0aCA9IE1hdGgubWF4KC1kZXB0aCwgdmxpc3QuZGVwdGgpO1xuICAgIHJldHVybiB2bGlzdDtcbn07XG5cbi8vIEEgdGFibGUgb2Ygc2l6ZSAtPiBmb250IHNpemUgZm9yIHRoZSBkaWZmZXJlbnQgc2l6aW5nIGZ1bmN0aW9uc1xudmFyIHNpemluZ011bHRpcGxpZXIgPSB7XG4gICAgc2l6ZTE6IDAuNSxcbiAgICBzaXplMjogMC43LFxuICAgIHNpemUzOiAwLjgsXG4gICAgc2l6ZTQ6IDAuOSxcbiAgICBzaXplNTogMS4wLFxuICAgIHNpemU2OiAxLjIsXG4gICAgc2l6ZTc6IDEuNDQsXG4gICAgc2l6ZTg6IDEuNzMsXG4gICAgc2l6ZTk6IDIuMDcsXG4gICAgc2l6ZTEwOiAyLjQ5XG59O1xuXG4vLyBBIG1hcCBvZiBzcGFjaW5nIGZ1bmN0aW9ucyB0byB0aGVpciBhdHRyaWJ1dGVzLCBsaWtlIHNpemUgYW5kIGNvcnJlc3BvbmRpbmdcbi8vIENTUyBjbGFzc1xudmFyIHNwYWNpbmdGdW5jdGlvbnMgPSB7XG4gICAgXCJcXFxccXF1YWRcIjoge1xuICAgICAgICBzaXplOiBcIjJlbVwiLFxuICAgICAgICBjbGFzc05hbWU6IFwicXF1YWRcIlxuICAgIH0sXG4gICAgXCJcXFxccXVhZFwiOiB7XG4gICAgICAgIHNpemU6IFwiMWVtXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJxdWFkXCJcbiAgICB9LFxuICAgIFwiXFxcXGVuc3BhY2VcIjoge1xuICAgICAgICBzaXplOiBcIjAuNWVtXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJlbnNwYWNlXCJcbiAgICB9LFxuICAgIFwiXFxcXDtcIjoge1xuICAgICAgICBzaXplOiBcIjAuMjc3Nzc4ZW1cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInRoaWNrc3BhY2VcIlxuICAgIH0sXG4gICAgXCJcXFxcOlwiOiB7XG4gICAgICAgIHNpemU6IFwiMC4yMjIyMmVtXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJtZWRpdW1zcGFjZVwiXG4gICAgfSxcbiAgICBcIlxcXFwsXCI6IHtcbiAgICAgICAgc2l6ZTogXCIwLjE2NjY3ZW1cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInRoaW5zcGFjZVwiXG4gICAgfSxcbiAgICBcIlxcXFwhXCI6IHtcbiAgICAgICAgc2l6ZTogXCItMC4xNjY2N2VtXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJuZWdhdGl2ZXRoaW5zcGFjZVwiXG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbWFrZVN5bWJvbDogbWFrZVN5bWJvbCxcbiAgICBtYXRoaXQ6IG1hdGhpdCxcbiAgICBtYXRocm06IG1hdGhybSxcbiAgICBtYWtlU3BhbjogbWFrZVNwYW4sXG4gICAgbWFrZUZyYWdtZW50OiBtYWtlRnJhZ21lbnQsXG4gICAgbWFrZVZMaXN0OiBtYWtlVkxpc3QsXG4gICAgc2l6aW5nTXVsdGlwbGllcjogc2l6aW5nTXVsdGlwbGllcixcbiAgICBzcGFjaW5nRnVuY3Rpb25zOiBzcGFjaW5nRnVuY3Rpb25zXG59O1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgZG9lcyB0aGUgbWFpbiB3b3JrIG9mIGJ1aWxkaW5nIGEgZG9tVHJlZSBzdHJ1Y3R1cmUgZnJvbSBhIHBhcnNlXG4gKiB0cmVlLiBUaGUgZW50cnkgcG9pbnQgaXMgdGhlIGBidWlsZEhUTUxgIGZ1bmN0aW9uLCB3aGljaCB0YWtlcyBhIHBhcnNlIHRyZWUuXG4gKiBUaGVuLCB0aGUgYnVpbGRFeHByZXNzaW9uLCBidWlsZEdyb3VwLCBhbmQgdmFyaW91cyBncm91cFR5cGVzIGZ1bmN0aW9ucyBhcmVcbiAqIGNhbGxlZCwgdG8gcHJvZHVjZSBhIGZpbmFsIEhUTUwgdHJlZS5cbiAqL1xuXG52YXIgT3B0aW9ucyA9IHJlcXVpcmUoXCIuL09wdGlvbnNcIik7XG52YXIgUGFyc2VFcnJvciA9IHJlcXVpcmUoXCIuL1BhcnNlRXJyb3JcIik7XG52YXIgU3R5bGUgPSByZXF1aXJlKFwiLi9TdHlsZVwiKTtcblxudmFyIGJ1aWxkQ29tbW9uID0gcmVxdWlyZShcIi4vYnVpbGRDb21tb25cIik7XG52YXIgZGVsaW1pdGVyID0gcmVxdWlyZShcIi4vZGVsaW1pdGVyXCIpO1xudmFyIGRvbVRyZWUgPSByZXF1aXJlKFwiLi9kb21UcmVlXCIpO1xudmFyIGZvbnRNZXRyaWNzID0gcmVxdWlyZShcIi4vZm9udE1ldHJpY3NcIik7XG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIG1ha2VTcGFuID0gYnVpbGRDb21tb24ubWFrZVNwYW47XG5cbi8qKlxuICogVGFrZSBhIGxpc3Qgb2Ygbm9kZXMsIGJ1aWxkIHRoZW0gaW4gb3JkZXIsIGFuZCByZXR1cm4gYSBsaXN0IG9mIHRoZSBidWlsdFxuICogbm9kZXMuIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgYHByZXZgIG5vZGUgY29ycmVjdGx5LCBhbmQgcGFzc2VzIHRoZVxuICogcHJldmlvdXMgZWxlbWVudCBmcm9tIHRoZSBsaXN0IGFzIHRoZSBwcmV2IG9mIHRoZSBuZXh0IGVsZW1lbnQuXG4gKi9cbnZhciBidWlsZEV4cHJlc3Npb24gPSBmdW5jdGlvbihleHByZXNzaW9uLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgdmFyIGdyb3VwcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwcmVzc2lvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZ3JvdXAgPSBleHByZXNzaW9uW2ldO1xuICAgICAgICBncm91cHMucHVzaChidWlsZEdyb3VwKGdyb3VwLCBvcHRpb25zLCBwcmV2KSk7XG4gICAgICAgIHByZXYgPSBncm91cDtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3Vwcztcbn07XG5cbi8vIExpc3Qgb2YgdHlwZXMgdXNlZCBieSBnZXRUeXBlT2ZHcm91cFxudmFyIGdyb3VwVG9UeXBlID0ge1xuICAgIG1hdGhvcmQ6IFwibW9yZFwiLFxuICAgIHRleHRvcmQ6IFwibW9yZFwiLFxuICAgIGJpbjogXCJtYmluXCIsXG4gICAgcmVsOiBcIm1yZWxcIixcbiAgICB0ZXh0OiBcIm1vcmRcIixcbiAgICBvcGVuOiBcIm1vcGVuXCIsXG4gICAgY2xvc2U6IFwibWNsb3NlXCIsXG4gICAgaW5uZXI6IFwibWlubmVyXCIsXG4gICAgZ2VuZnJhYzogXCJtaW5uZXJcIixcbiAgICBhcnJheTogXCJtaW5uZXJcIixcbiAgICBzcGFjaW5nOiBcIm1vcmRcIixcbiAgICBwdW5jdDogXCJtcHVuY3RcIixcbiAgICBvcmRncm91cDogXCJtb3JkXCIsXG4gICAgb3A6IFwibW9wXCIsXG4gICAga2F0ZXg6IFwibW9yZFwiLFxuICAgIG92ZXJsaW5lOiBcIm1vcmRcIixcbiAgICBydWxlOiBcIm1vcmRcIixcbiAgICBsZWZ0cmlnaHQ6IFwibWlubmVyXCIsXG4gICAgc3FydDogXCJtb3JkXCIsXG4gICAgYWNjZW50OiBcIm1vcmRcIlxufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBmaW5hbCBtYXRoIHR5cGUgb2YgYW4gZXhwcmVzc2lvbiwgZ2l2ZW4gaXRzIGdyb3VwIHR5cGUuIFRoaXMgdHlwZSBpc1xuICogdXNlZCB0byBkZXRlcm1pbmUgc3BhY2luZyBiZXR3ZWVuIGVsZW1lbnRzLCBhbmQgYWZmZWN0cyBiaW4gZWxlbWVudHMgYnlcbiAqIGNhdXNpbmcgdGhlbSB0byBjaGFuZ2UgZGVwZW5kaW5nIG9uIHdoYXQgdHlwZXMgYXJlIGFyb3VuZCB0aGVtLiBUaGlzIHR5cGVcbiAqIG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIG91dGVybW9zdCBub2RlIG9mIGFuIGVsZW1lbnQgYXMgYSBDU1MgY2xhc3Mgc28gdGhhdFxuICogc3BhY2luZyB3aXRoIGl0cyBzdXJyb3VuZGluZyBlbGVtZW50cyB3b3JrcyBjb3JyZWN0bHkuXG4gKlxuICogU29tZSBlbGVtZW50cyBjYW4gYmUgbWFwcGVkIG9uZS10by1vbmUgZnJvbSBncm91cCB0eXBlIHRvIG1hdGggdHlwZSwgYW5kXG4gKiB0aG9zZSBhcmUgbGlzdGVkIGluIHRoZSBgZ3JvdXBUb1R5cGVgIHRhYmxlLlxuICpcbiAqIE90aGVycyAodXN1YWxseSBlbGVtZW50cyB0aGF0IHdyYXAgYXJvdW5kIG90aGVyIGVsZW1lbnRzKSBvZnRlbiBoYXZlXG4gKiByZWN1cnNpdmUgZGVmaW5pdGlvbnMsIGFuZCB0aHVzIGNhbGwgYGdldFR5cGVPZkdyb3VwYCBvbiB0aGVpciBpbm5lclxuICogZWxlbWVudHMuXG4gKi9cbnZhciBnZXRUeXBlT2ZHcm91cCA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgaWYgKGdyb3VwID09IG51bGwpIHtcbiAgICAgICAgLy8gTGlrZSB3aGVuIHR5cGVzZXR0aW5nICReMyRcbiAgICAgICAgcmV0dXJuIGdyb3VwVG9UeXBlLm1hdGhvcmQ7XG4gICAgfSBlbHNlIGlmIChncm91cC50eXBlID09PSBcInN1cHN1YlwiKSB7XG4gICAgICAgIHJldHVybiBnZXRUeXBlT2ZHcm91cChncm91cC52YWx1ZS5iYXNlKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwibGxhcFwiIHx8IGdyb3VwLnR5cGUgPT09IFwicmxhcFwiKSB7XG4gICAgICAgIHJldHVybiBnZXRUeXBlT2ZHcm91cChncm91cC52YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChncm91cC50eXBlID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgcmV0dXJuIGdldFR5cGVPZkdyb3VwKGdyb3VwLnZhbHVlLnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwic2l6aW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGdldFR5cGVPZkdyb3VwKGdyb3VwLnZhbHVlLnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwic3R5bGluZ1wiKSB7XG4gICAgICAgIHJldHVybiBnZXRUeXBlT2ZHcm91cChncm91cC52YWx1ZS52YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChncm91cC50eXBlID09PSBcImRlbGltc2l6aW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGdyb3VwVG9UeXBlW2dyb3VwLnZhbHVlLmRlbGltVHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdyb3VwVG9UeXBlW2dyb3VwLnR5cGVdO1xuICAgIH1cbn07XG5cbi8qKlxuICogU29tZXRpbWVzLCBncm91cHMgcGVyZm9ybSBzcGVjaWFsIHJ1bGVzIHdoZW4gdGhleSBoYXZlIHN1cGVyc2NyaXB0cyBvclxuICogc3Vic2NyaXB0cyBhdHRhY2hlZCB0byB0aGVtLiBUaGlzIGZ1bmN0aW9uIGxldHMgdGhlIGBzdXBzdWJgIGdyb3VwIGtub3cgdGhhdFxuICogaXRzIGlubmVyIGVsZW1lbnQgc2hvdWxkIGhhbmRsZSB0aGUgc3VwZXJzY3JpcHRzIGFuZCBzdWJzY3JpcHRzIGluc3RlYWQgb2ZcbiAqIGhhbmRsaW5nIHRoZW0gaXRzZWxmLlxuICovXG52YXIgc2hvdWxkSGFuZGxlU3VwU3ViID0gZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwib3BcIikge1xuICAgICAgICAvLyBPcGVyYXRvcnMgaGFuZGxlIHN1cHN1YnMgZGlmZmVyZW50bHkgd2hlbiB0aGV5IGhhdmUgbGltaXRzXG4gICAgICAgIC8vIChlLmcuIGBcXGRpc3BsYXlzdHlsZVxcc3VtXzJeM2ApXG4gICAgICAgIHJldHVybiBncm91cC52YWx1ZS5saW1pdHMgJiYgb3B0aW9ucy5zdHlsZS5zaXplID09PSBTdHlsZS5ESVNQTEFZLnNpemU7XG4gICAgfSBlbHNlIGlmIChncm91cC50eXBlID09PSBcImFjY2VudFwiKSB7XG4gICAgICAgIHJldHVybiBpc0NoYXJhY3RlckJveChncm91cC52YWx1ZS5iYXNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFNvbWV0aW1lcyB3ZSB3YW50IHRvIHB1bGwgb3V0IHRoZSBpbm5lcm1vc3QgZWxlbWVudCBvZiBhIGdyb3VwLiBJbiBtb3N0XG4gKiBjYXNlcywgdGhpcyB3aWxsIGp1c3QgYmUgdGhlIGdyb3VwIGl0c2VsZiwgYnV0IHdoZW4gb3JkZ3JvdXBzIGFuZCBjb2xvcnMgaGF2ZVxuICogYSBzaW5nbGUgZWxlbWVudCwgd2Ugd2FudCB0byBwdWxsIHRoYXQgb3V0LlxuICovXG52YXIgZ2V0QmFzZUVsZW0gPSBmdW5jdGlvbihncm91cCkge1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAudHlwZSA9PT0gXCJvcmRncm91cFwiKSB7XG4gICAgICAgIGlmIChncm91cC52YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCYXNlRWxlbShncm91cC52YWx1ZVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGdyb3VwLnR5cGUgPT09IFwiY29sb3JcIikge1xuICAgICAgICBpZiAoZ3JvdXAudmFsdWUudmFsdWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QmFzZUVsZW0oZ3JvdXAudmFsdWUudmFsdWVbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGVYYm9vayBhbGdvcml0aG1zIG9mdGVuIHJlZmVyZW5jZSBcImNoYXJhY3RlciBib3hlc1wiLCB3aGljaCBhcmUgc2ltcGx5IGdyb3Vwc1xuICogd2l0aCBhIHNpbmdsZSBjaGFyYWN0ZXIgaW4gdGhlbS4gVG8gZGVjaWRlIGlmIHNvbWV0aGluZyBpcyBhIGNoYXJhY3RlciBib3gsXG4gKiB3ZSBmaW5kIGl0cyBpbm5lcm1vc3QgZ3JvdXAsIGFuZCBzZWUgaWYgaXQgaXMgYSBzaW5nbGUgY2hhcmFjdGVyLlxuICovXG52YXIgaXNDaGFyYWN0ZXJCb3ggPSBmdW5jdGlvbihncm91cCkge1xuICAgIHZhciBiYXNlRWxlbSA9IGdldEJhc2VFbGVtKGdyb3VwKTtcblxuICAgIC8vIFRoZXNlIGFyZSBhbGwgdGhleSB0eXBlcyBvZiBncm91cHMgd2hpY2ggaG9sZCBzaW5nbGUgY2hhcmFjdGVyc1xuICAgIHJldHVybiBiYXNlRWxlbS50eXBlID09PSBcIm1hdGhvcmRcIiB8fFxuICAgICAgICBiYXNlRWxlbS50eXBlID09PSBcInRleHRvcmRcIiB8fFxuICAgICAgICBiYXNlRWxlbS50eXBlID09PSBcImJpblwiIHx8XG4gICAgICAgIGJhc2VFbGVtLnR5cGUgPT09IFwicmVsXCIgfHxcbiAgICAgICAgYmFzZUVsZW0udHlwZSA9PT0gXCJpbm5lclwiIHx8XG4gICAgICAgIGJhc2VFbGVtLnR5cGUgPT09IFwib3BlblwiIHx8XG4gICAgICAgIGJhc2VFbGVtLnR5cGUgPT09IFwiY2xvc2VcIiB8fFxuICAgICAgICBiYXNlRWxlbS50eXBlID09PSBcInB1bmN0XCI7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgYSBtYXAgb2YgZ3JvdXAgdHlwZXMgdG8gdGhlIGZ1bmN0aW9uIHVzZWQgdG8gaGFuZGxlIHRoYXQgdHlwZS5cbiAqIFNpbXBsZXIgdHlwZXMgY29tZSBhdCB0aGUgYmVnaW5uaW5nLCB3aGlsZSBjb21wbGljYXRlZCB0eXBlcyBjb21lIGFmdGVyd2FyZHMuXG4gKi9cbnZhciBncm91cFR5cGVzID0ge1xuICAgIG1hdGhvcmQ6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHJldHVybiBidWlsZENvbW1vbi5tYXRoaXQoXG4gICAgICAgICAgICBncm91cC52YWx1ZSwgZ3JvdXAubW9kZSwgb3B0aW9ucy5nZXRDb2xvcigpLCBbXCJtb3JkXCJdKTtcbiAgICB9LFxuXG4gICAgdGV4dG9yZDogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29tbW9uLm1hdGhybShcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLCBncm91cC5tb2RlLCBvcHRpb25zLmdldENvbG9yKCksIFtcIm1vcmRcIl0pO1xuICAgIH0sXG5cbiAgICBiaW46IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBcIm1iaW5cIjtcbiAgICAgICAgLy8gUHVsbCBvdXQgdGhlIG1vc3QgcmVjZW50IGVsZW1lbnQuIERvIHNvbWUgc3BlY2lhbCBoYW5kbGluZyB0byBmaW5kXG4gICAgICAgIC8vIHRoaW5ncyBhdCB0aGUgZW5kIG9mIGEgXFxjb2xvciBncm91cC4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGUgc2FtZVxuICAgICAgICAvLyBsb2dpYyBmb3Igb3JkZ3JvdXBzICh3aGljaCBjb3VudCBhcyBvcmRzKS5cbiAgICAgICAgdmFyIHByZXZBdG9tID0gcHJldjtcbiAgICAgICAgd2hpbGUgKHByZXZBdG9tICYmIHByZXZBdG9tLnR5cGUgPT09IFwiY29sb3JcIikge1xuICAgICAgICAgICAgdmFyIGF0b21zID0gcHJldkF0b20udmFsdWUudmFsdWU7XG4gICAgICAgICAgICBwcmV2QXRvbSA9IGF0b21zW2F0b21zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlZSBUZVhib29rIHBnLiA0NDItNDQ2LCBSdWxlcyA1IGFuZCA2LCBhbmQgdGhlIHRleHQgYmVmb3JlIFJ1bGUgMTkuXG4gICAgICAgIC8vIEhlcmUsIHdlIGRldGVybWluZSB3aGV0aGVyIHRoZSBiaW4gc2hvdWxkIHR1cm4gaW50byBhbiBvcmQuIFdlXG4gICAgICAgIC8vIGN1cnJlbnRseSBvbmx5IGFwcGx5IFJ1bGUgNS5cbiAgICAgICAgaWYgKCFwcmV2IHx8IHV0aWxzLmNvbnRhaW5zKFtcIm1iaW5cIiwgXCJtb3BlblwiLCBcIm1yZWxcIiwgXCJtb3BcIiwgXCJtcHVuY3RcIl0sXG4gICAgICAgICAgICAgICAgZ2V0VHlwZU9mR3JvdXAocHJldkF0b20pKSkge1xuICAgICAgICAgICAgZ3JvdXAudHlwZSA9IFwidGV4dG9yZFwiO1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJtb3JkXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnVpbGRDb21tb24ubWF0aHJtKFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUsIG9wdGlvbnMuZ2V0Q29sb3IoKSwgW2NsYXNzTmFtZV0pO1xuICAgIH0sXG5cbiAgICByZWw6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHJldHVybiBidWlsZENvbW1vbi5tYXRocm0oXG4gICAgICAgICAgICBncm91cC52YWx1ZSwgZ3JvdXAubW9kZSwgb3B0aW9ucy5nZXRDb2xvcigpLCBbXCJtcmVsXCJdKTtcbiAgICB9LFxuXG4gICAgb3BlbjogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29tbW9uLm1hdGhybShcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLCBncm91cC5tb2RlLCBvcHRpb25zLmdldENvbG9yKCksIFtcIm1vcGVuXCJdKTtcbiAgICB9LFxuXG4gICAgY2xvc2U6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHJldHVybiBidWlsZENvbW1vbi5tYXRocm0oXG4gICAgICAgICAgICBncm91cC52YWx1ZSwgZ3JvdXAubW9kZSwgb3B0aW9ucy5nZXRDb2xvcigpLCBbXCJtY2xvc2VcIl0pO1xuICAgIH0sXG5cbiAgICBpbm5lcjogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ29tbW9uLm1hdGhybShcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlLCBncm91cC5tb2RlLCBvcHRpb25zLmdldENvbG9yKCksIFtcIm1pbm5lclwiXSk7XG4gICAgfSxcblxuICAgIHB1bmN0OiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICByZXR1cm4gYnVpbGRDb21tb24ubWF0aHJtKFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUsIG9wdGlvbnMuZ2V0Q29sb3IoKSwgW1wibXB1bmN0XCJdKTtcbiAgICB9LFxuXG4gICAgb3JkZ3JvdXA6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIHJldHVybiBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcIm1vcmRcIiwgb3B0aW9ucy5zdHlsZS5jbHMoKV0sXG4gICAgICAgICAgICBidWlsZEV4cHJlc3Npb24oZ3JvdXAudmFsdWUsIG9wdGlvbnMucmVzZXQoKSlcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgdGV4dDogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFtcInRleHRcIiwgXCJtb3JkXCIsIG9wdGlvbnMuc3R5bGUuY2xzKCldLFxuICAgICAgICAgICAgYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlLmJvZHksIG9wdGlvbnMucmVzZXQoKSkpO1xuICAgIH0sXG5cbiAgICBjb2xvcjogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gYnVpbGRFeHByZXNzaW9uKFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUudmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zLndpdGhDb2xvcihncm91cC52YWx1ZS5jb2xvciksXG4gICAgICAgICAgICBwcmV2XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gXFxjb2xvciBpc24ndCBzdXBwb3NlZCB0byBhZmZlY3QgdGhlIHR5cGUgb2YgdGhlIGVsZW1lbnRzIGl0IGNvbnRhaW5zLlxuICAgICAgICAvLyBUbyBhY2NvbXBsaXNoIHRoaXMsIHdlIHdyYXAgdGhlIHJlc3VsdHMgaW4gYSBmcmFnbWVudCwgc28gdGhlIGlubmVyXG4gICAgICAgIC8vIGVsZW1lbnRzIHdpbGwgYmUgYWJsZSB0byBkaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZWlyIG5laWdoYm9ycy4gRm9yXG4gICAgICAgIC8vIGV4YW1wbGUsIGBcXGNvbG9ye3JlZH17MiArfSAzYCBoYXMgdGhlIHNhbWUgc3BhY2luZyBhcyBgMiArIDNgXG4gICAgICAgIHJldHVybiBuZXcgYnVpbGRDb21tb24ubWFrZUZyYWdtZW50KGVsZW1lbnRzKTtcbiAgICB9LFxuXG4gICAgc3Vwc3ViOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBTdXBlcnNjcmlwdCBhbmQgc3Vic2NyaXB0cyBhcmUgaGFuZGxlZCBpbiB0aGUgVGVYYm9vayBvbiBwYWdlXG4gICAgICAgIC8vIDQ0NS00NDYsIHJ1bGVzIDE4KGEtZikuXG5cbiAgICAgICAgLy8gSGVyZSBpcyB3aGVyZSB3ZSBkZWZlciB0byB0aGUgaW5uZXIgZ3JvdXAgaWYgaXQgc2hvdWxkIGhhbmRsZVxuICAgICAgICAvLyBzdXBlcnNjcmlwdHMgYW5kIHN1YnNjcmlwdHMgaXRzZWxmLlxuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3VwU3ViKGdyb3VwLnZhbHVlLmJhc2UsIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBUeXBlc1tncm91cC52YWx1ZS5iYXNlLnR5cGVdKGdyb3VwLCBvcHRpb25zLCBwcmV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYXNlID0gYnVpbGRHcm91cChncm91cC52YWx1ZS5iYXNlLCBvcHRpb25zLnJlc2V0KCkpO1xuICAgICAgICB2YXIgc3VwbWlkLCBzdWJtaWQsIHN1cCwgc3ViO1xuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zdXApIHtcbiAgICAgICAgICAgIHN1cCA9IGJ1aWxkR3JvdXAoZ3JvdXAudmFsdWUuc3VwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLndpdGhTdHlsZShvcHRpb25zLnN0eWxlLnN1cCgpKSk7XG4gICAgICAgICAgICBzdXBtaWQgPSBtYWtlU3BhbihcbiAgICAgICAgICAgICAgICAgICAgW29wdGlvbnMuc3R5bGUucmVzZXQoKSwgb3B0aW9ucy5zdHlsZS5zdXAoKS5jbHMoKV0sIFtzdXBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zdWIpIHtcbiAgICAgICAgICAgIHN1YiA9IGJ1aWxkR3JvdXAoZ3JvdXAudmFsdWUuc3ViLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLndpdGhTdHlsZShvcHRpb25zLnN0eWxlLnN1YigpKSk7XG4gICAgICAgICAgICBzdWJtaWQgPSBtYWtlU3BhbihcbiAgICAgICAgICAgICAgICAgICAgW29wdGlvbnMuc3R5bGUucmVzZXQoKSwgb3B0aW9ucy5zdHlsZS5zdWIoKS5jbHMoKV0sIFtzdWJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1bGUgMThhXG4gICAgICAgIHZhciBzdXBTaGlmdCwgc3ViU2hpZnQ7XG4gICAgICAgIGlmIChpc0NoYXJhY3RlckJveChncm91cC52YWx1ZS5iYXNlKSkge1xuICAgICAgICAgICAgc3VwU2hpZnQgPSAwO1xuICAgICAgICAgICAgc3ViU2hpZnQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwU2hpZnQgPSBiYXNlLmhlaWdodCAtIGZvbnRNZXRyaWNzLm1ldHJpY3Muc3VwRHJvcDtcbiAgICAgICAgICAgIHN1YlNoaWZ0ID0gYmFzZS5kZXB0aCArIGZvbnRNZXRyaWNzLm1ldHJpY3Muc3ViRHJvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1bGUgMThjXG4gICAgICAgIHZhciBtaW5TdXBTaGlmdDtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3R5bGUgPT09IFN0eWxlLkRJU1BMQVkpIHtcbiAgICAgICAgICAgIG1pblN1cFNoaWZ0ID0gZm9udE1ldHJpY3MubWV0cmljcy5zdXAxO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc3R5bGUuY3JhbXBlZCkge1xuICAgICAgICAgICAgbWluU3VwU2hpZnQgPSBmb250TWV0cmljcy5tZXRyaWNzLnN1cDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaW5TdXBTaGlmdCA9IGZvbnRNZXRyaWNzLm1ldHJpY3Muc3VwMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNjcmlwdHNwYWNlIGlzIGEgZm9udC1zaXplLWluZGVwZW5kZW50IHNpemUsIHNvIHNjYWxlIGl0XG4gICAgICAgIC8vIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgdmFyIG11bHRpcGxpZXIgPSBTdHlsZS5URVhULnNpemVNdWx0aXBsaWVyICpcbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuICAgICAgICB2YXIgc2NyaXB0c3BhY2UgPVxuICAgICAgICAgICAgKDAuNSAvIGZvbnRNZXRyaWNzLm1ldHJpY3MucHRQZXJFbSkgLyBtdWx0aXBsaWVyICsgXCJlbVwiO1xuXG4gICAgICAgIHZhciBzdXBzdWI7XG4gICAgICAgIGlmICghZ3JvdXAudmFsdWUuc3VwKSB7XG4gICAgICAgICAgICAvLyBSdWxlIDE4YlxuICAgICAgICAgICAgc3ViU2hpZnQgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICBzdWJTaGlmdCwgZm9udE1ldHJpY3MubWV0cmljcy5zdWIxLFxuICAgICAgICAgICAgICAgIHN1Yi5oZWlnaHQgLSAwLjggKiBmb250TWV0cmljcy5tZXRyaWNzLnhIZWlnaHQpO1xuXG4gICAgICAgICAgICBzdXBzdWIgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoW1xuICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogc3VibWlkfVxuICAgICAgICAgICAgXSwgXCJzaGlmdFwiLCBzdWJTaGlmdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHN1cHN1Yi5jaGlsZHJlblswXS5zdHlsZS5tYXJnaW5SaWdodCA9IHNjcmlwdHNwYWNlO1xuXG4gICAgICAgICAgICAvLyBTdWJzY3JpcHRzIHNob3VsZG4ndCBiZSBzaGlmdGVkIGJ5IHRoZSBiYXNlJ3MgaXRhbGljIGNvcnJlY3Rpb24uXG4gICAgICAgICAgICAvLyBBY2NvdW50IGZvciB0aGF0IGJ5IHNoaWZ0aW5nIHRoZSBzdWJzY3JpcHQgYmFjayB0aGUgYXBwcm9wcmlhdGVcbiAgICAgICAgICAgIC8vIGFtb3VudC4gTm90ZSB3ZSBvbmx5IGRvIHRoaXMgd2hlbiB0aGUgYmFzZSBpcyBhIHNpbmdsZSBzeW1ib2wuXG4gICAgICAgICAgICBpZiAoYmFzZSBpbnN0YW5jZW9mIGRvbVRyZWUuc3ltYm9sTm9kZSkge1xuICAgICAgICAgICAgICAgIHN1cHN1Yi5jaGlsZHJlblswXS5zdHlsZS5tYXJnaW5MZWZ0ID0gLWJhc2UuaXRhbGljICsgXCJlbVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFncm91cC52YWx1ZS5zdWIpIHtcbiAgICAgICAgICAgIC8vIFJ1bGUgMThjLCBkXG4gICAgICAgICAgICBzdXBTaGlmdCA9IE1hdGgubWF4KHN1cFNoaWZ0LCBtaW5TdXBTaGlmdCxcbiAgICAgICAgICAgICAgICBzdXAuZGVwdGggKyAwLjI1ICogZm9udE1ldHJpY3MubWV0cmljcy54SGVpZ2h0KTtcblxuICAgICAgICAgICAgc3Vwc3ViID0gYnVpbGRDb21tb24ubWFrZVZMaXN0KFtcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IHN1cG1pZH1cbiAgICAgICAgICAgIF0sIFwic2hpZnRcIiwgLXN1cFNoaWZ0LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgc3Vwc3ViLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpblJpZ2h0ID0gc2NyaXB0c3BhY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBTaGlmdCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgIHN1cFNoaWZ0LCBtaW5TdXBTaGlmdCxcbiAgICAgICAgICAgICAgICBzdXAuZGVwdGggKyAwLjI1ICogZm9udE1ldHJpY3MubWV0cmljcy54SGVpZ2h0KTtcbiAgICAgICAgICAgIHN1YlNoaWZ0ID0gTWF0aC5tYXgoc3ViU2hpZnQsIGZvbnRNZXRyaWNzLm1ldHJpY3Muc3ViMik7XG5cbiAgICAgICAgICAgIHZhciBydWxlV2lkdGggPSBmb250TWV0cmljcy5tZXRyaWNzLmRlZmF1bHRSdWxlVGhpY2tuZXNzO1xuXG4gICAgICAgICAgICAvLyBSdWxlIDE4ZVxuICAgICAgICAgICAgaWYgKChzdXBTaGlmdCAtIHN1cC5kZXB0aCkgLSAoc3ViLmhlaWdodCAtIHN1YlNoaWZ0KSA8XG4gICAgICAgICAgICAgICAgICAgIDQgKiBydWxlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBzdWJTaGlmdCA9IDQgKiBydWxlV2lkdGggLSAoc3VwU2hpZnQgLSBzdXAuZGVwdGgpICsgc3ViLmhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgcHNpID0gMC44ICogZm9udE1ldHJpY3MubWV0cmljcy54SGVpZ2h0IC1cbiAgICAgICAgICAgICAgICAgICAgKHN1cFNoaWZ0IC0gc3VwLmRlcHRoKTtcbiAgICAgICAgICAgICAgICBpZiAocHNpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBTaGlmdCArPSBwc2k7XG4gICAgICAgICAgICAgICAgICAgIHN1YlNoaWZ0IC09IHBzaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1cHN1YiA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChbXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBzdWJtaWQsIHNoaWZ0OiBzdWJTaGlmdH0sXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBzdXBtaWQsIHNoaWZ0OiAtc3VwU2hpZnR9XG4gICAgICAgICAgICBdLCBcImluZGl2aWR1YWxTaGlmdFwiLCBudWxsLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gU2VlIGNvbW1lbnQgYWJvdmUgYWJvdXQgc3Vic2NyaXB0cyBub3QgYmVpbmcgc2hpZnRlZFxuICAgICAgICAgICAgaWYgKGJhc2UgaW5zdGFuY2VvZiBkb21UcmVlLnN5bWJvbE5vZGUpIHtcbiAgICAgICAgICAgICAgICBzdXBzdWIuY2hpbGRyZW5bMF0uc3R5bGUubWFyZ2luTGVmdCA9IC1iYXNlLml0YWxpYyArIFwiZW1cIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Vwc3ViLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpblJpZ2h0ID0gc2NyaXB0c3BhY2U7XG4gICAgICAgICAgICBzdXBzdWIuY2hpbGRyZW5bMV0uc3R5bGUubWFyZ2luUmlnaHQgPSBzY3JpcHRzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYWtlU3BhbihbZ2V0VHlwZU9mR3JvdXAoZ3JvdXAudmFsdWUuYmFzZSldLFxuICAgICAgICAgICAgW2Jhc2UsIHN1cHN1Yl0pO1xuICAgIH0sXG5cbiAgICBnZW5mcmFjOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBGcmFjdGlvbnMgYXJlIGhhbmRsZWQgaW4gdGhlIFRlWGJvb2sgb24gcGFnZXMgNDQ0LTQ0NSwgcnVsZXMgMTUoYS1lKS5cbiAgICAgICAgLy8gRmlndXJlIG91dCB3aGF0IHN0eWxlIHRoaXMgZnJhY3Rpb24gc2hvdWxkIGJlIGluIGJhc2VkIG9uIHRoZVxuICAgICAgICAvLyBmdW5jdGlvbiB1c2VkXG4gICAgICAgIHZhciBmc3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgICAgICBpZiAoZ3JvdXAudmFsdWUuc2l6ZSA9PT0gXCJkaXNwbGF5XCIpIHtcbiAgICAgICAgICAgIGZzdHlsZSA9IFN0eWxlLkRJU1BMQVk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXAudmFsdWUuc2l6ZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgIGZzdHlsZSA9IFN0eWxlLlRFWFQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbnN0eWxlID0gZnN0eWxlLmZyYWNOdW0oKTtcbiAgICAgICAgdmFyIGRzdHlsZSA9IGZzdHlsZS5mcmFjRGVuKCk7XG5cbiAgICAgICAgdmFyIG51bWVyID0gYnVpbGRHcm91cChncm91cC52YWx1ZS5udW1lciwgb3B0aW9ucy53aXRoU3R5bGUobnN0eWxlKSk7XG4gICAgICAgIHZhciBudW1lcnJlc2V0ID0gbWFrZVNwYW4oW2ZzdHlsZS5yZXNldCgpLCBuc3R5bGUuY2xzKCldLCBbbnVtZXJdKTtcblxuICAgICAgICB2YXIgZGVub20gPSBidWlsZEdyb3VwKGdyb3VwLnZhbHVlLmRlbm9tLCBvcHRpb25zLndpdGhTdHlsZShkc3R5bGUpKTtcbiAgICAgICAgdmFyIGRlbm9tcmVzZXQgPSBtYWtlU3BhbihbZnN0eWxlLnJlc2V0KCksIGRzdHlsZS5jbHMoKV0sIFtkZW5vbV0pO1xuXG4gICAgICAgIHZhciBydWxlV2lkdGg7XG4gICAgICAgIGlmIChncm91cC52YWx1ZS5oYXNCYXJMaW5lKSB7XG4gICAgICAgICAgICBydWxlV2lkdGggPSBmb250TWV0cmljcy5tZXRyaWNzLmRlZmF1bHRSdWxlVGhpY2tuZXNzIC9cbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcnVsZVdpZHRoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1bGUgMTViXG4gICAgICAgIHZhciBudW1TaGlmdDtcbiAgICAgICAgdmFyIGNsZWFyYW5jZTtcbiAgICAgICAgdmFyIGRlbm9tU2hpZnQ7XG4gICAgICAgIGlmIChmc3R5bGUuc2l6ZSA9PT0gU3R5bGUuRElTUExBWS5zaXplKSB7XG4gICAgICAgICAgICBudW1TaGlmdCA9IGZvbnRNZXRyaWNzLm1ldHJpY3MubnVtMTtcbiAgICAgICAgICAgIGlmIChydWxlV2lkdGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJhbmNlID0gMyAqIHJ1bGVXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJhbmNlID0gNyAqIGZvbnRNZXRyaWNzLm1ldHJpY3MuZGVmYXVsdFJ1bGVUaGlja25lc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZW5vbVNoaWZ0ID0gZm9udE1ldHJpY3MubWV0cmljcy5kZW5vbTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocnVsZVdpZHRoID4gMCkge1xuICAgICAgICAgICAgICAgIG51bVNoaWZ0ID0gZm9udE1ldHJpY3MubWV0cmljcy5udW0yO1xuICAgICAgICAgICAgICAgIGNsZWFyYW5jZSA9IHJ1bGVXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbnVtU2hpZnQgPSBmb250TWV0cmljcy5tZXRyaWNzLm51bTM7XG4gICAgICAgICAgICAgICAgY2xlYXJhbmNlID0gMyAqIGZvbnRNZXRyaWNzLm1ldHJpY3MuZGVmYXVsdFJ1bGVUaGlja25lc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZW5vbVNoaWZ0ID0gZm9udE1ldHJpY3MubWV0cmljcy5kZW5vbTI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZnJhYztcbiAgICAgICAgaWYgKHJ1bGVXaWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gUnVsZSAxNWNcbiAgICAgICAgICAgIHZhciBjYW5kaWF0ZUNsZWFyYW5jZSA9XG4gICAgICAgICAgICAgICAgKG51bVNoaWZ0IC0gbnVtZXIuZGVwdGgpIC0gKGRlbm9tLmhlaWdodCAtIGRlbm9tU2hpZnQpO1xuICAgICAgICAgICAgaWYgKGNhbmRpYXRlQ2xlYXJhbmNlIDwgY2xlYXJhbmNlKSB7XG4gICAgICAgICAgICAgICAgbnVtU2hpZnQgKz0gMC41ICogKGNsZWFyYW5jZSAtIGNhbmRpYXRlQ2xlYXJhbmNlKTtcbiAgICAgICAgICAgICAgICBkZW5vbVNoaWZ0ICs9IDAuNSAqIChjbGVhcmFuY2UgLSBjYW5kaWF0ZUNsZWFyYW5jZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZyYWMgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoW1xuICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogZGVub21yZXNldCwgc2hpZnQ6IGRlbm9tU2hpZnR9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogbnVtZXJyZXNldCwgc2hpZnQ6IC1udW1TaGlmdH1cbiAgICAgICAgICAgIF0sIFwiaW5kaXZpZHVhbFNoaWZ0XCIsIG51bGwsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUnVsZSAxNWRcbiAgICAgICAgICAgIHZhciBheGlzSGVpZ2h0ID0gZm9udE1ldHJpY3MubWV0cmljcy5heGlzSGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoKG51bVNoaWZ0IC0gbnVtZXIuZGVwdGgpIC0gKGF4aXNIZWlnaHQgKyAwLjUgKiBydWxlV2lkdGgpIDxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJhbmNlKSB7XG4gICAgICAgICAgICAgICAgbnVtU2hpZnQgKz1cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJhbmNlIC0gKChudW1TaGlmdCAtIG51bWVyLmRlcHRoKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXhpc0hlaWdodCArIDAuNSAqIHJ1bGVXaWR0aCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKGF4aXNIZWlnaHQgLSAwLjUgKiBydWxlV2lkdGgpIC0gKGRlbm9tLmhlaWdodCAtIGRlbm9tU2hpZnQpIDxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJhbmNlKSB7XG4gICAgICAgICAgICAgICAgZGVub21TaGlmdCArPVxuICAgICAgICAgICAgICAgICAgICBjbGVhcmFuY2UgLSAoKGF4aXNIZWlnaHQgLSAwLjUgKiBydWxlV2lkdGgpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZW5vbS5oZWlnaHQgLSBkZW5vbVNoaWZ0KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtaWQgPSBtYWtlU3BhbihcbiAgICAgICAgICAgICAgICBbb3B0aW9ucy5zdHlsZS5yZXNldCgpLCBTdHlsZS5URVhULmNscygpLCBcImZyYWMtbGluZVwiXSk7XG4gICAgICAgICAgICAvLyBNYW51YWxseSBzZXQgdGhlIGhlaWdodCBvZiB0aGUgbGluZSBiZWNhdXNlIGl0cyBoZWlnaHQgaXNcbiAgICAgICAgICAgIC8vIGNyZWF0ZWQgaW4gQ1NTXG4gICAgICAgICAgICBtaWQuaGVpZ2h0ID0gcnVsZVdpZHRoO1xuXG4gICAgICAgICAgICB2YXIgbWlkU2hpZnQgPSAtKGF4aXNIZWlnaHQgLSAwLjUgKiBydWxlV2lkdGgpO1xuXG4gICAgICAgICAgICBmcmFjID0gYnVpbGRDb21tb24ubWFrZVZMaXN0KFtcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IGRlbm9tcmVzZXQsIHNoaWZ0OiBkZW5vbVNoaWZ0fSxcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IG1pZCwgICAgICAgIHNoaWZ0OiBtaWRTaGlmdH0sXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBudW1lcnJlc2V0LCBzaGlmdDogLW51bVNoaWZ0fVxuICAgICAgICAgICAgXSwgXCJpbmRpdmlkdWFsU2hpZnRcIiwgbnVsbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW5jZSB3ZSBtYW51YWxseSBjaGFuZ2UgdGhlIHN0eWxlIHNvbWV0aW1lcyAod2l0aCBcXGRmcmFjIG9yIFxcdGZyYWMpLFxuICAgICAgICAvLyBhY2NvdW50IGZvciB0aGUgcG9zc2libGUgc2l6ZSBjaGFuZ2UgaGVyZS5cbiAgICAgICAgZnJhYy5oZWlnaHQgKj0gZnN0eWxlLnNpemVNdWx0aXBsaWVyIC8gb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgZnJhYy5kZXB0aCAqPSBmc3R5bGUuc2l6ZU11bHRpcGxpZXIgLyBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuXG4gICAgICAgIC8vIFJ1bGUgMTVlXG4gICAgICAgIHZhciBpbm5lckNoaWxkcmVuID0gW21ha2VTcGFuKFtcIm1mcmFjXCJdLCBbZnJhY10pXTtcblxuICAgICAgICB2YXIgZGVsaW1TaXplO1xuICAgICAgICBpZiAoZnN0eWxlLnNpemUgPT09IFN0eWxlLkRJU1BMQVkuc2l6ZSkge1xuICAgICAgICAgICAgZGVsaW1TaXplID0gZm9udE1ldHJpY3MubWV0cmljcy5kZWxpbTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxpbVNpemUgPSBmb250TWV0cmljcy5tZXRyaWNzLmdldERlbGltMihmc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLmxlZnREZWxpbSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbm5lckNoaWxkcmVuLnVuc2hpZnQoXG4gICAgICAgICAgICAgICAgZGVsaW1pdGVyLmN1c3RvbVNpemVkRGVsaW0oXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnZhbHVlLmxlZnREZWxpbSwgZGVsaW1TaXplLCB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLndpdGhTdHlsZShmc3R5bGUpLCBncm91cC5tb2RlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JvdXAudmFsdWUucmlnaHREZWxpbSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbm5lckNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgICAgICAgZGVsaW1pdGVyLmN1c3RvbVNpemVkRGVsaW0oXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnZhbHVlLnJpZ2h0RGVsaW0sIGRlbGltU2l6ZSwgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aXRoU3R5bGUoZnN0eWxlKSwgZ3JvdXAubW9kZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJtaW5uZXJcIiwgb3B0aW9ucy5zdHlsZS5yZXNldCgpLCBmc3R5bGUuY2xzKCldLFxuICAgICAgICAgICAgaW5uZXJDaGlsZHJlbixcbiAgICAgICAgICAgIG9wdGlvbnMuZ2V0Q29sb3IoKSk7XG4gICAgfSxcblxuICAgIGFycmF5OiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICB2YXIgciwgYztcbiAgICAgICAgdmFyIG5yID0gZ3JvdXAudmFsdWUuYm9keS5sZW5ndGg7XG4gICAgICAgIHZhciBuYyA9IDA7XG4gICAgICAgIHZhciBib2R5ID0gbmV3IEFycmF5KG5yKTtcblxuICAgICAgICAvLyBIb3Jpem9udGFsIHNwYWNpbmdcbiAgICAgICAgdmFyIHB0ID0gMSAvIGZvbnRNZXRyaWNzLm1ldHJpY3MucHRQZXJFbTtcbiAgICAgICAgdmFyIGFycmF5Y29sc2VwID0gNSAqIHB0OyAvLyBcXGFycmF5Y29sc2VwIGluIGFydGljbGUuY2xzXG5cbiAgICAgICAgLy8gVmVydGljYWwgc3BhY2luZ1xuICAgICAgICB2YXIgYmFzZWxpbmVza2lwID0gMTIgKiBwdDsgLy8gc2VlIHNpemUxMC5jbG9cbiAgICAgICAgdmFyIGFycmF5c3RyZXRjaCA9IDE7IC8vIGZhY3Rvciwgc2VlIGx0dGFiLmR0eFxuICAgICAgICB2YXIgYXJyYXlza2lwID0gYXJyYXlzdHJldGNoICogYmFzZWxpbmVza2lwO1xuICAgICAgICB2YXIgYXJzdHJ1dEhlaWdodCA9IDAuNyAqIGFycmF5c2tpcDsgLy8gXFxzdHJ1dGJveCBpbiBsdGZzc3RyYy5kdHggYW5kXG4gICAgICAgIHZhciBhcnN0cnV0RGVwdGggPSAwLjMgKiBhcnJheXNraXA7ICAvLyBcXEBhcnN0cnV0Ym94IGluIGx0dGFiLmR0eFxuXG4gICAgICAgIHZhciB0b3RhbEhlaWdodCA9IDA7XG4gICAgICAgIGZvciAociA9IDA7IHIgPCBncm91cC52YWx1ZS5ib2R5Lmxlbmd0aDsgKytyKSB7XG4gICAgICAgICAgICB2YXIgaW5yb3cgPSBncm91cC52YWx1ZS5ib2R5W3JdO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGFyc3RydXRIZWlnaHQ7IC8vIFxcQGFycmF5IGFkZHMgYW4gXFxAYXJzdHJ1dFxuICAgICAgICAgICAgdmFyIGRlcHRoID0gYXJzdHJ1dERlcHRoOyAgIC8vIHRvIGVhY2ggdG93ICh2aWEgdGhlIHRlbXBsYXRlKVxuICAgICAgICAgICAgaWYgKG5jIDwgaW5yb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbmMgPSBpbnJvdy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb3V0cm93ID0gbmV3IEFycmF5KGlucm93Lmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgaW5yb3cubGVuZ3RoOyArK2MpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWx0ID0gYnVpbGRHcm91cChpbnJvd1tjXSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgZWx0LmRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlcHRoID0gZWx0LmRlcHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0IDwgZWx0LmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBlbHQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRyb3dbY10gPSBlbHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ2FwID0gMDtcbiAgICAgICAgICAgIGlmIChncm91cC52YWx1ZS5yb3dHYXBzW3JdKSB7XG4gICAgICAgICAgICAgICAgZ2FwID0gZ3JvdXAudmFsdWUucm93R2Fwc1tyXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGdhcC51bml0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVtXCI6XG4gICAgICAgICAgICAgICAgICAgIGdhcCA9IGdhcC5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJleFwiOlxuICAgICAgICAgICAgICAgICAgICBnYXAgPSBnYXAubnVtYmVyICogZm9udE1ldHJpY3MubWV0cmljcy5lbVBlckV4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgaGFuZGxlIHVuaXQgXCIgKyBnYXAudW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIGdhcCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnYXAgPiAwKSB7IC8vIFxcQGFyZ2FycmF5Y3JcbiAgICAgICAgICAgICAgICAgICAgZ2FwICs9IGFyc3RydXREZXB0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgZ2FwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IGdhcDsgLy8gXFxAeGFyZ2FycmF5Y3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnYXAgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHJvdy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBvdXRyb3cuZGVwdGggPSBkZXB0aDtcbiAgICAgICAgICAgIHRvdGFsSGVpZ2h0ICs9IGhlaWdodDtcbiAgICAgICAgICAgIG91dHJvdy5wb3MgPSB0b3RhbEhlaWdodDtcbiAgICAgICAgICAgIHRvdGFsSGVpZ2h0ICs9IGRlcHRoICsgZ2FwOyAvLyBcXEB5YXJnYXJyYXljclxuICAgICAgICAgICAgYm9keVtyXSA9IG91dHJvdztcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2Zmc2V0ID0gdG90YWxIZWlnaHQgLyAyICsgZm9udE1ldHJpY3MubWV0cmljcy5heGlzSGVpZ2h0O1xuICAgICAgICB2YXIgY29sYWxpZ24gPSBncm91cC52YWx1ZS5jb2xhbGlnbiB8fCBbXTtcbiAgICAgICAgdmFyIGNvbHMgPSBbXTtcbiAgICAgICAgdmFyIGNvbHNlcDtcbiAgICAgICAgZm9yIChjID0gMDsgYyA8IG5jOyArK2MpIHtcbiAgICAgICAgICAgIGlmIChjID4gMCB8fCBncm91cC52YWx1ZS5oc2tpcEJlZm9yZUFuZEFmdGVyKSB7XG4gICAgICAgICAgICAgICAgY29sc2VwID0gbWFrZVNwYW4oW1wiYXJyYXljb2xzZXBcIl0sIFtdKTtcbiAgICAgICAgICAgICAgICBjb2xzZXAuc3R5bGUud2lkdGggPSBhcnJheWNvbHNlcCArIFwiZW1cIjtcbiAgICAgICAgICAgICAgICBjb2xzLnB1c2goY29sc2VwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb2wgPSBbXTtcbiAgICAgICAgICAgIGZvciAociA9IDA7IHIgPCBucjsgKytyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvdyA9IGJvZHlbcl07XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSByb3dbY107XG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2hpZnQgPSByb3cucG9zIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGVsZW0uZGVwdGggPSByb3cuZGVwdGg7XG4gICAgICAgICAgICAgICAgZWxlbS5oZWlnaHQgPSByb3cuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbC5wdXNoKHt0eXBlOiBcImVsZW1cIiwgZWxlbTogZWxlbSwgc2hpZnQ6IHNoaWZ0fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2wgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoY29sLCBcImluZGl2aWR1YWxTaGlmdFwiLCBudWxsLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGNvbCA9IG1ha2VTcGFuKFxuICAgICAgICAgICAgICAgIFtcImNvbC1hbGlnbi1cIiArIChjb2xhbGlnbltjXSB8fCBcImNcIildLFxuICAgICAgICAgICAgICAgIFtjb2xdKTtcbiAgICAgICAgICAgIGNvbHMucHVzaChjb2wpO1xuICAgICAgICAgICAgaWYgKGMgPCBuYyAtIDEgfHwgZ3JvdXAudmFsdWUuaHNraXBCZWZvcmVBbmRBZnRlcikge1xuICAgICAgICAgICAgICAgIGNvbHNlcCA9IG1ha2VTcGFuKFtcImFycmF5Y29sc2VwXCJdLCBbXSk7XG4gICAgICAgICAgICAgICAgY29sc2VwLnN0eWxlLndpZHRoID0gYXJyYXljb2xzZXAgKyBcImVtXCI7XG4gICAgICAgICAgICAgICAgY29scy5wdXNoKGNvbHNlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYm9keSA9IG1ha2VTcGFuKFtcIm10YWJsZVwiXSwgY29scyk7XG4gICAgICAgIHJldHVybiBtYWtlU3BhbihbXCJtaW5uZXJcIl0sIFtib2R5XSwgb3B0aW9ucy5nZXRDb2xvcigpKTtcbiAgICB9LFxuXG4gICAgc3BhY2luZzogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlID09PSBcIlxcXFwgXCIgfHwgZ3JvdXAudmFsdWUgPT09IFwiXFxcXHNwYWNlXCIgfHxcbiAgICAgICAgICAgIGdyb3VwLnZhbHVlID09PSBcIiBcIiB8fCBncm91cC52YWx1ZSA9PT0gXCJ+XCIpIHtcbiAgICAgICAgICAgIC8vIFNwYWNlcyBhcmUgZ2VuZXJhdGVkIGJ5IGFkZGluZyBhbiBhY3R1YWwgc3BhY2UuIEVhY2ggb2YgdGhlc2VcbiAgICAgICAgICAgIC8vIHRoaW5ncyBoYXMgYW4gZW50cnkgaW4gdGhlIHN5bWJvbHMgdGFibGUsIHNvIHRoZXNlIHdpbGwgYmUgdHVybmVkXG4gICAgICAgICAgICAvLyBpbnRvIGFwcHJvcHJpYXRlIG91dHB1dHMuXG4gICAgICAgICAgICByZXR1cm4gbWFrZVNwYW4oXG4gICAgICAgICAgICAgICAgW1wibW9yZFwiLCBcIm1zcGFjZVwiXSxcbiAgICAgICAgICAgICAgICBbYnVpbGRDb21tb24ubWF0aHJtKGdyb3VwLnZhbHVlLCBncm91cC5tb2RlKV1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlciBraW5kcyBvZiBzcGFjZXMgYXJlIG9mIGFyYml0cmFyeSB3aWR0aC4gV2UgdXNlIENTUyB0b1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgdGhlc2UuXG4gICAgICAgICAgICByZXR1cm4gbWFrZVNwYW4oXG4gICAgICAgICAgICAgICAgW1wibW9yZFwiLCBcIm1zcGFjZVwiLFxuICAgICAgICAgICAgICAgICBidWlsZENvbW1vbi5zcGFjaW5nRnVuY3Rpb25zW2dyb3VwLnZhbHVlXS5jbGFzc05hbWVdKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBsbGFwOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICB2YXIgaW5uZXIgPSBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcImlubmVyXCJdLCBbYnVpbGRHcm91cChncm91cC52YWx1ZS5ib2R5LCBvcHRpb25zLnJlc2V0KCkpXSk7XG4gICAgICAgIHZhciBmaXggPSBtYWtlU3BhbihbXCJmaXhcIl0sIFtdKTtcbiAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFxuICAgICAgICAgICAgW1wibGxhcFwiLCBvcHRpb25zLnN0eWxlLmNscygpXSwgW2lubmVyLCBmaXhdKTtcbiAgICB9LFxuXG4gICAgcmxhcDogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgdmFyIGlubmVyID0gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJpbm5lclwiXSwgW2J1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYm9keSwgb3B0aW9ucy5yZXNldCgpKV0pO1xuICAgICAgICB2YXIgZml4ID0gbWFrZVNwYW4oW1wiZml4XCJdLCBbXSk7XG4gICAgICAgIHJldHVybiBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcInJsYXBcIiwgb3B0aW9ucy5zdHlsZS5jbHMoKV0sIFtpbm5lciwgZml4XSk7XG4gICAgfSxcblxuICAgIG9wOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBPcGVyYXRvcnMgYXJlIGhhbmRsZWQgaW4gdGhlIFRlWGJvb2sgcGcuIDQ0My00NDQsIHJ1bGUgMTMoYSkuXG4gICAgICAgIHZhciBzdXBHcm91cDtcbiAgICAgICAgdmFyIHN1Ykdyb3VwO1xuICAgICAgICB2YXIgaGFzTGltaXRzID0gZmFsc2U7XG4gICAgICAgIGlmIChncm91cC50eXBlID09PSBcInN1cHN1YlwiICkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBsaW1pdHMsIHN1cHN1YiB3aWxsIHBhc3MgdXMgaXRzIGdyb3VwIHRvIGhhbmRsZS4gUHVsbFxuICAgICAgICAgICAgLy8gb3V0IHRoZSBzdXBlcnNjcmlwdCBhbmQgc3Vic2NyaXB0IGFuZCBzZXQgdGhlIGdyb3VwIHRvIHRoZSBvcCBpblxuICAgICAgICAgICAgLy8gaXRzIGJhc2UuXG4gICAgICAgICAgICBzdXBHcm91cCA9IGdyb3VwLnZhbHVlLnN1cDtcbiAgICAgICAgICAgIHN1Ykdyb3VwID0gZ3JvdXAudmFsdWUuc3ViO1xuICAgICAgICAgICAgZ3JvdXAgPSBncm91cC52YWx1ZS5iYXNlO1xuICAgICAgICAgICAgaGFzTGltaXRzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1vc3Qgb3BlcmF0b3JzIGhhdmUgYSBsYXJnZSBzdWNjZXNzb3Igc3ltYm9sLCBidXQgdGhlc2UgZG9uJ3QuXG4gICAgICAgIHZhciBub1N1Y2Nlc3NvciA9IFtcbiAgICAgICAgICAgIFwiXFxcXHNtYWxsaW50XCJcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgbGFyZ2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3R5bGUuc2l6ZSA9PT0gU3R5bGUuRElTUExBWS5zaXplICYmXG4gICAgICAgICAgICBncm91cC52YWx1ZS5zeW1ib2wgJiZcbiAgICAgICAgICAgICF1dGlscy5jb250YWlucyhub1N1Y2Nlc3NvciwgZ3JvdXAudmFsdWUuYm9keSkpIHtcblxuICAgICAgICAgICAgLy8gTW9zdCBzeW1ib2wgb3BlcmF0b3JzIGdldCBsYXJnZXIgaW4gZGlzcGxheXN0eWxlIChydWxlIDEzKVxuICAgICAgICAgICAgbGFyZ2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJhc2U7XG4gICAgICAgIHZhciBiYXNlU2hpZnQgPSAwO1xuICAgICAgICB2YXIgc2xhbnQgPSAwO1xuICAgICAgICBpZiAoZ3JvdXAudmFsdWUuc3ltYm9sKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3ltYm9sLCBjcmVhdGUgdGhlIHN5bWJvbC5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGxhcmdlID8gXCJTaXplMi1SZWd1bGFyXCIgOiBcIlNpemUxLVJlZ3VsYXJcIjtcbiAgICAgICAgICAgIGJhc2UgPSBidWlsZENvbW1vbi5tYWtlU3ltYm9sKFxuICAgICAgICAgICAgICAgIGdyb3VwLnZhbHVlLmJvZHksIHN0eWxlLCBcIm1hdGhcIiwgb3B0aW9ucy5nZXRDb2xvcigpLFxuICAgICAgICAgICAgICAgIFtcIm9wLXN5bWJvbFwiLCBsYXJnZSA/IFwibGFyZ2Utb3BcIiA6IFwic21hbGwtb3BcIiwgXCJtb3BcIl0pO1xuXG4gICAgICAgICAgICAvLyBTaGlmdCB0aGUgc3ltYm9sIHNvIGl0cyBjZW50ZXIgbGllcyBvbiB0aGUgYXhpcyAocnVsZSAxMykuIEl0XG4gICAgICAgICAgICAvLyBhcHBlYXJzIHRoYXQgb3VyIGZvbnRzIGhhdmUgdGhlIGNlbnRlcnMgb2YgdGhlIHN5bWJvbHMgYWxyZWFkeVxuICAgICAgICAgICAgLy8gYWxtb3N0IG9uIHRoZSBheGlzLCBzbyB0aGVzZSBudW1iZXJzIGFyZSB2ZXJ5IHNtYWxsLiBOb3RlIHdlXG4gICAgICAgICAgICAvLyBkb24ndCBhY3R1YWxseSBhcHBseSB0aGlzIGhlcmUsIGJ1dCBpbnN0ZWFkIGl0IGlzIHVzZWQgZWl0aGVyIGluXG4gICAgICAgICAgICAvLyB0aGUgdmxpc3QgY3JlYXRpb24gb3Igc2VwYXJhdGVseSB3aGVuIHRoZXJlIGFyZSBubyBsaW1pdHMuXG4gICAgICAgICAgICBiYXNlU2hpZnQgPSAoYmFzZS5oZWlnaHQgLSBiYXNlLmRlcHRoKSAvIDIgLVxuICAgICAgICAgICAgICAgIGZvbnRNZXRyaWNzLm1ldHJpY3MuYXhpc0hlaWdodCAqXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcblxuICAgICAgICAgICAgLy8gVGhlIHNsYW50IG9mIHRoZSBzeW1ib2wgaXMganVzdCBpdHMgaXRhbGljIGNvcnJlY3Rpb24uXG4gICAgICAgICAgICBzbGFudCA9IGJhc2UuaXRhbGljO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGlzIGEgdGV4dCBvcGVyYXRvci4gQnVpbGQgdGhlIHRleHQgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIG9wZXJhdG9yJ3MgbmFtZS5cbiAgICAgICAgICAgIC8vIFRPRE8oZW1pbHkpOiBBZGQgYSBzcGFjZSBpbiB0aGUgbWlkZGxlIG9mIHNvbWUgb2YgdGhlc2VcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycywgbGlrZSBcXGxpbXN1cFxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBncm91cC52YWx1ZS5ib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goYnVpbGRDb21tb24ubWF0aHJtKGdyb3VwLnZhbHVlLmJvZHlbaV0sIGdyb3VwLm1vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhc2UgPSBtYWtlU3BhbihbXCJtb3BcIl0sIG91dHB1dCwgb3B0aW9ucy5nZXRDb2xvcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNMaW1pdHMpIHtcbiAgICAgICAgICAgIC8vIElFIDggY2xpcHMgXFxpbnQgaWYgaXQgaXMgaW4gYSBkaXNwbGF5OiBpbmxpbmUtYmxvY2suIFdlIHdyYXAgaXRcbiAgICAgICAgICAgIC8vIGluIGEgbmV3IHNwYW4gc28gaXQgaXMgYW4gaW5saW5lLCBhbmQgd29ya3MuXG4gICAgICAgICAgICBiYXNlID0gbWFrZVNwYW4oW10sIFtiYXNlXSk7XG5cbiAgICAgICAgICAgIHZhciBzdXBtaWQsIHN1cEtlcm4sIHN1Ym1pZCwgc3ViS2VybjtcbiAgICAgICAgICAgIC8vIFdlIG1hbnVhbGx5IGhhdmUgdG8gaGFuZGxlIHRoZSBzdXBlcnNjcmlwdHMgYW5kIHN1YnNjcmlwdHMuIFRoaXMsXG4gICAgICAgICAgICAvLyBhc2lkZSBmcm9tIHRoZSBrZXJuIGNhbGN1bGF0aW9ucywgaXMgY29waWVkIGZyb20gc3Vwc3ViLlxuICAgICAgICAgICAgaWYgKHN1cEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cCA9IGJ1aWxkR3JvdXAoXG4gICAgICAgICAgICAgICAgICAgIHN1cEdyb3VwLCBvcHRpb25zLndpdGhTdHlsZShvcHRpb25zLnN0eWxlLnN1cCgpKSk7XG4gICAgICAgICAgICAgICAgc3VwbWlkID0gbWFrZVNwYW4oXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zLnN0eWxlLnJlc2V0KCksIG9wdGlvbnMuc3R5bGUuc3VwKCkuY2xzKCldLCBbc3VwXSk7XG5cbiAgICAgICAgICAgICAgICBzdXBLZXJuID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgIGZvbnRNZXRyaWNzLm1ldHJpY3MuYmlnT3BTcGFjaW5nMSxcbiAgICAgICAgICAgICAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5iaWdPcFNwYWNpbmczIC0gc3VwLmRlcHRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN1Ykdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IGJ1aWxkR3JvdXAoXG4gICAgICAgICAgICAgICAgICAgIHN1Ykdyb3VwLCBvcHRpb25zLndpdGhTdHlsZShvcHRpb25zLnN0eWxlLnN1YigpKSk7XG4gICAgICAgICAgICAgICAgc3VibWlkID0gbWFrZVNwYW4oXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zLnN0eWxlLnJlc2V0KCksIG9wdGlvbnMuc3R5bGUuc3ViKCkuY2xzKCldLFxuICAgICAgICAgICAgICAgICAgICBbc3ViXSk7XG5cbiAgICAgICAgICAgICAgICBzdWJLZXJuID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgIGZvbnRNZXRyaWNzLm1ldHJpY3MuYmlnT3BTcGFjaW5nMixcbiAgICAgICAgICAgICAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5iaWdPcFNwYWNpbmc0IC0gc3ViLmhlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBmaW5hbCBncm91cCBhcyBhIHZsaXN0IG9mIHRoZSBwb3NzaWJsZSBzdWJzY3JpcHQsIGJhc2UsXG4gICAgICAgICAgICAvLyBhbmQgcG9zc2libGUgc3VwZXJzY3JpcHQuXG4gICAgICAgICAgICB2YXIgZmluYWxHcm91cCwgdG9wLCBib3R0b207XG4gICAgICAgICAgICBpZiAoIXN1cEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gYmFzZS5oZWlnaHQgLSBiYXNlU2hpZnQ7XG5cbiAgICAgICAgICAgICAgICBmaW5hbEdyb3VwID0gYnVpbGRDb21tb24ubWFrZVZMaXN0KFtcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiBmb250TWV0cmljcy5tZXRyaWNzLmJpZ09wU3BhY2luZzV9LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IHN1Ym1pZH0sXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogc3ViS2Vybn0sXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogYmFzZX1cbiAgICAgICAgICAgICAgICBdLCBcInRvcFwiLCB0b3AsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgLy8gSGVyZSwgd2Ugc2hpZnQgdGhlIGxpbWl0cyBieSB0aGUgc2xhbnQgb2YgdGhlIHN5bWJvbC4gTm90ZVxuICAgICAgICAgICAgICAgIC8vIHRoYXQgd2UgYXJlIHN1cHBvc2VkIHRvIHNoaWZ0IHRoZSBsaW1pdHMgYnkgMS8yIG9mIHRoZSBzbGFudCxcbiAgICAgICAgICAgICAgICAvLyBidXQgc2luY2Ugd2UgYXJlIGNlbnRlcmluZyB0aGUgbGltaXRzIGFkZGluZyBhIGZ1bGwgc2xhbnQgb2ZcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4gd2lsbCBzaGlmdCBieSAxLzIgdGhhdC5cbiAgICAgICAgICAgICAgICBmaW5hbEdyb3VwLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpbkxlZnQgPSAtc2xhbnQgKyBcImVtXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzdWJHcm91cCkge1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9IGJhc2UuZGVwdGggKyBiYXNlU2hpZnQ7XG5cbiAgICAgICAgICAgICAgICBmaW5hbEdyb3VwID0gYnVpbGRDb21tb24ubWFrZVZMaXN0KFtcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBiYXNlfSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiBzdXBLZXJufSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBzdXBtaWR9LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IGZvbnRNZXRyaWNzLm1ldHJpY3MuYmlnT3BTcGFjaW5nNX1cbiAgICAgICAgICAgICAgICBdLCBcImJvdHRvbVwiLCBib3R0b20sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VlIGNvbW1lbnQgYWJvdmUgYWJvdXQgc2xhbnRzXG4gICAgICAgICAgICAgICAgZmluYWxHcm91cC5jaGlsZHJlblsxXS5zdHlsZS5tYXJnaW5MZWZ0ID0gc2xhbnQgKyBcImVtXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzdXBHcm91cCAmJiAhc3ViR3JvdXApIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGNhc2UgcHJvYmFibHkgc2hvdWxkbid0IG9jY3VyICh0aGlzIHdvdWxkIG1lYW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gc3Vwc3ViIHdhcyBzZW5kaW5nIHVzIGEgZ3JvdXAgd2l0aCBubyBzdXBlcnNjcmlwdCBvclxuICAgICAgICAgICAgICAgIC8vIHN1YnNjcmlwdCkgYnV0IGJlIHNhZmUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9IGZvbnRNZXRyaWNzLm1ldHJpY3MuYmlnT3BTcGFjaW5nNSArXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pZC5oZWlnaHQgKyBzdWJtaWQuZGVwdGggK1xuICAgICAgICAgICAgICAgICAgICBzdWJLZXJuICtcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5kZXB0aCArIGJhc2VTaGlmdDtcblxuICAgICAgICAgICAgICAgIGZpbmFsR3JvdXAgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoW1xuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IGZvbnRNZXRyaWNzLm1ldHJpY3MuYmlnT3BTcGFjaW5nNX0sXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogc3VibWlkfSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiBzdWJLZXJufSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBiYXNlfSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiBzdXBLZXJufSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBzdXBtaWR9LFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IGZvbnRNZXRyaWNzLm1ldHJpY3MuYmlnT3BTcGFjaW5nNX1cbiAgICAgICAgICAgICAgICBdLCBcImJvdHRvbVwiLCBib3R0b20sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VlIGNvbW1lbnQgYWJvdmUgYWJvdXQgc2xhbnRzXG4gICAgICAgICAgICAgICAgZmluYWxHcm91cC5jaGlsZHJlblswXS5zdHlsZS5tYXJnaW5MZWZ0ID0gLXNsYW50ICsgXCJlbVwiO1xuICAgICAgICAgICAgICAgIGZpbmFsR3JvdXAuY2hpbGRyZW5bMl0uc3R5bGUubWFyZ2luTGVmdCA9IHNsYW50ICsgXCJlbVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWFrZVNwYW4oW1wibW9wXCIsIFwib3AtbGltaXRzXCJdLCBbZmluYWxHcm91cF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGdyb3VwLnZhbHVlLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgIGJhc2Uuc3R5bGUudG9wID0gYmFzZVNoaWZ0ICsgXCJlbVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBrYXRleDogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgLy8gVGhlIEthVGVYIGxvZ28uIFRoZSBvZmZzZXRzIGZvciB0aGUgSyBhbmQgYSB3ZXJlIGNob3NlbiB0byBsb29rXG4gICAgICAgIC8vIGdvb2QsIGJ1dCB0aGUgb2Zmc2V0cyBmb3IgdGhlIFQsIEUsIGFuZCBYIHdlcmUgdGFrZW4gZnJvbSB0aGVcbiAgICAgICAgLy8gZGVmaW5pdGlvbiBvZiBcXFRlWCBpbiBUZVggKHNlZSBUZVhib29rIHBnLiAzNTYpXG4gICAgICAgIHZhciBrID0gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJrXCJdLCBbYnVpbGRDb21tb24ubWF0aHJtKFwiS1wiLCBncm91cC5tb2RlKV0pO1xuICAgICAgICB2YXIgYSA9IG1ha2VTcGFuKFxuICAgICAgICAgICAgW1wiYVwiXSwgW2J1aWxkQ29tbW9uLm1hdGhybShcIkFcIiwgZ3JvdXAubW9kZSldKTtcblxuICAgICAgICBhLmhlaWdodCA9IChhLmhlaWdodCArIDAuMikgKiAwLjc1O1xuICAgICAgICBhLmRlcHRoID0gKGEuaGVpZ2h0IC0gMC4yKSAqIDAuNzU7XG5cbiAgICAgICAgdmFyIHQgPSBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcInRcIl0sIFtidWlsZENvbW1vbi5tYXRocm0oXCJUXCIsIGdyb3VwLm1vZGUpXSk7XG4gICAgICAgIHZhciBlID0gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJlXCJdLCBbYnVpbGRDb21tb24ubWF0aHJtKFwiRVwiLCBncm91cC5tb2RlKV0pO1xuXG4gICAgICAgIGUuaGVpZ2h0ID0gKGUuaGVpZ2h0IC0gMC4yMTU1KTtcbiAgICAgICAgZS5kZXB0aCA9IChlLmRlcHRoICsgMC4yMTU1KTtcblxuICAgICAgICB2YXIgeCA9IG1ha2VTcGFuKFxuICAgICAgICAgICAgW1wieFwiXSwgW2J1aWxkQ29tbW9uLm1hdGhybShcIlhcIiwgZ3JvdXAubW9kZSldKTtcblxuICAgICAgICByZXR1cm4gbWFrZVNwYW4oXG4gICAgICAgICAgICBbXCJrYXRleC1sb2dvXCJdLCBbaywgYSwgdCwgZSwgeF0sIG9wdGlvbnMuZ2V0Q29sb3IoKSk7XG4gICAgfSxcblxuICAgIG92ZXJsaW5lOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBPdmVybGluZXMgYXJlIGhhbmRsZWQgaW4gdGhlIFRlWGJvb2sgcGcgNDQzLCBSdWxlIDkuXG5cbiAgICAgICAgLy8gQnVpbGQgdGhlIGlubmVyIGdyb3VwIGluIHRoZSBjcmFtcGVkIHN0eWxlLlxuICAgICAgICB2YXIgaW5uZXJHcm91cCA9IGJ1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYm9keSxcbiAgICAgICAgICAgICAgICBvcHRpb25zLndpdGhTdHlsZShvcHRpb25zLnN0eWxlLmNyYW1wKCkpKTtcblxuICAgICAgICB2YXIgcnVsZVdpZHRoID0gZm9udE1ldHJpY3MubWV0cmljcy5kZWZhdWx0UnVsZVRoaWNrbmVzcyAvXG4gICAgICAgICAgICBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGluZSBhYm92ZSB0aGUgYm9keVxuICAgICAgICB2YXIgbGluZSA9IG1ha2VTcGFuKFxuICAgICAgICAgICAgW29wdGlvbnMuc3R5bGUucmVzZXQoKSwgU3R5bGUuVEVYVC5jbHMoKSwgXCJvdmVybGluZS1saW5lXCJdKTtcbiAgICAgICAgbGluZS5oZWlnaHQgPSBydWxlV2lkdGg7XG4gICAgICAgIGxpbmUubWF4Rm9udFNpemUgPSAxLjA7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIHZsaXN0LCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBrZXJuc1xuICAgICAgICB2YXIgdmxpc3QgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoW1xuICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBpbm5lckdyb3VwfSxcbiAgICAgICAgICAgIHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogMyAqIHJ1bGVXaWR0aH0sXG4gICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IGxpbmV9LFxuICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiBydWxlV2lkdGh9XG4gICAgICAgIF0sIFwiZmlyc3RCYXNlbGluZVwiLCBudWxsLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gbWFrZVNwYW4oW1wib3ZlcmxpbmVcIiwgXCJtb3JkXCJdLCBbdmxpc3RdLCBvcHRpb25zLmdldENvbG9yKCkpO1xuICAgIH0sXG5cbiAgICBzcXJ0OiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBTcXVhcmUgcm9vdHMgYXJlIGhhbmRsZWQgaW4gdGhlIFRlWGJvb2sgcGcuIDQ0MywgUnVsZSAxMS5cblxuICAgICAgICAvLyBGaXJzdCwgd2UgZG8gdGhlIHNhbWUgc3RlcHMgYXMgaW4gb3ZlcmxpbmUgdG8gYnVpbGQgdGhlIGlubmVyIGdyb3VwXG4gICAgICAgIC8vIGFuZCBsaW5lXG4gICAgICAgIHZhciBpbm5lciA9IGJ1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYm9keSxcbiAgICAgICAgICAgICAgICBvcHRpb25zLndpdGhTdHlsZShvcHRpb25zLnN0eWxlLmNyYW1wKCkpKTtcblxuICAgICAgICB2YXIgcnVsZVdpZHRoID0gZm9udE1ldHJpY3MubWV0cmljcy5kZWZhdWx0UnVsZVRoaWNrbmVzcyAvXG4gICAgICAgICAgICBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuXG4gICAgICAgIHZhciBsaW5lID0gbWFrZVNwYW4oXG4gICAgICAgICAgICBbb3B0aW9ucy5zdHlsZS5yZXNldCgpLCBTdHlsZS5URVhULmNscygpLCBcInNxcnQtbGluZVwiXSwgW10sXG4gICAgICAgICAgICBvcHRpb25zLmdldENvbG9yKCkpO1xuICAgICAgICBsaW5lLmhlaWdodCA9IHJ1bGVXaWR0aDtcbiAgICAgICAgbGluZS5tYXhGb250U2l6ZSA9IDEuMDtcblxuICAgICAgICB2YXIgcGhpID0gcnVsZVdpZHRoO1xuICAgICAgICBpZiAob3B0aW9ucy5zdHlsZS5pZCA8IFN0eWxlLlRFWFQuaWQpIHtcbiAgICAgICAgICAgIHBoaSA9IGZvbnRNZXRyaWNzLm1ldHJpY3MueEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY2xlYXJhbmNlIGJldHdlZW4gdGhlIGJvZHkgYW5kIGxpbmVcbiAgICAgICAgdmFyIGxpbmVDbGVhcmFuY2UgPSBydWxlV2lkdGggKyBwaGkgLyA0O1xuXG4gICAgICAgIHZhciBpbm5lckhlaWdodCA9XG4gICAgICAgICAgICAoaW5uZXIuaGVpZ2h0ICsgaW5uZXIuZGVwdGgpICogb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgdmFyIG1pbkRlbGltaXRlckhlaWdodCA9IGlubmVySGVpZ2h0ICsgbGluZUNsZWFyYW5jZSArIHJ1bGVXaWR0aDtcblxuICAgICAgICAvLyBDcmVhdGUgYSBcXHN1cmQgZGVsaW1pdGVyIG9mIHRoZSByZXF1aXJlZCBtaW5pbXVtIHNpemVcbiAgICAgICAgdmFyIGRlbGltID0gbWFrZVNwYW4oW1wic3FydC1zaWduXCJdLCBbXG4gICAgICAgICAgICBkZWxpbWl0ZXIuY3VzdG9tU2l6ZWREZWxpbShcIlxcXFxzdXJkXCIsIG1pbkRlbGltaXRlckhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCBvcHRpb25zLCBncm91cC5tb2RlKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZ2V0Q29sb3IoKSk7XG5cbiAgICAgICAgdmFyIGRlbGltRGVwdGggPSAoZGVsaW0uaGVpZ2h0ICsgZGVsaW0uZGVwdGgpIC0gcnVsZVdpZHRoO1xuXG4gICAgICAgIC8vIEFkanVzdCB0aGUgY2xlYXJhbmNlIGJhc2VkIG9uIHRoZSBkZWxpbWl0ZXIgc2l6ZVxuICAgICAgICBpZiAoZGVsaW1EZXB0aCA+IGlubmVyLmhlaWdodCArIGlubmVyLmRlcHRoICsgbGluZUNsZWFyYW5jZSkge1xuICAgICAgICAgICAgbGluZUNsZWFyYW5jZSA9XG4gICAgICAgICAgICAgICAgKGxpbmVDbGVhcmFuY2UgKyBkZWxpbURlcHRoIC0gaW5uZXIuaGVpZ2h0IC0gaW5uZXIuZGVwdGgpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNoaWZ0IHRoZSBkZWxpbWl0ZXIgc28gdGhhdCBpdHMgdG9wIGxpbmVzIHVwIHdpdGggdGhlIHRvcCBvZiB0aGUgbGluZVxuICAgICAgICB2YXIgZGVsaW1TaGlmdCA9IC0oaW5uZXIuaGVpZ2h0ICsgbGluZUNsZWFyYW5jZSArIHJ1bGVXaWR0aCkgKyBkZWxpbS5oZWlnaHQ7XG4gICAgICAgIGRlbGltLnN0eWxlLnRvcCA9IGRlbGltU2hpZnQgKyBcImVtXCI7XG4gICAgICAgIGRlbGltLmhlaWdodCAtPSBkZWxpbVNoaWZ0O1xuICAgICAgICBkZWxpbS5kZXB0aCArPSBkZWxpbVNoaWZ0O1xuXG4gICAgICAgIC8vIFdlIGFkZCBhIHNwZWNpYWwgY2FzZSBoZXJlLCBiZWNhdXNlIGV2ZW4gd2hlbiBgaW5uZXJgIGlzIGVtcHR5LCB3ZVxuICAgICAgICAvLyBzdGlsbCBnZXQgYSBsaW5lLiBTbywgd2UgdXNlIGEgc2ltcGxlIGhldXJpc3RpYyB0byBkZWNpZGUgaWYgd2VcbiAgICAgICAgLy8gc2hvdWxkIG9taXQgdGhlIGJvZHkgZW50aXJlbHkuIChub3RlIHRoaXMgZG9lc24ndCB3b3JrIGZvciBzb21ldGhpbmdcbiAgICAgICAgLy8gbGlrZSBgXFxzcXJ0e1xccmxhcHt4fX1gLCBidXQgaWYgc29tZW9uZSBpcyBkb2luZyB0aGF0IHRoZXkgZGVzZXJ2ZSBmb3JcbiAgICAgICAgLy8gaXQgbm90IHRvIHdvcmsuXG4gICAgICAgIHZhciBib2R5O1xuICAgICAgICBpZiAoaW5uZXIuaGVpZ2h0ID09PSAwICYmIGlubmVyLmRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICBib2R5ID0gbWFrZVNwYW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSBidWlsZENvbW1vbi5tYWtlVkxpc3QoW1xuICAgICAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogaW5uZXJ9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiBcImtlcm5cIiwgc2l6ZTogbGluZUNsZWFyYW5jZX0sXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBsaW5lfSxcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJrZXJuXCIsIHNpemU6IHJ1bGVXaWR0aH1cbiAgICAgICAgICAgIF0sIFwiZmlyc3RCYXNlbGluZVwiLCBudWxsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZ3JvdXAudmFsdWUuaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlU3BhbihbXCJzcXJ0XCIsIFwibW9yZFwiXSwgW2RlbGltLCBib2R5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIG9wdGlvbmFsIHJvb3QgaW5kZXhcblxuICAgICAgICAgICAgLy8gVGhlIGluZGV4IGlzIGFsd2F5cyBpbiBzY3JpcHRzY3JpcHQgc3R5bGVcbiAgICAgICAgICAgIHZhciByb290ID0gYnVpbGRHcm91cChcbiAgICAgICAgICAgICAgICBncm91cC52YWx1ZS5pbmRleCxcbiAgICAgICAgICAgICAgICBvcHRpb25zLndpdGhTdHlsZShTdHlsZS5TQ1JJUFRTQ1JJUFQpKTtcbiAgICAgICAgICAgIHZhciByb290V3JhcCA9IG1ha2VTcGFuKFxuICAgICAgICAgICAgICAgIFtvcHRpb25zLnN0eWxlLnJlc2V0KCksIFN0eWxlLlNDUklQVFNDUklQVC5jbHMoKV0sXG4gICAgICAgICAgICAgICAgW3Jvb3RdKTtcblxuICAgICAgICAgICAgLy8gRmlndXJlIG91dCB0aGUgaGVpZ2h0IGFuZCBkZXB0aCBvZiB0aGUgaW5uZXIgcGFydFxuICAgICAgICAgICAgdmFyIGlubmVyUm9vdEhlaWdodCA9IE1hdGgubWF4KGRlbGltLmhlaWdodCwgYm9keS5oZWlnaHQpO1xuICAgICAgICAgICAgdmFyIGlubmVyUm9vdERlcHRoID0gTWF0aC5tYXgoZGVsaW0uZGVwdGgsIGJvZHkuZGVwdGgpO1xuXG4gICAgICAgICAgICAvLyBUaGUgYW1vdW50IHRoZSBpbmRleCBpcyBzaGlmdGVkIGJ5LiBUaGlzIGlzIHRha2VuIGZyb20gdGhlIFRlWFxuICAgICAgICAgICAgLy8gc291cmNlLCBpbiB0aGUgZGVmaW5pdGlvbiBvZiBgXFxyQEB0YC5cbiAgICAgICAgICAgIHZhciB0b1NoaWZ0ID0gMC42ICogKGlubmVyUm9vdEhlaWdodCAtIGlubmVyUm9vdERlcHRoKTtcblxuICAgICAgICAgICAgLy8gQnVpbGQgYSBWTGlzdCB3aXRoIHRoZSBzdXBlcnNjcmlwdCBzaGlmdGVkIHVwIGNvcnJlY3RseVxuICAgICAgICAgICAgdmFyIHJvb3RWTGlzdCA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChcbiAgICAgICAgICAgICAgICBbe3R5cGU6IFwiZWxlbVwiLCBlbGVtOiByb290V3JhcH1dLFxuICAgICAgICAgICAgICAgIFwic2hpZnRcIiwgLXRvU2hpZnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gQWRkIGEgY2xhc3Mgc3Vycm91bmRpbmcgaXQgc28gd2UgY2FuIGFkZCBvbiB0aGUgYXBwcm9wcmlhdGVcbiAgICAgICAgICAgIC8vIGtlcm5pbmdcbiAgICAgICAgICAgIHZhciByb290Vkxpc3RXcmFwID0gbWFrZVNwYW4oW1wicm9vdFwiXSwgW3Jvb3RWTGlzdF0pO1xuXG4gICAgICAgICAgICByZXR1cm4gbWFrZVNwYW4oW1wic3FydFwiLCBcIm1vcmRcIl0sIFtyb290Vkxpc3RXcmFwLCBkZWxpbSwgYm9keV0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNpemluZzogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgLy8gSGFuZGxlIHNpemluZyBvcGVyYXRvcnMgbGlrZSBcXEh1Z2UuIFJlYWwgVGVYIGRvZXNuJ3QgYWN0dWFsbHkgYWxsb3dcbiAgICAgICAgLy8gdGhlc2UgZnVuY3Rpb25zIGluc2lkZSBvZiBtYXRoIGV4cHJlc3Npb25zLCBzbyB3ZSBkbyBzb21lIHNwZWNpYWxcbiAgICAgICAgLy8gaGFuZGxpbmcuXG4gICAgICAgIHZhciBpbm5lciA9IGJ1aWxkRXhwcmVzc2lvbihncm91cC52YWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zLndpdGhTaXplKGdyb3VwLnZhbHVlLnNpemUpLCBwcmV2KTtcblxuICAgICAgICB2YXIgc3BhbiA9IG1ha2VTcGFuKFtcIm1vcmRcIl0sXG4gICAgICAgICAgICBbbWFrZVNwYW4oW1wic2l6aW5nXCIsIFwicmVzZXQtXCIgKyBvcHRpb25zLnNpemUsIGdyb3VwLnZhbHVlLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc3R5bGUuY2xzKCldLFxuICAgICAgICAgICAgICAgICAgICAgIGlubmVyKV0pO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29ycmVjdCBtYXhGb250U2l6ZSBtYW51YWxseVxuICAgICAgICB2YXIgZm9udFNpemUgPSBidWlsZENvbW1vbi5zaXppbmdNdWx0aXBsaWVyW2dyb3VwLnZhbHVlLnNpemVdO1xuICAgICAgICBzcGFuLm1heEZvbnRTaXplID0gZm9udFNpemUgKiBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuXG4gICAgICAgIHJldHVybiBzcGFuO1xuICAgIH0sXG5cbiAgICBzdHlsaW5nOiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBTdHlsZSBjaGFuZ2VzIGFyZSBoYW5kbGVkIGluIHRoZSBUZVhib29rIG9uIHBnLiA0NDIsIFJ1bGUgMy5cblxuICAgICAgICAvLyBGaWd1cmUgb3V0IHdoYXQgc3R5bGUgd2UncmUgY2hhbmdpbmcgdG8uXG4gICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBTdHlsZS5ESVNQTEFZLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFN0eWxlLlRFWFQsXG4gICAgICAgICAgICBcInNjcmlwdFwiOiBTdHlsZS5TQ1JJUFQsXG4gICAgICAgICAgICBcInNjcmlwdHNjcmlwdFwiOiBTdHlsZS5TQ1JJUFRTQ1JJUFRcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbmV3U3R5bGUgPSBzdHlsZVtncm91cC52YWx1ZS5zdHlsZV07XG5cbiAgICAgICAgLy8gQnVpbGQgdGhlIGlubmVyIGV4cHJlc3Npb24gaW4gdGhlIG5ldyBzdHlsZS5cbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRFeHByZXNzaW9uKFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUudmFsdWUsIG9wdGlvbnMud2l0aFN0eWxlKG5ld1N0eWxlKSwgcHJldik7XG5cbiAgICAgICAgcmV0dXJuIG1ha2VTcGFuKFtvcHRpb25zLnN0eWxlLnJlc2V0KCksIG5ld1N0eWxlLmNscygpXSwgaW5uZXIpO1xuICAgIH0sXG5cbiAgICBkZWxpbXNpemluZzogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgdmFyIGRlbGltID0gZ3JvdXAudmFsdWUudmFsdWU7XG5cbiAgICAgICAgaWYgKGRlbGltID09PSBcIi5cIikge1xuICAgICAgICAgICAgLy8gRW1wdHkgZGVsaW1pdGVycyBzdGlsbCBjb3VudCBhcyBlbGVtZW50cywgZXZlbiB0aG91Z2ggdGhleSBkb24ndFxuICAgICAgICAgICAgLy8gc2hvdyBhbnl0aGluZy5cbiAgICAgICAgICAgIHJldHVybiBtYWtlU3BhbihbZ3JvdXBUb1R5cGVbZ3JvdXAudmFsdWUuZGVsaW1UeXBlXV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNlIGRlbGltaXRlci5zaXplZERlbGltIHRvIGdlbmVyYXRlIHRoZSBkZWxpbWl0ZXIuXG4gICAgICAgIHJldHVybiBtYWtlU3BhbihcbiAgICAgICAgICAgIFtncm91cFRvVHlwZVtncm91cC52YWx1ZS5kZWxpbVR5cGVdXSxcbiAgICAgICAgICAgIFtkZWxpbWl0ZXIuc2l6ZWREZWxpbShcbiAgICAgICAgICAgICAgICBkZWxpbSwgZ3JvdXAudmFsdWUuc2l6ZSwgb3B0aW9ucywgZ3JvdXAubW9kZSldKTtcbiAgICB9LFxuXG4gICAgbGVmdHJpZ2h0OiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBCdWlsZCB0aGUgaW5uZXIgZXhwcmVzc2lvblxuICAgICAgICB2YXIgaW5uZXIgPSBidWlsZEV4cHJlc3Npb24oZ3JvdXAudmFsdWUuYm9keSwgb3B0aW9ucy5yZXNldCgpKTtcblxuICAgICAgICB2YXIgaW5uZXJIZWlnaHQgPSAwO1xuICAgICAgICB2YXIgaW5uZXJEZXB0aCA9IDA7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIGl0cyBoZWlnaHQgYW5kIGRlcHRoXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5uZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlubmVySGVpZ2h0ID0gTWF0aC5tYXgoaW5uZXJbaV0uaGVpZ2h0LCBpbm5lckhlaWdodCk7XG4gICAgICAgICAgICBpbm5lckRlcHRoID0gTWF0aC5tYXgoaW5uZXJbaV0uZGVwdGgsIGlubmVyRGVwdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHNpemUgb2YgZGVsaW1pdGVycyBpcyB0aGUgc2FtZSwgcmVnYXJkbGVzcyBvZiB3aGF0IHN0eWxlIHdlIGFyZVxuICAgICAgICAvLyBpbi4gVGh1cywgdG8gY29ycmVjdGx5IGNhbGN1bGF0ZSB0aGUgc2l6ZSBvZiBkZWxpbWl0ZXIgd2UgbmVlZCBhcm91bmRcbiAgICAgICAgLy8gYSBncm91cCwgd2Ugc2NhbGUgZG93biB0aGUgaW5uZXIgc2l6ZSBiYXNlZCBvbiB0aGUgc2l6ZS5cbiAgICAgICAgaW5uZXJIZWlnaHQgKj0gb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgaW5uZXJEZXB0aCAqPSBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyO1xuXG4gICAgICAgIHZhciBsZWZ0RGVsaW07XG4gICAgICAgIGlmIChncm91cC52YWx1ZS5sZWZ0ID09PSBcIi5cIikge1xuICAgICAgICAgICAgLy8gRW1wdHkgZGVsaW1pdGVycyBpbiBcXGxlZnQgYW5kIFxccmlnaHQgbWFrZSBudWxsIGRlbGltaXRlciBzcGFjZXMuXG4gICAgICAgICAgICBsZWZ0RGVsaW0gPSBtYWtlU3BhbihbXCJudWxsZGVsaW1pdGVyXCJdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgdXNlIGxlZnRSaWdodERlbGltIHRvIGdlbmVyYXRlIHRoZSBjb3JyZWN0IHNpemVkXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXIuXG4gICAgICAgICAgICBsZWZ0RGVsaW0gPSBkZWxpbWl0ZXIubGVmdFJpZ2h0RGVsaW0oXG4gICAgICAgICAgICAgICAgZ3JvdXAudmFsdWUubGVmdCwgaW5uZXJIZWlnaHQsIGlubmVyRGVwdGgsIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZ3JvdXAubW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGV4cHJlc3Npb25cbiAgICAgICAgaW5uZXIudW5zaGlmdChsZWZ0RGVsaW0pO1xuXG4gICAgICAgIHZhciByaWdodERlbGltO1xuICAgICAgICAvLyBTYW1lIGZvciB0aGUgcmlnaHQgZGVsaW1pdGVyXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5yaWdodCA9PT0gXCIuXCIpIHtcbiAgICAgICAgICAgIHJpZ2h0RGVsaW0gPSBtYWtlU3BhbihbXCJudWxsZGVsaW1pdGVyXCJdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJpZ2h0RGVsaW0gPSBkZWxpbWl0ZXIubGVmdFJpZ2h0RGVsaW0oXG4gICAgICAgICAgICAgICAgZ3JvdXAudmFsdWUucmlnaHQsIGlubmVySGVpZ2h0LCBpbm5lckRlcHRoLCBvcHRpb25zLFxuICAgICAgICAgICAgICAgIGdyb3VwLm1vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBpdCB0byB0aGUgZW5kIG9mIHRoZSBleHByZXNzaW9uLlxuICAgICAgICBpbm5lci5wdXNoKHJpZ2h0RGVsaW0pO1xuXG4gICAgICAgIHJldHVybiBtYWtlU3BhbihcbiAgICAgICAgICAgIFtcIm1pbm5lclwiLCBvcHRpb25zLnN0eWxlLmNscygpXSwgaW5uZXIsIG9wdGlvbnMuZ2V0Q29sb3IoKSk7XG4gICAgfSxcblxuICAgIHJ1bGU6IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgICAgIC8vIE1ha2UgYW4gZW1wdHkgc3BhbiBmb3IgdGhlIHJ1bGVcbiAgICAgICAgdmFyIHJ1bGUgPSBtYWtlU3BhbihbXCJtb3JkXCIsIFwicnVsZVwiXSwgW10sIG9wdGlvbnMuZ2V0Q29sb3IoKSk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzaGlmdCwgd2lkdGgsIGFuZCBoZWlnaHQgb2YgdGhlIHJ1bGUsIGFuZCBhY2NvdW50IGZvciB1bml0c1xuICAgICAgICB2YXIgc2hpZnQgPSAwO1xuICAgICAgICBpZiAoZ3JvdXAudmFsdWUuc2hpZnQpIHtcbiAgICAgICAgICAgIHNoaWZ0ID0gZ3JvdXAudmFsdWUuc2hpZnQubnVtYmVyO1xuICAgICAgICAgICAgaWYgKGdyb3VwLnZhbHVlLnNoaWZ0LnVuaXQgPT09IFwiZXhcIikge1xuICAgICAgICAgICAgICAgIHNoaWZ0ICo9IGZvbnRNZXRyaWNzLm1ldHJpY3MueEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aWR0aCA9IGdyb3VwLnZhbHVlLndpZHRoLm51bWJlcjtcbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLndpZHRoLnVuaXQgPT09IFwiZXhcIikge1xuICAgICAgICAgICAgd2lkdGggKj0gZm9udE1ldHJpY3MubWV0cmljcy54SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhlaWdodCA9IGdyb3VwLnZhbHVlLmhlaWdodC5udW1iZXI7XG4gICAgICAgIGlmIChncm91cC52YWx1ZS5oZWlnaHQudW5pdCA9PT0gXCJleFwiKSB7XG4gICAgICAgICAgICBoZWlnaHQgKj0gZm9udE1ldHJpY3MubWV0cmljcy54SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHNpemVzIG9mIHJ1bGVzIGFyZSBhYnNvbHV0ZSwgc28gbWFrZSBpdCBsYXJnZXIgaWYgd2UgYXJlIGluIGFcbiAgICAgICAgLy8gc21hbGxlciBzdHlsZS5cbiAgICAgICAgc2hpZnQgLz0gb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgd2lkdGggLz0gb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgaGVpZ2h0IC89IG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG5cbiAgICAgICAgLy8gU3R5bGUgdGhlIHJ1bGUgdG8gdGhlIHJpZ2h0IHNpemVcbiAgICAgICAgcnVsZS5zdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gd2lkdGggKyBcImVtXCI7XG4gICAgICAgIHJ1bGUuc3R5bGUuYm9yZGVyVG9wV2lkdGggPSBoZWlnaHQgKyBcImVtXCI7XG4gICAgICAgIHJ1bGUuc3R5bGUuYm90dG9tID0gc2hpZnQgKyBcImVtXCI7XG5cbiAgICAgICAgLy8gUmVjb3JkIHRoZSBoZWlnaHQgYW5kIHdpZHRoXG4gICAgICAgIHJ1bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcnVsZS5oZWlnaHQgPSBoZWlnaHQgKyBzaGlmdDtcbiAgICAgICAgcnVsZS5kZXB0aCA9IC1zaGlmdDtcblxuICAgICAgICByZXR1cm4gcnVsZTtcbiAgICB9LFxuXG4gICAgYWNjZW50OiBmdW5jdGlvbihncm91cCwgb3B0aW9ucywgcHJldikge1xuICAgICAgICAvLyBBY2NlbnRzIGFyZSBoYW5kbGVkIGluIHRoZSBUZVhib29rIHBnLiA0NDMsIHJ1bGUgMTIuXG4gICAgICAgIHZhciBiYXNlID0gZ3JvdXAudmFsdWUuYmFzZTtcblxuICAgICAgICB2YXIgc3Vwc3ViR3JvdXA7XG4gICAgICAgIGlmIChncm91cC50eXBlID09PSBcInN1cHN1YlwiKSB7XG4gICAgICAgICAgICAvLyBJZiBvdXIgYmFzZSBpcyBhIGNoYXJhY3RlciBib3gsIGFuZCB3ZSBoYXZlIHN1cGVyc2NyaXB0cyBhbmRcbiAgICAgICAgICAgIC8vIHN1YnNjcmlwdHMsIHRoZSBzdXBzdWIgd2lsbCBkZWZlciB0byB1cy4gSW4gcGFydGljdWxhciwgd2Ugd2FudFxuICAgICAgICAgICAgLy8gdG8gYXR0YWNoIHRoZSBzdXBlcnNjcmlwdHMgYW5kIHN1YnNjcmlwdHMgdG8gdGhlIGlubmVyIGJvZHkgKHNvXG4gICAgICAgICAgICAvLyB0aGF0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc3VwZXJzY3JpcHRzIGFuZCBzdWJzY3JpcHRzIHdvbid0IGJlXG4gICAgICAgICAgICAvLyBhZmZlY3RlZCBieSB0aGUgaGVpZ2h0IG9mIHRoZSBhY2NlbnQpLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnlcbiAgICAgICAgICAgIC8vIHN0aWNraW5nIHRoZSBiYXNlIG9mIHRoZSBhY2NlbnQgaW50byB0aGUgYmFzZSBvZiB0aGUgc3Vwc3ViLCBhbmRcbiAgICAgICAgICAgIC8vIHJlbmRlcmluZyB0aGF0LCB3aGlsZSBrZWVwaW5nIHRyYWNrIG9mIHdoZXJlIHRoZSBhY2NlbnQgaXMuXG5cbiAgICAgICAgICAgIC8vIFRoZSBzdXBzdWIgZ3JvdXAgaXMgdGhlIGdyb3VwIHRoYXQgd2FzIHBhc3NlZCBpblxuICAgICAgICAgICAgdmFyIHN1cHN1YiA9IGdyb3VwO1xuICAgICAgICAgICAgLy8gVGhlIHJlYWwgYWNjZW50IGdyb3VwIGlzIHRoZSBiYXNlIG9mIHRoZSBzdXBzdWIgZ3JvdXBcbiAgICAgICAgICAgIGdyb3VwID0gc3Vwc3ViLnZhbHVlLmJhc2U7XG4gICAgICAgICAgICAvLyBUaGUgY2hhcmFjdGVyIGJveCBpcyB0aGUgYmFzZSBvZiB0aGUgYWNjZW50IGdyb3VwXG4gICAgICAgICAgICBiYXNlID0gZ3JvdXAudmFsdWUuYmFzZTtcbiAgICAgICAgICAgIC8vIFN0aWNrIHRoZSBjaGFyYWN0ZXIgYm94IGludG8gdGhlIGJhc2Ugb2YgdGhlIHN1cHN1YiBncm91cFxuICAgICAgICAgICAgc3Vwc3ViLnZhbHVlLmJhc2UgPSBiYXNlO1xuXG4gICAgICAgICAgICAvLyBSZXJlbmRlciB0aGUgc3Vwc3ViIGdyb3VwIHdpdGggaXRzIG5ldyBiYXNlLCBhbmQgc3RvcmUgdGhhdFxuICAgICAgICAgICAgLy8gcmVzdWx0LlxuICAgICAgICAgICAgc3Vwc3ViR3JvdXAgPSBidWlsZEdyb3VwKFxuICAgICAgICAgICAgICAgIHN1cHN1Yiwgb3B0aW9ucy5yZXNldCgpLCBwcmV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ1aWxkIHRoZSBiYXNlIGdyb3VwXG4gICAgICAgIHZhciBib2R5ID0gYnVpbGRHcm91cChcbiAgICAgICAgICAgIGJhc2UsIG9wdGlvbnMud2l0aFN0eWxlKG9wdGlvbnMuc3R5bGUuY3JhbXAoKSkpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2tldyBvZiB0aGUgYWNjZW50LiBUaGlzIGlzIGJhc2VkIG9uIHRoZSBsaW5lIFwiSWYgdGhlXG4gICAgICAgIC8vIG51Y2xldXMgaXMgbm90IGEgc2luZ2xlIGNoYXJhY3RlciwgbGV0IHMgPSAwOyBvdGhlcndpc2Ugc2V0IHMgdG8gdGhlXG4gICAgICAgIC8vIGtlcm4gYW1vdW50IGZvciB0aGUgbnVjbGV1cyBmb2xsb3dlZCBieSB0aGUgXFxza2V3Y2hhciBvZiBpdHMgZm9udC5cIlxuICAgICAgICAvLyBOb3RlIHRoYXQgb3VyIHNrZXcgbWV0cmljcyBhcmUganVzdCB0aGUga2VybiBiZXR3ZWVuIGVhY2ggY2hhcmFjdGVyXG4gICAgICAgIC8vIGFuZCB0aGUgc2tld2NoYXIuXG4gICAgICAgIHZhciBza2V3O1xuICAgICAgICBpZiAoaXNDaGFyYWN0ZXJCb3goYmFzZSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBiYXNlIGlzIGEgY2hhcmFjdGVyIGJveCwgdGhlbiB3ZSB3YW50IHRoZSBza2V3IG9mIHRoZVxuICAgICAgICAgICAgLy8gaW5uZXJtb3N0IGNoYXJhY3Rlci4gVG8gZG8gdGhhdCwgd2UgZmluZCB0aGUgaW5uZXJtb3N0IGNoYXJhY3RlcjpcbiAgICAgICAgICAgIHZhciBiYXNlQ2hhciA9IGdldEJhc2VFbGVtKGJhc2UpO1xuICAgICAgICAgICAgLy8gVGhlbiwgd2UgcmVuZGVyIGl0cyBncm91cCB0byBnZXQgdGhlIHN5bWJvbCBpbnNpZGUgaXRcbiAgICAgICAgICAgIHZhciBiYXNlR3JvdXAgPSBidWlsZEdyb3VwKFxuICAgICAgICAgICAgICAgIGJhc2VDaGFyLCBvcHRpb25zLndpdGhTdHlsZShvcHRpb25zLnN0eWxlLmNyYW1wKCkpKTtcbiAgICAgICAgICAgIC8vIEZpbmFsbHksIHdlIHB1bGwgdGhlIHNrZXcgb2ZmIG9mIHRoZSBzeW1ib2wuXG4gICAgICAgICAgICBza2V3ID0gYmFzZUdyb3VwLnNrZXc7XG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgd2Ugbm93IHRocm93IGF3YXkgYmFzZUdyb3VwLCBiZWNhdXNlIHRoZSBsYXllcnMgd2VcbiAgICAgICAgICAgIC8vIHJlbW92ZWQgd2l0aCBnZXRCYXNlRWxlbSBtaWdodCBjb250YWluIHRoaW5ncyBsaWtlIFxcY29sb3Igd2hpY2hcbiAgICAgICAgICAgIC8vIHdlIGNhbid0IGdldCByaWQgb2YuXG4gICAgICAgICAgICAvLyBUT0RPKGVtaWx5KTogRmluZCBhIGJldHRlciB3YXkgdG8gZ2V0IHRoZSBza2V3XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBza2V3ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGJvZHkgYW5kIHRoZSBhY2NlbnRcbiAgICAgICAgdmFyIGNsZWFyYW5jZSA9IE1hdGgubWluKGJvZHkuaGVpZ2h0LCBmb250TWV0cmljcy5tZXRyaWNzLnhIZWlnaHQpO1xuXG4gICAgICAgIC8vIEJ1aWxkIHRoZSBhY2NlbnRcbiAgICAgICAgdmFyIGFjY2VudCA9IGJ1aWxkQ29tbW9uLm1ha2VTeW1ib2woXG4gICAgICAgICAgICBncm91cC52YWx1ZS5hY2NlbnQsIFwiTWFpbi1SZWd1bGFyXCIsIFwibWF0aFwiLCBvcHRpb25zLmdldENvbG9yKCkpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGl0YWxpYyBjb3JyZWN0aW9uIG9mIHRoZSBhY2NlbnQsIGJlY2F1c2UgaXQgb25seSBzZXJ2ZXMgdG9cbiAgICAgICAgLy8gc2hpZnQgdGhlIGFjY2VudCBvdmVyIHRvIGEgcGxhY2Ugd2UgZG9uJ3Qgd2FudC5cbiAgICAgICAgYWNjZW50Lml0YWxpYyA9IDA7XG5cbiAgICAgICAgLy8gVGhlIFxcdmVjIGNoYXJhY3RlciB0aGF0IHRoZSBmb250cyB1c2UgaXMgYSBjb21iaW5pbmcgY2hhcmFjdGVyLCBhbmRcbiAgICAgICAgLy8gdGh1cyBzaG93cyB1cCBtdWNoIHRvbyBmYXIgdG8gdGhlIGxlZnQuIFRvIGFjY291bnQgZm9yIHRoaXMsIHdlIGFkZCBhXG4gICAgICAgIC8vIHNwZWNpZmljIGNsYXNzIHdoaWNoIHNoaWZ0cyB0aGUgYWNjZW50IG92ZXIgdG8gd2hlcmUgd2Ugd2FudCBpdC5cbiAgICAgICAgLy8gVE9ETyhlbWlseSk6IEZpeCB0aGlzIGluIGEgYmV0dGVyIHdheSwgbGlrZSBieSBjaGFuZ2luZyB0aGUgZm9udFxuICAgICAgICB2YXIgdmVjQ2xhc3MgPSBncm91cC52YWx1ZS5hY2NlbnQgPT09IFwiXFxcXHZlY1wiID8gXCJhY2NlbnQtdmVjXCIgOiBudWxsO1xuXG4gICAgICAgIHZhciBhY2NlbnRCb2R5ID0gbWFrZVNwYW4oW1wiYWNjZW50LWJvZHlcIiwgdmVjQ2xhc3NdLCBbXG4gICAgICAgICAgICBtYWtlU3BhbihbXSwgW2FjY2VudF0pXSk7XG5cbiAgICAgICAgYWNjZW50Qm9keSA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChbXG4gICAgICAgICAgICB7dHlwZTogXCJlbGVtXCIsIGVsZW06IGJvZHl9LFxuICAgICAgICAgICAge3R5cGU6IFwia2VyblwiLCBzaXplOiAtY2xlYXJhbmNlfSxcbiAgICAgICAgICAgIHt0eXBlOiBcImVsZW1cIiwgZWxlbTogYWNjZW50Qm9keX1cbiAgICAgICAgXSwgXCJmaXJzdEJhc2VsaW5lXCIsIG51bGwsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIFNoaWZ0IHRoZSBhY2NlbnQgb3ZlciBieSB0aGUgc2tldy4gTm90ZSB3ZSBzaGlmdCBieSB0d2ljZSB0aGUgc2tld1xuICAgICAgICAvLyBiZWNhdXNlIHdlIGFyZSBjZW50ZXJpbmcgdGhlIGFjY2VudCwgc28gYnkgYWRkaW5nIDIqc2tldyB0byB0aGUgbGVmdCxcbiAgICAgICAgLy8gd2Ugc2hpZnQgaXQgdG8gdGhlIHJpZ2h0IGJ5IDEqc2tldy5cbiAgICAgICAgYWNjZW50Qm9keS5jaGlsZHJlblsxXS5zdHlsZS5tYXJnaW5MZWZ0ID0gMiAqIHNrZXcgKyBcImVtXCI7XG5cbiAgICAgICAgdmFyIGFjY2VudFdyYXAgPSBtYWtlU3BhbihbXCJtb3JkXCIsIFwiYWNjZW50XCJdLCBbYWNjZW50Qm9keV0pO1xuXG4gICAgICAgIGlmIChzdXBzdWJHcm91cCkge1xuICAgICAgICAgICAgLy8gSGVyZSwgd2UgcmVwbGFjZSB0aGUgXCJiYXNlXCIgY2hpbGQgb2YgdGhlIHN1cHN1YiB3aXRoIG91ciBuZXdseVxuICAgICAgICAgICAgLy8gZ2VuZXJhdGVkIGFjY2VudC5cbiAgICAgICAgICAgIHN1cHN1Ykdyb3VwLmNoaWxkcmVuWzBdID0gYWNjZW50V3JhcDtcblxuICAgICAgICAgICAgLy8gU2luY2Ugd2UgZG9uJ3QgcmVydW4gdGhlIGhlaWdodCBjYWxjdWxhdGlvbiBhZnRlciByZXBsYWNpbmcgdGhlXG4gICAgICAgICAgICAvLyBhY2NlbnQsIHdlIG1hbnVhbGx5IHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgICAgIHN1cHN1Ykdyb3VwLmhlaWdodCA9IE1hdGgubWF4KGFjY2VudFdyYXAuaGVpZ2h0LCBzdXBzdWJHcm91cC5oZWlnaHQpO1xuXG4gICAgICAgICAgICAvLyBBY2NlbnRzIHNob3VsZCBhbHdheXMgYmUgb3JkcywgZXZlbiB3aGVuIHRoZWlyIGlubmFyZHMgYXJlIG5vdC5cbiAgICAgICAgICAgIHN1cHN1Ykdyb3VwLmNsYXNzZXNbMF0gPSBcIm1vcmRcIjtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHN1Ykdyb3VwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFjY2VudFdyYXA7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcGhhbnRvbTogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gYnVpbGRFeHByZXNzaW9uKFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUudmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zLndpdGhQaGFudG9tKCksXG4gICAgICAgICAgICBwcmV2XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gXFxwaGFudG9tIGlzbid0IHN1cHBvc2VkIHRvIGFmZmVjdCB0aGUgZWxlbWVudHMgaXQgY29udGFpbnMuXG4gICAgICAgIC8vIFNlZSBcImNvbG9yXCIgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgICAgcmV0dXJuIG5ldyBidWlsZENvbW1vbi5tYWtlRnJhZ21lbnQoZWxlbWVudHMpO1xuICAgIH1cbn07XG5cbi8qKlxuICogYnVpbGRHcm91cCBpcyB0aGUgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIGdyb3VwIGFuZCBjYWxscyB0aGUgY29ycmVjdCBncm91cFR5cGVcbiAqIGZ1bmN0aW9uIGZvciBpdC4gSXQgYWxzbyBoYW5kbGVzIHRoZSBpbnRlcmFjdGlvbiBvZiBzaXplIGFuZCBzdHlsZSBjaGFuZ2VzXG4gKiBiZXR3ZWVuIHBhcmVudHMgYW5kIGNoaWxkcmVuLlxuICovXG52YXIgYnVpbGRHcm91cCA9IGZ1bmN0aW9uKGdyb3VwLCBvcHRpb25zLCBwcmV2KSB7XG4gICAgaWYgKCFncm91cCkge1xuICAgICAgICByZXR1cm4gbWFrZVNwYW4oKTtcbiAgICB9XG5cbiAgICBpZiAoZ3JvdXBUeXBlc1tncm91cC50eXBlXSkge1xuICAgICAgICAvLyBDYWxsIHRoZSBncm91cFR5cGVzIGZ1bmN0aW9uXG4gICAgICAgIHZhciBncm91cE5vZGUgPSBncm91cFR5cGVzW2dyb3VwLnR5cGVdKGdyb3VwLCBvcHRpb25zLCBwcmV2KTtcbiAgICAgICAgdmFyIG11bHRpcGxpZXI7XG5cbiAgICAgICAgLy8gSWYgdGhlIHN0eWxlIGNoYW5nZWQgYmV0d2VlbiB0aGUgcGFyZW50IGFuZCB0aGUgY3VycmVudCBncm91cCxcbiAgICAgICAgLy8gYWNjb3VudCBmb3IgdGhlIHNpemUgZGlmZmVyZW5jZVxuICAgICAgICBpZiAob3B0aW9ucy5zdHlsZSAhPT0gb3B0aW9ucy5wYXJlbnRTdHlsZSkge1xuICAgICAgICAgICAgbXVsdGlwbGllciA9IG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXIgL1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhcmVudFN0eWxlLnNpemVNdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICBncm91cE5vZGUuaGVpZ2h0ICo9IG11bHRpcGxpZXI7XG4gICAgICAgICAgICBncm91cE5vZGUuZGVwdGggKj0gbXVsdGlwbGllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBzaXplIGNoYW5nZWQgYmV0d2VlbiB0aGUgcGFyZW50IGFuZCB0aGUgY3VycmVudCBncm91cCwgYWNjb3VudFxuICAgICAgICAvLyBmb3IgdGhhdCBzaXplIGRpZmZlcmVuY2UuXG4gICAgICAgIGlmIChvcHRpb25zLnNpemUgIT09IG9wdGlvbnMucGFyZW50U2l6ZSkge1xuICAgICAgICAgICAgbXVsdGlwbGllciA9IGJ1aWxkQ29tbW9uLnNpemluZ011bHRpcGxpZXJbb3B0aW9ucy5zaXplXSAvXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkQ29tbW9uLnNpemluZ011bHRpcGxpZXJbb3B0aW9ucy5wYXJlbnRTaXplXTtcblxuICAgICAgICAgICAgZ3JvdXBOb2RlLmhlaWdodCAqPSBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgZ3JvdXBOb2RlLmRlcHRoICo9IG11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBOb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJHb3QgZ3JvdXAgb2YgdW5rbm93biB0eXBlOiAnXCIgKyBncm91cC50eXBlICsgXCInXCIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGFrZSBhbiBlbnRpcmUgcGFyc2UgdHJlZSwgYW5kIGJ1aWxkIGl0IGludG8gYW4gYXBwcm9wcmlhdGUgc2V0IG9mIEhUTUxcbiAqIG5vZGVzLlxuICovXG52YXIgYnVpbGRIVE1MID0gZnVuY3Rpb24odHJlZSwgc2V0dGluZ3MpIHtcbiAgICAvLyBidWlsZEV4cHJlc3Npb24gaXMgZGVzdHJ1Y3RpdmUsIHNvIHdlIG5lZWQgdG8gbWFrZSBhIGNsb25lXG4gICAgLy8gb2YgdGhlIGluY29taW5nIHRyZWUgc28gdGhhdCBpdCBpc24ndCBhY2NpZGVudGFsbHkgY2hhbmdlZFxuICAgIHRyZWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyZWUpKTtcblxuICAgIHZhciBzdGFydFN0eWxlID0gU3R5bGUuVEVYVDtcbiAgICBpZiAoc2V0dGluZ3MuZGlzcGxheU1vZGUpIHtcbiAgICAgICAgc3RhcnRTdHlsZSA9IFN0eWxlLkRJU1BMQVk7XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgdGhlIGRlZmF1bHQgb3B0aW9uc1xuICAgIHZhciBvcHRpb25zID0gbmV3IE9wdGlvbnMoe1xuICAgICAgICBzdHlsZTogc3RhcnRTdHlsZSxcbiAgICAgICAgc2l6ZTogXCJzaXplNVwiXG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCB0aGUgZXhwcmVzc2lvbiBjb250YWluZWQgaW4gdGhlIHRyZWVcbiAgICB2YXIgZXhwcmVzc2lvbiA9IGJ1aWxkRXhwcmVzc2lvbih0cmVlLCBvcHRpb25zKTtcbiAgICB2YXIgYm9keSA9IG1ha2VTcGFuKFtcImJhc2VcIiwgb3B0aW9ucy5zdHlsZS5jbHMoKV0sIGV4cHJlc3Npb24pO1xuXG4gICAgLy8gQWRkIHN0cnV0cywgd2hpY2ggZW5zdXJlIHRoYXQgdGhlIHRvcCBvZiB0aGUgSFRNTCBlbGVtZW50IGZhbGxzIGF0IHRoZVxuICAgIC8vIGhlaWdodCBvZiB0aGUgZXhwcmVzc2lvbiwgYW5kIHRoZSBib3R0b20gb2YgdGhlIEhUTUwgZWxlbWVudCBmYWxscyBhdCB0aGVcbiAgICAvLyBkZXB0aCBvZiB0aGUgZXhwcmVzc2lvbi5cbiAgICB2YXIgdG9wU3RydXQgPSBtYWtlU3BhbihbXCJzdHJ1dFwiXSk7XG4gICAgdmFyIGJvdHRvbVN0cnV0ID0gbWFrZVNwYW4oW1wic3RydXRcIiwgXCJib3R0b21cIl0pO1xuXG4gICAgdG9wU3RydXQuc3R5bGUuaGVpZ2h0ID0gYm9keS5oZWlnaHQgKyBcImVtXCI7XG4gICAgYm90dG9tU3RydXQuc3R5bGUuaGVpZ2h0ID0gKGJvZHkuaGVpZ2h0ICsgYm9keS5kZXB0aCkgKyBcImVtXCI7XG4gICAgLy8gV2UnZCBsaWtlIHRvIHVzZSBgdmVydGljYWwtYWxpZ246IHRvcGAgYnV0IGluIElFIDkgdGhpcyBsb3dlcnMgdGhlXG4gICAgLy8gYmFzZWxpbmUgb2YgdGhlIGJveCB0byB0aGUgYm90dG9tIG9mIHRoaXMgc3RydXQgKGluc3RlYWQgc3RheWluZyBpbiB0aGVcbiAgICAvLyBub3JtYWwgcGxhY2UpIHNvIHdlIHVzZSBhbiBhYnNvbHV0ZSB2YWx1ZSBmb3IgdmVydGljYWwtYWxpZ24gaW5zdGVhZFxuICAgIGJvdHRvbVN0cnV0LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAtYm9keS5kZXB0aCArIFwiZW1cIjtcblxuICAgIC8vIFdyYXAgdGhlIHN0cnV0cyBhbmQgYm9keSB0b2dldGhlclxuICAgIHZhciBodG1sTm9kZSA9IG1ha2VTcGFuKFtcImthdGV4LWh0bWxcIl0sIFt0b3BTdHJ1dCwgYm90dG9tU3RydXQsIGJvZHldKTtcblxuICAgIGh0bWxOb2RlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGRIVE1MO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udmVydHMgYSBwYXJzZSB0cmVlIGludG8gYSBjb29yZXNwb25kaW5nIE1hdGhNTCB0cmVlLiBUaGUgbWFpblxuICogZW50cnkgcG9pbnQgaXMgdGhlIGBidWlsZE1hdGhNTGAgZnVuY3Rpb24sIHdoaWNoIHRha2VzIGEgcGFyc2UgdHJlZSBmcm9tIHRoZVxuICogcGFyc2VyLlxuICovXG5cbnZhciBidWlsZENvbW1vbiA9IHJlcXVpcmUoXCIuL2J1aWxkQ29tbW9uXCIpO1xudmFyIG1hdGhNTFRyZWUgPSByZXF1aXJlKFwiLi9tYXRoTUxUcmVlXCIpO1xudmFyIFBhcnNlRXJyb3IgPSByZXF1aXJlKFwiLi9QYXJzZUVycm9yXCIpO1xudmFyIHN5bWJvbHMgPSByZXF1aXJlKFwiLi9zeW1ib2xzXCIpO1xuXG52YXIgbWFrZVNwYW4gPSBidWlsZENvbW1vbi5tYWtlU3BhbjtcblxuLyoqXG4gKiBUYWtlcyBhIHN5bWJvbCBhbmQgY29udmVydHMgaXQgaW50byBhIE1hdGhNTCB0ZXh0IG5vZGUgYWZ0ZXIgcGVyZm9ybWluZ1xuICogb3B0aW9uYWwgcmVwbGFjZW1lbnQgZnJvbSBzeW1ib2xzLmpzLlxuICovXG52YXIgbWFrZVRleHQgPSBmdW5jdGlvbih0ZXh0LCBtb2RlKSB7XG4gICAgaWYgKHN5bWJvbHNbbW9kZV1bdGV4dF0gJiYgc3ltYm9sc1ttb2RlXVt0ZXh0XS5yZXBsYWNlKSB7XG4gICAgICAgIHRleHQgPSBzeW1ib2xzW21vZGVdW3RleHRdLnJlcGxhY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBtYXRoTUxUcmVlLlRleHROb2RlKHRleHQpO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbnMgZm9yIGhhbmRsaW5nIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgZ3JvdXBzIGZvdW5kIGluIHRoZSBwYXJzZVxuICogdHJlZS4gRWFjaCBmdW5jdGlvbiBzaG91bGQgdGFrZSBhIHBhcnNlIGdyb3VwIGFuZCByZXR1cm4gYSBNYXRoTUwgbm9kZS5cbiAqL1xudmFyIGdyb3VwVHlwZXMgPSB7XG4gICAgbWF0aG9yZDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgIFwibWlcIixcbiAgICAgICAgICAgIFttYWtlVGV4dChncm91cC52YWx1ZSwgZ3JvdXAubW9kZSldKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgdGV4dG9yZDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIHRleHQgPSBtYWtlVGV4dChncm91cC52YWx1ZSwgZ3JvdXAubW9kZSk7XG5cbiAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgIGlmICgvWzAtOV0vLnRlc3QoZ3JvdXAudmFsdWUpKSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtblwiLCBbdGV4dF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibWlcIiwgW3RleHRdKTtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwibWF0aHZhcmlhbnRcIiwgXCJub3JtYWxcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgYmluOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHJlbDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgIFwibW9cIiwgW21ha2VUZXh0KGdyb3VwLnZhbHVlLCBncm91cC5tb2RlKV0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBvcGVuOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGNsb3NlOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGlubmVyOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHB1bmN0OiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUsIGdyb3VwLm1vZGUpXSk7XG5cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzZXBhcmF0b3JcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBvcmRncm91cDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlKTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXJvd1wiLCBpbm5lcik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHRleHQ6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBpbm5lciA9IGJ1aWxkRXhwcmVzc2lvbihncm91cC52YWx1ZS5ib2R5KTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXRleHRcIiwgaW5uZXIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBjb2xvcjogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlLnZhbHVlKTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXN0eWxlXCIsIGlubmVyKTtcblxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIm1hdGhjb2xvclwiLCBncm91cC52YWx1ZS5jb2xvcik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIHN1cHN1YjogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gW2J1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYmFzZSldO1xuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zdWIpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goYnVpbGRHcm91cChncm91cC52YWx1ZS5zdWIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5zdXApIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goYnVpbGRHcm91cChncm91cC52YWx1ZS5zdXApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub2RlVHlwZTtcbiAgICAgICAgaWYgKCFncm91cC52YWx1ZS5zdWIpIHtcbiAgICAgICAgICAgIG5vZGVUeXBlID0gXCJtc3VwXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoIWdyb3VwLnZhbHVlLnN1cCkge1xuICAgICAgICAgICAgbm9kZVR5cGUgPSBcIm1zdWJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVUeXBlID0gXCJtc3Vic3VwXCI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKG5vZGVUeXBlLCBjaGlsZHJlbik7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGdlbmZyYWM6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm1mcmFjXCIsXG4gICAgICAgICAgICBbYnVpbGRHcm91cChncm91cC52YWx1ZS5udW1lciksXG4gICAgICAgICAgICAgYnVpbGRHcm91cChncm91cC52YWx1ZS5kZW5vbSldKTtcblxuICAgICAgICBpZiAoIWdyb3VwLnZhbHVlLmhhc0JhckxpbmUpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwibGluZXRoaWNrbmVzc1wiLCBcIjBweFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5sZWZ0RGVsaW0gIT0gbnVsbCB8fCBncm91cC52YWx1ZS5yaWdodERlbGltICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciB3aXRoRGVsaW1zID0gW107XG5cbiAgICAgICAgICAgIGlmIChncm91cC52YWx1ZS5sZWZ0RGVsaW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBsZWZ0T3AgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgICAgICAgICAgXCJtb1wiLCBbbmV3IG1hdGhNTFRyZWUuVGV4dE5vZGUoZ3JvdXAudmFsdWUubGVmdERlbGltKV0pO1xuXG4gICAgICAgICAgICAgICAgbGVmdE9wLnNldEF0dHJpYnV0ZShcImZlbmNlXCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgICAgIHdpdGhEZWxpbXMucHVzaChsZWZ0T3ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aXRoRGVsaW1zLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91cC52YWx1ZS5yaWdodERlbGltICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRPcCA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgICAgICAgICBcIm1vXCIsIFtuZXcgbWF0aE1MVHJlZS5UZXh0Tm9kZShncm91cC52YWx1ZS5yaWdodERlbGltKV0pO1xuXG4gICAgICAgICAgICAgICAgcmlnaHRPcC5zZXRBdHRyaWJ1dGUoXCJmZW5jZVwiLCBcInRydWVcIik7XG5cbiAgICAgICAgICAgICAgICB3aXRoRGVsaW1zLnB1c2gocmlnaHRPcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvdXRlck5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcIm1yb3dcIiwgd2l0aERlbGltcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRlck5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgYXJyYXk6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHJldHVybiBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgIFwibXRhYmxlXCIsIGdyb3VwLnZhbHVlLmJvZHkubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgICAgICAgICAgXCJtdHJcIiwgcm93Lm1hcChmdW5jdGlvbihjZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtdGRcIiwgW2J1aWxkR3JvdXAoY2VsbCldKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICBzcXJ0OiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZTtcbiAgICAgICAgaWYgKGdyb3VwLnZhbHVlLmluZGV4KSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICAgICAgXCJtcm9vdFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYm9keSksXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkR3JvdXAoZ3JvdXAudmFsdWUuaW5kZXgpXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICAgICAgXCJtc3FydFwiLCBbYnVpbGRHcm91cChncm91cC52YWx1ZS5ib2R5KV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGxlZnRyaWdodDogZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlLmJvZHkpO1xuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5sZWZ0ICE9PSBcIi5cIikge1xuICAgICAgICAgICAgdmFyIGxlZnROb2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUubGVmdCwgZ3JvdXAubW9kZSldKTtcblxuICAgICAgICAgICAgbGVmdE5vZGUuc2V0QXR0cmlidXRlKFwiZmVuY2VcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgICAgICBpbm5lci51bnNoaWZ0KGxlZnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5yaWdodCAhPT0gXCIuXCIpIHtcbiAgICAgICAgICAgIHZhciByaWdodE5vZGUgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgICAgICAgICBcIm1vXCIsIFttYWtlVGV4dChncm91cC52YWx1ZS5yaWdodCwgZ3JvdXAubW9kZSldKTtcblxuICAgICAgICAgICAgcmlnaHROb2RlLnNldEF0dHJpYnV0ZShcImZlbmNlXCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgaW5uZXIucHVzaChyaWdodE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG91dGVyTm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXJvd1wiLCBpbm5lcik7XG5cbiAgICAgICAgcmV0dXJuIG91dGVyTm9kZTtcbiAgICB9LFxuXG4gICAgYWNjZW50OiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgYWNjZW50Tm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbWFrZVRleHQoZ3JvdXAudmFsdWUuYWNjZW50LCBncm91cC5tb2RlKV0pO1xuXG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm1vdmVyXCIsXG4gICAgICAgICAgICBbYnVpbGRHcm91cChncm91cC52YWx1ZS5iYXNlKSxcbiAgICAgICAgICAgICBhY2NlbnROb2RlXSk7XG5cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJhY2NlbnRcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBzcGFjaW5nOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZTtcblxuICAgICAgICBpZiAoZ3JvdXAudmFsdWUgPT09IFwiXFxcXCBcIiB8fCBncm91cC52YWx1ZSA9PT0gXCJcXFxcc3BhY2VcIiB8fFxuICAgICAgICAgICAgZ3JvdXAudmFsdWUgPT09IFwiIFwiIHx8IGdyb3VwLnZhbHVlID09PSBcIn5cIikge1xuICAgICAgICAgICAgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgICAgIFwibXRleHRcIiwgW25ldyBtYXRoTUxUcmVlLlRleHROb2RlKFwiXFx1MDBhMFwiKV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXNwYWNlXCIpO1xuXG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcIndpZHRoXCIsIGJ1aWxkQ29tbW9uLnNwYWNpbmdGdW5jdGlvbnNbZ3JvdXAudmFsdWVdLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIG9wOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZTtcblxuICAgICAgICAvLyBUT0RPKGVtaWx5KTogaGFuZGxlIGJpZyBvcGVyYXRvcnMgdXNpbmcgdGhlIGBsYXJnZW9wYCBhdHRyaWJ1dGVcblxuICAgICAgICBpZiAoZ3JvdXAudmFsdWUuc3ltYm9sKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgc3ltYm9sLiBKdXN0IGFkZCB0aGUgc3ltYm9sLlxuICAgICAgICAgICAgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgICAgIFwibW9cIiwgW21ha2VUZXh0KGdyb3VwLnZhbHVlLmJvZHksIGdyb3VwLm1vZGUpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgdGV4dCBvcGVyYXRvci4gQWRkIGFsbCBvZiB0aGUgY2hhcmFjdGVycyBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gb3BlcmF0b3IncyBuYW1lLlxuICAgICAgICAgICAgLy8gVE9ETyhlbWlseSk6IEFkZCBhIHNwYWNlIGluIHRoZSBtaWRkbGUgb2Ygc29tZSBvZiB0aGVzZVxuICAgICAgICAgICAgLy8gb3BlcmF0b3JzLCBsaWtlIFxcbGltc3VwLlxuICAgICAgICAgICAgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgICAgIFwibWlcIiwgW25ldyBtYXRoTUxUcmVlLlRleHROb2RlKGdyb3VwLnZhbHVlLmJvZHkuc2xpY2UoMSkpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAga2F0ZXg6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgICAgICBcIm10ZXh0XCIsIFtuZXcgbWF0aE1MVHJlZS5UZXh0Tm9kZShcIkthVGVYXCIpXSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcblxuICAgIGRlbGltc2l6aW5nOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcblxuICAgICAgICBpZiAoZ3JvdXAudmFsdWUudmFsdWUgIT09IFwiLlwiKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKG1ha2VUZXh0KGdyb3VwLnZhbHVlLnZhbHVlLCBncm91cC5tb2RlKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibW9cIiwgY2hpbGRyZW4pO1xuXG4gICAgICAgIGlmIChncm91cC52YWx1ZS5kZWxpbVR5cGUgPT09IFwib3BlblwiIHx8XG4gICAgICAgICAgICBncm91cC52YWx1ZS5kZWxpbVR5cGUgPT09IFwiY2xvc2VcIikge1xuICAgICAgICAgICAgLy8gT25seSBzb21lIG9mIHRoZSBkZWxpbXNpemluZyBmdW5jdGlvbnMgYWN0IGFzIGZlbmNlcywgYW5kIHRoZXlcbiAgICAgICAgICAgIC8vIHJldHVybiBcIm9wZW5cIiBvciBcImNsb3NlXCIgZGVsaW1UeXBlcy5cbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZmVuY2VcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRXhwbGljaXRseSBkaXNhYmxlIGZlbmNpbmcgaWYgaXQncyBub3QgYSBmZW5jZSwgdG8gb3ZlcnJpZGUgdGhlXG4gICAgICAgICAgICAvLyBkZWZhdWx0cy5cbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZmVuY2VcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBzdHlsaW5nOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgaW5uZXIgPSBidWlsZEV4cHJlc3Npb24oZ3JvdXAudmFsdWUudmFsdWUsIGlubmVyKTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXN0eWxlXCIsIGlubmVyKTtcblxuICAgICAgICB2YXIgc3R5bGVBdHRyaWJ1dGVzID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFtcIjBcIiwgXCJ0cnVlXCJdLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFtcIjBcIiwgXCJmYWxzZVwiXSxcbiAgICAgICAgICAgIFwic2NyaXB0XCI6IFtcIjFcIiwgXCJmYWxzZVwiXSxcbiAgICAgICAgICAgIFwic2NyaXB0c2NyaXB0XCI6IFtcIjJcIiwgXCJmYWxzZVwiXVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhdHRyID0gc3R5bGVBdHRyaWJ1dGVzW2dyb3VwLnZhbHVlLnN0eWxlXTtcblxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInNjcmlwdGxldmVsXCIsIGF0dHJbMF0pO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRpc3BsYXlzdHlsZVwiLCBhdHRyWzFdKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgc2l6aW5nOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgaW5uZXIgPSBidWlsZEV4cHJlc3Npb24oZ3JvdXAudmFsdWUudmFsdWUpO1xuXG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtc3R5bGVcIiwgaW5uZXIpO1xuXG4gICAgICAgIC8vIFRPRE8oZW1pbHkpOiBUaGlzIGRvZXNuJ3QgcHJvZHVjZSB0aGUgY29ycmVjdCBzaXplIGZvciBuZXN0ZWQgc2l6ZVxuICAgICAgICAvLyBjaGFuZ2VzLCBiZWNhdXNlIHdlIGRvbid0IGtlZXAgc3RhdGUgb2Ygd2hhdCBzdHlsZSB3ZSdyZSBjdXJyZW50bHlcbiAgICAgICAgLy8gaW4sIHNvIHdlIGNhbid0IHJlc2V0IHRoZSBzaXplIHRvIG5vcm1hbCBiZWZvcmUgY2hhbmdpbmcgaXQuXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJtYXRoc2l6ZVwiLCBidWlsZENvbW1vbi5zaXppbmdNdWx0aXBsaWVyW2dyb3VwLnZhbHVlLnNpemVdICsgXCJlbVwiKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgb3ZlcmxpbmU6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb1wiLCBbbmV3IG1hdGhNTFRyZWUuVGV4dE5vZGUoXCJcXHUyMDNlXCIpXSk7XG4gICAgICAgIG9wZXJhdG9yLnNldEF0dHJpYnV0ZShcInN0cmV0Y2h5XCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtb3ZlclwiLFxuICAgICAgICAgICAgW2J1aWxkR3JvdXAoZ3JvdXAudmFsdWUuYm9keSksXG4gICAgICAgICAgICAgb3BlcmF0b3JdKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJhY2NlbnRcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBydWxlOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICAvLyBUT0RPKGVtaWx5KTogRmlndXJlIG91dCBpZiB0aGVyZSdzIGFuIGFjdHVhbCB3YXkgdG8gZHJhdyBibGFjayBib3hlc1xuICAgICAgICAvLyBpbiBNYXRoTUwuXG4gICAgICAgIHZhciBub2RlID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtcm93XCIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBsbGFwOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtcGFkZGVkXCIsIFtidWlsZEdyb3VwKGdyb3VwLnZhbHVlLmJvZHkpXSk7XG5cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJsc3BhY2VcIiwgXCItMXdpZHRoXCIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMHB4XCIpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG5cbiAgICBybGFwOiBmdW5jdGlvbihncm91cCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFxuICAgICAgICAgICAgXCJtcGFkZGVkXCIsIFtidWlsZEdyb3VwKGdyb3VwLnZhbHVlLmJvZHkpXSk7XG5cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjBweFwiKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuXG4gICAgcGhhbnRvbTogZnVuY3Rpb24oZ3JvdXAsIG9wdGlvbnMsIHByZXYpIHtcbiAgICAgICAgdmFyIGlubmVyID0gYnVpbGRFeHByZXNzaW9uKGdyb3VwLnZhbHVlLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXBoYW50b21cIiwgaW5uZXIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGFrZXMgYSBsaXN0IG9mIG5vZGVzLCBidWlsZHMgdGhlbSwgYW5kIHJldHVybnMgYSBsaXN0IG9mIHRoZSBnZW5lcmF0ZWRcbiAqIE1hdGhNTCBub2Rlcy4gQSBsaXR0bGUgc2ltcGxlciB0aGFuIHRoZSBIVE1MIHZlcnNpb24gYmVjYXVzZSB3ZSBkb24ndCBkbyBhbnlcbiAqIHByZXZpb3VzLW5vZGUgaGFuZGxpbmcuXG4gKi9cbnZhciBidWlsZEV4cHJlc3Npb24gPSBmdW5jdGlvbihleHByZXNzaW9uKSB7XG4gICAgdmFyIGdyb3VwcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwcmVzc2lvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZ3JvdXAgPSBleHByZXNzaW9uW2ldO1xuICAgICAgICBncm91cHMucHVzaChidWlsZEdyb3VwKGdyb3VwKSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cHM7XG59O1xuXG4vKipcbiAqIFRha2VzIGEgZ3JvdXAgZnJvbSB0aGUgcGFyc2VyIGFuZCBjYWxscyB0aGUgYXBwcm9wcmlhdGUgZ3JvdXBUeXBlcyBmdW5jdGlvblxuICogb24gaXQgdG8gcHJvZHVjZSBhIE1hdGhNTCBub2RlLlxuICovXG52YXIgYnVpbGRHcm91cCA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgaWYgKCFncm91cCkge1xuICAgICAgICByZXR1cm4gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtcm93XCIpO1xuICAgIH1cblxuICAgIGlmIChncm91cFR5cGVzW2dyb3VwLnR5cGVdKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIGdyb3VwVHlwZXMgZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIGdyb3VwVHlwZXNbZ3JvdXAudHlwZV0oZ3JvdXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBQYXJzZUVycm9yKFxuICAgICAgICAgICAgXCJHb3QgZ3JvdXAgb2YgdW5rbm93biB0eXBlOiAnXCIgKyBncm91cC50eXBlICsgXCInXCIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGFrZXMgYSBmdWxsIHBhcnNlIHRyZWUgYW5kIHNldHRpbmdzIGFuZCBidWlsZHMgYSBNYXRoTUwgcmVwcmVzZW50YXRpb24gb2ZcbiAqIGl0LiBJbiBwYXJ0aWN1bGFyLCB3ZSBwdXQgdGhlIGVsZW1lbnRzIGZyb20gYnVpbGRpbmcgdGhlIHBhcnNlIHRyZWUgaW50byBhXG4gKiA8c2VtYW50aWNzPiB0YWcgc28gd2UgY2FuIGFsc28gaW5jbHVkZSB0aGF0IFRlWCBzb3VyY2UgYXMgYW4gYW5ub3RhdGlvbi5cbiAqXG4gKiBOb3RlIHRoYXQgd2UgYWN0dWFsbHkgcmV0dXJuIGEgZG9tVHJlZSBlbGVtZW50IHdpdGggYSBgPG1hdGg+YCBpbnNpZGUgaXQgc29cbiAqIHdlIGNhbiBkbyBhcHByb3ByaWF0ZSBzdHlsaW5nLlxuICovXG52YXIgYnVpbGRNYXRoTUwgPSBmdW5jdGlvbih0cmVlLCB0ZXhFeHByZXNzaW9uLCBzZXR0aW5ncykge1xuICAgIHZhciBleHByZXNzaW9uID0gYnVpbGRFeHByZXNzaW9uKHRyZWUpO1xuXG4gICAgLy8gV3JhcCB1cCB0aGUgZXhwcmVzc2lvbiBpbiBhbiBtcm93IHNvIGl0IGlzIHByZXNlbnRlZCBpbiB0aGUgc2VtYW50aWNzXG4gICAgLy8gdGFnIGNvcnJlY3RseS5cbiAgICB2YXIgd3JhcHBlciA9IG5ldyBtYXRoTUxUcmVlLk1hdGhOb2RlKFwibXJvd1wiLCBleHByZXNzaW9uKTtcblxuICAgIC8vIEJ1aWxkIGEgVGVYIGFubm90YXRpb24gb2YgdGhlIHNvdXJjZVxuICAgIHZhciBhbm5vdGF0aW9uID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXG4gICAgICAgIFwiYW5ub3RhdGlvblwiLCBbbmV3IG1hdGhNTFRyZWUuVGV4dE5vZGUodGV4RXhwcmVzc2lvbildKTtcblxuICAgIGFubm90YXRpb24uc2V0QXR0cmlidXRlKFwiZW5jb2RpbmdcIiwgXCJhcHBsaWNhdGlvbi94LXRleFwiKTtcblxuICAgIHZhciBzZW1hbnRpY3MgPSBuZXcgbWF0aE1MVHJlZS5NYXRoTm9kZShcbiAgICAgICAgXCJzZW1hbnRpY3NcIiwgW3dyYXBwZXIsIGFubm90YXRpb25dKTtcblxuICAgIHZhciBtYXRoID0gbmV3IG1hdGhNTFRyZWUuTWF0aE5vZGUoXCJtYXRoXCIsIFtzZW1hbnRpY3NdKTtcblxuICAgIC8vIFlvdSBjYW4ndCBzdHlsZSA8bWF0aD4gbm9kZXMsIHNvIHdlIHdyYXAgdGhlIG5vZGUgaW4gYSBzcGFuLlxuICAgIHJldHVybiBtYWtlU3BhbihbXCJrYXRleC1tYXRobWxcIl0sIFttYXRoXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkTWF0aE1MO1xuIiwiXG52YXIgYnVpbGRIVE1MID0gcmVxdWlyZShcIi4vYnVpbGRIVE1MXCIpO1xudmFyIGJ1aWxkTWF0aE1MID0gcmVxdWlyZShcIi4vYnVpbGRNYXRoTUxcIik7XG52YXIgYnVpbGRDb21tb24gPSByZXF1aXJlKFwiLi9idWlsZENvbW1vblwiKTtcblxudmFyIG1ha2VTcGFuID0gYnVpbGRDb21tb24ubWFrZVNwYW47XG5cbnZhciBidWlsZFRyZWUgPSBmdW5jdGlvbih0cmVlLCBleHByZXNzaW9uLCBzZXR0aW5ncykge1xuICAgIC8vIGBidWlsZEhUTUxgIHNvbWV0aW1lcyBtZXNzZXMgd2l0aCB0aGUgcGFyc2UgdHJlZSAobGlrZSB0dXJuaW5nIGJpbnMgLT5cbiAgICAvLyBvcmRzKSwgc28gd2UgYnVpbGQgdGhlIE1hdGhNTCB2ZXJzaW9uIGZpcnN0LlxuICAgIHZhciBtYXRoTUxOb2RlID0gYnVpbGRNYXRoTUwodHJlZSwgZXhwcmVzc2lvbiwgc2V0dGluZ3MpO1xuICAgIHZhciBodG1sTm9kZSA9IGJ1aWxkSFRNTCh0cmVlLCBzZXR0aW5ncyk7XG5cbiAgICB2YXIga2F0ZXhOb2RlID0gbWFrZVNwYW4oW1wia2F0ZXhcIl0sIFtcbiAgICAgICAgbWF0aE1MTm9kZSwgaHRtbE5vZGVcbiAgICBdKTtcblxuICAgIGlmIChzZXR0aW5ncy5kaXNwbGF5TW9kZSkge1xuICAgICAgICByZXR1cm4gbWFrZVNwYW4oW1wia2F0ZXgtZGlzcGxheVwiXSwgW2thdGV4Tm9kZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrYXRleE5vZGU7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZFRyZWU7XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBkZWFscyB3aXRoIGNyZWF0aW5nIGRlbGltaXRlcnMgb2YgdmFyaW91cyBzaXplcy4gVGhlIFRlWGJvb2tcbiAqIGRpc2N1c3NlcyB0aGVzZSByb3V0aW5lcyBvbiBwYWdlIDQ0MS00NDIsIGluIHRoZSBcIkFub3RoZXIgc3Vicm91dGluZSBzZXRzIGJveFxuICogeCB0byBhIHNwZWNpZmllZCB2YXJpYWJsZSBkZWxpbWl0ZXJcIiBwYXJhZ3JhcGguXG4gKlxuICogVGhlcmUgYXJlIHRocmVlIG1haW4gcm91dGluZXMgaGVyZS4gYG1ha2VTbWFsbERlbGltYCBtYWtlcyBhIGRlbGltaXRlciBpbiB0aGVcbiAqIG5vcm1hbCBmb250LCBidXQgaW4gZWl0aGVyIHRleHQsIHNjcmlwdCwgb3Igc2NyaXB0c2NyaXB0IHN0eWxlLlxuICogYG1ha2VMYXJnZURlbGltYCBtYWtlcyBhIGRlbGltaXRlciBpbiB0ZXh0c3R5bGUsIGJ1dCBpbiBvbmUgb2YgdGhlIFNpemUxLFxuICogU2l6ZTIsIFNpemUzLCBvciBTaXplNCBmb250cy4gYG1ha2VTdGFja2VkRGVsaW1gIG1ha2VzIGEgZGVsaW1pdGVyIG91dCBvZlxuICogc21hbGxlciBwaWVjZXMgdGhhdCBhcmUgc3RhY2tlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyB0YWtlIGEgcGFyYW1ldGVyIGBjZW50ZXJgLCB3aGljaCBkZXRlcm1pbmVzIGlmIHRoZSBkZWxpbWl0ZXJcbiAqIHNob3VsZCBiZSBjZW50ZXJlZCBhcm91bmQgdGhlIGF4aXMuXG4gKlxuICogVGhlbiwgdGhlcmUgYXJlIHRocmVlIGV4cG9zZWQgZnVuY3Rpb25zLiBgc2l6ZWREZWxpbWAgbWFrZXMgYSBkZWxpbWl0ZXIgaW5cbiAqIG9uZSBvZiB0aGUgZ2l2ZW4gc2l6ZXMuIFRoaXMgaXMgdXNlZCBmb3IgdGhpbmdzIGxpa2UgYFxcYmlnbGAuXG4gKiBgY3VzdG9tU2l6ZWREZWxpbWAgbWFrZXMgYSBkZWxpbWl0ZXIgd2l0aCBhIGdpdmVuIHRvdGFsIGhlaWdodCtkZXB0aC4gSXQgaXNcbiAqIGNhbGxlZCBpbiBwbGFjZXMgbGlrZSBgXFxzcXJ0YC4gYGxlZnRSaWdodERlbGltYCBtYWtlcyBhbiBhcHByb3ByaWF0ZVxuICogZGVsaW1pdGVyIHdoaWNoIHN1cnJvdW5kcyBhbiBleHByZXNzaW9uIG9mIGEgZ2l2ZW4gaGVpZ2h0IGFuIGRlcHRoLiBJdCBpc1xuICogdXNlZCBpbiBgXFxsZWZ0YCBhbmQgYFxccmlnaHRgLlxuICovXG5cbnZhciBQYXJzZUVycm9yID0gcmVxdWlyZShcIi4vUGFyc2VFcnJvclwiKTtcbnZhciBTdHlsZSA9IHJlcXVpcmUoXCIuL1N0eWxlXCIpO1xuXG52YXIgYnVpbGRDb21tb24gPSByZXF1aXJlKFwiLi9idWlsZENvbW1vblwiKTtcbnZhciBmb250TWV0cmljcyA9IHJlcXVpcmUoXCIuL2ZvbnRNZXRyaWNzXCIpO1xudmFyIHN5bWJvbHMgPSByZXF1aXJlKFwiLi9zeW1ib2xzXCIpO1xudmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBtYWtlU3BhbiA9IGJ1aWxkQ29tbW9uLm1ha2VTcGFuO1xuXG4vKipcbiAqIEdldCB0aGUgbWV0cmljcyBmb3IgYSBnaXZlbiBzeW1ib2wgYW5kIGZvbnQsIGFmdGVyIHRyYW5zZm9ybWF0aW9uIChpLmUuXG4gKiBhZnRlciBmb2xsb3dpbmcgcmVwbGFjZW1lbnQgZnJvbSBzeW1ib2xzLmpzKVxuICovXG52YXIgZ2V0TWV0cmljcyA9IGZ1bmN0aW9uKHN5bWJvbCwgZm9udCkge1xuICAgIGlmIChzeW1ib2xzLm1hdGhbc3ltYm9sXSAmJiBzeW1ib2xzLm1hdGhbc3ltYm9sXS5yZXBsYWNlKSB7XG4gICAgICAgIHJldHVybiBmb250TWV0cmljcy5nZXRDaGFyYWN0ZXJNZXRyaWNzKFxuICAgICAgICAgICAgc3ltYm9scy5tYXRoW3N5bWJvbF0ucmVwbGFjZSwgZm9udCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZvbnRNZXRyaWNzLmdldENoYXJhY3Rlck1ldHJpY3MoXG4gICAgICAgICAgICBzeW1ib2wsIGZvbnQpO1xuICAgIH1cbn07XG5cbi8qKlxuICogQnVpbGRzIGEgc3ltYm9sIGluIHRoZSBnaXZlbiBmb250IHNpemUgKG5vdGUgc2l6ZSBpcyBhbiBpbnRlZ2VyKVxuICovXG52YXIgbWF0aHJtU2l6ZSA9IGZ1bmN0aW9uKHZhbHVlLCBzaXplLCBtb2RlKSB7XG4gICAgcmV0dXJuIGJ1aWxkQ29tbW9uLm1ha2VTeW1ib2wodmFsdWUsIFwiU2l6ZVwiICsgc2l6ZSArIFwiLVJlZ3VsYXJcIiwgbW9kZSk7XG59O1xuXG4vKipcbiAqIFB1dHMgYSBkZWxpbWl0ZXIgc3BhbiBpbiBhIGdpdmVuIHN0eWxlLCBhbmQgYWRkcyBhcHByb3ByaWF0ZSBoZWlnaHQsIGRlcHRoLFxuICogYW5kIG1heEZvbnRTaXplcy5cbiAqL1xudmFyIHN0eWxlV3JhcCA9IGZ1bmN0aW9uKGRlbGltLCB0b1N0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIHNwYW4gPSBtYWtlU3BhbihcbiAgICAgICAgW1wic3R5bGUtd3JhcFwiLCBvcHRpb25zLnN0eWxlLnJlc2V0KCksIHRvU3R5bGUuY2xzKCldLCBbZGVsaW1dKTtcblxuICAgIHZhciBtdWx0aXBsaWVyID0gdG9TdHlsZS5zaXplTXVsdGlwbGllciAvIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXI7XG5cbiAgICBzcGFuLmhlaWdodCAqPSBtdWx0aXBsaWVyO1xuICAgIHNwYW4uZGVwdGggKj0gbXVsdGlwbGllcjtcbiAgICBzcGFuLm1heEZvbnRTaXplID0gdG9TdHlsZS5zaXplTXVsdGlwbGllcjtcblxuICAgIHJldHVybiBzcGFuO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIHNtYWxsIGRlbGltaXRlci4gVGhpcyBpcyBhIGRlbGltaXRlciB0aGF0IGNvbWVzIGluIHRoZSBNYWluLVJlZ3VsYXJcbiAqIGZvbnQsIGJ1dCBpcyByZXN0eWxlZCB0byBlaXRoZXIgYmUgaW4gdGV4dHN0eWxlLCBzY3JpcHRzdHlsZSwgb3JcbiAqIHNjcmlwdHNjcmlwdHN0eWxlLlxuICovXG52YXIgbWFrZVNtYWxsRGVsaW0gPSBmdW5jdGlvbihkZWxpbSwgc3R5bGUsIGNlbnRlciwgb3B0aW9ucywgbW9kZSkge1xuICAgIHZhciB0ZXh0ID0gYnVpbGRDb21tb24ubWFrZVN5bWJvbChkZWxpbSwgXCJNYWluLVJlZ3VsYXJcIiwgbW9kZSk7XG5cbiAgICB2YXIgc3BhbiA9IHN0eWxlV3JhcCh0ZXh0LCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgIHZhciBzaGlmdCA9XG4gICAgICAgICAgICAoMSAtIG9wdGlvbnMuc3R5bGUuc2l6ZU11bHRpcGxpZXIgLyBzdHlsZS5zaXplTXVsdGlwbGllcikgKlxuICAgICAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5heGlzSGVpZ2h0O1xuXG4gICAgICAgIHNwYW4uc3R5bGUudG9wID0gc2hpZnQgKyBcImVtXCI7XG4gICAgICAgIHNwYW4uaGVpZ2h0IC09IHNoaWZ0O1xuICAgICAgICBzcGFuLmRlcHRoICs9IHNoaWZ0O1xuICAgIH1cblxuICAgIHJldHVybiBzcGFuO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGxhcmdlIGRlbGltaXRlci4gVGhpcyBpcyBhIGRlbGltaXRlciB0aGF0IGNvbWVzIGluIHRoZSBTaXplMSwgU2l6ZTIsXG4gKiBTaXplMywgb3IgU2l6ZTQgZm9udHMuIEl0IGlzIGFsd2F5cyByZW5kZXJlZCBpbiB0ZXh0c3R5bGUuXG4gKi9cbnZhciBtYWtlTGFyZ2VEZWxpbSA9IGZ1bmN0aW9uKGRlbGltLCBzaXplLCBjZW50ZXIsIG9wdGlvbnMsIG1vZGUpIHtcbiAgICB2YXIgaW5uZXIgPSBtYXRocm1TaXplKGRlbGltLCBzaXplLCBtb2RlKTtcblxuICAgIHZhciBzcGFuID0gc3R5bGVXcmFwKFxuICAgICAgICBtYWtlU3BhbihbXCJkZWxpbXNpemluZ1wiLCBcInNpemVcIiArIHNpemVdLFxuICAgICAgICAgICAgICAgICBbaW5uZXJdLCBvcHRpb25zLmdldENvbG9yKCkpLFxuICAgICAgICBTdHlsZS5URVhULCBvcHRpb25zKTtcblxuICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgdmFyIHNoaWZ0ID0gKDEgLSBvcHRpb25zLnN0eWxlLnNpemVNdWx0aXBsaWVyKSAqXG4gICAgICAgICAgICBmb250TWV0cmljcy5tZXRyaWNzLmF4aXNIZWlnaHQ7XG5cbiAgICAgICAgc3Bhbi5zdHlsZS50b3AgPSBzaGlmdCArIFwiZW1cIjtcbiAgICAgICAgc3Bhbi5oZWlnaHQgLT0gc2hpZnQ7XG4gICAgICAgIHNwYW4uZGVwdGggKz0gc2hpZnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYW47XG59O1xuXG4vKipcbiAqIE1ha2UgYW4gaW5uZXIgc3BhbiB3aXRoIHRoZSBnaXZlbiBvZmZzZXQgYW5kIGluIHRoZSBnaXZlbiBmb250LiBUaGlzIGlzIHVzZWRcbiAqIGluIGBtYWtlU3RhY2tlZERlbGltYCB0byBtYWtlIHRoZSBzdGFja2luZyBwaWVjZXMgZm9yIHRoZSBkZWxpbWl0ZXIuXG4gKi9cbnZhciBtYWtlSW5uZXIgPSBmdW5jdGlvbihzeW1ib2wsIGZvbnQsIG1vZGUpIHtcbiAgICB2YXIgc2l6ZUNsYXNzO1xuICAgIC8vIEFwcGx5IHRoZSBjb3JyZWN0IENTUyBjbGFzcyB0byBjaG9vc2UgdGhlIHJpZ2h0IGZvbnQuXG4gICAgaWYgKGZvbnQgPT09IFwiU2l6ZTEtUmVndWxhclwiKSB7XG4gICAgICAgIHNpemVDbGFzcyA9IFwiZGVsaW0tc2l6ZTFcIjtcbiAgICB9IGVsc2UgaWYgKGZvbnQgPT09IFwiU2l6ZTQtUmVndWxhclwiKSB7XG4gICAgICAgIHNpemVDbGFzcyA9IFwiZGVsaW0tc2l6ZTRcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5uZXIgPSBtYWtlU3BhbihcbiAgICAgICAgW1wiZGVsaW1zaXppbmdpbm5lclwiLCBzaXplQ2xhc3NdLFxuICAgICAgICBbbWFrZVNwYW4oW10sIFtidWlsZENvbW1vbi5tYWtlU3ltYm9sKHN5bWJvbCwgZm9udCwgbW9kZSldKV0pO1xuXG4gICAgLy8gU2luY2UgdGhpcyB3aWxsIGJlIHBhc3NlZCBpbnRvIGBtYWtlVkxpc3RgIGluIHRoZSBlbmQsIHdyYXAgdGhlIGVsZW1lbnRcbiAgICAvLyBpbiB0aGUgYXBwcm9wcmlhdGUgdGFnIHRoYXQgVkxpc3QgdXNlcy5cbiAgICByZXR1cm4ge3R5cGU6IFwiZWxlbVwiLCBlbGVtOiBpbm5lcn07XG59O1xuXG4vKipcbiAqIE1ha2UgYSBzdGFja2VkIGRlbGltaXRlciBvdXQgb2YgYSBnaXZlbiBkZWxpbWl0ZXIsIHdpdGggdGhlIHRvdGFsIGhlaWdodCBhdFxuICogbGVhc3QgYGhlaWdodFRvdGFsYC4gVGhpcyByb3V0aW5lIGlzIG1lbnRpb25lZCBvbiBwYWdlIDQ0MiBvZiB0aGUgVGVYYm9vay5cbiAqL1xudmFyIG1ha2VTdGFja2VkRGVsaW0gPSBmdW5jdGlvbihkZWxpbSwgaGVpZ2h0VG90YWwsIGNlbnRlciwgb3B0aW9ucywgbW9kZSkge1xuICAgIC8vIFRoZXJlIGFyZSBmb3VyIHBhcnRzLCB0aGUgdG9wLCBhbiBvcHRpb25hbCBtaWRkbGUsIGEgcmVwZWF0ZWQgcGFydCwgYW5kIGFcbiAgICAvLyBib3R0b20uXG4gICAgdmFyIHRvcCwgbWlkZGxlLCByZXBlYXQsIGJvdHRvbTtcbiAgICB0b3AgPSByZXBlYXQgPSBib3R0b20gPSBkZWxpbTtcbiAgICBtaWRkbGUgPSBudWxsO1xuICAgIC8vIEFsc28ga2VlcCB0cmFjayBvZiB3aGF0IGZvbnQgdGhlIGRlbGltaXRlcnMgYXJlIGluXG4gICAgdmFyIGZvbnQgPSBcIlNpemUxLVJlZ3VsYXJcIjtcblxuICAgIC8vIFdlIHNldCB0aGUgcGFydHMgYW5kIGZvbnQgYmFzZWQgb24gdGhlIHN5bWJvbC4gTm90ZSB0aGF0IHdlIHVzZVxuICAgIC8vICdcXHUyM2QwJyBpbnN0ZWFkIG9mICd8JyBhbmQgJ1xcdTIwMTYnIGluc3RlYWQgb2YgJ1xcXFx8JyBmb3IgdGhlXG4gICAgLy8gcmVwZWF0cyBvZiB0aGUgYXJyb3dzXG4gICAgaWYgKGRlbGltID09PSBcIlxcXFx1cGFycm93XCIpIHtcbiAgICAgICAgcmVwZWF0ID0gYm90dG9tID0gXCJcXHUyM2QwXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxcVXBhcnJvd1wiKSB7XG4gICAgICAgIHJlcGVhdCA9IGJvdHRvbSA9IFwiXFx1MjAxNlwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXFxcXGRvd25hcnJvd1wiKSB7XG4gICAgICAgIHRvcCA9IHJlcGVhdCA9IFwiXFx1MjNkMFwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXFxcXERvd25hcnJvd1wiKSB7XG4gICAgICAgIHRvcCA9IHJlcGVhdCA9IFwiXFx1MjAxNlwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXFxcXHVwZG93bmFycm93XCIpIHtcbiAgICAgICAgdG9wID0gXCJcXFxcdXBhcnJvd1wiO1xuICAgICAgICByZXBlYXQgPSBcIlxcdTIzZDBcIjtcbiAgICAgICAgYm90dG9tID0gXCJcXFxcZG93bmFycm93XCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxcVXBkb3duYXJyb3dcIikge1xuICAgICAgICB0b3AgPSBcIlxcXFxVcGFycm93XCI7XG4gICAgICAgIHJlcGVhdCA9IFwiXFx1MjAxNlwiO1xuICAgICAgICBib3R0b20gPSBcIlxcXFxEb3duYXJyb3dcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIltcIiB8fCBkZWxpbSA9PT0gXCJcXFxcbGJyYWNrXCIpIHtcbiAgICAgICAgdG9wID0gXCJcXHUyM2ExXCI7XG4gICAgICAgIHJlcGVhdCA9IFwiXFx1MjNhMlwiO1xuICAgICAgICBib3R0b20gPSBcIlxcdTIzYTNcIjtcbiAgICAgICAgZm9udCA9IFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXVwiIHx8IGRlbGltID09PSBcIlxcXFxyYnJhY2tcIikge1xuICAgICAgICB0b3AgPSBcIlxcdTIzYTRcIjtcbiAgICAgICAgcmVwZWF0ID0gXCJcXHUyM2E1XCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNhNlwiO1xuICAgICAgICBmb250ID0gXCJTaXplNC1SZWd1bGFyXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxcbGZsb29yXCIpIHtcbiAgICAgICAgcmVwZWF0ID0gdG9wID0gXCJcXHUyM2EyXCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNhM1wiO1xuICAgICAgICBmb250ID0gXCJTaXplNC1SZWd1bGFyXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxcbGNlaWxcIikge1xuICAgICAgICB0b3AgPSBcIlxcdTIzYTFcIjtcbiAgICAgICAgcmVwZWF0ID0gYm90dG9tID0gXCJcXHUyM2EyXCI7XG4gICAgICAgIGZvbnQgPSBcIlNpemU0LVJlZ3VsYXJcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIlxcXFxyZmxvb3JcIikge1xuICAgICAgICByZXBlYXQgPSB0b3AgPSBcIlxcdTIzYTVcIjtcbiAgICAgICAgYm90dG9tID0gXCJcXHUyM2E2XCI7XG4gICAgICAgIGZvbnQgPSBcIlNpemU0LVJlZ3VsYXJcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIlxcXFxyY2VpbFwiKSB7XG4gICAgICAgIHRvcCA9IFwiXFx1MjNhNFwiO1xuICAgICAgICByZXBlYXQgPSBib3R0b20gPSBcIlxcdTIzYTVcIjtcbiAgICAgICAgZm9udCA9IFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiKFwiKSB7XG4gICAgICAgIHRvcCA9IFwiXFx1MjM5YlwiO1xuICAgICAgICByZXBlYXQgPSBcIlxcdTIzOWNcIjtcbiAgICAgICAgYm90dG9tID0gXCJcXHUyMzlkXCI7XG4gICAgICAgIGZvbnQgPSBcIlNpemU0LVJlZ3VsYXJcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIilcIikge1xuICAgICAgICB0b3AgPSBcIlxcdTIzOWVcIjtcbiAgICAgICAgcmVwZWF0ID0gXCJcXHUyMzlmXCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNhMFwiO1xuICAgICAgICBmb250ID0gXCJTaXplNC1SZWd1bGFyXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCJcXFxce1wiIHx8IGRlbGltID09PSBcIlxcXFxsYnJhY2VcIikge1xuICAgICAgICB0b3AgPSBcIlxcdTIzYTdcIjtcbiAgICAgICAgbWlkZGxlID0gXCJcXHUyM2E4XCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNhOVwiO1xuICAgICAgICByZXBlYXQgPSBcIlxcdTIzYWFcIjtcbiAgICAgICAgZm9udCA9IFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAoZGVsaW0gPT09IFwiXFxcXH1cIiB8fCBkZWxpbSA9PT0gXCJcXFxccmJyYWNlXCIpIHtcbiAgICAgICAgdG9wID0gXCJcXHUyM2FiXCI7XG4gICAgICAgIG1pZGRsZSA9IFwiXFx1MjNhY1wiO1xuICAgICAgICBib3R0b20gPSBcIlxcdTIzYWRcIjtcbiAgICAgICAgcmVwZWF0ID0gXCJcXHUyM2FhXCI7XG4gICAgICAgIGZvbnQgPSBcIlNpemU0LVJlZ3VsYXJcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIlxcXFxzdXJkXCIpIHtcbiAgICAgICAgdG9wID0gXCJcXHVlMDAxXCI7XG4gICAgICAgIGJvdHRvbSA9IFwiXFx1MjNiN1wiO1xuICAgICAgICByZXBlYXQgPSBcIlxcdWUwMDBcIjtcbiAgICAgICAgZm9udCA9IFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbWV0cmljcyBvZiB0aGUgZm91ciBzZWN0aW9uc1xuICAgIHZhciB0b3BNZXRyaWNzID0gZ2V0TWV0cmljcyh0b3AsIGZvbnQpO1xuICAgIHZhciB0b3BIZWlnaHRUb3RhbCA9IHRvcE1ldHJpY3MuaGVpZ2h0ICsgdG9wTWV0cmljcy5kZXB0aDtcbiAgICB2YXIgcmVwZWF0TWV0cmljcyA9IGdldE1ldHJpY3MocmVwZWF0LCBmb250KTtcbiAgICB2YXIgcmVwZWF0SGVpZ2h0VG90YWwgPSByZXBlYXRNZXRyaWNzLmhlaWdodCArIHJlcGVhdE1ldHJpY3MuZGVwdGg7XG4gICAgdmFyIGJvdHRvbU1ldHJpY3MgPSBnZXRNZXRyaWNzKGJvdHRvbSwgZm9udCk7XG4gICAgdmFyIGJvdHRvbUhlaWdodFRvdGFsID0gYm90dG9tTWV0cmljcy5oZWlnaHQgKyBib3R0b21NZXRyaWNzLmRlcHRoO1xuICAgIHZhciBtaWRkbGVIZWlnaHRUb3RhbCA9IDA7XG4gICAgdmFyIG1pZGRsZUZhY3RvciA9IDE7XG4gICAgaWYgKG1pZGRsZSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbWlkZGxlTWV0cmljcyA9IGdldE1ldHJpY3MobWlkZGxlLCBmb250KTtcbiAgICAgICAgbWlkZGxlSGVpZ2h0VG90YWwgPSBtaWRkbGVNZXRyaWNzLmhlaWdodCArIG1pZGRsZU1ldHJpY3MuZGVwdGg7XG4gICAgICAgIG1pZGRsZUZhY3RvciA9IDI7IC8vIHJlcGVhdCBzeW1tZXRyaWNhbGx5IGFib3ZlIGFuZCBiZWxvdyBtaWRkbGVcbiAgICB9XG5cbiAgICAvLyBDYWxjdWF0ZSB0aGUgbWluaW1hbCBoZWlnaHQgdGhhdCB0aGUgZGVsaW1pdGVyIGNhbiBoYXZlLlxuICAgIC8vIEl0IGlzIGF0IGxlYXN0IHRoZSBzaXplIG9mIHRoZSB0b3AsIGJvdHRvbSwgYW5kIG9wdGlvbmFsIG1pZGRsZSBjb21iaW5lZC5cbiAgICB2YXIgbWluSGVpZ2h0ID0gdG9wSGVpZ2h0VG90YWwgKyBib3R0b21IZWlnaHRUb3RhbCArIG1pZGRsZUhlaWdodFRvdGFsO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgbnVtYmVyIG9mIGNvcGllcyBvZiB0aGUgcmVwZWF0IHN5bWJvbCB3ZSB3aWxsIG5lZWRcbiAgICB2YXIgcmVwZWF0Q291bnQgPSBNYXRoLmNlaWwoXG4gICAgICAgIChoZWlnaHRUb3RhbCAtIG1pbkhlaWdodCkgLyAobWlkZGxlRmFjdG9yICogcmVwZWF0SGVpZ2h0VG90YWwpKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIHRvdGFsIGhlaWdodCBvZiB0aGUgZGVsaW1pdGVyIGluY2x1ZGluZyBhbGwgdGhlIHN5bWJvbHNcbiAgICB2YXIgcmVhbEhlaWdodFRvdGFsID1cbiAgICAgICAgbWluSGVpZ2h0ICsgcmVwZWF0Q291bnQgKiBtaWRkbGVGYWN0b3IgKiByZXBlYXRIZWlnaHRUb3RhbDtcblxuICAgIC8vIFRoZSBjZW50ZXIgb2YgdGhlIGRlbGltaXRlciBpcyBwbGFjZWQgYXQgdGhlIGNlbnRlciBvZiB0aGUgYXhpcy4gTm90ZVxuICAgIC8vIHRoYXQgaW4gdGhpcyBjb250ZXh0LCBcImNlbnRlclwiIG1lYW5zIHRoYXQgdGhlIGRlbGltaXRlciBzaG91bGQgYmVcbiAgICAvLyBjZW50ZXJlZCBhcm91bmQgdGhlIGF4aXMgaW4gdGhlIGN1cnJlbnQgc3R5bGUsIHdoaWxlIG5vcm1hbGx5IGl0IGlzXG4gICAgLy8gY2VudGVyZWQgYXJvdW5kIHRoZSBheGlzIGluIHRleHRzdHlsZS5cbiAgICB2YXIgYXhpc0hlaWdodCA9IGZvbnRNZXRyaWNzLm1ldHJpY3MuYXhpc0hlaWdodDtcbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgIGF4aXNIZWlnaHQgKj0gb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICB9XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXB0aFxuICAgIHZhciBkZXB0aCA9IHJlYWxIZWlnaHRUb3RhbCAvIDIgLSBheGlzSGVpZ2h0O1xuXG4gICAgLy8gTm93LCB3ZSBzdGFydCBidWlsZGluZyB0aGUgcGllY2VzIHRoYXQgd2lsbCBnbyBpbnRvIHRoZSB2bGlzdFxuXG4gICAgLy8gS2VlcCBhIGxpc3Qgb2YgdGhlIGlubmVyIHBpZWNlc1xuICAgIHZhciBpbm5lcnMgPSBbXTtcblxuICAgIC8vIEFkZCB0aGUgYm90dG9tIHN5bWJvbFxuICAgIGlubmVycy5wdXNoKG1ha2VJbm5lcihib3R0b20sIGZvbnQsIG1vZGUpKTtcblxuICAgIHZhciBpO1xuICAgIGlmIChtaWRkbGUgPT09IG51bGwpIHtcbiAgICAgICAgLy8gQWRkIHRoYXQgbWFueSBzeW1ib2xzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXBlYXRDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBpbm5lcnMucHVzaChtYWtlSW5uZXIocmVwZWF0LCBmb250LCBtb2RlKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXaGVuIHRoZXJlIGlzIGEgbWlkZGxlIGJpdCwgd2UgbmVlZCB0aGUgbWlkZGxlIHBhcnQgYW5kIHR3byByZXBlYXRlZFxuICAgICAgICAvLyBzZWN0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVwZWF0Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgaW5uZXJzLnB1c2gobWFrZUlubmVyKHJlcGVhdCwgZm9udCwgbW9kZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlubmVycy5wdXNoKG1ha2VJbm5lcihtaWRkbGUsIGZvbnQsIG1vZGUpKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlcGVhdENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlubmVycy5wdXNoKG1ha2VJbm5lcihyZXBlYXQsIGZvbnQsIG1vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgdG9wIHN5bWJvbFxuICAgIGlubmVycy5wdXNoKG1ha2VJbm5lcih0b3AsIGZvbnQsIG1vZGUpKTtcblxuICAgIC8vIEZpbmFsbHksIGJ1aWxkIHRoZSB2bGlzdFxuICAgIHZhciBpbm5lciA9IGJ1aWxkQ29tbW9uLm1ha2VWTGlzdChpbm5lcnMsIFwiYm90dG9tXCIsIGRlcHRoLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBzdHlsZVdyYXAoXG4gICAgICAgIG1ha2VTcGFuKFtcImRlbGltc2l6aW5nXCIsIFwibXVsdFwiXSwgW2lubmVyXSwgb3B0aW9ucy5nZXRDb2xvcigpKSxcbiAgICAgICAgU3R5bGUuVEVYVCwgb3B0aW9ucyk7XG59O1xuXG4vLyBUaGVyZSBhcmUgdGhyZWUga2luZHMgb2YgZGVsaW1pdGVycywgZGVsaW1pdGVycyB0aGF0IHN0YWNrIHdoZW4gdGhleSBiZWNvbWVcbi8vIHRvbyBsYXJnZVxudmFyIHN0YWNrTGFyZ2VEZWxpbWl0ZXJzID0gW1xuICAgIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXFxcXGxicmFja1wiLCBcIl1cIiwgXCJcXFxccmJyYWNrXCIsXG4gICAgXCJcXFxce1wiLCBcIlxcXFxsYnJhY2VcIiwgXCJcXFxcfVwiLCBcIlxcXFxyYnJhY2VcIixcbiAgICBcIlxcXFxsZmxvb3JcIiwgXCJcXFxccmZsb29yXCIsIFwiXFxcXGxjZWlsXCIsIFwiXFxcXHJjZWlsXCIsXG4gICAgXCJcXFxcc3VyZFwiXG5dO1xuXG4vLyBkZWxpbWl0ZXJzIHRoYXQgYWx3YXlzIHN0YWNrXG52YXIgc3RhY2tBbHdheXNEZWxpbWl0ZXJzID0gW1xuICAgIFwiXFxcXHVwYXJyb3dcIiwgXCJcXFxcZG93bmFycm93XCIsIFwiXFxcXHVwZG93bmFycm93XCIsXG4gICAgXCJcXFxcVXBhcnJvd1wiLCBcIlxcXFxEb3duYXJyb3dcIiwgXCJcXFxcVXBkb3duYXJyb3dcIixcbiAgICBcInxcIiwgXCJcXFxcfFwiLCBcIlxcXFx2ZXJ0XCIsIFwiXFxcXFZlcnRcIlxuXTtcblxuLy8gYW5kIGRlbGltaXRlcnMgdGhhdCBuZXZlciBzdGFja1xudmFyIHN0YWNrTmV2ZXJEZWxpbWl0ZXJzID0gW1xuICAgIFwiPFwiLCBcIj5cIiwgXCJcXFxcbGFuZ2xlXCIsIFwiXFxcXHJhbmdsZVwiLCBcIi9cIiwgXCJcXFxcYmFja3NsYXNoXCJcbl07XG5cbi8vIE1ldHJpY3Mgb2YgdGhlIGRpZmZlcmVudCBzaXplcy4gRm91bmQgYnkgbG9va2luZyBhdCBUZVgncyBvdXRwdXQgb2Zcbi8vICRcXGJpZ2x8IC8vIFxcQmlnbHwgXFxiaWdnbHwgXFxCaWdnbHwgXFxzaG93bGlzdHMkXG4vLyBVc2VkIHRvIGNyZWF0ZSBzdGFja2VkIGRlbGltaXRlcnMgb2YgYXBwcm9wcmlhdGUgc2l6ZXMgaW4gbWFrZVNpemVkRGVsaW0uXG52YXIgc2l6ZVRvTWF4SGVpZ2h0ID0gWzAsIDEuMiwgMS44LCAyLjQsIDMuMF07XG5cbi8qKlxuICogVXNlZCB0byBjcmVhdGUgYSBkZWxpbWl0ZXIgb2YgYSBzcGVjaWZpYyBzaXplLCB3aGVyZSBgc2l6ZWAgaXMgMSwgMiwgMywgb3IgNC5cbiAqL1xudmFyIG1ha2VTaXplZERlbGltID0gZnVuY3Rpb24oZGVsaW0sIHNpemUsIG9wdGlvbnMsIG1vZGUpIHtcbiAgICAvLyA8IGFuZCA+IHR1cm4gaW50byBcXGxhbmdsZSBhbmQgXFxyYW5nbGUgaW4gZGVsaW1pdGVyc1xuICAgIGlmIChkZWxpbSA9PT0gXCI8XCIpIHtcbiAgICAgICAgZGVsaW0gPSBcIlxcXFxsYW5nbGVcIjtcbiAgICB9IGVsc2UgaWYgKGRlbGltID09PSBcIj5cIikge1xuICAgICAgICBkZWxpbSA9IFwiXFxcXHJhbmdsZVwiO1xuICAgIH1cblxuICAgIC8vIFNpemVkIGRlbGltaXRlcnMgYXJlIG5ldmVyIGNlbnRlcmVkLlxuICAgIGlmICh1dGlscy5jb250YWlucyhzdGFja0xhcmdlRGVsaW1pdGVycywgZGVsaW0pIHx8XG4gICAgICAgIHV0aWxzLmNvbnRhaW5zKHN0YWNrTmV2ZXJEZWxpbWl0ZXJzLCBkZWxpbSkpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VMYXJnZURlbGltKGRlbGltLCBzaXplLCBmYWxzZSwgb3B0aW9ucywgbW9kZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5jb250YWlucyhzdGFja0Fsd2F5c0RlbGltaXRlcnMsIGRlbGltKSkge1xuICAgICAgICByZXR1cm4gbWFrZVN0YWNrZWREZWxpbShcbiAgICAgICAgICAgIGRlbGltLCBzaXplVG9NYXhIZWlnaHRbc2l6ZV0sIGZhbHNlLCBvcHRpb25zLCBtb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcIklsbGVnYWwgZGVsaW1pdGVyOiAnXCIgKyBkZWxpbSArIFwiJ1wiKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoZXJlIGFyZSB0aHJlZSBkaWZmZXJlbnQgc2VxdWVuY2VzIG9mIGRlbGltaXRlciBzaXplcyB0aGF0IHRoZSBkZWxpbWl0ZXJzXG4gKiBmb2xsb3cgZGVwZW5kaW5nIG9uIHRoZSBraW5kIG9mIGRlbGltaXRlci4gVGhpcyBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgY3VzdG9tXG4gKiBzaXplZCBkZWxpbWl0ZXJzIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGNyZWF0ZSBhIHNtYWxsLCBsYXJnZSwgb3Igc3RhY2tlZFxuICogZGVsaW1pdGVyLlxuICpcbiAqIEluIHJlYWwgVGVYLCB0aGVzZSBzZXF1ZW5jZXMgYXJlbid0IGV4cGxpY2l0bHkgZGVmaW5lZCwgYnV0IGFyZSBpbnN0ZWFkXG4gKiBkZWZpbmVkIGluc2lkZSB0aGUgZm9udCBtZXRyaWNzLiBTaW5jZSB0aGVyZSBhcmUgb25seSB0aHJlZSBzZXF1ZW5jZXMgdGhhdFxuICogYXJlIHBvc3NpYmxlIGZvciB0aGUgZGVsaW1pdGVycyB0aGF0IFRlWCBkZWZpbmVzLCBpdCBpcyBlYXNpZXIgdG8ganVzdCBlbmNvZGVcbiAqIHRoZW0gZXhwbGljaXRseSBoZXJlLlxuICovXG5cbi8vIERlbGltaXRlcnMgdGhhdCBuZXZlciBzdGFjayB0cnkgc21hbGwgZGVsaW1pdGVycyBhbmQgbGFyZ2UgZGVsaW1pdGVycyBvbmx5XG52YXIgc3RhY2tOZXZlckRlbGltaXRlclNlcXVlbmNlID0gW1xuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5TQ1JJUFRTQ1JJUFR9LFxuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5TQ1JJUFR9LFxuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5URVhUfSxcbiAgICB7dHlwZTogXCJsYXJnZVwiLCBzaXplOiAxfSxcbiAgICB7dHlwZTogXCJsYXJnZVwiLCBzaXplOiAyfSxcbiAgICB7dHlwZTogXCJsYXJnZVwiLCBzaXplOiAzfSxcbiAgICB7dHlwZTogXCJsYXJnZVwiLCBzaXplOiA0fVxuXTtcblxuLy8gRGVsaW1pdGVycyB0aGF0IGFsd2F5cyBzdGFjayB0cnkgdGhlIHNtYWxsIGRlbGltaXRlcnMgZmlyc3QsIHRoZW4gc3RhY2tcbnZhciBzdGFja0Fsd2F5c0RlbGltaXRlclNlcXVlbmNlID0gW1xuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5TQ1JJUFRTQ1JJUFR9LFxuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5TQ1JJUFR9LFxuICAgIHt0eXBlOiBcInNtYWxsXCIsIHN0eWxlOiBTdHlsZS5URVhUfSxcbiAgICB7dHlwZTogXCJzdGFja1wifVxuXTtcblxuLy8gRGVsaW1pdGVycyB0aGF0IHN0YWNrIHdoZW4gbGFyZ2UgdHJ5IHRoZSBzbWFsbCBhbmQgdGhlbiBsYXJnZSBkZWxpbWl0ZXJzLCBhbmRcbi8vIHN0YWNrIGFmdGVyd2FyZHNcbnZhciBzdGFja0xhcmdlRGVsaW1pdGVyU2VxdWVuY2UgPSBbXG4gICAge3R5cGU6IFwic21hbGxcIiwgc3R5bGU6IFN0eWxlLlNDUklQVFNDUklQVH0sXG4gICAge3R5cGU6IFwic21hbGxcIiwgc3R5bGU6IFN0eWxlLlNDUklQVH0sXG4gICAge3R5cGU6IFwic21hbGxcIiwgc3R5bGU6IFN0eWxlLlRFWFR9LFxuICAgIHt0eXBlOiBcImxhcmdlXCIsIHNpemU6IDF9LFxuICAgIHt0eXBlOiBcImxhcmdlXCIsIHNpemU6IDJ9LFxuICAgIHt0eXBlOiBcImxhcmdlXCIsIHNpemU6IDN9LFxuICAgIHt0eXBlOiBcImxhcmdlXCIsIHNpemU6IDR9LFxuICAgIHt0eXBlOiBcInN0YWNrXCJ9XG5dO1xuXG4vKipcbiAqIEdldCB0aGUgZm9udCB1c2VkIGluIGEgZGVsaW1pdGVyIGJhc2VkIG9uIHdoYXQga2luZCBvZiBkZWxpbWl0ZXIgaXQgaXMuXG4gKi9cbnZhciBkZWxpbVR5cGVUb0ZvbnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGUudHlwZSA9PT0gXCJzbWFsbFwiKSB7XG4gICAgICAgIHJldHVybiBcIk1haW4tUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAodHlwZS50eXBlID09PSBcImxhcmdlXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiU2l6ZVwiICsgdHlwZS5zaXplICsgXCItUmVndWxhclwiO1xuICAgIH0gZWxzZSBpZiAodHlwZS50eXBlID09PSBcInN0YWNrXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiU2l6ZTQtUmVndWxhclwiO1xuICAgIH1cbn07XG5cbi8qKlxuICogVHJhdmVyc2UgYSBzZXF1ZW5jZSBvZiB0eXBlcyBvZiBkZWxpbWl0ZXJzIHRvIGRlY2lkZSB3aGF0IGtpbmQgb2YgZGVsaW1pdGVyXG4gKiBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBkZWxpbWl0ZXIgb2YgdGhlIGdpdmVuIGhlaWdodCtkZXB0aC5cbiAqL1xudmFyIHRyYXZlcnNlU2VxdWVuY2UgPSBmdW5jdGlvbihkZWxpbSwgaGVpZ2h0LCBzZXF1ZW5jZSwgb3B0aW9ucykge1xuICAgIC8vIEhlcmUsIHdlIGNob29zZSB0aGUgaW5kZXggd2Ugc2hvdWxkIHN0YXJ0IGF0IGluIHRoZSBzZXF1ZW5jZXMuIEluIHNtYWxsZXJcbiAgICAvLyBzaXplcyAod2hpY2ggY29ycmVzcG9uZCB0byBsYXJnZXIgbnVtYmVycyBpbiBzdHlsZS5zaXplKSB3ZSBzdGFydCBlYXJsaWVyXG4gICAgLy8gaW4gdGhlIHNlcXVlbmNlLiBUaHVzLCBzY3JpcHRzY3JpcHQgc3RhcnRzIGF0IGluZGV4IDMtMz0wLCBzY3JpcHQgc3RhcnRzXG4gICAgLy8gYXQgaW5kZXggMy0yPTEsIHRleHQgc3RhcnRzIGF0IDMtMT0yLCBhbmQgZGlzcGxheSBzdGFydHMgYXQgbWluKDIsMy0wKT0yXG4gICAgdmFyIHN0YXJ0ID0gTWF0aC5taW4oMiwgMyAtIG9wdGlvbnMuc3R5bGUuc2l6ZSk7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlcXVlbmNlW2ldLnR5cGUgPT09IFwic3RhY2tcIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbHdheXMgdGhlIGxhc3QgZGVsaW1pdGVyLCBzbyB3ZSBqdXN0IGJyZWFrIHRoZSBsb29wIG5vdy5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1ldHJpY3MgPSBnZXRNZXRyaWNzKGRlbGltLCBkZWxpbVR5cGVUb0ZvbnQoc2VxdWVuY2VbaV0pKTtcbiAgICAgICAgdmFyIGhlaWdodERlcHRoID0gbWV0cmljcy5oZWlnaHQgKyBtZXRyaWNzLmRlcHRoO1xuXG4gICAgICAgIC8vIFNtYWxsIGRlbGltaXRlcnMgYXJlIHNjYWxlZCBkb3duIHZlcnNpb25zIG9mIHRoZSBzYW1lIGZvbnQsIHNvIHdlXG4gICAgICAgIC8vIGFjY291bnQgZm9yIHRoZSBzdHlsZSBjaGFuZ2Ugc2l6ZS5cblxuICAgICAgICBpZiAoc2VxdWVuY2VbaV0udHlwZSA9PT0gXCJzbWFsbFwiKSB7XG4gICAgICAgICAgICBoZWlnaHREZXB0aCAqPSBzZXF1ZW5jZVtpXS5zdHlsZS5zaXplTXVsdGlwbGllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBkZWxpbWl0ZXIgYXQgdGhpcyBzaXplIHdvcmtzIGZvciB0aGUgZ2l2ZW4gaGVpZ2h0LlxuICAgICAgICBpZiAoaGVpZ2h0RGVwdGggPiBoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXF1ZW5jZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2UsIHJldHVybiB0aGUgbGFzdCBzZXF1ZW5jZSBlbGVtZW50LlxuICAgIHJldHVybiBzZXF1ZW5jZVtzZXF1ZW5jZS5sZW5ndGggLSAxXTtcbn07XG5cbi8qKlxuICogTWFrZSBhIGRlbGltaXRlciBvZiBhIGdpdmVuIGhlaWdodCtkZXB0aCwgd2l0aCBvcHRpb25hbCBjZW50ZXJpbmcuIEhlcmUsIHdlXG4gKiB0cmF2ZXJzZSB0aGUgc2VxdWVuY2VzLCBhbmQgY3JlYXRlIGEgZGVsaW1pdGVyIHRoYXQgdGhlIHNlcXVlbmNlIHRlbGxzIHVzIHRvLlxuICovXG52YXIgbWFrZUN1c3RvbVNpemVkRGVsaW0gPSBmdW5jdGlvbihkZWxpbSwgaGVpZ2h0LCBjZW50ZXIsIG9wdGlvbnMsIG1vZGUpIHtcbiAgICBpZiAoZGVsaW0gPT09IFwiPFwiKSB7XG4gICAgICAgIGRlbGltID0gXCJcXFxcbGFuZ2xlXCI7XG4gICAgfSBlbHNlIGlmIChkZWxpbSA9PT0gXCI+XCIpIHtcbiAgICAgICAgZGVsaW0gPSBcIlxcXFxyYW5nbGVcIjtcbiAgICB9XG5cbiAgICAvLyBEZWNpZGUgd2hhdCBzZXF1ZW5jZSB0byB1c2VcbiAgICB2YXIgc2VxdWVuY2U7XG4gICAgaWYgKHV0aWxzLmNvbnRhaW5zKHN0YWNrTmV2ZXJEZWxpbWl0ZXJzLCBkZWxpbSkpIHtcbiAgICAgICAgc2VxdWVuY2UgPSBzdGFja05ldmVyRGVsaW1pdGVyU2VxdWVuY2U7XG4gICAgfSBlbHNlIGlmICh1dGlscy5jb250YWlucyhzdGFja0xhcmdlRGVsaW1pdGVycywgZGVsaW0pKSB7XG4gICAgICAgIHNlcXVlbmNlID0gc3RhY2tMYXJnZURlbGltaXRlclNlcXVlbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcXVlbmNlID0gc3RhY2tBbHdheXNEZWxpbWl0ZXJTZXF1ZW5jZTtcbiAgICB9XG5cbiAgICAvLyBMb29rIHRocm91Z2ggdGhlIHNlcXVlbmNlXG4gICAgdmFyIGRlbGltVHlwZSA9IHRyYXZlcnNlU2VxdWVuY2UoZGVsaW0sIGhlaWdodCwgc2VxdWVuY2UsIG9wdGlvbnMpO1xuXG4gICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBzZXF1ZW5jZSBlbGVtZW50IHdlIGRlY2lkZWQgb24sIGNhbGwgdGhlIGFwcHJvcHJpYXRlXG4gICAgLy8gZnVuY3Rpb24uXG4gICAgaWYgKGRlbGltVHlwZS50eXBlID09PSBcInNtYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VTbWFsbERlbGltKGRlbGltLCBkZWxpbVR5cGUuc3R5bGUsIGNlbnRlciwgb3B0aW9ucywgbW9kZSk7XG4gICAgfSBlbHNlIGlmIChkZWxpbVR5cGUudHlwZSA9PT0gXCJsYXJnZVwiKSB7XG4gICAgICAgIHJldHVybiBtYWtlTGFyZ2VEZWxpbShkZWxpbSwgZGVsaW1UeXBlLnNpemUsIGNlbnRlciwgb3B0aW9ucywgbW9kZSk7XG4gICAgfSBlbHNlIGlmIChkZWxpbVR5cGUudHlwZSA9PT0gXCJzdGFja1wiKSB7XG4gICAgICAgIHJldHVybiBtYWtlU3RhY2tlZERlbGltKGRlbGltLCBoZWlnaHQsIGNlbnRlciwgb3B0aW9ucywgbW9kZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYWtlIGEgZGVsaW1pdGVyIGZvciB1c2Ugd2l0aCBgXFxsZWZ0YCBhbmQgYFxccmlnaHRgLCBnaXZlbiBhIGhlaWdodCBhbmQgZGVwdGhcbiAqIG9mIGFuIGV4cHJlc3Npb24gdGhhdCB0aGUgZGVsaW1pdGVycyBzdXJyb3VuZC5cbiAqL1xudmFyIG1ha2VMZWZ0UmlnaHREZWxpbSA9IGZ1bmN0aW9uKGRlbGltLCBoZWlnaHQsIGRlcHRoLCBvcHRpb25zLCBtb2RlKSB7XG4gICAgLy8gV2UgYWx3YXlzIGNlbnRlciBcXGxlZnQvXFxyaWdodCBkZWxpbWl0ZXJzLCBzbyB0aGUgYXhpcyBpcyBhbHdheXMgc2hpZnRlZFxuICAgIHZhciBheGlzSGVpZ2h0ID1cbiAgICAgICAgZm9udE1ldHJpY3MubWV0cmljcy5heGlzSGVpZ2h0ICogb3B0aW9ucy5zdHlsZS5zaXplTXVsdGlwbGllcjtcblxuICAgIC8vIFRha2VuIGZyb20gVGVYIHNvdXJjZSwgdGV4LndlYiwgZnVuY3Rpb24gbWFrZV9sZWZ0X3JpZ2h0XG4gICAgdmFyIGRlbGltaXRlckZhY3RvciA9IDkwMTtcbiAgICB2YXIgZGVsaW1pdGVyRXh0ZW5kID0gNS4wIC8gZm9udE1ldHJpY3MubWV0cmljcy5wdFBlckVtO1xuXG4gICAgdmFyIG1heERpc3RGcm9tQXhpcyA9IE1hdGgubWF4KFxuICAgICAgICBoZWlnaHQgLSBheGlzSGVpZ2h0LCBkZXB0aCArIGF4aXNIZWlnaHQpO1xuXG4gICAgdmFyIHRvdGFsSGVpZ2h0ID0gTWF0aC5tYXgoXG4gICAgICAgIC8vIEluIHJlYWwgVGVYLCBjYWxjdWxhdGlvbnMgYXJlIGRvbmUgdXNpbmcgaW50ZWdyYWwgdmFsdWVzIHdoaWNoIGFyZVxuICAgICAgICAvLyA2NTUzNiBwZXIgcHQsIG9yIDY1NTM2MCBwZXIgZW0uIFNvLCB0aGUgZGl2aXNpb24gaGVyZSB0cnVuY2F0ZXMgaW5cbiAgICAgICAgLy8gVGVYIGJ1dCBkb2Vzbid0IGhlcmUsIHByb2R1Y2luZyBkaWZmZXJlbnQgcmVzdWx0cy4gSWYgd2Ugd2FudGVkIHRvXG4gICAgICAgIC8vIGV4YWN0bHkgbWF0Y2ggVGVYJ3MgY2FsY3VsYXRpb24sIHdlIGNvdWxkIGRvXG4gICAgICAgIC8vICAgTWF0aC5mbG9vcig2NTUzNjAgKiBtYXhEaXN0RnJvbUF4aXMgLyA1MDApICpcbiAgICAgICAgLy8gICAgZGVsaW1pdGVyRmFjdG9yIC8gNjU1MzYwXG4gICAgICAgIC8vIChUbyBzZWUgdGhlIGRpZmZlcmVuY2UsIGNvbXBhcmVcbiAgICAgICAgLy8gICAgeF57eF57XFxsZWZ0KFxccnVsZXswLjFlbX17MC42OGVtfVxccmlnaHQpfX1cbiAgICAgICAgLy8gaW4gVGVYIGFuZCBLYVRlWClcbiAgICAgICAgbWF4RGlzdEZyb21BeGlzIC8gNTAwICogZGVsaW1pdGVyRmFjdG9yLFxuICAgICAgICAyICogbWF4RGlzdEZyb21BeGlzIC0gZGVsaW1pdGVyRXh0ZW5kKTtcblxuICAgIC8vIEZpbmFsbHksIHdlIGRlZmVyIHRvIGBtYWtlQ3VzdG9tU2l6ZWREZWxpbWAgd2l0aCBvdXIgY2FsY3VsYXRlZCB0b3RhbFxuICAgIC8vIGhlaWdodFxuICAgIHJldHVybiBtYWtlQ3VzdG9tU2l6ZWREZWxpbShkZWxpbSwgdG90YWxIZWlnaHQsIHRydWUsIG9wdGlvbnMsIG1vZGUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2l6ZWREZWxpbTogbWFrZVNpemVkRGVsaW0sXG4gICAgY3VzdG9tU2l6ZWREZWxpbTogbWFrZUN1c3RvbVNpemVkRGVsaW0sXG4gICAgbGVmdFJpZ2h0RGVsaW06IG1ha2VMZWZ0UmlnaHREZWxpbVxufTtcbiIsIi8qKlxuICogVGhlc2Ugb2JqZWN0cyBzdG9yZSB0aGUgZGF0YSBhYm91dCB0aGUgRE9NIG5vZGVzIHdlIGNyZWF0ZSwgYXMgd2VsbCBhcyBzb21lXG4gKiBleHRyYSBkYXRhLiBUaGV5IGNhbiB0aGVuIGJlIHRyYW5zZm9ybWVkIGludG8gcmVhbCBET00gbm9kZXMgd2l0aCB0aGVcbiAqIGB0b05vZGVgIGZ1bmN0aW9uIG9yIEhUTUwgbWFya3VwIHVzaW5nIGB0b01hcmt1cGAuIFRoZXkgYXJlIHVzZWZ1bCBmb3IgYm90aFxuICogc3RvcmluZyBleHRyYSBwcm9wZXJ0aWVzIG9uIHRoZSBub2RlcywgYXMgd2VsbCBhcyBwcm92aWRpbmcgYSB3YXkgdG8gZWFzaWx5XG4gKiB3b3JrIHdpdGggdGhlIERPTS5cbiAqXG4gKiBTaW1pbGFyIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIE1hdGhNTCBub2RlcyBleGlzdCBpbiBtYXRoTUxUcmVlLmpzLlxuICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBIVE1MIGNsYXNzTmFtZSBiYXNlZCBvbiBhIGxpc3Qgb2YgY2xhc3Nlcy4gSW4gYWRkaXRpb24gdG8gam9pbmluZ1xuICogd2l0aCBzcGFjZXMsIHdlIGFsc28gcmVtb3ZlIG51bGwgb3IgZW1wdHkgY2xhc3Nlcy5cbiAqL1xudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24oY2xhc3Nlcykge1xuICAgIGNsYXNzZXMgPSBjbGFzc2VzLnNsaWNlKCk7XG4gICAgZm9yICh2YXIgaSA9IGNsYXNzZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKCFjbGFzc2VzW2ldKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xufTtcblxuLyoqXG4gKiBUaGlzIG5vZGUgcmVwcmVzZW50cyBhIHNwYW4gbm9kZSwgd2l0aCBhIGNsYXNzTmFtZSwgYSBsaXN0IG9mIGNoaWxkcmVuLCBhbmRcbiAqIGFuIGlubGluZSBzdHlsZS4gSXQgYWxzbyBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBpdHMgaGVpZ2h0LCBkZXB0aCwgYW5kXG4gKiBtYXhGb250U2l6ZS5cbiAqL1xuZnVuY3Rpb24gc3BhbihjbGFzc2VzLCBjaGlsZHJlbiwgaGVpZ2h0LCBkZXB0aCwgbWF4Rm9udFNpemUsIHN0eWxlKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcyB8fCBbXTtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW107XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGggfHwgMDtcbiAgICB0aGlzLm1heEZvbnRTaXplID0gbWF4Rm9udFNpemUgfHwgMDtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGUgfHwge307XG4gICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG59XG5cbi8qKlxuICogU2V0cyBhbiBhcmJpdHJhcnkgYXR0cmlidXRlIG9uIHRoZSBzcGFuLiBXYXJuaW5nOiB1c2UgdGhpcyB3aXNlbHkuIE5vdCBhbGxcbiAqIGJyb3dzZXJzIHN1cHBvcnQgYXR0cmlidXRlcyB0aGUgc2FtZSwgYW5kIGhhdmluZyB0b28gbWFueSBjdXN0b20gYXR0cmlidXRlc1xuICogaXMgcHJvYmFibHkgYmFkLlxuICovXG5zcGFuLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgc3BhbiBpbnRvIGFuIEhUTUwgbm9kZVxuICovXG5zcGFuLnByb3RvdHlwZS50b05vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgLy8gQXBwbHkgdGhlIGNsYXNzXG4gICAgc3Bhbi5jbGFzc05hbWUgPSBjcmVhdGVDbGFzcyh0aGlzLmNsYXNzZXMpO1xuXG4gICAgLy8gQXBwbHkgaW5saW5lIHN0eWxlc1xuICAgIGZvciAodmFyIHN0eWxlIGluIHRoaXMuc3R5bGUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnN0eWxlLCBzdHlsZSkpIHtcbiAgICAgICAgICAgIHNwYW4uc3R5bGVbc3R5bGVdID0gdGhpcy5zdHlsZVtzdHlsZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgYXR0ciBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHIpKSB7XG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShhdHRyLCB0aGlzLmF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIHRoZSBjaGlsZHJlbiwgYWxzbyBhcyBIVE1MIG5vZGVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHJlbltpXS50b05vZGUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYW47XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdGhlIHNwYW4gaW50byBhbiBIVE1MIG1hcmt1cCBzdHJpbmdcbiAqL1xuc3Bhbi5wcm90b3R5cGUudG9NYXJrdXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbWFya3VwID0gXCI8c3BhblwiO1xuXG4gICAgLy8gQWRkIHRoZSBjbGFzc1xuICAgIGlmICh0aGlzLmNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIG1hcmt1cCArPSBcIiBjbGFzcz1cXFwiXCI7XG4gICAgICAgIG1hcmt1cCArPSB1dGlscy5lc2NhcGUoY3JlYXRlQ2xhc3ModGhpcy5jbGFzc2VzKSk7XG4gICAgICAgIG1hcmt1cCArPSBcIlxcXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gXCJcIjtcblxuICAgIC8vIEFkZCB0aGUgc3R5bGVzLCBhZnRlciBoeXBoZW5hdGlvblxuICAgIGZvciAodmFyIHN0eWxlIGluIHRoaXMuc3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgICAgICBzdHlsZXMgKz0gdXRpbHMuaHlwaGVuYXRlKHN0eWxlKSArIFwiOlwiICsgdGhpcy5zdHlsZVtzdHlsZV0gKyBcIjtcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHlsZXMpIHtcbiAgICAgICAgbWFya3VwICs9IFwiIHN0eWxlPVxcXCJcIiArIHV0aWxzLmVzY2FwZShzdHlsZXMpICsgXCJcXFwiXCI7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgYXR0ciBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmF0dHJpYnV0ZXMsIGF0dHIpKSB7XG4gICAgICAgICAgICBtYXJrdXAgKz0gXCIgXCIgKyBhdHRyICsgXCI9XFxcIlwiO1xuICAgICAgICAgICAgbWFya3VwICs9IHV0aWxzLmVzY2FwZSh0aGlzLmF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICAgICAgbWFya3VwICs9IFwiXFxcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya3VwICs9IFwiPlwiO1xuXG4gICAgLy8gQWRkIHRoZSBtYXJrdXAgb2YgdGhlIGNoaWxkcmVuLCBhbHNvIGFzIG1hcmt1cFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXJrdXAgKz0gdGhpcy5jaGlsZHJlbltpXS50b01hcmt1cCgpO1xuICAgIH1cblxuICAgIG1hcmt1cCArPSBcIjwvc3Bhbj5cIjtcblxuICAgIHJldHVybiBtYXJrdXA7XG59O1xuXG4vKipcbiAqIFRoaXMgbm9kZSByZXByZXNlbnRzIGEgZG9jdW1lbnQgZnJhZ21lbnQsIHdoaWNoIGNvbnRhaW5zIGVsZW1lbnRzLCBidXQgd2hlblxuICogcGxhY2VkIGludG8gdGhlIERPTSBkb2Vzbid0IGhhdmUgYW55IHJlcHJlc2VudGF0aW9uIGl0c2VsZi4gVGh1cywgaXQgb25seVxuICogY29udGFpbnMgY2hpbGRyZW4gYW5kIGRvZXNuJ3QgaGF2ZSBhbnkgSFRNTCBwcm9wZXJ0aWVzLiBJdCBhbHNvIGtlZXBzIHRyYWNrXG4gKiBvZiBhIGhlaWdodCwgZGVwdGgsIGFuZCBtYXhGb250U2l6ZS5cbiAqL1xuZnVuY3Rpb24gZG9jdW1lbnRGcmFnbWVudChjaGlsZHJlbiwgaGVpZ2h0LCBkZXB0aCwgbWF4Rm9udFNpemUpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW107XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGggfHwgMDtcbiAgICB0aGlzLm1heEZvbnRTaXplID0gbWF4Rm9udFNpemUgfHwgMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBmcmFnbWVudCBpbnRvIGEgbm9kZVxuICovXG5kb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS50b05vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBDcmVhdGUgYSBmcmFnbWVudFxuICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBjaGlsZHJlblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5baV0udG9Ob2RlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFnO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBmcmFnbWVudCBpbnRvIEhUTUwgbWFya3VwXG4gKi9cbmRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnRvTWFya3VwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1hcmt1cCA9IFwiXCI7XG5cbiAgICAvLyBTaW1wbHkgY29uY2F0ZW5hdGUgdGhlIG1hcmt1cCBmb3IgdGhlIGNoaWxkcmVuIHRvZ2V0aGVyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcmt1cCArPSB0aGlzLmNoaWxkcmVuW2ldLnRvTWFya3VwKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmt1cDtcbn07XG5cbi8qKlxuICogQSBzeW1ib2wgbm9kZSBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBhIHNpbmdsZSBzeW1ib2wuIEl0IGVpdGhlciByZW5kZXJzXG4gKiB0byBhIHNpbmdsZSB0ZXh0IG5vZGUsIG9yIGEgc3BhbiB3aXRoIGEgc2luZ2xlIHRleHQgbm9kZSBpbiBpdCwgZGVwZW5kaW5nIG9uXG4gKiB3aGV0aGVyIGl0IGhhcyBDU1MgY2xhc3Nlcywgc3R5bGVzLCBvciBuZWVkcyBpdGFsaWMgY29ycmVjdGlvbi5cbiAqL1xuZnVuY3Rpb24gc3ltYm9sTm9kZSh2YWx1ZSwgaGVpZ2h0LCBkZXB0aCwgaXRhbGljLCBza2V3LCBjbGFzc2VzLCBzdHlsZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCBcIlwiO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoIHx8IDA7XG4gICAgdGhpcy5pdGFsaWMgPSBpdGFsaWMgfHwgMDtcbiAgICB0aGlzLnNrZXcgPSBza2V3IHx8IDA7XG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcyB8fCBbXTtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGUgfHwge307XG4gICAgdGhpcy5tYXhGb250U2l6ZSA9IDA7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRleHQgbm9kZSBvciBzcGFuIGZyb20gYSBzeW1ib2wgbm9kZS4gTm90ZSB0aGF0IGEgc3BhbiBpcyBvbmx5XG4gKiBjcmVhdGVkIGlmIGl0IGlzIG5lZWRlZC5cbiAqL1xuc3ltYm9sTm9kZS5wcm90b3R5cGUudG9Ob2RlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnZhbHVlKTtcbiAgICB2YXIgc3BhbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pdGFsaWMgPiAwKSB7XG4gICAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5tYXJnaW5SaWdodCA9IHRoaXMuaXRhbGljICsgXCJlbVwiO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBzcGFuID0gc3BhbiB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBjcmVhdGVDbGFzcyh0aGlzLmNsYXNzZXMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIHN0eWxlIGluIHRoaXMuc3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XG4gICAgICAgICAgICBzcGFuID0gc3BhbiB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW4uc3R5bGVbc3R5bGVdID0gdGhpcy5zdHlsZVtzdHlsZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gc3BhbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciBhIHN5bWJvbCBub2RlLlxuICovXG5zeW1ib2xOb2RlLnByb3RvdHlwZS50b01hcmt1cCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE8oYWxwZXJ0KTogTW9yZSBkdXBsaWNhdGlvbiB0aGFuIEknZCBsaWtlIGZyb21cbiAgICAvLyBzcGFuLnByb3RvdHlwZS50b01hcmt1cCBhbmQgc3ltYm9sTm9kZS5wcm90b3R5cGUudG9Ob2RlLi4uXG4gICAgdmFyIG5lZWRzU3BhbiA9IGZhbHNlO1xuXG4gICAgdmFyIG1hcmt1cCA9IFwiPHNwYW5cIjtcblxuICAgIGlmICh0aGlzLmNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIG5lZWRzU3BhbiA9IHRydWU7XG4gICAgICAgIG1hcmt1cCArPSBcIiBjbGFzcz1cXFwiXCI7XG4gICAgICAgIG1hcmt1cCArPSB1dGlscy5lc2NhcGUoY3JlYXRlQ2xhc3ModGhpcy5jbGFzc2VzKSk7XG4gICAgICAgIG1hcmt1cCArPSBcIlxcXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gXCJcIjtcblxuICAgIGlmICh0aGlzLml0YWxpYyA+IDApIHtcbiAgICAgICAgc3R5bGVzICs9IFwibWFyZ2luLXJpZ2h0OlwiICsgdGhpcy5pdGFsaWMgKyBcImVtO1wiO1xuICAgIH1cbiAgICBmb3IgKHZhciBzdHlsZSBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICAgICAgc3R5bGVzICs9IHV0aWxzLmh5cGhlbmF0ZShzdHlsZSkgKyBcIjpcIiArIHRoaXMuc3R5bGVbc3R5bGVdICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICAgIG5lZWRzU3BhbiA9IHRydWU7XG4gICAgICAgIG1hcmt1cCArPSBcIiBzdHlsZT1cXFwiXCIgKyB1dGlscy5lc2NhcGUoc3R5bGVzKSArIFwiXFxcIlwiO1xuICAgIH1cblxuICAgIHZhciBlc2NhcGVkID0gdXRpbHMuZXNjYXBlKHRoaXMudmFsdWUpO1xuICAgIGlmIChuZWVkc1NwYW4pIHtcbiAgICAgICAgbWFya3VwICs9IFwiPlwiO1xuICAgICAgICBtYXJrdXAgKz0gZXNjYXBlZDtcbiAgICAgICAgbWFya3VwICs9IFwiPC9zcGFuPlwiO1xuICAgICAgICByZXR1cm4gbWFya3VwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlc2NhcGVkO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNwYW46IHNwYW4sXG4gICAgZG9jdW1lbnRGcmFnbWVudDogZG9jdW1lbnRGcmFnbWVudCxcbiAgICBzeW1ib2xOb2RlOiBzeW1ib2xOb2RlXG59O1xuIiwidmFyIHBhcnNlRGF0YSA9IHJlcXVpcmUoXCIuL3BhcnNlRGF0YVwiKTtcbnZhciBQYXJzZUVycm9yID0gcmVxdWlyZShcIi4vUGFyc2VFcnJvclwiKTtcblxudmFyIFBhcnNlTm9kZSA9IHBhcnNlRGF0YS5QYXJzZU5vZGU7XG52YXIgUGFyc2VSZXN1bHQgPSBwYXJzZURhdGEuUGFyc2VSZXN1bHQ7XG5cbi8qKlxuICogUGFyc2UgdGhlIGJvZHkgb2YgdGhlIGVudmlyb25tZW50LCB3aXRoIHJvd3MgZGVsaW1pdGVkIGJ5IFxcXFwgYW5kXG4gKiBjb2x1bW5zIGRlbGltaXRlZCBieSAmLCBhbmQgY3JlYXRlIGEgbmVzdGVkIGxpc3QgaW4gcm93LW1ham9yIG9yZGVyXG4gKiB3aXRoIG9uZSBncm91cCBwZXIgY2VsbC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VBcnJheShwYXJzZXIsIHBvcywgbW9kZSwgcmVzdWx0KSB7XG4gICAgdmFyIHJvdyA9IFtdLCBib2R5ID0gW3Jvd10sIHJvd0dhcHMgPSBbXTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgY2VsbCA9IHBhcnNlci5wYXJzZUV4cHJlc3Npb24ocG9zLCBtb2RlLCBmYWxzZSwgbnVsbCk7XG4gICAgICAgIHJvdy5wdXNoKG5ldyBQYXJzZU5vZGUoXCJvcmRncm91cFwiLCBjZWxsLnJlc3VsdCwgbW9kZSkpO1xuICAgICAgICBwb3MgPSBjZWxsLnBvc2l0aW9uO1xuICAgICAgICB2YXIgbmV4dCA9IGNlbGwucGVlay50ZXh0O1xuICAgICAgICBpZiAobmV4dCA9PT0gXCImXCIpIHtcbiAgICAgICAgICAgIHBvcyA9IGNlbGwucGVlay5wb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0ID09PSBcIlxcXFxlbmRcIikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dCA9PT0gXCJcXFxcXFxcXFwiIHx8IG5leHQgPT09IFwiXFxcXGNyXCIpIHtcbiAgICAgICAgICAgIHZhciBjciA9IHBhcnNlci5wYXJzZUZ1bmN0aW9uKHBvcywgbW9kZSk7XG4gICAgICAgICAgICByb3dHYXBzLnB1c2goY3IucmVzdWx0LnZhbHVlLnNpemUpO1xuICAgICAgICAgICAgcG9zID0gY3IucG9zaXRpb247XG4gICAgICAgICAgICByb3cgPSBbXTtcbiAgICAgICAgICAgIGJvZHkucHVzaChyb3cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXCJFeHBlY3RlZCAmIG9yIFxcXFxcXFxcIG9yIFxcXFxlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5sZXhlciwgY2VsbC5wZWVrLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuYm9keSA9IGJvZHk7XG4gICAgcmVzdWx0LnJvd0dhcHMgPSByb3dHYXBzO1xuICAgIHJldHVybiBuZXcgUGFyc2VSZXN1bHQobmV3IFBhcnNlTm9kZShyZXN1bHQudHlwZSwgcmVzdWx0LCBtb2RlKSwgcG9zKTtcbn1cblxuLypcbiAqIEFuIGVudmlyb25tZW50IGRlZmluaXRpb24gaXMgdmVyeSBzaW1pbGFyIHRvIGEgZnVuY3Rpb24gZGVmaW5pdGlvbi5cbiAqIEVhY2ggZWxlbWVudCBvZiB0aGUgZm9sbG93aW5nIGFycmF5IG1heSBjb250YWluXG4gKiAgLSBuYW1lczogVGhlIG5hbWVzIGFzc29jaWF0ZWQgd2l0aCBhIGZ1bmN0aW9uLiBUaGlzIGNhbiBiZSB1c2VkIHRvXG4gKiAgICAgICAgICAgc2hhcmUgb25lIGltcGxlbWVudGF0aW9uIGJldHdlZW4gc2V2ZXJhbCBzaW1pbGFyIGVudmlyb25tZW50cy5cbiAqICAtIG51bUFyZ3M6IFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIGFmdGVyIHRoZSBcXGJlZ2lue25hbWV9IGZ1bmN0aW9uLlxuICogIC0gYXJnVHlwZXM6IChvcHRpb25hbCkgSnVzdCBsaWtlIGZvciBhIGZ1bmN0aW9uXG4gKiAgLSBhbGxvd2VkSW5UZXh0OiAob3B0aW9uYWwpIFdoZXRoZXIgb3Igbm90IHRoZSBlbnZpcm9ubWVudCBpcyBhbGxvd2VkIGluc2lkZVxuICogICAgICAgICAgICAgICAgICAgdGV4dCBtb2RlIChkZWZhdWx0IGZhbHNlKSAobm90IGVuZm9yY2VkIHlldClcbiAqICAtIG51bU9wdGlvbmFsQXJnczogKG9wdGlvbmFsKSBKdXN0IGxpa2UgZm9yIGEgZnVuY3Rpb25cbiAqICAtIGhhbmRsZXI6IFRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byBoYW5kbGUgdGhpcyBlbnZpcm9ubWVudC5cbiAqICAgICAgICAgICAgIEl0IHdpbGwgcmVjZWl2ZSB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czpcbiAqICAgICAgICAgICAgIC0gcG9zOiB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcGFyc2VyLlxuICogICAgICAgICAgICAgLSBtb2RlOiB0aGUgY3VycmVudCBwYXJzaW5nIG1vZGUuXG4gKiAgICAgICAgICAgICAtIGVudk5hbWU6IHRoZSBuYW1lIG9mIHRoZSBlbnZpcm9ubWVudCwgb25lIG9mIHRoZSBsaXN0ZWQgbmFtZXMuXG4gKiAgICAgICAgICAgICAtIFthcmdzXTogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gXFxiZWdpbi5cbiAqICAgICAgICAgICAgIC0gcG9zaXRpb25zOiB0aGUgcG9zaXRpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGVzZSBhcmd1bWVudHMuXG4gKi9cblxudmFyIGVudmlyb25tZW50RGVmaW5pdGlvbnMgPSBbXG5cbiAgICAvLyBBcnJheXMgYXJlIHBhcnQgb2YgTGFUZVgsIGRlZmluZWQgaW4gbHR0YWIuZHR4IHNvIGl0cyBkb2N1bWVudGF0aW9uXG4gICAgLy8gaXMgcGFydCBvZiB0aGUgc291cmNlMmUucGRmIGZpbGUgb2YgTGFUZVgyZSBzb3VyY2UgZG9jdW1lbnRhdGlvbi5cbiAgICB7XG4gICAgICAgIG5hbWVzOiBbXCJhcnJheVwiXSxcbiAgICAgICAgbnVtQXJnczogMSxcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24ocG9zLCBtb2RlLCBlbnZOYW1lLCBjb2xhbGlnbiwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcGFyc2VyID0gdGhpcztcbiAgICAgICAgICAgIC8vIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGFsaWdubWVudCwgbm8gc2VwYXJhdG9ycyBsaWtlIHwgeWV0LlxuICAgICAgICAgICAgY29sYWxpZ24gPSBjb2xhbGlnbi52YWx1ZS5tYXAgPyBjb2xhbGlnbi52YWx1ZSA6IFtjb2xhbGlnbl07XG4gICAgICAgICAgICBjb2xhbGlnbiA9IGNvbGFsaWduLm1hcChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoXCJsY3JcIi5pbmRleE9mKGNhKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgXCJVbmtub3duIGNvbHVtbiBhbGlnbm1lbnQ6IFwiICsgbm9kZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyLmxleGVyLCBwb3NpdGlvbnNbMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcmVzID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICBjb2xhbGlnbjogY29sYWxpZ24sXG4gICAgICAgICAgICAgICAgaHNraXBCZWZvcmVBbmRBZnRlcjogdHJ1ZSAvLyBcXEBwcmVhbWJsZSBpbiBsdHRhYi5kdHhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXMgPSBwYXJzZUFycmF5KHBhcnNlciwgcG9zLCBtb2RlLCByZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBUaGUgbWF0cml4IGVudmlyb25tZW50cyBvZiBhbXNtYXRoIGJ1aWxkcyBvbiB0aGUgYXJyYXkgZW52aXJvbm1lbnRcbiAgICAvLyBvZiBMYVRlWCwgd2hpY2ggaXMgZGlzY3Vzc2VkIGFib3ZlLlxuICAgIHtcbiAgICAgICAgbmFtZXM6IFtcIm1hdHJpeFwiLCBcInBtYXRyaXhcIiwgXCJibWF0cml4XCIsIFwidm1hdHJpeFwiLCBcIlZtYXRyaXhcIl0sXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHBvcywgbW9kZSwgZW52TmFtZSkge1xuICAgICAgICAgICAgdmFyIGRlbGltaXRlcnMgPSB7XG4gICAgICAgICAgICAgICAgXCJtYXRyaXhcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInBtYXRyaXhcIjogW1wiKFwiLCBcIilcIl0sXG4gICAgICAgICAgICAgICAgXCJibWF0cml4XCI6IFtcIltcIiwgXCJdXCJdLFxuICAgICAgICAgICAgICAgIFwidm1hdHJpeFwiOiBbXCJ8XCIsIFwifFwiXSxcbiAgICAgICAgICAgICAgICBcIlZtYXRyaXhcIjogW1wiXFxcXFZlcnRcIiwgXCJcXFxcVmVydFwiXVxuICAgICAgICAgICAgfVtlbnZOYW1lXTtcbiAgICAgICAgICAgIHZhciByZXMgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgIGhza2lwQmVmb3JlQW5kQWZ0ZXI6IGZhbHNlIC8vIFxcaHNraXAgLVxcYXJyYXljb2xzZXAgaW4gYW1zbWF0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcyA9IHBhcnNlQXJyYXkodGhpcywgcG9zLCBtb2RlLCByZXMpO1xuICAgICAgICAgICAgaWYgKGRlbGltaXRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXMucmVzdWx0ID0gbmV3IFBhcnNlTm9kZShcImxlZnRyaWdodFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFtyZXMucmVzdWx0XSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGVsaW1pdGVyc1swXSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGRlbGltaXRlcnNbMV1cbiAgICAgICAgICAgICAgICB9LCBtb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIC8vIG5lc3RlZCBmdW5jdGlvbiBzbyB3ZSBkb24ndCBsZWFrIGkgYW5kIGogaW50byB0aGUgbW9kdWxlIHNjb3BlXG4gICAgdmFyIGV4cG9ydHMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudmlyb25tZW50RGVmaW5pdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGRlZiA9IGVudmlyb25tZW50RGVmaW5pdGlvbnNbaV07XG4gICAgICAgIGRlZi5ncmVlZGluZXNzID0gMTtcbiAgICAgICAgZGVmLmFsbG93ZWRJblRleHQgPSAhIWRlZi5hbGxvd2VkSW5UZXh0O1xuICAgICAgICBkZWYubnVtQXJncyA9IGRlZi5udW1BcmdzIHx8IDA7XG4gICAgICAgIGRlZi5udW1PcHRpb25hbEFyZ3MgPSBkZWYubnVtT3B0aW9uYWxBcmdzIHx8IDA7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGVmLm5hbWVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBleHBvcnRzW2RlZi5uYW1lc1tqXV0gPSBkZWY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV4cG9ydHM7XG59KSgpO1xuIiwiLyoganNoaW50IHVudXNlZDpmYWxzZSAqL1xuXG52YXIgU3R5bGUgPSByZXF1aXJlKFwiLi9TdHlsZVwiKTtcblxuLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgbWV0cmljcyByZWdhcmRpbmcgZm9udHMgYW5kIGluZGl2aWR1YWwgc3ltYm9scy4gVGhlIHNpZ21hXG4gKiBhbmQgeGkgdmFyaWFibGVzLCBhcyB3ZWxsIGFzIHRoZSBtZXRyaWNNYXAgbWFwIGNvbnRhaW4gZGF0YSBleHRyYWN0ZWQgZnJvbVxuICogVGVYLCBUZVggZm9udCBtZXRyaWNzLCBhbmQgdGhlIFRURiBmaWxlcy4gVGhlc2UgZGF0YSBhcmUgdGhlbiBleHBvc2VkIHZpYSB0aGVcbiAqIGBtZXRyaWNzYCB2YXJpYWJsZSBhbmQgdGhlIGdldENoYXJhY3Rlck1ldHJpY3MgZnVuY3Rpb24uXG4gKi9cblxuLy8gVGhlc2UgZm9udCBtZXRyaWNzIGFyZSBleHRyYWN0ZWQgZnJvbSBUZVggYnkgdXNpbmdcbi8vIFxcZm9udFxcYT1jbW1pMTBcbi8vIFxcc2hvd3RoZVxcZm9udGRpbWVuWFxcYVxuLy8gd2hlcmUgWCBpcyB0aGUgY29ycmVzcG9uZGluZyB2YXJpYWJsZSBudW1iZXIuIFRoZXNlIGNvcnJlc3BvbmQgdG8gdGhlIGZvbnRcbi8vIHBhcmFtZXRlcnMgb2YgdGhlIHN5bWJvbCBmb250cy4gSW4gVGVYLCB0aGVyZSBhcmUgYWN0dWFsbHkgdGhyZWUgc2V0cyBvZlxuLy8gZGltZW5zaW9ucywgb25lIGZvciBlYWNoIG9mIHRleHRzdHlsZSwgc2NyaXB0c3R5bGUsIGFuZCBzY3JpcHRzY3JpcHRzdHlsZSxcbi8vIGJ1dCB3ZSBvbmx5IHVzZSB0aGUgdGV4dHN0eWxlIG9uZXMsIGFuZCBzY2FsZSBjZXJ0YWluIGRpbWVuc2lvbnMgYWNjb3JkaW5nbHkuXG4vLyBTZWUgdGhlIFRlWGJvb2ssIHBhZ2UgNDQxLlxudmFyIHNpZ21hMSA9IDAuMDI1O1xudmFyIHNpZ21hMiA9IDA7XG52YXIgc2lnbWEzID0gMDtcbnZhciBzaWdtYTQgPSAwO1xudmFyIHNpZ21hNSA9IDAuNDMxO1xudmFyIHNpZ21hNiA9IDE7XG52YXIgc2lnbWE3ID0gMDtcbnZhciBzaWdtYTggPSAwLjY3NztcbnZhciBzaWdtYTkgPSAwLjM5NDtcbnZhciBzaWdtYTEwID0gMC40NDQ7XG52YXIgc2lnbWExMSA9IDAuNjg2O1xudmFyIHNpZ21hMTIgPSAwLjM0NTtcbnZhciBzaWdtYTEzID0gMC40MTM7XG52YXIgc2lnbWExNCA9IDAuMzYzO1xudmFyIHNpZ21hMTUgPSAwLjI4OTtcbnZhciBzaWdtYTE2ID0gMC4xNTA7XG52YXIgc2lnbWExNyA9IDAuMjQ3O1xudmFyIHNpZ21hMTggPSAwLjM4NjtcbnZhciBzaWdtYTE5ID0gMC4wNTA7XG52YXIgc2lnbWEyMCA9IDIuMzkwO1xudmFyIHNpZ21hMjEgPSAxLjAxO1xudmFyIHNpZ21hMjFTY3JpcHQgPSAwLjgxO1xudmFyIHNpZ21hMjFTY3JpcHRTY3JpcHQgPSAwLjcxO1xudmFyIHNpZ21hMjIgPSAwLjI1MDtcblxuLy8gVGhlc2UgZm9udCBtZXRyaWNzIGFyZSBleHRyYWN0ZWQgZnJvbSBUZVggYnkgdXNpbmdcbi8vIFxcZm9udFxcYT1jbWV4MTBcbi8vIFxcc2hvd3RoZVxcZm9udGRpbWVuWFxcYVxuLy8gd2hlcmUgWCBpcyB0aGUgY29ycmVzcG9uZGluZyB2YXJpYWJsZSBudW1iZXIuIFRoZXNlIGNvcnJlc3BvbmQgdG8gdGhlIGZvbnRcbi8vIHBhcmFtZXRlcnMgb2YgdGhlIGV4dGVuc2lvbiBmb250cyAoZmFtaWx5IDMpLiBTZWUgdGhlIFRlWGJvb2ssIHBhZ2UgNDQxLlxudmFyIHhpMSA9IDA7XG52YXIgeGkyID0gMDtcbnZhciB4aTMgPSAwO1xudmFyIHhpNCA9IDA7XG52YXIgeGk1ID0gMC40MzE7XG52YXIgeGk2ID0gMTtcbnZhciB4aTcgPSAwO1xudmFyIHhpOCA9IDAuMDQ7XG52YXIgeGk5ID0gMC4xMTE7XG52YXIgeGkxMCA9IDAuMTY2O1xudmFyIHhpMTEgPSAwLjI7XG52YXIgeGkxMiA9IDAuNjtcbnZhciB4aTEzID0gMC4xO1xuXG4vLyBUaGlzIHZhbHVlIGRldGVybWluZXMgaG93IGxhcmdlIGEgcHQgaXMsIGZvciBtZXRyaWNzIHdoaWNoIGFyZSBkZWZpbmVkIGluXG4vLyB0ZXJtcyBvZiBwdHMuXG4vLyBUaGlzIHZhbHVlIGlzIGFsc28gdXNlZCBpbiBrYXRleC5sZXNzOyBpZiB5b3UgY2hhbmdlIGl0IG1ha2Ugc3VyZSB0aGUgdmFsdWVzXG4vLyBtYXRjaC5cbnZhciBwdFBlckVtID0gMTAuMDtcblxuLyoqXG4gKiBUaGlzIGlzIGp1c3QgYSBtYXBwaW5nIGZyb20gY29tbW9uIG5hbWVzIHRvIHJlYWwgbWV0cmljc1xuICovXG52YXIgbWV0cmljcyA9IHtcbiAgICB4SGVpZ2h0OiBzaWdtYTUsXG4gICAgcXVhZDogc2lnbWE2LFxuICAgIG51bTE6IHNpZ21hOCxcbiAgICBudW0yOiBzaWdtYTksXG4gICAgbnVtMzogc2lnbWExMCxcbiAgICBkZW5vbTE6IHNpZ21hMTEsXG4gICAgZGVub20yOiBzaWdtYTEyLFxuICAgIHN1cDE6IHNpZ21hMTMsXG4gICAgc3VwMjogc2lnbWExNCxcbiAgICBzdXAzOiBzaWdtYTE1LFxuICAgIHN1YjE6IHNpZ21hMTYsXG4gICAgc3ViMjogc2lnbWExNyxcbiAgICBzdXBEcm9wOiBzaWdtYTE4LFxuICAgIHN1YkRyb3A6IHNpZ21hMTksXG4gICAgYXhpc0hlaWdodDogc2lnbWEyMixcbiAgICBkZWZhdWx0UnVsZVRoaWNrbmVzczogeGk4LFxuICAgIGJpZ09wU3BhY2luZzE6IHhpOSxcbiAgICBiaWdPcFNwYWNpbmcyOiB4aTEwLFxuICAgIGJpZ09wU3BhY2luZzM6IHhpMTEsXG4gICAgYmlnT3BTcGFjaW5nNDogeGkxMixcbiAgICBiaWdPcFNwYWNpbmc1OiB4aTEzLFxuICAgIHB0UGVyRW06IHB0UGVyRW0sXG4gICAgZW1QZXJFeDogc2lnbWE1IC8gc2lnbWE2LFxuXG4gICAgLy8gVE9ETyhhbHBlcnQpOiBNaXNzaW5nIHBhcmFsbGVsIHN0cnVjdHVyZSBoZXJlLiBXZSBzaG91bGQgcHJvYmFibHkgYWRkXG4gICAgLy8gc3R5bGUtc3BlY2lmaWMgbWV0cmljcyBmb3IgYWxsIG9mIHRoZXNlLlxuICAgIGRlbGltMTogc2lnbWEyMCxcbiAgICBnZXREZWxpbTI6IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIGlmIChzdHlsZS5zaXplID09PSBTdHlsZS5URVhULnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBzaWdtYTIxO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlLnNpemUgPT09IFN0eWxlLlNDUklQVC5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gc2lnbWEyMVNjcmlwdDtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZS5zaXplID09PSBTdHlsZS5TQ1JJUFRTQ1JJUFQuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNpZ21hMjFTY3JpcHRTY3JpcHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBzdHlsZSBzaXplOiBcIiArIHN0eWxlLnNpemUpO1xuICAgIH1cbn07XG5cbi8vIFRoaXMgbWFwIGNvbnRhaW5zIGEgbWFwcGluZyBmcm9tIGZvbnQgbmFtZSBhbmQgY2hhcmFjdGVyIGNvZGUgdG8gY2hhcmFjdGVyXG4vLyBtZXRyaWNzLCBpbmNsdWRpbmcgaGVpZ2h0LCBkZXB0aCwgaXRhbGljIGNvcnJlY3Rpb24sIGFuZCBza2V3IChrZXJuIGZyb20gdGhlXG4vLyBjaGFyYWN0ZXIgdG8gdGhlIGNvcnJlc3BvbmRpbmcgXFxza2V3Y2hhcilcbi8vIFRoaXMgbWFwIGlzIGdlbmVyYXRlZCB2aWEgYG1ha2UgbWV0cmljc2AuIEl0IHNob3VsZCBub3QgYmUgY2hhbmdlZCBtYW51YWxseS5cbnZhciBtZXRyaWNNYXAgPSB7XCJBTVMtUmVndWxhclwiOntcIjg2NzJcIjp7XCJkZXB0aFwiOi0wLjA2NCxcImhlaWdodFwiOjAuNDM3LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg2NzRcIjp7XCJkZXB0aFwiOi0wLjA2NCxcImhlaWdodFwiOjAuNDM3LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjEwMDAzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDAxNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAwOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDQwMjgsXCJza2V3XCI6MC4wfSxcIjEwN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3MzFcIjp7XCJkZXB0aFwiOjAuMTExMTEsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDg0NlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNzU1ODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODc3XCI6e1wiZGVwdGhcIjowLjEzNjY3LFwiaGVpZ2h0XCI6MC42MzY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4NzhcIjp7XCJkZXB0aFwiOjAuMTM2NjcsXCJoZWlnaHRcIjowLjYzNjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDg4NVwiOntcImRlcHRoXCI6MC4yNTU4MyxcImhlaWdodFwiOjAuNzU1ODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODg2XCI6e1wiZGVwdGhcIjowLjI1NTgzLFwiaGVpZ2h0XCI6MC43NTU4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4ODdcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDg4OFwiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODg5XCI6e1wiZGVwdGhcIjowLjI2MTY3LFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4OTBcIjp7XCJkZXB0aFwiOjAuMjYxNjcsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDg5MVwiOntcImRlcHRoXCI6MC40ODI1NixcImhlaWdodFwiOjAuOTgyNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODkyXCI6e1wiZGVwdGhcIjowLjQ4MjU2LFwiaGVpZ2h0XCI6MC45ODI1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5MDFcIjp7XCJkZXB0aFwiOjAuMTM2NjcsXCJoZWlnaHRcIjowLjYzNjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkwMlwiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTMzXCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5MzRcIjp7XCJkZXB0aFwiOjAuMjUxNDIsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkzNVwiOntcImRlcHRoXCI6MC4yNjE2NyxcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTM2XCI6e1wiZGVwdGhcIjowLjI2MTY3LFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5MzdcIjp7XCJkZXB0aFwiOjAuMjYxNjcsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkzOFwiOntcImRlcHRoXCI6MC4yNjE2NyxcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTQ5XCI6e1wiZGVwdGhcIjowLjI1NTgzLFwiaGVpZ2h0XCI6MC43NTU4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5NTBcIjp7XCJkZXB0aFwiOjAuMjU1ODMsXCJoZWlnaHRcIjowLjc1NTgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDk1NVwiOntcImRlcHRoXCI6MC4yODQ4MSxcImhlaWdodFwiOjAuNzkzODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTU2XCI6e1wiZGVwdGhcIjowLjI4NDgxLFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY3NSxcIml0YWxpY1wiOjAuMDI1LFwic2tld1wiOjAuMH0sXCIxNzRcIjp7XCJkZXB0aFwiOjAuMTU1NTksXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIyNDBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjI5NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNTBcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM1MVwiOntcImRlcHRoXCI6MC4wODE2NyxcImhlaWdodFwiOjAuNTgxNjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzUyXCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA0MDI4LFwic2tld1wiOjAuMH0sXCI1NzM1NlwiOntcImRlcHRoXCI6MC4yNTE0MixcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzU3XCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNThcIjp7XCJkZXB0aFwiOjAuNDE5NTEsXCJoZWlnaHRcIjowLjkxOTUxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM1OVwiOntcImRlcHRoXCI6MC4zMDI3NCxcImhlaWdodFwiOjAuNzkzODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzYwXCI6e1wiZGVwdGhcIjowLjMwMjc0LFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNjFcIjp7XCJkZXB0aFwiOjAuNDE5NTEsXCJoZWlnaHRcIjowLjkxOTUxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM2NlwiOntcImRlcHRoXCI6MC4yNTE0MixcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzY3XCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNjhcIjp7XCJkZXB0aFwiOjAuMjUxNDIsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM2OVwiOntcImRlcHRoXCI6MC4yNTE0MixcImhlaWdodFwiOjAuNzU3MjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzcwXCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTczNzFcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjgyNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuOSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzRcIjp7XCJkZXB0aFwiOjAuMTY2NjcsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuODI1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuOSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc5XCI6e1wiZGVwdGhcIjowLjE2NjY3LFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgxXCI6e1wiZGVwdGhcIjowLjE2NjY3LFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyNDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODQ2M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODQ4N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODQ5OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1MDJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1MDNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1MDRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1MTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTJcIjp7XCJkZXB0aFwiOi0wLjAzNTk4LFwiaGVpZ2h0XCI6MC40NjQwMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5NFwiOntcImRlcHRoXCI6LTAuMDM1OTgsXCJoZWlnaHRcIjowLjQ2NDAyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYwMlwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjAzXCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MDZcIjp7XCJkZXB0aFwiOjAuMDEzNTQsXCJoZWlnaHRcIjowLjUyMjM5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjA4XCI6e1wiZGVwdGhcIjowLjAxMzU0LFwiaGVpZ2h0XCI6MC41MjIzOSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYxMFwiOntcImRlcHRoXCI6MC4wMTM1NCxcImhlaWdodFwiOjAuNTIyMzksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MTFcIjp7XCJkZXB0aFwiOjAuMDEzNTQsXCJoZWlnaHRcIjowLjUyMjM5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjE5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjIxXCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzc3ODgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MjJcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYyNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYyNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYzMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYzMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYzNFwiOntcImRlcHRoXCI6MC4wODE5OCxcImhlaWdodFwiOjAuNTgxOTgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MzVcIjp7XCJkZXB0aFwiOjAuMDgxOTgsXCJoZWlnaHRcIjowLjU4MTk4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjM4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYzOVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NDJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjQzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY0NFwiOntcImRlcHRoXCI6MC4xODA4LFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NDZcIjp7XCJkZXB0aFwiOjAuMTgwOCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjQ3XCI6e1wiZGVwdGhcIjowLjE4MDgsXCJoZWlnaHRcIjowLjY3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY0OFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NDlcIjp7XCJkZXB0aFwiOjAuMTgwOCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjUwXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1MVwiOntcImRlcHRoXCI6MC4wMTM1NCxcImhlaWdodFwiOjAuNTIyMzksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTJcIjp7XCJkZXB0aFwiOjAuMDEzNTQsXCJoZWlnaHRcIjowLjUyMjM5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjUzXCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTRcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1NVwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjY2XCI6e1wiZGVwdGhcIjowLjEzNjY3LFwiaGVpZ2h0XCI6MC42MzY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY2N1wiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NjlcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNzc4OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuODI1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzA4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzA5XCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcxN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyMlwiOntcImRlcHRoXCI6LTAuMDM1OTgsXCJoZWlnaHRcIjowLjQ2NDAyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzI0XCI6e1wiZGVwdGhcIjowLjA4MTk4LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyNlwiOntcImRlcHRoXCI6MC4wODE2NyxcImhlaWdodFwiOjAuNTgxNjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzhcIjp7XCJkZXB0aFwiOjAuMDM1MTcsXCJoZWlnaHRcIjowLjUyMjM5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzM5XCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0MFwiOntcImRlcHRoXCI6MC4yNTE0MixcImhlaWdodFwiOjAuNzQxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDFcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQyXCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NDExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc1NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc1N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc2NFwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzY1XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzc3ODgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NjlcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc3MFwiOntcImRlcHRoXCI6LTAuMDM2MjUsXCJoZWlnaHRcIjowLjQ2Mzc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4Nzc0XCI6e1wiZGVwdGhcIjowLjMwMjc0LFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc3NlwiOntcImRlcHRoXCI6LTAuMDE2ODgsXCJoZWlnaHRcIjowLjQ4MzEyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4Nzc4XCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc4MlwiOntcImRlcHRoXCI6MC4wNjA2MixcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3ODNcIjp7XCJkZXB0aFwiOjAuMDYwNjIsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4Nzg1XCI6e1wiZGVwdGhcIjowLjA4MTk4LFwiaGVpZ2h0XCI6MC41ODE5OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc4NlwiOntcImRlcHRoXCI6MC4wODE5OCxcImhlaWdodFwiOjAuNTgxOTgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3ODdcIjp7XCJkZXB0aFwiOjAuMDgxOTgsXCJoZWlnaHRcIjowLjU4MTk4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzkwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzkxXCI6e1wiZGVwdGhcIjowLjIyOTU4LFwiaGVpZ2h0XCI6MC43Mjk1OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc5NlwiOntcImRlcHRoXCI6MC4wODE5OCxcImhlaWdodFwiOjAuOTE2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODA2XCI6e1wiZGVwdGhcIjowLjI1NTgzLFwiaGVpZ2h0XCI6MC43NTU4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgwN1wiOntcImRlcHRoXCI6MC4yNTU4MyxcImhlaWdodFwiOjAuNzU1ODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MDhcIjp7XCJkZXB0aFwiOjAuMjUxNDIsXCJoZWlnaHRcIjowLjc1NzI2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODA5XCI6e1wiZGVwdGhcIjowLjI1MTQyLFwiaGVpZ2h0XCI6MC43NTcyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgxMlwiOntcImRlcHRoXCI6MC4yNTU4MyxcImhlaWdodFwiOjAuNzU1ODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MTRcIjp7XCJkZXB0aFwiOjAuMjA1NzYsXCJoZWlnaHRcIjowLjcwNTc2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODE1XCI6e1wiZGVwdGhcIjowLjIwNTc2LFwiaGVpZ2h0XCI6MC43MDU3NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgxNlwiOntcImRlcHRoXCI6MC4zMDI3NCxcImhlaWdodFwiOjAuNzkzODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MTdcIjp7XCJkZXB0aFwiOjAuMzAyNzQsXCJoZWlnaHRcIjowLjc5MzgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODE4XCI6e1wiZGVwdGhcIjowLjIyOTU4LFwiaGVpZ2h0XCI6MC43Mjk1OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgxOVwiOntcImRlcHRoXCI6MC4yMjk1OCxcImhlaWdodFwiOjAuNzI5NTgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MjJcIjp7XCJkZXB0aFwiOjAuMTgwOCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODIzXCI6e1wiZGVwdGhcIjowLjE4MDgsXCJoZWlnaHRcIjowLjY3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgyOFwiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MjlcIjp7XCJkZXB0aFwiOjAuMTM2NjcsXCJoZWlnaHRcIjowLjYzNjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODMwXCI6e1wiZGVwdGhcIjowLjIyOTU4LFwiaGVpZ2h0XCI6MC43Mjk1OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgzMVwiOntcImRlcHRoXCI6MC4yMjk1OCxcImhlaWdodFwiOjAuNzI5NTgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MzJcIjp7XCJkZXB0aFwiOjAuMjA1NzYsXCJoZWlnaHRcIjowLjcwNTc2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODMzXCI6e1wiZGVwdGhcIjowLjIwNTc2LFwiaGVpZ2h0XCI6MC43MDU3NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg0MFwiOntcImRlcHRoXCI6MC4zMDI3NCxcImhlaWdodFwiOjAuNzkzODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NDFcIjp7XCJkZXB0aFwiOjAuMzAyNzQsXCJoZWlnaHRcIjowLjc5MzgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODQyXCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg0M1wiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NDdcIjp7XCJkZXB0aFwiOjAuMDM1MTcsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODQ4XCI6e1wiZGVwdGhcIjowLjAzNTE3LFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1OFwiOntcImRlcHRoXCI6MC4wODE5OCxcImhlaWdodFwiOjAuNTgxOTgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTlcIjp7XCJkZXB0aFwiOjAuMDgxOTgsXCJoZWlnaHRcIjowLjU4MTk4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODYxXCI6e1wiZGVwdGhcIjowLjA4MTk4LFwiaGVpZ2h0XCI6MC41ODE5OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg2MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg4ODksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4ODJcIjp7XCJkZXB0aFwiOjAuMDM1MTcsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODgzXCI6e1wiZGVwdGhcIjowLjAzNTE3LFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg4NFwiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4ODVcIjp7XCJkZXB0aFwiOjAuMTM2NjcsXCJoZWlnaHRcIjowLjYzNjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODg4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODkwXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg5MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4OTJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwM1wiOntcImRlcHRoXCI6MC4wODE2NyxcImhlaWdodFwiOjAuNTgxNjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MDVcIjp7XCJkZXB0aFwiOjAuMDgxNjcsXCJoZWlnaHRcIjowLjU4MTY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTA2XCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwOVwiOntcImRlcHRoXCI6LTAuMDM1OTgsXCJoZWlnaHRcIjowLjQ2NDAyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTEyXCI6e1wiZGVwdGhcIjowLjAzNTE3LFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkxM1wiOntcImRlcHRoXCI6MC4wMzUxNyxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MThcIjp7XCJkZXB0aFwiOjAuMDM5MSxcImhlaWdodFwiOjAuNTM5MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkxOVwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTIwXCI6e1wiZGVwdGhcIjowLjAzNTE3LFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkyMVwiOntcImRlcHRoXCI6MC4wMzUxNyxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MjJcIjp7XCJkZXB0aFwiOjAuMzg1NjksXCJoZWlnaHRcIjowLjg4NTY5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTIzXCI6e1wiZGVwdGhcIjowLjM4NTY5LFwiaGVpZ2h0XCI6MC44ODU2OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkyNlwiOntcImRlcHRoXCI6MC4xMzY2NyxcImhlaWdodFwiOjAuNjM2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MjdcIjp7XCJkZXB0aFwiOjAuMTM2NjcsXCJoZWlnaHRcIjowLjYzNjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTI4XCI6e1wiZGVwdGhcIjowLjMwMjc0LFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkyOVwiOntcImRlcHRoXCI6MC4zMDI3NCxcImhlaWdodFwiOjAuNzkzODMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MzRcIjp7XCJkZXB0aFwiOjAuMjMyMjIsXCJoZWlnaHRcIjowLjc0MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTM1XCI6e1wiZGVwdGhcIjowLjIzMjIyLFwiaGVpZ2h0XCI6MC43NDExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkzNlwiOntcImRlcHRoXCI6MC4yMzIyMixcImhlaWdodFwiOjAuNzQxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MzdcIjp7XCJkZXB0aFwiOjAuMjMyMjIsXCJoZWlnaHRcIjowLjc0MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTM4XCI6e1wiZGVwdGhcIjowLjIwNTc2LFwiaGVpZ2h0XCI6MC43MDU3NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkzOVwiOntcImRlcHRoXCI6MC4yMDU3NixcImhlaWdodFwiOjAuNzA1NzYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NDBcIjp7XCJkZXB0aFwiOjAuMzAyNzQsXCJoZWlnaHRcIjowLjc5MzgzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTQxXCI6e1wiZGVwdGhcIjowLjMwMjc0LFwiaGVpZ2h0XCI6MC43OTM4MyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk5NFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5OTVcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTQxNlwiOntcImRlcHRoXCI6MC4xNTU1OSxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk0ODRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk0ODhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjkyMjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk0OTJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuMzc3ODgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk0OTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuMzc3ODgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1ODVcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NTg2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC43NDExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTYzMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2MzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjUwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjUxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU0OTg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjU0XCI6e1wiZGVwdGhcIjowLjAzNTE3LFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY2MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY2MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NDk4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY2NFwiOntcImRlcHRoXCI6MC4wMzUxNyxcImhlaWdodFwiOjAuNTQ5ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NzRcIjp7XCJkZXB0aFwiOjAuMTExMTEsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NzMzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTg5XCI6e1wiZGVwdGhcIjowLjA4MTY3LFwiaGVpZ2h0XCI6MC41ODE2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9fSxcIk1haW4tQm9sZFwiOntcIjEwMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEwOTAzLFwic2tld1wiOjAuMH0sXCIxMDIxNlwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMjE3XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDE1OTcsXCJza2V3XCI6MC4wfSxcIjEwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA4MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5MjdcIjp7XCJkZXB0aFwiOjAuMTk2NjcsXCJoZWlnaHRcIjowLjY5NjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDkyOFwiOntcImRlcHRoXCI6MC4xOTY2NyxcImhlaWdodFwiOjAuNjk2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYzNDkyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDE1OTcsXCJza2V3XCI6MC4wfSxcIjExOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDE1OTcsXCJza2V3XCI6MC4wfSxcIjEyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTIxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDE1OTcsXCJza2V3XCI6MC4wfSxcIjEyMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTIzXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI0XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI1XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI2XCI6e1wiZGVwdGhcIjowLjM1LFwiaGVpZ2h0XCI6MC4zNDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxNzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjE3NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41OTYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxNzdcIjp7XCJkZXB0aFwiOjAuMTMzMzMsXCJoZWlnaHRcIjowLjYzMzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjIxNVwiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjI0N1wiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjMwNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjM0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzNVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjM2XCI6e1wiZGVwdGhcIjowLjA1NTU2LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzdcIjp7XCJkZXB0aFwiOjAuMDU1NTYsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQwXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDFcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDNcIjp7XCJkZXB0aFwiOjAuMTMzMzMsXCJoZWlnaHRcIjowLjYzMzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0NFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuMTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC4xNTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDdcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjUwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjUzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NjdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjBcIjp7XCJkZXB0aFwiOjAuMDg1NTYsXCJoZWlnaHRcIjowLjU4NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2MVwiOntcImRlcHRoXCI6LTAuMTA4ODksXCJoZWlnaHRcIjowLjM5MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2MlwiOntcImRlcHRoXCI6MC4wODU1NixcImhlaWdodFwiOjAuNTg1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjYzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYzMTk0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTk2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzI4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU5NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc4MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42MzE5NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzE5NCxcInNrZXdcIjowLjB9LFwiODIxMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDMxOTQsXCJza2V3XCI6MC4wfSxcIjgyMTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMjFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMjRcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjI1XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODI0XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODI0MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjcyNDQ0LFwiaXRhbGljXCI6MC4xNTQ4NixcInNrZXdcIjowLjB9LFwiODQ2M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODQ2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODQ2N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODQ3MlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg0NzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTAxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTkyXCI6e1wiZGVwdGhcIjotMC4xMDg4OSxcImhlaWdodFwiOjAuMzkxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk0XCI6e1wiZGVwdGhcIjotMC4xMDg4OSxcImhlaWdodFwiOjAuMzkxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTVcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk2XCI6e1wiZGVwdGhcIjotMC4xMDg4OSxcImhlaWdodFwiOjAuMzkxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTdcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5OVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wMTU5NyxcInNrZXdcIjowLjB9LFwiODYwMFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MDFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjM2XCI6e1wiZGVwdGhcIjotMC4xMDg4OSxcImhlaWdodFwiOjAuMzkxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2MzdcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY0MFwiOntcImRlcHRoXCI6LTAuMTA4ODksXCJoZWlnaHRcIjowLjM5MTExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjQxXCI6e1wiZGVwdGhcIjotMC4xMDg4OSxcImhlaWdodFwiOjAuMzkxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTZcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NThcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1OVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NjBcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY2MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wMTU5NyxcInNrZXdcIjowLjB9LFwiODcwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcwNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDYzODksXCJza2V3XCI6MC4wfSxcIjg3MDdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MDlcIjp7XCJkZXB0aFwiOjAuMDU1NTYsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzEyXCI6e1wiZGVwdGhcIjowLjA4NTU2LFwiaGVpZ2h0XCI6MC41ODU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcxNVwiOntcImRlcHRoXCI6MC4wODU1NixcImhlaWdodFwiOjAuNTg1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjJcIjp7XCJkZXB0aFwiOjAuMTMzMzMsXCJoZWlnaHRcIjowLjYzMzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzIzXCI6e1wiZGVwdGhcIjowLjEzMzMzLFwiaGVpZ2h0XCI6MC42MzMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyNVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjZcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzI3XCI6e1wiZGVwdGhcIjotMC4wMjc3OCxcImhlaWdodFwiOjAuNDcyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjhcIjp7XCJkZXB0aFwiOi0wLjAyNjM5LFwiaGVpZ2h0XCI6MC40NzM2MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyOVwiOntcImRlcHRoXCI6LTAuMDI2MzksXCJoZWlnaHRcIjowLjQ3MzYxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzMwXCI6e1wiZGVwdGhcIjowLjE4LFwiaGVpZ2h0XCI6MC44MixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTIyNCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczOVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDFcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQ0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQ1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQ2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzQ3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTI3NzgsXCJza2V3XCI6MC4wfSxcIjg3NjRcIjp7XCJkZXB0aFwiOi0wLjEwODg5LFwiaGVpZ2h0XCI6MC4zOTExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc2OFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NzFcIjp7XCJkZXB0aFwiOjAuMDAyMjIsXCJoZWlnaHRcIjowLjUwMjIyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4Nzc2XCI6e1wiZGVwdGhcIjowLjAyNDQ0LFwiaGVpZ2h0XCI6MC41MjQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc4MVwiOntcImRlcHRoXCI6MC4wMDIyMixcImhlaWdodFwiOjAuNTAyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODAxXCI6e1wiZGVwdGhcIjowLjAwMjIyLFwiaGVpZ2h0XCI6MC41MDIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgwNFwiOntcImRlcHRoXCI6MC4xOTY2NyxcImhlaWdodFwiOjAuNjk2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MDVcIjp7XCJkZXB0aFwiOjAuMTk2NjcsXCJoZWlnaHRcIjowLjY5NjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODEwXCI6e1wiZGVwdGhcIjowLjA4NTU2LFwiaGVpZ2h0XCI6MC41ODU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgxMVwiOntcImRlcHRoXCI6MC4wODU1NixcImhlaWdodFwiOjAuNTg1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MjZcIjp7XCJkZXB0aFwiOjAuMDg1NTYsXCJoZWlnaHRcIjowLjU4NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODI3XCI6e1wiZGVwdGhcIjowLjA4NTU2LFwiaGVpZ2h0XCI6MC41ODU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgzNFwiOntcImRlcHRoXCI6MC4wODU1NixcImhlaWdodFwiOjAuNTg1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MzVcIjp7XCJkZXB0aFwiOjAuMDg1NTYsXCJoZWlnaHRcIjowLjU4NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODM4XCI6e1wiZGVwdGhcIjowLjE5NjY3LFwiaGVpZ2h0XCI6MC42OTY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgzOVwiOntcImRlcHRoXCI6MC4xOTY2NyxcImhlaWdodFwiOjAuNjk2NjcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NDZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NDlcIjp7XCJkZXB0aFwiOjAuMTk2NjcsXCJoZWlnaHRcIjowLjY5NjY3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODUwXCI6e1wiZGVwdGhcIjowLjE5NjY3LFwiaGVpZ2h0XCI6MC42OTY2NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1M1wiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTRcIjp7XCJkZXB0aFwiOjAuMTMzMzMsXCJoZWlnaHRcIjowLjYzMzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODU1XCI6e1wiZGVwdGhcIjowLjEzMzMzLFwiaGVpZ2h0XCI6MC42MzMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1NlwiOntcImRlcHRoXCI6MC4xMzMzMyxcImhlaWdodFwiOjAuNjMzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTdcIjp7XCJkZXB0aFwiOjAuMTMzMzMsXCJoZWlnaHRcIjowLjYzMzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDI4NzUsXCJza2V3XCI6MC4wfSxcIjg5MDBcIjp7XCJkZXB0aFwiOi0wLjAyNjM5LFwiaGVpZ2h0XCI6MC40NzM2MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwMVwiOntcImRlcHRoXCI6LTAuMDI2MzksXCJoZWlnaHRcIjowLjQ3MzYxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTAyXCI6e1wiZGVwdGhcIjotMC4wMjc3OCxcImhlaWdodFwiOjAuNDcyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NjhcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY5XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk3MFwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzFcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTk0XCI6e1wiZGVwdGhcIjotMC4xMzg4OSxcImhlaWdodFwiOjAuMzYxMTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5OTVcIjp7XCJkZXB0aFwiOi0wLjEzODg5LFwiaGVpZ2h0XCI6MC4zNjExMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTI4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5M1wiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTM3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTVcIjp7XCJkZXB0aFwiOjAuMzEsXCJoZWlnaHRcIjowLjEzNDQ0LFwiaXRhbGljXCI6MC4wMzE5NCxcInNrZXdcIjowLjB9LFwiOTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NTFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjU3XCI6e1wiZGVwdGhcIjotMC4wMjc3OCxcImhlaWdodFwiOjAuNDcyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk2NjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjY3XCI6e1wiZGVwdGhcIjotMC4wMjc3OCxcImhlaWdodFwiOjAuNDcyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NzExXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MjRcIjp7XCJkZXB0aFwiOjAuMTI5NjMsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODI1XCI6e1wiZGVwdGhcIjowLjEyOTYzLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgyNlwiOntcImRlcHRoXCI6MC4xMjk2MyxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MjdcIjp7XCJkZXB0aFwiOjAuMTI5NjMsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODM3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODM4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgzOVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH19LFwiTWFpbi1JdGFsaWNcIjp7XCIxMDBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEwMzMzLFwic2tld1wiOjAuMH0sXCIxMDFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA3NTE0LFwic2tld1wiOjAuMH0sXCIxMDJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4yMTE5NCxcInNrZXdcIjowLjB9LFwiMTAzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDg4NDcsXCJza2V3XCI6MC4wfSxcIjEwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDc2NzEsXCJza2V3XCI6MC4wfSxcIjEwNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NTUzNixcIml0YWxpY1wiOjAuMTAxOSxcInNrZXdcIjowLjB9LFwiMTA2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42NTUzNixcIml0YWxpY1wiOjAuMTQ0NjcsXCJza2V3XCI6MC4wfSxcIjEwN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTA3NjQsXCJza2V3XCI6MC4wfSxcIjEwOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTAzMzMsXCJza2V3XCI6MC4wfSxcIjEwOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDc2NzEsXCJza2V3XCI6MC4wfSxcIjExMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDc2NzEsXCJza2V3XCI6MC4wfSxcIjExMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDYzMTIsXCJza2V3XCI6MC4wfSxcIjExMlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA2MzEyLFwic2tld1wiOjAuMH0sXCIxMTNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wODg0NyxcInNrZXdcIjowLjB9LFwiMTE0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4xMDc2NCxcInNrZXdcIjowLjB9LFwiMTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wODIwOCxcInNrZXdcIjowLjB9LFwiMTE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYxNTA4LFwiaXRhbGljXCI6MC4wOTQ4NixcInNrZXdcIjowLjB9LFwiMTE3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNzY3MSxcInNrZXdcIjowLjB9LFwiMTE4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4xMDc2NCxcInNrZXdcIjowLjB9LFwiMTE5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4xMDc2NCxcInNrZXdcIjowLjB9LFwiMTIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4xMjA0MixcInNrZXdcIjowLjB9LFwiMTIxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDg4NDcsXCJza2V3XCI6MC4wfSxcIjEyMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMTIyOTIsXCJza2V3XCI6MC4wfSxcIjEyNlwiOntcImRlcHRoXCI6MC4zNSxcImhlaWdodFwiOjAuMzE3ODYsXCJpdGFsaWNcIjowLjExNTg1LFwic2tld1wiOjAuMH0sXCIxNjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjMwNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDc2NzEsXCJza2V3XCI6MC4wfSxcIjMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMjQxNyxcInNrZXdcIjowLjB9LFwiMzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA2OTYxLFwic2tld1wiOjAuMH0sXCIzNVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA2NjE2LFwic2tld1wiOjAuMH0sXCIzN1wiOntcImRlcHRoXCI6MC4wNTU1NixcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjEzNjM5LFwic2tld1wiOjAuMH0sXCIzOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDk2OTQsXCJza2V3XCI6MC4wfSxcIjM5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMjQxNyxcInNrZXdcIjowLjB9LFwiNDBcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4xNjE5NCxcInNrZXdcIjowLjB9LFwiNDFcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wMzY5NCxcInNrZXdcIjowLjB9LFwiNDJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjE0OTE3LFwic2tld1wiOjAuMH0sXCI0M1wiOntcImRlcHRoXCI6MC4wNTY2NyxcImhlaWdodFwiOjAuNTYxNjcsXCJpdGFsaWNcIjowLjAzNjk0LFwic2tld1wiOjAuMH0sXCI0NFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuMTA1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMjgyNixcInNrZXdcIjowLjB9LFwiNDZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuMTA1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ3XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMTYxOTQsXCJza2V3XCI6MC4wfSxcIjQ4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4xMzU1NixcInNrZXdcIjowLjB9LFwiNDlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjEzNTU2LFwic2tld1wiOjAuMH0sXCI1MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMTM1NTYsXCJza2V3XCI6MC4wfSxcIjUxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4xMzU1NixcInNrZXdcIjowLjB9LFwiNTJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4xMzU1NixcInNrZXdcIjowLjB9LFwiNTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjEzNTU2LFwic2tld1wiOjAuMH0sXCI1NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMTM1NTYsXCJza2V3XCI6MC4wfSxcIjU1XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMTM1NTYsXCJza2V3XCI6MC4wfSxcIjU2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4xMzU1NixcInNrZXdcIjowLjB9LFwiNTY3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM3MzYsXCJza2V3XCI6MC4wfSxcIjU3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4xMzU1NixcInNrZXdcIjowLjB9LFwiNThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA1ODIsXCJza2V3XCI6MC4wfSxcIjU5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDU4MixcInNrZXdcIjowLjB9LFwiNjFcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMDY2MTYsXCJza2V3XCI6MC4wfSxcIjYzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMjI1LFwic2tld1wiOjAuMH0sXCI2NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDk1OTcsXCJza2V3XCI6MC4wfSxcIjY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTAyNTcsXCJza2V3XCI6MC4wfSxcIjY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNDUyOCxcInNrZXdcIjowLjB9LFwiNjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA5NDAzLFwic2tld1wiOjAuMH0sXCI2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTIwMjgsXCJza2V3XCI6MC4wfSxcIjcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzMwNSxcInNrZXdcIjowLjB9LFwiNzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA4NzIyLFwic2tld1wiOjAuMH0sXCI3MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTYzODksXCJza2V3XCI6MC4wfSxcIjczXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNTgwNixcInNrZXdcIjowLjB9LFwiNzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE0MDI4LFwic2tld1wiOjAuMH0sXCI3NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTQ1MjgsXCJza2V3XCI6MC4wfSxcIjc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDk2OTQsXCJza2V3XCI6MC4wfSxcIjc3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNjM4OSxcInNrZXdcIjowLjB9LFwiNzcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNjY0NixcInNrZXdcIjowLjB9LFwiNzcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4xMTU4NSxcInNrZXdcIjowLjB9LFwiNzcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU2MTY3LFwiaXRhbGljXCI6MC4xMDMzMyxcInNrZXdcIjowLjB9LFwiNzc0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMDgwNixcInNrZXdcIjowLjB9LFwiNzc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4xMTc1MixcInNrZXdcIjowLjB9LFwiNzc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4xMDQ3NCxcInNrZXdcIjowLjB9LFwiNzc4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEyMjUsXCJza2V3XCI6MC4wfSxcIjc4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNjM4OSxcInNrZXdcIjowLjB9LFwiNzgwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYyODQ3LFwiaXRhbGljXCI6MC4wODI5NSxcInNrZXdcIjowLjB9LFwiNzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA5NDAzLFwic2tld1wiOjAuMH0sXCI4MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTAyNTcsXCJza2V3XCI6MC4wfSxcIjgxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDk0MDMsXCJza2V3XCI6MC4wfSxcIjgyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wMzg2OCxcInNrZXdcIjowLjB9LFwiODIxMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDkyMDgsXCJza2V3XCI6MC4wfSxcIjgyMTJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA5MjA4LFwic2tld1wiOjAuMH0sXCI4MjE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMjQxNyxcInNrZXdcIjowLjB9LFwiODIxN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTI0MTcsXCJza2V3XCI6MC4wfSxcIjgyMjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjE2ODUsXCJza2V3XCI6MC4wfSxcIjgyMjFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA2OTYxLFwic2tld1wiOjAuMH0sXCI4M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTE5NzIsXCJza2V3XCI6MC4wfSxcIjg0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzMwNSxcInNrZXdcIjowLjB9LFwiODQ2M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODg4OSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE2Mzg5LFwic2tld1wiOjAuMH0sXCI4NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTgzNjEsXCJza2V3XCI6MC4wfSxcIjg3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xODM2MSxcInNrZXdcIjowLjB9LFwiODhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjE1ODA2LFwic2tld1wiOjAuMH0sXCI4OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTkzODMsXCJza2V3XCI6MC4wfSxcIjkwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNDUyOCxcInNrZXdcIjowLjB9LFwiOTFcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4xODc1LFwic2tld1wiOjAuMH0sXCI5MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzMzA1LFwic2tld1wiOjAuMH0sXCI5MTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDk0MDMsXCJza2V3XCI6MC4wfSxcIjkyM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTI2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNTI5NCxcInNrZXdcIjowLjB9LFwiOTI4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xNjM4OSxcInNrZXdcIjowLjB9LFwiOTNcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4xMDUyOCxcInNrZXdcIjowLjB9LFwiOTMxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMjAyOCxcInNrZXdcIjowLjB9LFwiOTMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMTExMSxcInNrZXdcIjowLjB9LFwiOTM0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNTk4NixcInNrZXdcIjowLjB9LFwiOTM2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMTExMSxcInNrZXdcIjowLjB9LFwiOTM3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMDI1NyxcInNrZXdcIjowLjB9LFwiOTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA2NjQ2LFwic2tld1wiOjAuMH0sXCI5NVwiOntcImRlcHRoXCI6MC4zMSxcImhlaWdodFwiOjAuMTIwNTYsXCJpdGFsaWNcIjowLjA5MjA4LFwic2tld1wiOjAuMH0sXCI5N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDc2NzEsXCJza2V3XCI6MC4wfSxcIjk4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNjMxMixcInNrZXdcIjowLjB9LFwiOTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA1NjUzLFwic2tld1wiOjAuMH19LFwiTWFpbi1SZWd1bGFyXCI6e1wiMzJcIjp7XCJkZXB0aFwiOi0wLjAsXCJoZWlnaHRcIjowLjAsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiMTYwXCI6e1wiZGVwdGhcIjotMC4wLFwiaGVpZ2h0XCI6MC4wLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjgyMzBcIjp7XCJkZXB0aFwiOi0wLjAsXCJoZWlnaHRcIjowLjEyLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg2MTRcIjp7XCJkZXB0aFwiOjAuMDExLFwiaGVpZ2h0XCI6MC41MTEsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODYxN1wiOntcImRlcHRoXCI6MC4wMTEsXCJoZWlnaHRcIjowLjUxMSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCI4NjE4XCI6e1wiZGVwdGhcIjowLjAxMSxcImhlaWdodFwiOjAuNTExLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg2NTJcIjp7XCJkZXB0aFwiOjAuMDExLFwiaGVpZ2h0XCI6MC42NzEsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODc3M1wiOntcImRlcHRoXCI6LTAuMDIyLFwiaGVpZ2h0XCI6MC41ODksXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODc4NFwiOntcImRlcHRoXCI6LTAuMTMzLFwiaGVpZ2h0XCI6MC42NyxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCI4ODAwXCI6e1wiZGVwdGhcIjowLjIxNSxcImhlaWdodFwiOjAuNzE2LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg4NzJcIjp7XCJkZXB0aFwiOjAuMjQ5LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCI4OTA0XCI6e1wiZGVwdGhcIjowLjAwNSxcImhlaWdodFwiOjAuNTA1LFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg5NDJcIjp7XCJkZXB0aFwiOjAuMDMsXCJoZWlnaHRcIjowLjksXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiODk0M1wiOntcImRlcHRoXCI6LTAuMTksXCJoZWlnaHRcIjowLjMxLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjg5NDVcIjp7XCJkZXB0aFwiOi0wLjEsXCJoZWlnaHRcIjowLjgyLFwiaXRhbGljXCI6MCxcInNrZXdcIjowfSxcIjkxMzZcIjp7XCJkZXB0aFwiOjAuMjQ0LFwiaGVpZ2h0XCI6MC43NDQsXCJpdGFsaWNcIjowLFwic2tld1wiOjB9LFwiOTEzN1wiOntcImRlcHRoXCI6MC4yNDQsXCJoZWlnaHRcIjowLjc0NCxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIyMlwiOntcImRlcHRoXCI6MC4yNDQsXCJoZWlnaHRcIjowLjc0NCxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIyM1wiOntcImRlcHRoXCI6MC4yNDQsXCJoZWlnaHRcIjowLjc0NCxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIyOVwiOntcImRlcHRoXCI6MC4wMTEsXCJoZWlnaHRcIjowLjUxMSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIzMFwiOntcImRlcHRoXCI6MC4wMTEsXCJoZWlnaHRcIjowLjUxMSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIzMVwiOntcImRlcHRoXCI6MC4wMTEsXCJoZWlnaHRcIjowLjUxMSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIzMlwiOntcImRlcHRoXCI6MC4wMjQsXCJoZWlnaHRcIjowLjUyNSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIzM1wiOntcImRlcHRoXCI6MC4wMjQsXCJoZWlnaHRcIjowLjUyNSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIzNFwiOntcImRlcHRoXCI6MC4wMjQsXCJoZWlnaHRcIjowLjUyNSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDIzNlwiOntcImRlcHRoXCI6MC4wMTEsXCJoZWlnaHRcIjowLjUxMSxcIml0YWxpY1wiOjAsXCJza2V3XCI6MH0sXCIxMDBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNzc3OCxcInNrZXdcIjowLjB9LFwiMTAyMTZcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDIxN1wiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwM1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAxMzg5LFwic2tld1wiOjAuMH0sXCIxMDRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42Njc4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42Njc4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwODE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwOTI3XCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA5MjhcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTEyXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTEzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTE0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42MTUwOCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTE3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAxMzg5LFwic2tld1wiOjAuMH0sXCIxMTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAxMzg5LFwic2tld1wiOjAuMH0sXCIxMjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyMVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAxMzg5LFwic2tld1wiOjAuMH0sXCIxMjJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyM1wiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyNFwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyNVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyNlwiOntcImRlcHRoXCI6MC4zNSxcImhlaWdodFwiOjAuMzE3ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjE2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42Njc4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxNzVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTY3NzgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjE3NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTc3XCI6e1wiZGVwdGhcIjowLjA4MzMzLFwiaGVpZ2h0XCI6MC41ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTgwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIyMTVcIjp7XCJkZXB0aFwiOjAuMDgzMzMsXCJoZWlnaHRcIjowLjU4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIyNDdcIjp7XCJkZXB0aFwiOjAuMDgzMzMsXCJoZWlnaHRcIjowLjU4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzMDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wMjc3OH0sXCIzM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjM1XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMzZcIjp7XCJkZXB0aFwiOjAuMDU1NTYsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzN1wiOntcImRlcHRoXCI6MC4wNTU1NixcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjM4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIzOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDBcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0M1wiOntcImRlcHRoXCI6MC4wODMzMyxcImhlaWdodFwiOjAuNTgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ0XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC4xMDU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjEwNTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0N1wiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjUxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU2N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI1N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNThcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU5XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjBcIjp7XCJkZXB0aFwiOjAuMDM5MSxcImhlaWdodFwiOjAuNTM5MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjFcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjJcIjp7XCJkZXB0aFwiOjAuMDM5MSxcImhlaWdodFwiOjAuNTM5MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjI4NDcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41Njc3OCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzE0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcyOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42Njc4NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzMyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTY3NzgsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY2Nzg2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjY3ODYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzc5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzgwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYyODQ3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMH0sXCI4MjEyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjB9LFwiODIxNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIxN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIyMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODIyNFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMjVcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjRcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4MjQyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjU1NTU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg0MDdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzE0NDQsXCJpdGFsaWNcIjowLjE1MzgyLFwic2tld1wiOjAuMH0sXCI4NDYzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4ODg5LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NDY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMTExMTF9LFwiODQ3MlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4xMTExMX0sXCI4NDc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODUwMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5MlwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTkzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5NFwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk1XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5NlwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk3XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODU5OFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTlcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDEzODksXCJza2V3XCI6MC4wfSxcIjg2MDBcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjAxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODYzNlwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjM3XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NDBcIjp7XCJkZXB0aFwiOi0wLjEzMzEzLFwiaGVpZ2h0XCI6MC4zNjY4NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY0MVwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjU2XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjU4XCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTlcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NjYwXCI6e1wiZGVwdGhcIjotMC4xMzMxMyxcImhlaWdodFwiOjAuMzY2ODcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NjFcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDEzODksXCJza2V3XCI6MC4wfSxcIjg3MDRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MDZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA1NTU2LFwic2tld1wiOjAuMDgzMzR9LFwiODcwN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcwOVwiOntcImRlcHRoXCI6MC4wNTU1NixcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MTJcIjp7XCJkZXB0aFwiOjAuMDM5MSxcImhlaWdodFwiOjAuNTM5MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcxNVwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzIyXCI6e1wiZGVwdGhcIjowLjA4MzMzLFwiaGVpZ2h0XCI6MC41ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyM1wiOntcImRlcHRoXCI6MC4wODMzMyxcImhlaWdodFwiOjAuNTgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjVcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzI2XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyN1wiOntcImRlcHRoXCI6LTAuMDM0NzIsXCJoZWlnaHRcIjowLjQ2NTI4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzI4XCI6e1wiZGVwdGhcIjotMC4wNTU1NSxcImhlaWdodFwiOjAuNDQ0NDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjlcIjp7XCJkZXB0aFwiOi0wLjA1NTU1LFwiaGVpZ2h0XCI6MC40NDQ0NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczMFwiOntcImRlcHRoXCI6MC4yLFwiaGVpZ2h0XCI6MC44LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzM0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzM2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5MjI0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzM5XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3NDdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4xMTExMSxcInNrZXdcIjowLjB9LFwiODc2NFwiOntcImRlcHRoXCI6LTAuMTMzMTMsXCJoZWlnaHRcIjowLjM2Njg3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzY4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc3MVwiOntcImRlcHRoXCI6LTAuMDM2MjUsXCJoZWlnaHRcIjowLjQ2Mzc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4Nzc2XCI6e1wiZGVwdGhcIjotMC4wMTY4OCxcImhlaWdodFwiOjAuNDgzMTIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3ODFcIjp7XCJkZXB0aFwiOi0wLjAzNjI1LFwiaGVpZ2h0XCI6MC40NjM3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MDFcIjp7XCJkZXB0aFwiOi0wLjAzNjI1LFwiaGVpZ2h0XCI6MC40NjM3NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgwNFwiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MDVcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODEwXCI6e1wiZGVwdGhcIjowLjAzOTEsXCJoZWlnaHRcIjowLjUzOTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MTFcIjp7XCJkZXB0aFwiOjAuMDM5MSxcImhlaWdodFwiOjAuNTM5MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgyNlwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODI3XCI6e1wiZGVwdGhcIjowLjAzOTEsXCJoZWlnaHRcIjowLjUzOTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4MzRcIjp7XCJkZXB0aFwiOjAuMDM5MSxcImhlaWdodFwiOjAuNTM5MSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgzNVwiOntcImRlcHRoXCI6MC4wMzkxLFwiaGVpZ2h0XCI6MC41MzkxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODM4XCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODgzOVwiOntcImRlcHRoXCI6MC4xMzU5NyxcImhlaWdodFwiOjAuNjM1OTcsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NDZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNTU1NTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NDlcIjp7XCJkZXB0aFwiOjAuMTM1OTcsXCJoZWlnaHRcIjowLjYzNTk3LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODUwXCI6e1wiZGVwdGhcIjowLjEzNTk3LFwiaGVpZ2h0XCI6MC42MzU5NyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC41NTU1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1M1wiOntcImRlcHRoXCI6MC4wODMzMyxcImhlaWdodFwiOjAuNTgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTRcIjp7XCJkZXB0aFwiOjAuMDgzMzMsXCJoZWlnaHRcIjowLjU4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODU1XCI6e1wiZGVwdGhcIjowLjA4MzMzLFwiaGVpZ2h0XCI6MC41ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg1NlwiOntcImRlcHRoXCI6MC4wODMzMyxcImhlaWdodFwiOjAuNTgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4NTdcIjp7XCJkZXB0aFwiOjAuMDgzMzMsXCJoZWlnaHRcIjowLjU4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDI1LFwic2tld1wiOjAuMH0sXCI4OTAwXCI6e1wiZGVwdGhcIjotMC4wNTU1NSxcImhlaWdodFwiOjAuNDQ0NDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5MDFcIjp7XCJkZXB0aFwiOi0wLjA1NTU1LFwiaGVpZ2h0XCI6MC40NDQ0NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODkwMlwiOntcImRlcHRoXCI6LTAuMDM0NzIsXCJoZWlnaHRcIjowLjQ2NTI4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY4XCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk2OVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzBcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTcxXCI6e1wiZGVwdGhcIjowLjI1LFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk5NFwiOntcImRlcHRoXCI6LTAuMTQyMzYsXCJoZWlnaHRcIjowLjM1NzY0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTk1XCI6e1wiZGVwdGhcIjotMC4xNDIzNixcImhlaWdodFwiOjAuMzU3NjQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MVwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MlwiOntcImRlcHRoXCI6MC4yNSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTIzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTNcIjp7XCJkZXB0aFwiOjAuMjUsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTM0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MzZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1XCI6e1wiZGVwdGhcIjowLjMxLFwiaGVpZ2h0XCI6MC4xMjA1NixcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wfSxcIjk2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjUxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY1N1wiOntcImRlcHRoXCI6LTAuMDM0NzIsXCJoZWlnaHRcIjowLjQ2NTI4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjYxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY2N1wiOntcImRlcHRoXCI6LTAuMDM0NzIsXCJoZWlnaHRcIjowLjQ2NTI4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTcxMVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODI0XCI6e1wiZGVwdGhcIjowLjEyOTYzLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgyNVwiOntcImRlcHRoXCI6MC4xMjk2MyxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MjZcIjp7XCJkZXB0aFwiOjAuMTI5NjMsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODI3XCI6e1wiZGVwdGhcIjowLjEyOTYzLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgzN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgzOFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4MzlcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9fSxcIk1hdGgtQm9sZEl0YWxpY1wiOntcIjEwMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAwOVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAxM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAyXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTEwNDIsXCJza2V3XCI6MC4wfSxcIjEwM1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzNzA0LFwic2tld1wiOjAuMH0sXCIxMDRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTMyNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTMyNixcIml0YWxpY1wiOjAuMDYyMixcInNrZXdcIjowLjB9LFwiMTA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMTg1MixcInNrZXdcIjowLjB9LFwiMTA4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMDg4LFwic2tld1wiOjAuMH0sXCIxMDlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzcwNCxcInNrZXdcIjowLjB9LFwiMTE0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzE5NCxcInNrZXdcIjowLjB9LFwiMTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjM0OTIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTE4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzcwNCxcInNrZXdcIjowLjB9LFwiMTE5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjB9LFwiMTIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzcwNCxcInNrZXdcIjowLjB9LFwiMTIyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wNDIxMyxcInNrZXdcIjowLjB9LFwiNDdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjA0ODM1LFwic2tld1wiOjAuMH0sXCI2N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDY5NzksXCJza2V3XCI6MC4wfSxcIjY4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wMzE5NCxcInNrZXdcIjowLjB9LFwiNjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjA1NDUxLFwic2tld1wiOjAuMH0sXCI3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMTU5NzIsXCJza2V3XCI6MC4wfSxcIjcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDgyMjksXCJza2V3XCI6MC4wfSxcIjczXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wNzc3OCxcInNrZXdcIjowLjB9LFwiNzRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjEwMDY5LFwic2tld1wiOjAuMH0sXCI3NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDY5NzksXCJza2V3XCI6MC4wfSxcIjc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMTE0MjQsXCJza2V3XCI6MC4wfSxcIjc4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xMTQyNCxcInNrZXdcIjowLjB9LFwiNzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAzMTk0LFwic2tld1wiOjAuMH0sXCI4MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMTU5NzIsXCJza2V3XCI6MC4wfSxcIjgxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAwNDIxLFwic2tld1wiOjAuMH0sXCI4M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDUzODIsXCJza2V3XCI6MC4wfSxcIjg0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xNTk3MixcInNrZXdcIjowLjB9LFwiODVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjExNDI0LFwic2tld1wiOjAuMH0sXCI4NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMjU1NTUsXCJza2V3XCI6MC4wfSxcIjg3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xNTk3MixcInNrZXdcIjowLjB9LFwiODhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjA3Nzc4LFwic2tld1wiOjAuMH0sXCI4OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMjU1NTUsXCJza2V3XCI6MC4wfSxcIjkwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wNjk3OSxcInNrZXdcIjowLjB9LFwiOTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xNTk3MixcInNrZXdcIjowLjB9LFwiOTE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAzMTk0LFwic2tld1wiOjAuMH0sXCI5MjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjg2MTEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDc0NTgsXCJza2V3XCI6MC4wfSxcIjkyOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDgyMjksXCJza2V3XCI6MC4wfSxcIjkzMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMDU0NTEsXCJza2V3XCI6MC4wfSxcIjkzM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMTU5NzIsXCJza2V3XCI6MC4wfSxcIjkzNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODYxMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTM2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4xMTY1MyxcInNrZXdcIjowLjB9LFwiOTM3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4NjExLFwiaXRhbGljXCI6MC4wNDgzNSxcInNrZXdcIjowLjB9LFwiOTQ1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMzQwMyxcInNrZXdcIjowLjB9LFwiOTQ3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDYzODksXCJza2V3XCI6MC4wfSxcIjk0OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDM4MTksXCJza2V3XCI6MC4wfSxcIjk0OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTUwXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDYyMTUsXCJza2V3XCI6MC4wfSxcIjk1MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzNzA0LFwic2tld1wiOjAuMH0sXCI5NTJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAzMTk0LFwic2tld1wiOjAuMH0sXCI5NTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTU1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NTZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjA2ODk4LFwic2tld1wiOjAuMH0sXCI5NThcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMzAyMSxcInNrZXdcIjowLjB9LFwiOTU5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzNzA0LFwic2tld1wiOjAuMH0sXCI5NjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NjJcIjp7XCJkZXB0aFwiOjAuMDk3MjIsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wNzkxNyxcInNrZXdcIjowLjB9LFwiOTYzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzcwNCxcInNrZXdcIjowLjB9LFwiOTY0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4xMzQ3MixcInNrZXdcIjowLjB9LFwiOTY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wMzcwNCxcInNrZXdcIjowLjB9LFwiOTY2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTY4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDM3MDQsXCJza2V3XCI6MC4wfSxcIjk2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMDM3MDQsXCJza2V3XCI6MC4wfSxcIjk3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQ0NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDQ0NDQsXCJpdGFsaWNcIjowLjAzMTk0LFwic2tld1wiOjAuMH0sXCI5OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40NDQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9fSxcIk1hdGgtSXRhbGljXCI6e1wiMTAwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMTY2Njd9LFwiMTAwOVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCIxMDFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCIxMDEzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiMTAyXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMTA3NjQsXCJza2V3XCI6MC4xNjY2N30sXCIxMDNcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjAyNzc4fSxcIjEwNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY1OTUyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY1OTUyLFwiaXRhbGljXCI6MC4wNTcyNCxcInNrZXdcIjowLjB9LFwiMTA3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMzE0OCxcInNrZXdcIjowLjB9LFwiMTA4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMTk2OCxcInNrZXdcIjowLjA4MzM0fSxcIjEwOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMTFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCIxMTJcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiMTEzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wODMzNH0sXCIxMTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMDU1NTZ9LFwiMTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiMTE2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjYxNTA4LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiMTE3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDI3Nzh9LFwiMTE4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjAyNzc4fSxcIjExOVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDI2OTEsXCJza2V3XCI6MC4wODMzNH0sXCIxMjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wMjc3OH0sXCIxMjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjA1NTU2fSxcIjEyMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDQzOTgsXCJza2V3XCI6MC4wNTU1Nn0sXCI0N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjY1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMTM4ODl9LFwiNjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA1MDE3LFwic2tld1wiOjAuMDgzMzR9LFwiNjdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA3MTUzLFwic2tld1wiOjAuMDgzMzR9LFwiNjhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMDU1NTZ9LFwiNjlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA1NzY0LFwic2tld1wiOjAuMDgzMzR9LFwiNzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMDgzMzR9LFwiNzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI3MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDgxMjUsXCJza2V3XCI6MC4wNTU1Nn0sXCI3M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDc4NDcsXCJza2V3XCI6MC4xMTExMX0sXCI3NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDk2MTgsXCJza2V3XCI6MC4xNjY2N30sXCI3NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDcxNTMsXCJza2V3XCI6MC4wNTU1Nn0sXCI3NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjAyNzc4fSxcIjc3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMDkwMyxcInNrZXdcIjowLjA4MzM0fSxcIjc4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMDkwMyxcInNrZXdcIjowLjA4MzM0fSxcIjc5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjA4MzM0fSxcIjgwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzg4OSxcInNrZXdcIjowLjA4MzM0fSxcIjgxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjgyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wMDc3MyxcInNrZXdcIjowLjA4MzM0fSxcIjgzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNTc2NCxcInNrZXdcIjowLjA4MzM0fSxcIjg0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzg4OSxcInNrZXdcIjowLjA4MzM0fSxcIjg1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMDkwMyxcInNrZXdcIjowLjAyNzc4fSxcIjg2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4yMjIyMixcInNrZXdcIjowLjB9LFwiODdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMH0sXCI4OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDc4NDcsXCJza2V3XCI6MC4wODMzNH0sXCI4OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMjIyMjIsXCJza2V3XCI6MC4wfSxcIjkwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzE1MyxcInNrZXdcIjowLjA4MzM0fSxcIjkxNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTM4ODksXCJza2V3XCI6MC4wODMzNH0sXCI5MTZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4xNjY2N30sXCI5MjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMDgzMzR9LFwiOTIzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMTY2Njd9LFwiOTI2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzU2OSxcInNrZXdcIjowLjA4MzM0fSxcIjkyOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDgxMjUsXCJza2V3XCI6MC4wNTU1Nn0sXCI5MzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA1NzY0LFwic2tld1wiOjAuMDgzMzR9LFwiOTMzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzg4OSxcInNrZXdcIjowLjA1NTU2fSxcIjkzNFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjkzNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTEsXCJza2V3XCI6MC4wNTU1Nn0sXCI5MzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA1MDE3LFwic2tld1wiOjAuMDgzMzR9LFwiOTQ1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMDM3LFwic2tld1wiOjAuMDI3Nzh9LFwiOTQ2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDUyNzgsXCJza2V3XCI6MC4wODMzNH0sXCI5NDdcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNTU1NixcInNrZXdcIjowLjB9LFwiOTQ4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMzc4NSxcInNrZXdcIjowLjA1NTU2fSxcIjk0OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjk1MFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjA3Mzc4LFwic2tld1wiOjAuMDgzMzR9LFwiOTUxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wNTU1Nn0sXCI5NTJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMDgzMzR9LFwiOTUzXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiOTU0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NTVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1NlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wMjc3OH0sXCI5NTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA2MzY2LFwic2tld1wiOjAuMDI3Nzh9LFwiOTU4XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDQ2MDEsXCJza2V3XCI6MC4xMTExMX0sXCI5NTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCI5NjBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMH0sXCI5NjFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTYyXCI6e1wiZGVwdGhcIjowLjA5NzIyLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDc5ODYsXCJza2V3XCI6MC4wODMzNH0sXCI5NjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMH0sXCI5NjRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjExMzIsXCJza2V3XCI6MC4wMjc3OH0sXCI5NjVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMDI3Nzh9LFwiOTY2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjk2N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCI5NjhcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjExMTExfSxcIjk2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wfSxcIjk3XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5NzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI5OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTgxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjk4MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wfSxcIjk5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9fSxcIk1hdGgtUmVndWxhclwiOntcIjEwMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjE2NjY3fSxcIjEwMDlcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiMTAxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiMTAxM1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjEwMlwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjEwNzY0LFwic2tld1wiOjAuMTY2Njd9LFwiMTAzXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wMjc3OH0sXCIxMDRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42NTk1MixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42NTk1MixcIml0YWxpY1wiOjAuMDU3MjQsXCJza2V3XCI6MC4wfSxcIjEwN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDMxNDgsXCJza2V3XCI6MC4wfSxcIjEwOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDE5NjgsXCJza2V3XCI6MC4wODMzNH0sXCIxMDlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjExMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTExXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDU1NTZ9LFwiMTEyXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjExM1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMDgzMzR9LFwiMTE0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjA1NTU2fSxcIjExNVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjExNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42MTUwOCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjExN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjAyNzc4fSxcIjExOFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wMjc3OH0sXCIxMTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAyNjkxLFwic2tld1wiOjAuMDgzMzR9LFwiMTIwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDI3Nzh9LFwiMTIxXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wNTU1Nn0sXCIxMjJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA0Mzk4LFwic2tld1wiOjAuMDU1NTZ9LFwiNjVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4xMzg4OX0sXCI2NlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDUwMTcsXCJza2V3XCI6MC4wODMzNH0sXCI2N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDcxNTMsXCJza2V3XCI6MC4wODMzNH0sXCI2OFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wNTU1Nn0sXCI2OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDU3NjQsXCJza2V3XCI6MC4wODMzNH0sXCI3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTM4ODksXCJza2V3XCI6MC4wODMzNH0sXCI3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjcyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wODEyNSxcInNrZXdcIjowLjA1NTU2fSxcIjczXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzg0NyxcInNrZXdcIjowLjExMTExfSxcIjc0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wOTYxOCxcInNrZXdcIjowLjE2NjY3fSxcIjc1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzE1MyxcInNrZXdcIjowLjA1NTU2fSxcIjc2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDI3Nzh9LFwiNzdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEwOTAzLFwic2tld1wiOjAuMDgzMzR9LFwiNzhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEwOTAzLFwic2tld1wiOjAuMDgzMzR9LFwiNzlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAyNzc4LFwic2tld1wiOjAuMDgzMzR9LFwiODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMDgzMzR9LFwiODFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiODJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAwNzczLFwic2tld1wiOjAuMDgzMzR9LFwiODNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA1NzY0LFwic2tld1wiOjAuMDgzMzR9LFwiODRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMDgzMzR9LFwiODVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEwOTAzLFwic2tld1wiOjAuMDI3Nzh9LFwiODZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjIyMjIyLFwic2tld1wiOjAuMH0sXCI4N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMTM4ODksXCJza2V3XCI6MC4wfSxcIjg4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wNzg0NyxcInNrZXdcIjowLjA4MzM0fSxcIjg5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4yMjIyMixcInNrZXdcIjowLjB9LFwiOTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA3MTUzLFwic2tld1wiOjAuMDgzMzR9LFwiOTE1XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMzg4OSxcInNrZXdcIjowLjA4MzM0fSxcIjkxNlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjE2NjY3fSxcIjkyMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wODMzNH0sXCI5MjNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4xNjY2N30sXCI5MjZcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjA3NTY5LFwic2tld1wiOjAuMDgzMzR9LFwiOTI4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wODEyNSxcInNrZXdcIjowLjA1NTU2fSxcIjkzMVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDU3NjQsXCJza2V3XCI6MC4wODMzNH0sXCI5MzNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjgzMzMsXCJpdGFsaWNcIjowLjEzODg5LFwic2tld1wiOjAuMDU1NTZ9LFwiOTM0XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTM2XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY4MzMzLFwiaXRhbGljXCI6MC4xMSxcInNrZXdcIjowLjA1NTU2fSxcIjkzN1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42ODMzMyxcIml0YWxpY1wiOjAuMDUwMTcsXCJza2V3XCI6MC4wODMzNH0sXCI5NDVcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAwMzcsXCJza2V3XCI6MC4wMjc3OH0sXCI5NDZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNTI3OCxcInNrZXdcIjowLjA4MzM0fSxcIjk0N1wiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjA1NTU2LFwic2tld1wiOjAuMH0sXCI5NDhcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAzNzg1LFwic2tld1wiOjAuMDU1NTZ9LFwiOTQ5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTUwXCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDczNzgsXCJza2V3XCI6MC4wODMzNH0sXCI5NTFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjA1NTU2fSxcIjk1MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMDI3NzgsXCJza2V3XCI6MC4wODMzNH0sXCI5NTNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn0sXCI5NTRcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk1NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTU2XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjAyNzc4fSxcIjk1N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDYzNjYsXCJza2V3XCI6MC4wMjc3OH0sXCI5NThcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wNDYwMSxcInNrZXdcIjowLjExMTExfSxcIjk1OVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjk2MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wfSxcIjk2MVwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wODMzNH0sXCI5NjJcIjp7XCJkZXB0aFwiOjAuMDk3MjIsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wNzk4NixcInNrZXdcIjowLjA4MzM0fSxcIjk2M1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wfSxcIjk2NFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMTEzMixcInNrZXdcIjowLjAyNzc4fSxcIjk2NVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMDM1ODgsXCJza2V3XCI6MC4wMjc3OH0sXCI5NjZcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTY3XCI6e1wiZGVwdGhcIjowLjE5NDQ0LFwiaGVpZ2h0XCI6MC40MzA1NixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA1NTU2fSxcIjk2OFwiOntcImRlcHRoXCI6MC4xOTQ0NCxcImhlaWdodFwiOjAuNjk0NDQsXCJpdGFsaWNcIjowLjAzNTg4LFwic2tld1wiOjAuMTExMTF9LFwiOTY5XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMzU4OCxcInNrZXdcIjowLjB9LFwiOTdcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjk3N1wiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC42OTQ0NCxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjA4MzM0fSxcIjk4XCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5ODFcIjp7XCJkZXB0aFwiOjAuMTk0NDQsXCJoZWlnaHRcIjowLjY5NDQ0LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMDgzMzR9LFwiOTgyXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjQzMDU2LFwiaXRhbGljXCI6MC4wMjc3OCxcInNrZXdcIjowLjB9LFwiOTlcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNDMwNTYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wNTU1Nn19LFwiU2l6ZTEtUmVndWxhclwiOntcIjg3NDhcIjp7XCJkZXB0aFwiOjAuMzA2LFwiaGVpZ2h0XCI6MC44MDUsXCJpdGFsaWNcIjowLjE5NDQ1LFwic2tld1wiOjAuMH0sXCI4NzQ5XCI6e1wiZGVwdGhcIjowLjMwNixcImhlaWdodFwiOjAuODA1LFwiaXRhbGljXCI6MC4xOTQ0NSxcInNrZXdcIjowLjB9LFwiMTAyMTZcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDIxN1wiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNzUyXCI6e1wiZGVwdGhcIjowLjI1MDAxLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3NTNcIjp7XCJkZXB0aFwiOjAuMjUwMDEsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDc1NFwiOntcImRlcHRoXCI6MC4yNTAwMSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNzU2XCI6e1wiZGVwdGhcIjowLjI1MDAxLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3NThcIjp7XCJkZXB0aFwiOjAuMjUwMDEsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjNcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMjVcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MFwiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQxXCI6e1wiZGVwdGhcIjowLjM1MDAxLFwiaGVpZ2h0XCI6MC44NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDdcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MTBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzIyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43MjIyMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjcyMjIyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3NzFcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzIyMjIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjgyMTRcIjp7XCJkZXB0aFwiOi0wLjAwMDk5LFwiaGVpZ2h0XCI6MC42MDEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg1OTNcIjp7XCJkZXB0aFwiOjFlLTA1LFwiaGVpZ2h0XCI6MC42LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NTk1XCI6e1wiZGVwdGhcIjoxZS0wNSxcImhlaWdodFwiOjAuNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODY1N1wiOntcImRlcHRoXCI6MWUtMDUsXCJoZWlnaHRcIjowLjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg2NTlcIjp7XCJkZXB0aFwiOjFlLTA1LFwiaGVpZ2h0XCI6MC42LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzE5XCI6e1wiZGVwdGhcIjowLjI1MDAxLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyMFwiOntcImRlcHRoXCI6MC4yNTAwMSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjFcIjp7XCJkZXB0aFwiOjAuMjUwMDEsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzMwXCI6e1wiZGVwdGhcIjowLjM1MDAxLFwiaGVpZ2h0XCI6MC44NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODczOVwiOntcImRlcHRoXCI6LTAuMDA1OTksXCJoZWlnaHRcIjowLjYwNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0MVwiOntcImRlcHRoXCI6LTAuMDA1OTksXCJoZWlnaHRcIjowLjYwNixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0N1wiOntcImRlcHRoXCI6MC4zMDYxMixcImhlaWdodFwiOjAuODA1LFwiaXRhbGljXCI6MC4xOTQ0NSxcInNrZXdcIjowLjB9LFwiODc1MFwiOntcImRlcHRoXCI6MC4zMDYxMixcImhlaWdodFwiOjAuODA1LFwiaXRhbGljXCI6MC4xOTQ0NSxcInNrZXdcIjowLjB9LFwiODg5NlwiOntcImRlcHRoXCI6MC4yNTAwMSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4OTdcIjp7XCJkZXB0aFwiOjAuMjUwMDEsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODk4XCI6e1wiZGVwdGhcIjowLjI1MDAxLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg5OVwiOntcImRlcHRoXCI6MC4yNTAwMSxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NjhcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY5XCI6e1wiZGVwdGhcIjowLjM1MDAxLFwiaGVpZ2h0XCI6MC44NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk3MFwiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzFcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MVwiOntcImRlcHRoXCI6MC4zNTAwMSxcImhlaWdodFwiOjAuODUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxNjhcIjp7XCJkZXB0aFwiOi0wLjAwMDk5LFwiaGVpZ2h0XCI6MC42MDEsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyXCI6e1wiZGVwdGhcIjowLjM1MDAxLFwiaGVpZ2h0XCI6MC44NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTNcIjp7XCJkZXB0aFwiOjAuMzUwMDEsXCJoZWlnaHRcIjowLjg1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH19LFwiU2l6ZTItUmVndWxhclwiOntcIjg3NDhcIjp7XCJkZXB0aFwiOjAuODYyLFwiaGVpZ2h0XCI6MS4zNixcIml0YWxpY1wiOjAuNDQ0NDUsXCJza2V3XCI6MC4wfSxcIjg3NDlcIjp7XCJkZXB0aFwiOjAuODYyLFwiaGVpZ2h0XCI6MS4zNixcIml0YWxpY1wiOjAuNDQ0NDUsXCJza2V3XCI6MC4wfSxcIjEwMjE2XCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTAyMTdcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDc1MlwiOntcImRlcHRoXCI6MC41NTAwMSxcImhlaWdodFwiOjEuMDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNzUzXCI6e1wiZGVwdGhcIjowLjU1MDAxLFwiaGVpZ2h0XCI6MS4wNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTA3NTRcIjp7XCJkZXB0aFwiOjAuNTUwMDEsXCJoZWlnaHRcIjoxLjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDc1NlwiOntcImRlcHRoXCI6MC41NTAwMSxcImhlaWdodFwiOjEuMDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwNzU4XCI6e1wiZGVwdGhcIjowLjU1MDAxLFwiaGVpZ2h0XCI6MS4wNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTIzXCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI1XCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDBcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MVwiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ3XCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzE5XCI6e1wiZGVwdGhcIjowLjU1MDAxLFwiaGVpZ2h0XCI6MS4wNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODcyMFwiOntcImRlcHRoXCI6MC41NTAwMSxcImhlaWdodFwiOjEuMDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MjFcIjp7XCJkZXB0aFwiOjAuNTUwMDEsXCJoZWlnaHRcIjoxLjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzMwXCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODc0N1wiOntcImRlcHRoXCI6MC44NjIyNSxcImhlaWdodFwiOjEuMzYsXCJpdGFsaWNcIjowLjQ0NDQ1LFwic2tld1wiOjAuMH0sXCI4NzUwXCI6e1wiZGVwdGhcIjowLjg2MjI1LFwiaGVpZ2h0XCI6MS4zNixcIml0YWxpY1wiOjAuNDQ0NDUsXCJza2V3XCI6MC4wfSxcIjg4OTZcIjp7XCJkZXB0aFwiOjAuNTUwMDEsXCJoZWlnaHRcIjoxLjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4ODk3XCI6e1wiZGVwdGhcIjowLjU1MDAxLFwiaGVpZ2h0XCI6MS4wNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODg5OFwiOntcImRlcHRoXCI6MC41NTAwMSxcImhlaWdodFwiOjEuMDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg4OTlcIjp7XCJkZXB0aFwiOjAuNTUwMDEsXCJoZWlnaHRcIjoxLjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY4XCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk2OVwiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzBcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTcxXCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTFcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MlwiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkzXCI6e1wiZGVwdGhcIjowLjY1MDAyLFwiaGVpZ2h0XCI6MS4xNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9fSxcIlNpemUzLVJlZ3VsYXJcIjp7XCIxMDIxNlwiOntcImRlcHRoXCI6MC45NTAwMyxcImhlaWdodFwiOjEuNDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEwMjE3XCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTIzXCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiMTI1XCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDBcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0MVwiOntcImRlcHRoXCI6MC45NTAwMyxcImhlaWdodFwiOjEuNDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQ3XCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzEwXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI3MzJcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNzcxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4NzMwXCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk2OFwiOntcImRlcHRoXCI6MC45NTAwMyxcImhlaWdodFwiOjEuNDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NjlcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTcwXCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk3MVwiOntcImRlcHRoXCI6MC45NTAwMyxcImhlaWdodFwiOjEuNDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxXCI6e1wiZGVwdGhcIjowLjk1MDAzLFwiaGVpZ2h0XCI6MS40NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTJcIjp7XCJkZXB0aFwiOjAuOTUwMDMsXCJoZWlnaHRcIjoxLjQ1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5M1wiOntcImRlcHRoXCI6MC45NTAwMyxcImhlaWdodFwiOjEuNDUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfX0sXCJTaXplNC1SZWd1bGFyXCI6e1wiMTAyMTZcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCIxMDIxN1wiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyM1wiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjEyNVwiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjQwXCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNDFcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI0N1wiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3MzQ0XCI6e1wiZGVwdGhcIjotMC4wMDQ5OSxcImhlaWdodFwiOjAuNjA1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzM0NVwiOntcImRlcHRoXCI6LTAuMDA0OTksXCJoZWlnaHRcIjowLjYwNSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTc2ODBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuMTIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjU3NjgxXCI6e1wiZGVwdGhcIjowLjAsXCJoZWlnaHRcIjowLjEyLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI1NzY4MlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC4xMixcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiNTc2ODNcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuMTIsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjcxMFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC44MjUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjczMlwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC44MjUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MFwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC44MjUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjc3MVwiOntcImRlcHRoXCI6MC4wLFwiaGVpZ2h0XCI6MC44MjUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg3MzBcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTY4XCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiODk2OVwiOntcImRlcHRoXCI6MS4yNTAwMyxcImhlaWdodFwiOjEuNzUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjg5NzBcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI4OTcxXCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTFcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTE1XCI6e1wiZGVwdGhcIjowLjY0NTAyLFwiaGVpZ2h0XCI6MS4xNTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMTZcIjp7XCJkZXB0aFwiOjFlLTA1LFwiaGVpZ2h0XCI6MC42LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTE3XCI6e1wiZGVwdGhcIjowLjY0NTAyLFwiaGVpZ2h0XCI6MS4xNTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMThcIjp7XCJkZXB0aFwiOjAuNjQ1MDIsXCJoZWlnaHRcIjoxLjE1NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTExOVwiOntcImRlcHRoXCI6MWUtMDUsXCJoZWlnaHRcIjowLjYsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMjBcIjp7XCJkZXB0aFwiOjAuNjQ1MDIsXCJoZWlnaHRcIjoxLjE1NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEyMVwiOntcImRlcHRoXCI6MC42NDUwMixcImhlaWdodFwiOjEuMTU1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTIyXCI6e1wiZGVwdGhcIjotMC4wMDA5OSxcImhlaWdodFwiOjAuNjAxLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTIzXCI6e1wiZGVwdGhcIjowLjY0NTAyLFwiaGVpZ2h0XCI6MS4xNTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMjRcIjp7XCJkZXB0aFwiOjAuNjQ1MDIsXCJoZWlnaHRcIjoxLjE1NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEyNVwiOntcImRlcHRoXCI6LTAuMDAwOTksXCJoZWlnaHRcIjowLjYwMSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEyNlwiOntcImRlcHRoXCI6MC42NDUwMixcImhlaWdodFwiOjEuMTU1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTI3XCI6e1wiZGVwdGhcIjoxZS0wNSxcImhlaWdodFwiOjAuOSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEyOFwiOntcImRlcHRoXCI6MC42NTAwMixcImhlaWdodFwiOjEuMTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMjlcIjp7XCJkZXB0aFwiOjAuOTAwMDEsXCJoZWlnaHRcIjowLjAsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMzBcIjp7XCJkZXB0aFwiOjAuMCxcImhlaWdodFwiOjAuMyxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTEzMVwiOntcImRlcHRoXCI6MWUtMDUsXCJoZWlnaHRcIjowLjksXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkxMzJcIjp7XCJkZXB0aFwiOjAuNjUwMDIsXCJoZWlnaHRcIjoxLjE1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTMzXCI6e1wiZGVwdGhcIjowLjkwMDAxLFwiaGVpZ2h0XCI6MC4wLFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH0sXCI5MTQzXCI6e1wiZGVwdGhcIjowLjg4NTAyLFwiaGVpZ2h0XCI6MC45MTUsXCJpdGFsaWNcIjowLjAsXCJza2V3XCI6MC4wfSxcIjkyXCI6e1wiZGVwdGhcIjoxLjI1MDAzLFwiaGVpZ2h0XCI6MS43NSxcIml0YWxpY1wiOjAuMCxcInNrZXdcIjowLjB9LFwiOTNcIjp7XCJkZXB0aFwiOjEuMjUwMDMsXCJoZWlnaHRcIjoxLjc1LFwiaXRhbGljXCI6MC4wLFwic2tld1wiOjAuMH19fTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGEgY29udmllbmNlIGZ1bmN0aW9uIGZvciBsb29raW5nIHVwIGluZm9ybWF0aW9uIGluIHRoZVxuICogbWV0cmljTWFwIHRhYmxlLiBJdCB0YWtlcyBhIGNoYXJhY3RlciBhcyBhIHN0cmluZywgYW5kIGEgc3R5bGVcbiAqL1xudmFyIGdldENoYXJhY3Rlck1ldHJpY3MgPSBmdW5jdGlvbihjaGFyYWN0ZXIsIHN0eWxlKSB7XG4gICAgcmV0dXJuIG1ldHJpY01hcFtzdHlsZV1bY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCldO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbWV0cmljczogbWV0cmljcyxcbiAgICBnZXRDaGFyYWN0ZXJNZXRyaWNzOiBnZXRDaGFyYWN0ZXJNZXRyaWNzXG59O1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgUGFyc2VFcnJvciA9IHJlcXVpcmUoXCIuL1BhcnNlRXJyb3JcIik7XG5cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRoYXQgd2UgcGFyc2UuIFRoZSBmdW5jdGlvbnMgbWFwXG4vLyBjb250YWlucyB0aGUgZm9sbG93aW5nIGRhdGE6XG5cbi8qXG4gKiBLZXlzIGFyZSB0aGUgbmFtZSBvZiB0aGUgZnVuY3Rpb25zIHRvIHBhcnNlXG4gKiBUaGUgZGF0YSBjb250YWlucyB0aGUgZm9sbG93aW5nIGtleXM6XG4gKiAgLSBudW1BcmdzOiBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0aGUgZnVuY3Rpb24gdGFrZXMuXG4gKiAgLSBhcmdUeXBlczogKG9wdGlvbmFsKSBBbiBhcnJheSBjb3JyZXNwb25kaW5nIHRvIGVhY2ggYXJndW1lbnQgb2YgdGhlXG4gKiAgICAgICAgICAgICAgZnVuY3Rpb24sIGdpdmluZyB0aGUgdHlwZSBvZiBhcmd1bWVudCB0aGF0IHNob3VsZCBiZSBwYXJzZWQuIEl0c1xuICogICAgICAgICAgICAgIGxlbmd0aCBzaG91bGQgYmUgZXF1YWwgdG8gYG51bUFyZ3MgKyBudW1PcHRpb25hbEFyZ3NgLiBWYWxpZFxuICogICAgICAgICAgICAgIHR5cGVzOlxuICogICAgICAgICAgICAgICAtIFwic2l6ZVwiOiBBIHNpemUtbGlrZSB0aGluZywgc3VjaCBhcyBcIjFlbVwiIG9yIFwiNWV4XCJcbiAqICAgICAgICAgICAgICAgLSBcImNvbG9yXCI6IEFuIGh0bWwgY29sb3IsIGxpa2UgXCIjYWJjXCIgb3IgXCJibHVlXCJcbiAqICAgICAgICAgICAgICAgLSBcIm9yaWdpbmFsXCI6IFRoZSBzYW1lIHR5cGUgYXMgdGhlIGVudmlyb25tZW50IHRoYXQgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYmVpbmcgcGFyc2VkIGlzIGluIChlLmcuIHVzZWQgZm9yIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZGllcyBvZiBmdW5jdGlvbnMgbGlrZSBcXGNvbG9yIHdoZXJlIHRoZSBmaXJzdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50IGlzIHNwZWNpYWwgYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgbm9ybWFsbHkpXG4gKiAgICAgICAgICAgICAgT3RoZXIgcG9zc2libGUgdHlwZXMgKHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkKVxuICogICAgICAgICAgICAgICAtIFwidGV4dFwiOiBUZXh0LWxpa2UgKGUuZy4gXFx0ZXh0KVxuICogICAgICAgICAgICAgICAtIFwibWF0aFwiOiBOb3JtYWwgbWF0aFxuICogICAgICAgICAgICAgIElmIHVuZGVmaW5lZCwgdGhpcyB3aWxsIGJlIHRyZWF0ZWQgYXMgYW4gYXBwcm9wcmlhdGUgbGVuZ3RoXG4gKiAgICAgICAgICAgICAgYXJyYXkgb2YgXCJvcmlnaW5hbFwiIHN0cmluZ3NcbiAqICAtIGdyZWVkaW5lc3M6IChvcHRpb25hbCkgVGhlIGdyZWVkaW5lc3Mgb2YgdGhlIGZ1bmN0aW9uIHRvIHVzZSB1bmdyb3VwZWRcbiAqICAgICAgICAgICAgICAgIGFyZ3VtZW50cy5cbiAqXG4gKiAgICAgICAgICAgICAgICBFLmcuIGlmIHlvdSBoYXZlIGFuIGV4cHJlc3Npb25cbiAqICAgICAgICAgICAgICAgICAgXFxzcXJ0IFxcZnJhYyAxIDJcbiAqICAgICAgICAgICAgICAgIHNpbmNlIFxcZnJhYyBoYXMgZ3JlZWRpbmVzcz0yIHZzIFxcc3FydCdzIGdyZWVkaW5lc3M9MSwgXFxmcmFjXG4gKiAgICAgICAgICAgICAgICB3aWxsIHVzZSB0aGUgdHdvIGFyZ3VtZW50cyAnMScgYW5kICcyJyBhcyBpdHMgdHdvIGFyZ3VtZW50cyxcbiAqICAgICAgICAgICAgICAgIHRoZW4gdGhhdCB3aG9sZSBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgYXMgdGhlIGFyZ3VtZW50IHRvXG4gKiAgICAgICAgICAgICAgICBcXHNxcnQuIE9uIHRoZSBvdGhlciBoYW5kLCB0aGUgZXhwcmVzc2lvbnNcbiAqICAgICAgICAgICAgICAgICAgXFxmcmFjIFxcZnJhYyAxIDIgM1xuICogICAgICAgICAgICAgICAgYW5kXG4gKiAgICAgICAgICAgICAgICAgIFxcZnJhYyBcXHNxcnQgMSAyXG4gKiAgICAgICAgICAgICAgICB3aWxsIGZhaWwgYmVjYXVzZSBcXGZyYWMgYW5kIFxcZnJhYyBoYXZlIGVxdWFsIGdyZWVkaW5lc3NcbiAqICAgICAgICAgICAgICAgIGFuZCBcXHNxcnQgaGFzIGEgbG93ZXIgZ3JlZWRpbmVzcyB0aGFuIFxcZnJhYyByZXNwZWN0aXZlbHkuIFRvXG4gKiAgICAgICAgICAgICAgICBtYWtlIHRoZXNlIHBhcnNlLCB3ZSB3b3VsZCBoYXZlIHRvIGNoYW5nZSB0aGVtIHRvOlxuICogICAgICAgICAgICAgICAgICBcXGZyYWMge1xcZnJhYyAxIDJ9IDNcbiAqICAgICAgICAgICAgICAgIGFuZFxuICogICAgICAgICAgICAgICAgICBcXGZyYWMge1xcc3FydCAxfSAyXG4gKlxuICogICAgICAgICAgICAgICAgVGhlIGRlZmF1bHQgdmFsdWUgaXMgYDFgXG4gKiAgLSBhbGxvd2VkSW5UZXh0OiAob3B0aW9uYWwpIFdoZXRoZXIgb3Igbm90IHRoZSBmdW5jdGlvbiBpcyBhbGxvd2VkIGluc2lkZVxuICogICAgICAgICAgICAgICAgICAgdGV4dCBtb2RlIChkZWZhdWx0IGZhbHNlKVxuICogIC0gbnVtT3B0aW9uYWxBcmdzOiAob3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygb3B0aW9uYWwgYXJndW1lbnRzIHRoZSBmdW5jdGlvblxuICogICAgICAgICAgICAgICAgICAgICBzaG91bGQgcGFyc2UuIElmIHRoZSBvcHRpb25hbCBhcmd1bWVudHMgYXJlbid0IGZvdW5kLFxuICogICAgICAgICAgICAgICAgICAgICBgbnVsbGAgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGhhbmRsZXIgaW4gdGhlaXIgcGxhY2UuXG4gKiAgICAgICAgICAgICAgICAgICAgIChkZWZhdWx0IDApXG4gKiAgLSBoYW5kbGVyOiBUaGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgdG8gaGFuZGxlIHRoaXMgZnVuY3Rpb24gYW5kIGl0c1xuICogICAgICAgICAgICAgYXJndW1lbnRzLiBUaGUgYXJndW1lbnRzIGFyZTpcbiAqICAgICAgICAgICAgICAtIGZ1bmM6IHRoZSB0ZXh0IG9mIHRoZSBmdW5jdGlvblxuICogICAgICAgICAgICAgIC0gW2FyZ3NdOiB0aGUgbmV4dCBhcmd1bWVudHMgYXJlIHRoZSBhcmd1bWVudHMgdG8gdGhlIGZ1bmN0aW9uLFxuICogICAgICAgICAgICAgICAgICAgICAgICBvZiB3aGljaCB0aGVyZSBhcmUgbnVtQXJncyBvZiB0aGVtXG4gKiAgICAgICAgICAgICAgLSBwb3NpdGlvbnM6IHRoZSBwb3NpdGlvbnMgaW4gdGhlIG92ZXJhbGwgc3RyaW5nIG9mIHRoZSBmdW5jdGlvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgdGhlIGFyZ3VtZW50cy4gU2hvdWxkIG9ubHkgYmUgdXNlZCB0byBwcm9kdWNlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG1lc3NhZ2VzXG4gKiAgICAgICAgICAgICBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGtleXM6XG4gKiAgICAgICAgICAgICAgLSB0eXBlOiBUaGUgdHlwZSBvZiBlbGVtZW50IHRoYXQgdGhpcyBpcy4gVGhpcyBpcyB0aGVuIHVzZWQgaW5cbiAqICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkSFRNTC9idWlsZE1hdGhNTCB0byBkZXRlcm1pbmUgd2hpY2ggZnVuY3Rpb25cbiAqICAgICAgICAgICAgICAgICAgICAgIHNob3VsZCBiZSBjYWxsZWQgdG8gYnVpbGQgdGhpcyBub2RlIGludG8gYSBET00gbm9kZVxuICogICAgICAgICAgICAgQW55IG90aGVyIGRhdGEgY2FuIGJlIGFkZGVkIHRvIHRoZSBvYmplY3QsIHdoaWNoIHdpbGwgYmUgcGFzc2VkXG4gKiAgICAgICAgICAgICBpbiB0byB0aGUgZnVuY3Rpb24gaW4gYnVpbGRIVE1ML2J1aWxkTWF0aE1MIGFzIGBncm91cC52YWx1ZWAuXG4gKi9cblxudmFyIGZ1bmN0aW9ucyA9IHtcbiAgICAvLyBBIG5vcm1hbCBzcXVhcmUgcm9vdFxuICAgIFwiXFxcXHNxcnRcIjoge1xuICAgICAgICBudW1BcmdzOiAxLFxuICAgICAgICBudW1PcHRpb25hbEFyZ3M6IDEsXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMsIGluZGV4LCBib2R5LCBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcXJ0XCIsXG4gICAgICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU29tZSBub24tbWF0aHkgdGV4dFxuICAgIFwiXFxcXHRleHRcIjoge1xuICAgICAgICBudW1BcmdzOiAxLFxuICAgICAgICBhcmdUeXBlczogW1widGV4dFwiXSxcbiAgICAgICAgZ3JlZWRpbmVzczogMixcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgYm9keSkge1xuICAgICAgICAgICAgLy8gU2luY2UgdGhlIGNvcnJlc3BvbmRpbmcgYnVpbGRIVE1ML2J1aWxkTWF0aE1MIGZ1bmN0aW9uIGV4cGVjdHMgYVxuICAgICAgICAgICAgLy8gbGlzdCBvZiBlbGVtZW50cywgd2Ugbm9ybWFsaXplIGZvciBkaWZmZXJlbnQga2luZHMgb2YgYXJndW1lbnRzXG4gICAgICAgICAgICAvLyBUT0RPKGVtaWx5KTogbWF5YmUgdGhpcyBzaG91bGQgYmUgZG9uZSBzb21ld2hlcmUgZWxzZVxuICAgICAgICAgICAgdmFyIGlubmVyO1xuICAgICAgICAgICAgaWYgKGJvZHkudHlwZSA9PT0gXCJvcmRncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgaW5uZXIgPSBib2R5LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbm5lciA9IFtib2R5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBib2R5OiBpbm5lclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBIHR3by1hcmd1bWVudCBjdXN0b20gY29sb3JcbiAgICBcIlxcXFxjb2xvclwiOiB7XG4gICAgICAgIG51bUFyZ3M6IDIsXG4gICAgICAgIGFsbG93ZWRJblRleHQ6IHRydWUsXG4gICAgICAgIGdyZWVkaW5lc3M6IDMsXG4gICAgICAgIGFyZ1R5cGVzOiBbXCJjb2xvclwiLCBcIm9yaWdpbmFsXCJdLFxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jLCBjb2xvciwgYm9keSkge1xuICAgICAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBkaWZmZXJlbnQga2luZHMgb2YgYm9kaWVzIChzZWUgXFx0ZXh0IGFib3ZlKVxuICAgICAgICAgICAgdmFyIGlubmVyO1xuICAgICAgICAgICAgaWYgKGJvZHkudHlwZSA9PT0gXCJvcmRncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgaW5uZXIgPSBib2R5LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbm5lciA9IFtib2R5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLnZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbm5lclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBbiBvdmVybGluZVxuICAgIFwiXFxcXG92ZXJsaW5lXCI6IHtcbiAgICAgICAgbnVtQXJnczogMSxcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm92ZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBIGJveCBvZiB0aGUgd2lkdGggYW5kIGhlaWdodFxuICAgIFwiXFxcXHJ1bGVcIjoge1xuICAgICAgICBudW1BcmdzOiAyLFxuICAgICAgICBudW1PcHRpb25hbEFyZ3M6IDEsXG4gICAgICAgIGFyZ1R5cGVzOiBbXCJzaXplXCIsIFwic2l6ZVwiLCBcInNpemVcIl0sXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMsIHNoaWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwicnVsZVwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0OiBzaGlmdCAmJiBzaGlmdC52YWx1ZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgudmFsdWUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQSBLYVRlWCBsb2dvXG4gICAgXCJcXFxcS2FUZVhcIjoge1xuICAgICAgICBudW1BcmdzOiAwLFxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwia2F0ZXhcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBcIlxcXFxwaGFudG9tXCI6IHtcbiAgICAgICAgbnVtQXJnczogMSxcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgYm9keSkge1xuICAgICAgICAgICAgdmFyIGlubmVyO1xuICAgICAgICAgICAgaWYgKGJvZHkudHlwZSA9PT0gXCJvcmRncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgaW5uZXIgPSBib2R5LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbm5lciA9IFtib2R5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBoYW50b21cIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogaW5uZXJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBFeHRyYSBkYXRhIG5lZWRlZCBmb3IgdGhlIGRlbGltaXRlciBoYW5kbGVyIGRvd24gYmVsb3dcbnZhciBkZWxpbWl0ZXJTaXplcyA9IHtcbiAgICBcIlxcXFxiaWdsXCIgOiB7dHlwZTogXCJvcGVuXCIsICAgIHNpemU6IDF9LFxuICAgIFwiXFxcXEJpZ2xcIiA6IHt0eXBlOiBcIm9wZW5cIiwgICAgc2l6ZTogMn0sXG4gICAgXCJcXFxcYmlnZ2xcIjoge3R5cGU6IFwib3BlblwiLCAgICBzaXplOiAzfSxcbiAgICBcIlxcXFxCaWdnbFwiOiB7dHlwZTogXCJvcGVuXCIsICAgIHNpemU6IDR9LFxuICAgIFwiXFxcXGJpZ3JcIiA6IHt0eXBlOiBcImNsb3NlXCIsICAgc2l6ZTogMX0sXG4gICAgXCJcXFxcQmlnclwiIDoge3R5cGU6IFwiY2xvc2VcIiwgICBzaXplOiAyfSxcbiAgICBcIlxcXFxiaWdnclwiOiB7dHlwZTogXCJjbG9zZVwiLCAgIHNpemU6IDN9LFxuICAgIFwiXFxcXEJpZ2dyXCI6IHt0eXBlOiBcImNsb3NlXCIsICAgc2l6ZTogNH0sXG4gICAgXCJcXFxcYmlnbVwiIDoge3R5cGU6IFwicmVsXCIsICAgICBzaXplOiAxfSxcbiAgICBcIlxcXFxCaWdtXCIgOiB7dHlwZTogXCJyZWxcIiwgICAgIHNpemU6IDJ9LFxuICAgIFwiXFxcXGJpZ2dtXCI6IHt0eXBlOiBcInJlbFwiLCAgICAgc2l6ZTogM30sXG4gICAgXCJcXFxcQmlnZ21cIjoge3R5cGU6IFwicmVsXCIsICAgICBzaXplOiA0fSxcbiAgICBcIlxcXFxiaWdcIiAgOiB7dHlwZTogXCJ0ZXh0b3JkXCIsIHNpemU6IDF9LFxuICAgIFwiXFxcXEJpZ1wiICA6IHt0eXBlOiBcInRleHRvcmRcIiwgc2l6ZTogMn0sXG4gICAgXCJcXFxcYmlnZ1wiIDoge3R5cGU6IFwidGV4dG9yZFwiLCBzaXplOiAzfSxcbiAgICBcIlxcXFxCaWdnXCIgOiB7dHlwZTogXCJ0ZXh0b3JkXCIsIHNpemU6IDR9XG59O1xuXG52YXIgZGVsaW1pdGVycyA9IFtcbiAgICBcIihcIiwgXCIpXCIsIFwiW1wiLCBcIlxcXFxsYnJhY2tcIiwgXCJdXCIsIFwiXFxcXHJicmFja1wiLFxuICAgIFwiXFxcXHtcIiwgXCJcXFxcbGJyYWNlXCIsIFwiXFxcXH1cIiwgXCJcXFxccmJyYWNlXCIsXG4gICAgXCJcXFxcbGZsb29yXCIsIFwiXFxcXHJmbG9vclwiLCBcIlxcXFxsY2VpbFwiLCBcIlxcXFxyY2VpbFwiLFxuICAgIFwiPFwiLCBcIj5cIiwgXCJcXFxcbGFuZ2xlXCIsIFwiXFxcXHJhbmdsZVwiLFxuICAgIFwiL1wiLCBcIlxcXFxiYWNrc2xhc2hcIixcbiAgICBcInxcIiwgXCJcXFxcdmVydFwiLCBcIlxcXFx8XCIsIFwiXFxcXFZlcnRcIixcbiAgICBcIlxcXFx1cGFycm93XCIsIFwiXFxcXFVwYXJyb3dcIixcbiAgICBcIlxcXFxkb3duYXJyb3dcIiwgXCJcXFxcRG93bmFycm93XCIsXG4gICAgXCJcXFxcdXBkb3duYXJyb3dcIiwgXCJcXFxcVXBkb3duYXJyb3dcIixcbiAgICBcIi5cIlxuXTtcblxuLypcbiAqIFRoaXMgaXMgYSBsaXN0IG9mIGZ1bmN0aW9ucyB3aGljaCBlYWNoIGhhdmUgdGhlIHNhbWUgZnVuY3Rpb24gYnV0IGhhdmVcbiAqIGRpZmZlcmVudCBuYW1lcyBzbyB0aGF0IHdlIGRvbid0IGhhdmUgdG8gZHVwbGljYXRlIHRoZSBkYXRhIGEgYnVuY2ggb2YgdGltZXMuXG4gKiBFYWNoIGVsZW1lbnQgaW4gdGhlIGxpc3QgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBrZXlzOlxuICogIC0gZnVuY3M6IEEgbGlzdCBvZiBmdW5jdGlvbiBuYW1lcyB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGRhdGFcbiAqICAtIGRhdGE6IEFuIG9iamVjdHkgd2l0aCB0aGUgc2FtZSBkYXRhIGFzIGluIGVhY2ggdmFsdWUgb2YgdGhlIGBmdW5jdGlvbmBcbiAqICAgICAgICAgIHRhYmxlIGFib3ZlXG4gKi9cbnZhciBkdXBsaWNhdGVkRnVuY3Rpb25zID0gW1xuICAgIC8vIFNpbmdsZS1hcmd1bWVudCBjb2xvciBmdW5jdGlvbnNcbiAgICB7XG4gICAgICAgIGZ1bmNzOiBbXG4gICAgICAgICAgICBcIlxcXFxibHVlXCIsIFwiXFxcXG9yYW5nZVwiLCBcIlxcXFxwaW5rXCIsIFwiXFxcXHJlZFwiLFxuICAgICAgICAgICAgXCJcXFxcZ3JlZW5cIiwgXCJcXFxcZ3JheVwiLCBcIlxcXFxwdXJwbGVcIixcbiAgICAgICAgICAgIFwiXFxcXGJsdWVBXCIsIFwiXFxcXGJsdWVCXCIsIFwiXFxcXGJsdWVDXCIsIFwiXFxcXGJsdWVEXCIsIFwiXFxcXGJsdWVFXCIsXG4gICAgICAgICAgICBcIlxcXFx0ZWFsQVwiLCBcIlxcXFx0ZWFsQlwiLCBcIlxcXFx0ZWFsQ1wiLCBcIlxcXFx0ZWFsRFwiLCBcIlxcXFx0ZWFsRVwiLFxuICAgICAgICAgICAgXCJcXFxcZ3JlZW5BXCIsIFwiXFxcXGdyZWVuQlwiLCBcIlxcXFxncmVlbkNcIiwgXCJcXFxcZ3JlZW5EXCIsIFwiXFxcXGdyZWVuRVwiLFxuICAgICAgICAgICAgXCJcXFxcZ29sZEFcIiwgXCJcXFxcZ29sZEJcIiwgXCJcXFxcZ29sZENcIiwgXCJcXFxcZ29sZERcIiwgXCJcXFxcZ29sZEVcIixcbiAgICAgICAgICAgIFwiXFxcXHJlZEFcIiwgXCJcXFxccmVkQlwiLCBcIlxcXFxyZWRDXCIsIFwiXFxcXHJlZERcIiwgXCJcXFxccmVkRVwiLFxuICAgICAgICAgICAgXCJcXFxcbWFyb29uQVwiLCBcIlxcXFxtYXJvb25CXCIsIFwiXFxcXG1hcm9vbkNcIiwgXCJcXFxcbWFyb29uRFwiLCBcIlxcXFxtYXJvb25FXCIsXG4gICAgICAgICAgICBcIlxcXFxwdXJwbGVBXCIsIFwiXFxcXHB1cnBsZUJcIiwgXCJcXFxccHVycGxlQ1wiLCBcIlxcXFxwdXJwbGVEXCIsIFwiXFxcXHB1cnBsZUVcIixcbiAgICAgICAgICAgIFwiXFxcXG1pbnRBXCIsIFwiXFxcXG1pbnRCXCIsIFwiXFxcXG1pbnRDXCIsXG4gICAgICAgICAgICBcIlxcXFxncmF5QVwiLCBcIlxcXFxncmF5QlwiLCBcIlxcXFxncmF5Q1wiLCBcIlxcXFxncmF5RFwiLCBcIlxcXFxncmF5RVwiLFxuICAgICAgICAgICAgXCJcXFxcZ3JheUZcIiwgXCJcXFxcZ3JheUdcIiwgXCJcXFxcZ3JheUhcIiwgXCJcXFxcZ3JheUlcIixcbiAgICAgICAgICAgIFwiXFxcXGthQmx1ZVwiLCBcIlxcXFxrYUdyZWVuXCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMSxcbiAgICAgICAgICAgIGFsbG93ZWRJblRleHQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZGluZXNzOiAzLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgYm9keSkge1xuICAgICAgICAgICAgICAgIHZhciBhdG9tcztcbiAgICAgICAgICAgICAgICBpZiAoYm9keS50eXBlID09PSBcIm9yZGdyb3VwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXRvbXMgPSBib2R5LnZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0b21zID0gW2JvZHldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwia2F0ZXgtXCIgKyBmdW5jLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXRvbXNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRoZXJlIGFyZSAyIGZsYWdzIGZvciBvcGVyYXRvcnM7IHdoZXRoZXIgdGhleSBwcm9kdWNlIGxpbWl0cyBpblxuICAgIC8vIGRpc3BsYXlzdHlsZSwgYW5kIHdoZXRoZXIgdGhleSBhcmUgc3ltYm9scyBhbmQgc2hvdWxkIGdyb3cgaW5cbiAgICAvLyBkaXNwbGF5c3R5bGUuIFRoZXNlIGZvdXIgZ3JvdXBzIGNvdmVyIHRoZSBmb3VyIHBvc3NpYmxlIGNob2ljZXMuXG5cbiAgICAvLyBObyBsaW1pdHMsIG5vdCBzeW1ib2xzXG4gICAge1xuICAgICAgICBmdW5jczogW1xuICAgICAgICAgICAgXCJcXFxcYXJjc2luXCIsIFwiXFxcXGFyY2Nvc1wiLCBcIlxcXFxhcmN0YW5cIiwgXCJcXFxcYXJnXCIsIFwiXFxcXGNvc1wiLCBcIlxcXFxjb3NoXCIsXG4gICAgICAgICAgICBcIlxcXFxjb3RcIiwgXCJcXFxcY290aFwiLCBcIlxcXFxjc2NcIiwgXCJcXFxcZGVnXCIsIFwiXFxcXGRpbVwiLCBcIlxcXFxleHBcIiwgXCJcXFxcaG9tXCIsXG4gICAgICAgICAgICBcIlxcXFxrZXJcIiwgXCJcXFxcbGdcIiwgXCJcXFxcbG5cIiwgXCJcXFxcbG9nXCIsIFwiXFxcXHNlY1wiLCBcIlxcXFxzaW5cIiwgXCJcXFxcc2luaFwiLFxuICAgICAgICAgICAgXCJcXFxcdGFuXCIsXCJcXFxcdGFuaFwiXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG51bUFyZ3M6IDAsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJvcFwiLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmdW5jXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMaW1pdHMsIG5vdCBzeW1ib2xzXG4gICAge1xuICAgICAgICBmdW5jczogW1xuICAgICAgICAgICAgXCJcXFxcZGV0XCIsIFwiXFxcXGdjZFwiLCBcIlxcXFxpbmZcIiwgXCJcXFxcbGltXCIsIFwiXFxcXGxpbWluZlwiLCBcIlxcXFxsaW1zdXBcIiwgXCJcXFxcbWF4XCIsXG4gICAgICAgICAgICBcIlxcXFxtaW5cIiwgXCJcXFxcUHJcIiwgXCJcXFxcc3VwXCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMCxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZnVuY1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTm8gbGltaXRzLCBzeW1ib2xzXG4gICAge1xuICAgICAgICBmdW5jczogW1xuICAgICAgICAgICAgXCJcXFxcaW50XCIsIFwiXFxcXGlpbnRcIiwgXCJcXFxcaWlpbnRcIiwgXCJcXFxcb2ludFwiXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG51bUFyZ3M6IDAsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJvcFwiLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZ1bmNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExpbWl0cywgc3ltYm9sc1xuICAgIHtcbiAgICAgICAgZnVuY3M6IFtcbiAgICAgICAgICAgIFwiXFxcXGNvcHJvZFwiLCBcIlxcXFxiaWd2ZWVcIiwgXCJcXFxcYmlnd2VkZ2VcIiwgXCJcXFxcYmlndXBsdXNcIiwgXCJcXFxcYmlnY2FwXCIsXG4gICAgICAgICAgICBcIlxcXFxiaWdjdXBcIiwgXCJcXFxcaW50b3BcIiwgXCJcXFxccHJvZFwiLCBcIlxcXFxzdW1cIiwgXCJcXFxcYmlnb3RpbWVzXCIsXG4gICAgICAgICAgICBcIlxcXFxiaWdvcGx1c1wiLCBcIlxcXFxiaWdvZG90XCIsIFwiXFxcXGJpZ3NxY3VwXCIsIFwiXFxcXHNtYWxsaW50XCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMCxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmdW5jXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBGcmFjdGlvbnNcbiAgICB7XG4gICAgICAgIGZ1bmNzOiBbXG4gICAgICAgICAgICBcIlxcXFxkZnJhY1wiLCBcIlxcXFxmcmFjXCIsIFwiXFxcXHRmcmFjXCIsXG4gICAgICAgICAgICBcIlxcXFxkYmlub21cIiwgXCJcXFxcYmlub21cIiwgXCJcXFxcdGJpbm9tXCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMixcbiAgICAgICAgICAgIGdyZWVkaW5lc3M6IDIsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jLCBudW1lciwgZGVub20pIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzQmFyTGluZTtcbiAgICAgICAgICAgICAgICB2YXIgbGVmdERlbGltID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHREZWxpbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSBcImF1dG9cIjtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZnVuYykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXGRmcmFjXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcZnJhY1wiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXHRmcmFjXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNCYXJMaW5lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXGRiaW5vbVwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXGJpbm9tXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcdGJpbm9tXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNCYXJMaW5lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0RGVsaW0gPSBcIihcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0RGVsaW0gPSBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIGdlbmZyYWMgY29tbWFuZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcXFxkZnJhY1wiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXGRiaW5vbVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IFwiZGlzcGxheVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcdGZyYWNcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcXFx0Ymlub21cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSBcInRleHRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZ2VuZnJhY1wiLFxuICAgICAgICAgICAgICAgICAgICBudW1lcjogbnVtZXIsXG4gICAgICAgICAgICAgICAgICAgIGRlbm9tOiBkZW5vbSxcbiAgICAgICAgICAgICAgICAgICAgaGFzQmFyTGluZTogaGFzQmFyTGluZSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdERlbGltOiBsZWZ0RGVsaW0sXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0RGVsaW06IHJpZ2h0RGVsaW0sXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExlZnQgYW5kIHJpZ2h0IG92ZXJsYXAgZnVuY3Rpb25zXG4gICAge1xuICAgICAgICBmdW5jczogW1wiXFxcXGxsYXBcIiwgXCJcXFxccmxhcFwiXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMSxcbiAgICAgICAgICAgIGFsbG93ZWRJblRleHQ6IHRydWUsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihmdW5jLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZnVuYy5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGVsaW1pdGVyIGZ1bmN0aW9uc1xuICAgIHtcbiAgICAgICAgZnVuY3M6IFtcbiAgICAgICAgICAgIFwiXFxcXGJpZ2xcIiwgXCJcXFxcQmlnbFwiLCBcIlxcXFxiaWdnbFwiLCBcIlxcXFxCaWdnbFwiLFxuICAgICAgICAgICAgXCJcXFxcYmlnclwiLCBcIlxcXFxCaWdyXCIsIFwiXFxcXGJpZ2dyXCIsIFwiXFxcXEJpZ2dyXCIsXG4gICAgICAgICAgICBcIlxcXFxiaWdtXCIsIFwiXFxcXEJpZ21cIiwgXCJcXFxcYmlnZ21cIiwgXCJcXFxcQmlnZ21cIixcbiAgICAgICAgICAgIFwiXFxcXGJpZ1wiLCAgXCJcXFxcQmlnXCIsICBcIlxcXFxiaWdnXCIsICBcIlxcXFxCaWdnXCIsXG4gICAgICAgICAgICBcIlxcXFxsZWZ0XCIsIFwiXFxcXHJpZ2h0XCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMsIGRlbGltLCBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzLmNvbnRhaW5zKGRlbGltaXRlcnMsIGRlbGltLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyc2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSW52YWxpZCBkZWxpbWl0ZXI6ICdcIiArIGRlbGltLnZhbHVlICsgXCInIGFmdGVyICdcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuYyArIFwiJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXhlciwgcG9zaXRpb25zWzFdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBcXGxlZnQgYW5kIFxccmlnaHQgYXJlIGNhdWdodCBzb21ld2hlcmUgaW4gUGFyc2VyLmpzLCB3aGljaCBpc1xuICAgICAgICAgICAgICAgIC8vIHdoeSB0aGlzIGRhdGEgZG9lc24ndCBtYXRjaCB3aGF0IGlzIGluIGJ1aWxkSFRNTC5cbiAgICAgICAgICAgICAgICBpZiAoZnVuYyA9PT0gXCJcXFxcbGVmdFwiIHx8IGZ1bmMgPT09IFwiXFxcXHJpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibGVmdHJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGVsaW0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxpbXNpemluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZGVsaW1pdGVyU2l6ZXNbZnVuY10uc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltVHlwZTogZGVsaW1pdGVyU2l6ZXNbZnVuY10udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWxpbS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTaXppbmcgZnVuY3Rpb25zIChoYW5kbGVkIGluIFBhcnNlci5qcyBleHBsaWNpdGx5LCBoZW5jZSBubyBoYW5kbGVyKVxuICAgIHtcbiAgICAgICAgZnVuY3M6IFtcbiAgICAgICAgICAgIFwiXFxcXHRpbnlcIiwgXCJcXFxcc2NyaXB0c2l6ZVwiLCBcIlxcXFxmb290bm90ZXNpemVcIiwgXCJcXFxcc21hbGxcIixcbiAgICAgICAgICAgIFwiXFxcXG5vcm1hbHNpemVcIiwgXCJcXFxcbGFyZ2VcIiwgXCJcXFxcTGFyZ2VcIiwgXCJcXFxcTEFSR0VcIiwgXCJcXFxcaHVnZVwiLCBcIlxcXFxIdWdlXCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIFN0eWxlIGNoYW5naW5nIGZ1bmN0aW9ucyAoaGFuZGxlZCBpbiBQYXJzZXIuanMgZXhwbGljaXRseSwgaGVuY2Ugbm9cbiAgICAvLyBoYW5kbGVyKVxuICAgIHtcbiAgICAgICAgZnVuY3M6IFtcbiAgICAgICAgICAgIFwiXFxcXGRpc3BsYXlzdHlsZVwiLCBcIlxcXFx0ZXh0c3R5bGVcIiwgXCJcXFxcc2NyaXB0c3R5bGVcIixcbiAgICAgICAgICAgIFwiXFxcXHNjcmlwdHNjcmlwdHN0eWxlXCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFjY2VudHNcbiAgICB7XG4gICAgICAgIGZ1bmNzOiBbXG4gICAgICAgICAgICBcIlxcXFxhY3V0ZVwiLCBcIlxcXFxncmF2ZVwiLCBcIlxcXFxkZG90XCIsIFwiXFxcXHRpbGRlXCIsIFwiXFxcXGJhclwiLCBcIlxcXFxicmV2ZVwiLFxuICAgICAgICAgICAgXCJcXFxcY2hlY2tcIiwgXCJcXFxcaGF0XCIsIFwiXFxcXHZlY1wiLCBcIlxcXFxkb3RcIlxuICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgc3VwcG9ydCBleHBhbmRpbmcgYWNjZW50cyB5ZXRcbiAgICAgICAgICAgIC8vIFwiXFxcXHdpZGV0aWxkZVwiLCBcIlxcXFx3aWRlaGF0XCJcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMsIGJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICBhY2NlbnQ6IGZ1bmMsXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEluZml4IGdlbmVyYWxpemVkIGZyYWN0aW9uc1xuICAgIHtcbiAgICAgICAgZnVuY3M6IFtcIlxcXFxvdmVyXCIsIFwiXFxcXGNob29zZVwiXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMCxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcGxhY2VXaXRoO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZnVuYykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXG92ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VXaXRoID0gXCJcXFxcZnJhY1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcY2hvb3NlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlV2l0aCA9IFwiXFxcXGJpbm9tXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVucmVjb2duaXplZCBpbmZpeCBnZW5mcmFjIGNvbW1hbmRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5maXhcIixcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVdpdGg6IHJlcGxhY2VXaXRoXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSb3cgYnJlYWtzIGZvciBhbGlnbmVkIGRhdGFcbiAgICB7XG4gICAgICAgIGZ1bmNzOiBbXCJcXFxcXFxcXFwiLCBcIlxcXFxjclwiXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbnVtQXJnczogMCxcbiAgICAgICAgICAgIG51bU9wdGlvbmFsQXJnczogMSxcbiAgICAgICAgICAgIGFyZ1R5cGVzOiBbXCJzaXplXCJdLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZnVuYywgc2l6ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3JcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRW52aXJvbm1lbnQgZGVsaW1pdGVyc1xuICAgIHtcbiAgICAgICAgZnVuY3M6IFtcIlxcXFxiZWdpblwiLCBcIlxcXFxlbmRcIl0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG51bUFyZ3M6IDEsXG4gICAgICAgICAgICBhcmdUeXBlczogW1widGV4dFwiXSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGZ1bmMsIG5hbWVHcm91cCwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVHcm91cC50eXBlICE9PSBcIm9yZGdyb3VwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcnNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkludmFsaWQgZW52aXJvbm1lbnQgbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXhlciwgcG9zaXRpb25zWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZUdyb3VwLnZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gbmFtZUdyb3VwLnZhbHVlW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVudmlyb25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVwb3M6IHBvc2l0aW9uc1sxXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dO1xuXG52YXIgYWRkRnVuY3NXaXRoRGF0YSA9IGZ1bmN0aW9uKGZ1bmNzLCBkYXRhKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNbZnVuY3NbaV1dID0gZGF0YTtcbiAgICB9XG59O1xuXG4vLyBBZGQgYWxsIG9mIHRoZSBmdW5jdGlvbnMgaW4gZHVwbGljYXRlZEZ1bmN0aW9ucyB0byB0aGUgZnVuY3Rpb25zIG1hcFxuZm9yICh2YXIgaSA9IDA7IGkgPCBkdXBsaWNhdGVkRnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgYWRkRnVuY3NXaXRoRGF0YShkdXBsaWNhdGVkRnVuY3Rpb25zW2ldLmZ1bmNzLCBkdXBsaWNhdGVkRnVuY3Rpb25zW2ldLmRhdGEpO1xufVxuXG4vLyBTZXQgZGVmYXVsdCB2YWx1ZXMgb2YgZnVuY3Rpb25zXG5mb3IgKHZhciBmIGluIGZ1bmN0aW9ucykge1xuICAgIGlmIChmdW5jdGlvbnMuaGFzT3duUHJvcGVydHkoZikpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBmdW5jdGlvbnNbZl07XG5cbiAgICAgICAgZnVuY3Rpb25zW2ZdID0ge1xuICAgICAgICAgICAgbnVtQXJnczogZnVuYy5udW1BcmdzLFxuICAgICAgICAgICAgYXJnVHlwZXM6IGZ1bmMuYXJnVHlwZXMsXG4gICAgICAgICAgICBncmVlZGluZXNzOiAoZnVuYy5ncmVlZGluZXNzID09PSB1bmRlZmluZWQpID8gMSA6IGZ1bmMuZ3JlZWRpbmVzcyxcbiAgICAgICAgICAgIGFsbG93ZWRJblRleHQ6IGZ1bmMuYWxsb3dlZEluVGV4dCA/IGZ1bmMuYWxsb3dlZEluVGV4dCA6IGZhbHNlLFxuICAgICAgICAgICAgbnVtT3B0aW9uYWxBcmdzOiAoZnVuYy5udW1PcHRpb25hbEFyZ3MgPT09IHVuZGVmaW5lZCkgPyAwIDpcbiAgICAgICAgICAgICAgICBmdW5jLm51bU9wdGlvbmFsQXJncyxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmMuaGFuZGxlclxuICAgICAgICB9O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZnVuY3M6IGZ1bmN0aW9uc1xufTtcbiIsIi8qKlxuICogVGhlc2Ugb2JqZWN0cyBzdG9yZSBkYXRhIGFib3V0IE1hdGhNTCBub2Rlcy4gVGhpcyBpcyB0aGUgTWF0aE1MIGVxdWl2YWxlbnRcbiAqIG9mIHRoZSB0eXBlcyBpbiBkb21UcmVlLmpzLiBTaW5jZSBNYXRoTUwgaGFuZGxlcyBpdHMgb3duIHJlbmRlcmluZywgYW5kXG4gKiBzaW5jZSB3ZSdyZSBtYWlubHkgdXNpbmcgTWF0aE1MIHRvIGltcHJvdmUgYWNjZXNzaWJpbGl0eSwgd2UgZG9uJ3QgbWFuYWdlXG4gKiBhbnkgb2YgdGhlIHN0eWxpbmcgc3RhdGUgdGhhdCB0aGUgcGxhaW4gRE9NIG5vZGVzIGRvLlxuICpcbiAqIFRoZSBgdG9Ob2RlYCBhbmQgYHRvTWFya3VwYCBmdW5jdGlvbnMgd29yayBzaW1sYXJseSB0byBob3cgdGhleSBkbyBpblxuICogZG9tVHJlZS5qcywgY3JlYXRpbmcgbmFtZXNwYWNlZCBET00gbm9kZXMgYW5kIEhUTUwgdGV4dCBtYXJrdXAgcmVzcGVjdGl2ZWx5LlxuICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG4vKipcbiAqIFRoaXMgbm9kZSByZXByZXNlbnRzIGEgZ2VuZXJhbCBwdXJwb3NlIE1hdGhNTCBub2RlIG9mIGFueSB0eXBlLiBUaGVcbiAqIGNvbnN0cnVjdG9yIHJlcXVpcmVzIHRoZSB0eXBlIG9mIG5vZGUgdG8gY3JlYXRlIChmb3IgZXhhbXBsZSwgYFwibW9cImAgb3JcbiAqIGBcIm1zcGFjZVwiYCwgY29ycmVzcG9uZGluZyB0byBgPG1vPmAgYW5kIGA8bXNwYWNlPmAgdGFncykuXG4gKi9cbmZ1bmN0aW9uIE1hdGhOb2RlKHR5cGUsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW107XG59XG5cbi8qKlxuICogU2V0cyBhbiBhdHRyaWJ1dGUgb24gYSBNYXRoTUwgbm9kZS4gTWF0aE1MIGRlcGVuZHMgb24gYXR0cmlidXRlcyB0byBjb252ZXkgYVxuICogc2VtYW50aWMgY29udGVudCwgc28gdGhpcyBpcyB1c2VkIGhlYXZpbHkuXG4gKi9cbk1hdGhOb2RlLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuYXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgbWF0aCBub2RlIGludG8gYSBNYXRoTUwtbmFtZXNwYWNlZCBET00gZWxlbWVudC5cbiAqL1xuTWF0aE5vZGUucHJvdG90eXBlLnRvTm9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIiwgdGhpcy50eXBlKTtcblxuICAgIGZvciAodmFyIGF0dHIgaW4gdGhpcy5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5hdHRyaWJ1dGVzLCBhdHRyKSkge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy5hdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuY2hpbGRyZW5baV0udG9Ob2RlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgbWF0aCBub2RlIGludG8gYW4gSFRNTCBtYXJrdXAgc3RyaW5nLlxuICovXG5NYXRoTm9kZS5wcm90b3R5cGUudG9NYXJrdXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbWFya3VwID0gXCI8XCIgKyB0aGlzLnR5cGU7XG5cbiAgICAvLyBBZGQgdGhlIGF0dHJpYnV0ZXNcbiAgICBmb3IgKHZhciBhdHRyIGluIHRoaXMuYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuYXR0cmlidXRlcywgYXR0cikpIHtcbiAgICAgICAgICAgIG1hcmt1cCArPSBcIiBcIiArIGF0dHIgKyBcIj1cXFwiXCI7XG4gICAgICAgICAgICBtYXJrdXAgKz0gdXRpbHMuZXNjYXBlKHRoaXMuYXR0cmlidXRlc1thdHRyXSk7XG4gICAgICAgICAgICBtYXJrdXAgKz0gXCJcXFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrdXAgKz0gXCI+XCI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFya3VwICs9IHRoaXMuY2hpbGRyZW5baV0udG9NYXJrdXAoKTtcbiAgICB9XG5cbiAgICBtYXJrdXAgKz0gXCI8L1wiICsgdGhpcy50eXBlICsgXCI+XCI7XG5cbiAgICByZXR1cm4gbWFya3VwO1xufTtcblxuLyoqXG4gKiBUaGlzIG5vZGUgcmVwcmVzZW50cyBhIHBpZWNlIG9mIHRleHQuXG4gKi9cbmZ1bmN0aW9uIFRleHROb2RlKHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB0ZXh0IG5vZGUgaW50byBhIERPTSB0ZXh0IG5vZGUuXG4gKi9cblRleHROb2RlLnByb3RvdHlwZS50b05vZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0KTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHRleHQgbm9kZSBpbnRvIEhUTUwgbWFya3VwICh3aGljaCBpcyBqdXN0IHRoZSB0ZXh0IGl0c2VsZikuXG4gKi9cblRleHROb2RlLnByb3RvdHlwZS50b01hcmt1cCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB1dGlscy5lc2NhcGUodGhpcy50ZXh0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIE1hdGhOb2RlOiBNYXRoTm9kZSxcbiAgICBUZXh0Tm9kZTogVGV4dE5vZGVcbn07XG4iLCIvKipcbiAqIFRoZSByZXN1bHRpbmcgcGFyc2UgdHJlZSBub2RlcyBvZiB0aGUgcGFyc2UgdHJlZS5cbiAqL1xuZnVuY3Rpb24gUGFyc2VOb2RlKHR5cGUsIHZhbHVlLCBtb2RlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbn1cblxuLyoqXG4gKiBBIHJlc3VsdCBhbmQgZmluYWwgcG9zaXRpb24gcmV0dXJuZWQgYnkgdGhlIGAucGFyc2UuLi5gIGZ1bmN0aW9ucy5cbiAqIFxuICovXG5mdW5jdGlvbiBQYXJzZVJlc3VsdChyZXN1bHQsIG5ld1Bvc2l0aW9uLCBwZWVrKSB7XG4gICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBQYXJzZU5vZGU6IFBhcnNlTm9kZSxcbiAgICBQYXJzZVJlc3VsdDogUGFyc2VSZXN1bHRcbn07XG5cbiIsIi8qKlxuICogUHJvdmlkZXMgYSBzaW5nbGUgZnVuY3Rpb24gZm9yIHBhcnNpbmcgYW4gZXhwcmVzc2lvbiB1c2luZyBhIFBhcnNlclxuICogVE9ETyhlbWlseSk6IFJlbW92ZSB0aGlzXG4gKi9cblxudmFyIFBhcnNlciA9IHJlcXVpcmUoXCIuL1BhcnNlclwiKTtcblxuLyoqXG4gKiBQYXJzZXMgYW4gZXhwcmVzc2lvbiB1c2luZyBhIFBhcnNlciwgdGhlbiByZXR1cm5zIHRoZSBwYXJzZWQgcmVzdWx0LlxuICovXG52YXIgcGFyc2VUcmVlID0gZnVuY3Rpb24odG9QYXJzZSwgc2V0dGluZ3MpIHtcbiAgICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcih0b1BhcnNlLCBzZXR0aW5ncyk7XG5cbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlVHJlZTtcbiIsIi8qKlxuICogVGhpcyBmaWxlIGhvbGRzIGEgbGlzdCBvZiBhbGwgbm8tYXJndW1lbnQgZnVuY3Rpb25zIGFuZCBzaW5nbGUtY2hhcmFjdGVyXG4gKiBzeW1ib2xzIChsaWtlICdhJyBvciAnOycpLlxuICpcbiAqIEZvciBlYWNoIG9mIHRoZSBzeW1ib2xzLCB0aGVyZSBhcmUgdGhyZWUgcHJvcGVydGllcyB0aGV5IGNhbiBoYXZlOlxuICogLSBmb250IChyZXF1aXJlZCk6IHRoZSBmb250IHRvIGJlIHVzZWQgZm9yIHRoaXMgc3ltYm9sLiBFaXRoZXIgXCJtYWluXCIgKHRoZVxuICAgICBub3JtYWwgZm9udCksIG9yIFwiYW1zXCIgKHRoZSBhbXMgZm9udHMpLlxuICogLSBncm91cCAocmVxdWlyZWQpOiB0aGUgUGFyc2VOb2RlIGdyb3VwIHR5cGUgdGhlIHN5bWJvbCBzaG91bGQgaGF2ZSAoaS5lLlxuICAgICBcInRleHRvcmRcIiwgXCJtYXRob3JkXCIsIGV0YykuXG4gKiAtIHJlcGxhY2UgKG9wdGlvbmFsKTogdGhlIGNoYXJhY3RlciB0aGF0IHRoaXMgc3ltYm9sIG9yIGZ1bmN0aW9uIHNob3VsZCBiZVxuICogICByZXBsYWNlZCB3aXRoIChpLmUuIFwiXFxwaGlcIiBoYXMgYSByZXBsYWNlIHZhbHVlIG9mIFwiXFx1MDNkNVwiLCB0aGUgcGhpXG4gKiAgIGNoYXJhY3RlciBpbiB0aGUgbWFpbiBmb250KS5cbiAqXG4gKiBUaGUgb3V0ZXJtb3N0IG1hcCBpbiB0aGUgdGFibGUgaW5kaWNhdGVzIHdoYXQgbW9kZSB0aGUgc3ltYm9scyBzaG91bGQgYmVcbiAqIGFjY2VwdGVkIGluIChlLmcuIFwibWF0aFwiIG9yIFwidGV4dFwiKS5cbiAqL1xuXG52YXIgc3ltYm9scyA9IHtcbiAgICBcIm1hdGhcIjoge1xuICAgICAgICAvLyBSZWxhdGlvbiBTeW1ib2xzXG4gICAgICAgIFwiXFxcXGVxdWl2XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxwcmVjXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyN2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdWNjXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyN2JcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIzY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHBlcnBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHByZWNlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYWFmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY2VxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhYjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzaW1lcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbWlkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsbFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjZhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ2dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGFzeW1wXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxwYXJhbGxlbFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYm93dGllXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzbWlsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMzIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FzdWJzZXRlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjkxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FzdXBzZXRlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZG90ZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI1MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGZyb3duXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIzMjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuaVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjBiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJvcHRvXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMWRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2ZGFzaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGFzaHZcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG93bnNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwYlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gUHVuY3R1YXRpb25cbiAgICAgICAgXCJcXFxcbGRvdHBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJwdW5jdFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMDJlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2RvdHBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJwdW5jdFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmM1XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBNaXNjIFN5bWJvbHNcbiAgICAgICAgXCJcXFxcI1wiOiB7XG4gICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDAyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXCZcIjoge1xuICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwMjZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxhbGVwaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjEzNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGZvcmFsbFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGhiYXJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxleGlzdHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMDNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuYWJsYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGZsYXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI2NmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlbGxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuYXR1cmFsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNjZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2x1YnN1aXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI2NjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx3cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjExOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNoYXJwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNjZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGlhbW9uZHN1aXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI2NjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxSZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjExY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGhlYXJ0c3VpdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjY2MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEltXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3BhZGVzdWl0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNjYwXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBNYXRoIGFuZCBUZXh0XG4gICAgICAgIFwiXFxcXGRhZ1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjAyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRkYWdcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIwMjFcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIExhcmdlIERlbGltaXRlcnNcbiAgICAgICAgXCJcXFxccm1vdXN0YWNoZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIzYjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsbW91c3RhY2hlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BlblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyM2IwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmdyb3VwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiY2xvc2VcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdlZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxncm91cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wZW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdlZVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQmluYXJ5IE9wZXJhdG9yc1xuICAgICAgICBcIlxcXFxtcFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb21pbnVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyOTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx1cGx1c1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjhlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FjYXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGFzdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjE3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FjdXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ2NpcmNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjVlZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJ1bGxldFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGRhZ2dlclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMDIxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcd3JcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGFtYWxnXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhM2ZcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFycm93IFN5bWJvbHNcbiAgICAgICAgXCJcXFxcbG9uZ2xlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyN2Y1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcTGVmdGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxZDBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxMb25nbGVmdGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI3ZjhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsb25ncmlnaHRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyN2Y2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcUmlnaHRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcTG9uZ3JpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdmOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnRyaWdodGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsb25nbGVmdHJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdmN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXExlZnRyaWdodGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxZDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxMb25nbGVmdHJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjdmYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG1hcHN0b1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbG9uZ21hcHN0b1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyN2ZjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmVhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTk3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaG9va2xlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaG9va3JpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFhYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNlYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnRoYXJwb29udXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpZ2h0aGFycG9vbnVwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxYzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzd2Fycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZWZ0aGFycG9vbmRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpZ2h0aGFycG9vbmRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG53YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpZ2h0bGVmdGhhcnBvb25zXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxY2NcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFNUyBOZWdhdGVkIEJpbmFyeSBSZWxhdGlvbnNcbiAgICAgICAgXCJcXFxcbmxlc3NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjZlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmxlcXNsYW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5sZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAxMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxuZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbG5lcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjY4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbHZlcnRuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAwY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxuc2ltXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxuYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE4OVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5wcmVjXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5wcmVjZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY25zaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY25hcHByb3hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYWI5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnNpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuc2hvcnRtaWRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDA2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbm1pZFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxudmRhc2hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmFjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnZEYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG50cmlhbmdsZWxlZnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmVhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnRyaWFuZ2xlbGVmdGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1YnNldG5lcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyOGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJzdWJzZXRuZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDFhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3Vic2V0bmVxcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhY2JcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJzdWJzZXRuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAxN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5ndHJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmdlcXNsYW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAwZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5nZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAwZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGduZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTg4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ25lcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ3ZlcnRuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1ZTAwZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGduc2ltXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGduYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE4YVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdWNjXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdWNjZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY25zaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmU5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY25hcHByb3hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYWJhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmNvbmdcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjQ2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnNob3J0cGFyYWxsZWxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDA3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnBhcmFsbGVsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5WRGFzaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxudHJpYW5nbGVyaWdodFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxudHJpYW5nbGVyaWdodGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdXBzZXRlcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDE4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3Vwc2V0bmVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnN1cHNldG5lcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdWUwMWJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdXBzZXRuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFjY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnN1cHNldG5lcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDE5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcblZkYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHByZWNuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1Y2NuZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdWJzZXRlcXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHVlMDE2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdW5saGRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmI0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdW5yaGRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmI1XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBTVMgTmVnYXRlZCBBcnJvd3NcbiAgICAgICAgIFwiXFxcXG5sZWZ0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTlhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTliXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbkxlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxY2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuUmlnaHRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxY2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxubGVmdHJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWFlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbkxlZnRyaWdodGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjZVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQU1TIE1pc2NcbiAgICAgICAgXCJcXFxcdmFydHJpYW5nbGVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaHNsYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0cmlhbmdsZWRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxvemVuZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjVjYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNsZWRTXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI0YzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxtZWFzdXJlZGFuZ2xlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxuZXhpc3RzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxtaG9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjEyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEZpbnZcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjEzMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEdhbWVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE0MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEJiYmtcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDA2YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJhY2twcmltZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMDM1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmxhY2t0cmlhbmdsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmxhY2t0cmlhbmdsZWRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJsYWNrc3F1YXJlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1YTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxibGFja2xvemVuZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjllYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ3N0YXJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjYwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNwaGVyaWNhbGFuZ2xlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjb21wbGVtZW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxldGhcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBmMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRpYWd1cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNTcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGlhZ2Rvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjU3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNxdWFyZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWExXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcQm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1YTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxEaWFtb25kXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1Y2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx5ZW5cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhNVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQU1TIEhlYnJld1xuICAgICAgICBcIlxcXFxiZXRoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMzZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkYWxldGhcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjEzOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdpbWVsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxMzdcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFNUyBHcmVla1xuICAgICAgICBcIlxcXFxkaWdhbW1hXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzZGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJrYXBwYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2YwXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBTVMgRGVsaW1pdGVyc1xuICAgICAgICBcIlxcXFx1bGNvcm5lclwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNTBjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdXJjb3JuZXJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjUxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxsY29ybmVyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1MTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxscmNvcm5lclwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNTE4XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBTVMgQmluYXJ5IFJlbGF0aW9uc1xuICAgICAgICBcIlxcXFxsZXFxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlcXNsYW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE3ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGVxc2xhbnRsZXNzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlc3NzaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjcyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVzc2FwcHJveFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhODVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxhcHByb3hlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZXNzZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJkNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxsbFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZXNzZ3RyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI3NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlc3NlcWd0clwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZGFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZXNzZXFxZ3RyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE4YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvdGVxZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI1MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpc2luZ2RvdHNlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNTNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxmYWxsaW5nZG90c2VxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJhY2tzaW1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjNkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmFja3NpbWVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1YnNldGVxcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhYzVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxTdWJzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FzdWJzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjhmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY2N1cmx5ZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjdjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY3VybHllcXByZWNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmRlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJlY3NpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxwcmVjYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnRyaWFuZ2xlbGVmdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYjJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0cmlhbmdsZWxlZnRlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2RGFzaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYThcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxWdmRhc2hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmFhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc21hbGxzbWlsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIzMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzbWFsbGZyb3duXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjMyMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJ1bXBlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNGZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxCdW1wZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjRlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ2VxcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNjdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxnZXFzbGFudFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlcXNsYW50Z3RyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE5NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGd0cnNpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxndHJhcHByb3hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTg2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ3RyZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJkN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdnZ1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZDlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxndHJsZXNzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI3N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGd0cmVxbGVzc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxndHJlcXFsZXNzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE4Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGVxY2lyY1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjaXJjZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjU3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHJpYW5nbGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI1Y1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRoaWNrc2ltXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIzY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRoaWNrYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1cHNldGVxcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhYzZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxTdXBzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3FzdXBzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY2N1cmx5ZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjdkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY3VybHllcXN1Y2NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmRmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VjY3NpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyN2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdWNjYXBwcm94XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmFiOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnRyaWFuZ2xlcmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmIzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHJpYW5nbGVyaWdodGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXFZkYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNob3J0bWlkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNob3J0cGFyYWxsZWxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmV0d2VlblwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxwaXRjaGZvcmtcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQ0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmFycHJvcHRvXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJsYWNrdHJpYW5nbGVsZWZ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjVjMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRoZXJlZm9yZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiYWNrZXBzaWxvblwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMGRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxibGFja3RyaWFuZ2xlcmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyNWI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmVjYXVzZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMzVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsbGxlc3NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZ2dndHJcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGhkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJoZFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlcXNpbVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxKb2luXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxEb3RlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNTFcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFNUyBCaW5hcnkgT3BlcmF0b3JzXG4gICAgICAgIFwiXFxcXGRvdHBsdXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjE0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc21hbGxzZXRtaW51c1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxDYXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcQ3VwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJkM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvdWJsZWJhcndlZGdlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmE1ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJveG1pbnVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJveHBsdXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjllXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGl2aWRlb250aW1lc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsdGltZXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccnRpbWVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnR0aHJlZXRpbWVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJpZ2h0dGhyZWV0aW1lc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyY2NcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjdXJseXdlZGdlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGN1cmx5dmVlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNsZWRkYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5ZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNsZWRhc3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjliXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2VudGVyZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGludGVyY2FsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvdWJsZWNhcFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyZDJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkb3VibGVjdXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYm94dGltZXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmEwXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBTVMgQXJyb3dzXG4gICAgICAgIFwiXFxcXGRhc2hyaWdodGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFlMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRhc2hsZWZ0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWUwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVmdGxlZnRhcnJvd3NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWM3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVmdHJpZ2h0YXJyb3dzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXExsZWZ0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWRhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHdvaGVhZGxlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsZWZ0YXJyb3d0YWlsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFhMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxvb3BhcnJvd2xlZnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWFiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVmdHJpZ2h0aGFycG9vbnNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWNiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY3VydmVhcnJvd2xlZnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWI2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2lyY2xlYXJyb3dsZWZ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXExzaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxYjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx1cHVwYXJyb3dzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHVwaGFycG9vbmxlZnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWJmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZG93bmhhcnBvb25sZWZ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG11bHRpbWFwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnRyaWdodHNxdWlnYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWFkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmlnaHRyaWdodGFycm93c1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxYzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxyaWdodGxlZnRhcnJvd3NcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHdvaGVhZHJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWEwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmlnaHRhcnJvd3RhaWxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWEzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbG9vcGFycm93cmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWFjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY3VydmVhcnJvd3JpZ2h0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNsZWFycm93cmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcUnNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvd25kb3duYXJyb3dzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFjYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHVwaGFycG9vbnJpZ2h0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFiZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRvd25oYXJwb29ucmlnaHRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWMyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmlnaHRzcXVpZ2Fycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFkZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlYWRzdG9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWRkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcUnJpZ2h0YXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWRiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmVzdHJpY3Rpb25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWJlXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIwMThcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFwkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCIkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcJVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiJVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXF9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIl9cIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxhbmdsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGluZnR5XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjFlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHJpbWVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIwMzJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0cmlhbmdsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXEdhbW1hXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMzkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcRGVsdGFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzOTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxUaGV0YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDM5OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXExhbWJkYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDM5YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXFhpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMzllXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcUGlcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxTaWdtYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNhM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXFVwc2lsb25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxQaGlcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYTZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxQc2lcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYThcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxPbWVnYVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNhOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5lZ1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBhY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxub3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0b3BcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYTRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxib3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlbXB0eXNldFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcm5vdGhpbmdcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGFscGhhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2IxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmV0YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdhbW1hXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2IzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGVsdGFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYjRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlcHNpbG9uXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2Y1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcemV0YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGV0YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRoZXRhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2I4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaW90YVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGthcHBhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2JhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGFtYmRhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2JiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbXVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxudVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNiZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHhpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2JlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb21pY3JvblwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwib1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHBpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2MwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmhvXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2MxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc2lnbWFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0YXVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx1cHNpbG9uXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2M1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccGhpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2Q1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2hpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2M3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccHNpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2M4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb21lZ2FcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzYzlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJlcHNpbG9uXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2I1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmFydGhldGFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJtYXRob3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAzZDFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx2YXJwaVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNkNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnJob1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm1hdGhvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDNmMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZhcnNpZ21hXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2MyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmFycGhpXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwM2M2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIqXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIitcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIi1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNkb3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNpcmNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRpdlwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMGY3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccG1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBiMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHRpbWVzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwZDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjYXBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGN1cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjJhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc2V0bWludXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxhbmRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxvclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcd2VkZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZlZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3VyZFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIxYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiKFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIltcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcGVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGFuZ2xlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BlblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyN2U4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbHZlcnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcGVuXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIilcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJjbG9zZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCI/XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiY2xvc2VcIlxuICAgICAgICB9LFxuICAgICAgICBcIiFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJjbG9zZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJhbmdsZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI3ZTlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxydmVydFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIj1cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIlxuICAgICAgICB9LFxuICAgICAgICBcIjxcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIlxuICAgICAgICB9LFxuICAgICAgICBcIj5cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIlxuICAgICAgICB9LFxuICAgICAgICBcIjpcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxhcHByb3hcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNvbmdcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI0NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxnZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdldHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGluXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMDhcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxub3RpblwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3Vic2V0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyODJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdXBzZXRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4M1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1YnNldGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyODZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxzdXBzZXRlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbnN1YnNldGVxXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5zdXBzZXRlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyODlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxtb2RlbHNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJhOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlZnRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTkwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2NFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjY0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI2MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5lcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjYwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmlnaHRhcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdG9cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJyZWxcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjE5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG5nZXFcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInJlbFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjcxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbmxlcVwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicmVsXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyNzBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFwhXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwic3BhY2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXCBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIn5cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFwsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwic3BhY2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXDpcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcO1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInNwYWNpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxlbnNwYWNlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwic3BhY2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHFxdWFkXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwic3BhY2luZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHF1YWRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3BhY2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIixcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJwdW5jdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiO1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInB1bmN0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY29sb25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJwdW5jdFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCI6XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmFyd2VkZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJhbXNcIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJiY1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZlZWJhclwiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb2RvdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb3BsdXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjI5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXG90aW1lc1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjk3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccGFydGlhbFwiOntcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcb3NsYXNoXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyOThcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxjaXJjbGVkY2lyY1wiOiB7XG4gICAgICAgICAgICBmb250OiBcImFtc1wiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjlhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYm94ZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwiYW1zXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWd0cmlhbmdsZXVwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1YjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWd0cmlhbmdsZWRvd25cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJiaW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjViZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRhZ2dlclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMDIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZGlhbW9uZFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmM0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcc3RhclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImJpblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmM2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdHJpYW5nbGVsZWZ0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1YzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0cmlhbmdsZXJpZ2h0XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYmluXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTI1YjlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx7XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BlblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJ7XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcfVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIn1cIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsYnJhY2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcGVuXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIntcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxyYnJhY2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJjbG9zZVwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJ9XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcbGJyYWNrXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BlblwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJbXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxccmJyYWNrXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiY2xvc2VcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxmbG9vclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wZW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjMwYVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJmbG9vclwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImNsb3NlXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIzMGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxsY2VpbFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wZW5cIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjMwOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHJjZWlsXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiY2xvc2VcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjMwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJhY2tzbGFzaFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFxcXFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwifFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyM1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZlcnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx8XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjI1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcVmVydFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHVwYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxVcGFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWQxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcZG93bmFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMTkzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcRG93bmFycm93XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMWQzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdXBkb3duYXJyb3dcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIxOTVcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxVcGRvd25hcnJvd1wiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcInRleHRvcmRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjFkNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNvcHJvZFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWd2ZWVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmMxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmlnd2VkZ2VcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmMwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmlndXBsdXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTA0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmlnY2FwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJjMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ2N1cFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyYzNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxpbnRcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaW50b3BcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMjJiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcaWludFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMmNcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxpaWludFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMmRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxwcm9kXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIwZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHN1bVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIyMTFcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxiaWdvdGltZXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTAyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmlnb3BsdXNcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYXRoXCIsXG4gICAgICAgICAgICBncm91cDogXCJvcFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyYTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmlnb2RvdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1hdGhcIixcbiAgICAgICAgICAgIGdyb3VwOiBcIm9wXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTJhMDBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxvaW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGJpZ3NxY3VwXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MmEwNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHNtYWxsaW50XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWF0aFwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwib3BcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjIyYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGxkb3RzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwicHVuY3RcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjAyNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGNkb3RzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiaW5uZXJcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJlZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGRkb3RzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiaW5uZXJcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MjJmMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXHZkb3RzXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUyMmVlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYWN1dGVcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJhY2NlbnRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDBiNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGdyYXZlXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwNjBcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkZG90XCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYThcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFx0aWxkZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMDdlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcYmFyXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxicmV2ZVwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMmQ4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcY2hlY2tcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJhY2NlbnRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDJjN1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiXFxcXGhhdFwiOiB7XG4gICAgICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgICAgIGdyb3VwOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgcmVwbGFjZTogXCJcXHUwMDVlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJcXFxcdmVjXCI6IHtcbiAgICAgICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICAgICAgZ3JvdXA6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTIwZDdcIlxuICAgICAgICB9LFxuICAgICAgICBcIlxcXFxkb3RcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJhY2NlbnRcIixcbiAgICAgICAgICAgIHJlcGxhY2U6IFwiXFx1MDJkOVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwidGV4dFwiOiB7XG4gICAgICAgIFwiXFxcXCBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIiBcIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9LFxuICAgICAgICBcIn5cIjoge1xuICAgICAgICAgICAgZm9udDogXCJtYWluXCIsXG4gICAgICAgICAgICBncm91cDogXCJzcGFjaW5nXCIsXG4gICAgICAgICAgICByZXBsYWNlOiBcIlxcdTAwYTBcIlxuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gVGhlcmUgYXJlIGxvdHMgb2Ygc3ltYm9scyB3aGljaCBhcmUgdGhlIHNhbWUsIHNvIHdlIGFkZCB0aGVtIGluIGFmdGVyd2FyZHMuXG5cbi8vIEFsbCBvZiB0aGVzZSBhcmUgdGV4dG9yZHMgaW4gbWF0aCBtb2RlXG52YXIgbWF0aFRleHRTeW1ib2xzID0gXCIwMTIzNDU2Nzg5L0AuXFxcIlwiO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRoVGV4dFN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2ggPSBtYXRoVGV4dFN5bWJvbHMuY2hhckF0KGkpO1xuICAgIHN5bWJvbHMubWF0aFtjaF0gPSB7XG4gICAgICAgIGZvbnQ6IFwibWFpblwiLFxuICAgICAgICBncm91cDogXCJ0ZXh0b3JkXCJcbiAgICB9O1xufVxuXG4vLyBBbGwgb2YgdGhlc2UgYXJlIHRleHRvcmRzIGluIHRleHQgbW9kZVxudmFyIHRleHRTeW1ib2xzID0gXCIwMTIzNDU2Nzg5YCFAKigpLT0rW10nXFxcIjs6Py8uLFwiO1xuZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0U3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaCA9IHRleHRTeW1ib2xzLmNoYXJBdChpKTtcbiAgICBzeW1ib2xzLnRleHRbY2hdID0ge1xuICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiXG4gICAgfTtcbn1cblxuLy8gQWxsIG9mIHRoZXNlIGFyZSB0ZXh0b3JkcyBpbiB0ZXh0IG1vZGUsIGFuZCBtYXRob3JkcyBpbiBtYXRoIG1vZGVcbnZhciBsZXR0ZXJzID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG5mb3IgKHZhciBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2ggPSBsZXR0ZXJzLmNoYXJBdChpKTtcbiAgICBzeW1ib2xzLm1hdGhbY2hdID0ge1xuICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgZ3JvdXA6IFwibWF0aG9yZFwiXG4gICAgfTtcbiAgICBzeW1ib2xzLnRleHRbY2hdID0ge1xuICAgICAgICBmb250OiBcIm1haW5cIixcbiAgICAgICAgZ3JvdXA6IFwidGV4dG9yZFwiXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzeW1ib2xzO1xuIiwiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYSBsaXN0IG9mIHV0aWxpdHkgZnVuY3Rpb25zIHdoaWNoIGFyZSB1c2VmdWwgaW4gb3RoZXJcbiAqIGZpbGVzLlxuICovXG5cbi8qKlxuICogUHJvdmlkZSBhbiBgaW5kZXhPZmAgZnVuY3Rpb24gd2hpY2ggd29ya3MgaW4gSUU4LCBidXQgZGVmZXJzIHRvIG5hdGl2ZSBpZlxuICogcG9zc2libGUuXG4gKi9cbnZhciBuYXRpdmVJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG52YXIgaW5kZXhPZiA9IGZ1bmN0aW9uKGxpc3QsIGVsZW0pIHtcbiAgICBpZiAobGlzdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgbGlzdC5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSB7XG4gICAgICAgIHJldHVybiBsaXN0LmluZGV4T2YoZWxlbSk7XG4gICAgfVxuICAgIHZhciBpID0gMCwgbCA9IGxpc3QubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChsaXN0W2ldID09PSBlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybiB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgY29udGFpbmVkIGluIGEgbGlzdFxuICovXG52YXIgY29udGFpbnMgPSBmdW5jdGlvbihsaXN0LCBlbGVtKSB7XG4gICAgcmV0dXJuIGluZGV4T2YobGlzdCwgZWxlbSkgIT09IC0xO1xufTtcblxuLy8gaHlwaGVuYXRlIGFuZCBlc2NhcGUgYWRhcHRlZCBmcm9tIEZhY2Vib29rJ3MgUmVhY3QgdW5kZXIgQXBhY2hlIDIgbGljZW5zZVxuXG52YXIgdXBwZXJjYXNlID0gLyhbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UodXBwZXJjYXNlLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIEVTQ0FQRV9MT09LVVAgPSB7XG4gIFwiJlwiOiBcIiZhbXA7XCIsXG4gIFwiPlwiOiBcIiZndDtcIixcbiAgXCI8XCI6IFwiJmx0O1wiLFxuICBcIlxcXCJcIjogXCImcXVvdDtcIixcbiAgXCInXCI6IFwiJiN4Mjc7XCJcbn07XG5cbnZhciBFU0NBUEVfUkVHRVggPSAvWyY+PFwiJ10vZztcblxuZnVuY3Rpb24gZXNjYXBlcihtYXRjaCkge1xuICByZXR1cm4gRVNDQVBFX0xPT0tVUFttYXRjaF07XG59XG5cbi8qKlxuICogRXNjYXBlcyB0ZXh0IHRvIHByZXZlbnQgc2NyaXB0aW5nIGF0dGFja3MuXG4gKlxuICogQHBhcmFtIHsqfSB0ZXh0IFRleHQgdmFsdWUgdG8gZXNjYXBlLlxuICogQHJldHVybiB7c3RyaW5nfSBBbiBlc2NhcGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHRleHQpIHtcbiAgcmV0dXJuIChcIlwiICsgdGV4dCkucmVwbGFjZShFU0NBUEVfUkVHRVgsIGVzY2FwZXIpO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgYSBET00gZWxlbWVudCBpbiBhbGwgc3VwcG9ydGVkXG4gKiBicm93c2Vycy4gTm90ZSB0aGF0IHdlIGRvbid0IGRlZmluZSB0aGlzIGlmIHRoZXJlIGlzIG5vIGRvY3VtZW50LlxuICovXG52YXIgc2V0VGV4dENvbnRlbnQ7XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHRlc3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaWYgKFwidGV4dENvbnRlbnRcIiBpbiB0ZXN0Tm9kZSkge1xuICAgICAgICBzZXRUZXh0Q29udGVudCA9IGZ1bmN0aW9uKG5vZGUsIHRleHQpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRleHRDb250ZW50ID0gZnVuY3Rpb24obm9kZSwgdGV4dCkge1xuICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNsZWFyIGEgbm9kZS5cbiAqL1xuZnVuY3Rpb24gY2xlYXJOb2RlKG5vZGUpIHtcbiAgICBzZXRUZXh0Q29udGVudChub2RlLCBcIlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY29udGFpbnM6IGNvbnRhaW5zLFxuICAgIGVzY2FwZTogZXNjYXBlLFxuICAgIGh5cGhlbmF0ZTogaHlwaGVuYXRlLFxuICAgIGluZGV4T2Y6IGluZGV4T2YsXG4gICAgc2V0VGV4dENvbnRlbnQ6IHNldFRleHRDb250ZW50LFxuICAgIGNsZWFyTm9kZTogY2xlYXJOb2RlXG59O1xuIiwiLyoqIEBmbG93ICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBnZXRSZWxvY2F0YWJsZShyZSkge1xuICAvLyBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIHVzZSBhIFdlYWtNYXAgaW5zdGVhZCBvZiBhbiBleHBhbmRvLlxuICBpZiAoIXJlLl9fbWF0Y2hBdFJlbG9jYXRhYmxlKSB7XG4gICAgLy8gRGlzanVuY3Rpb25zIGFyZSB0aGUgbG93ZXN0LXByZWNlZGVuY2Ugb3BlcmF0b3IsIHNvIHdlIGNhbiBtYWtlIGFueVxuICAgIC8vIHBhdHRlcm4gbWF0Y2ggdGhlIGVtcHR5IHN0cmluZyBieSBhcHBlbmRpbmcgYHwoKWAgdG8gaXQ6XG4gICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXBhdHRlcm5zXG4gICAgdmFyIHNvdXJjZSA9IHJlLnNvdXJjZSArIFwifCgpXCI7XG5cbiAgICAvLyBXZSBhbHdheXMgbWFrZSB0aGUgbmV3IHJlZ2V4IGdsb2JhbC5cbiAgICB2YXIgZmxhZ3MgPSBcImdcIiArIChyZS5pZ25vcmVDYXNlID8gXCJpXCIgOiBcIlwiKSArIChyZS5tdWx0aWxpbmUgPyBcIm1cIiA6IFwiXCIpICsgKHJlLnVuaWNvZGUgPyBcInVcIiA6IFwiXCIpXG4gICAgLy8gc3RpY2t5ICgvLi4uL3kpIGRvZXNuJ3QgbWFrZSBzZW5zZSBpbiBjb25qdW5jdGlvbiB3aXRoIG91ciByZWxvY2F0aW9uXG4gICAgLy8gbG9naWMsIHNvIHdlIGlnbm9yZSBpdCBoZXJlLlxuICAgIDtcblxuICAgIHJlLl9fbWF0Y2hBdFJlbG9jYXRhYmxlID0gbmV3IFJlZ0V4cChzb3VyY2UsIGZsYWdzKTtcbiAgfVxuICByZXR1cm4gcmUuX19tYXRjaEF0UmVsb2NhdGFibGU7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQXQocmUsIHN0ciwgcG9zKSB7XG4gIGlmIChyZS5nbG9iYWwgfHwgcmUuc3RpY2t5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWF0Y2hBdCguLi4pOiBPbmx5IG5vbi1nbG9iYWwgcmVnZXhlcyBhcmUgc3VwcG9ydGVkXCIpO1xuICB9XG4gIHZhciByZWxvYyA9IGdldFJlbG9jYXRhYmxlKHJlKTtcbiAgcmVsb2MubGFzdEluZGV4ID0gcG9zO1xuICB2YXIgbWF0Y2ggPSByZWxvYy5leGVjKHN0cik7XG4gIC8vIExhc3QgY2FwdHVyaW5nIGdyb3VwIGlzIG91ciBzZW50aW5lbCB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSByZWdleFxuICAvLyBtYXRjaGVkIGF0IHRoZSBnaXZlbiBsb2NhdGlvbi5cbiAgaWYgKG1hdGNoW21hdGNoLmxlbmd0aCAtIDFdID09IG51bGwpIHtcbiAgICAvLyBPcmlnaW5hbCByZWdleCBtYXRjaGVkLlxuICAgIG1hdGNoLmxlbmd0aCA9IG1hdGNoLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hBdDsiXX0=
