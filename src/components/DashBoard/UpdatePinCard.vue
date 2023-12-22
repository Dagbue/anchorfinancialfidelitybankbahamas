<!--suppress ALL -->
<template>
  <section id="PersonalInfoCard" class="personal-info-wrapper">
    <div class="header">
      <div class="margin-bottom margin-xxsmall">
        <div class="text-block-53">Set Pin</div>
      </div>
      <div class="text-block-54">Set you pin here and dont share with anyone.</div>
    </div>
    <form class="form-body" @submit.prevent="resetPin">
      <div class="w-form">


<!--          <form class="input-group" @submit.prevent="resendOtp" >-->
<!--            <input type="number"  class="input-field-2" placeholder="Enter OTP">-->
<!--            <button class="button2">Request OTP</button>-->
<!--          </form>-->

<!--          <form @submit.prevent="sendEmail">-->
<!--            <label for="recipient">Recipient:</label>-->
<!--            <input v-model="recipient" type="email" id="recipient" required />-->

<!--            <label for="subject">Subject:</label>-->
<!--            <input v-model="subject" type="text" id="subject" required />-->

<!--            <label for="message">Message:</label>-->
<!--            <textarea v-model="message" id="message" rows="4" required></textarea>-->

<!--            <button type="submit">Send Email</button>-->
<!--          </form>-->

          <div class="email-wrapper">
            <label for="name-6">Enter Pin</label>
            <!--            <input v-model="model.pin" type="number" class="input-field set w-input" maxlength="256" name="name-6" data-name="Name 6" placeholder="" id="name-6"  required="required">-->

            <div class="has-addons">
              <input v-if="showPassword" v-model="pin" @input="validatePassword"  type="number" class="input-field-2 w-input" maxlength="4" name="Password" data-name="Password" placeholder="" id="field" required="required" />
              <input v-else type="password" v-model="pin" @input="validatePassword" autocomplete="off"  class="input-field-2 w-input" maxlength="4" name="Password" data-name="Password" placeholder="" id="Password" required="required" >
              <div class="space">
                <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" @click="toggleShow"></i>
              </div>
            </div>

          </div>

          <div v-if="passwordErrors.length" class="error-messages">
            <ul>
              <li v-for="error in passwordErrors" :key="error">{{ error }}</li>
            </ul>
          </div>

          <div class="email-wrapper">
            <label for="name-5">Confirm Pin</label>
            <!--            <input v-model="model.pinConfirmation" type="number" class="input-field set w-input" maxlength="256" name="name-5" data-name="Name 5" placeholder="" id="name-5"  required="required">-->

            <div class="has-addons">
              <input v-if="showPassword" v-model="pin2" @input="validatePassword"  type="number" class="input-field-2 w-input" maxlength="4" name="Password" data-name="Password" placeholder="" id="field" required="required" />
              <input v-else type="password" v-model="pin2" @input="validatePassword" autocomplete="off" class="input-field-2 w-input" maxlength="4" name="Password" data-name="Password" placeholder="" id="Password" required="required" >
              <div class="space">
                <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" @click="toggleShow"></i>
              </div>
            </div>

          </div>



        <div class="add-top">
          <button class="button max-width-full w-button">Confrim</button>
        </div>

      </div>
    </form>
  </section>
</template>

