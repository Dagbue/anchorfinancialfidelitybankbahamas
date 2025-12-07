<!-- TransactionView.vue -->
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

        <!-- Transactions List -->
        <div v-if="transactions.length > 0" class="transaction-list-wrapper">
          <div class="transaction-list" style="margin-bottom: 7%;">

            <div class="transaction-list-content">
              <table>
                <tbody>
                <tr v-for="tx in paginatedTransactions" :key="tx.id">
                  <td>
                    <div class="separate-1">
                      <p><i :class="tx.icon"></i></p>
                    </div>
                  </td>
                  <td>
                    <div class="separate-2">
                      <div class="name-text">{{ formatFrom(tx.from) }}</div>
                    </div>
                  </td>
                  <td>
                    <div class="separate-2">
                      <div class="name-text">{{ formatTo(tx.to) }}</div>
                    </div>
                  </td>
                  <td>
                    <div class="separate-3">
                      <p class="amount-text">{{ tx.amount }}</p>
                    </div>
                  </td>
                  <td>
                    <div class="separate-3">
                      <p class="amount-text">{{ tx.date }}</p>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>

              <!-- Pagination -->
              <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
                <div class="page-indicator">Page {{ currentPage }} of {{ totalPages }}</div>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <img src="@/assets/images/Empty-Illustration.svg" loading="lazy" alt="">
          <div>You have no transactions yet!</div>
        </div>

      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import NavBar from "@/components/DashBoard/NavBar.vue";
import TransactionFilterCard from "@/components/DashBoard/TransactionFilterCard.vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
  name: "TransactionView",
  components: { TransactionFilterCard, NavBar, DashboardLayout },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 7,

      transactions: [
        { id: 1, icon: "bx bx-log-out-circle", from: "Virtual wallet5488", to: "Via Mgsb E*trade", amount: "$ 20,000.00", date: "21st Nov 2025" },
        { id: 2, icon: "bx bx-log-out-circle", from: "Virtual wallet5488", to: "Via Mgsb E*trade", amount: "$ 20,000.00", date: "17th Nov 2025" },
        { id: 3, icon: "bx bx-log-in-circle",  from: "Cr",             to: "Linda Smith",       amount: "$ 40,000.00", date: "12th Nov 2024" },
        { id: 4, icon: "bx bx-log-out-circle", from: "Dr",             to: "Thomas Smith",     amount: "$ 40,000.00", date: "12th Nov 2024" },
        { id: 5, icon: "bx bx-log-in-circle",  from: "Penalty fee",    to: "BTC",               amount: "$ 8,000.00",  date: "7th Nov 2024" },
        { id: 6, icon: "bx bx-log-in-circle",  from: "ExxonMobil",     to: "",                  amount: "$ 185,000.00", date: "7th Oct 2024" },
        { id: 7, icon: "bx bx-log-in-circle",  from: "Cr",             to: "",                  amount: "$ 2,000.00",  date: "17th Aug 2024" },
        { id: 8, icon: "bx bx-log-in-circle",  from: "Cr",             to: "",                  amount: "$ 1,000.00",  date: "3rd Jan 2024" },
        { id: 9, icon: "bx bx-log-in-circle",  from: "Cr",             to: "",                  amount: "$ 1,000.00",  date: "3rd Jan 2024" },
        { id: 10,icon: "bx bx-log-in-circle",  from: "ExxonMobil",     to: "",                  amount: "$ 387,000.00", date: "28th Dec 2023" }
      ],

      contacts: {}
    };
  },

  computed: {
    paginatedTransactions() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.transactions.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.transactions.length / this.itemsPerPage);
    }
  },

  methods: {
    previousPage() { if (this.currentPage > 1) this.currentPage--; },
    nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; },

    // Smart text formatting (same logic as TransactionsCard)
    formatFrom(text) {
      if (text.includes("Mgsb E*trade")) return text; // Preserve exact case
      return this.capitalizeWords(text);
    },

    formatTo(text) {
      if (!text) return '';
      const lower = text.toLowerCase();
      if (lower === "btc" || lower === "bitcoin") return "BTC";
      if (text.includes("Mgsb E*trade")) return text; // Preserve exact case
      return this.capitalizeWords(text);
    },

    capitalizeWords(str) {
      if (!str) return '';
      return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    }
  },

  async created() {
    const querySnapshot = await getDocs(collection(db, "dagbuelawrence@yopmail.com"));
    querySnapshot.forEach((doc) => {
      this.contacts = {
        FirstName: doc.data().FirstName || "John",
        FirstName2: doc.data().FirstName2 || "Lawrence",
        LastName: doc.data().LastName || "Doe",
        LastName2: doc.data().LastName2 || "Dagbue",
      };
    });

    this.transactions.forEach(tx => {
      if (tx.to === "") {
        if (tx.amount === "$ 185,000.00" || tx.amount === "$ 2,000.00" || tx.amount === "$ 387,000.00") {
          tx.to = `${this.contacts.LastName2} ${this.contacts.FirstName2}`;
        } else if (tx.amount === "$ 1,000.00" && tx.date.includes("Jan")) {
          tx.to = `${this.contacts.LastName} ${this.contacts.FirstName}`;
        }
      }
    });
  }
};
</script>

<style scoped>
/* ==================== CRITICAL TEXT FIXES ==================== */
.name-text {
  text-transform: none !important;     /* Stop forcing lowercase */
  font-size: 12px;
}

td::first-letter {
  text-transform: none !important;     /* Disable global first-letter capitalize */
}

/* Now JavaScript fully controls capitalization → perfect result */

/* Rest of your original styles (unchanged) */
.separate-2 { display: block; padding-left: 3%; }
.separate-3 { padding-left: 10%; }

.bx-log-in-circle  { color: #0aae43; font-size: 32px; font-weight: 300; }
.bx-log-out-circle { color: #DB657B; font-size: 32px; font-weight: 300; }
.pending { color: #FFBF00; }
.amount-text { font-size: 11px; }

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
}

.previous {
  font-size: 12px;
  width: 120px;
  height: 32px;
  background: transparent;
  color: #101828;
  border: 1px solid rgba(26, 29, 39, 0.05);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  cursor: pointer;
}

.previous:hover { box-shadow: 0 0 5px rgba(0, 0, 0, 0.4); }
.page-indicator { color: #667085; font-weight: 200; font-size: 15px; }

table { border-collapse: collapse; width: 100%; }
tr { border-bottom: 1px solid rgba(26, 29, 39, 0.05); }
td {
  text-align: center;
  padding: 15px 8px;
  color: #667085;
  font-weight: 200;
  font-size: 15px;
}

@media (max-width: 500px) {
  .page-indicator { font-size: 11px; }
  .previous { font-size: 11px; width: 105px; height: 31px; }
  .name-text { font-size: 10px; }
  .amount-text { font-size: 10px; font-weight: 700; }
  .bx-log-in-circle, .bx-log-out-circle { font-size: 22px; }
}
</style>