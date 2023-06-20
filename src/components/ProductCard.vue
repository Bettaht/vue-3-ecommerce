<script lang="ts"> 
import type { PropType } from 'vue';
import type { Product } from '../model/types'
export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },

    emits: ['addProduct'],

    methods:{
        onAddProduct() {
            //console.log('Agregando producto ' + this.product.id);
            this.$emit('addProduct');//que evento vamos a emitir para que el padre lo escuche
        }
    }
}
</script>

<template>
    <!-- se tiene que poner los 2 puntos ya que si no lo interpreta de forma literal JS -->
    <v-card >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
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