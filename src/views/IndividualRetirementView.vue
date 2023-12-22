<template>
  <div class="alpha">
    <individual-retirement-header/>
    <individual-retirement-section1/>
    <individual-retirement-section2/>
    <individual-retirement-section3/>
    <individual-retirement-section4/>
    <individual-retirement-section5/>
    <footer-home/>
  </div>
</template>

<script>
import IndividualRetirementHeader from "@/components/IndividualRetirement/IndividualRetirementHeader.vue";
import IndividualRetirementSection1 from "@/components/IndividualRetirement/IndividualRetirementSection1.vue";
import IndividualRetirementSection2 from "@/components/IndividualRetirement/IndividualRetirementSection2.vue";
import IndividualRetirementSection3 from "@/components/IndividualRetirement/IndividualRetirementSection3.vue";
import IndividualRetirementSection4 from "@/components/IndividualRetirement/IndividualRetirementSection4.vue";
import IndividualRetirementSection5 from "@/components/IndividualRetirement/IndividualRetirementSection5.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "IndividualRetirementView",
  components: {
    FooterHome,
    IndividualRetirementSection5,
    IndividualRetirementSection4,
    IndividualRetirementSection3,
    IndividualRetirementSection2,
    IndividualRetirementSection1,
    IndividualRetirementHeader
  }
}
</script>

<style scoped>

</style>