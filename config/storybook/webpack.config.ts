import webpack from "webpack";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import {buildSvgLoader} from "../build/loaders/buildSvgLoader";

export default ({config}: {config: webpack.Configuration}) => {
  const paths = path.resolve(__dirname, '..', '..', 'src');
  const styleLoader = buildCssLoader(true);
  const svgLoader = buildSvgLoader();

  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(`${rule.test}`)) {
      return {...rule, exclude: /\.svg$/i};
    }
    return rule;
  })

  config.resolve.extensions.push('.tsx', '.ts');
  config.resolve.modules.unshift(paths)
  config.module.rules.push(styleLoader, svgLoader);

 return config;
}
