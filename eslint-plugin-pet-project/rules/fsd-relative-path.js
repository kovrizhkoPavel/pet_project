'use strict';

const path = require('path');

const layers = {
  'entities': 'entities',
  'features': 'features',
  'pages': 'pages',
  'widgets': 'widgets',
}

const MESSAGE = 'Within a single slice, all paths must be relative'

module.exports = {
  meta: {
    type: null,
    docs: {
      description: 'feature sliced relative path checker',
      recommended: false,
    },
    fixable: 'code', // Or `code` or `whitespace`
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
          context.report({
            node,
            message: MESSAGE,
            // fix: (fixer) => {
            //   return fixer.replaceText(importPath, 'foo')
            //   console.log(fixer);
            // }
          })
        }
      }
    };
  },
};

function checkIsPathInvalid(from, to) {
  if (checkIsPathRelative(to)) return false;
  
  const [importedLayer, importedSlice] = to.split('/');
  
  if (!layers[importedLayer]) return false;

  const [,normalizedPath] = path.toNamespacedPath(from).split('src'); // '/entities/Article/ui/ArticleInfo/ArticleInfo.tsx'
  const [,layer, slice] = normalizedPath.split(path.sep); // [ '', 'entities', 'Article', 'ui', 'ArticleInfo', 'ArticleInfo.tsx' ]
  
  if (!layer || !slice) return false;
  
  return importedLayer === layer && importedSlice === slice
}

function checkIsPathRelative(path) {
  return path === '.' || path.startsWith('./') || path.startsWith('../');
}
