<template>
  <section id="ActionsCard" class="alpha">

    <info-confirm-payment-modal @close="hideDialog2" v-if="dialogIsVisible2"/>
<!--    <info2-confirm-payment-modal @close="hideDialog3" v-if="dialogIsVisible3"/>-->


    <div class="section-1">

      <div class="section-2" @click="topUp">
        <img src="@/assets/images/plus-1_1plus 1.png" loading="lazy" width="20" alt="" >
        <p class="action-button-text">Deposit</p>
      </div>

      <div class="section-2" @click="showDialog2">
        <img src="@/assets/images/transfer_1transfer.png" loading="lazy" width="20" alt="" >
        <p class="action-button-text">Transfer</p>
      </div>


      <div class="section-2" @click="showDialog2" >
        <img src="@/assets/images/coin_1coin.png" loading="lazy" width="20" alt="" >
        <p class="action-button-text">Bill Pay</p>
      </div>

    </div>


  </section>
</template>

<script>
import InfoConfirmPaymentModal from "@/components/Modals/InfoConfirmPaymentModal.vue";

export default {
  name: "ActionsCard",
  components: {InfoConfirmPaymentModal},
  // components: {Info2ConfirmPaymentModal, InfoConfirmPaymentModal},
  data() {
    return {
      dialogIsVisible2: false,
      dialogIsVisible3: false,
    };
  },
  methods:{
    topUp(){
      this.$router.push("/fundWalletView");
      window.scrollTo(0, 0);
    },

    transfer(){
      this.$router.push("/sendMoneyView");
      window.scrollTo(0, 0);
    },

    convert(){
      this.$router.push("/");
      window.scrollTo(0, 0);
    },

    hideDialog2() {
      this.dialogIsVisible2 = false;
    },
    showDialog2() {
      this.dialogIsVisible2 = true;
    },
    hideDialog3() {
      this.dialogIsVisible3 = false;
    },
    showDialog3() {
      this.dialogIsVisible3 = true;
    },
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.alpha{
  position: relative;
}

.section-1{
  position: absolute;
  display: flex;
  justify-content: space-between;
  border: 1px solid #eaecf0;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10%;
  padding-right: 3%;
  top: 50%;
  left: 50%;
  margin: -32px 0 0 -238px;
}

.section-2{
  display: flex;
  justify-content: center;
}

.section-2 p {
  margin-left: 20px;
  margin-right: 45px;
  cursor: pointer;
}


@media screen and (max-width: 800px){
  .section-2 p {
    margin-left: 19.5px;
    margin-right: 40px;
  }
  .section-1{
    margin: -32px 0 0 -219px;
  }
}

@media screen and (max-width: 796px){
  .section-2 p {
    margin-left: 19px;
    margin-right: 40px;
  }
}

@media screen and (max-width: 628px){
  .section-2 p {
    margin-left: 18px;
    margin-right: 40px;
  }
}

@media screen and (max-width: 617px){
  .section-2 p {
    margin-left: 17.5px;
    margin-right: 40px;
  }
}

@media screen and (max-width: 612px){
  .section-2 p {
    margin-left: 17.3px;
    margin-right: 40px;
  }
}

@media screen and (max-width: 580px){
  .section-2 p {
    margin-left: 15px;
    margin-right: 38px;
  }
  .section-1{
    padding-left: 9%;
    padding-right: 2%;
    margin: -32px 0 0 -209px;
  }
}

@media screen and (max-width: 568px){
  .section-2 p {
    margin-right: 35px;
  }
  .section-1{
    padding-left: 8%;
    padding-right: 2%;
    margin: -32px 0 0 -204px;
  }
}

@media screen and (max-width: 539px){
  .section-2 p {
    margin-right: 33px;
  }
  .section-1{
    margin: -32px 0 0 -199px;
  }
}

@media screen and (max-width: 536px){
  .section-2 p {
    margin-right: 30px;
  }
  .section-1{
    margin: -32px 0 0 -194px;
  }
}

@media screen and (max-width: 525px){
  .section-2 p {
    margin-right: 28px;
  }
  .section-1{
    margin: -32px 0 0 -189px;
  }
}

@media screen and (max-width: 519px){
  .section-2 p {
    margin-right: 25px;
  }
  .section-1{
    margin: -32px 0 0 -184px;
  }
}

@media screen and (max-width: 506px){
  .section-2 p {
    margin-right: 24px;
  }
  .section-1{
    margin: -32px 0 0 -184px;
  }
}

@media screen and (max-width: 498px){
  .section-2 p {
    margin-right: 22px;
  }
  .section-1{
    margin: -32px 0 0 -179px;
  }
}

@media screen and (max-width: 496px){
  .section-2 p {
    margin-right: 21px;
  }
  .section-1{
    margin: -32px 0 0 -177px;
  }
}

@media screen and (max-width: 491px){
  .section-2 p {
    margin-right: 20.5px;
  }
  .section-1{
    margin: -32px 0 0 -177px;
  }
}

@media screen and (max-width: 488px){
  .section-2 p {
    margin-right: 20px;
  }
}

@media screen and (max-width: 482px){
  .section-2 p {
    margin-right: 19px;
  }
  .section-1{
    margin: -32px 0 0 -175px;
  }
}

@media screen and (max-width: 476px){
  .section-2 p {
    margin-right: 22px;
  }
  .section-1{
    margin: -32px 0 0 -166px;
  }
}

@media screen and (max-width: 463px){
  .section-2 p {
    margin-right: 20px;
  }
}

@media screen and (max-width: 451px){
  .section-2 p {
    margin-right: 18px;
    margin-left: 10px;
  }
}

@media screen and (max-width: 431px){
  .section-2 p {
    margin-right: 12px;
    margin-left: 10px;
  }
  .section-1{
    margin: -32px 0 0 -151px;
  }
}

@media screen and (max-width: 415px){
  .section-2 p {
    margin-right: 11px;
    margin-left: 10px;
  }
  .section-1{
    margin: -32px 0 0 -151px;
  }
}

@media screen and (max-width: 404px){
  .section-2 p {
    margin-right: 9px;
    margin-left: 10px;
  }
  .section-1{
    margin: -32px 0 0 -139px;
  }
}

@media screen and (max-width: 376px){
  .section-2 p {
    margin-right: 7px;
    margin-left: 8px;
  }
  .section-1{
    margin: -32px 0 0 -131px;
  }
}

@media screen and (max-width: 362px){
  .section-2 p {
    margin-right: 6px;
    margin-left: 7px;
  }
  .section-1{
    margin: -32px 0 0 -129px;
  }
}

@media screen and (max-width: 348px){
  .section-2 p {
    margin-right: 5px;
    margin-left: 6px;
  }
  .section-1{
    margin: -32px 0 0 -124px;
  }
}


</style>