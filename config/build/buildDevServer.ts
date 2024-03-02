import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { TBuildOptions } from './types/config';

export const buildDevServer = (options: TBuildOptions): DevServerConfiguration => {
  const { port } = options;
  return {
    port,
    open: false,
    historyApiFallback: true,
    hot: true,
  };
};
