<template>
  <v-app>
    <v-app-bar color="#0D1B2A" dark app elevation="4">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="app-title font-weight-bold">
        OVA: Bases de Datos en Educación
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
      color="#112F3C"
      class="drawer"
    >
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          :value="item.value"
          :active-class="'active-link'"
          link
          @click="drawer = false"
        >
          <template v-slot:prepend>
            <v-icon :color="getItemColor(item)">{{ getItemIcon(item.value) }}</v-icon>
          </template>
          <v-list-item-title class="list-item-title">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main-content">
      <div class="content-wrapper">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = [
  { title: 'INICIO', value: 'index', to: '/' },
  { title: 'CONTENIDO', value: 'contenido', to: '/contenido' },
  { title: 'EJEMPLOS', value: 'ejemplos', to: '/ejemplos' },
  { title: 'QUIZ', value: 'quiz', to: '/quiz' },
  { title: 'CRÉDITOS', value: 'about', to: '/about' },
]

const drawer = ref(false)

const getItemIcon = (value) => {
  const icons = {
    'index': 'mdi-home',
    'contenido': 'mdi-book-open-variant',
    'ejemplos': 'mdi-lightbulb-on',
    'quiz': 'mdi-help-circle',
    'about': 'mdi-information'
  }
  return icons[value] || 'mdi-circle'
}

const getItemColor = (item) => {
  return route.path === item.to ? '#FFFFFF' : '#A9D6E5'
}
</script>

<style scoped>
.v-application--is-ltr .v-navigation-drawer.drawer {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.drawer {
  color: #A9D6E5;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
}

.app-title {
  color: #00B8D9 !important;
  font-size: 1.1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.list-item-title {
  font-weight: 600;
  color: #A9D6E5;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.list-item-title:hover {
  color: #00B8D9;
}

.active-link {
  background: linear-gradient(45deg, #00B8D9, #007A99) !important;
  color: white !important;
  border-radius: 8px;
  margin: 4px 8px;
  transition: all 0.3s ease;
}

.active-link .list-item-title {
  color: white !important;
  font-weight: 700 !important;
}

/* Contenedor principal con padding para compensar app-bar */
.main-content {
  background-color: #0D1B2A !important;
  padding: 0 !important;
  margin: 0 !important;
}

.content-wrapper {
  padding-top: 64px; /* Altura estándar del v-app-bar */
  min-height: 100vh;
  width: 100%;
}

/* Ajuste para móviles */
@media (max-width: 768px) {
  .content-wrapper {
    padding-top: 56px; /* Altura menor en móviles */
  }
  
  .app-title {
    font-size: 1rem;
  }
}

/* Eliminar cualquier padding/margin adicional de Vuetify */
:deep(.v-main__wrap) {
  padding: 0 !important;
  margin: 0 !important;
}

/* Asegurar que el app-bar esté siempre encima */
:deep(.v-app-bar) {
  z-index: 1000;
}
</style>