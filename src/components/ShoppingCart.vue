<script lang="ts">
import { useCartStore } from '@/stores/cart'
export default{
    methods:{
        incrementQuantity(productId: number){
            this.cartStore.increment(productId)
        },
        decrementQuantity(productId: number){
            this.cartStore.decrement(productId)
        },
        deleteProduct(productId: number){
            this.cartStore.deleteProduct(productId);
        }
    },
    computed:{//para mostrar los detalles desde el stock
        cartStore(){
            return useCartStore();
        },
        details(){
        return this.cartStore.details;
    }
   }
   
}
</script>

<template>
    <v-card class="mt-4">
        <v-card-text>
            <v-card-title>
                Productos agregados carrito
            </v-card-title>

            <v-list v-if="details.length > 0">
                <v-list-item 
                v-for="detail in details" 
                :key="detail.productId">
                    <v-list-title>
                        Product {{ detail.productId }}
                        <v-btn 
                        class="ml-2"
                        size="x-small" 
                        @click="decrementQuantity(detail.productId)" 
                        icon="mdi-plus"/>

                        (Qty: {{detail.quantity}})

                        <v-btn 
                        size="x-small" 
                        @click="incrementQuantity(detail.productId)" 
                        icon="mdi-minus"/>

                        <v-btn 
                        class="ml-2" 
                        size="x-small" 
                        @click="deleteProduct(detail.productId)" 
                        icon="mdi-delete"/>
                    </v-list-title>
                </v-list-item>
            </v-list>
            <p v-else>Aun no has agregado items a tu carrito de compras.
                Haz <RouterLink to="/">click aqui</RouterLink> para ver los pruductos disponibles.
            </p>
        </v-card-text>
    </v-card>   

</template>