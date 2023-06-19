
<script lang="ts"> //setup se utiliza cuando se trabaja composition API
export default{
    data(){
        return{
            count: 0
        }
    },
    methods: {
        increase(){
            this.count += 1;
        },
        decrease(){
            this.count = this.count - 1;
        }
    },
    mounted(){
        console.log('El valor inicial del contador es: ' + this.count);
        
    }
}
</script>


<template>
    <h1>Contador: {{ count }}</h1>
    <hr>
    <button @click="increase()">Aumentar contador</button>
    <button @click="decrease()">Disminuir contador</button>
</template>