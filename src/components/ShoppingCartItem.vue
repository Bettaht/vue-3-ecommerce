<script lang="ts">
import { useCartStore } from '@/stores/cart';
import type { Cartdetail } from '@/model/types';
import type { PropType } from 'vue';
import { mapActions } from 'pinia';

export default {
    props: {
        detail:{
            type: Object as PropType<Cartdetail>,
            required: true
        }
    },
    methods:{//usando pinia
        ...mapActions(useCartStore, {
            decrementQuantity: 'decrement',//metodo : accion
            incrementQuantity: 'increment',
            deleteProduct: 'deleteProduct'
        })
    },
    computed: {
        productImageUrl(){
            return this.detail.product.image ?? 
            'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        },
        subTotal(){
            return this.detail.product.price * this.detail.quantity
        }
    }
}
</script>

<template>
<tr>
 <td>
    <v-avatar size="40px">
        <v-img :src="productImageUrl" />
    </v-avatar>
    {{ detail.product.name }}
</td>

 <td class="text-center">
    <v-btn 
     class="ml-2"
     size="x-small" 
     @click="decrementQuantity(detail.product.id)" 
     icon="mdi-minus"/>

     {{ detail.quantity }}

     <v-btn 
     size="x-small" 
     @click="incrementQuantity(detail.product.id)"
     icon="mdi-plus" />
 </td>

 <td>
    ${{ detail.product.price }}
 </td>

 <td>
    ${{ subTotal }}
 </td>

 <td>
    <v-btn 
     class="ml-2" 
     size="x-small" 
     @click="deleteProduct(detail.product.id)" 
     icon="mdi-delete"/>
 </td>

</tr>

</template>