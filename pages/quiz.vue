<template>
  <v-container fluid class="full-screen-background pa-6">
    <v-row justify="center" style="max-width: 900px; margin: auto;">
      <v-col cols="12" md="10" class="fade-in">
        <h1 class="title mb-6">Quiz de Evaluación</h1>
        <p class="description mb-8">Pon a prueba tus conocimientos sobre bases de datos.</p>

        <QuizComponent v-if="questions.length" :preguntas="questions" />
        <v-alert v-else type="info">Cargando preguntas...</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStoreQuestion } from '~/stores/questions'
import QuizComponent from '@/components/QuizComponent.vue'

const storeQuestion = useStoreQuestion()
const questions = computed(() => storeQuestion.questions)

onMounted(() => {
  storeQuestion.fetchQuestions()
})
</script>

<style>
.full-screen-background {
  background-color: #0D1B2A;
  min-height: 100vh;
  color: #eee;
  padding: 3rem 1.5rem;
}
.title {
  font-weight: 700;
  font-size: 2.8rem;
  color: #00B8D9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.description {
  font-size: 1.1rem;
  color: #B0D7DE;
}
</style>
