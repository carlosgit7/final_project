<script setup>
import useAuth from "../composables/userAuth";
const { user } = useAuth();
</script>

<template>
  <div class="flex flex-col w-1/2 mx-auto mt-10 p-4 text-4xl font-light bg-slate-200 rounded-lg shadow-md items-center justify-center">
    <h1> Welcome {{ user }}</h1>
    <h1 class="mt-5 text-3xl">Timeline will go here</h1>
</div>
</template>