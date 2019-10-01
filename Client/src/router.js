import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/PersonalWebsite/Resume',
            name: 'resume',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Resume.vue')
        },
        {
            path: '/PersonalWebsite/Music',
            name: 'music',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Music.vue')
        },
        {
            path: '/PersonalWebsite/*',
            name: 'home',
            component: Home
        }
    ]
})
