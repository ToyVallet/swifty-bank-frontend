module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb/typescript',
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
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.base.json',
  },
  plugins: ['react', '@typescript-eslint/eslint-plugin', 'prettier'],
  rules: {},
  ignorePatterns: ['.eslintrc.js', 'dist'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
