<template>
  <div>
  <div id="slider">
<!--    <div class="arrowLeft" @click="arrowLeft()"></div>-->
    <Slides :image="images[chosenImage]" />
<!--    <div class="arrowRight" @click="arrowRight()"></div>-->
  </div>
  </div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
  name: "sliderView",
  components: {
    Slides,
  },
  data() {
    return {
      images: [
        {
          id: 0,
          url: "",
          title: "Limited Time Only!",
          para: "5.70% APY 7-Month Share Certificate",
          para2: "Lock in this special rate today.",
          para3: "Learn more",
        },
        {
          id: 1,
          url: "",
          title: "Our Best Spending Account",
          para: "Rewards Checking",
          para2: "You’ve worked too hard for your money to be sitting idly in an average checking account. Take your funds above and beyond with an AFFBB Rewards Checking Account.",
          para3: "Learn more",
        },
        {
          id: 2,
          url: "",
          title: "Inflation Busting",
          para: "3.00% APY * High Yield Savings Account",
          para2: "Earn More Now with our new High Yield Savings Account!",
          para3: "Learn more",
        },
      ],
      chosenImage: 0,
      intervalObject: null,
    };
  },
  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /*margin-top: 0.8%;*/
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
}

@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
}
</style>
