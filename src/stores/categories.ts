import type { Category } from "@/model/types";
import { defineStore } from "pinia";
import categoriesData from '../data/categories.json'

export const useCategoriesStore = defineStore('categories', {
    state: () => ({ 
        categories: categoriesData as Category[] //tipo de dato del valor que se esta asignando
     }),
    getters: {

    },
    actions: {

    },
  })