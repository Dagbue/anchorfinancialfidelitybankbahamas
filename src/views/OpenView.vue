<template>
  <div class="alpha">
    <open-header/>
    <open-section1/>
    <br/>
    <br/>
    <footer-home/>
  </div>
</template>

<script>
import OpenHeader from "@/components/Open/OpenHeader.vue";
import OpenSection1 from "@/components/Open/OpenSection1.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "OpenView",
  components: {FooterHome, OpenSection1, OpenHeader}
}
</script>

<style scoped>

</style>