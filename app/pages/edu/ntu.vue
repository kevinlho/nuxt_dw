<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import Accordion from '~/components/accordion/Accordion.vue'

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
    <section class="relative w-full h-[40vh] min-h-[300px] max-h-[500px] overflow-hidden">
      <img
        src="/image/services/ntu/ntu.jpg"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-black/20" />
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
          NTU
        </h1>
      </div>
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
          </nav>

          <!-- MAIN CONTENT -->
          <main class="flex-1">
            <h1 class="text-3xl md:text-4xl font-semibold mb-10 text-gray-900">
              Ntu Global Immersion Competition
            </h1>

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
                  <li>Build a foundational introduction to artificial intelligence concepts.</li>
                  <li>Explore how AI is applied across various industry sectors through real-world examples.</li>
                  <li>Participate in guided activities designed to deepen understanding.</li>
                  <li>Visit NTU's state-of-the-art research & lab facilities.</li>
                  <li>Experience an industrial visit.</li>
                  <li>Connect and collaborate with a diverse group of motivated peers.</li>
                  <li>Discover insights into NTU's undergraduate programmes.</li>
                  <li>Enjoy a memorable glimpse into life at a world-class university.</li>
                  <li>Explore some of Singapore's iconic landmarks.</li>
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

                <p>Course Outline</p>
                <ul class="list-disc pl-6 space-y-3">
                  <li>Introduction to AI and its Impact</li>
                  <div>
                    <p>
                      Introduce students to AI, its basic concepts, and its potential impact on society.<br>
                    </p>
                    <ul class="list-none space-y-2">
                      <li>- Welcome &amp; Overview: Brief on program goals and schedule.</li>
                      <li>
                        - Introductory Lecture on AI:
                        Cover the basics of AI, including machine learning, deep learning, and data science.
                        Explain terms and give real-world examples (e.g., recommendation engines, language
                        processing).
                      </li>
                      <li>
                        - Discussion on AI in Society:
                        Explore AI's impact on various fields — medicine, entertainment, environmental science,
                        education, self-learning, etc.
                        Small groups discuss how they've seen AI in their daily lives.
                      </li>
                      <li>
                        - Activity:
                        Students interact with online AI demos (like Google's Teachable Machine) and share their
                        experiences.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <li><strong>Data-Analytic Thinking</strong></li>
                    <p class="my-3">
                      Equip students with the essential skills in data handling and analysis, enabling them to
                      effectively manage, explore, and present data for their AI projects.
                    </p>
                    <ul class="list-none space-y-2">
                      <li>- Welcome &amp; Overview: Brief on program goals and schedule.</li>
                      <li>
                        - The Data Pipeline: Understanding types of data, data acquisition, and preparation.
                      </li>
                      <li>
                        - Data Exploration: Basic concepts in statistics and exploratory data analysis (EDA) using case
                        studies.
                      </li>
                      <li>
                        - Data Presentation: Techniques for data visualisation and statistical analysis.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <li><strong>AI Technologies</strong></li>
                    <p class="my-3">
                      Understand Artificial Neural Networks (ANN) and Backpropagation, Multi-layer Perception, Deep
                      Learning, and Various Architectures.
                    </p>
                    <ul class="list-none space-y-2">
                      <li>
                        - Lecture on Neural Networks: Introduction to ANN and backpropagation.
                      </li>
                      <li>
                        - Deep Learning Architectures: Overview of CNN, RNN, and Transformer architectures.
                      </li>
                      <li>
                        - Hands-On Activity: Implementing a simple neural network using TensorFlow.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <li><strong>Applications of AI in Different Fields</strong></li>
                    <p class="my-3">
                      Explore the applications of AI across various fields and inspire project ideas.
                    </p>
                    <ul class="list-none space-y-2">
                      <li>
                        - Lecture on AI Applications: Overview of how AI is used in fields like sports, finance,
                        education and healthcare.
                      </li>
                      <li>
                        - Field-Specific Breakout Sessions: Students choose one field of interest (e.g., entertainment,
                        environment or healthcare) and join a mini-workshop on AI's role in that field.
                      </li>
                      <li>
                        - Case Study Discussion: In groups, students discuss a notable AI application in their chosen
                        field, exploring its development and impact.
                      </li>
                      <li>
                        - Project Brainstorming: Students are guided through brainstorming for a small AI project.
                        Teams form and settle on project ideas (e.g., a chatbot, simple prediction model).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <li><strong>Project Development and Presentation</strong></li>

                    <p class="my-3">
                      Complete project work and showcase it to peers.
                    </p>

                    <ul class="list-none space-y-2">
                      <li>
                        - Project Work Session: Students work in teams to develop their projects. The instructor will
                        offer guidance, helping students to troubleshoot and implement their ideas.
                      </li>
                      <li>
                        - Student Presentations: Each team presents their project to the group, explaining the
                        inspiration, process, and potential impact of their project.
                      </li>
                      <li>
                        - Reflection and Closing Discussion: Students discuss their learning takeaways, challenges,
                        and excitement about AI. The program concludes with awards or certificates.
                      </li>
                    </ul>
                  </div>
                  <p>
                    This enhanced curriculum will motivate students to work closely with data, make data-driven
                    decisions, and explore cutting-edge applications in AI and data science. <Strong>Python will be the
                      primary language for hands-on computational techniques.</Strong>
                  </p>

                  <h2><strong>Exciting Tours & Learning Journey</strong></h2>
                  <ul class="list-disc pl-6 space-y-3">
                    <li>
                      <strong>NTU Campus Tour</strong> - Explore NTU's vibrant campus with our student ambassadors and
                      experience a glimpse of university life.
                    </li>
                    <li>
                      <strong>Sharing by NTU Office of Admissions</strong> - A valuable opportunity to learn more about
                      NTU's undergraduate programmes and admissions criteria.
                    </li>
                    <li>
                      <strong>Innovation Learning Journey</strong> - Visit NTU's state-of-the-art research & lab
                      facilities where ideas and research come to life through prototypes and early experimentation.
                    </li>
                    <li>
                      <strong>Industrial Learning Journey</strong> - Gain insights into how technology is explored and
                      applied in real-world settings through a visit to an industrial firm.
                    </li>
                    <li>
                      <strong>Singapore City Highlights</strong> - Discover iconic locations such as Merlion Park,
                      Esplanade and Singapore River. Enjoy a free-and-easy experience of the city's culture and charm.
                    </li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              id="attend"
              title="Who should attend?"
              :default-open="false"
            >
              <p>
                High school students aged 16 and above, with a good command of English and an interest in artificial
                intelligence, innovation, and technology. Ideal for curious learners eager to explore how AI connects to
                real-world challenges and future opportunities. To be eligible, applicants must be born on or before 31
                December 2009.
              </p>
            </Accordion>

            <Accordion
              id="fees"
              title="Fees and funding"
              :default-open="false"
            >
              <p>
                <strong>Remarks:</strong><br>
                Programme fee includes 9% Goods and Services Tax.<br>
                This is a self-funded programme; thus, no funding or scholarship is available.<br>
                Applicants will be notified latest by 6 November 2025 if the programme is confirmed to run.
              </p>
              <p>
                <strong>The programme fee is inclusive of:</strong><br>
              </p>
              <div class="text-gray-700">
                <ul class="list-disc pl-6">
                  <li>15 hours of tuition led by an NTU professor</li>
                  <li>Welcome pack and NTU T-shirt</li>
                  <li>Welcome buffet lunch</li>
                  <li>Visit to NTU state-of-the art facilities</li>
                  <li>Industrial visit</li>
                  <li>Admissions talk by NTU Office of Admissions</li>
                  <li>Campus tour and student sharing led by NTU student ambassadors</li>
                  <li>Certificate of Completion (with minimum 75% attendance)</li>
                  <li>Letter of Academic Performance (based on group presentation)</li>
                </ul>
              </div>
              <p>
                <strong>What are NOT included in the programme fee:</strong>
              </p>
              <p>
                Your accommodation, transportation, own leisure activities, airfares, visas, travel insurance, food and
                daily expenses are NOT included, unless otherwise stated.
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
                Flywire (For more information:
                https://www.ntu.edu.sg/life-at-ntu/student-life/onestop/payment-services/epayment-flywire )
              </p>
              <p>
                <strong>Payment Deadline:</strong>
              </p>
              <p>
                To be completed by the respective payment deadline as indicated on the website.
                (Payment instruction will be shared with you separately)
              </p>
            </Accordion>

            <Accordion
              id="certification"
              title="Certification"
              :default-open="false"
            >
              <p>
                An <strong>NTU Certificate of Completion</strong> will be awarded to participants who achieve at least
                <strong>75%</strong> course attendance.
              </p>
            </Accordion>

            <Accordion
              id="trainers"
              title="Faculty & industry trainers"
              :default-open="false"
            >
              <div class="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
                  <!-- LEFT: Lecturer Image -->
                  <div class="shrink-0">
                    <img
                      src="/image/icon/ic_logo.png"
                      alt="Assoc Prof Kwoh Chee Keong"
                      class="w-24 h-24 rounded-full object-cover border border-gray-300"
                    >
                  </div>

                  <!-- RIGHT: Lecturer Info (Vertically Centered) -->
                  <div class="flex flex-col justify-center text-center sm:text-left space-y-2 h-full">
                    <h3 class="text-xl font-semibold text-gray-900">
                      Assoc Prof Kwoh Chee Keong, PBM
                    </h3>

                    <p class="text-sm text-gray-600">
                      PhD, DIC, MSc(ISE), Beng(EE), PGDIG, Sr.MIES, M.ICAAS, M.AMBIS<br>
                      College of Computing and Data Science
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
