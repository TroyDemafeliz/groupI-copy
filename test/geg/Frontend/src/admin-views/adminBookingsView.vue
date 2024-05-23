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
                        <a href="#" type="button" @click="deleteBooking(currentBooking.Id)" data-modal-show="editUserModal" class="font-medium text-red-geg hover:underline"><br><br>Cancel Booking</a>
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
                                 <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date/Time</label>
                                 <div id="appointment" class="flex flex-col">
                                       <button type="button" @click="showDatePicker = true" data-modal-target="timepicker-modal" data-modal-toggle="timepicker-modal" class="text-gray-900 mt-5 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                                             <svg class="w4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                             <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                                             </svg>
                                             Change date of appointment
                                       </button>

                                       <VDatePicker v-model="currentBooking.Date" v-if="showDatePicker" mode="dateTime" hide-time-header class="mt-3 mb-3"  />

                                       <div class="grid grid-cols-2 gap-2 mt-2">
                                             <button type="button" @click="saveDate" v-if="showDatePicker" class="text-xs px-2 py-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                                             <button type="button" @click="discardDate" v-if="showDatePicker" data-modal-hide="timepicker-modal" class="text-xs px-2 py-2 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Discard</button>
                                       </div>
                                 </div>
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mode</label>
                                 <div id="radio-options">
                                    <div class="flex items-center mb-4">
                                       <input id="default-radio-1" type="radio" value="face-to-face" v-model="currentBooking.Mode"  name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                       <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Face-to-Face</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                       <input checked id="default-radio-2" type="radio" value="online-meeting" v-model="currentBooking.Mode" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                       <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online-Meeting</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                       <input checked id="default-radio-3" type="radio" value="others" v-model="currentBooking.Mode" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                                       <label for="default-radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others (Please Specify:)</label>
                                    </div>
                                    
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                    <textarea id="message" rows="4" v-if="currentBooking.Mode === 'others'" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Where should we meet..."></textarea>
                                 </div>
                              </div>
                              <div class="col-span-6 sm:col-span-3">
                                 <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plan</label>
                                 <input type="file" name="company" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref = "editedPlan" placeholder="">
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
import { defineComponent, ref } from 'vue';
import { updateBooking, deleteBooking, useBookings, useBooking } from '../ModelApi/Booking';
import '@vuepic/vue-datepicker/dist/main.css';

export default defineComponent({
  data() {
    return {
      currentBooking: null,
      showDatePicker: false,
      selectedDate: null,
      selectedRadio: 'face-to-face',
    };
  },
  setup() {
    const formatDate = (date) => {
      const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
      const datePart = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const time = new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      return { day, datePart, time };
    };

    const { Bookings, setBooking } = useBookings();

    return {
      Bookings,
      setBooking,
      formatDate,
    };
  },
  methods: {
    viewDetails(booking) {
      this.currentBooking = booking;
      this.showModal('viewDetailsModal');
    },
    closeModal() {
      this.hideModal('viewDetailsModal');
      this.hideModal('editUserModal');
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
      this.showModal('editUserModal');
    },
    updateBooking() {
      const booking = this.currentBooking;
      const { Id, Date, Mode } = booking;
      const Plan = this.$refs.editedPlan.files[0];

      updateBooking(Id, Date, Mode, Plan)
        .then(response => {
          console.log('Booking updated successfully:', response.data);
          this.closeModal();
        })
        .catch(error => {
          console.error('Error updating booking:', error);
        });
    },
    deleteBooking(id) {
      if (confirm("Are you sure you want to delete this booking?")) {
        deleteBooking(id)
          .then(response => {
            console.log('Booking deleted successfully:', response.data);
            // Update the UI or remove the deleted booking from the list
          })
          .catch(error => {
            console.error('Error deleting booking:', error);
          });
      }
    },
    saveChanges() {
      this.updateBooking();
    },
    saveDate() {
      if (this.currentBooking) {
        this.currentBooking.Date = this.selectedDate;
      }
      this.showDatePicker = false;
    },
    discardDate() {
      this.selectedDate = null;
      this.showDatePicker = false;
    },
  },
});

</script>
