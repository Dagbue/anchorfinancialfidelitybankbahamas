<template>
  <div class="alpha">
    <loan-header/>
    <loan-section1/>
    <br/>
    <br/>
    <footer-home/>
  </div>
</template>

<script>
import LoanHeader from "@/components/Loan/LoanHeader.vue";
import LoanSection1 from "@/components/Loan/LoanSection1.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "LoanView",
  components: {FooterHome, LoanSection1, LoanHeader}
}
</script>

<style scoped>

</style>