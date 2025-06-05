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
                <p v-html="item.description"></p>
                <p v-if="item.usageContext">{{ item.usageContext }}</p>

                <!-- Usos (si existen) -->
                <v-list v-if="item.usos" dense class="dark-list">
                  <v-list-item v-for="(uso, index) in item.usos" :key="index">
                    <v-list-item-icon>
                      <v-icon color="#00B8D9">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="card-text">{{ uso }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <!-- Tabla de estudiantes (si existe) -->
                <div v-if="item.estudiantes">
                  <p class="mt-4">{{ item.exampleIntro }}</p>
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
                      <tr v-for="est in item.estudiantes" :key="est.id">
                        <td>{{ est.id }}</td>
                        <td>{{ est.nombre }}</td>
                        <td>{{ est.grado }}</td>
                        <td>{{ est.nota }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </div>

                <!-- Lista de tipos, componentes, comandos, modelos, herramientas o ventajas (si existen) -->
                <ul v-if="item.tipos || item.componentes || item.comandos || item.modelos || item.herramientas || item.ventajas">
                  <li v-for="(subItem, index) in item.tipos || item.componentes || item.comandos || item.modelos || item.herramientas || item.ventajas" :key="index">
                    <template v-if="item.tipos">
                      <strong>{{ subItem.nombre }}:</strong> {{ subItem.detalle }}
                      <v-tooltip location="top">
                        <template v-slot:activator="{ props }">
                          <span v-bind="props" class="tooltip-text">Ejemplo: {{ subItem.ejemplo }}</span>
                        </template>
                        <span>Más sobre {{ subItem.nombre }}</span>
                      </v-tooltip>
                    </template>
                    <template v-else-if="item.componentes || item.modelos">
                      <strong>{{ subItem.nombre }}:</strong> {{ subItem.descripcion }}
                    </template>
                    <template v-else-if="item.comandos">
                      <code>{{ subItem.nombre }}</code>: {{ subItem.funcion }}
                    </template>
                    <template v-else>
                      {{ subItem }}
                    </template>
                  </li>
                </ul>

                <!-- Comparación, integridad, seguridad o información adicional (si existen) -->
                <p v-if="item.comparison">{{ item.comparison }}</p>
                <p v-if="item.integrity">{{ item.integrity }}</p>
                <p v-if="item.security">{{ item.security }}</p>
                <p v-if="item.additionalInfo">{{ item.additionalInfo }}</p>

                <!-- Ejemplo JSON (si existe) -->
                <div v-if="item.jsonExample">
                  <p>{{ item.exampleIntro }}</p>
                  <pre style="background:#112F3C; padding:1rem; border-radius:8px; color:#00B8D9;">
{{ item.jsonExample }}
                  </pre>
                </div>

                <!-- Casos de uso (si existen) -->
                <div v-if="item.casos">
                  <p class="mt-4">{{ item.casosIntro }}</p>
                  <v-row>
                    <v-col v-for="(caso, index) in item.casos" :key="index" cols="12" sm="6">
                      <v-card class="card-secondary pa-4">
                        <v-card-text class="card-text">
                          <strong>{{ caso.titulo }}:</strong> {{ caso.descripcion }}
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>

                <!-- Consejos prácticos (si existen) -->
                <v-list v-if="item.consejos" dense class="dark-list">
                  <v-list-item v-for="(consejo, index) in item.consejos" :key="index">
                    <v-list-item-icon>
                      <v-icon color="#00B8D9">mdi-lightbulb-on</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="card-text">{{ consejo }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
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

const contenidoStore = useContenidoStore()
const contenidoItems = computed(() => contenidoStore.contenidoItems)
const loading = ref(true)
const error = ref(false)
const expandedPanels = ref(new Set())
const totalPanels = ref(0)
const activePanels = ref([])

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
}
.description {
  font-size: 1.1rem;
  color: #B0D7DE;
}
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
  margin-bottom: 1rem;
  color: #00B8D9;
}
.card-text {
  color: #B0D7DE;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
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