<template>
  <div class="alpha">
    <guides-header/>
    <guides-section1/>
    <guides-section2/>
    <guides-section3/>
    <guides-section4/>
    <guides-section5/>
    <guides-section6/>
    <guides-section7/>
    <guides-section8/>
    <footer-home/>
  </div>
</template>

<script>
import GuidesHeader from "@/components/Guides/GuidesHeader.vue";
import GuidesSection1 from "@/components/Guides/GuidesSection1.vue";
import GuidesSection2 from "@/components/Guides/GuidesSection2.vue";
import GuidesSection3 from "@/components/Guides/GuidesSection3.vue";
import GuidesSection4 from "@/components/Guides/GuidesSection4.vue";
import GuidesSection5 from "@/components/Guides/GuidesSection5.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";
import GuidesSection6 from "@/components/Guides/GuidesSection6.vue";
import GuidesSection7 from "@/components/Guides/GuidesSection7.vue";
import GuidesSection8 from "@/components/Guides/GuidesSection8.vue";

export default {
  name: "GuidesView",
  components: {
    GuidesSection8,
    GuidesSection7,
    GuidesSection6,
    FooterHome, GuidesSection5, GuidesSection4, GuidesSection3, GuidesSection2, GuidesSection1, GuidesHeader}
}
</script>

<style scoped>

</style>