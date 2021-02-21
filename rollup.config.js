import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
  },

  plugins: [typescript(), terser({ output: { comments: false } })],
};
