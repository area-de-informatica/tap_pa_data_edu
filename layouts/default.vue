<template>
  <v-app>
    <v-app-bar color="#0D1B2A" dark app>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text font-weight-bold">
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
          <v-list-item-title class="list-item-title">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const items = [
  { title: 'INICIO', value: 'index', to: '/' },
  { title: 'CONTENIDO', value: 'contenido', to: '/contenido' },
  { title: 'EJEMPLOS', value: 'ejemplos', to: '/ejemplos' },
  { title: 'QUIZ', value: 'quiz', to: '/quiz' },
  { title: 'CREDITOS', value: 'about', to: '/about' },
]

const drawer = ref(false)
</script>

<style scoped>
.v-application--is-ltr .v-navigation-drawer.drawer {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.drawer {
  color: #A9D6E5;
}

.list-item-title {
  font-weight: 600;
  color: #A9D6E5;
  transition: color 0.3s ease;
}

.list-item-title:hover {
  color: #00B8D9;
}

.active-link {
  background-color: #00B8D9 !important;
  color: white !important;
  font-weight: 700 !important;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
</style>
