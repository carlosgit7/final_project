<template>
  <div class="mt-10 flex flex-col justify-content-center font-light tracking-tight">    
    <h1 class="text-3xl text-orange-500 italic">Live life, be happy, and have fun.</h1>
  </div>
  <div class="flex w-2/3 mx-auto mt-10 p-10 text-xl font-light bg-blue-800 rounded-lg shadow-md items-center justify-center overflow-hidden">
    <div class="flex flex-col w-full">
      <router-link to="/advice" class="text-3xl text-orange-500 hover:text-orange-300 flex duration-150">
      <img src="../assets/advice2.png" alt="" class="h-12 w-24 rounded-full mr-2 hover:scale-x-110 duration-200">
      Get a random advice 🡢</router-link>
      <router-link to="/breakingBadQuotes" class="text-3xl text-orange-500 hover:text-orange-300 mt-8 flex duration-150">
      <img src="../assets/breaking-bad-logo.png" alt="" class="h-12 w-24 rounded-full mr-2 hover:scale-x-110 duration-200">
      Get tough love from<span class="font-bold ml-1">Br</span>eaking<span class="font-bold">Ba</span>d quotes 🡢</router-link>
    </div>
</div>
</template>