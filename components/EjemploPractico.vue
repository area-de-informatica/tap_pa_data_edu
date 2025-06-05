<template>
  <v-card class="ejemplo-card pa-6 mb-6" elevation="10">
    <v-card-title class="card-title">
      {{ titulo }}
    </v-card-title>

    <v-card-subtitle class="card-subtitle">
      {{ descripcion }}
    </v-card-subtitle>

    <v-card-text>
      <h3 class="pasos-title">Pasos a seguir:</h3>
      <v-list dense class="custom-list">
        <v-list-item v-for="(paso, index) in pasos" :key="index" class="list-item">
          <v-list-item-content>
            <v-list-item-title>{{ index + 1 }}. {{ paso }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-img :src="imagen" height="200" cover class="mt-4 rounded-lg"></v-img>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  titulo: String,
  descripcion: String,
  pasos: Array,
  imagen: String,
});
</script>

<style>
.ejemplo-card {
  background-color: #112F3C !important;
  color: #A9D6E5 !important;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ejemplo-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(0, 184, 217, 0.4);
}

.card-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #00B8D9;
  margin-bottom: 0.5rem;
}

.card-subtitle {
  font-size: 1rem;
  color: #B0D7DE;
  margin-bottom: 1rem;
}

.pasos-title {
  color: #00B8D9;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.custom-list {
  padding-left: 1rem;
}

.custom-list .v-list-item-title {
  color: #B0D7DE;
  line-height: 1.6;
}

.list-item {
  margin-bottom: 0.5rem;
}

.v-img {
  border-radius: 12px;
  object-fit: cover;
  margin-top: 1rem;
  max-height: 200px;
}
</style>
