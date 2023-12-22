<template>
  <div class="alpha">

    <div class="image" @click="home">
      <img src="@/assets/companylogo.png" alt="inter-switch-logo"  class="logo">
    </div>

    <div class="text-area">
      <h2>Confirm Your Identity</h2>
      <p>The following information is used to verify you have an account with Anchor financial fidelity bank Bahamas and
        that you are the owner of the account. We match your answers against our records.</p>
    </div>

    <div class="form-alpha">
      <form @submit.prevent="next">

        <div class="input-form-2">
                    <label>Account/Member Number</label>
          <input type="text"  placeholder="Account/Member Number" class="input-form-1" required="required"/>
          <!--          <input type="text"  placeholder="Last name"   class="input-form" required="required"/>-->
        </div>

        <div class="input-form-2">
                    <label>SSN/TaxID</label>
          <input type="text"  placeholder="SSN/TaxID"  class="input-form-1" required="required"/>
        </div>

        <div  class="input-form-2">
                    <label>D.O.B</label>
          <input type="datetime-local"  placeholder="D.O.B"  class="input-form-1" required="required"/>
        </div>

        <div class="input-form-2">
                    <label>Zip Code</label>
          <input type="text"  placeholder="Zip Code"  class="input-form-1" required="required"/>
        </div>

        <div class="input-form-2">
                    <label>Valid ID (front)</label>
          <input type="file"  placeholder=""  class="input-form-1" required="required"/>
        </div>

        <div class="input-form-2">
          <label>Valid ID (back)</label>
          <input type="file"  placeholder=""  class="input-form-1" required="required"/>
        </div>

<!--        <div class="has-addons">-->
<!--          &lt;!&ndash;          <label>Create Passcode</label>&ndash;&gt;-->
<!--          <input @input="validatePassword" v-if="showPassword" v-model="userPassword"   type="text" class="input-form-1 password"   placeholder="Create Passcode" />-->
<!--          <input @input="validatePassword" v-else type="password" v-model="userPassword"  class="input-form-1  password"  placeholder="Create Passcode"   >-->
<!--          <div class="space" @click="toggleShow">-->
<!--            <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" ></i>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div v-if="passwordErrors.length" class="error-messages">-->
<!--          <ul>-->
<!--            <li v-for="error in passwordErrors" :key="error">{{ error }}</li>-->
<!--          </ul>-->
<!--        </div>-->

<!--        <div class="has-addons">-->
<!--          &lt;!&ndash;          <label>Confirm Passcode</label>&ndash;&gt;-->
<!--          <input @input="validatePassword" v-if="showPassword2"  type="text" class="input-form-1 password"   placeholder="Confirm password"   />-->
<!--          <input @input="validatePassword" v-else type="password"   class="input-form-1  password"   placeholder="Confirm password"   >-->
<!--          <div class="space" @click="toggleShow2">-->
<!--            <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>-->
<!--          </div>-->
<!--        </div>-->



