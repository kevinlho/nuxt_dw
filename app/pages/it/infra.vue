<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Hero from '~/components/footer/Hero.vue'

const features = [
  {
    title: 'Network Infrastructure',
    desc:
      'Setup of LAN/WAN, firewall, switches, and wireless networks to support office and enterprise networking requirements.'
  },
  {
    title: 'Servers and Compute',
    desc:
      'Setup, refresh, and migration of virtualization platforms, physical servers, and cloud platforms to meet enterprise computing needs.'
  },
  {
    title: 'Storage Services',
    desc:
      'Setup, technology refresh, and migration of storage solutions including SAN, NAS, cloud storage, and backup systems.'
  },
  {
    title: 'Public Cloud Computing',
    desc:
      'Setup and migration of enterprise workloads to public cloud services.'
  }
]

// helper: center last row if total % 3 === 2
const cardClass = (index) => {
  const total = features.length
  const isSecondLast = index === total - 2
  const needsCenter = total % 3 === 2

  return [
    'md:col-span-2 rounded-2xl border border-gray-300 p-8 flex flex-col',
    needsCenter && isSecondLast ? 'md:col-start-2' : ''
  ]
}
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
            <section class="flex flex-col max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 items-center">
              <h3 class="text-4xl py-10 text-black text-center">
                Our Features
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
                <section
                  v-for="(item, index) in features"
                  :key="item.title"
                  :class="cardClass(index)"
                >
                  <h3 class="text-xl font-semibold text-gray-900 mb-6">
                    {{ item.title }}
                  </h3>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    {{ item.desc }}
                  </p>
                </section>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>

    <AppFooter />
  </NuxtLayout>
</template>
