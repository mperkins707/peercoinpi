<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Dashboard</h1>
    {{ this.dashboard }}

    <input type="checkbox" v-model="testmode">
    <h1 v-if="this.testmode">
      Test Mode Enabled
    </h1>
    <h1 v-else>
      Main Mode
    </h1>
  </div>
</template>

<script>
import PeercoinPI from '@/services/PeercoinPI.js';

export default {
  name: 'Home',
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
      api.getDashboard().then(response => self.dashboard = response.data)
  }
}
</script>
