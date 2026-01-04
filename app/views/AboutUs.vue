<script setup lang="ts"></script>

<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- LEFT CONTENT -->
        <div>
          <h2 class="text-4xl font-light tracking-wide text-gray-900">
            ABOUT US
          </h2>

          <p class="mt-6 text-blue-600 font-semibold uppercase leading-relaxed">
            Data Connect Technologies Pte Ltd is Singapore’s leading
            information and communication technology provider.
          </p>

          <p class="mt-6 text-gray-600 leading-relaxed">
            Our excellent services and full-fledged ICT solutions are relied
            upon by organizations around the region, optimizing the efficiency
            of their ICT operations, and freeing them to focus on their core
            businesses.
          </p>

          <p class="mt-4 text-gray-600 leading-relaxed">
            Our growing clientele spans from companies in the financial
            services, hospitality, manufacturing, logistic distribution,
            maritime, telecommunications, to education and other industries.
            We believe in joint assessments with our clients to derive a better
            solution in achieving the best results possible.
          </p>

          <UButton class="mt-8" color="primary" size="lg" trailing-icon="i-heroicons-arrow-right">
            Read More
          </UButton>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-2xl">
            <img src="/image/background/bg_landing.jpg" alt="About Us" class="w-full h-130 object-cover" />
          </div>

          <!-- OVERLAY CARD -->
          <div class="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-85
                   rounded-2xl bg-linear-to-br from-[#020617] to-[#020617]/90
                   p-8 text-white shadow-xl">
            <p class="text-lg">
              With a span of
              <span class="block text-4xl font-bold mt-2">22 years</span>
              in the business since
              <span class="font-bold">year 2003</span>
            </p>

            <!-- subtle circuit lines -->
            <div class="absolute inset-0 rounded-2xl opacity-20
                     bg-[linear-gradient(90deg,rgba(59,130,246,.4)_1px,transparent_1px)]
                     bg-size-[24px_24px]" />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 mt-32">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="flex flex-col items-center text-center rounded-2xl border border-gray-300 p-8 bg-amber-50">
          <span class="text-black text-[64px]">100+<br /></span>
          <span class="text-black text-[16px]">Countries</span>
        </div>
        <div class="flex flex-col items-center text-center rounded-2xl border border-gray-300 p-8 bg-blue-50">
          <span class="text-black text-[64px]">20,000+<br /></span>
          <span class="text-black text-[16px]">Users</span>
        </div>
        <div class="flex flex-col items-center text-center rounded-2xl border border-gray-300 p-8 bg-green-50">
          <span class="text-black text-[64px]">24 × 7<br /></span>
          <span class="text-black text-[16px]">Security Operation Center</span>
        </div>
      </div>
    </div>
  </section>
</template>
