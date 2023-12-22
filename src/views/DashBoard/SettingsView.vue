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
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link w--current beneficiary-list">
                  <div>Personal Info</div>
                </a>
              </router-link>
              <router-link to="/accountView">
                <a data-w-tab="Tab 1" class="settings-tab w-inline-block w-tab-link beneficiary-list">
                  <div>Account Info</div>
                </a>
              </router-link>
              <router-link to="/loginAndSecurity">
                <a data-w-tab="Tab 2" class="settings-tab w-inline-block w-tab-link beneficiary-list">
                  <div>Security</div>
                </a>
              </router-link>
            </div>

            <div class="w-tab-content">
              <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
                <div class="account-info-wrapper">
                  <PersonalInfoCard/>
                  <!--                  <AccountLimitCard/>-->
                  <!--                  <AccountStatementCard/>-->
                </div>
              </div>
              <div data-w-tab="Tab 2" class="w-tab-pane">
                <div class="login-security">
                  <a data-w-id="54fafda2-dfd0-bc2d-59fb-05ff01d3823c" href="#" class="link-block-6 w-inline-block">
                    <div class="div-block-4">
                      <div class="icon-embed-xxsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" class="iconify iconify--bx" width="100%" height="100%" preserveaspectratio="xMidYMid meet" viewbox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722c0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
                      </svg></div>
                      <div class="text-block-81">Reset Password</div>
                    </div>
                    <div><img loading="lazy" src="@/assets/images/Component-3.svg" alt=""></div>
                  </a>
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
import PersonalInfoCard from "@/components/DashBoard/PersonalInfoCard.vue";

export default {
  name: "SettingsView",
  components: {PersonalInfoCard, NavBar, DashboardLayout}
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

.account-info-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}

.link-block-6 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #eaecf0;
  text-decoration: none;
}

.div-block-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}

.icon-embed-xxsmall {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #1a1d27;
}

.text-block-81 {
  color: #1a1d27;
  font-weight: 500;
}


@media screen and (max-width: 600px){
  .mobile-view{
    margin-left: 8%;
    margin-right: 8%;
  }
}

</style>