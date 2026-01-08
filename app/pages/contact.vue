<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
</script>

<template>
  <div>
    <!-- HEADER -->
    <AppHeader />

    <!-- HERO IMAGE (40vh = 40% of viewport height) -->
    <section
class="relative w-full overflow-hidden"
style="height: 40vh; min-height: 300px; max-height: 500px;">
      <img
        src="/image/background/bg_landing02.jpg"
        alt="Hero"
        class="w-full h-full object-cover"
        style="display: block;"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="absolute inset-0 flex items-center justify-center z-10">
        <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
          Mobile Development
        </h1>
      </div>
    </section>

    <!-- CONTENT (60vh) -->
    <section class="bg-white flex" style="min-height: 60vh;">
      <div class="max-w-5xl mx-auto px-6 py-16">
        <h2 class="text-2xl md:text-3xl font-normal text-center mb-12 text-gray-800 leading-relaxed">
          This is the content!
        </h2>

        <p class="text-center text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <p class="text-center text-gray-800 text-base md:text-lg font-medium">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </section>

    <!-- FOOTER -->
    <AppFooter />
  </div>
</template>