import Vue from 'vue'
import Router from 'vue-router'
import VueClip from 'vue-clip'
import HomePage from '@/components/HomePage'
import UploadPage from '@/components/UploadPage'

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
        name:'Upload',
        component: UploadPage
    }
  ]
})
