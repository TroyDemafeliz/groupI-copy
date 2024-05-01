<template>
    <div class="p-4 sm:ml-64 pt-0">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 mb-10 bg-white dark:bg-gray-900">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
                  <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                     </svg>
                  </div>
                  <input type="text" id="table-search-users" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for project">
            </div>
         </div>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                <div v-for="(item, index) in items" :key="index"
                    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg" :src="item.image" alt="" />

                    <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ item.description }}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-grayish focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2 mb-2">
                        Edit Project
                    </a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Delete Project
                    </a>
                    </div>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
import image1 from '../assets/se-dummy-images/project-5 (school).jpeg'
export default {

  data() {
    return {
      items: [
        {
          title: "Noteworthy technology acquisitions 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          image: image1
        },
        {
          title: "Noteworthy technology acquisitions 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          image: image1
        },
        {
          title: "Noteworthy technology acquisitions 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          image: image1
        },
        {
          title: "Noteworthy technology acquisitions 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          image: image1
        },
      ]
    };
  }
};
</script>