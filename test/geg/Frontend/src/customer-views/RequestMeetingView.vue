<template>
  <form class="max-w-5xl mx-auto mt-10 mb-20">
        <form class="max-w-2xl mx-auto" @submit.prevent="submitForm">
        <div class="">
              <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl whitespace-nowrap"><span class="text-transparent bg-clip-text bg-gradient-to-r to-red-400 from-red-600">Request Meeting</span></h1>
              <p class="text-lg font-normal text-black lg:text-xl dark:text-black mb-10 mt-5">Welcome to our meeting request page. We look forward to discussing your construction needs</p>
        </div>
        <div class="border-2 border-gray-300 p-20 rounded-md">
              <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                          <input type="text" pattern="[A-Za-z]*" name="first_name" id="first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " v-model="FirstName" required />
                          <label for="first_name" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                          <input type="text" pattern="[A-Za-z]*" name="last_name" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " v-model="LastName" required />
                          <label for="last_name" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                          <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " v-model="email" required />
                          <label for="email" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    
                    <div class="relative z-0 w-full mb-5 group">
                          <input type="tel" pattern="[0-9]{11}" name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " v-model="phone" required />
                          <label for="phone" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="company" id="company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " v-model="company" required />
                    <label for="company" class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
              </div>
              </div>
              
              <div id="radio-options">
                <p class="mb-5 mt-2 font-semibold">Where Should we Meet?</p>
                <div class="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="face-to-face" v-model="selectedRadio"  name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Face-to-Face</label>
                </div>
                <div class="flex items-center mb-4">
                    <input checked id="default-radio-2" type="radio" value="online-meeting" v-model="selectedRadio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online-Meeting</label>
                </div>
                <div class="flex items-center mb-4">
                    <input checked id="default-radio-3" type="radio" value="others" v-model="selectedRadio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                    <label for="default-radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others (Please Specify:)</label>
                </div>
                
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <textarea id="message" rows="4" v-if="selectedRadio === 'others'" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Where should we meet..."></textarea>

              </div>

              <div>
            <div id="appointment" class="flex flex-col">
                  <button type="button" @click="showDatePicker = true" data-modal-target="timepicker-modal" data-modal-toggle="timepicker-modal" class="text-gray-900 mt-5 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                        <svg class="w4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                        </svg>
                        Schedule appointment
                  </button>

                  <VDatePicker v-model="selectedDate" v-if="showDatePicker" mode="dateTime" hide-time-header class="mt-3 mb-3"  />

                  <div class="grid grid-cols-2 gap-2 mt-2">
                        <button type="button" @click="saveDate" v-if="showDatePicker" class="text-xs px-2 py-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                        <button type="button" @click="discardDate" v-if="showDatePicker" data-modal-hide="timepicker-modal" class="text-xs px-2 py-2 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Discard</button>
                  </div>
            </div>
              </div>

            <div class="g-recaptcha" data-sitekey="6LcCm9MpAAAAAHxZFYCO4s6DILZRTKeqRpUfjsdk" ref="recaptcha"></div>

            <!-- <form class="max-w-lg mx-auto"> -->
              <label class="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
              <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" ref="user_avatar" id="user_avatar" type="file">
             
              <button type="submit" class="block mx-auto text-white mt-10 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">Submit</button>
            <!-- </form> -->
            
          </div>
        </form>
  </form>
</template>



<script>
import {createBooking} from '@/ModelApi/Booking';
import { ref } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css'
const date = ref(new Date())

export default {
  data() {
    return {
      selectedRadio: null,
      showModal: false,
      showDatePicker: false,
      selectedDate:null,
      savedDate:null,
      FirstName: '',
      LastName: '',
      email: '',
      phone: '',
      company: '',
      selectedRadio: '',
      selectedDate: '',
    };
  },
 
  methods: {

    onVerify(response) {
      console.log('Captcha response:',response);
    },
    saveDate() {
      this.savedDate = this.selectedDate;
      this.showDatePicker = false;
      console.log('Saved date:', this.savedDate)
    }, 
    discardDate() {
      this.showDatePicker = false;
    },
    async submitForm() {
    
      console.log('Form Submitted');
      const captchaValue = grecaptcha.getResponse();
      if (!captchaValue) {
        alert('Please verify you are not a robot');
        return;
      }

      console.log('First Name:', this.FirstName);
      console.log('Last Name:', this.LastName);
      console.log('Email:', this.email);
      console.log('Phone:', this.phone);
      console.log('Company:', this.company);
      console.log('Selected Radio:', this.selectedRadio);
      console.log('Selected Date:', this.selectedDate);

      const formattedDate = this.selectedDate.toISOString();
      console.log('Formatted Date:', formattedDate);

      const FirstName = this.FirstName,
      LastName = this.LastName,
      Email = this.email,
      Company = this.company,
      Phone = this.phone,
      Date = formattedDate,
      Mode = this.selectedRadio,
      Plan = this.$refs.user_avatar.files[0];
    
      createBooking(Email, FirstName, LastName, Company, Phone, Date, Mode, Plan)
    }
  },
  mounted() {
    if (window.grecaptcha && this.$refs.recaptcha) {
      window.grecaptcha.render(this.$refs.recaptcha);
    }
  },

};
</script>