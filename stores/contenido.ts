import { defineStore } from 'pinia'

const isClient = typeof window !== 'undefined'

export const useContenidoStore = defineStore('contenido', {
  state: () => ({
    contenidoItems: [],
  }),
  actions: {
    async fetchContenido() {
      try {
        const response = await $fetch('/api/contenido', { method: 'GET' })
        this.contenidoItems = response
      } catch (error) {
        console.error('Error fetching contenido:', error)
        throw error
      }
    },
  },
  persist: {
    storage: isClient ? localStorage : undefined,
  },
})