<template>
  <div class="alpha">
<!--    <h1 class="header">Common Types of Fraud</h1>-->
    <div class="section-1">
      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-user-secret fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Integrity</p>
        <p class="group-text-1">At AFFBB, we believe in integrity first. We exist to serve our members, not to
          make a profit. Our earnings are returned to you, the member-owners, in higher interest rates on deposits
          and lower loan rates and fees. You can always count on us to do what’s best for you.</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-money-check-edit-alt fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Service</p>
        <p class="group-text-1">We know that you need a Bank you can count on, so our employees live by the
          motto “People's best choice.”</p>
      </div>

      <div class="group">
        <span class="fa-stack fa-2x"><em class="fas fa-circle fa-stack-2x text-tertiary circle-icon"></em><em class="fas fa-money-check-edit-alt fa-stack-1x fa-inverse icon-size"></em></span>
        <p class="group-text">Excellence</p>
        <p class="group-text-1">AFFBB is committed to be your one financial partner. As such we go above and beyond
          the call of duty to meet our members’ needs. We take the time to talk to our members,
          listen to their concerns, and answer any and all questions they may have about their
          finances or our policies.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection2"
}
</script>

<style scoped>
.alpha{
  margin-top: 5%;
  padding-top: 65px;
  padding-bottom: 65px;
  --bs-bg-opacity: 1;
  --bs-tertiary-100-rgb: 233, 240, 255;
  background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;
}

.section-1{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  /*margin-left: 1%;*/
  width: 100%;
}

.group{
  text-align: center;
  background-color: #FFFFFF;
  margin-left: 1%;
  margin-right: 1%;
  padding: 20px;
  width: 400px;
  height: 450px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
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
  font-weight: 900;
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
  .section-1{
    display: block;
  }

  .group{
    width: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3%;
  }
}

@media (max-width: 700px) {
  .group{
    width: 350px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 500px) {

}
</style>