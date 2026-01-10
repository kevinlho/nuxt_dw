<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'

const items = [
  {
    title: 'Acquire New Business',
    description:
      'Launch mobile and web apps that meet your customers where they are — on their phones and online.'
  },
  {
    title: 'Improve Efficiency',
    description:
      'Automate internal workflows and streamline processes with custom-built digital tools.'
  },
  {
    title: 'Boost Customer Engagement',
    description:
      'Use gamification, loyalty platforms, or interactive interfaces to encourage repeat use and higher lifetime value.'
  },
  {
    title: 'Keep Growing',
    description:
      'Evolve with your users. Whether it’s scaling a platform or adding new features, we support your growth beyond the launch.'
  }
]
</script>

<template>
  <NuxtLayout>
    <AppHeader />

    <!-- HERO (60%) -->
    <section class="relative w-full h-[60vh] overflow-hidden">
      <img
        src="/image/background/bg_landing.jpg"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-black/20" />

      <div class="absolute inset-0 flex items-center justify-center px-4">
        <div class="flex flex-col gap-6 max-w-5xl w-full text-left">
          <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
            Web and Mobile Application Development
          </h1>

          <h5 class="text-base md:text-lg leading-snug text-gray-200 max-w-md">
            TURN IDEAS INTO POWERFUL DIGITAL EXPERIENCES CUSTOM APPLICATIONS THAT DRIVE REAL-WORLD
          </h5>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="bg-white">
      <div>
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- MAIN CONTENT -->
          <main class="flex-1">
            <section class="w-full h-[40vh] flex flex-col items-center justify-center bg-gray-50 px-4">
              <p class="my-3 text-center text-black max-w-3xl">
                We design and build mobile apps, web platforms, and interactive experiences that help you acquire new
                business, improve internal efficiency, and keep your customers coming back.
              </p>

              <button
                class="bg-lime-200 text-gray-900 font-semibold rounded px-5 py-2 hover:bg-lime-300 transition"
                @click="redirectToWhatsapp"
              >
                Talk to us
              </button>
            </section>

            <section class="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
              <h3 class="text-center text-4xl my-5 text-black">
                We help you
              </h3>
              <div class="space-y-10">
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  class="flex"
                  :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
                >
                  <div
                    class="bg-white rounded-2xl p-8 w-full md:w-4/5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 class="text-2xl font-semibold text-blue-600 mb-3">
                      {{ index + 1 }}. {{ item.title }}
                    </h3>

                    <p class="text-gray-700 leading-relaxed max-w-3xl">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section class="flex flex-col items-center pt-10 pb-20 bg-[url('/image/background/bg_landing.jpg')]">
              <h3 class="text-4xl py-10 text-white">
                What We Build
              </h3>
              <ul class="list-disc list-inside space-y-2 text-white">
                <li>Mobile Application (iOS / Android)</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Interactive Experiences &amp; Virtual Environments</li>
                <li>Gamified Platforms</li>
                <li>Custom Dashboards &amp; Portals</li>
                <li class="font-semibold text-white">
                  All with modern UX/UI design at the core
                </li>
              </ul>
            </section>

            <section class="flex flex-col max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
              <h3 class="text-4xl py-10 text-black text-center">
                Our Development Approach
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col min-h-62.5">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900">
                      Requirements
                    </h3>
                  </div>
                  <p class="text-gray-700 leading-relaxed flex-1">
                    We start by understanding your business and user needs.
                  </p>
                  <ul class="list-disc pl-6">
                    <li>Stakeholder workshops</li>
                    <li>Key staff interviews</li>
                    <li>Functional and technical recommendations</li>
                  </ul>
                </section>
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900">
                      Design
                    </h3>
                  </div>
                  <p class="text-gray-700 leading-relaxed flex-1">
                    We shape the user journey with thoughtful, modern design.
                  </p>
                  <ul class="list-disc pl-6 ">
                    <li>Information architecture</li>
                    <li>Design direction &amp; branding</li>
                    <li>UX/UI and interface wireframes</li>
                    <li>Integration points</li>
                  </ul>
                </section>
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900">
                      Development
                    </h3>
                  </div>
                  <p class="text-gray-700 leading-relaxed flex-1">
                    With the right tech stack, we build apps that are scalable and secure.
                  </p>
                  <ul class="list-disc pl-6 ">
                    <li>Native or hybrid development</li>
                    <li>Dev environment setup</li>
                    <li>Agile development cycles</li>
                    <li>Clean, maintainable code</li>
                  </ul>
                </section>
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900">
                      Testing
                    </h3>
                  </div>
                  <p class="text-gray-700 leading-relaxed flex-1">
                    Before launch, we make sure everything works as it should.
                  </p>
                  <ul class="list-disc pl-6 ">
                    <li>System integration testing</li>
                    <li>Security and penetration testing</li>
                    <li>User acceptance testing</li>
                    <li>Load and cross-device testing</li>
                  </ul>
                </section>
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900">
                      Deployment
                    </h3>
                  </div>
                  <p class="text-gray-700 leading-relaxed flex-1">
                    We handle the technical handover and launch smoothly.
                  </p>
                  <ul class="list-disc pl-6 ">
                    <li>Production environment setup</li>
                    <li>Content and data migration</li>
                    <li>App store submissions (iOS &amp; Android)</li>
                    <li>Stabilization and launch</li>
                  </ul>
                </section>
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900">
                      Support
                    </h3>
                  </div>
                  <p class="text-gray-700 leading-relaxed flex-1">
                    Post-launch, we’re still with you.
                  </p>
                  <ul class="list-disc pl-6">
                    <li>Ongoing maintenance</li>
                    <li>Enhancement support</li>
                    <li>Bug fixes and updates</li>
                  </ul>
                </section>
              </div>
            </section>

            <section class="flex bg-gray-50">
              <div class="flex flex-col max-w-7xl mx-auto py-12 md:py-16">
                <h3 class="text-4xl py-10 text-black text-center">
                  Government Support Eligible for EDG Grant
                </h3>
                <!-- Intro text -->
                <p class="text-gray-800 leading-relaxed mb-4">
                  If you're a Singapore-based business looking to build a mobile app, web platform,
                  or improve digital processes —
                </p>

                <p class="text-gray-800 leading-relaxed mb-10">
                  you may be eligible for up to
                  <span class="text-4xl font-bold text-blue-500 align-middle mx-1">80%</span>
                  <span class="text-blue-500 font-semibold">
                    subsidy under the Enterprise Development Grant (EDG).
                  </span>
                </p>

                <!-- Supporting text -->
                <p class="text-gray-800 mb-6">
                  The EDG Grant supports projects that help local companies:
                </p>

                <!-- Bullet list -->
                <ul class="list-disc pl-6 text-gray-800 mb-10">
                  <li>Digitalise and upgrade core capabilities</li>
                  <li>Innovate through app and platform development</li>
                  <li>Expand access to new markets</li>
                </ul>

                <!-- Paragraph -->
                <p class="text-gray-800 leading-relaxed mb-10">
                  Our application development projects are
                  <span class="text-blue-500 font-semibold">EDG-eligible</span>, and we can guide you
                  through the process — from proposal to documentation support.
                </p>

                <ul class="text-gray-800 mb-10">
                  <li class="flex items-start gap-3">
                    <span class="text-green-500 text-xl">✅</span>
                    <span>
                      Administered by
                      <span class="text-blue-500 font-semibold">Enterprise Singapore</span>
                    </span>
                  </li>

                  <li class="flex items-start gap-3">
                    <span class="text-green-500 text-xl">✅</span>
                    <span>
                      Covers a wide range of app and digital platform development initiatives
                    </span>
                  </li>

                  <li class="flex items-start gap-3">
                    <span class="text-green-500 text-xl">✅</span>
                    <span>
                      A valuable option for SMEs looking to scale without heavy upfront cost
                    </span>
                  </li>
                </ul>

                <p class="text-gray-800">
                  Stay updated with the latest eligibility criteria
                  <a
                    href="https://www.enterprisesg.gov.sg/financial-support/enterprise-development-grant"
                    class="text-blue-500 italic hover:underline"
                  >
                    here
                  </a>.
                </p>
              </div>
            </section>

            <section class="flex flex-col max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
              <h3 class="text-4xl py-10 text-black text-center">
                Our Projects
              </h3>
              <section class="flex flex-row">
                <!-- LEFT -->
                <div class="flex-1">
                  <section class="p-8 flex flex-col min-h-[250px]">
                    <div class="flex items-center gap-3 mb-6">
                      <h2 class="text-xl font-semibold text-gray-900">
                        Automotive Lifestyle & Loyalty App<br>
                        (for EV/Car Vendors)
                      </h2>
                    </div>

                    <p class="text-gray-700 leading-relaxed flex-1">
                      We designed a digital ecosystem that extends the customer journey beyond the vehicle purchase.
                      With personalized content, tiered rewards, lifestyle perks, and service reminders, the app helps
                      car vendors build long-term brand loyalty and increase repeat engagement.
                    </p>
                  </section>
                </div>

                <!-- RIGHT -->
                <div class="flex-2 p-8">
                  <NuxtImg
                    src="/image/background/bg_landing.jpg"
                    alt="Project image"
                    class="w-full h-full object-cover"
                  />
                </div>
              </section>

              <section class="flex flex-row">
                <!-- LEFT -->
                <div class="flex-2 p-8">
                  <NuxtImg
                    src="/image/background/bg_landing.jpg"
                    alt="Project image"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="flex-1">
                  <section class="p-8 flex flex-col min-h-[250px]">
                    <div class="flex items-center gap-3 mb-6">
                      <h2 class="text-xl font-semibold text-gray-900">
                        Broadband & eSIM Launch App <br>(for Telco)
                      </h2>
                    </div>

                    <p class="text-gray-700 leading-relaxed flex-1">
                      We designed a digital ecosystem that extends the customer journey beyond the vehicle purchase.
                      With personalized content, tiered rewards, lifestyle perks, and service reminders, the app helps
                      car vendors build long-term brand loyalty and increase repeat engagement.
                    </p>
                  </section>
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
