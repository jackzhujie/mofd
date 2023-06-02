const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  devServer: {
    port: 8082,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      chunkLoadingGlobal: 'webpackJsonp_app1',
      globalObject: 'window'
    },
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      },
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        remotes: {
          // baseApp: 'baseApp@http://localhost:8081/remoteEntry.js'
        },
        shared: {
          vue: {
            eager: true,
            singleton: true,
            requiredVersion: '3.3.4'
          }
        }
      })
    ]
  },
  transpileDependencies: true
})
