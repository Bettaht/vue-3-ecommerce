import { defineStore } from "pinia";
import type { Product } from '../model/types';

export const useProductsStore = defineStore('products', {
    state: () => ({ 
      order: '' as string,
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
        let products = null;
        //filtra
        if (state.categoryId) {
          products = state._products.filter(p => p.categoryId === state.categoryId);
        }else{
          products = state._products
        }
        //ordena
        if (state.order === '') {
          return products;
        }
        if (state.order === 'price') {
          return products.sort((a,b) => a.price - b.price);
        }
        if (state.order === 'name') {
          return products.sort((a,b) => a.name.localeCompare(b.name));//asi se ordena por nombre
        }
      }
    },
    actions: {
        selectCategory(categoryId: number){
            this.categoryId = categoryId
        },
        orderByPrice(){
          this.order = 'price';
        },
        orderByName(){
          this.order = 'name';
        }
    },
  })