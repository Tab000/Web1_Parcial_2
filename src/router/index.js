import { createRouter, createWebHistory } from "vue-router";

// Vistas/Layouts
import ProfilePage from '@/views/ProfilePage.vue'; 
import Muro from '@/components/Muro.vue';
import Info from '@/components/Info.vue';
import Photos from '@/components/Photos.vue';

const routes = [
    {
        path: '/',
        component: ProfilePage, // Layout de perfil
        children: [
            {
                path: '', // Ruta por defecto (Muro)
                name: 'Muro',
                component: Muro,
            },
            {
                path: 'info', // Ruta /info
                name: 'Info',
                component: Info,
            },
            {
                path: 'photos', // Ruta /photos
                name: 'Photos',
                component: Photos,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;