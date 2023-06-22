import type { Category } from "@/model/types";
import { defineStore } from "pinia";


export const useCategoriesStore = defineStore('categories', {
    state: () => ({ 
        categories: [] as Category[], //tipo de dato del valor que se esta asignando
        loading:true
     }),
    getters: {

    },
    actions: {
      fetchCategories(){//solicitar mediante un get a una URL/API/WebServe 
        fetch('/data/categories.json')
        .then(response => response.json())
        .then((data) => {
          this.categories = data;
          this.loading = false;
        });
      }
    }
  })