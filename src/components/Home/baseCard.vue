<template>
  <div class="product">
    <div class="product-inner">
      <div class="product-text-wrap">
<!--        <img-->
<!--          v-bind:src="require(`../../../assets/${product.image}`)"-->
<!--          height="50"-->
<!--          width="50"-->
<!--          alt="logo"-->
<!--          class="product-logo"-->
<!--        />-->
<!--        <h2 class="text-header">{{ product.title }}</h2>-->
      </div>

      <div class="product-image-wrap">
        <img v-show="this.product.title === 'Feb 1, 2025' " src="@/assets/New-Headquarters.png" class="image" alt="product" />
        <img v-show="this.product.title === 'Oct 6, 2024' " src="@/assets/shred.png" class="image" alt="product" />
        <img v-show="this.product.title === 'Aug 7, 2024' " src="@/assets/ATM-Outage.png" class="image" alt="product" />
        <img v-show="this.product.title === 'Jul 26, 2023' " src="@/assets/atm-header.png" class="image" alt="product" />
      </div>

      <div class="product-detail-alpha">
        <div class="product-detail">
          <p style="color: #2b570b; font-size: 17px">{{ product.title }}</p>
        </div>

        <div class="product-detail">
          <p style="color: #0f2e6d; font-size: 21px; font-weight: bold">{{ product.content }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "baseCard",
  props: ["product"],
  methods: {
    async onPostClick() {
      await this.$router.push("/about");
      await  window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.product {
  /*flex: 1 1 33.333%;*/
  /*width: 100%;*/
  /*padding: 20px;*/
  padding-top: 3.5%;
}



.product-inner {
  /*position: relative;*/
  /*padding: 25px;*/
  /*box-shadow: 0 0 12px rgb(0, 0, 0, 0.2);*/
  /*border-radius: 5px;*/

  background-color: #fff;
  max-width: 100%;
  border: none;
  box-shadow: 0 0.5rem 0.9375rem 0.2rem rgba(28,106,255,.1);
  border-radius: 0.75rem;
  /*padding: 2.5rem 2rem;*/
  width: 310px;
  height: 400px;
  /*text-align: center;*/
}

.product-image-wrap .image {
  width: 100%;
  padding-bottom: 10px;
}

.product-image-wrap h3 {
  color: #313131;
  font-weight: 900;
  opacity: 0.2;
  /*transform-origin: center;*/
}

.product-detail p {
  font-size: 16px;
  line-height: 1.6;
  color: #818a91;
  font-weight: 300;
}

.product-text-wrap h2 {
  font-size: 21px;
  font-weight: 700;
  color: #222222;
  margin-top: 2%;
  /*text-align: center;*/
  padding-bottom: 20px;
}

.product-text-wrap img {
  margin-left: 38%;
  opacity: 70%;
}

.product-text-wrap {
  display: flex;
  flex-direction: column;
}

.product-detail-alpha{
  padding: 0 1rem;
}

.text-header {
  letter-spacing: 1px;
}


img{
  border-radius: 5px;
}

@media (max-width: 990px) {
  .product-inner {
    display: block;
    margin-right: auto;
    margin-left: auto;

  }

}


@media (max-width: 800px) {
  .product {
    padding: 15px;
  }


  .product-inner {
    padding: unset;
  }
}

@media (max-width: 700px){
  .product {
    padding: unset;
    margin-bottom: 20px;
  }
  .product-text-wrap h2 {
    font-size: 25px;
  }
  .product-detail p {
    font-size: 17px;
  }
  .product-image-wrap .image {
    width: 100%;
    padding-bottom: 10px;
    /*margin-left: 10px;*/
  }
  .product-inner {
    padding: unset;
  }
  .product-text-wrap h2 {
    font-size: 18.5px;
  }
}


</style>
