<template>
  <p :class="className" v-html="text"></p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
/* Puedes añadir estilos específicos si es necesario, pero los estilos globales de `pages/contenido.vue` suelen ser suficientes */
</style>