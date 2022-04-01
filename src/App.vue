<script setup>
  import Nav from "./components/Nav.vue"
  import Footer from "./components/Footer.vue"
</script>

<template>
<div class="min-h-screen bg-gray-200">
    <Nav />
    <div class="container mx-auto grid justify-items-center">
     <router-view />
    </div>
    <Footer />
</div>
</template>

