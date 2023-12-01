import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { createHead } from '@unhead/vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import App from './App.vue'
import { THEME } from '@/shared/config'

import { router } from './providers'

const vuetify = createVuetify({
  theme: {
    defaultTheme: localStorage.getItem('theme') || THEME.light
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

export const app = createApp(App).use(createPinia()).use(vuetify).use(createHead()).use(router)
