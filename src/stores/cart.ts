import { defineStore } from 'pinia'
import type { Cartdetail, Product } from '@/model/types';
import { useLocalStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', {
  state: () => ({ 
    details: useLocalStorage<Cartdetail[]>('Cartdetail',[])
   }),
  getters: {//calcular un valor apartir del estado
    cartItemsCount: (state) => {
      let count = 0;
      state.details.forEach(detail => {
        count += detail.quantity;
      });
      return count;
    },
    totalAmount: (state) => {
      let total = 0;
       state.details.forEach(d => {
        total += d.product.price * d.quantity;
       });
       return total;
    },
    whatsAppMessage(state) {//esta es la funcion que se recomienda cuando se usa this
      let message = 'Hola, quiero realizar la siguiente compra:\n\n '

      state.details.forEach(d => {
        message += `Producto: ${d.product.name}\n`;
        message += `Cantidad: ${d.quantity}\n`;
        message += `SubTotal: $${d.quantity * d.product.price}\n`;
        message += `--------------------\n`;
      });

      message += `Total a pagar" $${this.totalAmount}\n\n`
      message += `Muchas Gracias!`
      return encodeURI(message)
    },
    whatsAppLink(){
      return 'https://wa.me/50671105145?text='+this.whatsAppMessage;
    }
  },
  actions: {
      onAddProduct(product: Product) {
        const detailFound = this.details.find(d => d.product.id === product.id);

        if (detailFound) {
            //+1
            detailFound.quantity += 1;
        }else{
            this.details.push({
            product,
            quantity: 1
        });
        }
        
    },
      increment(productId: number){
        const detailFound = this.details.find(d => d.product.id === productId);
        if (detailFound) {
          detailFound.quantity += 1;
        }

      },
      decrement(productId: number){
        const detailFound = this.details.find(d => d.product.id === productId);
        if (detailFound) {//encontrar 
          detailFound.quantity -= 1;

        if (detailFound.quantity === 0) {
          this.deleteProduct(productId);
        }
        }
      },
      deleteProduct(productId:number){//encontar la posicion para eliminarlo
        const index = this.details.findIndex(d => d.product.id === productId);//(comparar con cada detalle)
        this.details.splice(index, 1);
      },
  },
})