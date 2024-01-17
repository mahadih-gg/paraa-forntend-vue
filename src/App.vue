<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import CadsePage from './pages/CadsePage.vue';

</script>

<template>
  <Navbar isOpenSideBar="false" />

  <header>
    <CadsePage />
  </header>

  <Footer />
</template>

<style scoped></style>
