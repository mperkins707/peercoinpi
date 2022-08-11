<template>
  <div class="c-dashboard">
    <div class="container">
      <Header></Header>
      <h1>Overview</h1>
      <h2 class="u-color-black">{{ this.dashboard.balances.mine.trusted }}</h2>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import PeercoinPI from '@/services/PeercoinPI.js';

export default {
  name: "Dashboard",
  components: { Header },
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