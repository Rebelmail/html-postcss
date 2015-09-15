'use strict';

var postcss = require('postcss');
var sinon = require('sinon');
var expect = require('chai').expect;

var HTMLPostCSS = require('../');

describe('html-postcss', function() {
  describe('#process', function() {
    var transformerSpy = sinon.spy(function(tree) {
      return tree;
    });

    var spyPlugin = postcss.plugin('spy', function() {
      return transformerSpy;
    });

    var processor;

    beforeEach(function() {
      transformerSpy.reset();
      processor = new HTMLPostCSS([spyPlugin]);
    });

    it('processes the contents of style tags', function( ) {
      var htmlString = '<html><style>body { color: black; }</style><style>a { color: blue; }</style></html>';
      processor.process(htmlString);
      expect(transformerSpy.calledTwice).to.be.true;
    });

    it('processes the contents of style attributes', function() {
      var htmlString = '<html><h1 style="color: black">Hello</h1><h2 style="color: white">World</h2></html>';
      processor.process(htmlString);
      expect(transformerSpy.calledTwice).to.be.true;
    });

    it('can pass cheerio options', function() {
      var htmlString = '<HTML><BODY></BODY></HTML>';
      var expected = '<html><body></body></html>';
      var actual = processor.process(htmlString, { lowerCaseTags: true });
      expect(actual).to.equal(expected);
    });

    it('can pass postcss options', function() {
      var htmlString = '<html><style>body { color: black; }</style></html>';
      var actual = processor.process(htmlString, null, { map: true });
      expect(actual).to.contain('sourceMappingURL=');
    });
  });
});
