# Shed
__Shed__ is the entire collection of [__Worker Tools__](https://workers.tools) under a single roof, which doubles as a complete web framework built for Worker Environments.

***

___Work In Progress___

***

## Tools
- 🧭 [__Worker Router__](https://github.com/worker-tools/router) --- Complete routing solution that works across CF Workers, Deno and Service Workers
- 🔋 [__Worker Middleware__](https://github.com/worker-tools/middleware) --- A suite of standalone HTTP server-side middleware with TypeScript support
- 📄 [__Worker HTML__](https://github.com/worker-tools/html) --- HTML templating and streaming response library
- 📦 __Storage Area__ --- Storage abstractions for [Cloudflare's KV](https://github.com/worker-tools/cloudflare-kv-storage) and [Deno](https://github.com/worker-tools/deno-kv-storage)
- ↩️ [__Response Creators__](https://github.com/worker-tools/response-creators) --- Factory functions for responses with pre-filled status and status text
- 🏞 [__Stream Response__](https://github.com/worker-tools/stream-response) --- Use async generators to build streaming responses for SSE, etc...
- 🥏 [__JSON Fetch__](https://github.com/worker-tools/json-fetch) --- Drop-in replacements for Fetch API classes with first class support for JSON.
- 🍪 [__Request Cookie Store__](https://github.com/worker-tools/request-cookie-store) --- An implementation of the Cookie Store API for use in request handlers.
<!-- - 🍪 [__Signed Cookie Store__](https://github.com/worker-tools/signed-cookie-store) --- An implementation of the Cookie Store API for use in request handlers. -->
<!-- - 🍪 [__Encrypted Cookie Store__](https://github.com/worker-tools/encrypted-cookie-store) --- An implementation of the Cookie Store API for use in request handlers. -->
<!-- - ⏱ [__Resolvable Promise__](https://github.com/worker-tools/resolvable-promise) --- A promise that is resolvable or rejectable after it was created. -->
<!-- - ⏱ [__Extendable Promise__](https://github.com/worker-tools/extendable-promise) --- A promise that can be delayed/extended via repeated calls to `waitUntil`. -->
<!-- - ❓ __JSON Parse Stream__ --- TODO -->
<!-- - ❓ __JSON Stringify Stream__ --- TODO -->

Worker Tools also includes a number of polyfills that help bridge the gap between different Worker Environments:
- ✏️ [__HTML Rewriter__](https://github.com/worker-tools/html-rewriter) --- Cloudflare's HTML Rewriter for use in Deno, browsers, etc...
- 📍 [__Location Polyfill__](https://github.com/worker-tools/location-polyfill) --- A `Location` polyfill for Cloudflare Workers.
- 🦕 [__Deno Fetch Event Adapter__](https://github.com/worker-tools/deno-fetch-event-adapter) --- Dispatches global `fetch` events using Deno’s native HTTP server.

*[SSE]: Server Sent Events

## How to Use
__Deno__ users can import Worker Tools directly from GitHub as they are written in TypeScript with fully qualified import specifiers:

```js
import * as shed from 'https://ghuc.cc/worker-tools/shed/index.ts'
```

For __other environments__ such as module bundlers, webpack or esbuild, Worker Tools are distributed as node-ified modules that can be installed via __npm__ and behave like regular npm modules

```sh
npm install @worker-tools/shed
```