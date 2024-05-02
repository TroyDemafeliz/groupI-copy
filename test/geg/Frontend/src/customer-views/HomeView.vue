<template>
<div id="Home">
        
      <div id="header" class="pt-20 mb-10 h-screen justify-center text-center flex flex-col items-center"> 
            <h1 class="mb-4 mx-auto text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">GEG Builders and Construction Supplies</h1>
                  <!-- <p class="mb-6 text-lg font-bold text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> -->
                        <div>
                              <div class="mt-10 mb-4"  @click="onStylePrimarySmallFalseDaClick">
                                    <router-link  to="/request">
                                    <b class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-lg rounded-lg text-sm px-10 py-5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Book Now</b>
                                    </router-link>
                              </div>  
                        </div>
      </div>
      
      <div id="paragraph" class="mt-10 mb-10 justify-center text-center">
            <h1 class="mb-4 mx-auto text-xl font-extrabold leading-none tracking-tight text-red-geg md:text-2xl lg:text-5xl dark:text-white">What we Offer</h1>
                  <p class="mb-6 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

      </div>
      
      <div id="services" class="mt-10 mb-10 justify-center text-center">
            <div class="inline-flex space-x-4 justify-center mb-6">
      
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                        <img class="rounded-t-lg" src="../assets/se-dummy-images/project-5 (school).jpeg" alt="" />
                  </a>
                  <div class="p-5">
                        <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-geg dark:text-white">Service 1</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        
                        </div>
                  </div>
      
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                              <img class="rounded-t-lg" src="../assets/se-dummy-images/project-5 (school).jpeg" alt="" />
                        </a>
                        <div class="p-5">
                              <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-geg dark:text-white">Service 2</h5>
                              </a>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                              
                        </div>
                  </div>
      
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                              <img class="rounded-t-lg" src="../assets/se-dummy-images/project-5 (school).jpeg" alt="" />
                        </a>
                        <div class="p-5">
                              <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-geg dark:text-white">Service 3</h5>
                              </a>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                              
                        </div>
                  </div>
      
                  
      
            </div>
            <div class="mt-8 mb-8"  @click="onStylePrimarySmallFalseDaClick">
                              <router-link  to="/services">
                              <b class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-lg rounded-lg text-sm px-10 py-5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">View Services</b>
                              </router-link>
            </div>  
            
      </div>
      <div id="project" class="mt-20 mb-10 justify-center w-full md:w-3/4 mx-auto">
            <h1 class="text-4xl text-left inline-flex mb-4 font-extrabold leading-none tracking-tight text-red-geg md:text-4xl lg:text-5xl dark:text-white">Our Latest Project</h1>
            <div class="inline-flex space-x-10 justify-center mb-6">
                  
                  <p class="indent-8 text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full md:w-1/2">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

                  <img class="h-auto max-w-lg rounded-lg" src="../assets/se-dummy-images/project-1.png" alt="image description">



            </div>
            <div class="text-left mt-4"  @click="onStylePrimarySmallFalseDaClick">
                                          <router-link  to="/projects">
                                          <b class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-lg rounded-lg text-sm px-10 py-5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">View Project Gallery</b>
                                          </router-link>
            </div> 

      </div>

</div>            
</template>

<style>
      #header {
            background-image: url('../components/icons/GEGpic.png');
            background-size: 100% 100%;

      }
</style>