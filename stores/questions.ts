import { defineStore } from 'pinia'

const isClient = typeof window !== 'undefined'

export const useStoreQuestion = defineStore('questions', {
  state: () => ({
    questions: [],
    currentQuestion: null,
  }),
  actions: {
    async fetchQuestions() {
      try {
        const response = await $fetch('/api/questions', { method: 'GET' })
        this.questions = response.map(q => {
          const opts = q.answers[0]
          return {
            id: q.id,
            pregunta: q.question,
            opciones: [opts.a, opts.b, opts.c, opts.d],
            respuestaCorrecta: opts[q.correct],
          }
        })
      } catch (error: unknown) {
        console.error('Error fetching questions:', error)
      }
    },
    setCurrentQuestion(question) {
      this.currentQuestion = { ...question }
    },
    updateQuestion(updatedQuestion) {
      const index = this.questions.findIndex(q => q.id === updatedQuestion.id)
      if (index !== -1) {
        this.questions[index] = { ...updatedQuestion }
        if (this.currentQuestion?.id === updatedQuestion.id) {
          this.currentQuestion = { ...updatedQuestion }
        }
      }
    },
  },
  persist: {
    storage: isClient ? localStorage : undefined,
  },
})
