import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
  const name = ref('dat')

  return { name }
})
