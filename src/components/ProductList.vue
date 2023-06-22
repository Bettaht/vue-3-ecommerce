<script lang="ts"> 
import { mapState } from 'pinia';
import ProducCard from './ProductCard.vue'
import { useProductsStore } from '../stores/proudcts'

export default {
    components:{
        ProducCard,
    },
    computed: {
        ...mapState(useProductsStore, ['products'])
    }
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