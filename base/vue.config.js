const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  devServer: {
    port: 8091,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  publicPath: 'auto',
  configureWebpack: {
    externals: {
      vue: 'Vue'
    },
    output: {
      chunkLoadingGlobal: 'webpackJsonp_base_app',
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
    optimization: {
      splitChunks: false
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'baseApp',
        filename: 'remoteEntry.js',
        exposes: {
          './Button.vue': './src/components/Button.vue',
          './util.ts': './src/assets/util.ts'
        }
      })
    ]
  },
  transpileDependencies: true
})
