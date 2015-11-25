# html-postcss

[![Build Status](https://travis-ci.org/Rebelmail/html-postcss.svg?branch=master)](https://travis-ci.org/Rebelmail/html-postcss)
[![NPM version](https://badge.fury.io/js/html-postcss.png)](http://badge.fury.io/js/html-postcss)

![html-postcss](html-postcss.gif)

Process CSS within the `<style>` tags and inline `style=` attributes in your
HTML using PostCSS.

## Usage

```js
var HTMLPostCSS = require('html-postcss');

var processor = new HTMLPostCSS(plugins);
processor.process(htmlString, cheerioOpts, postcssOpts); //=> '<html>...</html>'
```
