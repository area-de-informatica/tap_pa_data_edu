<template>
  <v-card 
    class="ejemplo-card ma-2" 
    elevation="8"
    :class="{ 'completado': completado }"
    @click="handleCardClick" 
  >
    <v-img
      :src="imagen"
      height="180"
      cover
      class="ejemplo-imagen"
    >
      <div class="overlay-gradient"></div>
      <v-chip
        :color="getCategoriaColor(categoria)"
        size="small"
        class="categoria-chip"
      >
        {{ categoria }}
      </v-chip>
    </v-img>

    <v-card-title class="ejemplo-titulo">
      {{ titulo }}
      <v-icon 
        v-if="completado" 
        color="success" 
        class="ml-2"
      >
        mdi-check-circle
      </v-icon>
    </v-card-title>

    <v-card-subtitle class="ejemplo-duracion">
      <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
      {{ duracion }}
    </v-card-subtitle>

    <v-card-text class="ejemplo-descripcion">
      {{ descripcion }}
    </v-card-text>

    <v-expansion-panels v-if="mostrarPasos" variant="accordion" class="mx-4 mb-4">
      <v-expansion-panel>
        <v-expansion-panel-title class="pasos-titulo">
          <v-icon class="mr-2">mdi-format-list-numbered</v-icon>
          Pasos a seguir
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list class="pasos-lista">
            <v-list-item
              v-for="(paso, index) in pasos"
              :key="index"
              class="paso-item"
            >
              <template v-slot:prepend>
                <v-avatar size="24" color="primary" class="paso-numero">
                  {{ index + 1 }}
                </v-avatar>
              </template>
              <v-list-item-title class="paso-texto">
                {{ paso }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-card-actions class="pa-4">
      <v-btn
        color="primary"      
        variant="elevated"
        block
        @click.stop="handleCardClick" 
      >
        <v-icon class="mr-2">mdi-play</v-icon>
        Comenzar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  pasos: { 
    type: Array,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    default: 'general'
  },
  duracion: {
    type: String,
    default: '10 min'
  },
  completado: {
    type: Boolean,
    default: false
  },
  mostrarPasos: { 
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['click'])

const getCategoriaColor = (categoria) => {
  const colores = {
    'basico': 'green',
    'intermedio': 'orange',
    'avanzado': 'red',
    'general': 'blue'
  }
  return colores[categoria] || 'blue'
}

const handleCardClick = () => {
  emit('click', props)
}
</script>

<style scoped>
.ejemplo-card {
  background: #1A2332 !important;
  border: 1px solid #2D3748;
  border-radius: 12px !important;
  transition: all 0.3s ease;
  cursor: pointer;
}

.ejemplo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 184, 217, 0.3) !important;
}

.ejemplo-card.completado {
  border-color: #4CAF50;
  background: #1A2A1A !important;
}

.ejemplo-imagen {
  position: relative;
  border-radius: 12px 12px 0 0;
}

.overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.4), transparent);
}

.categoria-chip {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  font-weight: 600;
}

.ejemplo-titulo {
  color: #00B8D9 !important;
  font-weight: 600;
  font-size: 1.2rem;
  padding-bottom: 8px;
}

.ejemplo-duracion {
  color: #A0AEC0 !important;
  font-size: 0.9rem;
}

.ejemplo-descripcion {
  color: #E2E8F0 !important;
  line-height: 1.5;
  padding: 16px;
}

.pasos-titulo {
  color: #00B8D9 !important;
  font-weight: 500;
}

.pasos-lista {
  background: transparent !important;
}

.paso-item {
  padding: 8px 0;
  border-bottom: 1px solid #2D3748;
}

.paso-item:last-child {
  border-bottom: none;
}

.paso-numero {
  background: #00B8D9 !important;
  color: white !important;
  font-size: 0.8rem;
  font-weight: 600;
}

.paso-texto {
  color: #E2E8F0 !important;
  font-size: 0.95rem;
}
</style>