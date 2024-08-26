<template>
  <dashboard-layout>
    <add-bank-component2/>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import AddBankComponent2 from "@/components/DashBoard/AddBankComponent2.vue";

export default {
  name: "AddBankView2",
  components: {AddBankComponent2, DashboardLayout}
}
</script>

<style scoped>

</style>