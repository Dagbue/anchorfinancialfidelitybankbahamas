<template>
  <div>

      <h1  class="products-header">Recent Blog Articles & News</h1>
    <br/>

    <div class="products">
      <base-card
          v-for="product in products"
          :key="product.title"
          :product="product"
      />
    </div>

    <p class="text-4" @click="onPostClick">
      Explore Digital Banking
    </p>

  </div>
</template>

<script>
// import { ref } from "vue";
import BaseCard from "@/components/Home/baseCard.vue";
export default {
  name: "productCard",
  components: {
    BaseCard,
  },
  data() {
    return {
      products: [
        {
          title: "Nov 1, 2023",
          content:"Trinity Plaza will become AFFBB’s new Corporate Headquarters",
          src: "https://goaffcu.com/images/default-source/approved-images/new-headquarters-renovation.png?sfvrsn=970b66f_1",
          image: "Granddad.png",
        },
        {
          title: "Oct 6, 2023",
          content:"Shred Day 2023",
          src: "https://goaffcu.com/images/default-source/approved-images/shred-day-web-banner.png?sfvrsn=dab6d8df_1",
          image: "Risk.png",
        },
        {
          title: "Aug 7, 2023",
          content:"Fraud Prevention: Are You Protected?",
          src: "https://goaffcu.com/images/default-source/approved-images/0807-blogpostheader-webbanner-v6.jpg?sfvrsn=bd020fae_1",
          image: "budget.png",
        },
        {
          title: "Jul 26, 2023",
          content:"Stuff The Bus 2023",
          src: "https://goaffcu.com/images/default-source/blog-images/woman-purchases-book-with-affcu-card-.jpg?sfvrsn=ffc682e3_1",
          image: "budget.png",
        },
      ],
    };
  },
  methods: {
    onPostClick() {
      window.scrollTo(0, 0);
      this.$router.push("/signUpEmail");
    },
  },
};
</script>

<style scoped>
.products {
  display: flex;
  justify-content: space-evenly;
  /*!*max-width: 1280px;*!*/
  /*width: 95%;*/
  /*padding: 25px;*/
  /*margin: 0 auto;*/
  margin-bottom: 4%;
}

.products-header {
  font-size: 34px;
  line-height: 1.15;
  margin: 0;
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  text-align: center;
  padding-top: 3rem !important;
}
.text-4{
  display: block;
  width: 20%;
  margin-right: auto;
  margin-left: auto;
  background-color: #56ad16;
  border: 1.8px solid #56ad16;
  color: #000;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 4%;
  font-weight: bold;
}

.text-4:hover{
  background-color: #88e742;
  border: 1.8px solid #88e742;
  color: #000;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

@media (max-width: 990px) {
  .products-header{
    font-size: 29px;
    margin-bottom: 0;
  }
  .products {
    display: block;
    justify-content: center;
  }
  .text-4{
    display: block;
    width: 32%;
    margin-right: auto;
    margin-left: auto;
    background-color: #56ad16;
    border: 1.8px solid #56ad16;
    color: #000;
    padding: 10px 30px;
    border-radius: 5px;
    margin-top: 3%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 4%;
    font-weight: bold;
  }
}

@media (max-width: 800px) {
  .products-header{
    font-size: 25px;
    margin-bottom: 0;
  }
}

@media (max-width: 500px) {
  .text-4 {
    display: block;
    width: 60%;
  }
}

</style>
