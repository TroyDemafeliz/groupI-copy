<template>
    <div class="p-4 sm:ml-64 pt-0">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
        <RouterLink to = "/admin-edit-service" class="">
          <button type="button" class="justify-center w-1/2 text-white bg-black hover:bg-grayish focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10">
            <img class="w-3.5 h-3.5 me-2" aria-hidden="true" src="../assets/plus-icon.png"/>
                Add Service
          </button>
        </RouterLink>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                    <div v-for="(item, index) in items" :key="index"
                        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg" :src="item.image" alt="" />

                        <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ item.description }}</p>
                        <RouterLink to="/admin-edit-service" type="button" data-modal-target="editServiceModal" data-modal-show="editServiceModal" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-grayish focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2 mb-2">
                            Edit Service
                        </RouterLink>
                        <a href="#" data-modal-target="editServiceModal" data-modal-show="editServiceModal" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Delete Service
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