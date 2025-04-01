import webpack from "webpack";
import { TBuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";

export const buildLoader = (options: TBuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const cssLoader = buildCssLoader(isDev);
  const svgLoader = buildSvgLoader();
  const fileLoader = buildFileLoader();
  const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ isDev, isTsx: true });

  return [fileLoader, svgLoader, codeBabelLoader, tsxBabelLoader, cssLoader];
};
