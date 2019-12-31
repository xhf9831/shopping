import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import common from '../components/Common'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: common,
        children: [{
            path: '/',
            name: 'home',
            component: Home
        }]
    },
    {
        path: '',
        component: common,
        children: [{
            path: '/category',
            name: 'category',
            component: () =>
                import ('../views/category/Category')
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router