<template>
  <div class="alpha">
    <resources-header/>
    <resources-section1/>
    <resources-section2/>
    <resources-section3/>
    <resources-section4/>
    <resources-section5/>
    <footer-home/>
  </div>
</template>

<script>
import ResourcesHeader from "@/components/Resources/ResourcesHeader.vue";
import ResourcesSection1 from "@/components/Resources/ResourcesSection1.vue";
import ResourcesSection2 from "@/components/Resources/ResourcesSection2.vue";
import ResourcesSection3 from "@/components/Resources/ResourcesSection3.vue";
import ResourcesSection4 from "@/components/Resources/ResourcesSection4.vue";
import ResourcesSection5 from "@/components/Resources/ResourcesSection5.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "ResourcesView",
  components: {
    FooterHome,
    ResourcesSection5,
    ResourcesSection4, ResourcesSection3, ResourcesSection2, ResourcesSection1, ResourcesHeader}
}
</script>

<style scoped>

</style>