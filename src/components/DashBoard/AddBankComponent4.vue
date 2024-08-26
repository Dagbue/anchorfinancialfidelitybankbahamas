<template>
  <div class="body">
    <span class="loader" v-if="loading"></span>
    <p class="linking">linking ...</p>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "AddBankComponent4",
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

      // Mimic an API call by waiting for 6 seconds
      await new Promise(resolve => setTimeout(resolve, 6000));

      // Proceed with the rest of the function after 5 seconds
      await Swal.fire({
        icon: 'success',
        title: 'success',
        text: 'Account linked successfully',
      });
      await this.$router.push("/billPayView");

      // Hide the loader
      this.loading = false;
    },
  },
  mounted() {
    this.increment();
  }
}
</script>

<style scoped>
.body {
  display: flex; /* Enables flexbox layout */
  justify-content: center; /* Centers content horizontally */
  flex-direction: column;
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

.linking{
  font-size: 16px;
  padding-top: 5px;
  color: #ffffff;
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