<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'

/* =========================
   Images for Event Carousel
========================= */
const photo_event = [
  '/image/services/ntu/pastevents/pastevents_01.jpg',
  '/image/services/ntu/pastevents/pastevents_02.jpg',
  '/image/services/ntu/pastevents/pastevents_03.jpg',
  '/image/services/ntu/pastevents/pastevents_04.jpg',
  '/image/services/ntu/pastevents/pastevents_05.jpg',
  '/image/services/ntu/pastevents/pastevents_06.jpg',
  '/image/services/ntu/pastevents/pastevents_07.jpg',
  '/image/services/ntu/pastevents/pastevents_08.jpg',
  '/image/services/ntu/pastevents/pastevents_09.jpg',
  '/image/services/ntu/pastevents/pastevents_10.jpg',
  '/image/services/ntu/pastevents/pastevents_11.jpg',
  '/image/services/ntu/pastevents/pastevents_12.jpg',
  '/image/services/ntu/pastevents/pastevents_13.jpg',
  '/image/services/ntu/pastevents/pastevents_14.jpg',
  '/image/services/ntu/pastevents/pastevents_15.jpg',
  '/image/services/ntu/pastevents/pastevents_16.jpg',
  '/image/services/ntu/pastevents/pastevents_17.jpg',
  '/image/services/ntu/pastevents/pastevents_18.jpg',
  '/image/services/ntu/pastevents/pastevents_19.jpg'
]

/* =========================
   Student Quotes Data
========================= */
const studentQuote = [
  {
    message: 'NTU Summer Camp was truly an unforgettable experience! I made so many wonderful friends, participated in so many fun activities, and learned how to work as a team and be independent. The instructors were so friendly and always created a fun atmosphere. Every day at NTU Camp was a new adventure and an opportunity to learn new things through the lessons that the instructors brought to the campers. I can\'t wait to come back next year!',
    author: 'Simon',
    country: 'Vietnam'
  },
  {
    message: 'This camp is very fun, I get to work with different kinds of people, meet new people, and gain a unique experience. This NTU camp also helps me in deciding which university I want to go to. Overall a very fulfilling camp.',
    author: 'Davian',
    country: 'Indonesia'
  },
  {
    message: 'Personally, I love this camp so much because its giving me very new things like new friends, new environment because i come from Thailand, so I never meet other peope from other countries. It gives me the connections that I never had in my life',
    author: 'Pan',
    country: 'Thailand'
  },
  {
    message: 'The NTU camp was quite a good and new experience I believe for my self, even for my future self and for others. I feel like i experienced the upcoming difficulties that I think could be in my life. It\'s a good camp but difficulties are high',
    author: 'Daniel',
    country: 'Russia'
  }
]

/* =========================
   Videos Data
========================= */
const videos = [
  { src: '/image/services/ntu/pastevents/video001.mp4', playing: ref(false) },
  { src: '/image/services/ntu/pastevents/video002.mp4', playing: ref(false) }
]

/* =========================
   Helper Functions
========================= */
const truncateString = (str: string, num: number) => {
  if (str.length <= num) return str
  return str.slice(0, num) + '...'
}

/* =========================
   Dynamic Carousel UI
========================= */
const carouselUi = computed(() => ({
  item: `basis-1/2`,
  prev: 'sm:start-8',
  next: 'sm:end-8',
  container: 'ms-0'
}))

const quoteUi = {
  item: 'basis-full md:basis-1/3 px-4',
  container: 'py-4'
}

const shouldLoop = computed(() => photo_event.length > 1)
const shouldAutoplay = computed(() => photo_event.length > 1)
</script>

