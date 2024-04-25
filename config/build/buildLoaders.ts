import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TBuildOptions } from './types/config';
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildSvgLoader} from "./loaders/buildSvgLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";
import {buildTSLoader} from "./loaders/buildTSLoader";
import {buildFileLoader} from "./loaders/buildFileLoader";

export const buildLoader = (options: TBuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const typeScriptLoader = buildTSLoader();
  const cssLoader = buildCssLoader(isDev);
  const svgLoader = buildSvgLoader();
  const babelLoader = buildBabelLoader();
  const fileLoader = buildFileLoader();

  return [
    fileLoader,
    svgLoader,
    cssLoader,
    babelLoader,
    typeScriptLoader,
  ];
};
