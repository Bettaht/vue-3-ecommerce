<script lang="ts"> 
import type { PropType } from 'vue';
import type { Product } from '../model/types'
import { useCartStore } from '../stores/cart';
export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },



    methods:{
        onAddProduct() {
            const cartStore = useCartStore();
            cartStore.onAddProduct(this.product)
        }
    },
    computed: {
        productImageUrl(){
            return this.product.image ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        }
    }
}
</script>

<template>
    <!-- se tiene que poner los 2 puntos ya que si no lo interpreta de forma literal JS -->
    <v-card >
        <v-img
            :src="productImageUrl"
            height="200px"
            cover/>
            
        <v-card-title>
            {{product.name}}
        </v-card-title>

        <v-card-text>
            <p class="mb-4">
                Esta es una descripcion de ejemplo
            </p>
            <v-chip> $ {{ product.price }}</v-chip>
        </v-card-text>

    <v-card-actions>

    <v-btn @click="onAddProduct" color="orange-lighten-2">Agregar al carrito</v-btn>
    
    </v-card-actions>

    </v-card>
</template>