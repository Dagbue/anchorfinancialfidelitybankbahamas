<template>
  <div class="alpha">

    <div class="section-1">

      <div class="section-1-inner">
        <p>
          * APY = Annual Percentage Yield. Dividends Compounded: Monthly. Dividends Credited: Monthly.
          Balance Computation Method: Dividends are calculated using the daily balance method. This method applies
          a daily periodic rate to the principal in the account each day. Minimum $1,000 opening balance required.
          Rates subject to change at any time without notice.
        </p>


        <p>* APY = Annual Percentage Yield. Dividends Compounded: Monthly. Dividends Credited: Monthly. Balance
          Computation Method: Dividends are calculated using the daily balance method. This method applies a
          daily periodic rate to the principal in the account each day. Rates subject to change at any time
          without notice.</p>

        <p>Minimum $1,000 opening deposit required. APY is based on the assumption that dividends will remain
          on deposit in the IRA Share Certificate until maturity. Penalty will be imposed for early withdrawal.
          Fees could reduce earnings on the account. You should seek the advice of your own tax advisor with respect
          to your particular circumstances.</p>


      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "IndividualRetirementSection5"
}
</script>

<style scoped>
.section-1{
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  margin-bottom: 2%;
  color: #071333;
}
.header{
  margin-bottom: 1%;
  color: #071333;
}
.section-1-inner p{
  padding-bottom: 10px;
}

@media (max-width: 990px) {
  .section-1{
    width: 92%;
    margin-top: 2%;
    margin-bottom: 2%;
  }
}

@media (max-width: 500px) {

}
</style>