<template>
  <div class="alpha">
    <youth-header/>
    <youth-section1/>
    <youth-section2/>
    <youth-section3/>
    <savings-section4/>
    <youth-section4/>
    <youth-section5/>
    <footer-home/>
  </div>
</template>

<script>
import YouthHeader from "@/components/YouthStudent/YouthHeader.vue";
import YouthSection1 from "@/components/YouthStudent/YouthSection1.vue";
import YouthSection2 from "@/components/YouthStudent/YouthSection2.vue";
import YouthSection3 from "@/components/YouthStudent/YouthSection3.vue";
import SavingsSection4 from "@/components/Savings/SavingsSection4.vue";
import YouthSection4 from "@/components/YouthStudent/YouthSection4.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";
import YouthSection5 from "@/components/YouthStudent/YouthSection5.vue";

export default {
  name: "YouthStudentView",
  components: {
    YouthSection5,
    FooterHome, YouthSection4, SavingsSection4, YouthSection3, YouthSection2, YouthSection1, YouthHeader}
}
</script>

<style scoped>

</style>