const { writeFile } = require('fs/promises');
const { resolveRoot, makeFirstCharUpperCase } = require('../utils');

module.exports = async (layer, sliceName) => {
  const componentName = makeFirstCharUpperCase(sliceName);
  const schemaName = `${sliceName}Schema`;
  
  try {
    const template = `export { ${componentName} } from './ui/${componentName}/${componentName}';
    export { ${makeFirstCharUpperCase(schemaName)} } from './model/types/${schemaName}';`
    
    await writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      template,
    )
  } catch (err) {
    console.error('Не удалось создать PUBLIC API',err);
  }
}
