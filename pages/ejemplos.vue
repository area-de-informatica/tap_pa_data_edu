<template>
  <v-container fluid class="full-screen-background pa-6" style="overflow-x: hidden;">
    <v-row justify="center" style="max-width: 900px; margin: auto;">

      <v-col cols="12">
        <h1 class="title mb-8">Ejemplos prácticos en educación</h1>
      </v-col>

      <!-- Aquí usamos cols="12" para móvil y md="6" para pantalla mediana+ -->
      <v-col
        v-for="(ejemplo, index) in ejemplos"
        :key="index"
        cols="12"
        md="6"
        class="d-flex"
      >
        <EjemploPractico
          :titulo="ejemplo.titulo"
          :descripcion="ejemplo.descripcion"
          :pasos="ejemplo.pasos"
          :imagen="ejemplo.imagen"
          class="flex-grow-1"
        />
      </v-col>

      <v-col cols="12" class="d-flex justify-end mt-12">
        <v-btn
          color="btn-primary"
          large
          rounded
          to="/quiz"
        >
          Ir a Evaluación
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import EjemploPractico from '~/components/EjemploPractico.vue'

const ejemplos = [
  {
    titulo: 'Búsqueda en ERIC',
    descripcion: 'ERIC es una base de datos académica especializada en educación. Aquí aprenderás cómo realizar búsquedas efectivas con filtros y operadores.',
    pasos: [
      'Accede a https://eric.ed.gov/',
      'Haz clic en “Advanced Search”.',
      'Escribe términos como: “literacy AND technology”.',
      'Filtra por fecha, nivel educativo o tipo de publicación.',
      'Selecciona un resultado, revisa su resumen y copia la cita en formato APA.'
    ],
    imagen: '/api/placeholder/400/250'
  },
  {
    titulo: 'Uso de operadores booleanos en Google Scholar',
    descripcion: 'Aprende cómo combinar operadores como AND, OR y NOT para mejorar los resultados de búsqueda académica en Google Scholar.',
    pasos: [
      'Ve a https://scholar.google.com/',
      'Escribe una consulta como: “matemáticas AND primaria NOT secundaria”.',
      'Compara resultados con diferentes combinaciones.',
      'Filtra por idioma y por año.',
      'Guarda los resultados en tu perfil de Google Académico.'
    ],
    imagen: '/api/placeholder/400/250'
  },
  {
    titulo: 'Actividad de aula: búsqueda grupal guiada',
    descripcion: 'Los estudiantes desarrollan una investigación sencilla usando estrategias de búsqueda académica colaborativa.',
    pasos: [
      'Organiza equipos de 3-4 estudiantes.',
      'Propón un tema: “Uso de celulares en el aula”.',
      'Diseña preguntas de investigación y palabras clave.',
      'Busquen en bases como ERIC, Scielo o Redalyc.',
      'Expongan los hallazgos en una presentación oral o mural digital.'
    ],
    imagen: '/api/placeholder/400/250'
  },
  {
    titulo: 'Uso de filtros avanzados en bases académicas',
    descripcion: 'Aprende a utilizar opciones avanzadas de filtrado para refinar aún más tus resultados.',
    pasos: [
      'En ERIC, selecciona “Advanced Search”.',
      'Filtra por idioma (English, Spanish), nivel (Primary, Secondary).',
      'Usa combinaciones: “inclusion OR diversity” AND “early education”.',
      'Ordena por fecha de publicación o relevancia.',
      'Revisa los resúmenes para confirmar pertinencia del contenido.'
    ],
    imagen: '/api/placeholder/400/250'
  },
  {
    titulo: 'Evaluar la calidad de las fuentes encontradas',
    descripcion: 'No todo lo que aparece en bases de datos es útil. Aprende a evaluar si una fuente es confiable, actual y académicamente válida.',
    pasos: [
      'Revisa si el documento tiene autor y afiliación institucional.',
      'Busca la fecha de publicación: ¿es reciente?',
      'Verifica si fue publicado en una revista científica indexada.',
      'Lee el resumen para asegurarte de que trata el tema que buscas.',
      'Evita blogs, opiniones o páginas sin respaldo académico.'
    ],
    imagen: '/api/placeholder/400/250'
  },
]
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
</style>
