type TOptions = {
  isDev: boolean,
  isTsx?: boolean,
}

export const buildBabelLoader = ({isTsx, isDev}: TOptions) => ({
  test: isTsx ? /\.(tsx|jsx)$/ : /\.(ts|js)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-transform-runtime',
        [
          '@babel/plugin-transform-typescript',
          {isDev}
        ]
      ],
    },
  },
})
