const { spawn, spawnSync } = require("child_process");

type Sync = boolean;
type Hook = "buildEnd" | "buildStart" | "generateBundle" | "moduleParsed" | "closeBundle";
type Command = string;
type Commands = Array<string>;
type Options = {
  commands: Commands;
  sync?: boolean;
  hook?: Hook;
};
type Arguments = Command | Commands | Options;
type Execute = (args: Arguments) => any;

const defaultHook: Hook = "generateBundle";
const defaultSync: Sync = false;

const execute: Execute = (args) => {
  if (typeof args === "string") args = [args];
  if (Array.isArray(args)) args = { commands: args, hook: defaultHook, sync: defaultSync };
  let { commands, hook = defaultHook, sync = defaultSync } = args;
  return {
    name: "rollup-plugin-shell",
    [hook]: () => {
      for (const command of commands) {
        !sync
          ? spawn(command, { shell: true, stdio: "inherit" })
          : spawnSync(command, { shell: true, stdio: "inherit" });
      }
    },
  };
};

export default execute;
