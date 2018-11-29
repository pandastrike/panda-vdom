var body, h1, html, render, tree;
import assert from "assert";
import { HTML } from "../src/index";

global.$p = function () {
  return console.error(...arguments);
};

({
  render,
  html,
  body,
  h1
} = HTML);
tree = html([body([h1("Hello, World!")])]);
assert.equal("<html><body><h1>Hello, World!</h1></body></html>", render(tree));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keW9kZXIvcmVwb3MvcGFuZGEtdmRvbS90ZXN0L2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLElBQUEsRUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxJQUFBO0FBQUEsT0FBQSxNQUFBLE1BQUEsUUFBQTtBQUNBLFNBQUEsSUFBQSxRQUFBLGNBQUE7O0FBQ0EsTUFBTSxDQUFOLEVBQUEsR0FBWSxZQUFBO1NBQUcsT0FBTyxDQUFQLEtBQUEsQ0FBYyxHQUFkLFNBQUEsQztBQUFILENBQVo7O0FBRUEsQ0FBQTtBQUFBLEVBQUEsTUFBQTtBQUFBLEVBQUEsSUFBQTtBQUFBLEVBQUEsSUFBQTtBQUFBLEVBQUE7QUFBQSxJQUFBLElBQUE7QUFFQSxJQUFBLEdBQU8sSUFBQSxDQUFLLENBQ1YsSUFBQSxDQUFLLENBQ0gsRUFBQSxDQUZHLGVBRUgsQ0FERyxDQUFMLENBRFUsQ0FBTCxDQUFQO0FBTUEsTUFBTSxDQUFOLEtBQUEsQ0FBQSxrREFBQSxFQUNFLE1BQUEsQ0FERixJQUNFLENBREYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIlxuaW1wb3J0IHtIVE1MfSBmcm9tIFwiLi4vc3JjL2luZGV4XCJcbmdsb2JhbC4kcCA9IC0+IGNvbnNvbGUuZXJyb3IgYXJndW1lbnRzLi4uXG5cbntyZW5kZXIsIGh0bWwsIGJvZHksIGgxfSA9IEhUTUxcblxudHJlZSA9IGh0bWwgW1xuICBib2R5IFtcbiAgICBoMSBcIkhlbGxvLCBXb3JsZCFcIlxuICBdXG5dXG5cbmFzc2VydC5lcXVhbCBcIjxodG1sPjxib2R5PjxoMT5IZWxsbywgV29ybGQhPC9oMT48L2JvZHk+PC9odG1sPlwiLFxuICByZW5kZXIgdHJlZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=/Users/dyoder/repos/panda-vdom/test/index.coffee