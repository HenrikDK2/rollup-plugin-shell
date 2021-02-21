# rollup-plugin-execute

Execute shell commands in Rollup.

## Install

```bash
npm i rollup-plugin-shell --save-dev
```

## Options

- Commands - An array of shell commands.
- Hook (default `generateBundle`) - Any Rollup hook - https://rollupjs.org/guide/en/#build-hooks.
- Sync (default `false`) - Sync `false` spawns the child process asynchronously, without blocking the event loop. Sync `true` blocks the event loop until the spawned process either exits or is terminated.

## Example:

```js
import execute from "rollup-plugin-shell";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
  },
  plugins: [
    //Run commands with a specfic rollup hook.
    execute({ commands: ["eslint src"], hook: "buildStart" }),

    //You can also just use a string array.
    execute([
      "copyfiles dist/**/* example/package -u 1",
      "live-server --watch=example --open=example",
    ]),

    //You can also do a one liner.
    execute("npm run test"),
  ],
};
```
