import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import { useSubmissionStore } from './composables'

import './styles/main.css'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
const store = useSubmissionStore(pinia)

router.beforeEach((to, _) => {
  if (to.path === '/upload' && !store.checkUploadRoute()) {
    store.reset()
    return '/'
  }
  if (to.path === '/success' && !store.checkSuccessRoute()) {
    store.reset()
    return '/'
  }
  if (to.path === '/again' && !store.checkAgainRoute()) {
    store.reset()
    return '/'
  }
  if (to.path === '/view' && !store.checkViewRoute()) {
    store.reset()
    return '/'
  }
})

app.use(router)
app.use(pinia)
app.mount('#app')
