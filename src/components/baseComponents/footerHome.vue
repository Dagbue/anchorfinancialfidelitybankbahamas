<template>
  <div class="alpha">
    <div class="the-footer">

      <div class="bottom">
        <div class="logo-container">


          <div class="footer-link-container">
<!--            <h3 class="footer-title">About Us</h3>-->
                    <img src="@/assets/affcu-inverse.png" alt="logo" class="footer-img" @click="onPostClick" />
            <div class="lawrence">
              <p class="footer-link" @click="onPostClick2">
                Contact Us
              </p>
              <p class="footer-link" @click="onPostClick3">
                About Us
              </p>
              <p class="footer-link" @click="onPostClick4">
                Guides
              </p>
              <p class="footer-link" @click="onPostClick5">
                Resources
              </p>
              <p class="footer-link" @click="onPostClick6">
                Login
              </p>
              <p class="footer-link">
                Privacy
              </p>
            </div>

            <div class="lawrence">
              <p class="footer-link">
                Swift Code # AFFBBAHBSN1
              </p>
              <p class="footer-link">
                NMLS # 513263
              </p>

            </div>

          </div>

          <div class=" stay-connected">
            <div class="footer-title">
              <img src="@/assets/NCUA.png" alt="logo" class="footer-img-2" />
            </div>

            <div class="social">
              <div class="social-part-1">
                <i class='bx bxl-facebook'></i>
                <i class='bx bxl-twitter' ></i>
                <i class='bx bxl-instagram' ></i>
                <i class='bx bxl-youtube' ></i>
              </div>

            </div>
          </div>
        </div>
      </div>
      <hr />
      <p class="copyright">
        © 2023 AFFBB | All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script>

// import BitcoinPrices from "@/components/baseComponents/bitcoinPrices.vue";

export default {
  name: 'footerHome',
  // components: {BitcoinPrices},
  methods: {
    onPostClick() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/contactView");
      window.scrollTo(0, 0);
    },
    onPostClick3() {
      this.$router.push("/about");
      window.scrollTo(0, 0);
    },
    onPostClick4() {
      this.$router.push("/guidesView");
      window.scrollTo(0, 0);
    },
    onPostClick5() {
      this.$router.push("/resourcesView");
      window.scrollTo(0, 0);
    },
    onPostClick6() {
      this.$router.push("/loginWithEmail");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', "https://www.livecoinwatch.com/static/lcw-widget.js")
    document.head.appendChild(externalScript)
  },
}
</script>

<style scoped>
.the-footer {
  background-color: #0f2e6d;
  color: #ffffff;
  padding: 1.5vh  1vh;
  /*margin-top: 3%;*/
}

.logo-container {
  display: flex;
  justify-content: space-between;
  margin-left: 7%;
  margin-right: 7%;
  padding-top: 1%;
}

.footer-title {
  font-size: 20px;
  line-height: 20px;
}

.footer-link {
  display: block;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.8;
  padding-top: 10px;
  color: #ffffff;
  padding-right: 18px;
  text-decoration: underline;
}

.bottom{
  margin-top: 2%;
}

.footer-link-container {
  /*margin-left: 5%;*/
  /*margin-right: 5%;*/
  width: 50%;
}

.footer-link-container2{
  /*padding-right: 5%;*/
}
.stay-connected{
  width: 50%;
  text-align: right;
  padding-top: 3%;
}
.socials-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
}

hr {
  color: #ffffff;
  width: 100%;
  background-color: #ffffff;
  border: 0.5px solid #ffffff;
  opacity: 0.2;
  margin-top: 45px;
}

.copyright {
  font-size: 12px;
  /*line-height: 12px;*/
  text-align: center;
  opacity: 0.75;
  margin-top: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  color: #ffffff;
  font-weight: 900;
}
.footer-img {
  width: 35%;
}
.footer-img-2 {
  width: 27%;
}
a {
  text-decoration: none;
  color: #ffffff;
  transition: ease 0.3s;
}
a:hover{
  color: #ffffff;
  //font-size: 22px;
  font-weight: 700;
}

.bit{
  margin-bottom: 25px;
}
.bx {
  font-size: 27px;
}
.bx-mail-send{
}
.last-div{
  display: flex;
  margin-bottom: 15px;
}
.last-div-para{
  font-size: 15px;
  padding-left: 10px;
  line-height: 1.3;
  color: #ffffff;
}
.footer-title{
  color: #ffffff;
  /*font-size: 30px;*/
  font-weight: bold;
}

.google{
  width: 40%;
  margin-left: 2%;
  margin-top: 4%;
  margin-bottom: 1%;
}

.social-part-1 i {
  padding-right: 10px;
  margin-top: 1%;
}

.lawrence{
  display: flex;
  /*justify-content: space-evenly;*/
}


@media (max-width: 990px) {
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: 90%;
  }
  .footer-link {
    font-size: 15px;
    padding-right: 10px;
  }
  .footer-img-2 {
    width: 40%;
    margin-right: 3.2%;
    margin-bottom: 1%;
  }
}
@media (max-width: 760px) {
  .bottom {
    display: block;
    align-content: center;
    text-align: center;
  }
  .footer-container {
    display: block;
    align-content: center;
    text-align: center;
  }
  .the-footer {
    margin-top: unset;
  }
  .footer-img {
    width: 50%;
    min-width: unset;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
    margin-bottom: 15%;
    margin-top: 10%;
  }
  .footer-link-container2 {
    margin-bottom: 18%;
  }
  .last-div{
    margin-right: 10%;
    margin-bottom: unset;
  }
  .copyright{
    font-size: 17px;
  }
}
@media (max-width: 700px) {
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
  }
  .footer-link {
    display: block;
    font-size: 16px;
  }
  .footer-title {
    font-size: 21px;
    padding-bottom: unset;
  }

  .footer-img {
    width: 50%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .copyright{
    font-size: 13px;
  }
  .bx{
    font-size: 25px;
  }
  .last-div-para{
    font-size: 16px;
    padding-left: 8px;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
  }
  .footer-img-2 {
    width: 60%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .stay-connected{
    width: 100%;
    text-align: center;
    padding-top: 2%;
  }
  .social-part-1 i {
    padding-right: 10px;
    margin-top: 2%;
    font-size: 26px;
  }
  .the-footer {
    padding: 1.5vh  0;
  }
}
@media (max-width: 500px) {
  .copyright{
    font-size: 12px;
  }
  .footer-link {
    font-size: 13px;
    padding-right: 8px;
  }
}
</style>