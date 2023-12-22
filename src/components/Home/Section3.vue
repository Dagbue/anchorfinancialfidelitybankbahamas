<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">
        <p class="text-1">
          Fast & Convenient
        </p>
        <p class="text-2">
          AFFBB Digital Banking Experience
        </p>
        <p class="text-3">
          Our accessible Digital Banking and 4.9 star-rated Web App offer all the sleek and modern features you expect, and more!
        </p>
        <p class="text-4" @click="onPostClick">
          Explore Digital Banking
        </p>
      </div>

      <div class="content-2">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww" alt="section-1-image" class="image"/>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section3",
  methods: {
    onPostClick() {
      window.scrollTo(0, 0);
      this.$router.push("/loginWithEmail");
    },
  },
}
</script>

<style scoped>

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
  width: 50%;
}

.content-2{
  width: 50%;
}

.image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.text-1{
  font-size: 20px;
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
  font-size: 35px;
  line-height: 1.5;
  margin: 0;
}

.text-3{
  font-size: 20px;
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


@media (max-width: 990px) {
  .text-1{
    line-height: 1.3;
  }

  .text-2{
    font-size: 33px;
    line-height: 1.1;
  }

  .text-3{
    line-height: 1.5;
  }

  .text-4{
    padding: 8px 30px;
    margin-top: 2%;
  }
}

@media (max-width: 700px) {

  .content-alpha{
    display: block;
    margin-left: unset;
    margin-right: unset;
  }

  .content-1{
    width: 100%;
    text-align: center;
  }

  .text-1{
    text-align: center;
    margin-bottom: 1%;
  }

  .content-2{
    width: 100%;
  }

  .text-3{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .text-4{
    margin-bottom: 3%;
    padding: 10px 40px;
  }

}

@media (max-width: 500px) {
  .image{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    font-size: 28px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .content-1{
    width: 100%;
  }

  .content-2{
    width: 100%;
  }

}
</style>