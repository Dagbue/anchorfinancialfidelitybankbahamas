<template>
  <div class="alpha">
    <slider-view/>
    <section1/>
    <section2/>
    <section3/>
    <section4/>
    <section5/>
    <section6/>
    <product-card/>
    <footer-text/>
    <br/>
    <br/>
    <footer-home/>
  </div>
</template>

<script>

import SliderView from "@/components/Home/slideshow/sliderView.vue";
import Section1 from "@/components/Home/Section1.vue";
import Section2 from "@/components/Home/Section2.vue";
import Section3 from "@/components/Home/Section3.vue";
import Section4 from "@/components/Home/Section4.vue";
import Section5 from "@/components/Home/Section5.vue";
import Section6 from "@/components/Home/Section6.vue";
import ProductCard from "@/components/Home/productCard.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: 'HomeView',
  components: {
    FooterHome,
    FooterText, ProductCard, Section6, Section5, Section4, Section3, Section2, Section1, SliderView},
}
</script>
