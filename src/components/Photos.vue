<template>
    <section class="photos-page post">
        <h2>Galería de Fotos</h2>
    
        <div id="uploadPhotos" class="p-3 border border-dashed border-gray-400 rounded-md mb-4 text-center">
            <p>Sube nuevas fotos a tu perfil:</p>
            <input 
                type="file" 
                multiple 
                @change="uploadPhotos" 
                accept="image/*"
                class="file-input mt-2"
            />
        </div>

        <div class="photos">
            <img 
                v-for="(photo, index) in photos" 
                :key="index" 
                :src="photo" 
                class="photo-thumb" 
                :alt="`Foto de perfil ${index + 1}`"
            />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'; 

const photos = ref([
    new URL("../assets/file.jpg", import.meta.url).href,
    new URL("../assets/NicolasT.png", import.meta.url).href,
    new URL("../assets/backiee-266376.jpg", import.meta.url).href,
]);

const uploadPhotos = (event) => {
    const files = Array.from(event.target.files);

    files.forEach((file) => {
        const imgUrl = URL.createObjectURL(file);
        photos.value.push(imgUrl);
    });

    event.target.value = null; 
};
</script>

<style scoped>
.photos-page {
    max-width: 900px;
    margin: 0 auto;
}
.file-input {
    width: 100%;
}
</style>