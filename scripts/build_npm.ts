#!/usr/bin/env -S deno run -A

// ex. scripts/build_npm.ts
import { basename, extname } from "https://deno.land/std@0.133.0/path/mod.ts";
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

import { 
  latestVersion, copyMdFiles, getDescription, getGHTopics, getGHLicense, getGHHomepage,
} from 'https://gist.githubusercontent.com/qwtel/ecf0c3ba7069a127b3d144afc06952f5/raw/latest-version.ts'

await emptyDir("./npm");

const name = basename(Deno.cwd())

await build({
  entryPoints: ["./index.ts", {
    name: './encrypted-cookie-store',
    path: 'encrypted-cookie-store.ts'
  }, {
    name: './extendable-promise',
    path: 'extendable-promise.ts'
  }, {
    name: './html-rewriter',
    path: 'html-rewriter.ts'
  }, {
    name: './html',
    path: 'html.ts'
  }, {
    name: './json-fetch',
    path: 'json-fetch.ts'
  }, {
    name: './middleware',
    path: 'middleware.ts'
  }, {
    name: './request-cookie-store',
    path: 'request-cookie-store.ts'
  }, {
    name: './resolvable-promise',
    path: 'resolvable-promise.ts'
  }, {
    name: './response-creators',
    path: 'response-creators.ts'
  }, {
    name: './router',
    path: 'router.ts'
  }, {
    name: './signed-cookie-store',
    path: 'signed-cookie-store.ts'
  }, {
    name: './stream-response',
    path: 'stream-response.ts'
  }
],
  outDir: "./npm",
  shims: {},
  test: false,
  typeCheck: false,
  package: {
    // package.json properties
    name: `@worker-tools/${name}`,
    version: await latestVersion(),
    description: await getDescription(),
    license: await getGHLicense(name) ?? 'MIT',
    publishConfig: {
      access: "public"
    },
    author: "Florian Klampfer <mail@qwtel.com> (https://qwtel.com/)",
    repository: {
      type: "git",
      url: `git+https://github.com/worker-tools/${name}.git`,
    },
    bugs: {
      url: `https://github.com/worker-tools/${name}/issues`,
    },
    homepage: await getGHHomepage(name) ?? `https://github.com/worker-tools/${name}#readme`,
    keywords: await getGHTopics(name) ?? [],
  },
  packageManager: 'pnpm',
  compilerOptions: {
    sourceMap: true,
    target: 'ES2019',
  },
  mappings: {
    "https://ghuc.cc/worker-tools/encrypted-cookie-store/index.ts": {
      name: "@worker-tools/encrypted-cookie-store",
      version: "latest"
    },
    'https://ghuc.cc/worker-tools/extendable-promise/index.ts': {
      name: "@worker-tools/extendable-promise",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/html-rewriter/index.ts": {
      name: "@worker-tools/html-rewriter",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/html/index.ts": {
      name: "@worker-tools/html",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/json-fetch/index.ts": {
      name: "@worker-tools/json-fetch",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/middleware/index.ts": {
      name: "@worker-tools/middleware",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/request-cookie-store/index.ts": {
      name: "@worker-tools/request-cookie-store",
      version: "latest"
    },
    'https://ghuc.cc/worker-tools/resolvable-promise/index.ts': {
      name: "@worker-tools/resolvable-promise",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/response-creators/index.ts": {
      name: "@worker-tools/response-creators",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/router/index.ts": {
      name: "@worker-tools/router",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/signed-cookie-store/index.ts": {
      name: "@worker-tools/signed-cookie-store",
      version: "latest"
    },
    "https://ghuc.cc/worker-tools/stream-response/index.ts": {
      name: "@worker-tools/stream-response",
      version: "latest"
    },
  },
});

// post build steps
await copyMdFiles()
