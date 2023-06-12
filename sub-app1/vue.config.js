const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')
const packageName = require('./package.json').name
module.exports = defineConfig({
  devServer: {
    port: 8092,
    historyApiFallback: true,
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  pages: {
    index: {
      entry: './src/main.ts'
    }
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
    optimization: {},
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: packageName,
        filename: 'remoteEntry.js',
        // 使用useDynamicScript，好处是更改后不用重启服务,也可以更灵活，甚至选择不同的远程版本来加载
        remotes: {
        },
        shared: {}
      })
    ]
  },
  transpileDependencies: true
})
