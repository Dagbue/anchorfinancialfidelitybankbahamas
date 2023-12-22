<template>
  <div class="alpha">
    <h1 class="header">Common Types of Fraud</h1>
    <div class="section-1">
      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-user-secret fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Government Imposter</p>
        <p class="group-text-1">Crooks will pose as government employees to scare and trick people into giving them
          personal information and money. Often done with threats and by demanding immediate payment to avoid legal
          action.</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-money-check-edit-alt fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Check Fraud</p>
        <p class="group-text-1">Fraudsters trying to solicit funds from you or pass on a fake check will send you a
          rebate or refund check for a few dollars, but cashing or depositing the check could result in you being
          unknowingly entered into a legally binding contract for a product or service that’ll end up costing you.</p>
      </div>
    </div>
    <br/>
    <br/>
    <div class="section-1">

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-heart fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Romance & Employment Scams</p>
        <p class="group-text-1">Criminals pretending to be a potential employer or love interest attempting to
          take advantage of you. Scammers create fake online dating profiles and job postings to lure victims
          into giving them money or providing personal information.</p>
      </div>
      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-phone-laptop fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Phishing</p>
        <p class="group-text-1">Scammers will attempt to obtain personal information under false pretenses through
          emails, text messages, or phone calls. Phishing scams may use threatening language or offer enticing prizes
          to convince the reader to act. Emails often contain links to download malware that can compromise your
          devices.</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesSection2"
}
</script>

<style scoped>
.alpha{
  margin-top: 5%;
  padding-top: 50px;
  padding-bottom: 50px;
  --bs-bg-opacity: 1;
  --bs-tertiary-100-rgb: 233, 240, 255;
  background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;
}

.section-1{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-left: 1%;
  width: 100%;
}

.group{
  text-align: center;
}

.group-text{
  font-size: 20px;
  color: #222222;
  padding-top: 8px;
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  font-weight: 900;
}

.group-text-1{
  font-size: 18px;
  color: #222222;
  padding-top: 8px;
  width: 85%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  line-height: 1.3;
}

.image-2{
  width: 76px;
  height: 76px;
  object-fit: cover;
}

.header{
  margin-bottom: 40px;
  font-size: 35px;
  color: #003a9a;
  font-style: normal;
  font-weight: 700;
  line-height: 55px;
  text-align: center;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}
.fa-2x {
  font-size: 2em;
  color: #1b54c7;
}

@media (max-width: 990px) {
  .header{
    margin-bottom: 30px;
    font-size: 33px;
    line-height: 50px;
  }
}

@media (max-width: 700px) {

  .section-1{
    display: block;
    margin-left: unset;
  }

  .header{
    font-size: 32px;
  }

  .group{
    padding-top: 2%;
  }

}



@media (max-width: 500px) {

  .image-2{
    width: 56px;
    height: 56px;
  }

  .group-text{
    font-size: 18px;
    margin-bottom: 50px;
  }

}
</style>