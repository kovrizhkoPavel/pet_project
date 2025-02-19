import { Project } from "ts-morph";

const layers = ["app", "entities", "features", "pages", "shared", "widgets"];
const project = new Project({});

const checkIsAbsolutePath= (path: string) =>
  layers.some((layer) => path.startsWith(layer));

project.addSourceFilesAtPaths(["src/**/*.ts", "src/**/*.tsx"]);

const files = project.getSourceFiles();

files.forEach((file) => {
  const importDeclaration = file.getImportDeclarations();
  importDeclaration.forEach((importDeclaration) => {
    const path = importDeclaration.getModuleSpecifierValue()
    if (checkIsAbsolutePath(path)) {
      importDeclaration.setModuleSpecifier(`@/${path}`);
    }
  })
})

project.save();
