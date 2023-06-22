<script lang="ts"> 
import { mapState } from 'pinia';
import ProducCard from './ProductCard.vue'
import { useProductsStore } from '../stores/products'

export default {
    components:{
        ProducCard,
    },
    computed: {
        ...mapState(useProductsStore, ['products', 'loading'])
    }
}
</script>

<template>
    <div class="d-flex justify-center align-center h-100 "  v-if="loading">
        <v-progress-circular v-if="loading" indeterminate :size="68"/>
    </div>
    <v-row v-else>
        <v-col v-for="p in products" :key="p.id" cols = "4">
        <ProducCard  :product = "p"/>
        </v-col>
    </v-row>
</template>../stores/products