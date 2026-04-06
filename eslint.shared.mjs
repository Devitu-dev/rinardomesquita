import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const sharedEslintConfig = [
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-else-return': 'error',
    },
  },
];

export default sharedEslintConfig;
