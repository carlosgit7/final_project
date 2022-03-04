<script setup>
  import Nav from "./components/Nav.vue"
</script>

<template>
<div class="min-h-screen bg-gray-200">
    <Nav />
    <div class="container mx-auto grid justify-items-center">
     <router-view />
    </div>
</div>
</template>

