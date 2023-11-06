import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { ru } from 'vuetify/locale'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import App from './App.vue'

import { router } from './providers'

const vuetify = createVuetify({
  theme: {
    defaultTheme: localStorage.getItem('theme') || 'light'
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi' // This is already the default value - only for display purposes
  },
  locale: {
    locale: 'ru',
    messages: { ru }
  }
})

export const app = createApp(App).use(createPinia()).use(vuetify).use(router)
