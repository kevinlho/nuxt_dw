<script setup lang="ts">
import AppFooter from '~/components/footer/AppFooter.vue';
import AppHeader from '~/components/header/AppHeader.vue';
import AboutUs from '~/views/AboutUs.vue';
import EducationServices from '~/views/EducationServices.vue';
import ITServices from '~/views/ITServices.vue';
import LandingScreen from '~/views/LandingScreen.vue';
import Partners from '~/views/Partners.vue';
</script>

<template>
  <AppHeader />
  <LandingScreen />
  <Partners/>
  <AboutUs/>
  <ITServices/>
  <EducationServices/>
  <AppFooter/>
</template>
