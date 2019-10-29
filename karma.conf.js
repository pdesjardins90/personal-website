const { createDefaultConfig } = require('@open-wc/testing-karma')
const merge = require('deepmerge')

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      esm: {
        nodeResolve: true
      },
      files: [
        {
          pattern: 'node_modules/fetch-mock/dist/es5/client-bundle.js',
          watched: false
        },
        {
          pattern: 'images/**/*',
          watched: false,
          included: false,
          served: true,
          nocache: false
        },
        {
          pattern: config.grep ? config.grep : 'tests/**/*.test.js',
          type: 'module'
        }
      ],
      proxies: {
        '/images/': '/base/images/',
        '/node_modules/': '/base/node_modules/'
      }
    })
  )

  return config
}
