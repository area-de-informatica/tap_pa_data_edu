<template>
  <ul v-if="items && items.length > 0">
    <li v-for="(subItem, index) in items" :key="index">
      <template v-if="type === 'tipos'">
        <strong>{{ subItem.nombre }}:</strong> {{ subItem.detalle }}
        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="tooltip-text">Ejemplo: {{ subItem.ejemplo }}</span>
          </template>
          <span>Más sobre {{ subItem.nombre }}</span>
        </v-tooltip>
      </template>
      <template v-else-if="type === 'componentes' || type === 'modelos'">
        <strong>{{ subItem.nombre }}:</strong> {{ subItem.descripcion }}
      </template>
      <template v-else-if="type === 'comandos'">
        <code>{{ subItem.nombre }}</code>: {{ subItem.funcion }}
      </template>
      <template v-else-if="type === 'herramientas'">
        {{ subItem }}
      </template>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true, // e.g., 'tipos', 'componentes', 'comandos', 'modelos', 'herramientas'
  },
});
</script>

<style scoped>
/* Los estilos de .tooltip-text se definen en pages/contenido.vue y se heredan */
.tooltip-text {
  color: #00B8D9;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px; /* Pequeño espacio para el ejemplo */
}

ul {
  list-style: none; /* Quita los puntos por defecto */
  padding-left: 0;
}

li {
  margin-bottom: 8px; /* Espacio entre items de lista */
  color: #B0D7DE; /* Color de texto para los elementos de lista */
}

li strong {
  color: #00B8D9; /* Color para los títulos de los subitems */
}

code {
  background-color: #1A3E4F;
  padding: 2px 4px;
  border-radius: 4px;
  color: #00B8D9;
  font-family: 'Courier New', Courier, monospace;
}
</style>