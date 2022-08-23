<template>
  <div class="c-dashboard">
    <Sidebar></Sidebar>
    <div class="c-dashboard-view">
        <Header></Header>
        <div class="c-dashboard-view-header">
          <div class="container">
            <h1>My Mints</h1>
          </div>
        </div>
        <div class="c-mints">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xl-3">
                <h4 class="u-color-black">Immature ({{ this.dashboard.mints.immature.length }})</h4>
                <Mints :mints="this.dashboard.mints.immature"></Mints>
              </div>
              <div class="col-md-12 col-lg-12 col-xl-3">
                <h4 class="u-color-black">Mature ({{ this.dashboard.mints.mature.length }})</h4>
                <Mints :mints="this.dashboard.mints.mature"></Mints>
              </div>
              <div class="col-md-12 col-lg-12 col-xl-3">
                <h4 class="u-color-black">Minted (0)</h4>
              </div>
              <div class="col-md-12 col-lg-12 col-xl-3">
                <h4 class="u-color-black">Hashrate</h4>
                <div class="c-mints__hashrate">
                  <h3 class="u-color-black">{{ this.dashboard.mints.hashrate }} attempts</h3>
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

export default {
  name: "Dashboard",
  components: { Sidebar, Header, Mints },
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

      setInterval(function () {
        console.log('polling');
        api.getDashboard().then(response => self.dashboard = response.data);
      }.bind(this), 1000); 
  }
}

</script>