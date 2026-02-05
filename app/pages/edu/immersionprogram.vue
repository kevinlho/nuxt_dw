<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Hero from '~/components/Hero.vue'
import WhatsappButton from '~/components/button/WhatsappButton.vue'
import Partners from '~/views/Partners.vue'
</script>

<template>
  <NuxtLayout>
    <AppHeader />
    <Hero
      :height-vh="60"
      image="/image/background/bg_immersionprogram.webp"
      title="Designerworks Immersion Program"
      subtitle="Transform your education with us, Experience the unexpected!"
    />

    <!-- CONTENT -->
    <section class="bg-white">
      <div>
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- MAIN CONTENT -->
          <main class="flex-1">
            <section class="w-full h-[40vh] flex flex-col items-center justify-center bg-gray-50 px-4">
              <p class="my-3 text-center text-black max-w-3xl">
                Redefine the way you learn. Join our immersive programs and customize your educational journey to match
                your passion, goals, and future career path.
              </p>

              <WhatsappButton />
            </section>

            <Partners
              id="section-partners"
              type="edu"
            />

            <section class="bg-gray-50">
              <section class="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <h3 class="text-center text-4xl my-5 text-black">
                  Our Program
                </h3>

                <h4 class="text-center my-5 text-black">
                  We are pleased to offer a Study Tour & Immersion Program designed to provide academic exposure,
                  industry
                  insights, and cultural experiences. This program is fully customizable based on your preferred:
                </h4>

                <div class="flex flex-wrap justify-center gap-6 w-full">
                  <!-- Card 1 -->
                  <section
                    class="w-full sm:w-[48%] lg:w-[30%]
           rounded-2xl border border-gray-300
           p-6 lg:p-8
           flex flex-col items-center justify-center text-center
           min-h-[220px]"
                  >
                    <NuxtImg
                      src="/image/icon/ic_immersion_travel.png"
                      width="64"
                      height="64"
                      class="mb-4"
                    />
                    <p class="text-gray-700 leading-relaxed">
                      Travel Dates
                    </p>
                  </section>

                  <!-- Card 2 -->
                  <section
                    class="w-full sm:w-[48%] lg:w-[30%]
           rounded-2xl border border-gray-300
           p-6 lg:p-8
           flex flex-col items-center justify-center text-center
           min-h-[220px]"
                  >
                    <NuxtImg
                      src="/image/icon/ic_immersion_duration.png"
                      width="64"
                      height="64"
                      class="mb-4"
                    />
                    <p class="text-gray-700 leading-relaxed">
                      Program Duration
                    </p>
                  </section>

                  <!-- Card 3 -->
                  <section
                    class="w-full sm:w-[48%] lg:w-[30%]
           rounded-2xl border border-gray-300
           p-6 lg:p-8
           flex flex-col items-center justify-center text-center
           min-h-[220px]"
                  >
                    <NuxtImg
                      src="/image/icon/ic_immersion_destination.png"
                      width="64"
                      height="64"
                      class="mb-4"
                    />
                    <p class="text-gray-700 leading-relaxed">
                      Program Destination
                    </p>
                  </section>

                  <!-- Card 4 -->
                  <section
                    class="w-full sm:w-[48%] lg:w-[30%]
           rounded-2xl border border-gray-300
           p-6 lg:p-8
           flex flex-col items-center justify-center text-center
           min-h-[220px]"
                  >
                    <NuxtImg
                      src="/image/icon/ic_immersion_university.png"
                      width="64"
                      height="64"
                      class="mb-4"
                    />
                    <p class="text-gray-700 leading-relaxed">
                      University & Company/Industry Visit
                    </p>
                  </section>

                  <!-- Card 5 -->
                  <section
                    class="w-full sm:w-[48%] lg:w-[30%]
           rounded-2xl border border-gray-300
           p-6 lg:p-8
           flex flex-col items-center justify-center text-center
           min-h-[220px]"
                  >
                    <NuxtImg
                      src="/image/icon/ic_immersion_diversity.png"
                      width="64"
                      height="64"
                      class="mb-4"
                    />
                    <p class="text-gray-700 leading-relaxed">
                      Academic & Cultural Visit
                    </p>
                  </section>
                </div>

                <div class="flex justify-center mt-12">
                  <button
                    class="bg-lime-200 text-gray-900 font-semibold rounded px-5 py-2
           hover:bg-lime-300 transition"
                    @click="redirectToWhatsappIt"
                  >
                    CONSULT NOW!
                  </button>
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>
    </section>

    <AppFooter />
  </NuxtLayout>
</template>
