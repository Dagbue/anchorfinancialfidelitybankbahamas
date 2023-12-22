<template>
  <dashboard-layout>
    <div class="dashboard-body-wrapper align-center">
      <div class="kyc-nav-wrapper margin-vertical margin-large">
        <router-link to="/sendMoneyView">
          <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
        </router-link>
      </div>
      <SendMoneyForm/>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import SendMoneyForm from "@/components/DashBoard/SendMoneyForm.vue";

export default {
  name: "AddRecipientView",
  components: {SendMoneyForm, DashboardLayout}
}
</script>

<style scoped>

</style>