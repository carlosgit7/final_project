<script setup>
import { useRouter } from "vue-router";
import userAuth from "../composables/userAuth"

const { isAuthenticated, logout } = userAuth();

const router = useRouter();

const loggingOut = () => {
  logout();
  router.push("/logout");
};

</script>

<template>
<div class="bg-cyan-500 px-6">
    <div class="conitainer mx-auto flex justify-between items-center text-white">
        <router-link to="/"><h1 class="tracking-tighter py-6 text-4xl text-orange-600 font-medium hover:cursor-pointer">
            CheerUpSocial 
        </h1></router-link>
        <nav>
            <ul class="flex space-x-4 text-black">
                <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">About</li></router-link>
                <router-link v-if="!isAuthenticated" to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Login</li></router-link>
                <div v-else class="flex">
                    <router-link to="/timeline"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Timeline</li></router-link>
                    <!-- <router-link to="/profile"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Profile</li></router-link> -->
                    <router-link to="/more"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">More</li></router-link>
                    <button @click="loggingOut" to="/logout"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Logout</li></button>
                </div>
            </ul>
        </nav>
    </div>
</div>
</template>