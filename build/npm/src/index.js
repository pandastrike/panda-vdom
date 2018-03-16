"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTML = undefined;

var _diffhtml = require("diffhtml");

var _diffhtmlRenderToString = require("diffhtml-render-to-string");

var _diffhtmlRenderToString2 = _interopRequireDefault(_diffhtmlRenderToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML, el, i, len, tag, tags;

// make it easy to process HTML string directly
exports.HTML = HTML = {
  parse: function (s) {
    return [typeof _diffhtml.html === "function" ? (0, _diffhtml.html)(s) : void 0];
  },
  render: function (tree) {
    return (0, _diffhtmlRenderToString2.default)(tree);
  }
};

el = function (name) {
  return function (...rest) {
    return typeof _diffhtml.createTree === "function" ? (0, _diffhtml.createTree)(name, ...rest) : void 0;
  };
};

// source: https://dev.w3.org/html5/html-author/#conforming-elements
tags = "a abbr address area article aside audio b base bb bdo blockquote body br button canvas caption cite code col colgroup command datagrid datalist dd del details dfn dialog div dl dt em embed fieldset figure footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd label legend li link map mark menu meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby samp script section select slot small source span strong style sub sup table tbody td textarea tfoot th thead time title tr ul var video".split(" ");

for (i = 0, len = tags.length; i < len; i++) {
  tag = tags[i];
  HTML[tag] = el(tag);
}

HTML.stylesheet = function (url) {
  return HTML.link({
    rel: "stylesheet",
    href: url
  });
};

exports.HTML = HTML;