<!--        <div class="checkbox-part">-->
<!--          <input type="checkbox"  class="checkbox" required="required"/>-->
<!--          <p class="checkbox-text">By signing up, you agree to the Terms of Service<br/>-->
<!--            and Data Processing Agreement.</p>-->
<!--        </div>-->

        <div class="submit">
          <button class="button max-width-full w-button">Submit</button>
        </div>

      </form>
    </div>

    <div class="last-text">
      <p>Already have an account? <span @click="logIn">Login</span></p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CreateAccountDetails",
  data(){
    return {
      showPassword: false,
      showPassword2: false,
      country: "",
      userPassword: "",
      passwordErrors: [],
    }
  },
  methods:{
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },



    initiateEnrollment(event){
      this.validatePassword();
      if (this.passwordErrors.length > 0) {
        event.preventDefault(); // Prevent form submission
        // eslint-disable-next-line no-undef
        swal('Error', 'Please fix the errors with the password before submitting again.', 'error')
      } else {
        // StoreUtils.dispatch(StoreUtils.actions.auth.initiateEnrollment, this.model)
        // StoreUtils.commit(StoreUtils.mutations.auth.updateSignUpFormData, {
        //   userEmail: this.model.userEmail,
        //   userFullName: this.model.userFullName,
        //   userPassword: this.model.userPassword,
        // })
        this.$router.push("/verifyEmailAddress");
        window.scrollTo(0, 0);
      }
    },

    next(){
      this.$router.push("/verifyEmailAddress");
      window.scrollTo(0, 0);
    },

    logIn(){
      this.$router.push("/loginWithEmail");
      window.scrollTo(0, 0);
    },

    validatePassword() {
      this.passwordErrors = [];
      if (this.userPassword  === '') {
        this.passwordErrors.push("Password is required.");
      }
      if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!&])[A-Za-z\d@$!&]{8,15}$/.test(this.userPassword)) {
        this.passwordErrors.push("Password must meet the following criteria:");
        this.passwordErrors.push("- It should be alphanumeric.");
        this.passwordErrors.push("- The first letter should be capitalized.");
        this.passwordErrors.push("- It must contain a special character (@, $, !, & etc).");
        this.passwordErrors.push("- It should be at least 8 characters long.");
      }
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
  }
}
</script>

<style scoped>
.alpha{
  margin-top: 1.8%;
}

.logo{
  width: 13%;
}

.text-area h2{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #222222;
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
}

.text-area p{
  width: 38%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #667085;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}

.text-area{
  /*margin-bottom: 0.3%;*/
}

.form-alpha{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.image{
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.input-form-2{
  margin-top: 2%;
  display: block;
  /*justify-content: center;*/
}

.input-form{
  margin-right: 15px;
  margin-left: 15px;
  padding-left: 15px;
}

.input-form-1{
  order: 1;
  width: 100%;
  padding: 12px 10px;
  /*margin: 8px 0;*/
  display: inline-block;
  box-sizing: border-box;
}

.input-form-3{
  order: 1;
  width: 100%;
  padding: 12px 10px;
  /*margin: 8px 0;*/
  display: inline-block;
  box-sizing: border-box;
}

select{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}

select:focus {
  border: 1px solid #0f2e6d;
}

option{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}


input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}

label{
  color: #667085;
  font-size: 14px;
}

input:focus {
  border: 1px solid #0f2e6d;
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


button{
  background-color: transparent;
}

.checkbox-part{
  display: flex;
  justify-content: center;
  margin-top: 3.5%;
  margin-bottom: 3.5%;
}
.checkbox{
  margin-right: 10px;
}
.checkbox-text{
  font-size: 14px;
  color: #667085;
  padding-top: 1%;
  padding-bottom: 1%;
}

.submit{
  margin-top: 5%;
}


.last-text{
  margin-top: 1%;
  text-align: center;
  color: #667085;
}

span{
  color: #0f2e6d;
}

span:hover{
  text-decoration: underline;
}


.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 7%;
}

button{
  background-color: transparent;
}

.fas{
  font-size: 13px;
  margin-top: 10%;
}

.space{
  padding-top: 10px;
  padding-bottom: 11px;
  padding-right: 10px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
}


.input-form-1.password {
  border-right-style: none;
  border-radius: 8px 0 0 8px;
}

select{
  color: #222222;
}

option{
  color: #222222;
}

option::placeholder{
  color: #222222;
}

select::placeholder{
  color: #222222;
}

.error-messages {
  color: #db657b;
  font-size: 11.5px;
  text-decoration: none;
  list-style: none;
  padding-top: 20px;
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
    margin-top: 5%;
  }

  .logo{
    width: 38%;
  }

  .text-area p{
    width: 90%;
    line-height: 16px;
  }
}

@media (max-width: 500px) {

  .logo{
    width: 50%;
  }

  .alpha{
    margin-top: 5%;
  }

}

</style>