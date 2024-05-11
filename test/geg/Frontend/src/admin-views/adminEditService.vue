<template>
    <div>
        <div class="p-4 sm:ml-64 pt-0">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
               <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                  <div class="justify-left max-w-full mx-auto flex">
                     <form class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                           <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                 Edit Service
                           </h3>
                        </div>
                              <div class="p-6 space-y-6">
                                 <div class="grid grid-cols-6 gap-6">
                                       <div class="col-span-6 sm:col-span-6">
                                          <label for="picture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
                                          <input @change="onFileChange" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="service-picture" type="file">
                                       </div>
                                       <div class="col-span-6 sm:col-span-6">
                                          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                          <input type="text" name="title" id="title" v-model="title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Construction service" required>
                                       </div>
                                       <div class="col-span-6 sm:col-span-6">
                                          <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                          <textarea id="description" rows="4" v-model="desc" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description..."></textarea>
                                       </div>
                                 </div>
                              </div>
                        <div class="flex items-center justify-end py-5 px-10 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                           <button v-on:submit="onSubmit(id, title, desc, imageSrc)" type="submit" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                     </form>
                  </div>
                  
                  <div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                              <img class="rounded-t-lg" :src="imageSrc" alt=""/>

                              <div class="p-5">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ desc }}</p>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useServices } from '@/auth/Services';
import router from '@/router';
export default {
   setup(){
      const {updateService, currentService, setService} = useServices()
      const Service = currentService
      const title = Service.Title
      const desc = Service.Description
      const imageSrc = Service.Image
      const id = Service.Id
   return{
      updateService,
      setService,
      currentService,
      title,
      desc,
      imageSrc,
      id
   }
   },
  methods: {
   onSubmit(id, Title, Description, Image){
      this.updateService(id, Title, Description, Image)
      this.setService(null)
      router.push('/admin-services')
   },

   onFileChange(e) {
      const file = e.target.files[0];
      if (file && file.type.match('image.*')) {
         this.imageSrc = URL.createObjectURL(file);  
      } else {
         this.imageSrc = '../assets/se-dummy-images/project-4.jpeg';
      }
    }
  }
};
</script>