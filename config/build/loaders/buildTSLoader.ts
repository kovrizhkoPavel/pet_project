export const buildTSLoader = () => ({
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
})
