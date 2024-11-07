module.exports = {
  meta: {
    type: null,
    docs: {
      description: 'feature sliced relative path checker',
      category: 'Fill me in',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(content) {
    return {
      Literal() {
        console.log('ffdf');
      },
    };
  },
};
