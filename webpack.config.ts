import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { DEFAULT_PORT, DEFAULT_URL, Mode } from './config/build/constants';
import { TBuildEnv, TBuildPath } from './config/build/types/config';

export default (env: TBuildEnv): webpack.Configuration => {
  const mode = env.mode || Mode.DEVELOPMENT;
  const isDev = env.mode === Mode.DEVELOPMENT;
  const isDevAnalysis = Boolean(env.analysis);
  const port = env.port || DEFAULT_PORT;
  const apiUrl = env.apiUrl || DEFAULT_URL;

  const paths: TBuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  return buildWebpackConfig({
    paths,
    mode,
    isDev,
    isDevAnalysis,
    port,
    apiUrl,
    project: 'frontend',
  });
};
