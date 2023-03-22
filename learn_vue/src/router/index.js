import { createRouter, createWebHistory } from 'vue-router'

const routers = [
    {
        path: '/',
        component: () => import('../components/pages/login.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routers
});

export default router;