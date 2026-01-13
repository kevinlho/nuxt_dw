<script setup>
const props = defineProps({
  heightVh: {
    type: Number,
    default: 60 // 60vh
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section
    class="relative w-full overflow-hidden"
    :style="{ height: `${heightVh}vh` }"
  >
    <img
      src="/image/background/bg_landing.jpg"
      class="w-full h-full object-cover"
      alt="Hero background"
    >

    <div class="absolute inset-0 bg-black/20" />

    <div class="absolute inset-0 flex items-center justify-center px-4">
      <div class="flex flex-col gap-6 max-w-5xl w-full text-left">
        <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
          {{ props.title }}
        </h1>

        <h5
          v-if="props.subtitle"
          class="text-base md:text-lg leading-snug text-gray-200 max-w-md"
        >
          {{ props.subtitle }}
        </h5>
      </div>
    </div>
  </section>
</template>
