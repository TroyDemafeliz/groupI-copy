<template>
<div id="Header">
                                
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white">GEG Builders and Construction Supplies</h1>
      <p class="mb-6 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div>
                  <div  @click="onStylePrimarySmallFalseDaClick">
                        <router-link  to="/request">
                        <b class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-lg rounded-lg text-sm px-10 py-5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Book Now</b>
                        </router-link>
                  </div>  
            </div>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white">What we Offer</h1>
      <p class="mb-6 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

      <div>
            <div class="inline-flex space-x-4 justify-center">
      
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                        <img class="rounded-t-lg" src="../assets/se-dummy-images/project-5 (school).jpeg" alt="" />
                  </a>
                  <div class="p-5">
                        <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
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
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
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
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                              </a>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                              
                        </div>
                  </div>
      
                  
      
            </div>
            <div  @click="onStylePrimarySmallFalseDaClick">
                              <router-link  to="/services">
                              <b class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-lg rounded-lg text-sm px-10 py-5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">View Services</b>
                              </router-link>
            </div>  
            
      </div>
      <div id="project">
            <div>
                  <p class="mb-3 text-left rtl:text-right text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

                  <img class="h-auto max-w-lg rounded-lg" src="../assets/se-dummy-images/project-1.png" alt="image description">



            </div>
            <div  @click="onStylePrimarySmallFalseDaClick">
                                          <router-link  to="/services">
                                          <b class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-lg rounded-lg text-sm px-10 py-5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">View Project Gallery</b>
                                          </router-link>
            </div> 

      </div>

</div>            
</template>