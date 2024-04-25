export const buildBabelLoader = () => ({
  test: /\.(tsx|jsx|js)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
})
