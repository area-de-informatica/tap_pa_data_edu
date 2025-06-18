<template>
  <v-container fluid class="full-screen-background pa-6">
    <v-row justify="center" style="max-width: 1200px; margin: auto;">

      <v-col cols="12">
        <h1 class="title mb-4">Ejemplos Prácticos</h1>
        <p class="subtitle mb-8">
          Aprende con casos reales y ejercicios interactivos sobre bases de datos académicas
        </p>
      </v-col>

      <v-col cols="12" class="mb-6">
        <v-chip-group
          v-model="storeEjemplos.filtroCategoria"
          selected-class="text-white"
          color="primary"
          @update:model-value="handleFiltroChange"
        >
          <v-chip
            v-for="categoria in storeEjemplos.categorias"
            :key="categoria"
            :value="categoria"
            filter
            variant="outlined"
            class="filter-chip"
          >
            {{ categoria.charAt(0).toUpperCase() + categoria.slice(1) }}
          </v-chip>
        </v-chip-group>
      </v-col>

      <v-col v-if="storeEjemplos.loading" cols="12" class="text-center">
        <v-progress-circular 
          indeterminate 
          color="primary" 
          size="64"
        ></v-progress-circular>
        <p class="mt-4 loading-text">Cargando ejemplos...</p>
      </v-col>

      <v-col v-else-if="storeEjemplos.error" cols="12" class="text-center">
        <v-alert
          type="error"
          variant="tonal"
          class="error-alert"
        >
          {{ storeEjemplos.error }}
        </v-alert>
        <v-btn class="mt-4" color="primary" @click="storeEjemplos.fetchEjemplos()">
          Reintentar Carga
        </v-btn>
      </v-col>

      <v-col v-else-if="storeEjemplos.ejemplosFiltrados.length === 0 && !storeEjemplos.loading" cols="12" class="text-center">
        <p class="no-examples-text">No hay ejemplos disponibles con la categoría seleccionada.</p>
        <p v-if="storeEjemplos.filtroCategoria !== 'todos'" class="no-examples-text">Intenta seleccionar "Todos" o verifica tus datos.</p>
      </v-col>

      <v-col
        v-else
        v-for="ejemplo in storeEjemplos.ejemplosFiltrados"
        :key="ejemplo.id"
        cols="12"
        sm="6"
        lg="4"
        class="d-flex"
      >
        <EjemploPractico
          :titulo="ejemplo.titulo"
          :descripcion="ejemplo.descripcion"
          :pasos="ejemplo.pasos"
          :imagen="ejemplo.imagen"
          :categoria="ejemplo.categoria"
          :duracion="ejemplo.duracion"
          :completado="ejemplo.completado"
          :mostrarPasos="true"
          class="flex-grow-1"
          @click="openEjemploDialog(ejemplo)" />
      </v-col>

      <v-col cols="12" class="mt-8">
        <v-card class="stats-card pa-4" elevation="4">
          <v-row align="center">
            <v-col cols="12" md="8">
              <h3 class="stats-title">Tu Progreso</h3>
              <p class="stats-subtitle">
                {{ storeEjemplos.completados }}/{{ storeEjemplos.totalEjemplos }} ejemplos completados
              </p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-progress-circular
                :model-value="storeEjemplos.progreso"
                size="80"
                width="8"
                color="success"
                class="progress-circle"
              >
                {{ storeEjemplos.progreso }}%
              </v-progress-circular>
            </v-col>
          </v-row>
          <v-progress-linear
            :model-value="storeEjemplos.progreso"
            color="success"
            height="8"
            rounded
            class="mt-4"
          ></v-progress-linear>
        </v-card>
      </v-col>

      <v-col cols="12" class="d-flex justify-end mt-6">
        <v-btn
          color="btn-primary"
          size="large"
          rounded="lg"
          to="/quiz"
          class="nav-btn"
          :disabled="storeEjemplos.progreso < 80" >
          Continuar a Evaluación
          <v-icon class="ml-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>

      <v-dialog 
        v-model="dialogOpen" 
        max-width="800"
        scrollable
        class="example-dialog"
      >
        <v-card class="dialog-card">
          <v-toolbar color="primary" class="dialog-toolbar">
            <v-toolbar-title class="dialog-title">{{ storeEjemplos.currentEjemplo?.titulo }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="closeEjemploDialog" class="dialog-close-btn">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text class="dialog-content pa-6">
            <div v-if="storeEjemplos.currentEjemplo">
              <v-img 
                v-if="storeEjemplos.currentEjemplo.imagen && storeEjemplos.currentEjemplo.imagen !== '/api/placeholder/400/250'" 
                :src="storeEjemplos.currentEjemplo.imagen" 
                class="mb-4 rounded-lg"
                height="300"
                cover
              ></v-img>
              <p class="dialog-description mb-4">{{ storeEjemplos.currentEjemplo.descripcion }}</p>

              <div v-if="storeEjemplos.currentEjemplo.url || storeEjemplos.currentEjemplo.contenidoDetallado">
                <v-divider class="my-4"></v-divider>
                <h3 class="dialog-section-title mb-3">Detalles y Recursos</h3>
                
                <v-btn
                  v-if="storeEjemplos.currentEjemplo.url"
                  color="accent"
                  variant="elevated"
                  :href="storeEjemplos.currentEjemplo.url"
                  target="_blank"
                  class="mb-4 external-link-btn"
                  prepend-icon="mdi-link"
                >
                  Ir al Recurso Externo
                </v-btn>

                <div 
                  v-if="storeEjemplos.currentEjemplo.contenidoDetallado" 
                  class="detailed-content"
                  v-html="storeEjemplos.currentEjemplo.contenidoDetallado"
                ></div>

              </div>

              <v-divider class="my-4"></v-divider>
              <h3 class="dialog-section-title mb-3">Pasos para Realizar</h3>
              <ContenidoListaSimple :items="storeEjemplos.currentEjemplo.pasos" icon="mdi-numeric-positive-1" icon-color="#00B8D9" />

            </div>
            <p v-else class="text-center text-red">No se pudo cargar el detalle del ejemplo.</p>
          </v-card-text>

          <v-card-actions class="dialog-actions pa-4">
            <v-spacer></v-spacer>
            <v-btn 
              :color="storeEjemplos.currentEjemplo?.completado ? 'success' : 'primary'"
              variant="elevated"
              @click="toggleCompletadoFromDialog(storeEjemplos.currentEjemplo?.id)"
            >
              <v-icon class="mr-2">
                {{ storeEjemplos.currentEjemplo?.completado ? 'mdi-check' : 'mdi-play' }}
              </v-icon>
              {{ storeEjemplos.currentEjemplo?.completado ? 'Marcado como Completado' : 'Marcar como Completado' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import EjemploPractico from '~/components/EjemploPractico.vue';
import ContenidoListaSimple from '~/components/ContenidoListaSimple.vue';
import { useEjemplosStore } from '~/stores/ejemplos';

const storeEjemplos = useEjemplosStore();
const dialogOpen = ref(false);

onMounted(async () => {
  await storeEjemplos.fetchEjemplos();
});

const openEjemploDialog = (ejemplo) => {
  storeEjemplos.setCurrentEjemplo(ejemplo);
  dialogOpen.value = true;
};

const closeEjemploDialog = () => {
  dialogOpen.value = false;
  storeEjemplos.setCurrentEjemplo(null);
};

const toggleCompletadoFromDialog = (ejemploId) => {
  if (ejemploId) {
    storeEjemplos.marcarCompletado(ejemploId);
  }
};

const handleFiltroChange = (categoria) => {
  storeEjemplos.setFiltroCategoria(categoria);
};
</script>

<style scoped>
.full-screen-background {
  background: linear-gradient(135deg, #0D1B2A 0%, #1A2332 100%);
  min-height: 100vh;
  color: #E2E8F0;
}

.title {
  font-weight: 700;
  font-size: 3rem;
  color: #00B8D9;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  text-align: center;
}

.subtitle {
  font-size: 1.2rem;
  color: #A0AEC0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.filter-chip {
  margin: 4px;
  border-color: #00B8D9 !important;
  color: #00B8D9 !important;
  transition: all 0.3s ease;
}

.filter-chip:hover {
  background-color: rgba(0, 184, 217, 0.1) !important;
}

.loading-text {
  color: #A0AEC0;
  font-size: 1.1rem;
}

.error-alert {
  max-width: 600px;
  margin: 20px auto;
}

.no-examples-text {
  color: #A0AEC0;
  font-size: 1.1rem;
  margin-top: 20px;
}

.stats-card {
  background: rgba(26, 35, 50, 0.8) !important;
  border: 1px solid #2D3748;
  backdrop-filter: blur(10px);
}

.stats-title {
  color: #00B8D9;
  font-weight: 600;
  margin-bottom: 8px;
}

.stats-subtitle {
  color: #A0AEC0;
  font-size: 1rem;
}

.progress-circle {
  font-weight: 600;
  font-size: 1.2rem;
}

.nav-btn {
  background: linear-gradient(45deg, #00B8D9, #007A99) !important;
  color: white !important;
  font-weight: 600;
  text-transform: none;
  box-shadow: 0 6px 20px rgba(0, 184, 217, 0.4);
  transition: all 0.3s ease;
}

.nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 184, 217, 0.6);
}

@media (max-width: 768px) {
  .title {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}

.example-dialog {
  .dialog-card {
    background: #1A2332 !important;
    border-radius: 12px;
    border: 1px solid #2D3748;
    box-shadow: 0 8px 30px rgba(0, 184, 217, 0.2);
  }

  .dialog-toolbar {
    border-radius: 12px 12px 0 0 !important;
    background: linear-gradient(90deg, #00B8D9, #007A99) !important;
  }

  .dialog-title {
    color: white !important;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .dialog-close-btn {
    color: white !important;
  }

  .dialog-content {
    color: #E2E8F0;
    font-size: 1rem;
    line-height: 1.6;
    max-height: calc(90vh - 150px);
    overflow-y: auto;
  }

  .dialog-description {
    font-size: 1.1rem;
    color: #B0D7DE;
  }

  .dialog-section-title {
    color: #00B8D9;
    font-weight: 600;
    font-size: 1.3rem;
  }

  .external-link-btn {
    background: linear-gradient(45deg, #00B8D9, #007A99) !important;
    color: white !important;
    font-weight: 600;
    text-transform: none;
  }

  .detailed-content {
    background: #0D1B2A;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #2D3748;
    margin-top: 1rem;
    color: #E2E8F0;
    white-space: pre-wrap;
  }

  .detailed-content a {
    color: #00B8D9 !important;
    text-decoration: underline;
  }

  .dialog-actions {
    background: #1A2332;
    border-top: 1px solid #2D3748;
  }
}
</style>