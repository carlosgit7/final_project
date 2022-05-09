<script setup>
 import {ref} from 'vue';
 import { useQuotes } from '../composables/breakingBadApi';
  
 const {quotes, multipleQuotes} = useQuotes();
 const multiple = ref("")
</script>


<template>
  <h1 class="text-6xl text-orange-500 mt-10 tracking-tight font-light"><span class="font-bold text-orange-600">Br</span>eaking<span class="font-bold text-orange-600">Ba</span>d quotes</h1>
  <h3 class=" text-lg font-light tracking-tighter text-blue-400 mt-4">Sometimes a little tough inspiration (and a laugh) is all we need!</h3>
  <div class="w-4/5 mx-auto p-5 mt-10 text-xl font-light bg-blue-700 bg-opacity-90 rounded-md overflow-hidden">
  <div class="flex flex-auto space-x-4 items-center">
    <p class="tracking-tight text-2xl text-orange-500">How many quotes would you like to read? </p>
    <input v-model="multiple" @change="multipleQuotes(multiple)" type="text" placeholder="Number of quotes" class="text-base rounded-md p-1 px-2 font-light bg-slate-200 focus:outline-yellow-500 hover:bg-slate-300">
  </div>
    <div class="grid grid-cols-2 gap-10 mt-16">
      <div 
      v-for="(quote, author, index) in quotes" :key="index" class=""> 
      <p class="border border-slate-400 p-2 pl-3 italic shadow-2xl bg-slate-200 rounded-3xl overflow-auto">"{{quote.quote}}" - <span class="font-semibold">{{quote.author}}</span></p>
     </div>
    </div>
  </div>
 </template>