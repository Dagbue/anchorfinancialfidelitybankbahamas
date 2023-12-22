<template>
  <div class="alpha">
    <home-loans-header/>
    <home-loans-section1/>
    <home-loans-section2/>
    <home-loans-section3/>
    <home-loans-section4/>
    <home-loans-section5/>
    <footer-home/>
  </div>
</template>

<script>
import HomeLoansHeader from "@/components/HomeLoans/HomeLoansHeader.vue";
import HomeLoansSection1 from "@/components/HomeLoans/HomeLoansSection1.vue";
import HomeLoansSection2 from "@/components/HomeLoans/HomeLoansSection2.vue";
import HomeLoansSection3 from "@/components/HomeLoans/HomeLoansSection3.vue";
import HomeLoansSection4 from "@/components/HomeLoans/HomeLoansSection4.vue";
import HomeLoansSection5 from "@/components/HomeLoans/HomeLoansSection5.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "HomeLoansView",
  components: {
    FooterHome,
    HomeLoansSection5,
    HomeLoansSection4, HomeLoansSection3, HomeLoansSection2, HomeLoansSection1, HomeLoansHeader}
}
</script>

<style scoped>

</style>