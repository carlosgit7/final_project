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
<div class="flex bg-blue-900 px-10 py-6 h-56 justify-between mt-48">
    <div class="">
        <router-link to="/"><h1 class="tracking-tighter text-4xl text-orange-600 font-medium hover:cursor-pointer">
            CheerUpSocial 
        </h1></router-link>
        <div class="mt-4 justify-between">
            <ul class="flex space-x-4">
                <li><a href="https:www.facebook.com" target="blank"><img src="../assets/icons/icons8-facebook-30.png" alt=""></a></li>
                <li><a href="https:www.twitter.com" target="blank"><img src="../assets/icons/icons8-twitter-30.png" alt=""></a></li>
                <li><a href="https:www.instagram.com" target="blank"><img src="../assets/icons/icons8-instagram-30.png" alt=""></a></li>                
                <li><a href="https:www.tiktok.com" target="blank"><img src="../assets/icons/icons8-tiktok-30.png" alt=""></a></li>                
            </ul>       
        </div>
    </div>
    <div class="place-self-end">
        <h4 class="text-black">Created by: Carlos A. Gonzales</h4>
    </div>
</div>
</template>