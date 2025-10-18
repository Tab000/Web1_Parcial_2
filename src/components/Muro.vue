<template>
    <section class="muro">
    
        <div class="post create-post">
            <textarea 
                v-model="newPostContent" 
                placeholder="Escribe algo..."
                rows="3"
            ></textarea>
            <button @click="createPost">Compartir</button>
        </div>

        <div class="post" v-for="(post, index) in posts" :key="index">
            <h4>{{ post.author }}</h4>
            <p>{{ post.content }}</p>
            <small>{{ post.time }}</small>
        </div>

        <Boxes />
    </section>
</template>

<script setup>
import { ref } from 'vue';
import Boxes from "./Boxes.vue"; // Componente hijo

// Estado Reactivo (Composition API: ref)
const newPostContent = ref('');
const posts = ref([
    { author: 'Amigo 1', content: '¡Hola, este es mi primer post en el muro! 😎', time: 'Hace 5 min' },
    { author: 'Amigo 2', content: 'Qué buen día para programar una SPA con Vue 💻', time: 'Hace 1 hora' },
]);

// Función para crear una publicación
const createPost = () => {
    if (newPostContent.value.trim() !== '') {
        const newPost = {
            author: 'Nicolás Taborda', 
            content: newPostContent.value.trim(),
            time: 'Justo ahora',
        };
        posts.value.unshift(newPost); // Añadir al inicio
        newPostContent.value = ''; // Limpiar
    }
};
</script>

<style scoped>
.post button {
    /* Estilo del botón compartir */
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #1877f2;
    color: white;
    float: right;
    margin-top: 5px;
}
.create-post textarea {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    resize: vertical;
    box-sizing: border-box;
}
</style>