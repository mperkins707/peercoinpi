<template>
  <div class="c-home">
    <div class="container">
      <img class="c-home__splashscreen" src="https://camo.githubusercontent.com/8dad19be3fa0d7ba43c2eee717a408dbfd59df0ceec9d253b9c6331984471652/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3432363334303139313235393835323830312f313030343539383734343633393039383930302f50656572636f696e745f4d696e742e706e67">
      <div class="c-home__loading u-fade">
        <h1 class="c-home__message u-color-white">{{ this.dashboard.progress }} %</h1>
        <h6 class="c-home__message">( {{this.dashboard.mb }} MB )</h6>
        <h4 class="c-home__message" v-if="!this.dashboard.finished">{{ this.dashboard.meta.chain }} blockchain is loading ...</h4>
        <h4 class="c-home__message" v-else>We're now up-to-date with the {{ this.dashboard.meta.chain }} blockchain!</h4>
      </div>
    </div>
  </div>
</template>

<script>
import PeercoinPI from '@/services/PeercoinPI.js';

export default {
  watch: {
  },
  methods: {
  },
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
      api.getDashboard().then(response => self.dashboard = response.data);
  }
}
</script>
