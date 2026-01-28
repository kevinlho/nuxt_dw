<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Hero from '~/components/Hero.vue'

const features = [
  {
    title: 'Vulnerability Management',
    desc:
      'Vulnerability Management and Penetration Tests help detect, assess, identify and report on security weaknesses in an environment.'
  },
  {
    title: 'Web Application Assessment',
    desc:
      'Web Application Assessment that provides a comprehensive examination and exploitation of both commercial and in-house applications for vulnerabilities and security threats within applications.'
  },
  {
    title: 'Incident Response Management',
    desc:
      'Incident Response Management is an organized approach to addressing and managing the aftermath of a security breach or cyberattack with the goal of limiting damage and reducing recovery time and costs.'
  },
  {
    title: 'Technology Compliance Assessment',
    desc:
      'Technology Compliance Assessment to help meet regulatory compliance and corporate policy requirements.'
  },
  {
    title: 'Physical and Social Engineering Assessments',
    desc:
      'Physical and Social Engineering Assessments that examine non-technical issues with the potential to impact sensitive information.'
  }
]

// helper: center last row if total % 3 === 2
const cardClass = (index: number) => {
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
      title="Cybersecurity"
      subtitle="Defending Your Business's Digital Assets: Our Priority, Your Peace of Mind."
    />

    <!-- CONTENT -->
    <section class="bg-white">
      <div>
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- MAIN CONTENT -->
          <main class="flex-1">
            <section class="w-full min-h-[40vh] flex flex-col items-center px-4 bg-gray-100">
              <div class="max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
                <div class="rounded-2xl border border-gray-300 bg-white p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900 h-10">
                      Improve Threat Visibility
                    </h3>
                  </div>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    Integrate your on-premises and cloud security infrastructures to minimise risk.
                  </p>
                </div>

                <div class="rounded-2xl border border-gray-300 bg-white p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900 h-10">
                      Detect And Respond Fast
                    </h3>
                  </div>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    Detect and respond with precision to cyber threats when you work with our leading SecOps platform.
                  </p>
                </div>

                <div class="rounded-2xl border border-gray-300 bg-white p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900 h-10">
                      Boost Your Security Posture
                    </h3>
                  </div>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    Stay on top of threat alerts. You can eliminate embedded or persistent threats by leveraging our
                    services.
                  </p>
                </div>

                <div class="rounded-2xl border border-gray-300 bg-white p-8 flex flex-col">
                  <div class="flex items-center gap-3 mb-6">
                    <h3 class="text-xl font-semibold text-gray-900 h-10">
                      The Assessment Suites
                    </h3>
                  </div>

                  <p class="text-gray-700 leading-relaxed flex-1">
                    Comprehensive assessment solutions, From vulnerability management to physical security testing.
                  </p>
                </div>
              </div>
            </section>

            <section class="flex flex-col max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 items-center">
              <h3 class="text-4xl mb-10 text-black text-center">
                Our Services
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-7xl w-full">
                <section
                  v-for="(item, index) in features"
                  :key="item.title"
                  :class="cardClass(index)"
                  class="bg-gray-50"
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
