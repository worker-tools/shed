# Worker Tools / Shed
Shed is the entire collection of [Worker Tools](https://workers.tools) under a single roof, which doubles as a complete web framework built for Worker Environments.

- 🧭 [__Worker Router__](../router){:.flip-title} --- Complete routing solution that works across CF Workers, Deno and Service Workers
- 🔋 [__Worker Middleware__](../middleware){:.flip-title} --- A suite of standalone HTTP server-side middleware with TypeScript support
- 📄 [__HTML Templating__](../html){:.flip-title} --- HTML templating and streaming response library
- 📦 __KV Storage__ --- Storage abstractions for [Cloudflare's KV](../cloudflare-kv-storage), [Deno](../deno-kv-storage) and [IndexedDB](https://github.com/GoogleChromeLabs/kv-storage-polyfill)
- ↩️ [__Response Creators__](../response-creators){:.flip-title} --- Factory functions for responses with pre-filled status and status text
- 🏞 __Stream Response__ --- Use async generators to build streaming responses for SSE, etc...
- 🥏 [__JSON Fetch__](../json-fetch){:.flip-title} --- A drop-in replacements for `fetch` with first class support for JSON objects.
- 🍪 [__Request Cookie Store__](../request-cookie-store){:.flip-title} --- An implementation of the Cookie Store API for use in request handlers.
- ✏️ [__HTML Rewriter__](../html-rewriter){:.flip-title} --- Cloudflare's HTML Rewriter for use in Deno, browsers, etc...

## How to Use
__Deno__ users can import Worker Tools directly from GitHub as they are written in TypeScript with fully qualified import specifiers:

```js
import { WorkerRouter } from 'https://ghuc.cc/worker-tools/shed/index.ts'
```

For __other environments__ such as module bundlers, webpack or esbuild, Worker Tools are distributed as node-ified modules that can be installed via __npm__ and behave like regular npm modules

```sh
npm install @worker-tools/shed
```