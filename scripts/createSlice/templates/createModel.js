const { mkdir, writeFile } = require('fs/promises');
const { resolveRoot } = require('../utils');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemeTypeTemplate = require('./schemeTypeTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await mkdir(resolveModelPath());
      await mkdir(resolveModelPath('types'));
      await mkdir(resolveModelPath('slice'));
      await mkdir(resolveModelPath('selectors'));
      await mkdir(resolveModelPath('services'));
    } catch (err) {
      console.error(
        `Не удалось создать model сегмент для слайса ${sliceName}`,
        err,
      );
    }
  };

  const createReduxSlice = async () => {
    try {
      await writeFile(
        resolveModelPath('slice', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (err) {
      console.error('Не удалось создать редакс слайс', err);
    }
  };

  const createSchemeType = async () => {
    try {
      await writeFile(
        resolveModelPath('types', `${sliceName}Scheme.ts`),
        schemeTypeTemplate(sliceName),
      );
    } catch (err) {
      console.error('Не удалось создать тип схемы стейта', err);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemeType();
};
