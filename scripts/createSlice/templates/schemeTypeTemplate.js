const { makeFirstCharUpperCase } = require('../utils');

module.exports = (sliceName) => `export type ${makeFirstCharUpperCase(sliceName)}Scheme = {

};`;
