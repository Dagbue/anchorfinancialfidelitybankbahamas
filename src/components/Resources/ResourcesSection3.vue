<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">
        <!--        <p class="text-1">-->
        <!--          FEEL RIGHT AT HOME-->
        <!--        </p>-->
        <p class="text-2">
          How to Protect Yourself
        </p>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">
            Only enter personal information when you’re on a secure website. Always look for a “lock” on the browser
            or “https” at the beginning of the website address to ensure the site is secure.</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Create strong passwords for all of your online logins.</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Review your credit report once a year.</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Check your monthly statements to verify all transactions and notify your financial
            institution of any suspicious transactions.</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Tear up or shred all sensitive documents before disposing of them.</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Update anti-virus software and security patches to your devices regularly.</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Do not open emails or text messages if you don’t recognize the sender’s name or click on
            a link in a message from someone you don’t know.</p>
        </div>
        <div class="lawrence">
          <em class="fas fa-caret-right"></em>
          <p class="text-3">Never provide your account details or personal information to anyone via telephone, text
            message, or email. Call or visit your financial institution to verify any unusual requests.</p>
        </div>

      </div>

      <div class="content-2">
        <img src="@/assets/worried-man-using-android-phone.jpeg" alt="section-1-image" class="image"/>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesSection3"
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
  margin-bottom: 1%;
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
    line-height: 1.3;
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
    display: flex;
    flex-direction: column-reverse;
  }

  .content-1{
    width: 100%;
    text-align: center;
  }

  .content-2{
    width: 100%;
  }

  .text-1{
    text-align: center;
    margin-top: 2%;
    margin-bottom: 1%;
  }

  .text-2{
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-bottom: 1%;
    margin-top: 1%;
  }

  .text-3{
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .fa-caret-right{
    display: none;
  }

}

@media (max-width: 500px) {

}

</style>