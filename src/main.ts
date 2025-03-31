import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { createPinia } from 'pinia'
import { useSubmissionStore } from './composables'
import App from './App.vue'

import "./styles/main.css"

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
const store = useSubmissionStore(pinia)

router.beforeEach((to, from) => {
  if (to.path === "/upload" && !store.checkUploadRoute()) {
    return "/";
  }
  if (to.path === "/success" && !store.checkSuccessRoute()) {
    return "/";
  }
  if (to.path === "/again" && !store.checkAgainRoute()) {
    return "/";
  }
  if (to.path === "/view" && !store.checkViewRoute()) {
    return "/";
  }
})

app.use(router)
app.use(pinia)
app.mount('#app')
