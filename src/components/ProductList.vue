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
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Microfono', price: 120, id: 12},
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Microfono', price: 120, id: 12}
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