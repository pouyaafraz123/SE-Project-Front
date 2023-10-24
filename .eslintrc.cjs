module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:react-prefer-function-component/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'import',
    'react-prefer-function-component',
    '@shopify'
  ],
  settings: {
    react: {
      version: '^18.2.0'
    }
  },
  rules: {
    'react-refresh/only-export-components': [1, { allowConstantExport: true }],
    'no-console': 0,
    'no-undef': 0,
    'no-undefined': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/order': 1,
    'react-prefer-function-component/react-prefer-function-component': 2,
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' }
    ],
    'react/react-in-jsx-scope': 0,
    // '@shopify/jsx-no-hardcoded-content': [
    //   1,
    //   {
    //     allowStrings: true,
    //     allowNumbers: true,
    //     dom: {
    //       '*': { checkProps: [] },
    //       area: { checkProps: [] },
    //       img: { checkProps: [] },
    //       input: { checkProps: [] }
    //     },
    //     modules: {
    //       'react-router-dom': {
    //         Link: {
    //           allowStrings: false,
    //           allowNumbers: false,
    //           checkProps: ['to']
    //         }
    //       }
    //     }
    //   }
    // ],
    'no-restricted-syntax': [
      1,
      {
        message: 'no hardcode navigate link',
        selector:
          "CallExpression[callee.name='navigate'][arguments.0.type='Literal']"
      }
    ]
  }
}
