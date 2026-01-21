<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Accordion from '~/components/accordion/Accordion.vue'

const apply_link = 'https://docs.google.com/forms/d/e/1FAIpQLSftNRfS32ZMR7VnOeyw6t4VGXo1x1Yjj4n9gk4bIiMmh1_w_w/viewform?usp=dialog'
const brochure_link = 'https://drive.google.com/file/d/1qYxQdw4iR0eQBkmLbYr43sSBSa7vif8I/view?usp=drivesdk'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'keybenefits', label: 'Key Benefits' },
  { id: 'programme', label: 'Why this programme?' },
  { id: 'attend', label: 'Who should attend?' },
  { id: 'fees', label: 'Fees and funding' },
  { id: 'certification', label: 'Certification' },
  { id: 'trainers', label: 'Faculty & industry trainers' }
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

    <!-- HERO -->
    <section class="relative w-full h-[60vh] min-h-[300px] max-h-[500px] overflow-hidden">
      <img
        src="/image/services/ntu/ntu.jpg"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-black/20" />
      <div class="absolute inset-0 flex items-center justify-center" />
    </section>

    <!-- CONTENT -->
    <section class="bg-white">
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
            <a
              :href="brochure_link"
              class="block bg-blue-200 hover:bg-blue-500 text-gray-800 text-sm px-4 py-4 mb-3 rounded-md transition"
            >Brochure</a>
          </nav>

          <!-- MAIN CONTENT -->
          <main class="flex-1">
            <div class="flex flex-row justify-between items-center mb-10">
              <h1 class="text-3xl md:text-4xl font-semibold text-gray-900">
                NTU Global Immersion Competitionb
              </h1>

              <a
                :href="apply_link"
                class="bg-red-500 hover:bg-red-800 text-white text-sm px-4 py-4 rounded-md transition text-center"
              >
                <strong>APPLY NOW!</strong>
              </a>
            </div>

            <Accordion
              id="overview"
              title="Overview"
              :default-open="false"
            >
              <p>
                Step into the world of innovation at Nanyang Technological University (NTU), one of the world's top
                young universities.
              </p>
              <p>
                The NTU Global Immersion Competition 2025 is a prestigious international program organized by Nanyang
                Technological University (NTU), Singapore, designed to provide young students across Asia with a unique
                opportunity to experience academic life at one of the world's leading universities.
              </p>
              <p>
                The program will take place from 14 to 21 December 2025 and is themed “Theories and Applications in
                Artificial Intelligence.” It aims to introduce participants to the fundamentals and real-world
                applications of artificial intelligence, fostering early interest in technology, innovation, and
                problem-solving through hands-on learning experiences.
              </p>
              <p>
                Over the course of eight days, participants will engage in a wide range of academic and experiential
                activities, including interactive lectures, project-based workshops, industry visits, and AI application
                simulations across various technological fields. Guided by NTU academic faculty and industry mentors,
                students will work collaboratively to develop innovative ideas and practical solutions.
              </p>
              <p>
                Participants will embark on a learning journey that includes visits to NTU cutting-edge research labs
                and an industrial visit, alongside informative sessions such as an admissions talk by NTU’s Office of
                Admissions staff. This experience offers valuable insights into university pathways and real-world
                innovation.
              </p>
              <p>
                You will have the chance to visit iconic Singapore landmarks, including Universal Studios Singapore on
                the final day of the program.
              </p>
              <p>
                The competition is open to students aged 15 years and above and due to the intensive nature of the
                program, participation is strictly limited to 40 selected students from across the world.
              </p>
              <p>
                Upon successful completion, participants will receive a Certificate of Completion issued by NTU, along
                with a Letter of Commendation recognizing their academic engagement and contribution to the program.
              </p>
              <p>
                This programme provides a valuable opportunity to deepen your understanding of AI, gain fresh
                perspectives and experience life at a leading global university. Take this chance to spark your
                curiosity and build confidence as you explore the possibilities ahead.
              </p>
            </Accordion>

            <Accordion
              id="keybenefits"
              title="Key Benefits"
              :default-open="false"
            >
              <div class="text-gray-700">
                <ul class="list-disc pl-6 space-y-3">
                  <h2 class="mb-3 text-2xl">
                    <strong>Skill Development</strong>
                  </h2>
                  <li>Enhanced understanding of technology</li>
                  <li>Practical experience through project work</li>
                  <li>Improved presentation and teamwork skills</li>

                  <h2 class="my-3 pt-3 text-2xl">
                    <strong>Networking Opportunities</strong>
                  </h2>
                  <li>Interaction with industry leaders and guest speakers</li>
                  <li>Building connections and collaboration with peers and professionals (internationally)</li>
                  <li>Explore some of Singapore&apos;s iconic landmarks with peers</li>

                  <h2 class="my-3 pt-3 text-2xl">
                    <strong>Future Opportunities</strong>
                  </h2>
                  <li>Increased chances of university admissions</li>
                  <li>Better preparation for future careers in tech and communication industries</li>
                  <li>Discover insights into NTU&apos;s undergraduate programs and admission talks</li>

                  <h2 class="my-3 pt-3 text-2xl">
                    <strong>Academic Recognition</strong>
                  </h2>
                  <li>Recognition letter from NTU for ONE winning team</li>
                  <li>Valuable addition to university applications and resumes</li>
                  <li>Certificate of Completion from NTU</li>

                  <h2 class="my-3 pt-3 text-2xl">
                    <strong>Personal Growth</strong>
                  </h2>
                  <li>Boost in confidence and motivation</li>
                  <li>Exposure to real-world challenges and solutions</li>
                  <li>Experience an industrial visit</li>
                </ul>
              </div>
            </Accordion>

            <Accordion
              id="programme"
              title="Why this programme?"
              :default-open="false"
            >
              <!-- Card Content -->
              <div class="text-gray-700">
                <p>
                  Learn from an NTU professor in a supportive environment that sparks curiosity and creativity.
                  Discover AI's real-world impact and ignite your passion for future opportunities. Experience
                  university life in vibrant Singapore, a global hub for technology, business, and innovation.
                </p>

                <p class="my-3 pt-3 text-2xl">
                  <strong>Course Objective</strong>
                </p>
                <p>
                  This course will introduce the fundamental theories and applications of Artificial Intelligence (AI).
                  AI is widely considered as one of the most important technologies in recent years. Its impacts have
                  been significant in many fields including business, manufacturing, education, healthcare,
                  transportation, etc. This course will cover the recent developments in AI and introduce some important
                  AI models and architectures including Convolutional Neural Networks (CNNs), Recurrent Neural Networks
                  (RNNs), Long Short-Term Memory (LSTM), emerging trends such as Transformers, Diffusion Models and
                  their relevant applications. At the end of the course, participants will have a good understanding of
                  these important AI models, theories and their applications. If you are interested in the theories and
                  applications of AI, you should take this course. This course will equip you with the key knowledge of
                  AI for your future advancement in the relevant fields.
                </p>

                <p class="my-3 pt-3 text-2xl">
                  <strong>Course Outline</strong>
                </p>
                <p class="my-3">
                  <span class="text-l"><strong>Session 1</strong><br></span> Introduction to Artificial Intelligence
                  (AI)
                  History of AI, Deep Neural Network (DNN) architectures, linear classifier, AI resources
                </p>
                <p class="my-3">
                  <span class="text-l"><strong>Session 2</strong><br></span> Convolutional Neural Networks (CNNs)
                  Theory of CNNs, CNN architecture, training of CNNs, well-known CNN models, applications such as image
                  classification.
                </p>
                <p class="my-3">
                  <span class="text-l"><strong>Session 3</strong><br></span> Recurrent Neural Networks (RNNs)
                  Theory of RNNs, RNN architecture, training of RNNs, theory of LSTMs, LSTM architecture, applications
                  such as time-series prediction.
                </p>
                <p class="my-3">
                  <span class="text-l"><strong>Session 4</strong><br></span> Emerging Trends in AI
                  Emerging trends in AI such as Transformer, Generative Adversarial Network, Diffusion Models, etc.
                </p>
                <p class="my-3">
                  <span class="text-l"><strong>Session 5</strong><br></span> Group Presentation by Participants
                  (Competition Day)
                  Teamwork and group presentation by participants
                </p>
                <p class="my-3">
                  <span class="text-l"><strong>Duration</strong><br></span>
                  3-hour x 5 sessions = 15 hours
                </p>
                <p class="my-3">
                  <span class="text-l"><strong>Teaching Methodology</strong><br></span>
                  In class teaching or online teaching via Zoom / Teams
                </p>
                <p class="my-3 pt-3 text-2xl">
                  <span class="text-l"><strong>Exciting Tours & Learning Journey</strong><br></span>
                </p>
                <p class="my-1">
                  <strong>NTU Campus Tour</strong> - Explore NTU's vibrant campus and experience a glimpse of university
                  life.
                  Sharing by NTU Office of Admissions - A valuable opportunity to learn more about NTU's undergraduate
                  programmes and admissions criteria.
                </p>
                <p class="my-1">
                  <strong>Innovation Learning Journey</strong> - Visit NTU's state-of-the-art research & lab facilities
                  where ideas and
                  research come to life through prototypes and early experimentation.
                </p>
                <p class="my-1">
                  <strong>Visit Other Universities</strong> - Explore other universities such as SMU, SUTD, PSB and
                  Kaplan and many more
                  for a workshop and admission talks
                </p>
                <p class="my-1">
                  <strong>Industrial Learning Journey</strong> - Gain insights into how technology is explored and
                  applied in real-world
                  settings through a visit to an industrial firm.
                </p>
                <p class="my-1">
                  <strong>Singapore Universal Studio</strong> - Explore and enjoy your last day with your peers at
                  Southeast Asia's first
                  Universal Studios theme park as your celebration and bonding time with your peers before leaving the
                  country
                </p>
              </div>
            </Accordion>

            <Accordion
              id="attend"
              title="Who should attend?"
              :default-open="false"
            >
              <p class="my-3 pb-6 text-2xl">
                Entry Requirements
              </p>
              <p>
                <strong>Age</strong><br>Minimum of 15 years old
              </p>
              <p>
                <strong>Academic Requirements</strong><br>A minimum average score of 75 in English and Mathematics based
                on the most
                recent academic transcript
              </p>
              <p>
                <strong>Academic Background</strong><br>Applicants from all high school curriculum are welcome
              </p>
              <p>
                *Applicants who do not fully meet the above entry requirements may still be considered on a case-by-case
                basis, subject to an interview.
              </p>
            </Accordion>

            <Accordion
              id="fees"
              title="Fees and funding"
              :default-open="false"
            >
              <p>
                <strong>Remarks:</strong><br>
                This is a self-funded programme; thus, no funding or scholarship is available.
              </p>
              <p>
                <strong>The programme fee is inclusive of:</strong><br>
              </p>
              <div class="text-gray-700">
                <ul class="list-disc pl-6">
                  <li>Twin-sharing accommodation at a 4-star hotel</li>
                  <li>Chartered bus between destinations</li>
                  <li>Line-up of activities</li>
                  <li>Catered meals (3 times a day)</li>
                  <li>Experience the life of an NTU student</li>
                  <li>Industry workshops and company visits</li>
                  <li>NTU Letter of Commendation (Winning Team) &amp; Certificate of Completion (All Participants)</li>
                  <li>Universal Studios Singapore trip &amp; buffet on the final day excursion</li>
                </ul>
              </div>
              <p>
                <strong>What are NOT included in the programme fee:</strong>
              </p>
              <p>
                Your own leisure activities, airfares, visas, & travel insurance.
              </p>
              <p>
                <strong>Cancellation policy:</strong>
              </p>
              <p>
                No refund will be issued once payment has been made to confirm your spot.
              </p>
              <p>
                <strong>Payment mode:</strong>
              </p>
              <p>
                Payment instruction will be shared with you separately.
              </p>
              <p>
                <strong>Payment Deadline:</strong>
              </p>
              <p>
                To be completed by the respective payment deadline as indicated on the offer letter/email.
              </p>
            </Accordion>

            <Accordion
              id="certification"
              title="Certification"
              :default-open="false"
            >
              <ul class="list-disc pl-6">
                <li>NTU Letter of Commendation (Winning Team) </li>
                <li>Certificate of Completion (All Participants)</li>
                <li>Certificate of Participation (Workshop at other Universities such as PSB and Kaplan)</li>
              </ul>
            </Accordion>

            <Accordion
              id="trainers"
              title="Faculty & industry trainers"
              :default-open="false"
            >
              <div class="border border-gray-200 rounded-2xl overflow-hidden bg-blue-50">
                <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
                  <!-- LEFT: Lecturer Image -->
                  <div class="shrink-0">
                    <img
                      src="/image/services/ntu/kim_yap_hui.jpg"
                      alt="Assoc Prof Kwoh Chee Keong"
                      class="w-24 h-24 rounded-full object-cover border border-gray-300"
                    >
                  </div>

                  <!-- RIGHT: Lecturer Info (Vertically Centered) -->
                  <div class="flex flex-col justify-center text-center sm:text-left space-y-2 h-full">
                    <h3 class="text-xl font-semibold text-gray-900">
                      Dr. Kim-Hui Yap
                    </h3>

                    <p class="text-sm text-gray-600">
                      Dr. Kim-Hui Yap is a faculty member at Nanyang Technological University (NTU), Singapore, where he
                      has served since 2002. He holds a Bachelor of Engineering (First Class Honours, University Medal
                      Winner) and a Ph.D. from the University of Sydney, Australia. His research expertise includes
                      artificial intelligence, computer vision, data, image and video processing, and pattern
                      recognition.
                      He has held numerous academic leadership and service roles at NTU, including NTU Senator,
                      Assistant Chair (Faculty) of the School of Electrical and Electronic Engineering, Deputy Chairman
                      of School Faculty Committee, and Program Director for the MSc (Signal Processing) programme. Dr.
                      Yap has also contributed extensively to national and international professional organizations,
                      editorial boards, and technical committees.
                      An accomplished researcher, Dr. Yap has authored over 100 peer-reviewed publications, conference
                      papers, and book chapters. He is also the author and editor of well-regarded books in image
                      processing and computational intelligence, and has served as an Associate Editor and Editorial
                      Board Member for several international journals.
                    </p>
                  </div>
                </div>
              </div>
            </Accordion>
          </main>
        </div>
      </div>
    </section>

    <AppFooter />
  </NuxtLayout>
</template>
