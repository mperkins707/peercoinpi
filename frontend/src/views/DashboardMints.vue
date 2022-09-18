<template>
  <div class="c-dashboard">
    <Sidebar :display="this.showSidebar"></Sidebar>
    <div class="c-dashboard-view">
        <Header :mode="this.dashboard.meta.chain"></Header>
        <div class="c-dashboard-view-header">
          <div class="container">
            <img src="../assets/ui/ui-menu.svg" @click="onMenuClick" v-if="!this.$store.state.settings.sidebarOpen">
            <h1>My Mints</h1>
          </div>
        </div>
        <div class="c-mints">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xl-3">
                <div class="c-mints__immature">
                  <h4 class="u-color-black">Immature ({{ this.dashboard.mints.immature.length }})</h4>
                  <span class="c-mints__immature-value">
                    <Mints :mints="this.dashboard.mints.immature"></Mints>
                  </span>
                  <div class="c-mints__immature--empty-container" v-if="this.dashboard.mints.immature.length === 0">
                    <img class="c-mints__immature--empty" src="../assets/ui/ui-empty.svg">
                  </div>  
                </div>
              </div>
              <div class="col-md-12 col-lg-12 col-xl-3">
                <div class="c-mints__minted">
                  <h4 class="u-color-black">Mature ({{ this.dashboard.mints.mature.length }})</h4>
                  <span class="c-mints__minted-value">
                    <Mints :mints="this.dashboard.mints.mature"></Mints>
                  </span>
                </div>
              </div>
              <div class="col-md-12 col-lg-12 col-xl-3">
                <div class="c-mints__mature">
                  <h5 class="u-color-black">Minted ({{ this.dashboard.mints.minted.length }})</h5>
                  <span class="c-mints__mature-value">
                    <MintedList :mints="this.dashboard.mints.minted"></MintedList>
                    <div class="c-mints__mature--empty-container" v-if="this.dashboard.mints.minted.length === 0">
                      <img class="c-mints__mature--empty" src="../assets/ui/ui-empty.svg">
                    </div>  
                  </span>
                </div>
              </div>
              <div class="col-md-12 col-lg-12 col-xl-3">
                <div class="c-mints__hashrate">
                  <h5 class="u-color-black">Hashrate</h5>
                  <span class="c-mints__hashrate-value">{{ this.dashboard.mints.hashrate }} </span>
                  <span class="c-mints__hashrate-desc">Gh/s</span>
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
import PeercoinPI from '@/services/PeercoinPI.js';
import Mints from '../components/Mints/Mints.vue';
import MintedList from '../components/Mints/MintedList.vue';
import store from '../store/index';


export default {
  name: "Dashboard",
  components: { Sidebar, Header, Mints, MintedList },
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
  methods: {
    onMenuClick() {
      this.showSidebar = !this.showSidebar;
        store.commit('SET_SIDEBAR_OPEN', this.showSidebar);
    },
  },
  mounted() {
      let api = new PeercoinPI();
      var self = this;
      api.getDashboard().then(response => self.dashboard = response.data);

      setInterval(function () {
        console.log('polling');
        api.getDashboard().then(response => self.dashboard = response.data);
      }.bind(this), 1000); 
  }
}

</script>