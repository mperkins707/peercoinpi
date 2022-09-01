<template>
  <div class="c-settings">
    <Sidebar></Sidebar>
    <div class="c-settings-view">
        <div class="c-settings-view-header">
          <div class="container">
            <h1>Settings</h1>
            {{ this.testnetMode }}
          </div>
        </div>
        <div class="c-settings-view-options">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <div class="row">
                  <h3>Chain mode</h3>
                </div>
                <div class="row">
                  <h6>Default: testnet</h6>
                </div>
                <toggle-button v-model="testnetMode"
                    :width="100"
                    :height="30"
                    :labels="{checked: 'TESTNET', unchecked: 'MAINET'}"
                  />
                  <div class="row c-settings-view-options__warning" v-if="!this.testnetMode">
                    <div class="alert alert-danger" role="alert">
                      {{ this.warningMessage }}
                      <br>Use at your own risk.
                    </div>
                  </div>
              </div>
              <div class="col-4">
                <div class="row">
                  <h3>Block explorer</h3>
                </div>
                <div class="row">
                  <h6>Default: TREZOR</h6>
                </div>
                <div class="row">
                  <select class="form-select" v-model="explorer">
                    <option value="https://tblockbook.peercoin.net/">Trezor</option>
                    <option value="https://chainz.cryptoid.info/ppc/">Chainz</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import PeercoinPI from '@/services/PeercoinPI.js';

export default {
  name: 'Settings',
  components: { Sidebar },
  data() {
    return {
      warningMessage: 'Risky roads often leads to beautiful destination. Unfortunately, mainet is not recommanded (yet).',
      dashboard: {
        type: Array,
        default: null
      },
      explorer: 'https://tblockbook.peercoin.net/',
      testnetMode: Boolean
    }
  },
  watch: {
    testnetMode(oldValue, newValue) {
      let api = new PeercoinPI();
      console.log(newValue);
      newValue === true ? api.setSettingsMode('main') : api.setSettingsMode('testnet');
    }
  },
  beforeMount() {
      let api = new PeercoinPI();
      var self = this;
      api.getDashboard().then(response => {
        self.dashboard = response.data;
      });
      this.testnetMode = !this.dashboard.testnetMode;
  }, 
}
</script>
