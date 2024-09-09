import { useDynamicScript, loadComponent } from './asyncLoadModules'

// 远程模块地址，加载js
const remoteUrl = 'http://localhost:8091/remoteEntry.js'
export default async () => {
    await useDynamicScript(remoteUrl) // 远程模块地址
    const { default: util } = await loadComponent('base', './util.ts')()
    console.log(util, 'Button')
    return {util}
}
