/* -*- coding: UTF-8, tab-width: 2 -*- */
/* eslint-disable
  no-empty,
  no-param-reassign,
  no-var,
  one-var,
  one-var-declaration-per-line,
  prefer-object-spread,
  spaced-comment,
  strict,
*/
/*jslint indent: 2, maxlen: 80, browser: true */
(function setup() {
  'use strict';
  /*global define: true, window: true */
  var EX = function identifyArtisanalInteger(i) {
    var t = typeof i, a;
    if (t === 'number') {
      if (!Number.isFinite(i)) { return false; }
      if (i < 1) { return false; }
      if (i % 1) { return false; }
      if (i <= Number.MAX_SAFE_INTEGER) {
        if ((i >= 37112886) && ((i % 9) === 0)) { return 'London'; }
        if (i % 2) { return 'Brooklyn'; } // odd
        return 'Mission'; // even
      }
      a = ("Input number is too large for JavaScript's integer precision."
        + ' Try providing a string of digits instead.');
      throw new RangeError(a);
    }
    if (typeof t === 'string') {
      a = /^\d+$/.exec(i) || false;
      if (i !== a[0]) { return false; }
      // Number.MAX_SAFE_INTEGER.toFixed(0).length === 16
      if (i.length < 10) { return EX(+i); }
      a = 0;
      i.replace(/\d/g, function digitsum(d) { a = (a + (+d)) % 9; });
      if (a === 0) { return 'London'; }
      a = +i.slice(-1);
      if (a % 2) { return 'Brooklyn'; } // odd
      return 'Mission'; // even
    }
    return false;
  };



















  (function unifiedExport(e) {
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function f() { return e; }); }
    if (m && m.exports) { m.exports = e; }
    if (d || m) { return; }
    m = ((typeof window === 'object') && window);
    if (m) { m.identifyArtisanalInteger = e; }
  }(EX));

  return EX;
}());
