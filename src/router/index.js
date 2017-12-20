import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import UploadPage from '@/components/UploadPage'

Vue.use(Router)

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
