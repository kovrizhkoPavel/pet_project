module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: [
        '**/src/**/*.test.{ts,tsx}',
        '**/src/shared/lib/tests/**/*.{ts,tsx}',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'i18next',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-array-index-key': 'error',
    'no-console': 'error',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    // 'sort-imports': ['error', {
    //   ignoreCase: false,
    //   ignoreDeclarationSort: false,
    //   ignoreMemberSort: false,
    //   memberSyntaxSortOrder: ['multiple', 'none', 'all', 'single'],
    //   allowSeparatedGroups: false,
    // }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
