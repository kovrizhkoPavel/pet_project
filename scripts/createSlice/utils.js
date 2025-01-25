const path = require('path');

const resolveRoot = (...segments) =>
  path.resolve(__dirname, '..', '..', ...segments);

const makeFirstCharUpperCase = (str) =>
  `${str[0].toUpperCase()}${str.slice(1)}`;

const makeFirstCharLowerCase = (str) =>
  `${str[0].toLowerCase()}${str.slice(1)}`;

module.exports = {
  resolveRoot,
  makeFirstCharUpperCase,
  makeFirstCharLowerCase,
};
