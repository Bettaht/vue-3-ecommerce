<script lang="ts">
    import { useCartStore } from '@/stores/cart'

    export default{
        computed: {
            itemsCount(){
                const cartStore =useCartStore();
                return cartStore.cartItemsCount;
            }
        }
    }
</script>

<template>
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          size="32">
          <v-img src="/logo.jpg"/>

        </v-avatar>

        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate" :active="$route.name === 'home' || $route.name === 'category'">
            <v-icon class="mr-0 ms-2" icon="mdi-home-variant"/>
            <span class="d-none d-sm-flex">Home</span></v-btn>
        </RouterLink>
        
        <RouterLink to="/cart" custom v-slot="{navigate}">
          <v-badge :content = 'itemsCount' :model-value="itemsCount > 0" color="orange-lighten-2">
            <v-btn  variant="text" @click="navigate" :active="$route.name === 'cart'">
              <v-icon class="mr-0 ms-2" icon="mdi-cart"/>
              <span class="d-none d-sm-flex">Cart</span></v-btn>
          </v-badge>
          
        </RouterLink>

        <RouterLink to="/about" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate" :active="$route.name === 'about'">
            <v-icon class="mr-0 ms-2" icon="mdi-information"/>
            <span class="d-none d-sm-flex">About</span></v-btn>
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
</template>