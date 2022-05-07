<script setup>
import { onUnmounted, ref } from "vue";
import usePosts from "../composables/post";
import userAuth from "../composables/userAuth";

const {posts, unsubscribe, sendPost, addLike} = usePosts();
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
  <div class="flex flex-col w-2/3 mx-auto mt-10 p-4 text-4xl font-light bg-blue-700 rounded-t-lg shadow-md items-center justify-center">
    <h1 class="mb-5 text-orange-500"> Welcome {{ user }}</h1>
    <div class="flex w-full p-1 text-base mb-5 justify-center">
      <input type="text" placeholder="Say something..." class="pl-2 py-1 rounded-lg bg-slate-300 border border-gray-400 w-2/3 focus:outline-none" v-model="newPost" @change="send">
    </div>
  </div>
  <div class="flex w-2/3">
    <ul class=" w-full py-4 space-y-1 bg-blue-700">
      <li v-for="post in posts" :key="post.id" class="bg-blue-500">
        <div class="flex flex-col w-1/2 pb-1 text-base m-auto">
          <div class="justify-start text-black font-bold px-1">{{post.userName}} said:</div>
          <div class="border border-gray-600 rounded-lg p-1 px-2">{{post.content}} </div>  
          <div class="flex space-x-1 justify-end pr-3 opacity-60 hover:opacity-100" > 
            <button class="">
              <img src="../assets/icons/icons8-orange-heart-20.png" alt="" class="hover:skew-y-6 hover:cursor-pointer">
            </button>
            <span>{{}}</span>
            <span>{{}}</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>