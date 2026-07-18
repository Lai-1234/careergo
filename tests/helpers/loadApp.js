"use strict";
// app.js is a browser script (no build step, loaded via <script> in employer-app.html).
// A handful of one-time module-init blocks near the top of the file register global
// event listeners guarded by a `window.__xyzReady` flag, e.g.:
//   if (!window.__empModalGlobalKeyReady) { window.__empModalGlobalKeyReady = true; document.addEventListener(...); }
// Those run at require-time. This stub gives them just enough of `window`/`document`/
// `localStorage` to execute as no-ops under Node, so the pure logic functions app.js
// exports (see the `module.exports` guard at the bottom of app.js) can be loaded and
// unit-tested without a real DOM. Nothing here changes browser behavior.
function loadApp() {
  if (typeof global.window === "undefined") global.window = {};
  if (typeof global.document === "undefined") {
    global.document = { addEventListener: () => {}, removeEventListener: () => {} };
  }
  if (typeof global.localStorage === "undefined") {
    const store = new Map();
    global.localStorage = {
      getItem: key => (store.has(key) ? store.get(key) : null),
      setItem: (key, value) => { store.set(key, String(value)); },
      removeItem: key => { store.delete(key); }
    };
  }
  delete require.cache[require.resolve("../../app.js")];
  return require("../../app.js");
}

module.exports = { loadApp };
