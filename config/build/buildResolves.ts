import { ResolveOptions } from "webpack";

export const buildResolve = (): ResolveOptions =>({
  extensions: ['.tsx', '.ts', '.js'],
})
