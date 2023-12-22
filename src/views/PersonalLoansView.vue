<template>
  <div class="alpha">
    <personal-loans-header/>
    <personal-loans-section1/>
    <personal-loans-section2/>
    <personal-loans-section3/>
    <personal-loans-section4/>
    <personal-loans-section5/>
    <personal-loans-section6/>
    <footer-home/>
  </div>
</template>

<script>
import PersonalLoansHeader from "@/components/PersonalLoans/PersonalLoansHeader.vue";
import PersonalLoansSection1 from "@/components/PersonalLoans/PersonalLoansSection1.vue";
import PersonalLoansSection2 from "@/components/PersonalLoans/PersonalLoansSection2.vue";
import PersonalLoansSection3 from "@/components/PersonalLoans/PersonalLoansSection3.vue";
import PersonalLoansSection4 from "@/components/PersonalLoans/PersonalLoansSection4.vue";
import PersonalLoansSection5 from "@/components/PersonalLoans/PersonalLoansSection5.vue";
import PersonalLoansSection6 from "@/components/PersonalLoans/PersonalLoansSection6.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "PersonalLoansView",
  components: {
    FooterHome,
    PersonalLoansSection6,
    PersonalLoansSection5,
    PersonalLoansSection4,
    PersonalLoansSection3, PersonalLoansSection2, PersonalLoansSection1, PersonalLoansHeader}
}
</script>

<style scoped>

</style>