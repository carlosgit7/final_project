<script setup>
  import Nav from "./components/Nav.vue"
  import Footer from "./components/Footer.vue"
</script>

<template>
<div class="min-h-screen bg-yellow-300">
    <Nav />
    <div class="container mx-auto grid justify-items-center">
     <router-view />
    </div>
    <Footer />
</div>
</template>

