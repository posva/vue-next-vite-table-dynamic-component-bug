import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: () => import('./views/Index.vue')
    },
    {
        path: '/table',
        name: 'Table',
        component: () => import('./views/Table.vue')
    }
];

const router = createRouter({ routes, history: createWebHistory() });

export {
    router
};
