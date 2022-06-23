import execute from "rollup-plugin-shell";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
  },
  plugins: [
    execute("echo IT WORKS!!!"),
    
    execute({ commands: ["eslint src"], hook: "buildStart" }),

    execute([
      "copyfiles static/** dist -u 1",
      "live-server --watch=dist --open=dist",
    ]),

  ],
};