export type TBuildMode = "production" | "development";

export type TBuildPath = {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
};

export type TBuildOptions = {
  mode: TBuildMode;
  paths: TBuildPath;
  isDev: boolean;
  isDevAnalysis: boolean;
  port: number;
  apiUrl: string;
  project: "storybook" | "frontend" | "jest";
};

export type TBuildEnv = {
  mode: TBuildMode;
  analysis: boolean;
  port: number;
  apiUrl: string;
};
