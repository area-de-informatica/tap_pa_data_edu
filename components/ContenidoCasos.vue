<template>
  <div v-if="casos && casos.length > 0">
    <p class="mt-4" v-if="introText">{{ introText }}</p>
    <v-row>
      <v-col v-for="(caso, index) in casos" :key="index" cols="12" sm="6">
        <v-card class="card-secondary pa-4">
          <v-card-text class="card-text">
            <strong>{{ caso.titulo }}:</strong> {{ caso.descripcion }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
defineProps({
  casos: {
    type: Array,
    required: true,
  },
  introText: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
/* Los estilos de .card-secondary y .card-text se definen en pages/contenido.vue y se heredan */
.card-secondary {
  background-color: #1A3E4F !important;
  border-radius: 8px !important;
  color: #A9D6E5 !important;
}
</style>