<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Accordion from '~/components/accordion/Accordion.vue'

const apply_link
  = 'https://docs.google.com/forms/d/e/1FAIpQLSftNRfS32ZMR7VnOeyw6t4VGXo1x1Yjj4n9gk4bIiMmh1_w_w/viewform?usp=dialog'

const brochure_link
  = 'https://drive.google.com/file/d/1qYxQdw4iR0eQBkmLbYr43sSBSa7vif8I/view?usp=drivesdk'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'keybenefits', label: 'Key Benefits' },
  { id: 'programme', label: 'Why this programme?' },
  { id: 'attend', label: 'Who should attend?' },
  { id: 'fees', label: 'Fees and funding' },
  { id: 'certification', label: 'Certification' },
  { id: 'trainers', label: 'Faculty & industry trainers' }
]

const openSection = ref<string | null>(null)

const toggleSection = (sectionId: string) => {
  openSection.value = openSection.value === sectionId ? null : sectionId
}

const handleNavClick = (sectionId: string, event: Event) => {
  event.preventDefault()
  openSection.value = sectionId
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<template>
  <NuxtLayout>
    <AppHeader />

    <!-- HERO -->
    <section class="relative w-full h-[60vh] min-h-[300px] max-h-[500px] overflow-hidden">
      <img
        src="/image/services/ntu/ntu.jpg"
        class="w-full h-full object-cover"
        alt="NTU"
      >
      <div class="absolute inset-0 bg-black/20" />
    </section>

    <!-- CONTENT -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- LEFT NAV -->
          <nav class="hidden lg:flex lg:flex-col w-[280px] sticky top-[120px] self-start">
            <a
              v-for="item in sections"
              :key="item.id"
              :href="`#${item.id}`"
              class="block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4 py-4 mb-3 rounded-md transition"
              @click="handleNavClick(item.id, $event)"
            >
              {{ item.label }}
            </a>

            <a
              :href="brochure_link"
              target="_blank"
              class="flex items-center justify-between gap-2 bg-blue-200 hover:bg-blue-500 text-gray-800 text-sm px-4 py-4 mb-3 rounded-md transition min-h-[96px]"
            >
              <span class="text-xl font-semibold">Download <br> Brochure</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
            </a>

            <a
              :href="apply_link"
              class="flex items-center justify-center bg-red-500 hover:bg-red-800 text-white text-sm px-4 py-4 mb-3 rounded-md transition h-[96px]"
            >
              <span class="font-semibold text-xl">APPLY NOW!</span>
            </a>

            <NuxtLink
              to="./ntupastevents"
              class="flex items-center justify-center mb-3 bg-green-500 hover:bg-green-700 text-white h-[64px] rounded-md transition"
            >
              <strong>Past Events</strong>
            </NuxtLink>
          </nav>

          <!-- MAIN CONTENT -->
          <main class="flex-1">
            <h1 class="text-3xl md:text-4xl text-center font-semibold text-gray-900 mb-6">
              NTU Global Immersion Competition
            </h1>

            <!-- Mobile CTA buttons -->
            <div class="flex flex-col gap-4 md:hidden mb-10">
              <a
                :href="apply_link"
                class="flex items-center justify-center bg-red-500 hover:bg-red-800 text-white h-[64px] rounded-md transition"
              >
                <strong>APPLY NOW!</strong>
              </a>
              <a
                :href="brochure_link"
                target="_blank"
                class="flex items-center justify-center gap-2 bg-blue-200 hover:bg-blue-500 text-gray-800 min-h-[64px] px-4 rounded-md transition"
              >
                <span class="text-lg font-semibold">Download Brochure</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
              </a>

              <NuxtLink
                to="./ntupastevents"
                class="flex items-center justify-center bg-red-500 hover:bg-red-800 text-white h-[64px] rounded-md transition mb-6"
              >
                <strong>Past Events</strong>
              </NuxtLink>
            </div>

            <!-- Accordion Sections -->
            <template
              v-for="section in sections"
              :key="section.id"
            >
              <div :id="section.id">
                <Accordion
                  :id="`inner-${section.id}`"
                  :title="section.label"
                  :is-open="openSection === section.id"
                  @toggle="toggleSection(section.id)"
                >
                  <template v-if="section.id === 'overview'">
                    <div class="overview-content space-y-4 text-gray-700">
                      <p>Step into the world of innovation at Nanyang Technological University (NTU), one of the world's top young universities.</p>
                      <p>The NTU Global Immersion Competition 2026 is a prestigious international program organized by NTU, Singapore, designed to provide young students across Asia with a unique opportunity to experience academic life at one of the world's leading universities.</p>
                      <p>The program will take place from <strong>28 June to 5 July 2025</strong> and is themed <em>"Robotic and Sensing Control"</em>. It aims to introduce participants to the fundamentals and real-world applications of Robotics and Sensing Control, fostering early interest in technology, innovation, and problem-solving through hands-on learning experiences.</p>
                      <p>Over eight days, participants will engage in interactive lectures, project-based workshops, industry visits, and robotic application simulations. Guided by NTU faculty and industry mentors, students will work collaboratively to develop innovative ideas and practical solutions.</p>
                      <p>Participants will visit NTU's cutting-edge research labs and receive an admissions talk by NTU's Office of Admissions staff, offering valuable insights into university pathways and real-world innovation.</p>
                      <p>You will also have the chance to visit iconic Singapore landmarks, including <strong>Universal Studios Singapore</strong> on the final day.</p>
                      <p>The competition is open to students aged <strong>15 years and above</strong>. Participation is strictly limited to <strong>40 selected students</strong> from across the world.</p>
                      <p>Upon successful completion, participants will receive a <strong>Certificate of Completion</strong> issued by NTU, along with a <strong>Letter of Commendation</strong> recognising their academic engagement and contribution.</p>
                    </div>
                  </template>

                  <template v-else-if="section.id === 'keybenefits'">
                    <div class="text-gray-700 space-y-4">
                      <div
                        v-for="group in [
                          { title: 'Skill Development', items: ['Enhanced understanding of technology', 'Practical experience through project work', 'Improved presentation and teamwork skills'] },
                          { title: 'Networking Opportunities', items: ['Interaction with industry leaders and guest speakers', 'Building connections with peers and professionals internationally', 'Explore Singapore\'s iconic landmarks with peers'] },
                          { title: 'Future Opportunities', items: ['Increased chances of university admissions', 'Better preparation for future careers in tech', 'Insights into NTU\'s undergraduate programs and admission talks'] },
                          { title: 'Academic Recognition', items: ['Recognition letter from NTU for ONE winning team', 'Valuable addition to university applications and resumes', 'Certificate of Completion from NTU'] },
                          { title: 'Personal Growth', items: ['Boost in confidence and motivation', 'Exposure to real-world challenges and solutions', 'Experience an industrial visit'] }
                        ]"
                        :key="group.title"
                      >
                        <h2 class="text-2xl font-semibold mt-4">
                          {{ group.title }}
                        </h2>
                        <ul class="list-disc pl-6 space-y-1">
                          <li
                            v-for="item in group.items"
                            :key="item"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </template>

                  <template v-else-if="section.id === 'programme'">
                    <div class="text-gray-700 space-y-4">
                      <p>Learn from an NTU professor in a supportive environment that sparks curiosity and creativity. Experience university life in vibrant Singapore, a global hub for technology, business, and innovation.</p>
                      <h2 class="text-2xl font-semibold">
                        Course Objective
                      </h2>
                      <p>This course introduces fundamental topics in robotics and intelligent sensing techniques, covering robot sensors basics, vision sensors, estimation using vision sensors, sensor integration and fusion, and visual servo control.</p>
                      <h2 class="text-2xl font-semibold">
                        Course Outline
                      </h2>
                      <div
                        v-for="s in [
                          { label: 'Session 1', desc: 'Robot sensors basics — covers recent advances in robotics, sensor classification and characterization, and common sensor types.' },
                          { label: 'Session 2', desc: 'Vision sensing — cameras, pinhole camera model, structure and pose estimation, essential matrix and homography matrix approaches.' },
                          { label: 'Session 3', desc: 'Sensor fusion — sensor integration, Kalman filter, and Kalman-filter-based fusion methods.' },
                          { label: 'Session 4', desc: 'Visual servo control — position-based and image-based visual servo control in robotics.' },
                          { label: 'Session 5', desc: 'Group Presentation by Participants.' }
                        ]"
                        :key="s.label"
                        class="mb-2"
                      >
                        <strong>{{ s.label }}:</strong> {{ s.desc }}
                      </div>
                      <p><strong>Duration:</strong> 3 hours × 5 sessions = 15 hours</p>
                      <p><strong>Teaching Methodology:</strong> In-class or online via Zoom / Teams</p>
                      <h2 class="text-2xl font-semibold">
                        Exciting Tours &amp; Learning Journey
                      </h2>
                      <p><strong>NTU Campus Tour</strong> — Explore NTU's campus and learn about undergraduate programmes from the Office of Admissions.</p>
                      <p><strong>Innovation Learning Journey</strong> — Visit NTU's state-of-the-art research labs.</p>
                      <p><strong>Visit Other Universities</strong> — SMU, SUTD, PSB, Kaplan and more for workshops and admission talks.</p>
                      <p><strong>Industrial Learning Journey</strong> — See how technology is applied in real-world industry settings.</p>
                      <p><strong>Universal Studios Singapore</strong> — Celebrate and bond with peers on the final day.</p>
                    </div>
                  </template>

                  <template v-else-if="section.id === 'attend'">
                    <div class="text-gray-700 space-y-3">
                      <h2 class="text-2xl font-semibold mb-4">
                        Entry Requirements
                      </h2>
                      <p><strong>Age:</strong> Minimum 15 years old</p>
                      <p><strong>Academic Requirements:</strong> Minimum average score of 75 in English and Mathematics (most recent transcript)</p>
                      <p><strong>Academic Background:</strong> Applicants from all high school curricula are welcome</p>
                      <p class="text-sm italic">
                        * Applicants who do not fully meet the above requirements may still be considered on a case-by-case basis, subject to an interview.
                      </p>
                    </div>
                  </template>

                  <template v-else-if="section.id === 'fees'">
                    <div class="text-gray-700 space-y-3">
                      <p><strong>Remarks:</strong> This is a self-funded programme; no funding or scholarship is available.</p>
                      <p><strong>Included in the programme fee:</strong></p>
                      <ul class="list-disc pl-6 space-y-1">
                        <li>Twin-sharing accommodation at a 4-star hotel</li>
                        <li>Chartered bus between destinations</li>
                        <li>Full line-up of activities</li>
                        <li>Catered meals (3 times a day)</li>
                        <li>NTU student life experience</li>
                        <li>Industry workshops and company visits</li>
                        <li>NTU Letter of Commendation (Winning Team) &amp; Certificate of Completion (All Participants)</li>
                        <li>Universal Studios Singapore trip &amp; buffet on the final day</li>
                      </ul>
                      <p><strong>Not included:</strong> Leisure activities, airfares, visas &amp; travel insurance.</p>
                      <p><strong>Cancellation policy:</strong> No refund once payment has been made.</p>
                      <p><strong>Payment:</strong> Instructions will be shared separately, by the deadline indicated on your offer letter.</p>
                    </div>
                  </template>

                  <template v-else-if="section.id === 'certification'">
                    <ul class="list-disc pl-6 space-y-1 text-gray-700">
                      <li>NTU Letter of Commendation (Winning Team)</li>
                      <li>Certificate of Completion (All Participants)</li>
                      <li>Certificate of Participation (Workshop at other universities such as PSB and Kaplan)</li>
                    </ul>
                  </template>

                  <template v-else-if="section.id === 'trainers'">
                    <div class="border border-gray-200 rounded-2xl overflow-hidden bg-blue-50">
                      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
                        <div class="shrink-0">
                          <img
                            src="/image/services/ntu/guoqiang_hu.jpeg"
                            alt="Dr. Guoqiang Hu"
                            class="w-24 h-24 rounded-full object-cover border border-gray-300"
                          >
                        </div>
                        <div class="flex flex-col justify-center text-center sm:text-left space-y-2">
                          <h3 class="text-xl font-semibold text-gray-900">
                            Dr. Guoqiang Hu
                          </h3>
                          <p class="text-sm text-gray-600">
                            Dr. Guoqiang Hu is a Professor in the School of Electrical and Electronic Engineering at NTU, Singapore.
                            Before joining NTU in 2011, he was an Assistant Professor at Kansas State University (2008–2011).
                            He received his Ph.D. in Mechanical Engineering from the University of Florida in 2007.
                            He has received several best paper awards and serves as Associate Editor for IEEE Transactions on Control Systems Technology
                            and IEEE Transactions on Automatic Control. His research focuses on AI and robotics, distributed optimization,
                            multi-robot systems, human–robot collaboration, and smart city systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </template>
                </Accordion>
              </div>
            </template>
          </main>
        </div>
      </div>
    </section>

    <AppFooter />
  </NuxtLayout>
</template>

<style scoped>
.overview-content p {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
