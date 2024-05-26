<template>
  <div class="max-w-5xl mx-auto mt-10 mb-20">
        <form class="max-w-2xl mx-auto" id="form" ref="form" @submit.prevent="sendEmail">
        <div class="">
              <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl whitespace-nowrap"><span class="text-transparent bg-clip-text bg-gradient-to-r to-red-400 from-red-600">Request Meeting</span></h1>
              <p class="text-lg font-normal text-black lg:text-xl dark:text-black mb-10 mt-5">Welcome to our meeting request page. We look forward to discussing your construction needs.</p>
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
                    <input id="default-radio-2" type="radio" value="online-meeting" v-model="selectedRadio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online-Meeting</label>
                </div>
                <div class="flex items-center mb-4">
                    <input id="default-radio-3" type="radio" value="others" v-model="selectedRadio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                    <label for="default-radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others (Please Specify:)</label>
                </div>
                
                <label for="meetingMessage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                <textarea id="meetingMessage" rows="4" v-model="meetingMessage" v-if="selectedRadio === 'others'" ref="meetingMessageRef" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Where should we meet..."></textarea>

              </div>

              <div>
            <div id="appointment" class="flex flex-col">
                  <button type="button" @click="showDatePicker = true" class="text-gray-900 mt-5 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                        <svg class="w4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                        </svg>
                        Schedule appointment
                  </button>

                  <VDatePicker id="selectedDate" v-model="selectedDate" v-if="showDatePicker" mode="dateTime" hide-time-header class="mt-3 mb-3" :min-date="new Date()" :disabled-dates="booked" :allowed-hours="allowedHours" />

                  <div class="grid grid-cols-2 gap-2 mt-2">
                        <button type="button" @click="saveDate" v-if="showDatePicker" class="text-xs px-2 py-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                        <button type="button" @click="discardDate" v-if="showDatePicker" class="text-xs px-2 py-2 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Discard</button>
                  </div>
              </div>
            </div>

            <label class="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">recaptcha</label>
            <div id="recaptcha" class="g-recaptcha" data-sitekey="6LcCm9MpAAAAAHxZFYCO4s6DILZRTKeqRpUfjsdk"></div>

              <label class="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Proposed Plan:</label>
              <input accept="image/*" @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="plan" type="file">
             
              <button type="submit" class="block mx-auto text-white mt-10 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">
                <span v-if="!loading">Submit</span>
                <span v-else>
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  <span class="sr-only">Loading...</span>
                </span>
              </button>
          </div>
        </form>
  </div>
</template>

<script>
import {createBooking, bookedDates} from '@/ModelApi/Booking';
import { ref } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css'
import emailjs from '@emailjs/browser';
import "vue-toastification/dist/index.css";
import { useToast, TYPE } from "vue-toastification";
import imageCompression from 'browser-image-compression';
import axios from 'axios';
import { onMounted } from 'vue';

