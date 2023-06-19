<script setup lang = 'ts'>
import { onMounted, ref } from "vue";//definir variales de estado
const count = ref(0); 

function increment(){
    count.value += 1;
}
function increase() {
    count.value -= 1;
}
//imprimer mensaje de log al inicio
onMounted(() => {
    console.log('El valor inicial del contador es: ' + count.value);
    
})

</script>


<template>
    <p>Hola soy la version Composition API</p>
    <h1>Contador: {{ count }}</h1>
    <button @click="increment">Incrementar contador</button>
    <button @click="increase">Disminuir contador</button>
</template>