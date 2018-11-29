"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = require("../src/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body, h1, html, render, tree;

global.$p = function () {
  return console.error(...arguments);
};

({
  render,
  html,
  body,
  h1
} = _index.HTML);
tree = html([body([h1("Hello, World!")])]);

_assert.default.equal("<html><body><h1>Hello, World!</h1></body></html>", render(tree));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keW9kZXIvcmVwb3MvcGFuZGEtdmRvbS90ZXN0L2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBREEsSUFBQSxJQUFBLEVBQUEsRUFBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQTs7QUFFQSxNQUFNLENBQU4sRUFBQSxHQUFZLFlBQUE7U0FBRyxPQUFPLENBQVAsS0FBQSxDQUFjLEdBQWQsU0FBQSxDO0FBQUgsQ0FBWjs7QUFFQSxDQUFBO0FBQUEsRUFBQSxNQUFBO0FBQUEsRUFBQSxJQUFBO0FBQUEsRUFBQSxJQUFBO0FBQUEsRUFBQTtBQUFBLElBQUEsV0FBQTtBQUVBLElBQUEsR0FBTyxJQUFBLENBQUssQ0FDVixJQUFBLENBQUssQ0FDSCxFQUFBLENBRkcsZUFFSCxDQURHLENBQUwsQ0FEVSxDQUFMLENBQVA7O0FBTUEsZ0JBQUEsS0FBQSxDQUFBLGtEQUFBLEVBQ0UsTUFBQSxDQURGLElBQ0UsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiXG5pbXBvcnQge0hUTUx9IGZyb20gXCIuLi9zcmMvaW5kZXhcIlxuZ2xvYmFsLiRwID0gLT4gY29uc29sZS5lcnJvciBhcmd1bWVudHMuLi5cblxue3JlbmRlciwgaHRtbCwgYm9keSwgaDF9ID0gSFRNTFxuXG50cmVlID0gaHRtbCBbXG4gIGJvZHkgW1xuICAgIGgxIFwiSGVsbG8sIFdvcmxkIVwiXG4gIF1cbl1cblxuYXNzZXJ0LmVxdWFsIFwiPGh0bWw+PGJvZHk+PGgxPkhlbGxvLCBXb3JsZCE8L2gxPjwvYm9keT48L2h0bWw+XCIsXG4gIHJlbmRlciB0cmVlXG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=/Users/dyoder/repos/panda-vdom/test/index.coffee