"use strict";

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder();

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _index = require("../src/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body, h1, html, render, tree;

global.$p = function () {
  return console.error(...arguments);
};

({ render, html, body, h1 } = _index.HTML);

tree = html([body([h1("Hello, World!")])]);

_powerAssert2.default.equal("<html><body><h1>Hello, World!</h1></body></html>", _rec._expr(_rec._capt(render(_rec._capt(tree, "arguments/1/arguments/0")), "arguments/1"), {
  content: "assert.equal(\"<html><body><h1>Hello, World!</h1></body></html>\", render(tree))",
  filepath: "index.coffee",
  line: 13
}));