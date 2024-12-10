const { makeFirstCharLowerCase } = require('../utils');

module.exports = (componentName) => `.${makeFirstCharLowerCase(componentName)} {

}`;
