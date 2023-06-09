<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>vue3+ts基座应用</h1>
  <div class="app">
    <router-link to="/">VUE基座应用</router-link>
    <router-link to="/app1">VUE子应用1</router-link>
    <router-link to="/app2">React子应用2</router-link>
    <div class="container">
      <router-view></router-view>
    </div>
    <Button :handle-click="testClickBtn" :interval="1000">防抖按钮({{runNum}})</Button>
  </div>
</template>

<script lang="ts" setup>

import { DecorationTest } from '@/assets/decoration'

import { ref } from 'vue'

console.log('run test')
const decorationText = new DecorationTest('小明')
decorationText.sayName('张三')
decorationText.useDependency()
decorationText.setName('小刚')
const descriptor = Object.getOwnPropertyDescriptor(
  Object.getPrototypeOf(decorationText),
  'dependency'
)
console.log(decorationText, decorationText.dependency, 'decorationText.dependency')
const runNum = ref(0)
const testClickBtn = () => {
  runNum.value = runNum.value + 1
  return runNum.value
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .app {
    padding-top: 20px;
    .container {
      background-color: antiquewhite;
      border-radius: 8px;
      margin: 0 auto;
      width: 400px;
      height: 200px;
      padding: 20px;
      box-sizing: border-box;
    }
    a {
      padding: 10px;
      width: 100px;
      text-align: center;
      height: 24px;
      display: inline-block;
      text-decoration: none; /* 去掉下划线 */
      color: inherit; /* 继承父元素的文本颜色 */
      &.router-link-active {
        color: #42b983;
        background-color: antiquewhite;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }
  }
}
</style>
