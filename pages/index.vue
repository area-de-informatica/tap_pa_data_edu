<template>
  <v-container
    fluid
    class="full-screen-background d-flex flex-column align-center justify-center"
  >
    <v-row justify="center" align="center" class="mb-12" style="max-width: 1200;">
      <v-col cols="12" class="text-center fade-in">
        <h1 class="title">
          Bienvenido al OVA de Búsqueda de Bases de Datos
        </h1>
        <p class="subtitle">
          Aprende cómo implementar búsquedas efectivas en bases de datos para mejorar procesos educativos.
        </p>
        <v-btn
          color="btn-primary"
          class="btn-hover mt-6"
          large
          rounded
          to="/contenido"
        >
          Comenzar a aprender
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center" class="gap-6" style="max-width: 1200;">
      <v-col cols="12" sm="4" class="fade-in delay-1">
        <v-card class="card-primary pa-6" elevation="10" >
          <h3 class="card-title">Contenido</h3>
          <p class="card-text">
            Fundamentos teóricos sobre bases de datos en contextos educativos.
          </p>
          <v-btn
            text
            class="btn-link"
            to="/contenido"
          >
            Ir a contenido
          </v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" class="fade-in delay-2">
        <v-card class="card-primary pa-6" elevation="10" >
          <h3 class="card-title">Ejemplos prácticos</h3>
          <p class="card-text">
            Casos de uso y demostraciones de implementación.
          </p>
          <v-btn
            text
            class="btn-link"
            to="/ejemplos"
          >
            Ir a ejemplos
          </v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" class="fade-in delay-3">
        <v-card class="card-primary pa-6" elevation="10" >
          <h3 class="card-title">Evaluación</h3>
          <p class="card-text">
            Pon a prueba tus conocimientos con nuestro quiz interactivo.
          </p>
          <v-btn
            text
            class="btn-link"
            to="/quiz"
          >
            Ir a evaluación
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

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
  margin-bottom: 0.5rem;
  color: #00B8D9;
}

.subtitle {
  color: #AACFD0;
  font-size: 1.2rem;
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

.card-primary {
  background-color: #112F3C;
  border-radius: 16px;
  color: #A9D6E5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-primary:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(0, 184, 217, 0.4);
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

.btn-link {
  color: #00B8D9 !important;
  font-weight: 600 !important;
  text-transform: none !important;
}

.btn-link:hover {
  color: #007A99 !important;
}

/* Animaciones simples */

.fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}

.fade-in.delay-1 {
  animation-delay: 0.3s;
}
.fade-in.delay-2 {
  animation-delay: 0.6s;
}
.fade-in.delay-3 {
  animation-delay: 0.9s;
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
