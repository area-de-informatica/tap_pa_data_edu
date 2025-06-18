<template>
  <div v-if="data && data.length > 0">
    <p class="mt-4" v-if="introText">{{ introText }}</p>
    <v-simple-table class="elevation-1 mt-2" style="color:#A9D6E5">
      <thead>
        <tr style="background-color: #112F3C; color: #00B8D9;">
          <th>ID</th>
          <th>Nombre</th>
          <th>Grado</th>
          <th>Nota Matemáticas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="est in data" :key="est.id">
          <td>{{ est.id }}</td>
          <td>{{ est.nombre }}</td>
          <td>{{ est.grado }}</td>
          <td>{{ est.nota }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script setup>
defineProps({
  data: {
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
/* Añade cualquier estilo específico de tabla aquí si es necesario */
</style>