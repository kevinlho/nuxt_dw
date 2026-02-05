<script setup lang="ts">
import { computed } from 'vue'

type PartnerType = 'it' | 'edu'

const props = defineProps<{
  type: PartnerType
}>()

/* =========================
   Partner Lists
========================= */

const it_items = [
  '/image/partners/aws.png',
  '/image/partners/azure.png',
  '/image/partners/fortinet.png',
  '/image/partners/hp.png',
  '/image/partners/hpe.png',
  '/image/partners/lenovo.png',
  '/image/partners/microsoft.png',
  '/image/partners/oneidentity.png',
  '/image/partners/synology.png',
  '/image/partners/toff.png'
]

const edu_items = [
  '/image/partners/edu_ntu.webp',
  '/image/partners/edu_psb.png',
  '/image/partners/edu_kaplan.png'
]

/* =========================
   Switch Items Based on Prop
========================= */

const items = computed(() => {
  return props.type === 'edu' ? edu_items : it_items
})

/* =========================
   Tailwind Safe Basis Map
========================= */

const basisMap: Record<number, string> = {
  1: 'lg:basis-full',
  2: 'lg:basis-1/2',
  3: 'lg:basis-1/3',
  4: 'lg:basis-1/4'
}

/* =========================
   Dynamic Carousel UI
========================= */

const carouselUi = computed(() => {
  const length = items.value.length

  const lgBasis
    = length < 5
      ? basisMap[length] ?? 'lg:basis-1/5'
      : 'lg:basis-1/5'

  return {
    item: `basis-1/3 sm:basis-1/4 ${lgBasis}`,
    prev: 'sm:start-8',
    next: 'sm:end-8',
    container: 'ms-0'
  }
})

/* =========================
   Optional UX Improvements
========================= */

const shouldLoop = computed(() => items.value.length > 1)
const shouldAutoplay = computed(() => items.value.length > 1)
</script>

<template>
  <section class="w-full bg-white py-14">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Title -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2000,
            ease: 'easeOut'
          }
        }"
        class="text-center text-2xl tracking-widest text-blue-500 font-semibold mb-10"
      >
        OUR PARTNERS
      </p>

      <!-- Carousel -->
      <UCarousel
        v-slot="{ item }"
        :loop="shouldLoop"
        :autoplay="shouldAutoplay ? { delay: 2000 } : false"
        wheel-gestures
        :prev="{ variant: 'solid' }"
        :next="{ variant: 'solid' }"
        :items="items"
        :ui="carouselUi"
      >
        <div class="flex items-center justify-center h-full text-center">
          <img
            :src="item"
            width="300"
            height="300"
            class="object-contain"
            loading="lazy"
          >
        </div>
      </UCarousel>
    </div>
  </section>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css";
</style>
