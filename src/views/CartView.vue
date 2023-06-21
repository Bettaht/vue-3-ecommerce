<script lang="ts">
import ShoppingCart from '../components/ShoppingCart.vue'
import SummaryCart from '../components/SummaryCart.vue'

export default {
    components:{
        ShoppingCart,
        SummaryCart
    }
}
</script>

<template>
    <v-row>
        <v-col cols="8">
            <ShoppingCart />
        </v-col>

        <v-col cols="4">
           <SummaryCart/>
        </v-col>
    </v-row>
    
</template>