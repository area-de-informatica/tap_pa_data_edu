<template>
  <v-container fluid class="full-screen-background pa-6">
    <v-row justify="center" style="max-width: 800px; margin: auto;">
      <v-col cols="12" md="10" class="fade-in">

        <h1 class="title mb-6">Créditos y Agradecimientos</h1>

        <p class="text-content mb-6">
          Este OVA sobre <strong>Bases de Datos en Educación</strong> fue desarrollado con el objetivo de facilitar el aprendizaje de conceptos fundamentales y estrategias prácticas para la gestión de datos en entornos educativos.
        </p>

        <p class="text-content mb-6">
          Agradecemos especialmente a:
        </p>

        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="credit-name">Profesor/a: <strong>Nombre del profesor</strong></v-list-item-title>
              <v-list-item-subtitle>Guía y apoyo durante el desarrollo del proyecto.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="credit-name">Desarrolladores:</v-list-item-title>
              <!-- Lista de nombres afuera del v-list-item-subtitle para evitar estilos predeterminados -->
              <div class="credit-list">
                <p><strong>Luis Alejandro Arrieta Milanes</strong></p>
                <p><strong>Valentina Luna Villadiego</strong></p>
                <p><strong>Luis David Blanchar</strong></p>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <p class="text-content mt-8">
          Gracias a todos los que contribuyeron con ideas, revisiones y apoyo para hacer posible este OVA.
        </p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
/* No se necesita script para contenido estático */
</script>

<style>
.full-screen-background {
  background-color: #0D1B2A;
  min-height: 100vh;
  color: #eee;
  padding: 3rem 1.5rem;
}

.title {
  font-weight: 700;
  font-size: 2.8rem;
  color: #00B8D9;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.text-content {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #B0D7DE;
}

.credit-name {
  color: #00B8D9;
  font-weight: 600;
}

/* Estilos para la lista simple en bloque con fondo transparente */
.credit-list p {
  margin: 0.3rem 0;
  color: #B0D7DE;
  background: transparent;
}
</style>
