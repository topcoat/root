# Topcoat Root Element

[![Build Status](https://travis-ci.org/topcoat/root.svg?branch=master)](https://travis-ci.org/topcoat/root) [![npm version](https://badge.fury.io/js/topcoat-root.svg)](https://badge.fury.io/js/topcoat-root)

---

Root element with default fallbacks if css variables not set.

```css
html {
  font-size: var(base-font-size, 12px);
}

body {
  margin: 0;
  padding: 0;
  font-family: var(font-family, "Source Sans Pro", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif);
  font-weight: var(font-weight, 400);
  background: var(background--body, hsla(200, 2%, 30%, 1));
}

:focus {
  outline-color: transparent;
  outline-style: none;
}
```
