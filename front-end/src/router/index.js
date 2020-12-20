import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Playground from '../views/Playground.vue'
import Admin from '../views/Admin.vue'
import ColorSchemeEditor from '../views/ColorSchemeEditor.vue'
import EditColorScheme from '../views/EditColorScheme.vue'
import InspirationalPeopleEditor from '../views/InspirationalPeopleEditor.vue'
import Tools from '../views/Tools.vue'
import Parts from '../views/Parts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/playground',
    name: 'Playground',
    component: Playground
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/color-scheme-editor',
    name: 'ColorSchemeEditor',
    component: ColorSchemeEditor
  },
  {
    path: '/edit-color-scheme/:id',
    name: 'EditColorScheme',
    component: EditColorScheme,
  },
  {
    path: '/inspirational-people-editor',
    name: 'InspirationalPeopleEditor',
    component: InspirationalPeopleEditor,
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
  },
  {
    path: '/parts',
    name: 'Parts',
    component: Parts,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
