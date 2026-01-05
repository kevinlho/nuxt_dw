<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'image/icon/ic_logo.png',
  'https://picsum.photos/640/640?random=3',
  'image/icon/ic_logo.png',
  'https://picsum.photos/640/640?random=5',
  'image/icon/ic_logo.png'
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
          item: 'basis-1/5 ps-0',
          prev: 'sm:start-8',
          next: 'sm:end-8',
          container: 'ms-0'
        }"
      >
        <div class="flex items-center justify-center h-full text-center">
          <img
            :src="item"
            width="150"
            height="150"
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
