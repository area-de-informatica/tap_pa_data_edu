<template>
  <div>
    <transition-group name="fade-slide" tag="div">
      <div v-if="!showResult" :key="currentPregunta.id" class="quiz-question">
        <h2 class="question-title">{{ currentPregunta.pregunta }}</h2>
        <v-list dense>
          <v-list-item
            v-for="(opcion, i) in currentPregunta.opciones"
            :key="i"
            :class="{
              selected: selectedAnswer === opcion,
              correct: showCorrect && opcion === currentPregunta.respuestaCorrecta,
              wrong: showCorrect && selectedAnswer === opcion && opcion !== currentPregunta.respuestaCorrecta,
            }"
            @click="selectAnswer(opcion)"
            :disabled="showCorrect"
          >
            <v-list-item-content>
              <v-list-item-title>{{ opcion }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn
          :disabled="selectedAnswer === null"
          color="btn-primary"
          class="mt-4"
          @click="nextOrFinish"
        >
          {{ isLastQuestion ? 'Finalizar' : 'Siguiente' }}
        </v-btn>
      </div>

      <div v-else key="result" class="quiz-result">
        <h2 class="result-title">¡Quiz completado!</h2>
        <p class="result-score">Puntaje: {{ score }} / {{ preguntas.length }}</p>
        <v-btn color="btn-primary" @click="restartQuiz">Reiniciar Quiz</v-btn>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  preguntas: Array,
});

const currentIndex = ref(0);
const selectedAnswer = ref(null);
const score = ref(0);
const showCorrect = ref(false);
const showResult = ref(false);

const currentPregunta = computed(() => props.preguntas[currentIndex.value]);
const isLastQuestion = computed(() => currentIndex.value === props.preguntas.length - 1);

function selectAnswer(opcion) {
  if (showCorrect.value) return; // prevenir cambiar después de responder
  selectedAnswer.value = opcion;
}

function nextOrFinish() {
  if (!selectedAnswer.value) return;

  showCorrect.value = true;

  // Incrementar puntaje si la respuesta es correcta
  if (selectedAnswer.value === currentPregunta.value.respuestaCorrecta) {
    score.value++;
  }

  // Esperar 1.5s para mostrar siguiente pregunta o resultado
  setTimeout(() => {
    showCorrect.value = false;
    selectedAnswer.value = null;
    if (isLastQuestion.value) {
      showResult.value = true;
    } else {
      currentIndex.value++;
    }
  }, 1500);
}

function restartQuiz() {
  currentIndex.value = 0;
  selectedAnswer.value = null;
  score.value = 0;
  showCorrect.value = false;
  showResult.value = false;
}
</script>

<style scoped>
.quiz-question, .quiz-result {
  background-color: #112F3C;
  border-radius: 16px;
  padding: 2rem;
  color: #A9D6E5;
  max-width: 700px;
  margin: auto;
}

.question-title {
  color: #00B8D9;
  font-weight: 700;
  margin-bottom: 1rem;
}

.v-list-item {
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: background-color 0.3s ease;
}

.v-list-item.selected {
  background-color: #007A99;
  color: white;
}

.v-list-item.correct {
  background-color: #00B8D9;
  color: white;
}

.v-list-item.wrong {
  background-color: #B00020;
  color: white;
}

.v-list-item:hover:not(.selected):not(.correct):not(.wrong) {
  background-color: rgba(0,184,217,0.2);
}

.btn-primary {
  background-color: #00B8D9 !important;
  color: white !important;
  font-weight: 600;
  text-transform: none;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 184, 217, 0.6);
}

.btn-primary:hover {
  background-color: #007A99 !important;
  box-shadow: 0 6px 20px rgba(0, 122, 153, 0.8);
}

/* Animación de transición para preguntas */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Resultado */
.result-title {
  color: #00B8D9;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

.result-score {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
}
</style>
