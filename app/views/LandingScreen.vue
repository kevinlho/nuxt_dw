<script setup lang="ts">

</script>

<template>
  <section class="relative w-screen h-screen overflow-hidden">
    <div
      class="absolute inset-0 bg-black/25 z-10"
    />

    <!-- FULL HEIGHT HERO WITH NuxtImg BACKGROUND -->
    <div class="relative w-full h-full flex items-center justify-center">
      <!-- Background Image -->
      <img
        src="/image/background/bg_landing02.jpg"
        class="absolute inset-0 w-full h-full object-cover"
      >

      <!-- CONTAINER -->
      <div class="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12">
        <!-- ROW -->
        <div class="grid grid-cols-12 h-full items-center">
          <!-- LEFT COLUMN (TEXT) -->
          <div class="col-span-12 md:col-span-7 lg:col-span-5">
            <!-- ROW 1: HEADLINE -->
            <div class="mb-8">
              <h1 class="text-white text-3xl md:text-5xl font-semibold leading-tight">
                Your Trusted <br>
                One-Stop Technology <br>
                Partner
              </h1>
            </div>

            <!-- ROW 2: CTA -->
            <div class="pb-5">
              <NuxtLink
                to="#section-itservices"
                class="inline-flex items-center justify-between bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-sm font-medium text-white w-50"
              >
                <span>IT Services</span>
                <i class="bi bi-arrow-right" />
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="#section-educationservices"
                class="inline-flex items-center justify-between bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-sm font-medium text-white w-50"
              >
                <span>Education</span>
                <i class="bi bi-arrow-right" />
              </NuxtLink>
            </div>
          </div>

          <!-- RIGHT COLUMN (EMPTY / FUTURE CONTENT) -->
          <div class="hidden md:block md:col-span-5 lg:col-span-6" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css";
</style>
