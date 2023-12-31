

import { createApp } from 'vue'

import { createPinia } from 'pinia'

//Vue Router
import router from './router'

import App from './App.vue' //se importa el archivo para luego se declara el uso ↓↓↓↓↓ app.use
//icons
import '@mdi/font/css/materialdesignicons.css'

// Vuetify instancia
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//vietify labs ---- que aun estan en desarrollo


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
});

const app = createApp(App)//aplicacion principal

app.use(router)
app.use(vuetify)
app.use(createPinia())

app.mount('#app')//esta en el index.html
