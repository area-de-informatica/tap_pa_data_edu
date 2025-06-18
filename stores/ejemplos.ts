// stores/ejemplos.js (o .ts)
import { defineStore } from 'pinia';

export const useEjemplosStore = defineStore('ejemplos', {
  state: () => ({
    ejemplos: [],
    currentEjemplo: null,
    filtroCategoria: 'todos',
    loading: false,
    error: null,
  }),
  getters: {
    ejemplosFiltrados: (state) => {
      if (!Array.isArray(state.ejemplos)) {
        return [];
      }
      if (state.filtroCategoria === 'todos') {
        return state.ejemplos;
      }
      return state.ejemplos.filter(ejemplo => 
        ejemplo.categoria && ejemplo.categoria.toLowerCase() === state.filtroCategoria
      );
    },
    categorias: (state) => {
      if (!Array.isArray(state.ejemplos)) {
        return ['todos'];
      }
      const uniqueCategories = new Set(state.ejemplos.map(ej => ej.categoria?.toLowerCase()).filter(Boolean));
      return ['todos', ...Array.from(uniqueCategories)];
    },
    completados: (state) => {
      if (!Array.isArray(state.ejemplos)) return 0;
      return state.ejemplos.filter(e => e.completado).length;
    },
    totalEjemplos: (state) => {
      if (!Array.isArray(state.ejemplos)) return 0;
      return state.ejemplos.length;
    },
    progreso: (state) => {
      const completadosCount = state.ejemplos.filter(e => e.completado).length;
      const totalCount = state.ejemplos.length;
      return totalCount > 0 ? Math.round((completadosCount / totalCount) * 100) : 0;
    }
  },
  actions: {
    async fetchEjemplos() {
      this.loading = true;
      this.error = null;
      try {
        const data = await $fetch('/api/ejemplos'); 
        this.ejemplos = Array.isArray(data) ? data : [];
      } catch (e) {
        console.error("Error al obtener ejemplos:", e);
        this.error = 'No se pudieron cargar los ejemplos. Inténtalo de nuevo más tarde.';
        this.ejemplos = [];
      } finally {
        this.loading = false;
      }
    },
    setCurrentEjemplo(ejemplo) {
      this.currentEjemplo = ejemplo;
    },
    marcarCompletado(id) {
      const ejemploIndex = this.ejemplos.findIndex(e => e.id === id);
      if (ejemploIndex !== -1) {
        this.ejemplos[ejemploIndex].completado = !this.ejemplos[ejemploIndex].completado;
      }
    },
    setFiltroCategoria(categoria) {
      this.filtroCategoria = categoria;
    },
  },
});