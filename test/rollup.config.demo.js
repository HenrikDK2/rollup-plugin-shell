import execute from "rollup-plugin-shell";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
  },
  plugins: [
    terser({
      output: { comments: false },
    }),
    
    execute("echo IT WORKS!!!"),

    execute({ commands: ["eslint src"], hook: "buildStart" }),

    execute([
      "copyfiles static/** dist -u 1",
      "live-server --watch=dist --open=dist",
    ]),
  ],
};
