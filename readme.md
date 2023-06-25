## Micro front-end and module federation(微前端+模块联邦)
一个微前端和模块联邦结合的示例项目。旨在解决微前端项目拆分后，前端公共组件，函数，样式等无法复用的问题。

#### 场景
我们当前遇到，一个公司的前端应用，设计风格，交互规范，数据接口都是一致的。但是奈何微前端拆分后，导致项目直接隔离，复用组件，函数，样式就变得困难了。
于是在微前端的基础上，增加了一个`webpack`的模块联邦(`module-federation`)功能,帮我们导出公共组件、样式、函数等模块给其他应用使用。

#### 整体架构说明
微前端框架: `@micro-zoe/micro-app`
模块联邦：`webpack5 module-federation`
项目结构：基座应用base``

#### 具体说明
本项目是基于一个基座应用(`vue3 + ts`)，2个子应用（`vue3+ts;react+ts`）的结合使用。
基座应用会暴露公共方法和函数给子应用使用，子应用也会提供自己的组件和函数供其他应用使用。


### 启动项目
```bash
# step1:安装lerna
npm run install
# step2:接下来安装所有应用的依赖，看你是npm还是yarn
cd ./base && npm i && cd ../sub-app1 && npm i && cd ../sub-app2 && npm i
# step2:或
cd ./base && yarn && cd ../sub-app1 && yarn && cd ../sub-app2 && yarn

# step3:确定依赖都安装成功后，启动项目,端口分别为8091,8092,8093
npm run serve
```

> 微前端改造，模块联邦使用过程中，都是与很多问题的。如果遇到任何微前端，或者模块联邦，或者两者结合的问题，都可以在本项目提[issues](https://github.com/jackzhujie/mofd/issues)
> 也环境关注我的个人公众号**程序员每日三问**，每天推送前端面试题，算法，干活。
> 如果你有任何解决不了的问题都可以加我微信，我可以跟你讨论或者进群跟小伙伴们一起讨论解决。
<img src="https://github.com/jackzhujie/mofd/blob/main/static/qcCode.jpg.jpg" alt="二维码" width="300">
