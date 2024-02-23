import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {DEFAULT_PORT, Mode} from "./config/build/constants";
import {TBuildEnv, TBuildPath} from "./config/build/types/config";

export default (env: TBuildEnv): webpack.Configuration => {
  const mode = env.mode || Mode.DEVELOPMENT;
  const isDev = env.mode === Mode.DEVELOPMENT;
  const port = env.port || DEFAULT_PORT;

  const paths: TBuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  return buildWebpackConfig({
    paths,
    mode,
    isDev,
    port,
  });
};
