# html-postcss

![html-postcss](html-postcss.gif)

Process CSS within the `<style>` tags and inline `style=` attributes in your
HTML using PostCSS.

## Usage

```js
var HTMLPostCSS = require('html-postcss');

var processor = new HTMLPostCSS(plugins);
processor.process(htmlString, cheerioOpts, postcssOpts); //=> '<html>...</html>'
```
