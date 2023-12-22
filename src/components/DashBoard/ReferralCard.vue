<template>
  <section id="ReferralCard" class="dashboard-section-wrapper margin-bottom margin-medium">
    <div class="transactions-wrapper padding-custom1">
      <div class="max-width-full">
        <div>
          <div class="flex-container">
            <div class="kyc-step-heading refer-a-friend">Invite Friends</div>
            <div class="kyc-step-body refer mobile">Top up your account to start transacting</div>
          </div>
        </div><img src="@/assets/images/add-friends-1.png" loading="lazy" width="118" alt="">
      </div>
      <a class="button is-secondary max-width-full margin-top margin-small w-button"> <router-link to="/referalHomeView"><a class="color">Refer a friend</a></router-link> </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReferralCard"
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }
.color{
  color: #000000;
  font-weight: 500;
}
</style>