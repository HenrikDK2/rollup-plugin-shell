# rollup-plugin-shell

Execute shell commands in Rollup.

## Install

```bash
npm i rollup-plugin-shell --save-dev
```

## Options

| Name     | Type            | Default          | Description                                                                                                                                                          |
| -------- | --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commands | `array<string>` | `undefined`      | An array of shell commands that will be executed. This is required, since no commands would run.                                                                     |
| hook     | `string`        | `generateBundle` | Any Rollup hook - https://rollupjs.org/guide/en/#build-hooks.                                                                                                        |
| sync     | `boolean`       | `false`          | Spawns the child process asynchronously, without blocking the event loop. Sync `true` blocks the event loop until the spawned process either exits or is terminated. |

## Example:

```js
import execute from "rollup-plugin-shell";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
  },
  plugins: [
    // Run mulitple commands with a specific rollup hook
    execute({ commands: ["eslint src"], hook: "buildStart" }),

    // Run multiple commands with the default rollup hook
    execute([
      "copyfiles dist/**/* example/package -u 1",
      "live-server --watch=example --open=example",
    ]),

    // Run a single command with the default rollup hook
    execute("npm run test"),
  ],
};
```
