<template>
    <div class="c-balances">
        <BalancesItem label="Balance" :value="this.balances.mine.trusted"></BalancesItem>
        <BalancesItem label="Pending" :value="this.balances.mine.untrusted_pending"></BalancesItem>
        <BalancesItem label="Total" :value="this.balances.mine.trusted"></BalancesItem>
        <BalancesItem label="Transactions" :value="this.transactions.length"></BalancesItem>
        <BalancesItem label="Status" :value="this.status"></BalancesItem>
        <BalancesItem label="Latest block" :value="this.latestBlock"></BalancesItem>
        <BalancesItem label="Difficulty" :value="this.difficulty"></BalancesItem>
    </div>        
</template>

<script>

import BalancesItem from './BalancesItem.vue';
export default {
    name: 'Balances',
    props: {
        balances: {
            type: Object
        },
        latestBlock: {
            type: String
        },
        transactions: {
            type: Object
        },
        status: {
            type: String
        },
        difficulty: {
            type: String
        }
    },
    components: { BalancesItem }
}
</script>