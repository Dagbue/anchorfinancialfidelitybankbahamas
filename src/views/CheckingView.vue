<template>
  <div class="alpha">
    <checking-header/>
    <checking-section1/>
    <checking-section2/>
    <checking-section3/>
    <checking-section4/>
    <checking-section5/>
    <footer-home/>
  </div>
</template>

<script>
import CheckingHeader from "@/components/Checking/CheckingHeader.vue";
import CheckingSection1 from "@/components/Checking/CheckingSection1.vue";
import CheckingSection2 from "@/components/Checking/CheckingSection2.vue";
import CheckingSection3 from "@/components/Checking/CheckingSection3.vue";
import CheckingSection4 from "@/components/Checking/CheckingSection4.vue";
import CheckingSection5 from "@/components/Checking/CheckingSection5.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "CheckingView",
  components: {
    FooterHome,
    CheckingSection5, CheckingSection4, CheckingSection3, CheckingSection2, CheckingSection1, CheckingHeader}
}
</script>

<style scoped>

</style>