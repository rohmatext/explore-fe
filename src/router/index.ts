import Index from '@/pages/index.vue';
import Sub from '@/pages/sub.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => Index,
        children: [
            {
                path: '/:id(\\d+)',
                name: 'sub',
                component: () => Sub,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
