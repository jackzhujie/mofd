<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="app">
    <router-link to="/">VUE基座应用</router-link>
    <router-link to="/app1">VUE子应用1</router-link>
    <router-link to="/app2">React子应用2</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue'

@Options({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
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
    a {
      padding: 10px;
      text-decoration: none; /* 去掉下划线 */
      color: inherit; /* 继承父元素的文本颜色 */
      &.router-link-active {
        color: #42b983;
      }
    }
  }
}
</style>
