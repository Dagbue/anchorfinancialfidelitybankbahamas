<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">


        <img src="@/assets/two-men-at-restaurant-on-cell-phones-.jpg" alt="section-1-image" class="image"/>

      </div>

      <div class="content-2">
        <!--        <p class="text-1">-->
        <!--          NEW, USED, OR REFINANCE-->
        <!--        </p>-->
        <p class="text-2">
          About Traditional IRAs
        </p>
        <p class="text-3">
          A Traditional IRA is a retirement savings plan that allows you to make tax-deductible contributions.
          And, your earnings are tax-deferred until you withdraw the funds. Start small with as little as $1,000 and
          build up your balance with regular deposits.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "IndividualRetirementSection1"
}
</script>

<style scoped>

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  /*margin-right: 3%;*/
  padding-top: 4.3%;
}

.content-1{
  width: 50%;
}

.content-2{
  width: 50%;
  padding-left: 3%;
}

.image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.text-1{
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 1.6px;
  text-align: left;
  text-transform: uppercase;
  color: #3c790f !important;
  vertical-align: middle;
}

.text-2{
  color: #0f2e6d;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  /*letter-spacing: normal;*/
  font-size: 33px;
  line-height: 1.5;
  margin: 0;
}

.text-3{
  font-size: 18.5px;
  font-weight: normal;
  line-height: 1.5;
  margin: 0;
  width: 86%;
}

.text-4{
  display: inline-block;
  background-color: #ffffff;
  border: 1.8px solid #0f2e6d;
  color: #0f2e6d;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #0f2e6d;
  border: 1.8px solid #0f2e6d;
  color: #ffffff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


@media (max-width: 990px) {
  .text-1{
    line-height: 1.4;
  }

  .text-2{
    line-height: 1.3;
  }

  .text-3{
    line-height: 1.4;
  }

  .text-4{
    padding: 9px 30px;
    margin-top: 2%;
  }
}

@media (max-width: 700px) {

  .content-alpha{
    display: block;
    margin-left: unset;
    margin-right: unset;
  }

  .content-1{
    width: 100%;
    text-align: center;
  }

  .text-2{
    text-align: center;
    margin-bottom: 1%;
    margin-top: 1%;
  }

  .content-2{
    width: 100%;
  }

  .text-3{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .text-4{
    margin-bottom: 3%;
    padding: 10px 40px;
  }

}

@media (max-width: 500px) {
  .image{
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    font-size: 31.5px;
  }

  .content-1{
    width: 100%;
  }

  .content-2{
    width: 100%;
  }

}
</style>