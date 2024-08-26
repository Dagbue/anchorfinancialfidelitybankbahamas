<template>
  <div class="body">
    <span class="loader" v-if="loading"></span>
  </div>
</template>

<script>
export default {
  name: "AddBankComponent2",
  data()  {
    return {
      email: "",
      password: "",
      loading: true
    }
  },
  computed: {

  },
  methods: {
    async increment() {
      // Show the loader
      this.loading = true;

      // Mimic an API call by waiting for 5 seconds
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Proceed with the rest of the function after 5 seconds
      this.$router.push("/addBank3");

      // Hide the loader
      this.loading = false;
    },
  },
  mounted() {
    this.increment()
  }
}
</script>

<style scoped>
.body {
  display: flex; /* Enables flexbox layout */
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  min-height: 100vh; /* Minimum height is 100% of the viewport height */
  margin: 0; /* Removes default margin */
  background: #004a93; /* Sets the background color */
}

.loader {
  width: 45px; /* Width of the loader */
  height: 45px; /* Height of the loader */
  border: 4px solid #FFF; /* Border color for the top, right, and left parts */
  border-bottom-color: #0b6efd; /* Makes the bottom border invisible */
  border-radius: 50%; /* Rounds the borders to make it circular */
  animation: rotation 1s linear infinite; /* Animation for continuous rotation */
}

@keyframes rotation {
  from {
    transform: rotate(0deg); /* Start rotation from 0 degrees */
  }
  to {
    transform: rotate(360deg); /* End rotation at 360 degrees */
  }
}
</style>