const { mkdir } = require('fs/promises');
const { resolveRoot, makeFirstCharUpperCase } = require('../utils');
const createModel = require('./createModel');
const createUi = require('./createUi');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  try {
    await mkdir(resolveRoot('src', layer, makeFirstCharUpperCase(sliceName)));
  } catch (err) {
    console.error(`Не удалось создать директорию для слайса ${sliceName}`, err);
  }

  await createModel(layer, sliceName);
  await createUi(layer, sliceName);
  await createPublicApi(layer, sliceName);
};
