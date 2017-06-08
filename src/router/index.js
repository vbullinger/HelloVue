import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GettingStarted from '@/components/GettingStarted'
import Routing from '@/components/Routing'
import Templates from '@/components/Templates'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/GettingStarted',
            name: 'GettingStarted',
            component: GettingStarted
        },
        {
            path: '/Routing',
            name: 'Routing',
            component: Routing
        },
        {
            path: '/Routing/:parameter',
            name: 'RoutingWithParameters',
            component: Routing
        },
        {
            path: '/Templates',
            name: 'Templates',
            component: Templates
        }
    ]
})
    