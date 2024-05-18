<script setup>
</script>

<template>
    <div class = "pt-20 px-10 flex flex-col items-center justify-center text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-geg md:text-5xl lg:text-6xl dark:text-white">Services</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 max-w-prose">
          Browse through our available services.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-10">
                  <div v-for="Service in Services" :key="index"
                        class="max-w-sm bg-white border-gray-200 border rounded-lg">
                        <img class="rounded-t-lg" :src="Service.Image" alt="" />

                        <div class="p-5">
                        <h5 class="mb-5 text-2xl font-bold tracking-tight text-red-geg dark:text-white">{{ Service.Title }}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{{ Service.Description }}</p>
                  </div>
              </div>
          </div>
    </div>
</template>
<script>
import { useServices } from '../ModelApi/Services';
import { defineComponent } from 'vue';

export default defineComponent({

  setup(){
    const {Services, setService} = useServices()
    const setCurrent = (Service) => {
      setService(Service)
    }

    return{
      Services,
      setCurrent,
    }
  },
});
</script>