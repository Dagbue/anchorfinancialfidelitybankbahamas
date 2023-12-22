<template>
  <div class="alpha">
    <div class="content-alpha">

      <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-primary circle-icon"></em><em class="fas fa-house fa-stack-1x fa-inverse icon-size"></em></span>

      <p class="text-1">For Today's Mortgage Rates visit our Home Mortgage Site</p>

<!--      <p class="text-2">Create a savings goal or just help organize your finances with Secondary Savings Accounts.</p>-->

      <p class="text-4">See Rates</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLoansSection4"
}
</script>

<style scoped>

.content-alpha{
  /*background-color: #eef7e8;*/
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
  border-radius: 5px;
  /*margin-top: 3%;*/
  padding: 100px 200px;
  text-align: center;
}

.text-1{
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 22px;
  line-height: 1.15;
  margin: 0;
}

.text-2{
  line-height: 1.4;
}

.text-4{
  display: inline-block;
  background-color: #ffffff;
  border: 1px solid #56ad16;
  color: #222222;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #56ad16;
  border: 1px solid #56ad16;
  color: #ffffff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.fa-stack{
  color: #56ad16;
  margin-bottom: 1.5%;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .content-alpha{
    padding: 100px 100px;
  }
  .text-4{
    margin-top: 3%;
  }
}

@media (max-width: 500px) {
  .content-alpha{
    padding: 100px 30px;
  }
}

</style>