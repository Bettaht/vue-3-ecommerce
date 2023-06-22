<script lang="ts"> 
import type { Product } from '../model/types';
import ProducCard from './ProductCard.vue'

export default {
    components:{
        ProducCard,
    },
    data() {
        return {
            products: [
                {name: 'Silla', price: 56, id: 5, categoryId: 1, image: '/products/silla.jpeg'},
                {name: 'Monitor', price: 450, id: 7, categoryId: 1, image: '/products/monitor.jpeg'},
                {name: 'Microfono', price: 120, id: 12, categoryId: 2, image: '/products/microfono.jpeg'},
                {name: 'Teclado', price: 564, id: 11, categoryId: 2, image: '/products/teclado.jpeg'},
                {name: 'Mouse', price: 50, id: 71, categoryId: 2, image: '/products/mouse.jpeg'},
                {name: 'Laptop', price: 1260, id: 2, categoryId: 1, image: '/products/laptop.jpeg'}
            ] as Product[] //tipo de dato del valor que se esta asignando
        }
    },
    }
</script>

<template>

    <v-row>
        <v-col 
        v-for="p in products" :key="p.id" cols = "4">
        <ProducCard  :product = "p"/>
        </v-col>
    </v-row>
</template>