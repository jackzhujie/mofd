<template>
  <div class="Home" @scroll="debounceMyCheckInWindow">
    <div class="container">
      <h3>我是基座应用测试页面</h3>
      <h5>vue3+ts项目</h5>
      <Button :handle-click="testClickBtn" :interval="1000">防抖按钮({{runNum}})</Button>
      <div id="test">测试我是否在窗口: {{isInWindow}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import util from '@/assets/util'
const isInWindow = ref(false)
const myCheckInWindow = function () {
  isInWindow.value = util.checkInWindow('test')
  console.log(isInWindow.value)
}
const debounceMyCheckInWindow = util.debounce(myCheckInWindow, 500)
const runNum = ref(0)
const testClickBtn = () => {
  runNum.value = runNum.value + 1
  return runNum.value
}
</script>
<style lang="less">
  .Home {
    height: 20vh;
    overflow: auto;
    .container {
      height: 30vh;
      position: relative;
      #test {
        position: absolute;
        bottom: 0;
      }
    }
  }
</style>
