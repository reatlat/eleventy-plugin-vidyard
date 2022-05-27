# eleventy-plugin-vidyard
[![npm](https://img.shields.io/npm/v/eleventy-plugin-vidyard.svg)](https://npmjs.com/package/eleventy-plugin-vidyard)
[![npm](https://img.shields.io/npm/dt/eleventy-plugin-vidyard.svg)](https://npmjs.com/package/eleventy-plugin-vidyard)
[![license](https://img.shields.io/npm/l/eleventy-plugin-vidyard.svg)](https://npmjs.com/package/eleventy-plugin-vidyard)

An Eleventy [shortcode](https://www.11ty.dev/docs/shortcodes/), allows to be embedded [Vidyard](https://www.vidyard.com/) into templates by using Vidyard API v4.

## Installation
Install the plugin from [npm](https://www.npmjs.com/package/eleventy-plugin-vidyard):

```
npm install eleventy-plugin-vidyard --save-dev
```


Add it to your [Eleventy Config](https://www.11ty.dev/docs/config/) file:

```js
const eleventyPluginVidyard = require('eleventy-plugin-vidyard');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPluginVidyard);
};
```


Advanced usage:

```js
const eleventyPluginVidyard = require('eleventy-plugin-vidyard');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPluginVidyard, {
        script: true,
        class: 'vidyard-player-embed',
        version: 4,
        type: 'inline'
    });
};
```


## What does it do?
The plugin turns [11ty shortcodes](https://www.11ty.dev/docs/shortcodes/) like this:

```nunjucks
{% vidyard "https://share.vidyard.com/watch/Cse5Fqy1CpUWqYdtikKrFy?embeded=true" %}
```

into HTML code like this:

```html
<script src="https://play.vidyard.com/embed/v4.js" type="text/javascript" async></script>
<img style="max-width: 100%;"
     class="vidyard-player-embed"
     src="https://play.vidyard.com/Cse5Fqy1CpUWqYdtikKrFy.jpg"
     data-uuid="Cse5Fqy1CpUWqYdtikKrFy"
     data-v="4"
     data-type="inline" />
        
```


## Custom Usage
Vidyard documentations says, the script tag should live in the head of your page if at all possible.

In that case, we can disable rendering script within embedded player, and place main script on the head of website manually

```html
<head>
    ...
    <!-- The script tag should live in the head of your page if at all possible -->
    <script src="https://play.vidyard.com/embed/v4.js" type="text/javascript" async></script>
    ...
</head>
```

and set config file to:

```js
module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPluginVidyard, {
        script: false
    });
};
```

or by passing options to shortcode directly

```nunjucks
{% vidyard "https://share.vidyard.com/watch/Cse5Fqy1CpUWqYdtikKrFy?embeded=true", {
    script: false,
    class: 'vidyard-player-embed my-custom-class',
    version: 4,
    type: 'inline'
} %}
```


## Contributing
If you notice an issue, feel free to [open an issue](https://github.com/reatlat/eleventy-plugin-vidyard/issues).

1. Fork this repo
2. Clone `git clone git@github.com:reatlat/eleventy-plugin-vidyard.git`
3. Install dependencies `npm install`
4. Build `npm run build`
5. Serve locally `npm run dev`


## License
The code is available under the [MIT license](LICENSE).


## May the 4th be with you
<img src="https://cdn.sunnypixels.io/imgs/yoda-close-up.jpg" alt="May 4th be with you" width="280">
