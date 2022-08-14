<template>
    <div class="c-transactions__item"
    :class="{ 'c-transactions__item--disabled': this.confirmations < 8 }"
    >
        <div class="c-transactions__item__date">
            {{ this.timereceived }}
        </div>
        <div class="c-transactions__item__icon">
            <div class="c-sidebar__items--icon rotateLeft" v-if="this.category === 'receive'">
              <img height=32px src="../../assets/ui/ui-received.svg" alt="Received">
            </div>
            <div class="c-sidebar__items--icon rotateRight" v-if="this.category === 'send'">
              <img height=32px src="../../assets/ui/ui-received.svg" alt="Send">
            </div>
        </div>
        <div class="c-transactions__item__amount c-transactions__item__amount--received" v-if="this.category === 'receive'">
            +{{ this.amount }}
        </div>
        <div class="c-transactions__item__amount c-transactions__item__amount--send" v-if="this.category === 'send'">
            {{ this.amount }}
        </div>
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