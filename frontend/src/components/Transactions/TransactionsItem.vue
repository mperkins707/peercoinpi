<template>
    <div class="c-transactions-item"
    :class="{ 'c-transactions-item--disabled': this.confirmations < 8 }"
    >
        <div class="c-transactions-item__date">
            {{ this.timereceived }}
        </div>
        <div class="c-transactions-item__address">
            ({{ this.address }})
        </div>
        <div class="c-transactions-item__amount c-transactions-item__amount--receive" v-if="this.category === 'receive'">
            +{{ this.amount}}
        </div>
        <div class="c-transactions-item__amount c-transactions-item__amount--send" v-if="this.category === 'send'">
            {{ this.amount}}
        </div>
        {{ this.confirmations }}
    </div>
</template>

<script>
export default {
  watch: {
  },
  methods: {
  },
    name: "TransactionsItem",
    props: {
        confirmations: {
            type: Number,
            default: null,
            required: true
        },
        category: {
            type: String,
            default: null,
            required: true
        },
        address: { 
            type: String,
            default: null,
            required: true
        },
        amount: {
            type: Number,
            default: null,
            required: true
        },
        timereceived: {
            type: String,
            default: null,
            required: true 
        }
    }
}
</script>