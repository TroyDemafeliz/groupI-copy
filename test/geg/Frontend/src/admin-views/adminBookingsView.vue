<template>
    <div class="p-4 sm:ml-64 pt-0">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
         <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" class="px-6 py-3">
                        Date
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Setting
                     </th>
                     <th scope="col" class="px-6 py-3">
                        Company
                     </th>
                     <th scope="col" class="px-6 py-3 text-center" colspan="2">
                        Action
                     </th>
                  </tr>
            </thead>
            <tbody>
               <tr v-for="(Booking, index) in Bookings" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">
                     <div class="my-0 py-0 text-black font-extrabold text-3xl">{{ formatDate(Booking.Date).day }}</div>
                     <div class="text-black ml-3">{{ formatDate(Booking.Date).datePart }}</div>
                  </td>
                  <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <div class="ps-1 pr-4">
                     <img src="../assets/se-dummy-images/clock icon.png"  class="w-5 h-5 rounded-full">
                     <img src="../assets/se-dummy-images/location icon.png"  class="w-5 h-5 rounded-full mt-2.5">
                  </div>         
                  <div class="ps-3">
                     <div class="text-base font-semibold mb-2">{{ formatDate(Booking.Date).time }}</div>
                     <div class="font-normal text-gray-500">{{ Booking.Mode }}</div>
                  </div>  
                  </th>
                  <td class="px-6 py-4">
                  <div class="flex items-center text-black font-light text-lg">
                     {{ Booking.Company }}
                  </div>
                  </td>
                  <td class="px-6 py-4 col-span-2">
                  <div class="grid grid-cols-2">
                     <div>
                        <a href="#" @click.prevent="viewDetails(Booking)" type="button" data-modal-target="viewDetailsModal" data-modal-show="viewDetailsModal" class="font-medium text-black dark:text-blue-500 hover:underline">View Details</a>
                        <a href="#" @click.prevent="editBooking(Booking)" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-black dark:text-blue-500 hover:underline"><br><br>Edit Booking</a>
                     </div>
                     <div>
                        <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-black dark:text-blue-500 hover:underline">Complete Booking</a>
                        <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-red-geg hover:underline"><br><br>Cancel Booking</a>
                     </div>
                  </div>
                  </td>
               </tr>
            </tbody>
         </table>
         <!-- Edit Booking modal -->
         <div id="editUserModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                  <!-- Modal content -->
                  <form id="editBooking" @submit.prevent="saveChanges" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                     <!-- Modal header -->
                     <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Edit Booking
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                     </button>
                     </div>
                     <!-- Modal body -->
                     <div class="p-6 space-y-6" v-if="currentBooking">
                        <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                 <input type="text" name="first-name" id="first-name" v-model="currentBooking.FirstName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                                 {{ currentBooking.FirstName }}
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                 <input type="text" name="last-name" id="last-name" v-model="currentBooking.LastName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                                 {{ currentBooking.LastName }}
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                 <input type="email" name="email" id="email" v-model="currentBooking.Email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                                 {{ currentBooking.Email }}
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                 <input type="number" name="phone-number" id="phone-number" v-model="currentBooking.Phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                                 {{ currentBooking.Phone }}
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                 <input type="text" name="company" id="company" v-model="currentBooking.Company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                                 {{ currentBooking.Company }}
                              </div>
                        </div>
                     </div>
                     <!-- Modal footer -->
                     <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="submit" @click="updateBooking(currentBooking)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                     </div>
                  </form>
            </div>
         </div>

         <div id="viewDetailsModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                  <!-- Modal content -->
                  <form class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                     <!-- Modal header -->
                     <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              View Details
                        </h3>
                        <button type="button" @click="closeModal" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="viewDetailsModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                     </button>
                     </div>
                     <!-- Modal body -->
                     <div class="p-6 space-y-6" v-if="currentBooking">
                        <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="first-name" class="block mb-2 text-sm text-gray-900 dark:text-white font-normal">First Name</label>
                                 <div type="text" name="first-name" id="first-name" class="text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 border-0 font-extrabold">
                                    {{currentBooking.FirstName}}
                                 </div>
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="last-name" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Last Name</label>
                                 <div type="text" name="last-name" id="last-name" class="text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 border-0 font-extrabold">
                                    {{currentBooking.LastName}}
                                 </div>
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="email" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Email</label>
                                 <div type="number" name="email" id="email" class="text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 border-0 font-extrabold">
                                    {{currentBooking.Email}}
                                 </div>
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="phone-number" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Phone Number</label>
                                 <div type="text" name="phone-number" id="phone-number" class="text-gray-900 text-sm rounded-lg block w-full p-2.5 border-0 font-extrabold">
                                    {{currentBooking.Phone}}
                                 </div> 
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="company" class="block mb-2 text-sm font-normal text-gray-900 dark:text-white">Company</label>
                                 <div type="text" name="company" id="company" class="text-gray-900 text-sm rounded-lg block w-full p-2.5 border-0 font-extrabold">
                                    {{currentBooking.Company}}
                                 </div>
                              </div>
                        </div>
                     </div>
                     <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                     </div>
                  </form>
            </div>
         </div>
      </div>
      </div>
</template>

<script>
// import { formatDate } from 'v-calendar/dist/types/src/utils/date/helpers';
import { updateBooking } from '../ModelApi/Booking';
import { useBookings} from '../ModelApi/Booking';
import { useBooking} from '../ModelApi/Booking';
import axios from 'axios';
import { defineComponent } from 'vue';
import { ref } from 'vue';
export default defineComponent({
   data() {
   return {
      bookingsDate:'',
      storeBookingsDate: '',
      currentBooking: null,
      bookings: [],
    };
  },
   setup(){
    const formatDate = (date) => {
      const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
      const datePart = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const time = new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      return { day, datePart, time };
    }
    const rows = ref([])

    const {deleteBooking} = useBooking()
    const {Bookings, setBooking} = useBookings()
    const setCurrent = (Booking) => {
      setBooking(Booking)
    }

    const deleteCurrentBooking = (id) => {
      if (confirm("Are you sure you want to delete this booking?")) {
        deleteService(id);
      }
    }

    return{
      Bookings,
      setCurrent,
      formatDate
    }
  },
  methods: {
    viewDetails(booking) {
      this.currentBooking = booking;
      this.showModal('viewDetailsModal');
    },
    closeModal() {
      this.hideModal('viewDetailsModal');
      this.currentBooking = null;
    },
    showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
      }
    },
    hideModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('hidden');
      }
  },
    editBooking(booking) {
    this.currentBooking = booking;
  },
  updateBooking(booking) {
   const Id = booking.Id;
   const Email = booking.Email;
   const FirstName = booking.FirstName;
   const LastName = booking.LastName;
   const Company = booking.Company;
   const Phone = booking.Phone;

  updateBooking(Id, Email, FirstName, LastName, Company, Phone)
    .then(response => {
      console.log('Booking updated successfully:', response.data);
    })
    .catch(error => {
      console.error('Error updating booking:', error);
    });
},
  saveChanges() {
    
   this.updateBooking(this.currentBooking);
    this.closeModal();
  },
   },
});
</script>