<script>
import {doc, setDoc } from "firebase/firestore";
import {db} from "@/firebase/config";
// import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
export default {
  name: "UpdatePinCard",
  data(){
    return {
      showPassword: false,
      passwordErrors: [],
      recipient: '',
      subject: '',
      message: '',
      pin: "",
      pin2: "",
    }
  },
  computed:{
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods:{

    // sendEmail() {
    //   const templateParams = {
    //     to_email: this.recipient,
    //     subject: this.subject,
    //     message: this.message,
    //   };
    //
    //   emailjs.send(
    //       'service_1dsj2pk',
    //       'template_fpszaov',
    //       templateParams,
    //       'sjGsPZkhqCeQg0Mtu'
    //   )
    //       .then((response) => {
    //         console.log('Email sent successfully:', response);
    //         // You can handle success actions here (e.g., show a success message)
    //       })
    //       .catch((error) => {
    //         console.error('Email failed to send:', error);
    //         // You can handle error actions here (e.g., show an error message)
    //       });
    // },

   async resetPin(event){
      this.validatePassword();

      if (this.passwordErrors.length > 0) {
        event.preventDefault(); // Prevent form submission
        // swal('Error', 'Pin must be exactly 4 characters.', 'error')
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Pin must be exactly 4 characters.',
        });
      } else {
        await setDoc(doc(db,"dagbuelawrence@yopmail.com", "Info" ), {
          IsPinSet: "Yes",
        },{ merge: true })
            .then(async () => {
              // await Swal.fire({
              //   icon: 'success',
              //   title: 'Success',
              //   text: 'Profit Added Successfully!',
              // });
            })
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Pin set Successfully!',
        });
        await this.resetForm()
        await this.$router.push("/homeView");
        await window.scrollTo(0, 0);
      }
    },

    resetForm() {
      this.pin = '';
      this.pin2 = '';
    },


    resendOtp(){
      // StoreUtils.dispatch(StoreUtils.actions.auth.resendOtp, {
      //   customerEmail: this.userInfo.customerEmail,
      //   countryCode: "+234",
      //   username: this.userInfo.customerEmail
      // })
    },
    // async resetPin(event){
    //   this.validatePassword();
    //
    //   if (this.passwordErrors.length > 0) {
    //     event.preventDefault(); // Prevent form submission
    //     swal('Error', 'Pin must be exactly 4 characters.', 'error')
    //   } else {
    //     await StoreUtils.dispatch(StoreUtils.actions.auth.resetPin, this.model)
    //     await StoreUtils.dispatch(StoreUtils.actions.auth.getUserDetails)
    //   }

    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    validatePassword() {
      this.passwordErrors = [];

      if (this.pin && this.pin2 === '') {
        this.passwordErrors.push("pin is required.");
      }

      if (this.pin.length && this.pin2.length !== 4) {
        this.passwordErrors.push("pin must be exactly 4 characters.");
      }
    }
  },
}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.add-top{
  margin-top: 5%;
}

.header {
  margin-bottom: 1rem;
}

.name-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.left {
  width: 47%;
}

.right {
  width: 47%;
}

.input-field.set {
  margin-top: 0.5rem;
}

.email-wrapper {
  margin-top: 1rem;
}

.tabs {
  padding-bottom: 3rem;
}

.notice {
  margin-top: 1rem;
  padding: 14px;
  border-radius: 8px;
  background-color: #eaecf0;
}

.field-label {
  color: #475467;
  text-transform: lowercase;
}

.field-label-2 {
  color: #1a1d27;
}

.w-form {
  margin: 0 0 15px;
}
.w-form-done {
  display: none;
  padding: 20px;
  text-align: center;
  background-color: #dddddd;
}
.w-form-fail {
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
}

.lawrence{
  margin-top: 10%;
}

.input-group {
  display: flex;
  align-content: stretch;
}

.input-group > input {
  flex: 1 0 auto;
}
.input-group-addon {
  background: #eee;
  border: 1px solid #ccc;
  padding: 0.5em 1em;
}


.input-field-2 {
  height: 50px;
  margin-top: 0.6rem;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #d0d5dd;
  border-radius: 8px 0 0 8px;
  color: #667085;
  font-size: 1rem;
}

input{
  padding-left: 12px;
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
  height: 50px;
  margin-top: 0.6rem;
  margin-bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid #d0d5dd;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
}

.space{
  height: 50px;
  margin-top: 0.6rem;
  margin-bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
}

.error-messages {
  color: #db657b;
  font-size: 12px;
  text-decoration: none;
  list-style: none;
  margin-top: 10px;
}

.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
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
  height: 60px;
  padding: 10px 1.5rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: #101828;
  font-family: Satoshi, sans-serif;
  color: #fff;
  font-weight: 500;
  text-align: center;
}

.button2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 49.2px;
  padding: 8px 1rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0 8px 8px 0;
  background-color: #101828;
  font-family: Satoshi, sans-serif;
  color: #fff;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
}

</style>