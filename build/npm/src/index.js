"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVG = exports.HTML = exports.el = void 0;

var _diffhtml = require("diffhtml");

var _diffhtmlRenderToString = _interopRequireDefault(require("diffhtml-render-to-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML, SVG, el;
exports.el = el;
exports.SVG = SVG;
exports.HTML = HTML;
exports.HTML = HTML = {
  parse: function (s) {
    return [typeof _diffhtml.html === "function" ? (0, _diffhtml.html)(s) : void 0];
  },
  render: function (tree) {
    return (0, _diffhtmlRenderToString.default)(tree);
  }
};

exports.el = el = function (name) {
  return function (...rest) {
    return typeof _diffhtml.createTree === "function" ? (0, _diffhtml.createTree)(name, ...rest) : void 0;
  };
};

(function () {
  var i, len, results, tag, tags; // source: https://dev.w3.org/html5/html-author/#conforming-elements

  tags = "a abbr address area article aside audio b base bb bdo blockquote body br button canvas caption cite code col colgroup command datagrid datalist dd del details dfn dialog div dl dt em embed fieldset figure footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd label legend li link main map mark menu meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby samp script section select slot small source span strong style sub sup table tbody td textarea tfoot th thead time title tr ul var video".split(" ");
  results = [];

  for (i = 0, len = tags.length; i < len; i++) {
    tag = tags[i];
    results.push(HTML[tag] = el(tag));
  }

  return results;
})();

HTML.stylesheet = function (url) {
  return HTML.link({
    rel: "stylesheet",
    href: url
  });
};

exports.SVG = SVG = {};

(function () {
  var i, len, results, tag, tags; // source: https://www.w3.org/TR/SVG2/eltindex.html

  tags = "a altGlyph altGlyphDef altGlyphItem animate animateColor animateMotion animateTransform animation audio canvas circle clipPath color-profile cursor defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignObject g glyph glyphRef handler hatch hatchpath hkern iframe image line linearGradient listener marker mask mesh meshgradient meshpatch meshrow metadata missing-glyph mpath path pattern polygon polyline prefetch radialGradient rect script set solidColor solidcolor stop style svg switch symbol tbreak text textArea textPath title tref tspan unknown use video view vkern".split(" ");
  results = [];

  for (i = 0, len = tags.length; i < len; i++) {
    tag = tags[i];
    results.push(SVG[tag] = el(tag));
  }

  return results;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keW9kZXIvcmVwb3MvcGFuZGEtdmRvbS9zcmMvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQURBLElBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxFQUFBOzs7O0FBR0EsZUFBQSxJQUFBLEdBQ0U7QUFBQSxFQUFBLEtBQUEsRUFBTyxVQUFBLENBQUEsRUFBQTtXQUFPLENBQUEsT0FBQSxjQUFBLEtBQUEsVUFBQSxHQUFFLG9CQUFNLENBQU4sQ0FBRixHQUFRLEtBQVIsQ0FBQSxDO0FBQWQsR0FBQTtBQUNBLEVBQUEsTUFBQSxFQUFRLFVBQUEsSUFBQSxFQUFBO1dBQVUscUNBQUEsSUFBQSxDO0FBQVY7QUFEUixDQURGOztBQUlBLGFBQUEsRUFBQSxHQUFLLFVBQUEsSUFBQSxFQUFBO1NBQ0gsVUFBQSxHQUFBLElBQUEsRUFBQTt3REFBYSwwQkFBWSxJQUFaLEVBQWtCLEdBQUEsSUFBbEIsQyxHQUFrQixLQUFBLEM7QUFBL0IsRztBQURHLENBQUw7O0FBR0csQ0FBQSxZQUFBO0FBRUQsTUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxDQUZDLEM7O0FBRUQsRUFBQSxJQUFBLEdBQU8sd2lCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQVA7QUFTbUIsRUFBQSxPQUFBLEdBQUEsRUFBQTs7QUFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsR0FBQSxHQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQTs7aUJBQW5CLElBQUssQ0FBTCxHQUFLLENBQUwsR0FBWSxFQUFBLENBQUEsR0FBQSxDO0FBQU87OztBQVhyQixDQUFHOztBQWFILElBQUksQ0FBSixVQUFBLEdBQWtCLFVBQUEsR0FBQSxFQUFBO1NBQ2hCLElBQUksQ0FBSixJQUFBLENBQVU7QUFBQSxJQUFBLEdBQUEsRUFBQSxZQUFBO0FBQW1CLElBQUEsSUFBQSxFQUFNO0FBQXpCLEdBQVYsQztBQURnQixDQUFsQjs7QUFHQSxjQUFBLEdBQUEsR0FBTSxFQUFOOztBQUVHLENBQUEsWUFBQTtBQUVELE1BQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsQ0FGQyxDOztBQUVELEVBQUEsSUFBQSxHQUFPLDI2QkFBQSxLQUFBLENBQUEsR0FBQSxDQUFQO0FBY2tCLEVBQUEsT0FBQSxHQUFBLEVBQUE7O0FBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLEdBQUEsR0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUE7O2lCQUFsQixHQUFJLENBQUosR0FBSSxDQUFKLEdBQVcsRUFBQSxDQUFBLEdBQUEsQztBQUFPOzs7QUFoQnBCLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVRyZWUsIGh0bWx9IGZyb20gXCJkaWZmaHRtbFwiXG5pbXBvcnQgcmVuZGVyVG9TdHJpbmcgZnJvbSBcImRpZmZodG1sLXJlbmRlci10by1zdHJpbmdcIlxuXG5IVE1MID1cbiAgcGFyc2U6IChzKSAtPiBbIGh0bWw/IHMgXVxuICByZW5kZXI6ICh0cmVlKSAtPiByZW5kZXJUb1N0cmluZyB0cmVlXG5cbmVsID0gKG5hbWUpIC0+XG4gIChyZXN0Li4uKSAtPiBjcmVhdGVUcmVlPyBuYW1lLCByZXN0Li4uXG5cbmRvIC0+XG4gICMgc291cmNlOiBodHRwczovL2Rldi53My5vcmcvaHRtbDUvaHRtbC1hdXRob3IvI2NvbmZvcm1pbmctZWxlbWVudHNcbiAgdGFncyA9IFwiYSBhYmJyIGFkZHJlc3MgYXJlYSBhcnRpY2xlIGFzaWRlIGF1ZGlvIGIgYmFzZSBiYiBiZG8gYmxvY2txdW90ZSBib2R5XG4gIGJyIGJ1dHRvbiBjYW52YXMgY2FwdGlvbiBjaXRlIGNvZGUgY29sIGNvbGdyb3VwIGNvbW1hbmQgZGF0YWdyaWQgZGF0YWxpc3QgZGRcbiAgZGVsIGRldGFpbHMgZGZuIGRpYWxvZyBkaXYgZGwgZHQgZW0gZW1iZWQgZmllbGRzZXQgZmlndXJlIGZvb3RlciBmb3JtIGgxIGgyIGgzXG4gIGg0IGg1IGg2IGhlYWQgaGVhZGVyIGhyIGh0bWwgaSBpZnJhbWUgaW1nIGlucHV0IGlucyBrYmQgbGFiZWwgbGVnZW5kIGxpIGxpbmtcbiAgbWFpbiBtYXAgbWFyayBtZW51IG1ldGEgbWV0ZXIgbmF2IG5vc2NyaXB0IG9iamVjdCBvbCBvcHRncm91cCBvcHRpb24gb3V0cHV0IHBcbiAgcGFyYW0gcHJlIHByb2dyZXNzIHEgcnAgcnQgcnVieSBzYW1wIHNjcmlwdCBzZWN0aW9uIHNlbGVjdCBzbG90IHNtYWxsIHNvdXJjZVxuICBzcGFuIHN0cm9uZyBzdHlsZSBzdWIgc3VwIHRhYmxlIHRib2R5IHRkIHRleHRhcmVhIHRmb290IHRoIHRoZWFkIHRpbWUgdGl0bGUgdHJcbiAgdWwgdmFyIHZpZGVvXCIuc3BsaXQgXCIgXCJcblxuICBIVE1MW3RhZ10gPSBlbCB0YWcgZm9yIHRhZyBpbiB0YWdzXG5cbkhUTUwuc3R5bGVzaGVldCA9ICh1cmwpIC0+XG4gIEhUTUwubGluayByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiB1cmxcblxuU1ZHID0ge31cblxuZG8gLT5cbiAgIyBzb3VyY2U6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcyL2VsdGluZGV4Lmh0bWxcbiAgdGFncyA9IFwiYSBhbHRHbHlwaCBhbHRHbHlwaERlZiBhbHRHbHlwaEl0ZW0gYW5pbWF0ZSBhbmltYXRlQ29sb3IgYW5pbWF0ZU1vdGlvblxuICBhbmltYXRlVHJhbnNmb3JtIGFuaW1hdGlvbiBhdWRpbyBjYW52YXMgY2lyY2xlIGNsaXBQYXRoIGNvbG9yLXByb2ZpbGUgY3Vyc29yXG4gIGRlZnMgZGVzYyBkaXNjYXJkIGVsbGlwc2UgZmVCbGVuZCBmZUNvbG9yTWF0cml4IGZlQ29tcG9uZW50VHJhbnNmZXJcbiAgZmVDb21wb3NpdGUgZmVDb252b2x2ZU1hdHJpeCBmZURpZmZ1c2VMaWdodGluZyBmZURpc3BsYWNlbWVudE1hcFxuICBmZURpc3RhbnRMaWdodCBmZURyb3BTaGFkb3cgZmVGbG9vZCBmZUZ1bmNBIGZlRnVuY0IgZmVGdW5jRyBmZUZ1bmNSXG4gIGZlR2F1c3NpYW5CbHVyIGZlSW1hZ2UgZmVNZXJnZSBmZU1lcmdlTm9kZSBmZU1vcnBob2xvZ3kgZmVPZmZzZXQgZmVQb2ludExpZ2h0XG4gIGZlU3BlY3VsYXJMaWdodGluZyBmZVNwb3RMaWdodCBmZVRpbGUgZmVUdXJidWxlbmNlIGZpbHRlciBmb250IGZvbnQtZmFjZVxuICBmb250LWZhY2UtZm9ybWF0IGZvbnQtZmFjZS1uYW1lIGZvbnQtZmFjZS1zcmMgZm9udC1mYWNlLXVyaSBmb3JlaWduT2JqZWN0IGdcbiAgZ2x5cGggZ2x5cGhSZWYgaGFuZGxlciBoYXRjaCBoYXRjaHBhdGggaGtlcm4gaWZyYW1lIGltYWdlIGxpbmUgbGluZWFyR3JhZGllbnRcbiAgbGlzdGVuZXIgbWFya2VyIG1hc2sgbWVzaCBtZXNoZ3JhZGllbnQgbWVzaHBhdGNoIG1lc2hyb3cgbWV0YWRhdGFcbiAgbWlzc2luZy1nbHlwaCBtcGF0aCBwYXRoIHBhdHRlcm4gcG9seWdvbiBwb2x5bGluZSBwcmVmZXRjaCByYWRpYWxHcmFkaWVudCByZWN0XG4gIHNjcmlwdCBzZXQgc29saWRDb2xvciBzb2xpZGNvbG9yIHN0b3Agc3R5bGUgc3ZnIHN3aXRjaCBzeW1ib2wgdGJyZWFrIHRleHRcbiAgdGV4dEFyZWEgdGV4dFBhdGggdGl0bGUgdHJlZiB0c3BhbiB1bmtub3duIHVzZSB2aWRlbyB2aWV3IHZrZXJuXCIuc3BsaXQgXCIgXCJcblxuICBTVkdbdGFnXSA9IGVsIHRhZyBmb3IgdGFnIGluIHRhZ3NcblxuZXhwb3J0IHtlbCwgSFRNTCwgU1ZHfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=/Users/dyoder/repos/panda-vdom/src/index.coffee