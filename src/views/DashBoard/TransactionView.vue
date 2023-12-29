<template>
<dashboard-layout>
  <div class="transaction-header-wrapper">
    <div data-animation="over-right" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
      <NavBar/>
    </div>
  </div>
  <div class="margin-top margin-small">
    <div class="transaction-wrapper">

      <div class="margin-bottom margin-medium">
        <TransactionFilterCard/>
      </div>

      <div v-show="this.userData === 'account1'">
<!--        <div class="transaction-list-wrapper">-->

<!--          <div class="transaction-list" style=" margin-bottom: 7%;">-->

<!--            <div class="transaction-list-content">-->


<!--              &lt;!&ndash;              <div class="txn-details transactions w-inline-block" v-for="items in this.paginatedItems" :key="items.key">&ndash;&gt;-->

<!--              &lt;!&ndash;                <div class="separate-1">&ndash;&gt;-->
<!--              &lt;!&ndash;                  <p>&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                    <img src="@/assets/images/outward.svg" loading="lazy" alt="">&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;                    <i class='bx bx-log-in-circle' v-if="items.drCr === 'CR'"></i>&ndash;&gt;-->
<!--              &lt;!&ndash;                    <i class='bx bx-log-out-circle' v-if="items.drCr === 'DR'" ></i>&ndash;&gt;-->
<!--              &lt;!&ndash;                  </p>&ndash;&gt;-->
<!--              &lt;!&ndash;                </div>&ndash;&gt;-->

<!--              &lt;!&ndash;                <div class="separate-2">&ndash;&gt;-->
<!--              &lt;!&ndash;                  <p class="name-text">{{userInfo.customerFirstName}} {{userInfo.customerLastName}}</p>&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                  <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                  <p class="text-block-77" v-else>{{items.transactionStatus}}</p>&ndash;&gt;&ndash;&gt;-->
<!--              &lt;!&ndash;                </div>&ndash;&gt;-->

<!--              &lt;!&ndash;                <div class="separate-3">&ndash;&gt;-->
<!--              &lt;!&ndash;                  <p class="amount-text" >{{ items.amount | formatAmount }}&ndash;&gt;-->
<!--              &lt;!&ndash;                    <span v-if="items.accountNumber === accountCAD">CAD</span>&ndash;&gt;-->
<!--              &lt;!&ndash;                    <span v-if="items.accountNumber === accountNaira">NGN</span>&ndash;&gt;-->
<!--              &lt;!&ndash;                  </p>&ndash;&gt;-->
<!--              &lt;!&ndash;&lt;!&ndash;                  <p class="converted-amount-text">{{items.amount * convertRate | formatAmount}} NGN</p>&ndash;&gt;&ndash;&gt;-->

<!--              &lt;!&ndash;                </div>&ndash;&gt;-->

<!--              &lt;!&ndash;                <div class="separate-3">&ndash;&gt;-->
<!--              &lt;!&ndash;                  <p class="amount-text" >{{items.eventDate | formatDate}}</p>&ndash;&gt;-->
<!--              &lt;!&ndash;                </div>&ndash;&gt;-->

<!--              &lt;!&ndash;              </div>&ndash;&gt;-->
<!--              <table>-->

<!--                <tbody>-->
<!--                <tr >-->
<!--                  <td>-->
<!--                    <div class="separate-1">-->
<!--                      <p>-->
<!--                        &lt;!&ndash;                    <i class='bx bx-log-in-circle' ></i>&ndash;&gt;-->
<!--                        <i class='bx bx-log-in-circle pending' ></i>-->
<!--                        &lt;!&ndash;                    <i class='bx bx-log-out-circle'  ></i>&ndash;&gt;-->
<!--                      </p>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>-->
<!--                    <div class="separate-2">-->
<!--                      <div class="name-text">{{this.contacts.LastName2}} {{this.contacts.FirstName2}}</div>-->
<!--                      &lt;!&ndash;                      <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>&ndash;&gt;-->
<!--                      &lt;!&ndash;                      <p class="text-block-77" v-else>{{items.transactionStatus}}</p>&ndash;&gt;-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>-->
<!--                    <div class="separate-3">-->
<!--                      <p class="amount-text" >&#36; {{formatNumber(this.contacts2.amount)}}.00-->
<!--                        &lt;!&ndash;                    <span v-if="items.accountNumber === accountCAD">CAD</span>&ndash;&gt;-->
<!--                        &lt;!&ndash;                    <span v-if="items.accountNumber === accountNaira">NG</span>&ndash;&gt;-->
<!--                      </p>-->

