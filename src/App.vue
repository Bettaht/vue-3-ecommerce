<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <div class="wrapper">

      <nav>

      </nav>
    </div>
  </header> -->

  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate">Home</v-btn>
        </RouterLink>
        
        <RouterLink to="/cart" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate">Cart</v-btn>
        </RouterLink>

        <RouterLink to="/about" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate">About</v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-main>
      
      <v-container>
        <RouterView /><!-- Para mostrar el contenido de la ruta seleccionada -->
      </v-container>
      
    </v-main>
  </v-app>

</template>


