<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Hero from '~/components/Hero.vue'

const sections = [
  { id: 'email', label: 'Email' },
  { id: 'whatsapp', label: 'Whatsapp' }
]

const handleNavClick = (sectionId: string, event: Event) => {
  event.preventDefault()

  window.dispatchEvent(new CustomEvent('open-accordion', { detail: sectionId }))

  setTimeout(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 150)
}

// ===== EMAIL FORM STATE =====
const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: ''
})

const submitEmail = () => {
  const to = 'sales2@designerworks.com.sg'
  const subject = encodeURIComponent('Form Inquiry')

  const body = encodeURIComponent(`
Full Name: ${form.value.name}
Email: ${form.value.email}
Company: ${form.value.company}
Phone: ${form.value.phone}

Message:
${form.value.message}
  `)

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
}

const whatsappDetails = [
  {
    name: 'Designerworks',
    title: 'IT Consultant',
    phone: '+6598716988'
  },
  {
    name: 'Ms. Tiffany',
    title: 'Business Development Representative Indonesia',
    phone: '+6285782787878'
  },
  {
    name: 'Mr. Chin Kai',
    title: 'Business Development Executive',
    phone: '+6598716988'
  }
]
</script>

<template>
  <NuxtLayout>
    <AppHeader />

    <Hero
      :height-vh="60"
      title="Contact Us"
    />

    <section class="w-full bg-gray-50 px-4">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- LEFT NAV -->
          <nav class="hidden lg:block w-[280px] sticky top-[120px] self-start">
            <a
              v-for="item in sections"
              :key="item.id"
              :href="`#${item.id}`"
              class="block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4 py-4 mb-3 rounded-md transition"
              @click="handleNavClick(item.id, $event)"
            >
              {{ item.label }}
            </a>
          </nav>

          <!-- MAIN CONTENT -->
          <main class="flex-1">
            <!-- EMAIL -->
            <Accordion
              id="email"
              title="E-mail"
              :default-open="false"
            >
              <form
                class="space-y-5 sm:space-y-6 text-black"
                @submit.prevent="submitEmail"
              >
                <!-- NAME + EMAIL -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Full Name"
                    class="w-full px-4 sm:px-5 py-3 rounded-full border border-black outline-none"
                    required
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Company Email"
                    class="w-full px-4 sm:px-5 py-3 rounded-full border border-black outline-none"
                    required
                  >
                </div>

                <!-- COMPANY + PHONE -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Company Name"
                    class="w-full px-4 sm:px-5 py-3 rounded-full border border-black outline-none"
                  >
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="Phone"
                    class="w-full px-4 sm:px-5 py-3 rounded-full border border-black outline-none"
                  >
                </div>

                <!-- MESSAGE -->
                <textarea
                  v-model="form.message"
                  rows="3"
                  placeholder="Message"
                  class="w-full px-4 sm:px-5 py-4 rounded-2xl border border-black outline-none resize-none"
                  required
                />

                <!-- SUBMIT -->
                <div class="flex justify-end pt-2">
                  <button
                    type="submit"
                    class="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full
                           border border-black text-black
                           hover:bg-black hover:text-white transition"
                  >
                    Submit →
                  </button>
                </div>
              </form>
            </Accordion>

            <!-- WHATSAPP -->
            <Accordion
              id="whatsapp"
              title="Whatsapp"
              :default-open="false"
            >
              <section
                v-for="(item, index) in whatsappDetails"
                :key="index"
                class="border border-gray-200 rounded-2xl bg-blue-50 mb-4"
              >
                <div class="flex flex-col sm:flex-row items-center gap-6 p-6">
                  <div class="flex-1 flex items-center">
                    <img
                      src="/image/icon/ic_logo.png"
                      class="w-24 h-24 rounded-full object-cover border"
                    >
                    <div class="pl-5">
                      <h3 class="text-xl font-semibold">
                        {{ item.name }}
                      </h3>
                      <p class="text-sm text-gray-600">
                        {{ item.title }}
                      </p>
                    </div>
                  </div>

                  <a
                    :href="`https://wa.me/${item.phone.replace('+', '')}`"
                    target="_blank"
                    class="w-full sm:w-auto rounded-full border-2 border-black px-6 py-2
               font-semibold text-center
               hover:bg-black hover:text-white transition"
                  >
                    Consult Now
                  </a>
                </div>
              </section>
            </Accordion>
          </main>
        </div>
      </div>
    </section>

    <AppFooter />
  </NuxtLayout>
</template>
