import webpack, {DefinePlugin} from "webpack";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import {buildSvgLoader} from "../build/loaders/buildSvgLoader";

export default ({config}: {config: webpack.Configuration}) => {
  const paths = path.resolve(__dirname, '..', '..', 'src');
  const styleLoader = buildCssLoader(true);
  const svgLoader = buildSvgLoader();

  if (!config.module) {
    return config;
  }

  // @ts-ignore
  config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(`${rule.test}`)) {
      return {...rule, exclude: /\.svg$/i};
    }
    return rule;
  })

  config.resolve?.extensions?.push('.tsx', '.ts');
  config.resolve?.modules?.unshift(paths)
  config.resolve!.alias = { '@': paths }

  config.module?.rules?.push(styleLoader, svgLoader);

  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

 return config;
}
