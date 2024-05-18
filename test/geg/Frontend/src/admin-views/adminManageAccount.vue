<template>
        <div class="p-4 sm:ml-64 pt-0">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form class="space-y-6" action="#">
                            <div class="flex border-b rounded-t">
                                <h5 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">ACCOUNT DETAILS</h5>
                            </div>
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Your username</label>
                                <div class="flex">
                                    <div type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">name@company.com</div>
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <div class="flex">
                                    <div type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">*******</div>
                                </div>
                                <div class="mt-3 text-right"><button type="button" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Edit</button></div>
                            </div>
                            <div class="flex items-center space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600 pt-5">
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
</template>