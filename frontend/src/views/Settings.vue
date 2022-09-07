<template>
  <div class="c-settings">
    <Sidebar :display="this.showSidebar"></Sidebar>
    <div class="c-settings-view">
        <div class="c-settings-view-header">
          <div class="container">
            <div class="c-settings-view-header">
              <img src="../assets/ui/ui-menu.svg" @click="onMenuClick" v-if="!this.showSidebar">
              <h1>Settings</h1>
            </div>
          </div>
        </div>
        <div class="c-settings-view-options">
          <div class="container">
            <div class="row c-settings-view-options-row">
              <div class="col-sm-10 col-md-4">
                <div class="row">
                  <h3>Chain mode</h3>
                </div>
                <div class="row">
                  <h6>Default: testnet</h6>
                </div>
                <toggle-button v-model="testnetMode"
                    :width="100"
                    :height="30"
                    :sync=true
                    :labels="{checked: 'TESTNET', unchecked: 'MAINET'}"
                    @change="onTestnetModeChange"
                  />
                  <div class="row c-settings-view-options__warning" v-if="!this.testnetMode">
                    <div class="alert alert-danger" role="alert">
                      {{ this.warningMessage }}
                      <br>Use at your own risk.
                    </div>
                  </div>
              </div>
            </div>
            <div class="row c-settings-view-options-row">
              <div class="col-sm-10 col-md-4">
                <div class="row">
                  <h3>Block explorer</h3>
                </div>
                <div class="row">
                  <h6>Default: TREZOR</h6>
                </div>
                <div class="row">
                  <select class="form-select" v-model="explorer" @change="onExplorerChange">
                    <option value="trezor">Trezor</option>
                    <option value="cryptoid">Cryptoid</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row c-settings-view-options-row">
              <div class="col-sm-10 col-md-4">
                <div class="row">
                  <h3>Theme</h3>
                </div>
                <div class="row">
                  <h6>Default: Dark</h6>
                </div>
                <div class="row">
                  <select class="form-select" v-model="theme" @change="onThemeChange">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
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
import store from '../store/index';

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
      testnetMode: null,
      showSidebar: null

    }
  },
  methods: {
    onMenuClick() {
      this.showSidebar = !this.showSidebar;
    },
    onThemeChange(event) {
      if ( event.target.value === '' ) {
        return;
      }

      store.commit('SET_THEME', event.target.value);
    },
    onExplorerChange(event) {
      if ( event.target.value === '' ) {
        return;
      }

      store.commit('SET_EXPLORER', event.target.value);
    },
    onTestnetModeChange(toggle) {
      let api = new PeercoinPI();
      toggle.value === true ? api.setSettingsMode('testnet') : api.setSettingsMode('main');
      toggle.value === true ? store.commit('SET_CHAIN', 'testnet') : store.commit('SET_CHAIN', 'main');
    }
  },
  beforeMount() {
      let api = new PeercoinPI();
      var self = this;
      api.getDashboard().then(response => {
        self.dashboard = response.data;
        self.testnetMode = response.data.meta.chain == 'test' ? true : false;
      });

      // load state settings
      let data = JSON.parse(localStorage.getItem('store'));
      if ( data !== null ) {
        this.explorer = data.settings.explorer;
        this.theme    = data.settings.theme;
      }
  }
}
</script>
