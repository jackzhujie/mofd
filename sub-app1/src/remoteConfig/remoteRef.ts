import { useDynamicScript, loadComponent } from './asyncLoadModules'
// 远程模块地址，加载js
const remoteUrl = 'http://localhost:8081/remoteEntry.js'
await useDynamicScript(remoteUrl) // 远程模块地址
const { default: Button } = await loadComponent('baseApp', './Button.vue')()
console.log(Button, 'Button')
export { Button }
