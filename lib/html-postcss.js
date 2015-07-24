'use strict';

var cheerio = require('cheerio');
var postcss = require('postcss');

var VERSION = require('../package.json').version;

var HTMLPostCSS = function(plugins) {
  this.version = VERSION;
  this.plugins = plugins || [];
  this.processor = postcss(this.plugins);
  return this;
};

HTMLPostCSS.prototype.process = function(htmlString, cheerioOpts, postcssOpts) {
  var $ = cheerio.load(htmlString, cheerioOpts);
  var processor = this.processor;

  $('style').contents().each(function(index, style) {
    var prefixed = processor.process(style.data, postcssOpts).css;
    style.data = prefixed;
  });

  $('[style]').each(function(index, element) {
    var prefixed = processor.process(element.attribs.style, postcssOpts).css;
    element.attribs.style = prefixed;
  });

  return $.html();
};

module.exports = HTMLPostCSS;
