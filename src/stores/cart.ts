import { defineStore } from 'pinia'
import type { Cartdetail } from '@/model/types';

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    details: <Array<Cartdetail>>[]
   }),
  getters: {//calcular un valor apartir del estado
    cartItemsCount: (state) => {
      let count = 0;
      state.details.forEach(detail => {
        count += detail.quantity;
      });
      return count;
    },
  },
  actions: {
      onAddProduct(productId: number) {
        const detailFound = this.details.find(d => d.productId === productId);

        if (detailFound) {
            //+1
            detailFound.quantity += 1;
        }else{
            this.details.push({
            productId,
            quantity: 1
        });
        }
        
    },
      increment(productId: number){
        const detailFound = this.details.find(d => d.productId === productId);
        if (detailFound) {
          detailFound.quantity += 1;
        }

      },
      decrement(productId: number){
        const detailFound = this.details.find(d => d.productId === productId);
        if (detailFound) {//encontrar 
          detailFound.quantity -= 1;

        if (detailFound.quantity === 0) {
          this.deleteProduct(productId);
        }
        }
      },
      deleteProduct(productId:number){//encontar la posicion para eliminarlo
        const index = this.details.findIndex(d => d.productId === productId);//(comparar con cada detalle)
        this.details.splice(index, 1);
      },
  },
})