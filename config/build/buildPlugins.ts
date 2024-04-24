import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { TBuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

type TPlugins =  (ReactRefreshWebpackPlugin | webpack.HotModuleReplacementPlugin | BundleAnalyzerPlugin)[];
export const buildPlugins = (options: TBuildOptions): webpack.WebpackPluginInstance[] => {
  const {paths, isDev, isDevAnalysis, apiUrl, project} = options;
  const devPlugins: TPlugins = isDev
    ? [
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin({overlay: false}),
      new webpack.HotModuleReplacementPlugin(),
    ]
    : [];

  if (isDevAnalysis) {
    devPlugins.push(new BundleAnalyzerPlugin());
  }

  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    ...devPlugins,
  ];
};
