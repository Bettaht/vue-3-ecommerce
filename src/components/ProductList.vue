<script lang="ts"> 
import type { Product } from '../model/types';
import ProducCard from './ProductCard.vue'
import Cart from './Cart.vue'
import type { Cartdetail } from '../model/types';
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
                {name: 'Microfono', price: 120, id: 12}
            ],
            details:<Array<Cartdetail>> []
        }
    },
    methods: {
        onAddProduct(productId: number) {
            const detailFound = this.details.find(d => d.productId === productId);

            if (detailFound) {
                //+1
                detailFound.quantity += 1;
            }else{
                this.details.push({
                productId,
                quantity: 1
            });
            }
            
        }
    }
}
</script>

<template>

    <v-row>
        <v-col v-for="p in products" cols = "4">
        <ProducCard  :product = "p" @addProduct="onAddProduct(p.id)"/>
        </v-col>
    </v-row>

        <Cart :details = "details"/>


</template>