import { TBuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoader } from "./buildLoaders";
import { buildResolve } from "./buildResolves";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: TBuildOptions,
): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "bundle.js",
      path: paths.build,
      clean: true,
      publicPath: "/",
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(options),
    },
    resolve: buildResolve(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
};
