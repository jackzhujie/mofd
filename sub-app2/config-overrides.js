const { overrideDevServer } = require('customize-cra');

const addDevServerConfig = () => config => {
    // 在这里写你自己的配置
    return {
        ...config,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    };
}

module.exports = {
    devServer: overrideDevServer(addDevServerConfig())
}
