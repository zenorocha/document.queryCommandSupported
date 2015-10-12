# document.queryCommandSupported

[![Build Status](http://img.shields.io/travis/zenorocha/document.queryCommandSupported/master.svg?style=flat)](https://travis-ci.org/zenorocha/document.queryCommandSupported)

Polyfill for [`document.queryCommandSupported`](https://developer.mozilla.org/en-US/docs/Web/API/Document/queryCommandSupported) that fixes [known bugs on Gecko](https://hacks.mozilla.org/2015/09/flash-free-clipboard-for-the-web/) and [Blink](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands).

> Note: Only `copy` and `cut` are polyfill'ed. Any other argument will be executed using the native function.

## Install

You can get it on npm.

```
npm install query-command-supported --save
```

Or bower, too.

```
bower install query-command-supported --save
```

If you're not into package management, just [download a ZIP](https://github.com/zenorocha/document.queryCommandSupported/archive/master.zip) file.

## Usage

First, include the script located on the `dist` folder.

```html
<script src="dist/queryCommandSupported.min.js"></script>
```

Then, run the `queryCommandSupported` function as you would normally do.

```js
var isSupported = document.queryCommandSupported('copy');
```

This will return a boolean that indicates whether or not the command is supported by the browser.

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
