# Shed
__Shed__ is the entire collection of [__Worker Tools__](https://workers.tools) under a single roof, which doubles as a complete web framework built for [Worker Runtimes](https://workers.js.org).

***

___Work In Progress___

***

## Tools
- 🧭 [__Worker Router__][router] --- Complete routing solution that works across CF Workers, Deno and Service Workers
- 🔋 [__Worker Middleware__][middleware] --- A suite of standalone HTTP server-side middleware with TypeScript support
- 📄 [__Worker HTML__][html] --- HTML templating and streaming response library
- 📦 __Storage Area__ --- Storage abstractions for [Cloudflare's KV][cloudflare-kv-storage] and [Deno][deno-kv-storage]
- 🆗 [__Response Creators__][response-creators] --- Factory functions for responses with pre-filled status and status text
- 🎏 [__Stream Response__][stream-response] --- Use async generators to build streaming responses for SSE, etc...
- 🥏 [__JSON Fetch__][json-fetch] --- Drop-in replacements for Fetch API classes with first class support for JSON.
- 🦑 [__JSON Stream__][json-stream] --- Utilities for working with streaming JSON.
- 🍪 [__Request Cookie Store__][request-cookie-store] --- An implementation of the Cookie Store API for use in request handlers.
- ⏱ [__Extendable Promise__][extendable-promise] --- A promise that can be delayed/extended via repeated calls to `waitUntil`.
<!-- - 🍪 [__Signed Cookie Store__][signed-cookie-store] --- An implementation of the Cookie Store API for use in request handlers. -->
<!-- - 🍪 [__Encrypted Cookie Store__][encrypted-cookie-store] --- An implementation of the Cookie Store API for use in request handlers. -->
<!-- - ⏱ [__Resolvable Promise__][resolvable-promise] --- A promise that is resolvable or rejectable after it was created. -->

Worker Tools also includes a number of polyfills that help bridge the gap between different Worker Runtimes:
- ✏️ [__HTML Rewriter__][html-rewriter] --- Cloudflare's HTML Rewriter for use in Deno, browsers, etc...
- 📍 [__Location Polyfill__][location-polyfill] --- A `Location` polyfill for Cloudflare Workers.
- 🦕 [__Deno Fetch Event Adapter__][deno-fetch-event-adapter] --- Dispatches global `fetch` events using Deno’s native HTTP server.

[router]: https://workers.tools/router
[middleware]: https://workers.tools/middleware
[html]: https://workers.tools/html
[cloudflare-kv-storage]: https://workers.tools/cloudflare-kv-storage
[deno-kv-storage]: https://workers.tools/deno-kv-storage
[response-creators]: https://workers.tools/response-creators
[stream-response]: https://workers.tools/stream-response
[json-fetch]: https://workers.tools/json-fetch
[json-stream]: https://workers.tools/json-stream
[request-cookie-store]: https://workers.tools/request-cookie-store
[extendable-promise]: https://workers.tools/extendable-promise
[html-rewriter]: https://workers.tools/html-rewriter
[location-polyfill]: https://workers.tools/location-polyfill
[deno-fetch-event-adapter]: https://workers.tools/deno-fetch-event-adapter
[signed-cookie-store]: https://workers.tools/signed-cookie-store
[encrypted-cookie-store]: https://workers.tools/encrypted-cookie-store
[resolvable-promise]: https://workers.tools/resolvable-promise

*[SSE]: Server Sent Events


## How to Use
__Deno__ users can import Worker Tools directly from GitHub as they are written in TypeScript with fully qualified import specifiers:

```js
import * as shed from 'https://ghuc.cc/worker-tools/shed/index.ts'
```

For __other runtimes__ such as module bundlers, webpack or esbuild, Worker Tools are distributed as node-ified modules that can be installed via __npm__ and behave like regular npm modules

```sh
npm install @worker-tools/shed
```


*[SSE]: Server Sent Events
