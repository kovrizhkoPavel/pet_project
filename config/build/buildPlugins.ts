import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { TBuildOptions } from "./types/config";
import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

type TPlugins = (
  | ReactRefreshWebpackPlugin
  | webpack.HotModuleReplacementPlugin
  | BundleAnalyzerPlugin
)[];
export const buildPlugins = (
  options: TBuildOptions,
): webpack.WebpackPluginInstance[] => {
  const { paths, isDev, isDevAnalysis, apiUrl, project } = options;
  const devPlugins: TPlugins = isDev
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({ overlay: false }),
        new webpack.HotModuleReplacementPlugin(),
      ]
    : [];

  if (isDevAnalysis) {
    devPlugins.push(new BundleAnalyzerPlugin());
  }

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
    ...devPlugins,
  ];
};
