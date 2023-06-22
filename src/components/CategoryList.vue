<script lang="ts">
import { mapActions } from 'pinia';
import type { Category } from '../model/types';
import { useProductsStore } from '../stores/proudcts';
export default {
    data() {
        return{
            categories: [{
                id: 1,
                name: 'Oficina',
                description:'Productos para tu oficina'
            },{
                id: 2,
                name: 'Computadora',
                description:'Productos para tu setup'
            }] as Category[]
        };       
    },
    methods:{
      goToCategory(categoryId: number){
        this.$router.push({
          name: 'category', 
          params: { categoryId } 
        });
      },
      clearCategory(){
        this.$router.push({
          name: 'home'
        })
      },
      ...mapActions(useProductsStore, ['orderByPrice', 'orderByName'])
    }
}
</script>

<template>
<v-sheet rounded="lg">
    <v-list rounded="lg">
      <v-list-subheader>Categorias</v-list-subheader>
        <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
          <v-list-item-title>
            Todos
          </v-list-item-title>
         
        </v-list-item>
        <v-list-item :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
          v-for="category in categories"
          :key="category.id"
          link
          @click="goToCategory(category.id)"
          >

          <v-list-item-title>
            {{ category.name }}
          </v-list-item-title>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-subheader>Orden</v-list-subheader>

        <v-list-item 
        link @click="orderByPrice()">
        <v-list-item-title>
          Por precio
        </v-list-item-title>
        
      </v-list-item>
      <v-list-item 
        link @click="orderByName()">
        <v-list-item-title>
          Por nombre
        </v-list-item-title>
        
      </v-list-item>
    </v-list>
 </v-sheet>
</template>