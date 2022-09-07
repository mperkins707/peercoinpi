<template>
  <div class="c-dashboard">
    <Sidebar></Sidebar>
    <div class="c-dashboard-view">
        <Header :mode="this.dashboard.meta.chain"></Header>
        <div class="c-dashboard-view-header">
          <div class="container">
            <h1>Overview</h1>
          </div>
        </div>
        <div class="c-dashboard-view-transactions">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-2">
                <h4 class="u-color-black">Balances</h4>
                <Balances 
                  :balances="this.dashboard.balances" 
                  :latestBlock="this.dashboard.meta.blocks" 
                  :transactions="this.dashboard.transactions"
                  :status="this.dashboard.status"
                ></Balances>
              </div>
              <div class="col-md-12 col-lg-5">
                <Transactions 
                @selected="selected"
                :transactions="this.dashboard.transactions"
                ></Transactions>
              </div>
              <div class="col-md-12 col-lg-5" v-if="this.showDetails">
                <h4 class="u-color-black">Details</h4>
                <div class="row">
                  <BalancesItem label="Address" :link="updateBlockExplorerAddress(this.currentSelected.address)"></BalancesItem>
                  <BalancesItem label="Confirmations" :value="this.currentSelected.confirmations"></BalancesItem>
                  <BalancesItem label="Transaction ID" :link="updateBlockExplorerTx(this.currentSelected.txid)"></BalancesItem>
                  <BalancesItem label="Category" :value="this.currentSelected.category"></BalancesItem>
                </div>
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
import Balances from './Balances/Balances.vue';
import BalancesItem from './Balances/BalancesItem.vue';
import Transactions from '../components/Transactions/Transactions.vue';
import PeercoinPI from '@/services/PeercoinPI.js';
import explorer from '../config/explorer.json';

export default {
  name: "Dashboard",
  components: { Sidebar, Header, Balances, BalancesItem, Transactions },
  props: {
    showDetails: {
      type: Boolean,
      default: null,
      required: true
    }
  },
  methods: {
    selected(id) {
      console.log('GrandPa: anyone talking here ?');
      this.currentSelected = this.dashboard.transactions[ id ];
      this.showDetails = true;
    },
    updateBlockExplorerAddress(address) {
      let settings = explorer[this.$store.state.settings.explorer][this.$store.state.settings.chain]['address'];

      return {
        label: address,
        href: settings + address
      };
    },
    updateBlockExplorerTx(tx) {
      let settings = explorer[this.$store.state.settings.explorer][this.$store.state.settings.chain]['tx'];

      return {
        label: tx,
        href: settings + tx
      };
    }
  },
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
      },
      currentSelected: {
        type: Object,
        default: {}
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