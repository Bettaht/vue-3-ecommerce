<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue'

export default{
    components: {
        ShoppingCartItem
    },
    computed:{//para mostrar los detalles desde el stock usando pinia
        ...mapState(useCartStore, ['details'])
   }
}
</script>

<template>
    <v-card>
        <v-card-title>
            Productos agregados carrito
        </v-card-title>

        <v-cart-text>

            <v-table v-if="details.length > 0">
                <thead>
                    <tr>
                        <th class="text-left">
                            Producto
                        </th>
                        <th class="text-center">
                            Cantidad
                        </th>
                        <th class="text-left">
                            Precio
                        </th>
                        <th>
                            SubTotal
                        </th>
                        <th>
                            <span class="d-sr-only">Eliminar</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ShoppingCartItem 
                    v-for="detail in details" 
                    :key="detail.product.id"
                    :detail="detail"/>
                </tbody>
            </v-table>
            <p v-else>Aun no has agregado items a tu carrito de compras.
            Haz <RouterLink to="/">click aqui</RouterLink> para ver los pruductos disponibles.
            </p>
        </v-cart-text>
    </v-card>   
</template>