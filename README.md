# Panda VDOM

VDOM helpers for writing direct VDOM-based templates. Based on the excellent [diffHTML][1] library behind the scenes.

[1]:https://github.com/tbranyen/diffhtml

```coffee
import {HTML} from "../src/index"
{render, html, body, h1} = HTML

assert.equal "<html><body><h1>Hello, World!</h1></body></html>",
  render html [
    body [
      h1 "Hello, World!"
    ]
  ]
```

## Installation

`npm i -s panda-vdom`
