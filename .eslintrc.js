module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/dot-notation": "off",
    "arrow-body-style": ["error", "as-needed"],
    "consistent-return": "off",
    "import/order": "off",
    "import/prefer-default-export": "off",
    "max-len": [
      "warn",
      {
        "code": 120,
        "comments": 120
      }
    ],
    "no-console": [
      "error",
      {
        "allow": [
          "error",
          "info"
        ]
      }
    ],
    "no-nested-ternary": "off",
    "no-param-reassign": ["error", { "props": false }],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "object-curly-newline": ["error", { "consistent": true }],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      { "blankLine": "any",    "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": "directive", "next": "*" },
      { "blankLine": "any",    "prev": "directive", "next": "directive" }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/no-array-index-key": 0,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/state-in-constructor": "off",
    "react/require-default-props": "off",
    "react/no-unused-prop-types": "off",
    "react/destructuring-assignment": "off",
  },
};
