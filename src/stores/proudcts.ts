import { defineStore } from "pinia";
import type { Product } from '../model/types';

export const useProductsStore = defineStore('products', {
    state: () => ({ 
        categoryId: null as number | null,
        _products: [
            {name: 'Silla', price: 56, id: 5, categoryId: 1, image: '/products/silla.jpeg'},
            {name: 'Monitor', price: 450, id: 7, categoryId: 1, image: '/products/monitor.jpeg'},
            {name: 'Microfono', price: 120, id: 12, categoryId: 2, image: '/products/microfono.jpeg'},
            {name: 'Teclado', price: 564, id: 11, categoryId: 2, image: '/products/teclado.jpeg'},
            {name: 'Mouse', price: 50, id: 71, categoryId: 2, image: '/products/mouse.jpeg'},
            {name: 'Laptop', price: 1260, id: 2, categoryId: 1, image: '/products/laptop.jpeg'}
        ] as Product[] //tipo de dato del valor que se esta asignando
     }),
    getters: {
      products(state) {
        if (!state.categoryId) {
            return state._products
        }
        return state._products.filter(p => p.categoryId === state.categoryId);
      }
      
    },
    actions: {
        selectCategory(categoryId: number){
            this.categoryId = categoryId
        }
    },
  })