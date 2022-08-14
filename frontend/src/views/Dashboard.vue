<template>
  <div class="c-dashboard">
    <Sidebar></Sidebar>
    <div class="c-dashboard-view">
        <Header></Header>
        <div class="c-dashboard-view-header">
          <div class="container">
            <h1>Overview</h1>
          </div>
        </div>
        <div class="c-dashboard-view-transactions">
          <div class="container">
            <div class="row">
              <div class="col-3">
                <Transactions :transactions="this.dashboard.transactions"></Transactions>
              </div>
              <div class="col-9">
                <h4 class="u-color-black">Details</h4>
                details of the transactions will show here
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Transactions from '../components/Transactions/Transactions.vue';
import PeercoinPI from '@/services/PeercoinPI.js';

export default {
  name: "Dashboard",
  components: { Sidebar, Header, Transactions },
  data() {
    return {
      dashboard: {
        type: Array,
        default: null
      },
      balances: {
        type: Array
      },
      mintings: {
        type: Array
      },
      networkinfo: {
        type: Array
      },
      testmode: {
        type: Boolean
      }
    }
  },
  mounted() {
      let api = new PeercoinPI();
      var self = this;
      api.getDashboard().then(response => self.dashboard = response.data);
  }
}

</script>