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
                      <RouterLink :to="{name: 'admin-edit-service', params:{id: Service.Id}}" type="button" v-on:click.capture="setId(Service.Id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-grayish focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2 mb-2">
                          Edit Service
                      </RouterLink>
                      <button type="delete" v-on:click = "deleteCurrentService(Service.Id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300">
                          Delete Service
                      </button>
                    </div>
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