<template>
  <div class="alpha">
    <div class="content-alpha">

      <p class="text-1">Not an AFFBB Member? Apply Today!</p>

<!--      <p class="text-2">Create a savings goal or just help organize your finances with Secondary Savings Accounts.</p>-->

      <p class="text-4" @click="onPostClick">Join</p>

    </div>
    <p class="last">Loans subject to credit approval. Rates and terms subject to change without notice. Equal Housing Lender. NMLS # 513263</p>
  </div>
</template>

<script>
export default {
  name: "HomeLoansSection5",
  methods: {
    onPostClick() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>

.content-alpha{
  background-color: #eef7e8;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
  border-radius: 5px;
  padding: 80px 200px;
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
  padding-bottom: 20px;
}

.text-2{
  line-height: 1.4;
}

.text-4{
  display: inline-block;
  background-color: #0f2e6d;
  border: 1px solid #0f2e6d;
  color: #FFFFFF;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #1b54c7;
  border: 1px solid #1b54c7;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.last{
  padding-left: 15px;
  margin-top: 1.2%;
  margin-bottom: 1%;
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