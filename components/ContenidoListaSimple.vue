<template>
  <v-list dense class="dark-list">
    <v-list-item v-for="(item, index) in items" :key="index">
      <v-list-item-icon>
        <v-icon :color="iconColor">{{ icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="card-text">{{ item }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    default: 'mdi-check-circle-outline', // Ícono por defecto
  },
  iconColor: {
    type: String,
    default: '#00B8D9', // Color por defecto de los íconos
  },
});
</script>

<style scoped>
/* Los estilos de .dark-list y .card-text se definen en pages/contenido.vue y se heredan */
.dark-list {
  background-color: transparent !important;
  color: #B0D7DE !important;
}
.dark-list .v-list-item {
  background-color: transparent !important;
  color: #B0D7DE !important;
}
.dark-list .v-list-item-icon {
  color: #00B8D9 !important;
}
.dark-list .v-list-item-title {
  color: #B0D7DE !important;
}
</style>