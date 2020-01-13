import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index.js';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { authRequired: true }
    },
    {
        path: '/interns',
        name: 'interns',
        component: () => import('../views/Interns.vue'),
        meta: { authRequired: true }
    },
    {
        path: '/teams',
        name: 'teams',
        component: () => import('../views/Teams.vue'),
        meta: { authRequired: true }
    },
    {
        path: '/match',
        name: 'match',
        component: () => import('../views/Match.vue'),
        meta: { authRequired: true }
    },
    {
        path: '/sign-in',
        name: 'signin',
        component: () => import('../views/Signin.vue')
    },
    {
        path: '/sign-out',
        name: 'signout',
        component: () => import('../views/Signout.vue'),
        meta: { authRequired: true }
    }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.auth.currentUser.isAuthenticated) {
            next({ path: '/sign-in' });
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
