const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')

module.exports = defineConfig({
  devServer: {
    port: 8092,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    externals: {
      vue: 'Vue'
    },
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
    optimization: {},
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        // 使用useDynamicScript，好处是更改后不用重启服务,也可以更灵活，甚至选择不同的远程版本来加载
        remotes: {
          // baseApp: 'baseApp@http://localhost:8081/remoteEntry.js'
        },
        shareScope: 'app1',
        shared: {
          // vue: {
          //   eager: false,
          //   singleton: true,
          //   requiredVersion: '3.3.4',
          //   strictVersion: true
          // }
        }
      })
    ]
  },
  transpileDependencies: true
})
