<template>
  <div class="alpha">
    <div class="content-alpha">

      <p class="text-1">You are welcome at AFFBB</p>

      <p class="text-2">If you are interested in opening an account or getting a loan at AFFBB, there are numerous
        options for membership eligibility. That includes if you work (or regularly conduct business in), worship,
        or attend school, or have a business or other legal entity. We love our heritage as Anchor financial fidelity
        bank Bahamas.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section4"
}
</script>

<style scoped>

.content-alpha{
  border: 0.5px solid rgba(15, 46, 109, 0.3);
  box-shadow: 0 0 15px rgba(15, 46, 109, 0.15);
  border-radius: 5px;
  margin: 5.5% 12%;
  padding: 60px 100px;
  text-align: center;
}

.text-1{
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 34px;
  line-height: 1.15;
  margin: 0;
  padding-bottom: 15px;
}

.text-2{
  line-height: 1.4;
  font-size: 17.5px;
}

@media (max-width: 990px) {
  .content-alpha{
    margin: 5% 6%;
    padding: 50px 100px;
  }
  .text-1{
    color: #272727;
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    letter-spacing: normal;
    font-size: 32px;
    line-height: 1.15;
    margin: 0;
    padding-bottom: 15px;
  }
}

@media (max-width: 700px) {
  .content-alpha{
    margin: 5% 5%;
    padding: 40px 40px;
  }
  .text-1{
    font-size: 29px;
    padding-bottom: 15px;
  }

  .text-2{
    line-height: 1.3;
    font-size: 17px;
  }
}

@media (max-width: 500px) {
  .text-1{
    font-size: 26px;
    padding-bottom: 15px;
  }
  .content-alpha{
    padding: 35px 30px;
  }
  .text-2{
    line-height: 1.3;
    font-size: 16px;
  }
}

</style>