export default {

  setup() {
    const toast = useToast();
    const activeErrors = ref([]);
    let timeoutIds = {};

  const showToast = (message, type = 'success') => {
    if (!activeErrors.value.includes(message)) {
      activeErrors.value.push(message);
      if (type === 'success') {
        toast.success(message, { type: TYPE.SUCCESS });
        console.log('Success:', message);
      } else if (type === 'error') {
        toast.error(message, { type: TYPE.ERROR });
        console.log('Error:', message);
      }
      // Clear existing timeout for this message
      if (timeoutIds[message]) {
        clearTimeout(timeoutIds[message]);
      }
      // Set a new timeout for this message
      timeoutIds[message] = setTimeout(() => {
        activeErrors.value = activeErrors.value.filter((err) => err !== message);
      }, 5000); // Set the timeout duration (in milliseconds) here
    }
  };

  const loadRecaptchaScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

  onMounted(() => {
  loadRecaptchaScript();
  watch(
    () => document.getElementById('recaptcha'),
    (newEl) => {
      if (window.grecaptcha && newEl) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render(newEl);
        });
      }
    }
  ); // This closing parenthesis was missing
});

    return { 
        showToast 
      }
  },
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
      file: null,
      fileName: '',
      shortenedUrl: '',
      loading: false,
      meetingMessage: '',
      storedMessage: ''
    };
  },
 
  methods: {

    allowedHours(hour) {
      return hour >= 8 && hour <= 17;
    },

    saveDate() {
      this.savedDate = this.selectedDate;
      this.showDatePicker = false;
      console.log('Saved date:', this.savedDate)
      if (this.selectedDate < new Date()) {
        this.showToast('Please select a time from the current time onwards.', 'error');
      }
    }, 
    formatDate(date) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return date.toLocaleDateString('en-US', options);
    },
    async handleFileUpload(event) {
          this.file = event.target.files[0];
      if (!this.file) return;
    },

      async compressImage(imageFile) {
        const options = {
          maxSizeMB: 0.05,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        try {
          const compressedFile = await imageCompression(imageFile, options);
          return compressedFile;
        } catch (error) {
          this.loading = false;
          console.error('Image compression failed:', error);
          throw error;
        }
      },

      async uploadToCloudinary(file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'k8ue6a77'); 
      try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dkcgb6egn/image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        this.shortenedUrl = response.data.secure_url;
        console.log('Image uploaded successfully:', this.shortenedUrl);
      } catch (error) {
        console.error('Image upload failed:', error);
        alert('Image upload failed. Please try again.');
      }
    },

    async sendEmail() {
      this.storedMessage = this.meetingMessage;
      console.log("Stored Message:", this.storedMessage);
      this.loading = true;
      const captchaValue = grecaptcha.getResponse();
      let errorMessages = [];

      if (!this.selectedRadio) {
        errorMessages.push('Meeting preference is required.');
      }
      if (this.selectedRadio === 'others' && !this.storedMessage) {
        errorMessages.push('Please specify where to meet.');
      }
      if (!this.selectedDate) {
        errorMessages.push('Appointment date and time are required.');
      }
      if (!this.file) {
        errorMessages.push('Please upload a proposed plan.');
      }
      if (!captchaValue) {
        errorMessages.push('Please verify you are not a robot.');
      }

      if (errorMessages.length > 0) {
        this.loading = false;
        errorMessages.forEach((message) => {
          this.showToast(message, 'error');
        });
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
      Mode = this.selectedRadio === 'others' ? this.storedMessage : this.selectedRadio,
      Plan = this.file;
    
      createBooking(Email, FirstName, LastName, Company, Phone, Date, Mode, Plan)
      this.errorsShown = [];

      if (this.file) {
        try {
          const compressedFile = await this.compressImage(this.file);
          await this.uploadToCloudinary(compressedFile);
        } catch (error) {
          console.error('Error handling file upload:', error);
          return;
        }
      }
      
      var params = {
        first_name: this.FirstName,
        last_name: this.LastName,
        email: this.email,
        phone: this.phone,
        company: this.company,
        mode: this.selectedRadio === 'others' ? this.storedMessage : this.selectedRadio,
        dateTime: this.formatDate(this.savedDate),
        plan: this.shortenedUrl,
      }
      emailjs.send("service_lr9wqrx", "template_kpgjaqj", params, {
          publicKey: '57QvhlgrOy8QdU-l0',
        })
        .then(
          () => {
            this.loading = false; 
            if (createBooking) {
              this.showToast('Meeting request sent successfully! Please check your email for your meeting request details.', 'success');
            }
            else {
              this.showToast('Failed to send meeting request. Please try again.', 'error');
            }
            console.log('SUCCESS!');
            console.log('First Name:', this.FirstName);
            console.log('Last Name:', this.LastName);
            console.log('Email:', this.email);
            console.log('Phone:', this.phone);
            console.log('Company:', this.company);
            console.log('Selected Radio:', this.selectedRadio === 'others' ? this.storedMessage : this.selectedRadio);
            console.log('Selected Date:', this.formatDate(this.selectedDate));
            console.log('Proposed Plan:', this.shortenedUrl);
          },
          (error) => {
            console.log('FAILED...', error);
            this.loading = false; 
            this.showToast('Failed to send email. Please try again.', 'error');
          },
        );
    },

    onVerify(response) {
      console.log('Captcha response:',response);
    },
    discardDate() {
      this.showDatePicker = false;
      this.selectedDate = null;
    },

  }
};
</script>