<template>
  <NuxtLayout>
    <AppHeader />

    <section class="relative w-full h-[60vh] min-h-[300px] max-h-[500px] overflow-hidden">
      <img
        src="/image/services/ntu/ntu.jpg"
        class="w-full h-full object-cover"
        alt="NTU"
      >
      <div class="absolute inset-0 bg-black/20" />
    </section>

    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div class="flex flex-col lg:flex-row gap-12">
          <main class="w-full">
            <section class="flex flex-col bg-amber-400">
              <div class="w-full flex-1">
                <img
                  src="/image/services/ntu/pastevents/bg_banner.jpg"
                  alt="Global Summer Programme 2026"
                  class="w-full h-auto object-cover"
                >
              </div>
              <div class="w-full bg-green text-black text-center py-6 font-semibold tracking-widest italic">
                DISCOVER, CONNECT, TRANSFORM
              </div>
            </section>

            <section class="flex flex-col md:flex-row gap-8 my-10">
              <div class="flex-1 bg-amber-400 p-[10px] md:p-0">
                <div class="w-full">
                  <img
                    src="/image/services/ntu/pastevents/pastevents_01.jpg"
                    alt="Global Summer Programme 2026"
                    class="w-full h-auto object-cover"
                  >
                </div>
                <div class="w-full bg-green text-black text-center py-6 font-semibold tracking-widest italic">
                  EMBRACE CULTURES, LOCAL EXPERIENCES
                </div>
              </div>

              <div class="flex-1 bg-amber-400 p-[10px] md:p-0">
                <div class="w-full">
                  <img
                    src="/image/services/ntu/pastevents/pastevents_02.jpg"
                    alt="Global Summer Programme 2026"
                    class="w-full h-auto object-cover"
                  >
                </div>
                <div class="w-full bg-green text-black text-center py-6 font-semibold tracking-widest italic">
                  GLOBAL LEARNING, EXPAND HORIZONS
                </div>
              </div>
            </section>

            <h1 class="text-3xl md:text-4xl text-center font-semibold text-gray-900 my-6">
              NTU Global Immersion Competition Past Events
            </h1>

            <div class="overview-content space-y-4 text-gray-700 mb-12">
              <p>
                Step into the world of innovation at Nanyang Technological University (NTU), one of the world's top
                young universities.
              </p>
              <p>
                The NTU Global Immersion Competition 2025 is a prestigious international program organized by Nanyang
                Technological University (NTU), Singapore, designed to provide young students across Asia with a unique
                opportunity to experience academic life at one of the world's leading universities.
              </p>
              <p>
                Over the course of eight days, participants will engage in a wide range of academic and experiential
                activities, including interactive lectures, project-based workshops, industry visits, and AI application
                simulations.
              </p>
              <p>
                Upon successful completion, participants will receive a Certificate of Completion issued by NTU, along
                with a Letter of Commendation recognizing their academic engagement and contribution to the program.
              </p>
            </div>

            <UCarousel
              v-slot="{ item }"
              :loop="shouldLoop"
              :autoplay="shouldAutoplay ? { delay: 2000 } : false"
              wheel-gestures
              :prev="{ variant: 'solid' }"
              :next="{ variant: 'solid' }"
              :items="photo_event"
              :ui="carouselUi"
            >
              <div class="flex items-center justify-center h-full text-center">
                <img
                  :src="item"
                  width="960"
                  height="540"
                  class="object-contain"
                  loading="lazy"
                >
              </div>
            </UCarousel>

            <div class="text-2xl font-bold mt-16 mb-8 text-center text-gray-900">
              Hear New Perspectives
            </div>

            <UCarousel
              v-slot="{ item }"
              :items="studentQuote"
              :ui="quoteUi"
              arrows
            >
              <div
                class="rounded-2xl border border-gray-300 p-8 flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <p class="text-gray-700 leading-relaxed flex-1 mb-5">
                  "{{ truncateString(item.message, 150) }}"
                </p>
                <div class="text-right border-t border-gray-100 pt-4">
                  <p class="text-gray-900 font-bold leading-none">
                    {{ item.author }}
                  </p>
                  <p class="text-sm text-gray-500 mt-1">
                    {{ item.country }}
                  </p>
                </div>
              </div>
            </UCarousel>

            <!-- Videos -->
            <div
              v-for="(video, index) in videos"
              :key="index"
              class="w-full max-w-3xl mx-auto mt-16"
            >
              <!-- Thumbnail -->
              <div
                v-if="!video.playing.value"
                class="relative cursor-pointer group"
                @click="video.playing.value = true"
              >
                <img
                  src="/image/icon/ic_logo.png"
                  class="w-full rounded-lg shadow-lg"
                >
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="bg-black/60 group-hover:bg-red-600 transition-colors text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl"
                  >
                    ▶
                  </div>
                </div>
              </div>

              <!-- Video -->
              <video
                v-else
                class="w-full aspect-video rounded-lg shadow-lg"
                controls
                autoplay
              >
                <source
                  :src="video.src"
                  type="video/mp4"
                >
                Your browser does not support the video tag.
              </video>
            </div>
          </main>
        </div>
      </div>
    </section>

    <AppFooter />
  </NuxtLayout>
</template>

<style scoped>
.overview-content p {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
