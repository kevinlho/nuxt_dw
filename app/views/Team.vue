<script setup lang="ts">
import { ref, computed } from 'vue'

interface TeamMember {
  name: string
  role: string
  image: string
  email: string
}

type TeamType = 'it' | 'edu'

/* =========================
   Members Data
========================= */

const it_members: TeamMember[] = [
  {
    name: 'Paul',
    role: 'Founder & CEO',
    image: '/image/services/it/paul.jpg',
    email: 'paul@designerworks.com.sg'
  },
  {
    name: 'Yew Kean',
    role: 'Business Development Director',
    image: '/image/services/it/yew_kean.jpeg',
    email: 'yk@designerworks.com.sg'
  },
  {
    name: 'Tan Hua Koon',
    role: 'DevOps Lead',
    image: '/image/services/it/tan_hua_koon.jpeg',
    email: 'huakoon@designerworks.com.sg'
  }
]

const edu_members: TeamMember[] = [
  {
    name: 'Tiffany',
    role: 'Business Development Representative',
    image: '/image/services/ntu/tiffany.jpg',
    email: 'NTU.GIC@designerworks.com'
  }
]

/* =========================
   Selected Team State
========================= */

const selectedTeam = ref<TeamType>('it')

const members = computed(() => {
  switch (selectedTeam.value) {
    case 'edu':
      return edu_members
    case 'it':
    default:
      return it_members
  }
})
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Title -->
      <p class="text-center text-2xl tracking-widest text-black font-semibold mb-6">
        OUR TEAM
      </p>

      <!-- Buttons -->
      <div class="flex justify-center gap-4 mb-10">
        <button
          :class="[
            'px-6 py-2 text-xs rounded-full font-semibold transition',
            selectedTeam === 'it'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
          @click="selectedTeam = 'it'"
        >
          IT TEAM
        </button>

        <button
          :class="[
            'px-6 py-2 text-xs rounded-full font-semibold transition',
            selectedTeam === 'edu'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
          @click="selectedTeam = 'edu'"
        >
          EDU TEAM
        </button>
      </div>

      <!-- GRID -->
      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
