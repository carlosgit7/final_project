<script setup>
    import {ref} from 'vue';
    import { useRouter } from "vue-router";
    import { useForm, useField } from 'vee-validate';
    import * as yup from 'yup';
    import userAuth from "../composables/userAuth";
    import loginError from "../composables/loginError";
    import { famousQuotes } from "../composables/famousQuotesAPI";

    const {quotes} = famousQuotes();

    const schema = yup.object({
      username: yup.string().required().email().label("Email"),
      password: yup.string().required().min(8).label("Password"),
    });

    useForm({
      validationSchema: schema,
    });

    const { value: username, errorMessage: emailError } = useField('username');
    const { value: password, errorMessage: passwordError } = useField('password');

    //import { useTimeout, promiseTimeout } from "@vueuse/core";

    const {isAuthenticated, login, signup, googleLogin} = userAuth();

    const router = useRouter();

    const logginIn = async () => {
        await login(username.value, password.value);
        goToHome();
  };

    const signingUp = async () => {
        await signup(username.value, password.value);
        goToHome();
  };

    const google = async() => {
      await googleLogin();
      goToHome();
    }

    const goToHome = () => {
    if (isAuthenticated.value) {
        router.push("/timeline");
    } else {
        setError("Invalid username or password");
        start();
    }
 };

    const { error, setError } = loginError()


</script>

<template>
  <div class="flex justify-center text-center w-3/4 text-4xl tracking-tight text-orange-500 mt-10">
    <div v-for="(content, author, index) in quotes" :key="index" class="">
      <p class="font-light italic">{{content.content}} - <span class="text-2xl font-light">{{content.author}}</span></p>
    </div>
  </div>
  <div class="flex flex-col text-center font-light tracking-tight">
    <!-- <h1 class="text-3xl text-orange-500 italic">We rise by lifting others. <span class="text-base">- Robert Ingersoll</span></h1> -->
    <h3 class="text-blue-400 m-auto mt-3"> Please login or sign up</h3>
  </div>
  <!-- {{isAuthenticated}} -->
  <div class="flex w-1/2 mx-auto mt-16 p-4 text-xl font-light bg-slate-200 rounded-lg shadow-md items-center justify-center overflow-hidden">
    <form @submit.prevent="logginIn" class="flex flex-col space-y-3 p-3 w-1/2">
      <input type="text" name="username" placeholder="Email" class="pl-2 rounded-md" 
      v-model="username" 
      :class="emailError ? 'border-2 border-red-500 p-1 rounded-md' : 'p-1 rounded-md'">
      <span class="text-xs text-center text-red-600">{{emailError}}</span>
      <input type="password" name="password" placeholder="Password" class="pl-2 rounded-md" 
      v-model="password"       
      :class="passwordError ? 'border-2 border-red-500 p-1 rounded-md' : 'p-1 rounded-md'">
      <span class="text-xs text-center text-red-600">{{passwordError}}</span>
      <button type="submit" @submit.prevent="logginIn" class="w-4/5 m-auto bg-green-500 rounded-md hover:bg-green-600">Login</button>
      <button @click="signingUp" class="w-4/5 m-auto bg-blue-600 rounded-md hover:bg-blue-800">Sign Up</button>
      <button @click="google" class="w-4/5 m-auto bg-gray-400 rounded-md hover:bg-gray-500">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" class="m-auto object-cover h-7 w-auto" alt="Sign up with google">
      </button>
    </form>
  </div>
</template>