import type { Category } from "@/model/types";
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore('categories', {
    state: () => ({ 
        categories: [{
            id: 1,
            name: 'Oficina',
            description:'Productos para tu oficina'
        },{
            id: 2,
            name: 'Computadora',
            description:'Productos para tu setup'
        }] as Category[] //tipo de dato del valor que se esta asignando
     }),
    getters: {

    },
    actions: {

    },
  })