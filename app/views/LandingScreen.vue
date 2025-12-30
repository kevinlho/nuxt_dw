<script setup lang="ts">
import { reactive, ref } from "vue";

const form = ref({
  date: "",
  time: "",
  pax: 1,
});

function handleSubmit() {
  alert(`Tanggal: ${form.value.date}\nJam: ${form.value.time}\nPax: ${form.value.pax}`);
}
</script>

<template>
  <section
    class="relative w-screen flex flex-col overflow-hidden h-[100vh] md:h-screen"
  >
    <!-- Top section (2/3 height) -->
    <div
      class="relative h-2/3 bg-[url('/assets/image/bg/bg_opt2.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
    >
      <h1 class="text-white text-2xl md:text-4xl font-semibold drop-shadow-md text-center">
        Selamat datang di catering Selerakoe
      </h1>
      <h1 class="text-white text-xl mt-5 font-semibold drop-shadow-md">
        Pilih menu terbaik untuk para tamu Anda
      </h1>
    </div>

    <!-- Floating yellow form -->
    <div
      class="absolute left-1/2 top-[66.6%] -translate-x-1/2 -translate-y-1/2
             bg-[#F7A600] rounded-2xl flex flex-col md:flex-row items-center
             px-4 md:px-12 py-6 md:py-10 text-[#184A2C]
             w-11/12 md:w-3/4 lg:w-2/3 max-w-[900px] shadow-xl"
    >

      <!-- Right content -->
      <div class="w-full flex flex-col gap-3 md:gap-4 text-center">
        <h2 class="text-base md:text-2xl font-semibold leading-snug">
          Siap memilih hidangan untuk para tamu?
        </h2>

        <form
          class="flex flex-col md:flex-row items-center gap-2 md:gap-5 mt-2 flex-wrap justify-center"
          @submit.prevent="handleSubmit"
        >
          <!-- Date + time -->
          <div class="flex flex-col text-sm font-medium">
            <label class="flex items-center gap-1.5 mb-1 justify-center md:justify-start">
              <i class="bi bi-calendar-event text-base md:text-lg"></i>
              Pilih tanggal & jam kirim
            </label>
            <div class="flex gap-2 justify-center md:justify-start">
              <input
                type="date"
                v-model="form.date"
                class="rounded-lg px-3 py-2 bg-white text-black font-semibold outline-none text-sm"
              />
              <input
                type="time"
                v-model="form.time"
                step="1800"
                min="08:00"
                max="20:00"
                class="rounded-lg px-3 py-2 bg-white text-black font-semibold outline-none text-sm"
              />
            </div>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="bg-[#2F5D3A] hover:bg-[#244b2e] text-white font-bold px-5 md:px-6 py-2.5 md:py-3 rounded-lg whitespace-nowrap mt-3 md:mt-7 text-sm md:text-base"
          >
            Pesan Sekarang
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css";
</style>
