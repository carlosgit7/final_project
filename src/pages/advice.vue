<script setup>
import { ref } from "vue";
import { useAdvice } from "../composables/adviceAPI";
const { advices, search } = useAdvice();
const searchItem = ref("");
</script>

<template>
  <h1 class="text-6xl text-orange-500 mt-10 tracking-tight font-normal">Random Advice</h1>
  <div class="flex flex-col w-2/3 mx-auto mt-10 p-4 text-4xl font-light bg-blue-700 rounded-t-lg shadow-md items-center justify-center">
      <input
      v-model="searchItem"
      @change="search(searchItem)"
      type="text"
      placeholder="Enter keyword..."
      class="w-1/2 py-4 mt-16 text-xl text-center rounded-full bg-slate-200 focus:outline-yellow-300"
    />
    <div class="grid grid-cols-2 gap-6 pt-16 text-xl text-rose-700">
      <div v-for="(advice, index) in advices" :key="index"
      class="py-2 px-3 justify-center">
        <p class="border border-slate-400 p-2 pl-3 italic shadow-2xl bg-slate-200 rounded-3xl overflow-auto">
          {{ advice.advice }}
        </p>
      </div>
    </div>
  </div>
</template>