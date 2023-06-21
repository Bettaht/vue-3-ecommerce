<script lang="ts"> 
import type { Product } from '../model/types';
import ProducCard from './ProductCard.vue'

export default {
    components:{
        ProducCard,
    },
    data() {
        return {
            products: [
                {name: 'Silla', price: 56, id: 5, image: 'https://img.freepik.com/foto-gratis/asiento-electrodomesticos-interior-signo-ergonomica_1172-512.jpg?w=360&t=st=1687377279~exp=1687377879~hmac=9e91cb2a1995f43ea7f51f35c4965d209f6cd1887049f9796948246effd9709e'},
                {name: 'Monitor', price: 450, id: 7, image: 'https://img.freepik.com/psd-gratis/maqueta-pantalla-escritorio_1318-852.jpg?w=360&t=st=1687377342~exp=1687377942~hmac=981d057da067973e56d96a359a5a509080f87d08eff7f4f704077724e01996e2'},
                {name: 'Microfono', price: 120, id: 12, image: 'https://img.freepik.com/vector-gratis/microfono-retro-vintage-aislado_1284-38772.jpg?w=360&t=st=1687377403~exp=1687378003~hmac=e9338c0d8fcfa455a3d5431828c82645976a3313614341302a45741438e7c9bb'},
                {name: 'Teclado', price: 564, id: 11, image: 'https://img.freepik.com/foto-gratis/boton-teclado_1203-9150.jpg?w=360&t=st=1687377520~exp=1687378120~hmac=8b8d73e1980ac368043870362a659d354e22181fbfbdf9654e33ec84f4051210'},
                {name: 'Mouse', price: 50, id: 71, image: 'https://img.freepik.com/foto-gratis/raton-morado-ordenador_1260-11.jpg?1&w=360&t=st=1687377549~exp=1687378149~hmac=cae51cf1e749bcfe8ba088160b931a81d9a67f34df8e8d8669a3a264b8a95c47'},
                {name: 'Laptop', price: 1260, id: 2}
            ] as Product[] //tipo de dato del valor que se esta asignando
        }
    },
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