<template>
  <section id="SavedBeneficiaryCard" class="saved-beneficiaries">
    <div class="margin-bottom">
      <div class="text-block-60">SAVED BENEFICIARIES</div>
    </div>



    <div id="EmptyStateCard" class="empty-state" >
      <img src="@/assets/images/Frame-162940.png" loading="lazy" width="60" alt="">
      <p class="empty-state-text-2">You have no beneficiaries yet. When you do, it&#x27;ll show up here.</p>
    </div>

<!--    <div class="connected-banks-list" v-if="this.beneficiaries.data.length >0">-->
<!--      <a href="#" class="beneficiary-list w-inline-block" v-for="child in paginatedItems" :key="child.key">-->
<!--        <div class="profile-icon">-->
<!--          <div class="text-block-66">NG</div>-->
<!--        </div>-->
<!--        <div class="beneficiary-detail-wrapper">-->
<!--          &lt;!&ndash;                      <div class="text-block-64">Eniye Enekorogha</div>&ndash;&gt;-->
<!--          <div class="text-block-65">{{child.beneficiaryBankName}}</div>-->
<!--          <div class="text-block-65">{{child.beneficiaryAccountNumber}}</div>-->
<!--        </div>-->
<!--      </a>-->
<!--      <div class="pagination">-->
<!--        <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>-->
<!--        <div class="page-indicator">-->
<!--          Page {{ currentPage }} of {{ totalPages }}-->
<!--        </div>-->
<!--        <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>-->
<!--      </div>-->
<!--    </div>-->

  </section>
</template>

<script>
export default {
  name: "SavedBeneficiaryCard",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 2,
    }
  },
  computed:{
    // ...mapState({
    //   loading: state => state.beneficiary.loading,
    //   auth: state => state.auth,
    //   userInfo: state => state.auth.userInfo,
    //   beneficiaries: state => state.beneficiary.beneficiaries,
    // }),
    // nameEnquiryResponse() {
    //   return StoreUtils.rootGetters(StoreUtils.getters.fundTransfer.getNameEnquiryResponse)
    // },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      //remember
      return this.data.slice(startIndex, endIndex);
    },
    totalPages() {
      //remember
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
  },
  created() {
    // StoreUtils.rootGetters(StoreUtils.getters.beneficiary.getBeneficiaries);
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
  },
  mounted() {
    // StoreUtils.dispatch(StoreUtils.actions.beneficiary.beneficiaryRead);
  },
}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.empty-state{
  text-align: center;
}

.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #1d2939;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #98a2b3;
  padding-bottom: 1.25%;
  width: 65%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2%;
}

.empty-state-text-3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 8px;
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
  background: #0765FF;
  color: #FFFFFF;
  border: 1px solid #0765FF;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-size: 13px;
}

.empty-state-text-3:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  /*padding: 8px 14px;*/
  gap: 8px;
  font-size: 12px;
  width: 120px;
  height: 32px;
  background: transparent;
  color: #101828;
  border: 1px solid rgba(26, 29, 39, 0.05);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.page-indicator{
  color: #667085;
  font-weight: 200;
  font-size: 15px;
}
</style>