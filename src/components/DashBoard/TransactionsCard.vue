<!--suppress UnreachableCodeJS -->
<template>
  <section id="TransactionsCard" class="dashboard-section-wrapper margin-bottom margin-medium">
    <div class="margin-bottom margin-small">
      <div class="dashboard-section-header">
        <div class="text-style-allcaps">Transactions</div>
        <div class="text-size-tiny text-weight-bold text-red">
          <router-link to="/transactionView"><a class="link-2" >View All</a></router-link>
        </div>
      </div>
    </div>
    <div class="transactions-wrapper padding-custom2">

<!--      <div v-if="this.readAllWalletTransaction.data.length > 0" class="transaction-state">-->

<!--        <div class="transactions _1 w-inline-block">-->

<!--          &lt;!&ndash;                  <div class="txn-details" style="justify-content: space-between" v-for="items in this.paginatedItems" :key="items.key">&ndash;&gt;-->

<!--          &lt;!&ndash;                    <div class="separate-1">&ndash;&gt;-->
<!--          &lt;!&ndash;                      <p>&ndash;&gt;-->
<!--          &lt;!&ndash;                        <i class='bx bx-log-in-circle' v-if="items.drCr === 'CR'"></i>&ndash;&gt;-->
<!--          &lt;!&ndash;                        <i class='bx bx-log-out-circle' v-if="items.drCr === 'DR'" ></i>&ndash;&gt;-->
<!--          &lt;!&ndash;                      </p>&ndash;&gt;-->
<!--          &lt;!&ndash;                    </div>&ndash;&gt;-->

<!--          &lt;!&ndash;                    <div class="separate-2">&ndash;&gt;-->
<!--          &lt;!&ndash;                      <div class="name-text">{{userInfo.customerFirstName}} {{userInfo.customerLastName}}</div>&ndash;&gt;-->
<!--          &lt;!&ndash;&lt;!&ndash;                      <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>&ndash;&gt;&ndash;&gt;-->
<!--          &lt;!&ndash;&lt;!&ndash;                      <p class="text-block-77" v-else>{{items.transactionStatus}}</p>&ndash;&gt;&ndash;&gt;-->
<!--          &lt;!&ndash;                    </div>&ndash;&gt;-->

<!--          &lt;!&ndash;                    <div class="separate-3">&ndash;&gt;-->
<!--          &lt;!&ndash;                      <p class="amount-text" >{{ items.amount | formatAmount }}&ndash;&gt;-->
<!--          &lt;!&ndash;                        <span v-if="items.accountNumber === accountCAD">CAD</span>&ndash;&gt;-->
<!--          &lt;!&ndash;                        <span v-if="items.accountNumber === accountNaira">NG</span>&ndash;&gt;-->
<!--          &lt;!&ndash;                      </p>&ndash;&gt;-->

<!--          &lt;!&ndash;                    </div>&ndash;&gt;-->

<!--          &lt;!&ndash;                    <div class="separate-3">&ndash;&gt;-->
<!--          &lt;!&ndash;                      <p class="amount-text">{{items.eventDate | formatDate }}</p>&ndash;&gt;-->
<!--          &lt;!&ndash;                    </div>&ndash;&gt;-->

<!--          &lt;!&ndash;                  </div>&ndash;&gt;-->

<!--          <table >-->

<!--            <tbody  v-for="items in paginatedItems" :key="items.key">-->
<!--            <tr >-->
<!--              <td>-->
<!--                <div class="separate-1">-->
<!--                  <p>-->
<!--                    <i class='bx bx-log-in-circle' v-if="items.drCr === 'CR'"></i>-->
<!--                    <i class='bx bx-log-out-circle' v-if="items.drCr === 'DR'" ></i>-->
<!--                  </p>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="separate-2">-->
<!--                  <div class="name-text">{{userInfo.customerFirstName}} {{userInfo.customerLastName}}</div>-->
<!--                  &lt;!&ndash;                      <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>&ndash;&gt;-->
<!--                  &lt;!&ndash;                      <p class="text-block-77" v-else>{{items.transactionStatus}}</p>&ndash;&gt;-->
<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="separate-3">-->
<!--                  <p class="amount-text" >{{ items.amount | formatAmount }}-->
<!--                    <span v-if="items.accountNumber === accountCAD">CAD</span>-->
<!--                    <span v-if="items.accountNumber === accountNaira">NG</span>-->
<!--                  </p>-->

<!--                </div>-->
<!--              </td>-->
<!--              <td>-->
<!--                <div class="separate-3">-->
<!--                  <p class="amount-text">{{items.eventDate | formatDate }}</p>-->
<!--                </div>-->
<!--              </td>-->

<!--            </tr>-->
<!--            </tbody>-->

<!--          </table>-->

<!--          <div class="pagination">-->
<!--            <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>-->
<!--            <div class="page-indicator">-->
<!--              Page {{ currentPage }} of {{ totalPages }}-->
<!--            </div>-->
<!--            <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->

      <section  id="EmptyStateCard" class="empty-state">
        <img src="@/assets/images/Frame-162940.png" loading="lazy" width="40" alt="">
        <div class="margin-top margin-small">
          <div class="empty-state-text">You have no transaction yet. When you do, it&#x27;ll show up here.</div>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  name: "TransactionsCard",
  data() {
    return {
      amountCAD: "",
      amountNGN: "",
      currentPage: 1,
      itemsPerPage: 12,
    };
  },
  computed: {

    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      //remember to change and point the right data
      return this.data.slice(startIndex, endIndex);
    },
    totalPages() {
      //remember to change and point the right data
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
  },
  methods: {
    // convertCADtoNGN() {
    //   this.amountNGN = this.amountCAD * this.activeRate.data[1].rateSell;
    // },
    // convertNGNtoCAD() {
    //   this.amountCAD = this.amountNGN / this.activeRate.data[0].rateSell;
    // },
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
  created() {

  },
  mounted() {

  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.separate-1{
  /*padding-left: 2%;*/
}

.separate-2{
  display: block;
  /*padding-left: 8.5%;*/
  /*margin-top: 2%;*/
}

.separate-3{
  /*padding-left: 3%;*/
}

.bx-log-in-circle{
  color: #0aae43;
  font-size: 25px;
  font-weight: 300;
}

.bx-log-out-circle{
  color: #DB657B;
  font-size: 25px;
  font-weight: 300;
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

table {
  border-collapse: collapse;
  width: 100%;
}

tr{
  border-bottom: 1px solid rgba(26, 29, 39, 0.05);
}

th {

  /*background-color: #F9FBFD;*/
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  /*color: #667085;*/
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 15px 8px;
  /*letter-spacing: 1px;*/
  color: #667085;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

td::first-letter {
  text-transform: capitalize;
}

@media (max-width: 500px) {
  .page-indicator{
    font-size: 11px;
  }
  .previous{
    font-size: 11px;
    width: 105px;
    height: 31px;
  }
  .name-text {
    font-size: 11px;
    width: 100%;
  }
  .amount-text {
    font-size: 11px;
    font-weight: 700;
    width: 100%;
  }

  .bx-log-in-circle{
    font-size: 22px;
  }

  .bx-log-out-circle{
    font-size: 22px;
  }

}

</style>