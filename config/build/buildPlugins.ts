import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { TBuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export const buildPlugins = ({paths, isDev}: TBuildOptions): webpack.WebpackPluginInstance[] => {
  const devPlugins = isDev
    ? [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin({overlay: false})]
    : [];
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
    }),
    new webpack.HotModuleReplacementPlugin(),
    ...devPlugins,
  ];
};
