<template>
  <dashboard-layout>
    <schedule-payment-component/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import SchedulePaymentComponent from "@/components/DashBoard/SchedulePaymentComponent.vue";

export default {
  name: "SchedulePaymentView",
  components: {SchedulePaymentComponent, DashboardLayout}
}
</script>


<style scoped>

</style>