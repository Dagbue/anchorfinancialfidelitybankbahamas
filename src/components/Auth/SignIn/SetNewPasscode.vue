<template>
  <div class="alpha">

    <div class="image" @click="home">
      <img src="@/assets/companylogo.png" alt="inter-switch-logo"  class="logo">
    </div>

    <div class="text-area">
      <h3>Set a new password</h3>
    </div>

    <div class="form-alpha">
      <form @submit.prevent="completeResetPassword">

        <div class="has-addons">
          <input v-if="showPassword" v-model="password"  type="text" class="input-form-1 password" required   placeholder="Create Passcode"/>
          <input v-else v-model="password" type="password"  class="input-form-1  password" required  placeholder="Create Passcode"/>
          <div class="space" @click="toggleShow">
            <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" ></i>
          </div>
        </div>

        <div class="has-addons">
          <input v-if="showPassword2" v-model="confirmPassword"   type="text" class="input-form-1 password"   placeholder="Confirm password"/>
          <input v-else v-model="confirmPassword" type="password"  class="input-form-1  password"   placeholder="Confirm password"/>
          <div class="space" @click="toggleShow2">
            <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>
          </div>
        </div>

        <div class="submit">
          <button :disabled="isLoading" class="button max-width-full w-button">{{ isLoading ? 'Proceeding...' : 'Proceed' }}</button>
        </div>

      </form>
    </div>



  </div>
</template>

<script>
export default {
  name: "SetNewPasscode",
  data(){
    return {
      showPassword: false,
      showPassword2: false,
      password: '',
      confirmPassword: '',
      isLoading: false
    }
  },
  methods:{
    completeResetPassword(){
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push("/passwordResetSuccessful");
        window.scrollTo(0, 0);
        this.isLoading = false;
      }, 5000);
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },
    home(){
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
  },
  computed:{
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    },

    buttonLabel2() {
      return (this.showPassword2) ? "Hide" : "Show";
    }
  },
}
</script>

<style scoped>
.alpha{
  margin-top: 10%;
}

.logo{
  width: 14%;
}
.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #101828;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
}

.text-area{
  margin-bottom: 1%;
}

.form-alpha{
  margin-left: 38%;
  margin-right: 38%;
}

.image{
  display: flex;
  justify-content: center;
  margin-bottom: 0.8%;
}


.input-form-1{
  order: 1;
  width: 100%;
  padding: 13px 20px;
  margin: 15px 0;
}


input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
}

input:focus {
  border: 1px solid #24405A;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
}

button{
  background-color: transparent;
}

.fas{
  font-size: 13px;
  margin-top: 10%;
}

.space{
  padding-top: 8px;
  padding-bottom: 15px;
  padding-right: 15px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
}

.bxs-low-vision{
  padding-left: 5px;
  padding-top: 8px;
  font-size: 13px;
}

.input-form-1.password {
  border-right-style: none;
  border-radius: 8px 0 0 8px;
}


.submit{
  margin-top: 3%;
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
  .form-alpha{
    margin-left: 25%;
    margin-right: 25%;
  }
}

@media (max-width: 700px) {
  .alpha{
    margin-top: 12%;
  }
  .logo{
    width: 40%;
  }
  .form-alpha{
    margin-left: 20%;
    margin-right: 20%;
  }

  .space{
    padding-top: 9px;
    padding-bottom: 12px;
  }
}

@media (max-width: 500px) {

  .logo{
    width: 55%;
  }

  .alpha{
    margin-top: 15%;
  }

  .form-alpha{
    margin-left: 10%;
    margin-right: 10%;
  }

}

</style>