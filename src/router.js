import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Server from './views/Server.vue'
import Case from './views/Case.vue'
import News from './views/News.vue'
import About from './views/About.vue'
import Connect from './views/Connect.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/server',
            name: 'server',
            component: Server
        }, {
            path: '/case',
            name: 'case',
            component: Case
        }, {
            path: '/news',
            name: 'news',
            component: News
        }, {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/connect',
            name: 'connect',
            component: Connect
        }
    ]
})
