<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">
        <p class="text-1">
          SENIOR FINANCIAL ADVISOR
        </p>
        <p class="text-2">
          Nahid Karimjee, CFP®
        </p>
        <p class="text-3">
          Nahid Karimjee is a CERTIFIED FINANCIAL PLANNER™ professional who specializes in developing financial plans
          for members based on their objectives, time horizons and risk tolerances. Nahid’s investment philosophy
          follows the principles of asset allocation and various investment solutions. He holds Series 7, 66
          securities registrations as well as a Life insurance license in the Bahamas. Nahid enjoys spending time with
          family, golfing and fishing.
        </p>
      </div>

      <div class="content-2">
        <img src="@/assets/Investments-Nahid-Karimjee-Headshot.jpg" alt="section-1-image" class="image"/>
      </div>


    </div>

    <div class="content-alpha-2">
      <div class="content-3">
        <p class="content-3-text-1">Our Corporate Offices</p>
        <p class="content-3-text-2">
          <i class='bx bxs-building'></i>
          AFFBB Headquarters
        </p>

        <p class="content-3-text-3">N 3036, Key West Street &,<br/>Robinson Rd, Nassau, Bahamas</p>
        <p class="content-3-text-4">Call or email to schedule your appointment: </p>
        <p class="content-3-text-5">Office: (242) 366-7764</p>
        <p class="content-3-text-6">Email: <span style="color: #3c790f;text-decoration: underline;">support@anchorfinancialfidelitybankbahamas.com</span></p>
        <p class="content-3-text-7">Website:<span style="color: #3c790f;text-decoration: underline;"> anchorfinancialfidelitybankbahamas.com</span></p>
      </div>

      <div class="content-4">
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Key%20West%20Street%20&amp;,%20Robinson%20Rd,%20Nassau,%20Bahamas%20+(AFFBB)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WealthManagementSection3"
}
</script>

<style scoped>

.alpha{
  --bs-bg-opacity: 1;
  --bs-tertiary-100-rgb: 233, 240, 255;
  background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;
  margin-top: 5%;
  padding-bottom: 4.3%;
}

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 3%;
  padding-top: 4.3%;
}

.content-1{
  width: 60%;
  padding-left: 4%;
}

.content-2{
  width: 40%;
  margin-top: 3%;
  padding-right: 2%;
}

.image{
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.text-1{
  font-size: 18px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 1.6px;
  text-align: left;
  text-transform: uppercase;
  color: #3c790f !important;
  vertical-align: middle;
}

.text-2{
  color: #0f2e6d;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 30px;
  line-height: 1.5;
  margin: 0;
}

.text-3{
  font-size: 18px;
  font-weight: normal;
  line-height: 1.6;
  margin: 0;
  width: 85%;
}

.text-4{
  display: inline-block;
  background-color: #ffffff;
  border: 1.8px solid #0f2e6d;
  color: #0f2e6d;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #0f2e6d;
  border: 1.8px solid #0f2e6d;
  color: #ffffff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.content-alpha-2{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  margin-top: 4%;
}

.content-3{
  background-color: #eef7e8;
  padding: 3rem;
  box-shadow: 0 0.5rem 1.875rem 0 rgba(28,106,255,.1);
  border-radius: 6px;
  display: inline-block;
  height: 510px;
  width: 600px;
}

.content-4{
  background-color: #eef7e8;
  padding: 3rem;
  box-shadow: 0 0.5rem 1.875rem 0 rgba(28,106,255,.1);
  border-radius: 6px;
  display: inline-block;
  height: 510px;
  width: 600px;
}

.content-3-text-1{
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 900;
  letter-spacing: normal;
  font-size: 30px;
  line-height: 1.26;
  margin: 0;
  padding-bottom: 7px;
  padding-top: 6%;
}

.content-3-text-2{
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 25px;
  line-height: 1.52;
  margin: 0;
  color: #0f2e6d;
  padding-bottom: 7px;
}

.content-3-text-3{
  font-size: 22px;
}

.bxs-building{
  color: #222222;
}

.content-3-text-4{
  padding-top: 12%;
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  font-size: 23.5px;
  line-height: 1.26;
  margin: 0;
  font-weight: 900;
  padding-bottom: 5px;
}
.content-3-text-5,
.content-3-text-6,
.content-3-text-7{
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  font-size: 17px;
  line-height: 1.35;
  margin: 0;
  padding-bottom: 5px;
}

@media (max-width: 990px) {
  .content-alpha-2{
    display: block;
  }

  .content-3{
    width: 600px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 3%;
  }

  .content-4{
    width: 600px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 3%;
  }
}

@media (max-width: 700px) {

  .content-alpha{
    display: flex;
    flex-direction: column-reverse;
  }

  .content-1{
    width: 100%;
  }

  .content-2{
    width: 100%;
  }

  .text-1{
    text-align: center;
    margin-top: 1%;
    margin-bottom: 1%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    text-align: center;
    margin-top: 1%;
    margin-bottom: 1%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-3{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .image{
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }
}

@media (max-width: 500px) {
  .content-3{
    display: block;
    margin-right: auto;
    margin-left: auto;
    height: 650px;
    width: 360px;
  }

  .content-3-text-5,
  .content-3-text-6,
  .content-3-text-7{
    font-size: 16px;
  }

  .content-4{
    display: block;
    margin-right: auto;
    margin-left: auto;
    height: 650px;
    width: 360px;
  }

}

</style>