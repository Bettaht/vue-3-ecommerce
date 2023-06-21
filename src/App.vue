<script lang="ts">
import TopBar from './components/TopBar.vue'

export default {
  components:{
    TopBar,

  }
}

</script>

<template>
  <v-app>
    <TopBar />
    <v-main>
      
      <v-container>
        <RouterView /><!-- Para mostrar el contenido de la ruta seleccionada -->
      </v-container>
      
    </v-main>
  </v-app>

</template>
