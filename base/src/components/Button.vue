<template>
  <button class="base-btn" v-debounce-click="handleClick">
    <slot>
      <span>按钮1</span>
    </slot>
  </button>
</template>
<script setup lang="ts">
import { defineProps, DirectiveBinding, VNode, withDefaults } from 'vue'

interface Button {
  interval?: number
  handleClick?: <T extends any[], R>(...args: T) => R;
}

const props = withDefaults(defineProps<Button>(), {})

const vDebounceClick = {
  mounted (el: HTMLButtonElement, binding: DirectiveBinding<VNode>) {
    const interval = props.interval || 300

    const handleClick = (...arg: any[]) => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, interval)
        // eslint-disable-next-line no-unused-expressions
        props?.handleClick?.(...arg)
      }
    }

    el.addEventListener('click', handleClick)
  }
}

</script>
<style>
  .base-btn {
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    border-color: #1890ff;
    background: #1890ff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px #0000000b;
  }
</style>
