<template>
     <div id="upper" class="bg-gray-500 h-1/4">
          <div>
               <img src="./icons/CompLogoBGREMOVE.png" alt="" class="mx-auto h-30">
          </div>
     </div>
     <div id="login-form" class="bg-blue-geg h-screen flex items-center justify-center">


<form class="max-w-2xl mx-auto bg-indigo-200 rounded-lg px-20 py-10 flex flex-col">

     <h1 class="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">LOGIN</h1>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Username</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JonDoe@gmail.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
      <div class="flex justify-center mt-auto">
       <button type="submit" class="text-white bg-red mx-auto mt-10 justify-center hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
     </div>
</form>


     </div>
</template>