import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //guardar un historial de las rutas que se han ido visitando que is el usuario preciona "BACk" se devolvera a la ruta donde antes se encontraba
  routes: [  //definir las rutas que se necesitan en nuestro proyecto y es un arreglo donde cada uno tiene un componente
    {
      path: '/',
      name: 'home',
      component: HomeView//que tiene que mostrar
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')//lazy loading descargar archivos solo cuando son requeridos
    }
  ]
})

export default router
