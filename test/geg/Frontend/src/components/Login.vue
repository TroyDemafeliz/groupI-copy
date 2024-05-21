<template>
     <div id="upper" class="bg-gray-500 h-1/4 overflow-auto">
          <div>
               <img src="./icons/CompLogoBGREMOVE.png" alt="" class="mx-auto h-30">
          </div>
     </div>
     <div id="login-form" class="bg-blue-geg h-screen flex items-center justify-center overflow-auto">



<form class="max-w-2xl mx-auto bg-indigo-200 rounded-lg px-20 py-10 flex flex-col overflow-auto" @submit.prevent="handleSubmit">


     <h1 class="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">LOGIN</h1>
  <div class="mb-5">
    <label for="username" class="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Username</label>
    <input type="text" v-model="username" id="username" @keyup.enter="handleSubmit" class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JonDoe@gmail.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" v-model="password" @keyup.enter="handleSubmit" placeholder="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
      <div class="flex justify-center mt-auto">
       <button type="submit" v-on:click="handleSubmit" class="text-white bg-red mx-auto mt-10 justify-center hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
     </div>
</form>

     </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/auth/useAuth';
import api from '@/api';
import router from '@/router';
import { ACCESS_TOKEN, REFRESH_TOKEN, USERNAME } from '@/token';

export default{
  name: "AdminLogin",
  setup() {
    const { isAuthenticated } = useAuth(); // Access the shared authentication state
    const username = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      console.log("Attempting to log in..."); // Log initial attempt
      try {
        const res = await api.post("/backend/token/", { username: username.value, password: password.value });
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        localStorage.setItem(USERNAME, username.value)

        isAuthenticated.value = true; // Update authentication state
        console.log("Login successful:", isAuthenticated.value); // Log authentication status
        console.log("Access Token:", res.data.access); // Log the access token
        console.log("Refresh Token:", res.data.refresh); // Log the refresh token
        router.push("/admin-bookings"); // Redirect to the admin bookings page
      } catch (error) {
        console.error("Login Error: ", error);
        alert("Failed to login, please check your credentials");
        isAuthenticated.value = false; // Ensure isAuthenticated is set to false on failure
        console.log("Login failed:", isAuthenticated.value); // Log failed authentication status
      }
    };

    return {
      username,
      password,
      handleSubmit
    };
  }
};
</script>




  <!-- <template>
     <div :class="$style.loginform">
          <div :class="$style.loginGroup">
               <div :class="$style.loginGroupChild" />
               <div :class="$style.signinFrame">
                      <button type="button" v-on:click="handleSubmit" :class="$style.signIn" >SIGN IN</button>
                      <div :class="$style.signinbox" />
               </div>
               <b :class="$style.login">LOGIN</b>
               <div :class="$style.emailAddress">Email Address</div>
               <div :class="$style.password">Password</div>
               <div :class="$style.emailfill">
                 <input :class="$style.emailInput" 
                 v-model="username"
                 type="text"
                 placeholder="Username"
                 maxlength="30"
                 @keyup.enter="handleSubmit"
                 />
                 </div>
               <div :class="$style.passfill">
                 <input :class="$style.passInput" 
                 v-model="password"
                 type="password"
                 placeholder="Password"
                 @keyup.enter="handleSubmit"
                 /></div>
               <img :class="$style.showpassIcon" alt="" src="./icons/ShowPass.png" />
          </div>
          
               <div :class="$style.loginformChild" />
               <img :class="$style.n1RemovebgPreview1Icon" alt="" src="./icons/CompLogoBGREMOVE.png" />
               </div>
               </template>
   -->
