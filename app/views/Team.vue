<script setup lang="ts">
interface TeamMember {
  name: string
  role: string
  image: string
  email: string
}

const members: TeamMember[] = [
  {
    name: 'Paul',
    role: 'Business Development Director',
    image: '/image/services/it/paul.jpeg',
    email: 'sophie@company.com'
  },
  {
    name: 'Yew Kean',
    role: 'Business Development Director',
    image: '/image/services/it/yew_kean.jpeg',
    email: 'emmy@company.com'
  },
  {
    name: 'Tan Hua Koon',
    role: 'DevOps Lead',
    image: '/image/services/it/tan_hua_koon.jpeg',
    email: 'orlando@company.com'
  }
]
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <p class="text-center text-2xl tracking-widest text-black font-semibold mb-10">
        OUR TEAM
      </p>

      <!-- GRID -->
      <div class="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <div
          v-for="member in members"
          :key="member.name"
          class="relative group"
        >
          <!-- Square Card -->
          <div
            class="relative w-full aspect-square overflow-hidden rounded-3xl bg-neutral-100 shadow-sm hover:shadow-xl transition"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="absolute inset-0 w-full h-full object-cover transition group-hover:scale-105"
            >
          </div>

          <!-- Floating Label -->
          <div class="absolute left-1/2 -translate-x-1/2 bottom-3 w-[85%]">
            <div class="rounded-xl px-4 py-3 text-center shadow-md border transition bg-white/90">
              <p class="font-semibold text-black">
                {{ member.name }}
              </p>

              <p class="text-sm text-gray-800">
                {{ member.role }}
              </p>
              <p class="text-xs text-gray-600">
                {{ member.email }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
