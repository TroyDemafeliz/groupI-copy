<template>
    <div class="p-4 sm:ml-64 pt-0">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
         <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" class="px-6 py-3">
                        Email
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Name
                     </th>
                     <th scope="col" class="px-6 py-3 text-center" colspan="2">
                        Action
                     </th>
                  </tr>
            </thead>
            <tbody>
               <tr v-for="user in users" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">
                     <div class="my-0 py-0 text-black font-extrabold text-3xl"> {{ user.username }}</div>
                  </td>
                  <td class="px-6 py-4">
                  <div class="flex items-center text-black font-light text-lg">
                     {{ user.name }}
                  </div>
                  </td>
                  <td class="px-6 py-4 col-span-2">
                  <div class="grid grid-cols-2">
                     <div>
                        <a href="#" @click="toggle" type="button" data-modal-target="register-modal" data-modal-toggle="register-modal" class="font-medium text-red-geg hover:underline"><br><br>Create Account</a>
                     </div>
                     <div>
                        <button type="button" v-on:click="deleteCurrentUser(user.username)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red rounded-lg hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Delete Service
                        </button>
                     </div>
                  </div>
                  </td>

                  <!-- Main modal -->
                  <div id="register-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                     <div class="relative p-4 w-full max-w-md max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              <!-- Modal header -->
                              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                 <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Register an Employee
                                 </h3>
                                 <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="register-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                 </button>
                              </div>
                              <!-- Modal body -->
                              <div class="p-4 md:p-5">
                                 <form id="createEmployee" class="space-y-4" action="#">
                                    <div>
                                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="employee@company.com" required />
                                    </div>
                                    <div>
                                          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                          <input type="name" name="name" id="name" placeholder="employee" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Initial password</label>
                                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Employee Account</button>
                                 </form>
                              </div>
                        </div>
                     </div>
                  </div> 

               </tr>
            </tbody>
         </table>
      </div>
      </div>
</template>

<script>
import { deleteUser, createUser, useUsers } from '@/auth/useAuth';
export default{
      mounted() {
        document.getElementById('createEmployee').addEventListener('submit', (event) => {
            event.preventDefault(); 
            const formData = new FormData(event.target);
            const username = formData.get("email"); 
            const name = formData.get("name"); 
            const password = formData.get("password"); 
            createUser(username, name, password); 
            router.back
        });
    },
    setup(){
    const {users} = useUsers();
    const deleteCurrentUser = (username) => {
      if (confirm("Are you sure you want to delete this User?")) {
        deleteUser(username);
      }
    }

    const $targetEl = document.getElementById("register-modal");
    const options = {
    triggerType: 'click',
    delay: 300,
    ignoreClickOutsideClass: false,
    onHide: () => {
        console.log('modal has been hidden');
    },
    onShow: () => {
        console.log('modal has been shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    },
};

    const instanceOptions = {
    id: "register-modal",
    override: true 
};
    const modal = new modal($targetEl, options, instanceOptions);
    const toggle = () => {
      modal.toggle()
      console.log(modal.isVisible)
    }

        return{
          users, deleteCurrentUser, toggle
        }


    }
}

</script>