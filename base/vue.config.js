const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  devServer: {
    port: 8081,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  publicPath: 'auto',
  configureWebpack: {
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
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'baseApp',
        filename: 'remoteEntry.js',
        exposes: {
          './Button.vue': './src/components/Button.vue',
          './util.ts': './src/assets/util.ts'
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
