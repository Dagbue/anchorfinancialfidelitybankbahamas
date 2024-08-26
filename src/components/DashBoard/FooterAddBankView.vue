<template>
  <div class="footer">
    <div class="footer-section-1">
      <div class="socials">
        <p class="text-1">Follow us:</p>
        <i class='bx bxl-facebook-square'></i>
        <i class='bx bxl-instagram-alt'></i>
        <i class='bx bxl-twitter'></i>
        <i class='bx bxl-youtube' ></i>
        <i class='bx bxl-linkedin' ></i>
      </div>
    </div>

    <hr class="line"/>

    <div class="section-2">
      <p class="section-2-text">Contact us</p>
      <p class="section-2-text">Privacy</p>
      <p class="section-2-text">Security</p>
      <p class="section-2-text">Terms of use</p>
      <p class="section-2-text">Accessibility</p>
      <p class="section-2-text">SAFE Act: Chase Mortgage Loan Originators</p>
      <p class="section-2-text">Fair Lending</p>
      <p class="section-2-text">About Chase</p>
      <p class="section-2-text">J.P. Morgan</p>
      <p class="section-2-text">JPMorgan Chase & Co.</p>
      <p class="section-2-text">Español</p>

    </div>

    <div class="section-2 mobile">
      <p class="section-2-text">Chase Canada</p>
      <p class="section-2-text">Site map</p>
      <p class="section-2-text-second">Member FDIC</p>
      <p class="section-2-text-second"> Equal Housing Opportunity</p>
    </div>

    <div class="section-2">
      <p class="section-2-text-second">(c) 2024 JPMorgan Chase & Co.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterAddBankView"
}
</script>

<style scoped>
.footer{
  background-color: #ffffff;
  padding-top: 1.2%;
  padding-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer-section-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 15px;
  padding-right: 10px;
  font-size: 12px;
}
.socials{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 10px;
  font-size: 23px;
  color: #717171;
}
.text-1{
  font-size: 20px;
}

.line{
  text-align: center;
  border: 0.1px solid #ccc;
  margin-bottom: 24px;
  margin-top: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.section-2{
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 12.5px;
}

.section-2-text{
  color: #757575;
  font-size: .73rem;
  text-decoration: underline;
}

.section-2-text-second{
  color: #757575;
  font-size: .73rem;
}

.bx:hover{
  color: #0060f0;
}

@media (max-width: 768px) {
  .section-2{
    display: block;
    justify-content: unset;
    gap: unset;
    margin-bottom: unset;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .section-2-text{
    color: #757575;
    font-size: .73rem;
    text-decoration: underline;
  }

  .footer{
    padding-top: 2%;
    position: fixed;
  }

  .mobile{
    display: none;
  }

  .bx{
    font-size: 20px;
  }

  .text-1{
    font-size: 18px;
  }

  .line{
    margin-bottom: 18px;
    margin-top: 10px;
  }
}
</style>