const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')
const packageName = require('./package.json').name
module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.ts'
    }
  },
  devServer: {
    port: 8091,
    historyApiFallback: true,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  publicPath: 'auto',
  chainWebpack: config => {
    config.plugin('define').tap((args) => {
      args[0].isProduction = 1
      return args
    })
  },
  configureWebpack: {
    externals: {
      vue: 'Vue'
    },
    output: {},
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
      // 共享模块时，不能开启
      splitChunks: false
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: packageName,
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
