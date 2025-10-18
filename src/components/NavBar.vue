<template>
    <nav class="nav">
        <router-link to="/" custom v-slot="{ href, navigate, isActive }">
            <a :href="href" @click="navigate" :class="{ 'active-nav-link': isActive }">Muro</a>
        </router-link>
        
        <router-link to="/info" custom v-slot="{ href, navigate, isActive }">
            <a :href="href" @click="navigate" :class="{ 'active-nav-link': isActive }">Información</a>
        </router-link>

        <router-link to="/photos" custom v-slot="{ href, navigate, isActive }">
            <a :href="href" @click="navigate" :class="{ 'active-nav-link': isActive }">Fotos</a>
        </router-link>
        
        <router-link to="/boxes" custom v-slot="{ href, navigate, isActive }">
            <a :href="href" @click="navigate" :class="{ 'active-nav-link': isActive }">Boxes</a>
        </router-link>
    </nav>
</template>

<style scoped>
.nav a {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 10px;
    text-decoration: none; 
    color: #000; 
    transition: border-bottom 0.2s;
}

.nav a:hover {
    border-bottom: 2px solid #1877f2;
}

.active-nav-link {
    font-weight: bold;
    border-bottom: 3px solid #1877f2 !important; 
    color: #1877f2;
}
</style>