const cpy = require('rollup-plugin-cpy')
const createDefaultConfig = require('@open-wc/building-rollup/modern-config.js')

const config = createDefaultConfig({ input: './index.html' })

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    cpy({
      files: ['images/**', 'manifest.json', 'robots.txt'],
      dest: 'dist',
      options: {
        parents: true
      }
    })
  ]
}
