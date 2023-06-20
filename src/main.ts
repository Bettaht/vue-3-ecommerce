//import './assets/main.css'

import { createApp } from 'vue'

//import { createPinia } from 'pinia'

//Vue Router
import router from './router'

import App from './App.vue' //se importa el archivo para luego se declara el uso ↓↓↓↓↓ app.use

//app.use(createPinia())

// Vuetify instancia
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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

app.mount('#app')//esta en el index.html
