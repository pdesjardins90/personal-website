module.exports = {
  extends: ['@open-wc/eslint-config', 'eslint-config-prettier'],
  rules: {
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/tests/**/*.js', '**/*.config.js', '**/*.conf.js']
      }
    ]
  },
  overrides: [
    {
      files: ['**/tests/**/*.js'],
      rules: {
        'no-console': 'off',
        'no-unused-expressions': 'off',
        'class-methods-use-this': 'off'
      }
    }
  ]
}
