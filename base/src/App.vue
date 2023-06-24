<template>
  <div class="app">
    <h2>micro-app微前端+ModuleFederation模块联邦演示</h2>
    <div class="layout">
      <ul class="menu">
        <li>
          <router-link to="/">VUE基座应用</router-link>
        </li>
        <li>
          <router-link to="/app1">VUE子应用</router-link>
        </li>
        <li>
          <router-link to="/app2">React子应用</router-link>
        </li>
      </ul>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DecorationTest } from '@/assets/decoration'
const decorationText = new DecorationTest('小明')
decorationText.sayName('张三')
decorationText.setName('小刚')
decorationText.message = 'jack'
console.log(decorationText.message)
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .app {
    box-sizing: border-box;
    .layout {
      display: flex;
      .menu {
        margin: 0;
        width: 120px;
        li {
          list-style-type: none;
        }
      }
    }
    .container {
      background-color: antiquewhite;
      flex: 1;
      padding: 20px;
      box-sizing: border-box;
      overflow: auto;
      max-height: calc(100vh - 100px);
    }
    a {
      padding: 10px;
      width: 100px;
      text-align: center;
      height: 24px;
      font-size: 14px;
      color: #282c34;
      line-height: 24px;
      vertical-align: middle;
      display: inline-block;
      text-decoration: none; /* 去掉下划线 */
      &.router-link-active {
        color: #42b983;
        background-color: antiquewhite;
      }
    }
  }
}
</style>
