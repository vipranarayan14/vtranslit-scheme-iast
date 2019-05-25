# vTranslit-scheme-Iast

IAST scheme for [vTranslit](https://github.com/vipranarayan14/vtranslit).

## Installation

```bash
npm install vtranslit-scheme-iast 
```

## Node usage

```js
const { vTranslit } = require('vtranslit');
const { vTranslitSchemeIast } = require('vtranslit-scheme-iast');

const vtranslit = vTranslit([
  vTranslitSchemeIast
]);
```

## Browser usage

```html
<script src="path/to/vtranslit.js"></script>
<script src="path/to/vtranslit-scheme-iast.js"></script>
```

```js
const { vTranslit, vTranslitSchemeIast } = window;

const vtranslit = vTranslit([
  vTranslitSchemeIast
]);
```
