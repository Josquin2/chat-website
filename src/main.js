import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import SignIn from '@/pages/Sign-in.vue'
import Chat from '@/components/chat.vue'
import Register from '@/components/register.vue'
import User from '@/components/user.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'chat', path: '/', component: Chat },
    { name: 'sign-in', path: '/sign-in', component: SignIn },
    { name: 'register', path: '/register', component: Register },
    { name: 'user', path: '/user/:username()', component: User, props: true }
  ]
})

createApp(App).use(router).mount('#app')
