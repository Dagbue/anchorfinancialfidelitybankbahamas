<template>
  <div class="alpha">
    <savings-header/>
    <savings-section1/>
    <savings-section2/>
    <savings-section3/>
    <savings-section4/>
    <savings-section5/>
    <savings-section6/>
    <footer-home/>
  </div>
</template>

<script>
import SavingsHeader from "@/components/Savings/SavingsHeader.vue";
import SavingsSection1 from "@/components/Savings/SavingsSection1.vue";
import SavingsSection2 from "@/components/Savings/SavingsSection2.vue";
import SavingsSection3 from "@/components/Savings/SavingsSection3.vue";
import SavingsSection4 from "@/components/Savings/SavingsSection4.vue";
import SavingsSection5 from "@/components/Savings/SavingsSection5.vue";
import SavingsSection6 from "@/components/Savings/SavingsSection6.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "SavingsView",
  components: {
    FooterHome,
    SavingsSection6,
    SavingsSection5, SavingsSection4, SavingsSection3, SavingsSection2, SavingsSection1, SavingsHeader}
}
</script>

<style scoped>

</style>