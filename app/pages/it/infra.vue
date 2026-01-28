<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Hero from '~/components/Hero.vue'
</script>

<template>
  <NuxtLayout>
    <AppHeader />
    <Hero
      :height-vh="60"
      title="IT Infrastructure Solutions"
      subtitle="We design, architect, deploy and optimise secured and scalable IT Infrastructure to support your business needs."
    />

    <!-- CONTENT -->
    <section class="bg-white">
      <div>
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- MAIN CONTENT -->
          <main class="flex-1">
            <section class="w-full h-[40vh] flex flex-col items-center justify-center bg-gray-50 px-4 -mt-4">
              <p class="my-4 text-center text-black max-w-3xl">
                We design, architect, deploy, and optimise secure, scalable IT infrastructure, backed by proactive
                managed services to ensure reliability, performance, and business continuity.
              </p>
              <p class="my-4 pb-4 text-center text-black max-w-3xl">
                From on-premises environments to public cloud platforms, we deliver end-to-end infrastructure solutions
                with ongoing operational support.
              </p>
              <button
                class="bg-lime-200 text-gray-900 font-semibold rounded px-5 py-2 hover:bg-lime-300 transition"
                @click="redirectToWhatsappIt"
              >
                Talk to us
              </button>
            </section>

            <section class="flex flex-col max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 items-center">
              <h3 class="text-4xl py-10 text-black text-center">
                Our Services
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <h3 class="text-xl font-semibold text-gray-900 mb-6">
                    Network Infrastructure
                  </h3>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    Design, implementation, and ongoing management of secure enterprise networks.
                  </p>

                  <p class="pt-6 pb-3 text-black">
                    <strong>Services include:</strong>
                  </p>

                  <ul class="relative list-disc list-inside space-y-2 text-black">
                    <li>LAN and WAN design and deployment</li>
                    <li>Firewall, switch, and wireless network implementation</li>
                    <li>Network segmentation and performance optimisation</li>
                    <li>Secure remote access and VPN solutions</li>
                  </ul>

                  <p class="pt-6 pb-3 text-black">
                    <strong>Managed Services:</strong>
                  </p>

                  <ul class="relative list-disc list-inside space-y-2 text-black">
                    <li>24/7 network monitoring</li>
                    <li>Firewall and network device management</li>
                    <li>Configuration backups and change management</li>
                    <li>Incident response and troubleshooting</li>
                  </ul>
                </section>
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <h3 class="text-xl font-semibold text-gray-900 mb-6">
                    Servers & Compute
                  </h3>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    Enterprise-grade compute platforms with lifecycle and operational management.
                  </p>

                  <p class="pt-6 pb-3 text-black">
                    <strong>Services include:</strong>
                  </p>

                  <ul class="relative list-disc list-inside space-y-2 text-black">
                    <li>Virtualisation platform setup and migration</li>
                    <li>Physical server deployment and refresh</li>
                    <li>Hybrid and cloud compute integration</li>
                    <li>Workload consolidation and optimisation</li>
                  </ul>

                  <p class="pt-6 pb-3 text-black">
                    <strong>Managed Services:</strong>
                  </p>

                  <ul class="relative list-disc list-inside space-y-2 text-black">
                    <li>Server health monitoring and alerting</li>
                    <li>OS patching and updates</li>
                    <li>Performance tuning and capacity management</li>
                    <li>Backup verification and recovery support</li>
                  </ul>
                </section>
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <h3 class="text-xl font-semibold text-gray-900 mb-6">
                    Storage Services
                  </h3>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    Resilient and scalable storage solutions with continuous oversight.
                  </p>

                  <p class="pt-6 pb-3 text-black">
                    <strong>Services include:</strong>
                  </p>

                  <ul class="relative list-disc list-inside space-y-2 text-black">
                    <li>SAN, NAS, and cloud storage design and migration</li>
                    <li>Storage technology refresh and optimisation</li>
                    <li>Enterprise backup system implementation</li>
                  </ul>

                  <p class="pt-6 pb-3 text-black">
                    <strong>Managed Services:</strong>
                  </p>

                  <ul class="relative list-disc list-inside space-y-2 text-black">
                    <li>Storage performance and capacity monitoring</li>
                    <li>Backup job monitoring and reporting</li>
                    <li>Regular restore testing</li>
                    <li>Data protection policy management</li>
                  </ul>
                </section>
                <section class="rounded-2xl border border-gray-300 p-8 flex flex-col">
                  <h3 class="text-xl font-semibold text-gray-900 mb-6">
                    Public Cloud Computing
                  </h3>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    Secure, well-governed public cloud environments with ongoing optimisation.
                  </p>

                  <p class="pt-6 pb-3 text-black">
                    <strong>Services include:</strong>
                  </p>

                  <ul class="relative list-disc list-inside space-y-2 text-black">
                    <li>Public cloud architecture design</li>
                    <li>Workload migration to AWS, Azure, or equivalent platforms</li>
                    <li>Hybrid cloud connectivity</li>
                    <li>Cloud security baseline and governance</li>
                  </ul>

                  <p class="pt-6 pb-3 text-black">
                    <strong>Managed Services:</strong>
                  </p>

                  <ul class="relative list-disc list-inside space-y-2 text-black">
                    <li>Cloud resource monitoring and cost optimisation</li>
                    <li>Patch and security updates</li>
                    <li>Identity and access management (IAM) administration</li>
                    <li>Backup and disaster recovery management</li>
                  </ul>
                </section>
              </div>
            </section>

            <section class="relative flex flex-col items-center pt-10 pb-20 overflow-hidden">
              <!-- Background image -->
              <div class="absolute inset-0 bg-[url('/image/background/bg_landing.jpg')] bg-cover bg-center" />

              <!-- Dark overlay (background only) -->
              <div class="absolute inset-0 bg-black/40" />

              <!-- Content (NOT affected by overlay) -->
              <h3 class="relative text-4xl py-10 text-white">
                Managed Infrastructure Services Overview
              </h3>

              <p class="relative mb-3 text-center text-white max-w-3xl">
                We design, architect, deploy and optimise secured and scalable IT Infrastructure to support your business needs.
              </p>

              <ul class="relative list-disc list-inside space-y-2 text-white">
                <li>24/7 monitoring and alerting</li>
                <li>Preventive maintenance and patch management</li>
                <li>Incident and problem management</li>
                <li>SLA-based response times</li>
                <li>Monthly health and performance reporting</li>
              </ul>
            </section>

            <section class="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
              <h3 class="text-center text-4xl my-5 text-black">
                Why Us?
              </h3>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                <!-- Card 1 -->
                <section
                  class="rounded-2xl border border-gray-300 p-8
             flex flex-col items-center justify-center text-center
             min-h-55 w-full"
                >
                  <NuxtImg
                    src="/image/icon/ic_entity.png"
                    alt="Project image"
                    width="64"
                    height="64"
                    class="mb-4"
                  />
                  <p class="text-gray-700 leading-relaxed">
                    Single partner for design, implementation, and operations
                  </p>
                </section>

                <!-- Card 2 -->
                <section
                  class="rounded-2xl border border-gray-300 p-8
             flex flex-col items-center justify-center text-center
             min-h-55 w-full"
                >
                  <NuxtImg
                    src="/image/icon/ic_list.png"
                    alt="Project image"
                    width="64"
                    height="64"
                    class="mb-4"
                  />
                  <p class="text-gray-700 leading-relaxed">
                    Vendor-neutral and best-practice driven
                  </p>
                </section>

                <!-- Card 3 -->
                <section
                  class="rounded-2xl border border-gray-300 p-8
             flex flex-col items-center justify-center text-center
             min-h-55 w-full"
                >
                  <NuxtImg
                    src="/image/icon/ic_secure_lock.png"
                    alt="Project image"
                    width="64"
                    height="64"
                    class="mb-4"
                  />
                  <p class="text-gray-700 leading-relaxed">
                    Security-first infrastructure management
                  </p>
                </section>

                <!-- 👇 LAST ROW (CENTERED) -->
                <div class="md:col-span-3 flex justify-center gap-8">
                  <section
                    class="rounded-2xl border border-gray-300 p-8
               flex flex-col items-center justify-center text-center
               min-h-55 w-full max-w-sm"
                  >
                    <NuxtImg
                      src="/image/icon/ic_cost.png"
                      alt="Project image"
                      width="64"
                      height="64"
                      class="mb-4"
                    />
                    <p class="text-gray-700 leading-relaxed">
                      Predictable monthly operating costs
                    </p>
                  </section>

                  <section
                    class="rounded-2xl border border-gray-300 p-8
               flex flex-col items-center justify-center text-center
               min-h-55 w-full max-w-sm"
                  >
                    <NuxtImg
                      src="/image/icon/ic_expertise.png"
                      alt="Project image"
                      width="64"
                      height="64"
                      class="mb-4"
                    />
                    <p class="text-gray-700 leading-relaxed">
                      Local expertise with enterprise-grade delivery
                    </p>
                  </section>
                </div>
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
          </main>
        </div>
      </div>
    </section>

    <AppFooter />
  </NuxtLayout>
</template>
