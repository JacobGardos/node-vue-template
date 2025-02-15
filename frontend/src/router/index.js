import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../pages/index.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../pages/about.vue')
        },

    ]
})

export default router;
