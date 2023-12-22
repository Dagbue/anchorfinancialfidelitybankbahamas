<template>
  <div class="alpha">
    <vehicle-loans-header/>
    <vehicle-loans-section1/>
    <vehicle-loans-section2/>
    <vehicle-loans-section3/>
    <vehicle-loans-section4/>
    <vehicle-loans-section5/>
    <vehicle-loans-section6/>
    <footer-home/>
  </div>
</template>

<script>
import VehicleLoansHeader from "@/components/VehicleLoans/VehicleLoansHeader.vue";
import VehicleLoansSection1 from "@/components/VehicleLoans/VehicleLoansSection1.vue";
import VehicleLoansSection2 from "@/components/VehicleLoans/VehicleLoansSection2.vue";
import VehicleLoansSection3 from "@/components/VehicleLoans/VehicleLoansSection3.vue";
import VehicleLoansSection4 from "@/components/VehicleLoans/VehicleLoansSection4.vue";
import VehicleLoansSection5 from "@/components/VehicleLoans/VehicleLoansSection5.vue";
import VehicleLoansSection6 from "@/components/VehicleLoans/VehicleLoansSection6.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "VehicleLoansView",
  components: {
    FooterHome,
    VehicleLoansSection6,
    VehicleLoansSection5,
    VehicleLoansSection4,
    VehicleLoansSection3, VehicleLoansSection2, VehicleLoansSection1, VehicleLoansHeader}
}
</script>

<style scoped>

</style>