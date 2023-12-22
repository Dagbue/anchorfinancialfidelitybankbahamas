<template>
  <div class="alpha">
    <about-header/>
    <about-section1/>
    <about-section2/>
    <about-section3/>
    <about-section4/>
    <footer-home/>
  </div>
</template>

<script>


import AboutHeader from "@/components/About/AboutHeader.vue";
import AboutSection1 from "@/components/About/AboutSection1.vue";
import AboutSection2 from "@/components/About/AboutSection2.vue";
import AboutSection3 from "@/components/About/AboutSection3.vue";
import AboutSection4 from "@/components/About/AboutSection4.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: 'AboutView',
  components: {
    FooterHome,
    AboutSection4,
    AboutSection3,
    AboutSection2,
    AboutSection1,
    AboutHeader

  }
}
</script>

<style scoped>

</style>