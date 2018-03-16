import assert from "assert"
import {HTML} from "../src/index"
global.$p = -> console.error arguments...

{render, html, body, h1} = HTML

tree = html [
  body [
    h1 "Hello, World!"
  ]
]

assert.equal "<html><body><h1>Hello, World!</h1></body></html>",
  render tree
