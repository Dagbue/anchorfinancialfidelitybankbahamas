<template>
  <div class="alpha">
    <wealth-management-header/>
    <wealth-management-section1/>
    <wealth-management-section2/>
    <wealth-management-section3/>
    <wealth-management-section4/>
    <footer-home/>
  </div>
</template>

<script>
import WealthManagementHeader from "@/components/WealthManagement/WealthManagementHeader.vue";
import WealthManagementSection1 from "@/components/WealthManagement/WealthManagementSection1.vue";
import WealthManagementSection2 from "@/components/WealthManagement/WealthManagementSection2.vue";
import WealthManagementSection3 from "@/components/WealthManagement/WealthManagementSection3.vue";
import WealthManagementSection4 from "@/components/WealthManagement/WealthManagementSection4.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "WealthManagementView",
  components: {
    FooterHome,
    WealthManagementSection4,
    WealthManagementSection3, WealthManagementSection2, WealthManagementSection1, WealthManagementHeader}
}
</script>

<style scoped>

</style>