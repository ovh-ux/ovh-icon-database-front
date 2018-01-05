import Vue from 'vue'
import Router from 'vue-router'
import VueClip from 'vue-clip'
import HomePage from '@/components/HomePage'
import UploadPage from '@/components/UploadPage'
import LoginPage from '@/components/Login/Login'

Vue.use(Router)
Vue.use(VueClip)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/upload',
        name:'UploadPage',
        component: UploadPage
    },
    {
        path: '/login',
        name:'LoginPage',
        component: LoginPage
    }
  ]
})
