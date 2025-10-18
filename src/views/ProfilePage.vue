<template>
    <div>
        <div class="cover">
            <img src="../assets/backiee-266376.jpg" alt="Cover" class="cover-img" />
            <div class="profile-info">
                <img src="../assets/NicolasT.png" alt="Perfil" class="profile-pic" />
                <div>
                    <h2>Nicolás Taborda</h2>
                    <div class="profile-buttons">
                        <button>Agregar amigo</button>
                        <button>Mensaje</button>
                    </div>
                </div>
            </div>
        </div>

        <NavBar /> 

        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue"; 
</script>