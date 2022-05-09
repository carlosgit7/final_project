<script setup>
import { onUnmounted, ref } from "vue";
import usePosts from "../composables/post";
import userAuth from "../composables/userAuth";
//import { famousQuotes } from "../composables/famousQuotesAPI";

//const {quotes, multipleQuotes} = famousQuotes();
//const multiple = ref("")

const {posts, unsubscribe, sendPost} = usePosts();
const { user } = userAuth();

const newPost = ref('')

const send = () => {
    sendPost(newPost.value)
    newPost.value = ''
  }

onUnmounted(() => {
  unsubscribe();
})

</script>

<template>
   <!-- <div class="flex flex-col w-3/4 text-3xl tracking-tight text-orange-500 mt-10">
    <div v-for="(q, a, index) in quotes" :key="index" class="">
      <p class="font-light italic">{{q.q}} - <span class="text-xl font-normal">{{q.a}}</span></p>
    </div>
  </div> -->
  <div class="mt-10 flex flex-col justify-content-center font-light tracking-tight">    
    <h1 class="text-4xl text-orange-500 italic">The more people you inspire, the more people will inspire you. <span class="text-xl">- Simon Sinek</span></h1>
</div>
  <div class="flex flex-col w-2/3 mx-auto mt-10 p-4 text-4xl font-light bg-blue-700 rounded-t-lg shadow-md items-center justify-center">
    <h1 class="mb-5 text-orange-500"> Welcome {{ user }}</h1>
    <div class="flex w-full p-1 text-base mb-5 justify-center">
      <input type="text" placeholder="Say something..." class="pl-2 py-1 rounded-lg bg-slate-300 border border-gray-400 w-2/3 focus:outline-none" v-model="newPost" @change="send">
    </div>
  </div>
  <div class="flex w-2/3">
    <ul class=" w-full py-4 space-y-1 bg-blue-700">
      <li v-for="post in posts" :key="post.id" class="bg-blue-500">
        <div class="flex flex-col w-2/3 pb-1 text-base m-auto">
          <div class="justify-start text-black font-bold px-1">{{post.userName}} said:</div>
          <div class="border border-gray-600 rounded-lg p-1 px-2">{{post.content}} </div> 
          </div>
      </li>
    </ul>
  </div>
</template>