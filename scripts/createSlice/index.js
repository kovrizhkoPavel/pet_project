const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'pages', 'entities'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите слой ${layers.join(' ,')}`);
}

if (!sliceName) {
  throw new Error('Укажите название слайса');
}

createTemplate(layer, sliceName);
