import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {TBuildOptions} from "./types/config";

export const buildLoader = (options: TBuildOptions): webpack.RuleSetRule[] => {
  const {isDev} = options;
  const styleLoader = isDev ? 'style-loader':  MiniCssExtractPlugin.loader
  const localIdentName = isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]';

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      styleLoader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./i,
            localIdentName,
          },
        }
      },
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

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
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  return [
    fileLoader,
    svgLoader,
    cssLoader,
    babelLoader,
    typeScriptLoader,
  ];
}
