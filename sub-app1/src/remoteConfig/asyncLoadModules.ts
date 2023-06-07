/* eslint-disable */

/**
 * 加载模块
 * @param {*} scope 服务名
 * @param {*} module 子应用导出模块路径
 */
export const loadComponent = (scope: string, module: string) => {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    // @ts-ignore
    await __webpack_init_sharing__('default');
    // @ts-ignore
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    // @ts-ignore
    console.log(container, __webpack_share_scopes__, 'container')
    // Initialize the container, it may provide shared modules
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await container.get(module);
    return factory();
  };
}
const urlCache = new Set();
export const useDynamicScript = (url: string) => {
  return new Promise((resolve, reject) => {
    if (!url) reject(false);

    if (urlCache.has(url)) {
      resolve(true)
    }

    const element = document.createElement('script');
    // 防止微前端框架处理了该请求
    element.setAttribute('ignore', 'true')
    element.async = true;
    element.type = 'text/javascript';
    element.src = url;

    element.onload = () => {
      console.log('load:', url)
      urlCache.add(url);
      resolve(true)
    };

    element.onerror = () => {
      reject(false)
    };

    document.head.appendChild(element);
  })
};
