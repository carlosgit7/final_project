<template>
<div class="bg-cyan-500 px-6">
    <div class="conitainer mx-auto flex justify-between items-center text-white">
        <router-link to="/"><h1 class="tracking-tighter py-6 text-4xl text-orange-600 font-medium hover:cursor-pointer">
            CheerUpSocial 
        </h1></router-link>
        <nav>
            <ul class="flex space-x-4 text-black">
                <router-link to="/timeline"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Timeline</li></router-link>
                <router-link to="/post"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Post</li></router-link>
                <router-link to="/profile"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Profile</li></router-link>
                <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">About</li></router-link>
                <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Login</li></router-link>
                <router-link to="/logout"><li class="py-8 px-4 hover:cursor-pointer hover:bg-cyan-400 hover:text-orange-600">Logout</li></router-link>
            </ul>
        </nav>
    </div>
</div>
</template>