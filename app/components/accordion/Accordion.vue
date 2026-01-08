<!-- components/accordion/Accordion.vue -->
<template>
  <section :id="id" class="mb-6 border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-32">
    <button
      @click="toggleAccordion"
      class="w-full bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-5 text-2xl md:text-3xl font-semibold text-gray-900 text-left flex items-center justify-between hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
      :aria-expanded="isOpen"
    >
      <span>{{ title }}</span>
      <svg
        :class="isOpen ? 'rotate-180 text-blue-600' : 'rotate-0 text-gray-600'"
        class="w-7 h-7 transition-all duration-300 ease-in-out"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition
      name="accordion"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div v-show="isOpen" class="overflow-hidden">
        <div class="p-6 md:p-8 space-y-5 text-gray-700 leading-relaxed text-base">
          <slot></slot>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  defaultOpen: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    required: true
  }
})

const isOpen = ref(props.defaultOpen)

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}

const open = () => {
  isOpen.value = true
}

// Expose methods to parent
defineExpose({
  open
})

// Watch for hash changes in URL
onMounted(() => {
  // Check if this accordion should be opened based on URL hash
  const hash = window.location.hash.slice(1)
  if (hash === props.id) {
    isOpen.value = true
  }

  // Listen for custom event to open accordion
  const handleOpenAccordion = (event: CustomEvent) => {
    if (event.detail === props.id) {
      isOpen.value = true
    }
  }

  window.addEventListener('open-accordion', handleOpenAccordion as EventListener)
  
  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('open-accordion', handleOpenAccordion as EventListener)
  })
})

const enter = (element: HTMLElement) => {
  const width = getComputedStyle(element).width
  element.style.width = width
  element.style.position = 'absolute'
  element.style.visibility = 'hidden'
  element.style.height = 'auto'
  const height = getComputedStyle(element).height
  element.style.width = ''
  element.style.position = ''
  element.style.visibility = ''
  element.style.height = '0'
  getComputedStyle(element).height
  requestAnimationFrame(() => {
    element.style.height = height
  })
}

const afterEnter = (element: HTMLElement) => {
  element.style.height = 'auto'
}

const leave = (element: HTMLElement) => {
  const height = getComputedStyle(element).height
  element.style.height = height
  getComputedStyle(element).height
  requestAnimationFrame(() => {
    element.style.height = '0'
  })
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
}

.scroll-mt-32 {
  scroll-margin-top: 8rem;
}
</style>