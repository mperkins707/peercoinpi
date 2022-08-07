<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Balances</h1>
    {{ this.balances }}
    <h1>listMinting</h1>
    {{ this.mintings }}
    <h1>networkinfo</h1>
    {{ this.networkinfo }}
  </div>
</template>

<script>
import PeercoinRPC from '@/services/PeercoinRPC.js';

export default {
  name: 'Home',
  data() {
    return {
      balances: {
        type: Array
      },
      mintings: {
        type: Array
      },
      networkinfo: {
        type: Array
      }
    }
  },
  beforeMount() {
      let peercoinRpc = new PeercoinRPC();
      this.balances = peercoinRpc.getBalances();
      this.mintings = peercoinRpc.getListMintings();
      this.networkinfo = peercoinRpc.getNetworkInfo();
  }
}
</script>
