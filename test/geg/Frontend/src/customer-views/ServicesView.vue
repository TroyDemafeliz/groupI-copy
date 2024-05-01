<script setup>
</script>

<template>
    <div class = "pt-20 px-10 flex flex-col items-center justify-center text-center">
        <h1 class="mb-20 text-4xl font-extrabold leading-none tracking-tight text-red-geg md:text-5xl lg:text-6xl dark:text-white pt-10">Services</h1>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-10">
                  <div v-for="(item, index) in items" :key="index"
                        class="max-w-sm bg-white border-gray-200 border rounded-lg">
                        <img class="rounded-t-lg" :src="item.image" alt="" />

                        <div class="p-5">
                        <h5 class="mb-5 text-2xl font-bold tracking-tight text-red-geg dark:text-white">{{ item.title }}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{{ item.description }}</p>
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
            title: "Service 1",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: image1
          },
          {
            title: "Service 2",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: image1
          },
          {
            title: "Service 3",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: image1
          },
          {
            title: "Service 4",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: image1
          },
          {
            title: "Service 5",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: image1
          },
          {
            title: "Service 6",
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            image: image1
          },
        ]
      };
    }
  };
</script>