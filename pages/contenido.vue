<template>
  <v-container fluid class="full-screen-background pa-6">
    <v-row justify="center" style="max-width: 900px; margin: auto;">
      <v-col cols="12" class="fade-in">
        <h1 class="title mb-6">Contenido</h1>
        <p class="description mb-8">Descubre todo lo que necesitas saber sobre bases de datos y su aplicación en la educación.</p>

        <!-- Mensaje de carga o error -->
        <v-alert v-if="loading" type="info" class="mb-6">
          Cargando contenido...
        </v-alert>
        <v-alert v-if="error" type="error" class="mb-6">
          Error al cargar el contenido. Por favor, intenta de nuevo.
        </v-alert>

        <!-- Progreso de lectura -->
        <v-progress-linear
          v-if="!loading && !error"
          v-model="readProgress"
          color="btn-primary"
          height="25"
          class="mb-6"
          rounded
        >
          <template v-slot:default="{ value }">
            <strong>Progreso de lectura: {{ Math.round(value) }}%</strong>
            <span v-if="value < 80" class="progress-text">Debes leer al menos el 80% para continuar.</span>
            <span v-else class="progress-text">¡Listo para continuar!</span>
          </template>
        </v-progress-linear>

        <!-- Secciones de contenido -->
        <div v-if="!loading && !error">
          <v-expansion-panels
            variant="accordion"
            class="mb-6"
            multiple
            v-model="activePanels"
            @update:modelValue="trackPanelExpansion"
          >
            <v-expansion-panel
              v-for="(item, index) in contenidoItems"
              :key="item.id"
              :value="index"
              class="card-primary mb-3"
              elevation="10"
            >
              <v-expansion-panel-title class="card-title">
                {{ item.title }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="card-text">
                <!-- Usando los nuevos componentes aquí -->
                <ContenidoTexto :text="item.description" class-name="mb-4" />
                <ContenidoTexto v-if="item.usageContext" :text="item.usageContext" class-name="mb-4" />

                <ContenidoListaSimple v-if="item.usos" :items="item.usos" icon="mdi-check-circle" />

                <ContenidoTabla
                  v-if="item.estudiantes"
                  :data="item.estudiantes"
                  :intro-text="item.exampleIntro"
                />

                <ContenidoListaDetallada
                  v-if="item.tipos"
                  :items="item.tipos"
                  type="tipos"
                />
                <ContenidoListaDetallada
                  v-else-if="item.componentes"
                  :items="item.componentes"
                  type="componentes"
                />
                <ContenidoListaDetallada
                  v-else-if="item.comandos"
                  :items="item.comandos"
                  type="comandos"
                />
                <ContenidoListaDetallada
                  v-else-if="item.modelos"
                  :items="item.modelos"
                  type="modelos"
                />
                <ContenidoListaDetallada
                  v-else-if="item.herramientas"
                  :items="item.herramientas"
                  type="herramientas"
                />
                 <ContenidoListaSimple
                  v-else-if="item.ventajas"
                  :items="item.ventajas"
                  icon="mdi-check-circle"
                />
                <ContenidoListaSimple
                  v-else-if="item.desafios"
                  :items="item.desafios"
                  icon="mdi-alert-circle-outline"
                  icon-color="#FFC107"
                />
                <ContenidoListaSimple
                  v-else-if="item.tendencias"
                  :items="item.tendencias"
                  icon="mdi-trending-up"
                  icon-color="#4CAF50"
                />


                <ContenidoTexto v-if="item.comparison" :text="item.comparison" class-name="mb-4" />
                <ContenidoTexto v-if="item.integrity" :text="item.integrity" class-name="mb-4" />
                <ContenidoTexto v-if="item.security" :text="item.security" class-name="mb-4" />
                <ContenidoTexto v-if="item.additionalInfo" :text="item.additionalInfo" class-name="mb-4" />

                <ContenidoJson
                  v-if="item.jsonExample"
                  :json-string="item.jsonExample"
                  :intro-text="item.exampleIntro"
                />

                <ContenidoCasos
                  v-if="item.casos"
                  :casos="item.casos"
                  :intro-text="item.casosIntro"
                />

                <ContenidoListaSimple v-if="item.consejos" :items="item.consejos" icon="mdi-lightbulb-on" />
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- Botón para continuar a Ejemplos -->
          <div class="d-flex justify-end mt-8">
            <v-btn
              color="btn-primary"
              large
              rounded
              :disabled="readProgress < 80"
              :to="readProgress >= 80 ? '/ejemplos' : ''"
            >
              Continuar a Ejemplos
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useContenidoStore } from '~/stores/contenido'

// Importar los nuevos componentes
import ContenidoTexto from '~/components/ContenidoTexto.vue';
import ContenidoListaSimple from '~/components/ContenidoListaSimple.vue';
import ContenidoTabla from '~/components/ContenidoTabla.vue';
import ContenidoListaDetallada from '~/components/ContenidoListaDetallada.vue';
import ContenidoJson from '~/components/ContenidoJson.vue';
import ContenidoCasos from '~/components/ContenidoCasos.vue';


const contenidoStore = useContenidoStore()
const contenidoItems = computed(() => contenidoStore.contenidoItems)
const loading = ref(true)
const error = ref(false)
const expandedPanels = ref(new Set())
const totalPanels = ref(0)
const activePanels = ref([]) // Controla qué paneles están abiertos

const readProgress = computed(() => {
  const expandedCount = expandedPanels.value.size
  return totalPanels.value > 0 ? (expandedCount / totalPanels.value) * 100 : 0
})

const trackPanelExpansion = (value) => {
  expandedPanels.value.clear()
  value.forEach((panelIndex) => {
    expandedPanels.value.add(panelIndex)
  })
}

onMounted(async () => {
  loading.value = true
  error.value = false
  try {
    await contenidoStore.fetchContenido()
    totalPanels.value = contenidoItems.value.length
    loading.value = false
  } catch (err) {
    loading.value = false
    error.value = true
    console.error('Error al cargar el contenido:', err)
  }
})
</script>

<style scoped>
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
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  text-align: center; /* Centrar el título */
}
.description {
  font-size: 1.1rem;
  color: #B0D7DE;
  text-align: center; /* Centrar la descripción */
}
/* Estos estilos ahora se heredan por los componentes hijos o se duplican en ellos si son `scoped` */
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
.card-primary {
  background-color: #112F3C !important;
  border-radius: 16px !important;
  color: #A9D6E5 !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-primary:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(0, 184, 217, 0.4);
}
.card-secondary {
  background-color: #1A3E4F !important;
  border-radius: 8px !important;
  color: #A9D6E5 !important;
}
.card-title {
  font-weight: 600;
  color: #00B8D9;
}
.card-text {
  color: #B0D7DE;
  font-size: 0.95rem;
}
.btn-primary {
  background-color: #00B8D9 !important;
  color: white !important;
  font-weight: 600;
  text-transform: none;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 184, 217, 0.6);
}
.btn-primary:hover {
  background-color: #007A99 !important;
  box-shadow: 0 6px 20px rgba(0, 122, 153, 0.8);
}
.btn-primary:disabled {
  background-color: #4D6D7A !important;
  color: #A9D6E5 !important;
  opacity: 0.7;
  cursor: not-allowed;
}
.tooltip-text {
  color: #00B8D9;
  text-decoration: underline;
  cursor: pointer;
}
.progress-text {
  color: #ff0000;
  font-size: 0.9rem;
  margin-left: 10px; /* Espacio para el texto de progreso */
}
.fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
