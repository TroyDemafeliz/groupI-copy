<template>
  <div class="p-4 sm:ml-64 pt-0">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
      <RouterLink to = "/admin-services-add" class="">
        <button type="button" class="justify-center w-1/2 text-white bg-black hover:bg-grayish focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10">
          <img class="w-3.5 h-3.5 me-2" aria-hidden="true" src="../assets/plus-icon.png"/>
              Add Service
        </button>  
      </RouterLink>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                  <div v-for="Service in Services"
                      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <img class="rounded-t-lg" :src="Service.Image" alt="" />

                      <div class="p-5">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ Service.Title }}</h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ Service.Description }}</p>
                      <button @click.prevent="editService(Service)" data-modal-target="editServiceModal" data-modal-show="editServiceModal" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-grayish focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2 mb-2">
                          Edit Service
                      </button>
                      <button type="delete" v-on:click = "deleteCurrentService(Service.Id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300">
                          Delete Service
                      </button>
                    </div>
                  </div>
          </div>
          <div id="editServiceModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <form id="editService" @submit.prevent="saveChanges" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                   <!-- Modal header -->
                   <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit Service
                      </h3>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editServiceModal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                   </button>
                   </div>
                   <!-- Modal body -->
                   <div class="p-6 space-y-6" v-if="currentService">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-6">
                            <label for="picture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
                            <input accept="image/*" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" name="service-picture" id="service-picture" ref="servicePicture" type="file">
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input type="text" name="title" id="title" v-model="currentService.Title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Construction service" required>
                        </div>
                        <div class="col-span-6 sm:col-span-6">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea name="description" id="description" rows="4" v-model="currentService.Description" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description..."></textarea>
                        </div>
                      </div>
                   </div>
                   <!-- Modal footer -->
                   <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button type="submit" @click="updateService(currentService)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                   </div>
                </form>
          </div>
       </div>
    </div>
  </div>
</template>
<script>
import { useServices} from '../ModelApi/Services';


export default{

setup(){
  const {Services, setService, deleteService} = useServices()
  const setCurrent = (Service) => {
    setService(Service)
  }

  const deleteCurrentService = (id) => {
    if (confirm("Are you sure you want to delete this service?")) {
      deleteService(id);
    }
  }

  return{
    Services,
    setCurrent,
    deleteCurrentService
  }
}
};
</script>