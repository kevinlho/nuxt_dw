<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'keybenefits', label: 'Key Benefits' },
  { id: 'programme', label: 'Why this programme?' },
  { id: 'attend', label: 'Who should attend?' },
  { id: 'fees', label: 'Fees and funding' },
  { id: 'certification', label: 'Certification' },
  { id: 'trainers', label: 'Faculty & industry trainers' }
]
</script>

<template>
  <NuxtLayout>
    <AppHeader />

    <!-- HERO -->
    <section class="relative w-full h-[40vh] min-h-[300px] max-h-[500px] overflow-hidden">
      <img src="/image/services/ntu/ntu.jpg" class="w-full h-full object-cover" />
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
        <div class="page">

          <!-- LEFT NAV (DESKTOP ONLY) -->
          <nav class="reference-nav">
            <a
              v-for="item in sections"
              :key="item.id"
              :href="`#${item.id}`"
              class="nav-item"
            >
              {{ item.label }}
            </a>
          </nav>

          <!-- MAIN -->
          <main class="content">
            <h1 class="title">
              NTU Immersion Programme: The Power and Possibilities of AI
            </h1>

            <!-- OVERVIEW -->
            <section id="overview" class="section">
              <h2 class="card-title">Overview</h2>
              <div class="card-body">
                <p>Step into the world of innovation at Nanyang Technological University (NTU)...</p>
                <p>Taught by an NTU professor, you will explore key AI concepts...</p>
                <p>NTU student ambassadors will lead a guided campus tour...</p>
                <p>Participants will embark on a learning journey...</p>
                <p>You will have the chance to visit iconic Singapore landmarks...</p>
                <p>This programme provides a valuable opportunity...</p>
              </div>
            </section>

            <!-- KEY BENEFITS -->
            <section id="keybenefits" class="section">
              <h2 class="card-title">Key Benefits</h2>
              <div class="card-body">
                <ul class="list-disc pl-6 space-y-3">
                  <li>Build a foundational introduction to artificial intelligence concepts.</li>
                  <li>Explore how AI is applied across various industry sectors.</li>
                  <li>Participate in guided activities.</li>
                  <li>Visit NTU's state-of-the-art research & lab facilities.</li>
                  <li>Experience an industrial visit.</li>
                  <li>Connect and collaborate with peers.</li>
                  <li>Discover insights into NTU's undergraduate programmes.</li>
                  <li>Enjoy life at a world-class university.</li>
                  <li>Explore Singapore's iconic landmarks.</li>
                </ul>
              </div>
            </section>

            <!-- PROGRAMME -->
            <section id="programme" class="section">
              <h2 class="card-title">Why this programme?</h2>
              <div class="card-body space-y-6">

                <p>
                  Learn from an NTU professor in a supportive environment...
                </p>

                <h3 class="font-semibold text-lg">Exciting Tours & Learning Journey</h3>

                <ul class="list-disc pl-6 space-y-3">
                  <li><strong>NTU Campus Tour</strong> - Explore NTU’s vibrant campus.</li>
                  <li><strong>Sharing by NTU Office of Admissions</strong> - Learn about programmes.</li>
                  <li><strong>Innovation Learning Journey</strong> - Visit research labs.</li>
                  <li><strong>Industrial Learning Journey</strong> - Real-world tech exposure.</li>
                  <li><strong>Singapore City Highlights</strong> - Discover iconic locations.</li>
                </ul>

              </div>
            </section>

          </main>
        </div>
      </div>
    </section>

    <AppFooter />
  </NuxtLayout>
</template>

<style scoped>
.page {
  display: flex;
  gap: 48px;
}

/* LEFT NAV */
.reference-nav {
  width: 280px;
  position: sticky;
  top: 120px;
}

.nav-item {
  display: block;
  background: #f3f3f3;
  padding: 14px 16px;
  margin-bottom: 10px;
  border-radius: 6px;
  color: #222;
  font-size: 14px;
  text-decoration: none;
}

.nav-item:hover {
  background: #eaeaea;
}

/* CONTENT */
.content {
  flex: 1;
}

.title {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 32px;
}

/* CARD */
.section {
  border: 1px solid #e5e5e5;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 40px;
}

.card-title {
  background: #f3f3f3;
  padding: 20px 24px;
  font-size: 26px;
  font-weight: 600;
}

.card-body {
  padding: 24px;
  font-size: 16px;
  line-height: 1.6;
}

/* MOBILE */
@media (max-width: 1024px) {
  .page {
    flex-direction: column;
  }

  .reference-nav {
    display: none;
  }

  .title {
    font-size: 28px;
  }

  .card-title {
    font-size: 20px;
  }

  .card-body {
    padding: 20px;
    font-size: 15px;
  }
}
</style>
