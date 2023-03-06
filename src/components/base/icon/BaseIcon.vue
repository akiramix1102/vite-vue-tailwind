<template>
  <span class="square-icon">
    <svg aria-hidden="true" class="svg-icon" :style="{ width: size, height: size }">
      <use :href="symbolId" :fill="color" />
    </svg>
  </span>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      default: 'icon',
      required: true
    },
    size: {
      type: String,
      default: '16',
      required: false
    },
    color: {
      type: String,
      default: '#000',
      required: false
    }
  })

  const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style scoped lang='scss'>
  .svg-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: inherit;
    vertical-align: middle;
    fill: none;
    stroke: currentColor;
  }
</style>
