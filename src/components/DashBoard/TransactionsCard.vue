<!-- TransactionsCard.vue -->
<template>
  <section id="TransactionsCard" class="dashboard-section-wrapper margin-bottom margin-medium">
    <div class="margin-bottom margin-small">
      <div class="dashboard-section-header">
        <div class="text-style-allcaps">Transactions</div>
        <div class="text-size-tiny text-weight-bold text-red">
          <router-link to="/transactionView"><a class="link-2">View All</a></router-link>
        </div>
      </div>
    </div>

    <div class="transactions-wrapper padding-custom2">

      <div v-if="transactions.length > 0" class="transaction-state">
        <div class="transactions _1 w-inline-block">
          <table>
            <tbody>
            <tr v-for="(tx, index) in paginatedTransactions" :key="index">
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

      <!-- Empty State -->
      <section v-else id="EmptyStateCard" class="empty-state">
        <img src="@/assets/images/Frame-162940.png" loading="lazy" width="40" alt="">
        <div class="margin-top margin-small">
          <div class="empty-state-text">You have no transaction yet. When you do, it'll show up here.</div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
  name: "TransactionsCard",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      transactions: [
        { icon: "bx bx-log-out-circle", from: "Virtual wallet5488", to: "Via Mgsb E*trade", amount: "$ 20,000.00", date: "21st Nov 2025" },
        { icon: "bx bx-log-out-circle", from: "Virtual wallet5488", to: "Via Mgsb E*trade", amount: "$ 20,000.00", date: "17th Nov 2025" },
        { icon: "bx bx-log-in-circle",  from: "Cr",             to: "",           amount: "$ 40,000.00", date: "12th Nov 2024" },
        { icon: "bx bx-log-out-circle", from: "Dr",             to: "Thomas Smith", amount: "$ 40,000.00", date: "12th Nov 2024" },
        { icon: "bx bx-log-in-circle",  from: "Penalty fee",    to: "BTC",        amount: "$ 8,000.00",  date: "7th Nov 2024" },
        { icon: "bx bx-log-in-circle",  from: "ExxonMobil",     to: "",           amount: "$ 185,000.00", date: "7th Oct 2024" },
        { icon: "bx bx-log-in-circle",  from: "Cr",             to: "",           amount: "$ 2,000.00",  date: "17th Aug 2024" },
        { icon: "bx bx-log-in-circle",  from: "Cr",             to: "",           amount: "$ 1,000.00",  date: "3rd Jan 2024" },
        { icon: "bx bx-log-in-circle",  from: "Cr",             to: "",           amount: "$ 1,000.00",  date: "3rd Jan 2024" },
        { icon: "bx bx-log-in-circle",  from: "ExxonMobil",     to: "",           amount: "$ 387,000.00", date: "28th Dec 2023" }
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

    // Fix capitalization intelligently
    formatFrom(text) {
      if (text === "Mgsb E*trade") return "Mgsb E*trade";  // Preserve exact case
      return this.capitalizeWords(text);
    },

    formatTo(text) {
      if (!text) return '';
      const lower = text.toLowerCase();
      if (lower === "btc" || lower === "bitcoin") return "BTC";
      if (text === "Mgsb E*trade") return "Mgsb E*trade";   // Preserve exact case
      return this.capitalizeWords(text);
    },

    capitalizeWords(str) {
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
        if (tx.amount.includes("185,000") || tx.amount.includes("2,000") || tx.amount.includes("387,000")) {
          tx.to = `${this.contacts.LastName2} ${this.contacts.FirstName2}`;
        } else if (tx.amount.includes("1,000") || tx.amount.includes("40,000")) {
          tx.to = `${this.contacts.LastName} ${this.contacts.FirstName}`;
        }
      }
    });
  }
};
</script>

<style scoped>
/* ==================== CRITICAL FIXES ==================== */
.name-text {
  text-transform: none !important;     /* Disable forced lowercase */
}

td::first-letter {
  text-transform: none !important;     /* Disable global first-letter capitalize */
}

/* Now we control capitalization 100% via JavaScript → perfect result */

/* Rest of your original styles (unchanged) */
h3 { margin: 40px 0 0 0; }
ul { list-style-type: none; padding: 0; }
li { display: inline-block; margin: 0 10px; }

.separate-1, .separate-2, .separate-3 { }
.bx-log-in-circle  { color: #0aae43; font-size: 25px; font-weight: 300; }
.bx-log-out-circle { color: #DB657B; font-size: 25px; font-weight: 300; }
.pending { color: #FFBF00; }

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
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
  .name-text, .amount-text { font-size: 10px; }
  .bx-log-in-circle, .bx-log-out-circle { font-size: 22px; }
}
</style>