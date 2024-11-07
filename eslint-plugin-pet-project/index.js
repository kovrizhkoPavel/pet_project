const fsdRelativePath = require('./rules/fsd-relative-path');

const plugin = {
  meta: {
    name: 'eslint-plugin-pet-project',
    version: '1.0.0',
  },
  rules: {
    'fsd-relative-path': fsdRelativePath,
  },
};

module.exports = plugin;
