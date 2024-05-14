<template>
    <div>
        <div class="p-4 sm:ml-64 pt-0">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
                <div class="justify-left max-w-full mx-auto flex">
                    <form class="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-full">
                     <!-- Modal header -->
                     <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Add Service
                        </h3>
                     </div>
                     <!-- Modal body -->
                     <div class="p-6 space-y-6">
                        <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-6">
                                 <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
                                 <input @change="onFileChange" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
                              </div>
                              <div class="col-span-6 sm:col-span-6">
                                 <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                 <input v-model="title" type="text" name="title" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Construction Service" required>
                              </div>
                              <div class="col-span-6 sm:col-span-6">
                                 <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                 <textarea v-model="description" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description..." required></textarea>
                              </div>
                        </div>
                     </div>
                     <!-- Modal footer -->
                     <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="submit" v-on:click="Create" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                     </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { createService } from '@/ModelApi/Services';
import router from '@/router';
import { defineComponent, ref } from 'vue';

export default defineComponent({

   setup(){

      title = ref("")
      description = ref("")
      imageSrc = "../assets/se-dummy-images/project-4.jpeg"

      const Create = async () => {
         createService(title, description, imageSrc)
         router.push()
      }
      return{
         title,description,image, Create
      }
   },
   methods:{
      onFileChange(e) {
      const file = e.target.files[0];
      if (file && file.type.match('image.*')) {
         this.imageSrc = URL.createObjectURL(file);  
      } else {
         this.imageSrc = '../assets/se-dummy-images/project-4.jpeg';
      }
    }
  }
   })

</script>