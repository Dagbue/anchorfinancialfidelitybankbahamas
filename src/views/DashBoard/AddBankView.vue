<template>
  <dashboard-layout>
    <add-bank-component/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import AddBankComponent from "@/components/DashBoard/AddBankComponent.vue";

export default {
  name: "AddBankView",
  components: {AddBankComponent, DashboardLayout}
}
</script>


<style scoped>

</style>