<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">
        <!--        <p class="text-1">-->
        <!--          FEEL RIGHT AT HOME-->
        <!--        </p>-->
        <p class="text-2">
          Free, Fast, and Safe
        </p>
        <br/>
        <p class="text-3">Are you still getting paper checks? Direct deposit is a free electronic transfer service
          that sends your paycheck or benefits check to your AFFBB account. It provides access to your money up to
          one day early1 and eliminates the chance of your check being lost, delayed or stolen. You can even split
          your direct deposit between your accounts.</p>
        <br/>
        <p class="text-2">
          How to Enroll in Direct Deposit
        </p>
        <br/>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Contact your company’s Human Resources or Payroll Department for a printed or online direct
            deposit form.</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">For Social Security, VA or other federal benefits, sign up for direct deposit at
            www.anchorfinancialfidelitybankbahamas.com or call (242) 366-7764.</p>
        </div>

        <p class="text-2">
          If Your Company Does Not Have a Direct Deposit Procedure
        </p>
        <br/>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Download this Direct Deposit Request Form</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Complete, sign, and submit the form to your employer</p>
        </div>
      </div>

      <div class="content-2">
        <img src="@/assets/Older-man-writing.jpeg" alt="section-1-image" class="image"/>
        <br/>
        <div style="margin-left: 4.5%">
        <p class="text-2">
          Required Information
        </p>
        <br/>
          <div class="lawrence">
            <em class="fas fa-caret-right"></em>
            <p class="text-3">
              Your Social Security Number
            </p>
          </div>
          <div class="lawrence">
            <em class="fas fa-caret-right"></em>
            <p class="text-3">The AFFBB Swift Code: AFFBBAHBSN1</p>
          </div>
          <div class="lawrence">
            <em class="fas fa-caret-right"></em>
            <p class="text-3">Your AFFBB Account Number(s) and type (Checking or Savings)</p>
          </div>
          <div class="lawrence">
            <em class="fas fa-caret-right"></em>
            <p class="text-3">You may be asked for a blank, VOIDED check. If you do not have one you can obtain a blank
              counter (temporary) check at any AFFBB Financial Center location.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "GuidesSection7"
}
</script>

<style scoped>

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 3%;
  padding-top: 4.3%;
}

.content-1{
  width: 50%;
}

.content-2{
  width: 50%;
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
  font-weight: 900;
  letter-spacing: normal;
  font-size: 26px;
  line-height: 1.1;
  margin: 0;
  width: 90%;
}

.text-3{
  font-size: 18.5px;
  font-weight: normal;
  line-height: 1.3;
  margin: 0;
  width: 83%;
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

.fa-caret-right{
  font-size: 1.5rem;
  color: #56ad16;
  padding-top: 0.2rem;
  padding-right: 10px;
}

.lawrence{
  display: flex;
  align-content: center;
  align-items: center;
  padding-bottom: 2%;
}


@media (max-width: 990px) {
  .text-1{
    line-height: 1.4;
  }

  .text-2{
    line-height: 1.2;
  }

  .text-3{
    line-height: 1.4;
  }

  .text-4{
    padding: 9px 30px;
    margin-top: unset;
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

  .text-1{
    text-align: center;
    margin-bottom: 1%;
    margin-top: 2%;
  }

  .text-2{
    text-align: center;
    margin-bottom: 1%;
    margin-top: 1%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .content-2{
    width: 100%;
    text-align: center;
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

  .fa-caret-right{
    display: none;
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
    font-size: 32px;
  }

  .content-1{
    width: 100%;
  }

  .content-2{
    width: 100%;
  }

}
</style>