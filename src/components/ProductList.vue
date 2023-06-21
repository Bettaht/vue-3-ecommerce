<script lang="ts"> 
import type { Product, Cartdetail } from '../model/types';
import ProducCard from './ProductCard.vue'
import Cart from './Cart.vue'
import { useCartStore } from '@/stores/cart'
export default {
    components:{
        ProducCard,
        Cart
    },
    data() {
        return {
            products: <Array<Product>>[//tipo de dato del valor que se esta asignando
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Microfono', price: 120, id: 12},
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Microfono', price: 120, id: 12}
            ],
        }
    },
    props:['details'],
    methods: {
        onProductAdded(productId: number){
            
        }
    }
}
</script>

<template>

    <v-row>
        <v-col v-for="p in products" cols = "4">
        <ProducCard  :product = "p" @addProduct="onProductAdded(p.id)"/>
        </v-col>
    </v-row>
</template>