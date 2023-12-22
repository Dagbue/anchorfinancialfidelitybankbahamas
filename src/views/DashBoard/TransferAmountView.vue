<template>
  <dashboard-layout>
    <div class="dashboard-body-wrapper align-center">
      <div class="kyc-nav-wrapper margin-vertical margin-large">
        <router-link to="/addRecipientView">
          <a class="w-inline-block"><img src="@/assets/images/Navigation-controls.svg" loading="lazy" alt=""></a>
        </router-link>
      </div>
      <TransferAmountCard/>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import TransferAmountCard from "@/components/DashBoard/TransferAmountCard.vue";

export default {
  name: "TransferAmountView",
  components: {TransferAmountCard, DashboardLayout}
}
</script>

<style scoped>

</style>