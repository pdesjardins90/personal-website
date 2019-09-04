const dynamicFolders = ['polyfills', 'images/manifest', 'images/photos', 'images/launch']

module.exports = {
  cacheId: '@pdesjardins90/personal-website',
  cleanupOutdatedCaches: true,
  globDirectory: './dist',
  globIgnores: dynamicFolders.map(dynamicFolder => `${dynamicFolder}/**/*`),
  globPatterns: ['**/*.*'],
  importScripts: [],
  importWorkboxFrom: 'local',
  navigateFallback: '/index.html',
  runtimeCaching: dynamicFolders.map(dynamicFolder => ({
    urlPattern: new RegExp(`/${dynamicFolder}/`),
    handler: 'CacheFirst'
  })),
  skipWaiting: true,
  swDest: './dist/service-worker.js'
}
