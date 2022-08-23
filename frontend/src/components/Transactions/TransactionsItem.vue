<template>
    <div class="c-transactions__item"
    :id="this.id"
    v-on:click="this.onClick"
    :class="{ 'c-transactions__item--disabled': this.confirmations < 8 }"
    >
        <div class="c-transactions__item__icon">
            <div class="c-transactions__item__icon c-transactions__item__icon-left rotateLeft" v-if="this.category === 'receive'">
              <img height=32px src="../../assets/ui/ui-received.svg" alt="Received">
            </div>
            <div class="c-transactions__item__icon c-transactions__item__icon-right rotateRight" v-if="this.category === 'send'">
              <img height=32px src="../../assets/ui/ui-received.svg" alt="Send">
            </div>
            <div class="c-transactions__item__icon c-transactions__item__icon-left rotateLeft" v-if="this.category === 'stake'">
              <img height=32px src="../../assets/ui/ui-received.svg" alt="Stake">
            </div>
        </div>
        <div class="c-transactions__item__date">
            {{ this.timereceived }}
        </div>
        <div class="c-transactions__item__amount c-transactions__item__amount--received" v-if="this.category === 'stake'">
            +{{ this.amount }}
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
    name: "TransactionsItem",
    props: {
        id: {
            type: Number,
            default: null,
            required: true
        },
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
    },
    methods: {
        onClick: function() {
            console.log('Child: Hey dad!');
            this.$emit('selected', this.id);
        }
    }
}
</script>