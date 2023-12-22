<template>
  <div class="alpha">

    <div class="image" @click="home">
      <img src="@/assets/companylogo.png" alt="inter-switch-logo"  class="logo">
    </div>

    <div class="text-area">
      <h3>Log in to your account</h3>
      <p>Welcome back! Please enter your details.</p>
    </div>

    <div class="form-alpha">
      <form @submit.prevent="handleSubmit">

        <div class="input-form-2">
          <input type="email" v-model="email"  placeholder="Enter your email" class="input-form-1" required="required" />
        </div>

        <div class="has-addons">
          <input v-if="showPassword2" v-model="password" required="required"  type="text" class="input-form-1 password"   placeholder="Enter password"   />
          <input v-else type="password" v-model="password" required="required" class="input-form-1  password"   placeholder="Enter password"   >
          <div class="space">
            <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" @click="toggleShow2" ></i>
          </div>
        </div>


        <div class="select">
          <div class="checkbox-part">
            <input type="checkbox"  class="checkbox"/>
            <p class="checkbox-text">Remember for 30 days.</p>
          </div>

          <div class="forgot" @click="forgotPassword">
            <p>Forgot password</p>
          </div>
        </div>


        <div class="submit">
          <button class="button max-width-full w-button">Login</button>
        </div>

      </form>
    </div>

    <div class="last-text">
      <p>Don’t have an account? <span @click="signUp">Register for Digital Banking</span></p>
    </div>

  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import Swal from "sweetalert2";

export default {
  name: "SignWithEmail",
  data(){
    return {
      showPassword2: false,
    }
  },
  methods:{
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },

    signUp(){
      this.$router.push("/signUpEmail");
      window.scrollTo(0, 0);
    },

    forgotPassword(){
      this.$router.push("/forgotPassword");
      window.scrollTo(0, 0);
    },

    home(){
      this.$router.push("/");
      window.scrollTo(0, 0);
    },

  },

  setup (){
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const store = useStore()
      const router = useRouter()
      const db = getFirestore();
      const auth = getAuth();
      const handleSubmit = async () => {
        try {
          await store.dispatch('login', {
            email: email.value,
            password: password.value
          })
          // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
          const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log (doc.data())
          });
          await router.push('/loginSuccess')
        }
        catch (err) {
          error.value = err.message
          await Swal.fire({
            icon: 'error',
            title: 'error',
            text: err.message,
          });
        }
      }
      return {
        handleSubmit, email,
        password, error,
        user: computed(() => store.state.user),
        getDocs, collection }
  }

}
</script>

<style scoped>
.alpha{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 7%;
}

.logo{
  width: 33%;
}


.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  color: #101828;
  font-weight: 600;
  font-size: 21px;
  line-height: 38px;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #667085;
  margin-bottom: 3%;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.text-area{
  margin-bottom: 1%;
}

.image{
  display: flex;
  justify-content: center;
  margin-bottom: 0.8%;
}
.form-alpha{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.input-form-2{
  display: flex;
  justify-content: center;
}

.input-form-1{
  order: 1;
  width: 100%;
  padding: 13px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
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
  letter-spacing: 0.5px;
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

.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 5%;
}
button{
  background-color: transparent;
}
.fas{
  font-size: 13px;
  margin-top: 10%;
}

.space{
  padding-top: 10.8px;
  padding-bottom: 10.5px;
  padding-right: 10px;
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

.checkbox-part{
  display: flex;
  justify-content: center;
  margin-top: 4%;
  margin-bottom: 4%;
}
.checkbox{
  margin-right: 10px;
}
.checkbox-text{
  font-size: 15px;
  color: #667085;
}

.last-text{
  margin-top: 1.7%;
  text-align: center;
  color: #667085;
}

span{
  color: #0f2e6d;
}

span:hover{
  text-decoration: underline;
}

.select{
  display: flex;
  margin-top: 3%;
  margin-bottom: 3%;
}

.forgot{
  margin-top: 4%;
  margin-bottom: 4%;
}

.forgot p{
  color: #0f2e6d;
  margin-left: 50px;
}

.forgot p:hover{
  text-decoration: underline;
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

  .space{
    padding-top: 10.4px;
    padding-bottom: 10.8px;
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