<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>-->
<!--                    <div class="separate-3">-->
<!--                      <p class="amount-text">28th Dec 2023</p>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                </tbody>-->

<!--              </table>-->

<!--              <div class="pagination">-->
<!--                <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>-->
<!--                <div class="page-indicator">-->
<!--                  Page {{ currentPage }} of 1-->
<!--                </div>-->
<!--                <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>-->
<!--              </div>-->

<!--            </div>-->

<!--          </div>-->

<!--        </div>-->

        <div class="empty-state">
          <img src="@/assets/images/Empty-Illustration.svg" loading="lazy" alt="">
          <div>You have no transactions yet!</div>
        </div>
      </div>

      <div v-show="this.userData === 'account2'">
        <div v-if="this.contacts2.amount > 0"  class="transaction-list-wrapper">

          <div class="transaction-list" style=" margin-bottom: 7%;">

            <div class="transaction-list-content">


              <!--              <div class="txn-details transactions w-inline-block" v-for="items in this.paginatedItems" :key="items.key">-->

              <!--                <div class="separate-1">-->
              <!--                  <p>-->
              <!--&lt;!&ndash;                    <img src="@/assets/images/outward.svg" loading="lazy" alt="">&ndash;&gt;-->
              <!--                    <i class='bx bx-log-in-circle' v-if="items.drCr === 'CR'"></i>-->
              <!--                    <i class='bx bx-log-out-circle' v-if="items.drCr === 'DR'" ></i>-->
              <!--                  </p>-->
              <!--                </div>-->

              <!--                <div class="separate-2">-->
              <!--                  <p class="name-text">{{userInfo.customerFirstName}} {{userInfo.customerLastName}}</p>-->
              <!--&lt;!&ndash;                  <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>&ndash;&gt;-->
              <!--&lt;!&ndash;                  <p class="text-block-77" v-else>{{items.transactionStatus}}</p>&ndash;&gt;-->
              <!--                </div>-->

              <!--                <div class="separate-3">-->
              <!--                  <p class="amount-text" >{{ items.amount | formatAmount }}-->
              <!--                    <span v-if="items.accountNumber === accountCAD">CAD</span>-->
              <!--                    <span v-if="items.accountNumber === accountNaira">NGN</span>-->
              <!--                  </p>-->
              <!--&lt;!&ndash;                  <p class="converted-amount-text">{{items.amount * convertRate | formatAmount}} NGN</p>&ndash;&gt;-->

              <!--                </div>-->

              <!--                <div class="separate-3">-->
              <!--                  <p class="amount-text" >{{items.eventDate | formatDate}}</p>-->
              <!--                </div>-->

              <!--              </div>-->
              <table>

                <tbody>
                <tr >
                  <td>
                    <div class="separate-1">
                      <p>
                        <!--                    <i class='bx bx-log-in-circle' ></i>-->
                        <i class='bx bx-log-in-circle pending' ></i>
                        <!--                    <i class='bx bx-log-out-circle'  ></i>-->
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="separate-2">
                      <div class="name-text">{{this.contacts.LastName2}} {{this.contacts.FirstName2}}</div>
                      <!--                      <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>-->
                      <!--                      <p class="text-block-77" v-else>{{items.transactionStatus}}</p>-->
                    </div>
                  </td>
                  <td>
                    <div class="separate-3">
                      <p class="amount-text" >&#36; {{formatNumber(this.contacts2.amount)}}.00
                        <!--                    <span v-if="items.accountNumber === accountCAD">CAD</span>-->
                        <!--                    <span v-if="items.accountNumber === accountNaira">NG</span>-->
                      </p>

                    </div>
                  </td>
                  <td>
                    <div class="separate-3">
                      <p class="amount-text">28th Dec 2023</p>
                    </div>
                  </td>
                </tr>
                </tbody>

              </table>

              <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
                <div class="page-indicator">
                  Page {{ currentPage }} of 1
                </div>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
              </div>

            </div>

          </div>

        </div>

        <div v-else class="empty-state">
          <img src="@/assets/images/Empty-Illustration.svg" loading="lazy" alt="">
          <div>You have no transactions yet!</div>
        </div>
      </div>


    </div>
  </div>
</dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import NavBar from "@/components/DashBoard/NavBar.vue";
import TransactionFilterCard from "@/components/DashBoard/TransactionFilterCard.vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "TransactionView",
  components: {TransactionFilterCard, NavBar, DashboardLayout},
  data() {
    return {
      amountCAD: "",
      amountNGN: "",
      currentPage: 1,
      itemsPerPage: 12,
      contacts: [],
      contacts2: [],
    };
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
    // paginatedItems() {
    //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    //   const endIndex = startIndex + this.itemsPerPage;
    //   //remember to change and point the right data
    //   return this.data.slice(startIndex, endIndex);
    // },
    // totalPages() {
    //   //remember to change and point the right data
    //   return Math.ceil(this.data.length / this.itemsPerPage);
    // },
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

    formatNumber(number) {
      // Convert the number to a string
      let numStr = String(number);

      // Split the string into integer and decimal parts (if any)
      const parts = numStr.split('.');
      const integerPart = parts[0];

      // Add commas for thousands and millions
      const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      // Join the integer and decimal parts (if any)
      const formattedNumber = parts.length === 2 ? formattedIntegerPart + '.' + parts[1] : formattedIntegerPart;

      return formattedNumber;
    },

  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "dagbuelawrence@yopmail.com"));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'FirstName': doc.data().FirstName,
        'FirstName2': doc.data().FirstName2,
        'LastName': doc.data().LastName,
        'LastName2': doc.data().LastName2,
        'Email': doc.data().Email,
        'Email2': doc.data().Email2,
        'Address': doc.data().Address,
        'Address2': doc.data().Address2,
        'City': doc.data().City,
        'City2': doc.data().City2,
        'Zip': doc.data().Zip,
        'Zip2': doc.data().Zip2,
        'AccountName1': doc.data().AccountName1,
        'AccountName2': doc.data().AccountName2,
        'Balance1': doc.data().Balance1,
        'Balance2': doc.data().Balance2,
        'IsPinSet': doc.data().IsPinSet,
        'AccountNumber1': doc.data().AccountNumber1,
        'AccountNumber2': doc.data().AccountNumber2,
        'AccountTier': doc.data().AccountTier,
        'AccountType': doc.data().AccountType,
        'DOB1': doc.data().DOB1,
        'DOB2': doc.data().DOB2,
        'SSN1': doc.data().SSN1,
        'SSN2': doc.data().SSN2,
        'state1': doc.data().state1,
        'state2': doc.data().state2,
      }
      this.contacts = data
    })

    const querySnapshot2 = await getDocs(collection(db, "Thomasadam2051@gmail.com"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'id': doc.id,
        'amount': doc.data().amount,
        'date': doc.data().date,
        'name': doc.data().name,
        'status': doc.data().status,
        'type': doc.data().type,
      }
      this.contacts2 = data
    })
  },
  mounted() {

  },
}
</script>

<style scoped>

.separate-2{
  display: block;
  padding-left: 3%;
}

.separate-3{
  padding-left: 10%;
}

.bx-log-in-circle{
  color: #0aae43;
  font-size: 32px;
  font-weight: 300;
}

.bx-log-out-circle{
  color: #DB657B;
  font-size: 32px;
  font-weight: 300;
}
.pending{
  color: #FFBF00;
}
.name-text{
  text-transform: lowercase;
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
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
    font-size: 10.5px;
    width: 100%;
  }
  .amount-text {
    font-size: 10.5px;
    font-weight: 700;
    width: 100%;
  }

  .bx-log-in-circle{
    font-size: 22px;
    margin-right: unset;
    padding-right: unset;
  }

  .bx-log-out-circle{
    font-size: 22px;
    margin-right: unset;
    padding-right: unset;
  }

}

</style>