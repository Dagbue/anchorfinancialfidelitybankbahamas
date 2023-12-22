<template>
  <div class="alpha">
    <faq-header/>
    <faq-section1/>
    <footer-home/>
  </div>
</template>

<script>
import FaqHeader from "@/components/Faq/FaqHeader.vue";
import FaqSection1 from "@/components/Faq/FaqSection1.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "FaqView",
  components: {FooterHome, FaqSection1, FaqHeader}
}
</script>

<style scoped>

</style>