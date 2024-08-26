import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/checking',
    name: 'checking',
    component: () => import(/* webpackChunkName: "checking" */ '../views/CheckingView.vue')
  },
  {
    path: '/saving',
    name: 'saving',
    component: () => import(/* webpackChunkName: "saving" */ '../views/SavingsView.vue')
  },
  {
    path: '/youthStudent',
    name: 'youthStudent',
    component: () => import(/* webpackChunkName: "youthStudent" */ '../views/YouthStudentView.vue')
  },
  {
    path: '/vehicleLoans',
    name: 'vehicleLoans',
    component: () => import(/* webpackChunkName: "vehicleLoans" */ '../views/VehicleLoansView.vue')
  },
  {
    path: '/personalLoans',
    name: 'personalLoans',
    component: () => import(/* webpackChunkName: "personalLoans" */ '../views/PersonalLoansView.vue')
  },
  {
    path: '/homeLoansView',
    name: 'homeLoansView',
    component: () => import(/* webpackChunkName: "homeLoansView" */ '../views/HomeLoansView.vue')
  },
  {
    path: '/wealthManagementView',
    name: 'wealthManagementView',
    component: () => import(/* webpackChunkName: "wealthManagementView" */ '../views/WealthManagementView.vue')
  },
  {
    path: '/individualRetirementView',
    name: 'individualRetirementView',
    component: () => import(/* webpackChunkName: "individualRetirementView" */ '../views/IndividualRetirementView.vue')
  },
  {
    path: '/guidesView',
    name: 'guidesView',
    component: () => import(/* webpackChunkName: "guidesView" */ '../views/GuidesView.vue')
  },
  {
    path: '/resourcesView',
    name: 'resourcesView',
    component: () => import(/* webpackChunkName: "resourcesView" */ '../views/ResourcesView.vue')
  },
  {
    path: '/faqView',
    name: 'faqView',
    component: () => import(/* webpackChunkName: "faqView" */ '../views/FaqView.vue')
  },
  {
    path: '/contactView',
    name: 'contactView',
    component: () => import(/* webpackChunkName: "contactView" */ '../views/ContactView.vue')
  },
  {
    path: '/openView',
    name: 'openView',
    component: () => import(/* webpackChunkName: "openView" */ '../views/OpenView.vue')
  },
  {
    path: '/loanView',
    name: 'loanView',
    component: () => import(/* webpackChunkName: "loanView" */ '../views/LoanView.vue')
  },



  {
    path: '/loginWithEmail',
    name: 'loginWithEmail',
    component: () => import(/* webpackChunkName: "loginWithEmail" */ '../views/Auth/LoginWithEmail.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../views/Auth/ForgotPassword.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/forgotPasswordVerifyEmail',
    name: 'forgotPasswordVerifyEmail',
    component: () => import(/* webpackChunkName: "forgotPasswordVerifyEmail" */ '../views/Auth/ForgotPasswordVerifyEmail.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/setNewPassword',
    name: 'setNewPassword',
    component: () => import(/* webpackChunkName: "setNewPassword" */ '../views/Auth/SetNewPassword.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/passwordResetSuccessful',
    name: 'passwordResetSuccessful',
    component: () => import(/* webpackChunkName: "passwordResetSuccessful" */ '../views/Auth/PasswordResetSuccessful.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/loginSuccess',
    name: 'loginSuccess',
    component: () => import(/* webpackChunkName: "loginSuccess" */ '../views/Auth/LoginSuccess.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/signUpEmail',
    name: 'signUpEmail',
    component: () => import(/* webpackChunkName: "signUpEmail" */ '../views/Auth/SignUpEmail.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/signUpDetails',
    name: 'signUpDetails',
    component: () => import(/* webpackChunkName: "signUpDetails" */ '../views/Auth/SignUpDetails.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/verifyEmailAddress',
    name: 'verifyEmailAddress',
    component: () => import(/* webpackChunkName: "verifyEmailAddress" */ '../views/Auth/VerifyEmailAddress.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/accountCreatedSuccessfully',
    name: 'accountCreatedSuccessfully',
    component: () => import(/* webpackChunkName: "accountCreatedSuccessfully" */ '../views/Auth/AccountCreatedSuccessfully.vue'),
    meta: { hideNavigation: true }
  },

  {
    path: '/homeView',
    name: 'homeView',
    component: () => import(/* webpackChunkName: "HomeView" */ '../views/DashBoard/HomeView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/transactionView',
    name: 'transactionView',
    component: () => import(/* webpackChunkName: "transactionView" */ '../views/DashBoard/TransactionView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/referalHomeView',
    name: 'referalHomeView',
    component: () => import(/* webpackChunkName: "referalHomeView" */ '../views/DashBoard/ReferalHomeView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/settingsView',
    name: 'settingsView',
    component: () => import(/* webpackChunkName: "settingsView" */ '../views/DashBoard/SettingsView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/accountView',
    name: 'accountView',
    component: () => import(/* webpackChunkName: "accountInfoView" */ '../views/DashBoard/AccountView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/loginAndSecurity',
    name: 'loginAndSecurity',
    component: () => import(/* webpackChunkName: "loginAndSecurity" */ '../views/DashBoard/LoginAndSecurity.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/fundWalletView',
    name: 'fundWalletView',
    component: () => import(/* webpackChunkName: "fundWalletView" */ '../views/DashBoard/FundWalletView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/billPayView',
    name: 'billPayView',
    component: () => import(/* webpackChunkName: "billPayView" */ '../views/DashBoard/BillPayView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/accountFundingView',
    name: 'accountFundingView',
    component: () => import(/* webpackChunkName: "accountFundingView" */ '../views/DashBoard/AccountFundingView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/accountFundingView2',
    name: 'accountFundingView2',
    component: () => import(/* webpackChunkName: "accountFundingView" */ '../views/DashBoard/AccountFundingView2.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/sendMoneyView',
    name: 'sendMoneyView',
    component: () => import(/* webpackChunkName: "sendMoneyView" */ '../views/DashBoard/SendMoneyView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/addRecipientView',
    name: 'addRecipientView',
    component: () => import(/* webpackChunkName: "addRecipientView" */ '../views/DashBoard/AddRecipientView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/transferAmountView',
    name: 'transferAmountView',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/TransferAmountView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/peerToPeerView',
    name: 'peerToPeerView',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/PeerToPeerView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/peerToPeerView2',
    name: 'peerToPeerView2',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/PeerToPeerView2.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/spotView',
    name: 'spotView',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/SpotView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/OrderDetail.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/upgradeAccount',
    name: 'upgradeAccount',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/UpgradeAccount.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/upgradeAccountPayment',
    name: 'upgradeAccountPayment',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/UpgradeAccountPayment.vue'),
    meta: { hideNavigation: true }
  },

  {
    path: '/upgradeAccountFundingView',
    name: 'upgradeAccountFundingView',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/UpgradeAccountFundingView.vue'),
    meta: { hideNavigation: true }
  },

  {
    path: '/upgradeAccountFundingView2',
    name: 'upgradeAccountFundingView2',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/UpgradeAccountFundingView2.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/addCard',
    name: 'AddCardView',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/AddCardView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/addCard2',
    name: 'AddCardView2',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/AddCardView2.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/addBank',
    name: 'AddBankView',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/AddBankView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/addBank2',
    name: 'AddBankView2',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/AddBankView2.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/addBank3',
    name: 'AddBankView3',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/AddBankView3.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/addBank4',
    name: 'AddBankView4',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/AddBankView4.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/schedulePayment',
    name: 'SchedulePaymentView',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/SchedulePaymentView.vue'),
    meta: { hideNavigation: true }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
