<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Hero from '~/components/Hero.vue'

const sections = [
  { id: 'email', label: 'Email' },
  { id: 'whatsapp', label: 'Whatsapp' }
]

const handleNavClick = (sectionId: string, event: Event) => {
  event.preventDefault()

  // Dispatch custom event to open the accordion
  window.dispatchEvent(new CustomEvent('open-accordion', { detail: sectionId }))

  // Wait for accordion animation to start, then scroll
  setTimeout(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 150)
}
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
          <!-- LEFT NAV (DESKTOP ONLY) -->
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

          <main class="flex-1">
            <Accordion
              id="email"
              title="E-mail"
              :default-open="false"
            >
              <!-- FORM -->
              <div class="w-full">
                <form class="space-y-5 sm:space-y-6 text-black">
                  <!-- NAME + EMAIL -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      class="w-full px-4 sm:px-5 py-3 rounded-full border border-black outline-none"
                    >
                    <input
                      type="email"
                      placeholder="Company Email"
                      class="w-full px-4 sm:px-5 py-3 rounded-full border border-black outline-none"
                    >
                  </div>

                  <!-- COMPANY + PHONE -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <input
                      type="text"
                      placeholder="Company Name"
                      class="w-full px-4 sm:px-5 py-3 rounded-full border border-black outline-none"
                    >
                    <input
                      type="tel"
                      placeholder="Phone"
                      class="w-full px-4 sm:px-5 py-3 rounded-full border border-black outline-none"
                    >
                  </div>

                  <!-- MESSAGE -->
                  <textarea
                    rows="3"
                    placeholder="Message"
                    class="w-full px-4 sm:px-5 py-4 rounded-2xl border border-black outline-none resize-none"
                  />

                  <!-- SUBMIT -->
                  <div class="flex justify-end pt-2">
                    <button
                      type="submit"
                      class="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
                    >
                      Submit
                      <span>→</span>
                    </button>
                  </div>
                </form>
              </div>
            </Accordion>
            <Accordion
              id="whatsapp"
              title="Whatsapp"
              :default-open="false"
            >
              <section class="border border-gray-200 rounded-2xl overflow-hidden bg-blue-50">
                <div class="flex flex-col sm:flex-row items-center gap-6 p-6">
                  <!-- LEFT CONTENT -->
                  <div class="flex-1 flex flex-row items-center">
                    <img
                      src="/image/services/ntu/kim_yap_hui.jpg"
                      alt="Assoc Prof Kwoh Chee Keong"
                      class="w-24 h-24 rounded-full object-cover border border-gray-300"
                    >
                    <div class="flex flex-col justify-center space-y-2 pl-5">
                      <h3 class="text-xl font-semibold text-gray-900">
                        Mr. Designer Works
                      </h3>
                      <p class="text-sm text-gray-600">
                        NTU Program Consultant
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center w-full sm:w-auto">
                    <button
                      class="w-full sm:w-auto rounded-full border-2 border-black px-6 py-2
           text-black font-semibold hover:bg-black hover:text-white transition"
                    >
                      Consult Now
                    </button>
                  </div>
                </div>
              </section>
              <section class="border border-gray-200 rounded-2xl overflow-hidden bg-blue-50">
                <div class="flex flex-col sm:flex-row items-center gap-6 p-6">
                  <!-- LEFT CONTENT -->
                  <div class="flex-1 flex flex-row items-center">
                    <img
                      src="/image/services/ntu/kim_yap_hui.jpg"
                      alt="Assoc Prof Kwoh Chee Keong"
                      class="w-24 h-24 rounded-full object-cover border border-gray-300"
                    >
                    <div class="flex flex-col justify-center space-y-2 pl-5">
                      <h3 class="text-xl font-semibold text-gray-900">
                        Ms. Designer Works
                      </h3>
                      <p class="text-sm text-gray-600">
                        IT Consultant
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center w-full sm:w-auto">
                    <button
                      class="w-full sm:w-auto rounded-full border-2 border-black px-6 py-2
           text-black font-semibold hover:bg-black hover:text-white transition"
                    >
                      Consult Now
                    </button>
                  </div>
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
