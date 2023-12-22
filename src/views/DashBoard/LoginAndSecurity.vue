<template>
  <dashboard-layout>
    <div class="transaction-header-wrapper">
      <div data-animation="over-right" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <NavBar/>
      </div>
    </div>
    <div class="mobile-view">
      <div class="margin-top margin-small">
        <div id="SettingsForm" class="settings">
          <div class="margin-bottom margin-medium">
            <h3>Settings</h3>
          </div>
          <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tabs w-tabs">

            <div class="tabs-menu w-tab-menu">
              <router-link to="/settingsView">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link beneficiary-list">
                  <div>Personal Info</div>
                </a>
              </router-link>
              <router-link to="/accountView">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link beneficiary-list">
                  <div>Account Info</div>
                </a>
              </router-link>
              <router-link to="/loginAndSecurity">
                <a data-w-tab="Tab 2" class="settings-tab w-inline-block w-tab-link w--current beneficiary-list">
                  <div>Secuirity</div>
                </a>
              </router-link>
            </div>

            <div class="w-tab-content">
              <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
                <div class="account-info-wrapper">
                  <update-pin-card/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import NavBar from "@/components/DashBoard/NavBar.vue";
import UpdatePinCard from "@/components/DashBoard/UpdatePinCard.vue";

export default {
  name: "LoginAndSecurity",
  components: {UpdatePinCard, NavBar, DashboardLayout}
}
</script>

<style scoped>
.settings {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 496px;
  margin-top: 3rem;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.tabs {
  padding-bottom: 3rem;
}

.tabs-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}

.settings-tab {
  padding-right: 12px;
  padding-left: 12px;
  background-color: transparent;
  color: #1a1d27;
  font-weight: 500;
}

.settings-tab.w--current {
  border-radius: 8px;
  background-color: #1a1d27;
  color: #fff;
}

@media screen and (max-width: 600px){
  .mobile-view{
    margin-left: 8%;
    margin-right: 8%;
  }
}

</style>