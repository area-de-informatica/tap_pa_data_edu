<template>
  <div v-if="jsonString">
    <p v-if="introText">{{ introText }}</p>
    <pre style="background:#112F3C; padding:1rem; border-radius:8px; color:#00B8D9; overflow-x: auto;">
{{ jsonString }}
    </pre>
  </div>
</template>

<script setup>
defineProps({
  jsonString: {
    type: String,
    required: true,
  },
  introText: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
/* Puedes añadir estilos específicos si es necesario */
</style>