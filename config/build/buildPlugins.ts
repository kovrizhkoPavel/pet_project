import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {TBuildOptions, TBuildPath} from "./types/config";

export const buildPlugins = ({paths}: TBuildOptions): webpack.WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({
        template: paths.html
    }),
    new webpack.ProgressPlugin()
]
