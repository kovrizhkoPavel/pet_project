const { mkdir, writeFile } = require('fs/promises');
const { resolveRoot, makeFirstCharUpperCase } = require('../utils');
const componentTemplate = require('./componentTemplate');
const storybookTemplate = require('./storybookTemplate')
const styleTemplate = require('./styleTemplate');

module.exports = async (layer, sliceName) => {
  const resolveUiPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'ui', ...segments);
  
  const createUiDir = async () => {
    try {
      await mkdir(resolveUiPath());
    } catch (err) {
      console.error('Не удалось создать UI директорию', err);
    }
  }
  
  const createComponent = async () => {
    try {
      const componentName = makeFirstCharUpperCase(sliceName);
      await mkdir(resolveUiPath(componentName));
      await writeFile(
        resolveUiPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName)
      );
      await writeFile(
        resolveUiPath(componentName, `${componentName}.stories.tsx`),
        storybookTemplate(layer, componentName)
      )
      await writeFile(
        resolveUiPath(componentName, `${componentName}.module.scss`),
        styleTemplate( componentName)
      )
    } catch (err) {
      console.error('Не удалось создать компонент', err);
    }
  }
  
  await createUiDir();
  await createComponent();
}
