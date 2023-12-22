<template>
  <div class="alpha">

    <div class="image" @click="home">
      <img src="@/assets/companylogo.png" alt="inter-switch-logo"  class="logo">
    </div>

    <div class="text-area">
      <h3>Verify email address</h3>
      <p>Enter OTP sent to Email </p>
    </div>

    <div class="form-alpha">
      <form @submit.prevent="completeResetPassword">

        <div class="pin-code" ref="pinContainer">
          <input type="number" autofocus v-model="pins[0]" maxlength="1" @keyup="handleKeyUp($event, 0)" @keydown="handleKeyDown($event, 0)" required="required">
          <input type="number" v-model="pins[1]" maxlength="1" @keyup="handleKeyUp($event, 1)" @keydown="handleKeyDown($event, 1)" required="required">
          <input type="number" v-model="pins[2]" maxlength="1" @keyup="handleKeyUp($event, 2)" @keydown="handleKeyDown($event, 2)" required="required">
          <input type="number" v-model="pins[3]" maxlength="1" @keyup="handleKeyUp($event, 3)" @keydown="handleKeyDown($event, 3)" required="required">
          <input type="number" v-model="pins[4]" maxlength="1" @keyup="handleKeyUp($event, 2)" @keydown="handleKeyDown($event, 4)" required="required">
          <input type="number" v-model="pins[5]" maxlength="1" @keyup="handleKeyUp($event, 3)" @keydown="handleKeyDown($event, 5)" required="required">
        </div>

        <div class="submit">

          <button class="button max-width-full w-button">Verify</button>

        </div>

      </form>
    </div>

    <div class="last-text">
      <p>Didn’t get a code? <span @click="resendOtp">Resend OTP</span></p>
    </div>

  </div>
</template>

<script>
export default {
  name: "ForgotPasscodeVerifyEmail",
  data() {
    return {
      pins: [],
    };
  },
  computed:{
  },
  methods: {
    completeResetPassword(){
      this.$router.push("/setNewPassword");
      window.scrollTo(0, 0);
    },
    resendOtp(){
      // StoreUtils.dispatch(StoreUtils.actions.auth.resendOtp, {
      //   userEmail: this.signInFormData.userEmail,
      // })
    },

    handleKeyUp(event) {
      const target = event.target;

      const maxLength = parseInt(target.attributes.maxlength.value, 10);
      const myLength = target.value.length;

      if (myLength >= maxLength) {
        const next = target.nextElementSibling;
        if (next && next.tagName.toLowerCase() === 'input') {
          next.focus();
        }
      }

      if (myLength === 0) {
        const prev = target.previousElementSibling;
        if (prev && prev.tagName.toLowerCase() === 'input') {
          prev.focus();
        }
      }

      this.$emit('input', this.pins.join(''));
    },

    handleKeyDown(event) {
      const target = event.target;
      target.value = '';
    },

    home(){
      this.$router.push("/");
      window.scrollTo(0, 0);
    },

  },
}
</script>

<style scoped>
.alpha{
  margin-top: 12%;
}

.logo{
  width: 13%;
}

.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #101828;
  font-weight: 600;
  font-size: 22px;
  line-height: 38px;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #667085;
  font-weight: 400;
  font-size: 14px;
}

.text-area{
  margin-bottom: 1%;
}


.image{
  display: flex;
  justify-content: center;
  margin-bottom: 0.8%;
}

.submit{
  margin-right: 38.5%;
  margin-left: 38.5%;
}

.last-text{
  margin-top: 1.5%;
  text-align: center;
  color: #667085;
}

span{
  color: #0f2e6d;
}

span:hover{
  text-decoration: underline;
}


.pin-code{
  padding: 0;
  display: flex;
  justify-content:space-evenly;
  margin-bottom: 2%;
  margin-top: 2%;
  margin-left: 38%;
  margin-right: 38%;
}

.pin-code input {
  border: 1px solid #D0D5DD;
  text-align: center;
  width: 48px;
  height:48px;
  font-size: 36px;
  background-color: #F3F3F3;
  margin-right:5px;
  border-radius: 6px;
  color: #0f2e6d;
}



.pin-code input:focus {
  border: 1px solid #0f2e6d;
  outline:none;
  color: #0f2e6d;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #0f2e6d;
  border: #0f2e6d;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}
input.w-button {
  -webkit-appearance: button;
}

.max-width-full {
  position: static;
  top: 89%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: none;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 45px;
  padding: 5px 1rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 6px;
  background-color: #0f2e6d;
  color: #fff;
  letter-spacing: 0.4px;
  text-align: center;
  transition: 0.3s;
}

.button:hover{
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.7);
}


@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    margin-top: 12%;
  }
  .logo{
    width: 40%;
  }
  .pin-code{
    margin-left: 30%;
    margin-right: 30%;
  }

  .submit{
    margin-right: 23%;
    margin-left: 23%;
  }
}

@media (max-width: 500px) {

  .logo{
    width: 55%;
  }

  .alpha{
    margin-top: 15%;
  }



}
</style>