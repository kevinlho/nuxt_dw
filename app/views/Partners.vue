<script setup lang="ts">
const items = [
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
            duration: 2000, // Duration in milliseconds for all properties
            ease: 'easeOut'
          }
        }"
        class="text-center text-2xl tracking-widest text-blue-500 font-semibold mb-10"
      >
        OUR PARTNERS
      </p>

      <UCarousel
        v-slot="{ item }"
        loop
        :autoplay="{ delay: 2000 }"
        wheel-gestures
        :prev="{ variant: 'solid' }"
        :next="{ variant: 'solid' }"
        :items="items"
        :ui="{
          item: 'basis-1/3 sm:basis-1/4 lg:basis-1/5',
          prev: 'sm:start-8',
          next: 'sm:end-8',
          container: 'ms-0'
        }"
      >
        <div class="flex items-center justify-center h-full text-center">
          <img
            :src="item"
            width="300"
            height="300"
            class="object-contain"
          >
        </div>
      </UCarousel>
    </div>
  </section>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css";
</style>
