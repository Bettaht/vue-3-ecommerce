import { ref, computed } from 'vue'
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
  },
})