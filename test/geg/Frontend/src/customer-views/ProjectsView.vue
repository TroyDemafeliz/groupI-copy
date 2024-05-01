<template>
    <div>
      <div class="flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-geg md:text-5xl lg:text-6xl dark:text-white">Project Gallery</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 max-w-prose">
          Browse through our construction projects.
        </p>
      </div>
      <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
              <div v-for="(picture, index) in pictures" :key="index" class="relative group">
                <RouterLink to = "/gallery">
                  <img class="object-cover w-full h-full rounded-lg" :src="picture.image" alt="Descriptive Image">
                  <div class="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                      <p class="text-white text-center text-xl md:text-2xl font-extrabold font-serif">{{ picture.title }}<br><br>{{ picture.description }}</p>
                  </div>
                </RouterLink>
              </div>
          </div>
      </div>


      <div class="container mx-auto px-4">
          <div class="pt-20 pb-7">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-red-geg dark:text-white mb-4">Our Project Approach</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
              <p class="text-gray-500 dark:text-gray-400 text-justify pr-10">
                  GEG Construction adopts a meticulous and strategic approach to every project, 
                  ensuring seamless execution from start to finish. Initially, they conduct a 
                  thorough site assessment, which helps in identifying potential challenges and opportunities, 
                  followed by detailed client consultations to align project goals with realistic expectations and feasible timelines. 
                  Their commitment to sustainability is evident in the selection of materials and construction practices, emphasizing 
                  energy efficiency and minimal environmental impact. <br><br>

                  Collaboration is at the core of GEG's project management strategy, incorporating advanced technology and real-time 
                  communication tools to keep all stakeholders informed and engaged throughout the construction process. This approach
                  not only ensures adherence to timelines and budgets but also facilitates flexibility in handling unexpected changes 
                  or challenges. The result is a high-quality construction that meets client specifications and exceeds their expectations, 
                  solidifying GEG's reputation as a leader in the construction industry.
              </p>
              <img class="w-full h-auto rounded-lg" src="../assets/se-dummy-images/project-5 (school).jpeg" alt="image description">
          </div>
      </div>
    </div>
</template>
<script>
import image1 from '../assets/se-dummy-images/project-4.jpeg'
export default {
  data() {
    return {
      pictures: [
        {
          title: "USTP Mandaluyong",
          description: "National - 800 sq. m",
          image: image1
        },
        {
          title: "NSI Building",
          description: "Government - 1000 sq. m",
          image: image1
        },
        {
          title: "XUU Puerto Princesa",
          description: "Education - 500 sq. m",
          image: image1
        },
        {
          title: "LICEU Batangas",
          description: "Industry - 350 sq. m",
          image: image1
        },
      ]
    };
  }
}
</script>