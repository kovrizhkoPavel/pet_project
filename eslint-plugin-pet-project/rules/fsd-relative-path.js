'use strict';

const path = require('path');

const layers = {
  'entities': 'entities',
  'features': 'features',
  'shared': 'shared',
  'pages': 'pages',
  'widgets': 'widgets',
}

module.exports = {
  meta: {
    type: null,
    docs: {
      description: 'feature sliced relative path checker',
      recommended: false,
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        // widgets/PageLoader
        const importPath = node.source.value;
        
        // /Users/user/project/pet_project/src/app/providers/route/ui/AppRouter.tsx
        const filePath = context.filename;
        
        if (checkIsPathInvalid(filePath, importPath)) {
          context.report(node, 'Within a single slice, all paths must be relative')
        }
      }
    };
  },
};

function checkIsPathInvalid(from, to) {
  if (checkIsPathRelative(to)) return false;
  
  const [importedLayer, importedSlice] = to.split('/');
  
  if (!importedLayer in layers) return false;
  
  const [,normalizedPath] = path.toNamespacedPath(from).split('src'); // '/entities/Article/ui/ArticleInfo/ArticleInfo.tsx'
  const [,layer, slice] = normalizedPath.split(path.sep); // [ '', 'entities', 'Article', 'ui', 'ArticleInfo', 'ArticleInfo.tsx' ]
  
  if (!layer || !slice) return false;
  
  return importedLayer === layer && importedSlice === slice
}

function checkIsPathRelative(path) {
  return path === '.' || path.startsWith('./') || path.startsWith('../');
}
