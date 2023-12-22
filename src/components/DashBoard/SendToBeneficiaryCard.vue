<template>
  <section id="SendToBeneficiaryCard" class="margin-top margin-medium">
    <input type="text" class="input-field w-input" maxlength="256" name="field" data-name="Field" placeholder="Search beneficiary" id="field" required="">
    <router-link to="/addRecipientView">
      <a class="link-block-3 w-inline-block beneficiary-list"><img src="@/assets/images/add.svg" loading="lazy" alt="">
        <div class="text-block-63 ">Send money</div>
      </a>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "SendToBeneficiaryCard"
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }
a {color: #222222;}
</style>