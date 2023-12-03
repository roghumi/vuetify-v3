import vuetify from './vuetify'
import App from './App.vue'

import { createHead } from '@unhead/vue'
import { routes } from './router'
import viteSSR from 'vite-ssr/vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default viteSSR(App, { routes }, ({ app }) => {
  const head = createHead()

  // app.config.performance = true
  app.use(head)
  app.use(vuetify)
  app.component('FontAwesomeIcon', FontAwesomeIcon)

  return { head }
})
