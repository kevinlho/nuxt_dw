<script setup lang="ts">
const services = [
  {
    id: '001',
    title: 'Office Network',
    icon: '',
    desc: 'Setup, refresh and migration of Office IT equipments'
  },
  {
    id: '002',
    title: 'Virtualization',
    icon: '',
    desc: 'Setup, refresh and migration on Virtualization platforms'
  },
  {
    id: '003',
    title: 'Storage',
    icon: '',
    desc: 'Setup, refresh and migration on Entreprise Storage'
  },
  {
    id: '004',
    title: 'Cloud',
    icon: '',
    desc: 'Setup, refresh and migration to cloud services'
  },
  {
    id: '005',
    title: 'Enterprise Application',
    icon: '',
    desc: 'Ingress/Egress of Enterprise Applications'
  },
  {
    id: '006',
    title: 'Application Development',
    icon: '',
    desc: 'Mobile Application Development'
  },
  {
    id: '007',
    title: 'Enterprise Application',
    icon: '',
    desc: 'Ingress/Egress of Enterprise Applications'
  },
  {
    id: '008',
    title: 'Application Development',
    icon: '',
    desc: 'Mobile Application Development'
  }
]
</script>

<template>
  <section class="bg-gray-50 py-16">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Header -->
      <div class="mb-10">
        <h2 class="text-3xl font-semibold text-gray-900">
          IT Services
        </h2>
        <p class="mt-2 text-gray-600">
          Supercharge your efficiency and productivity with the help of our services
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="rounded-2xl border border-gray-300 p-8 flex flex-col"
        >
          <div class="flex items-center gap-3 mb-6">
            <img
              :src="service.icon || '/image/icon/ic_logo.png'"
              :alt="service.title"
              class="w-10 h-10"
            >
            <h3 class="text-xl font-semibold text-gray-900">
              {{ service.title }}
            </h3>
          </div>

          <p class="text-gray-700 leading-relaxed flex-1">
            {{ truncateString(service.desc, 100) }}
          </p>

          <div class="mt-8 flex items-center gap-6">
            <button
              class="rounded-full border-2 border-black px-6 py-2 text-black font-semibold
                     hover:bg-black hover:text-white transition"
            >
              Try now
            </button>

            <NuxtLink
              to="#"
              class="text-blue-600 font-semibold hover:underline"
            >
              Learn more →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
