<template>
    <div class="c-transactions">
        <h4 class="u-color-black">My transactions</h4>
        <div class="c-transactions__container">
            <div v-for="(transaction, index) in this.transactions" v-bind:key="index">
                <TransactionsItemVue 
                    @selected="selected"
                    :id="index"
                    :address="transaction.address"
                    :amount="transaction.amount"
                    :timereceived="transaction.timereceived"
                    :category="transaction.category"
                    :confirmations="transaction.confirmations"
                ></TransactionsItemVue>
            </div>
        </div>
    </div>
</template>

<script>
import TransactionsItemVue from './TransactionsItem.vue';

export default {
    name: "Transactions",
    components: { TransactionsItemVue },
    methods: {
        selected(id) {
            console.log('Parent: Yes?')
            this.$emit('selected', id);
        }
    },  
    props: {
        transactions: { 
            type: Array,
            default: null,
            required: true
        },
    }
}
</script>