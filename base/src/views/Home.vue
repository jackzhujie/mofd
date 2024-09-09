<template>
  <div class="Home">
    <div class="container">
      <h3>我是基座应用测试页面</h3>
      <h5>vue3+ts项目</h5>
      <Button :handle-click="testClickBtn" :interval="1000">防抖按钮({{runNum}})</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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
  }
</style>
