import { ResolveOptions } from "webpack";
import { TBuildOptions } from "./types/config";

export const buildResolve = ({ paths }: TBuildOptions): ResolveOptions => ({
  extensions: [".tsx", ".ts", ".js"],
  preferAbsolute: true,
  modules: [paths.src, "node_modules"],
  mainFiles: ["index"],
  alias: {
    "@": paths.src,
  },
});
