<template>
        <div class="p-4 sm:ml-64 pt-0">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex border-b rounded-t">
                                <h5 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">ACCOUNT DETAILS</h5>
                            </div>
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Your username</label>
                                <div class="flex">
                                    <div type="name" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">{{ name }}</div>
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <div class="flex">
                                    <div type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">{{ password }}</div>
                                </div>
                                <div class="mt-3 text-right">
                                    <button @click="toggle" type="button" data-modal-target="username-modal" data-modal-toggle="username-modal"  class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Edit Name</button>
                                </div>
                                <div class="mt-3 text-right">
                                    <button @click="toggle" type="button" data-modal-target="password-modal" data-modal-toggle="password-modal"  class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Edit Password</button>
                                </div>
                            </div>

                </div>
                        <!-- Main modal -->
                        <div id="username-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative p-4 w-full max-w-md max-h-full">
                                <!-- Modal content -->
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <!-- Modal header -->
                                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                            Edit your account details
                                        </h3>
                                        <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="password-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <!-- Modal body -->
                                    <div class="p-4 md:p-5">
                                        <form id="editUser" class="space-y-4" action="#">
                                            <div>
                                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Name</label>
                                                <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="new name" required />
                                            </div>
                                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <!-- Main modal -->
                        <div id="password-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative p-4 w-full max-w-md max-h-full">
                                <!-- Modal content -->
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <!-- Modal header -->
                                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                            Edit your account details
                                        </h3>
                                        <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="username-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <!-- Modal body -->
                                    <div class="p-4 md:p-5">
                                        <form id="editPassword" class="space-y-4" action="#">
                                            <div>
                                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
                                                <input type="password" name="current_password" id="current_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="new name" required />
                                            </div>
                                            <div>
                                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                            </div>
                                            <div>
                                                <label for="re-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">repeat password</label>
                                                <input type="password" name="re-password" id="re-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                </div>
                                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> 
            </div>
        </div>
</template>

<script>
import { updatePassword, updateUser, useUser, user } from '@/auth/useAuth';
import router from '@/router';
export default{
    mounted() {
        document.getElementById('editUser').addEventListener('submit', (event) => {
            event.preventDefault(); 
            const formData = new FormData(event.target);
            const name = formData.get("name"); 
            updateUser(name); 
            router.back
        });
        document.getElementById('editPassword').addEventListener('submit', (event) => {
            event.preventDefault(); 
            const formData = new FormData(event.target);
            const current_password = formData.get('current_password');
            const password = formData.get('password');
            const re_password = formData.get('re-password');
            console.log(current_password)
            try {
            if(password == re_password){
                updatePassword(current_password,password,re_password); 
                router.back
            }
            } catch (error) {
                console.log(error)
            }

        });
    },
setup(){
    const {user} = useUser
    const name = user.name
    const password = user.password

    const $targetEl = document.getElementById("password-modal");
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
  id: "password-modal",
  override: true
};
    const modal = new modal($targetEl, options, instanceOptions);
    const toggle = () => {
      modal.toggle()
      console.log(modal.isVisible)
    }

    return{
        toggle, user, name, password
    }
}
    
}
</script>
