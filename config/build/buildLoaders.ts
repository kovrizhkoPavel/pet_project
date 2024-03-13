import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TBuildOptions } from './types/config';
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildSvgLoader} from "./loaders/buildSvgLoader";

export const buildLoader = (options: TBuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);
  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(tsx|jsx|js)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  return [
    fileLoader,
    svgLoader,
    cssLoader,
    babelLoader,
    typeScriptLoader,
  ];
};
