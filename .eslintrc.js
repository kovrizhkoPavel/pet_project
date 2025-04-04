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
    'plugin:storybook/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: [
        '**/config/**/*.ts',
        '**/src/**/storybook/*.{ts,tsx}',
        '**/src/**/*.test.{ts,tsx}',
        '**/src/**/*.stories.{ts,tsx}',
        '**/src/shared/lib/tests/**/*.{ts,tsx}',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/src/**/slice/*.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'i18next', 'pet-project'],
  rules: {
    'pet-project/fsd-relative-path': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 'max-len': ['error', { ignoreComments: true, code: 125 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'no-shadow': 'off',
    'react/display-name': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-console': 'error',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'max-len': 'off',
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
    __API__: true,
    __PROJECT__: true,
  },
};
