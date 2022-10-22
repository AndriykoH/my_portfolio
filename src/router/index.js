import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main-page',
        component: () => import('@/views/Main.vue'),
    },
    {
        path: '/education_and_experience',
        name: 'contact',
        component: () => import('@/views/EducationAndExperience.vue'),
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/views/Portfolio.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

});

export default router;