const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
module.exports = function override(config, env) {
    // 添加模块联邦配置
    config.plugins.push(
        new ModuleFederationPlugin({
            name: 'my_app',
            filename: 'remoteEntry.js',
            remotes: {},
            exposes: {},
            shared: {}
        })
    );

    return config;
};
