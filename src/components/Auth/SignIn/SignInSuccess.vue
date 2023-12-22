<template>
  <div class="alpha">
    <div class="image">
      <img src="@/assets/successcheck.svg" alt="fether">
    </div>

    <div class="text-area">
      <h3>Login success🥳</h3>
      <p>You have successfully Logged in to your<br/>
        AFFBB account</p>
    </div>

    <div class="submit">
      <button class="submit-btn"  @click="signIn">Proceed to DashBoard</button>
    </div>

  </div>
</template>

<script>



export default {
  name: "SignInSuccess",
  methods:{
    signIn(){
      this.$router.push("/homeView");
      window.scrollTo(0, 0);
    },
  },

}
</script>

<style scoped>
.alpha{
  margin-top: 14%;
}


.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #101828;
  font-weight: 600;
  font-size: 21px;
  line-height: 30px;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #667085;
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

.submit{
  display: flex;
  justify-content: center;
  margin-top: 1.5%;
}

.submit-btn{
  background-color: #0f2e6d;
  border: 1px solid #0f2e6d;
  border-bottom-color: transparent;
  border-right-color: transparent;
  color: #ffffff;
  padding: 12px 10% 12px 10%;
  border-radius: 5px;
}

.submit-btn:hover{
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
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
  .submit-btn{
    padding: 12px 22% 12px 22%;
    margin-top: 2%;
  }
}

@media (max-width: 500px) {


  .alpha{
    margin-top: 15%;
  }


}
</style>