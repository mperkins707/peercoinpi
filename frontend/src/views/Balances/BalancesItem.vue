<template>
    <div class="c-balances__item">
        <div class="c-balances__item__label">{{ this.label }}</div>
        <div class="c-balances__item__value">{{ this.value }}</div>
    </div>
</template>

<script>
export default {
    name: 'BalanceItem',
    props: {
        label: {
            type: String,
            default: 'label',
            required: true
        },
        value: {
            type: String,
            default: 'value',
            required: true
        }
    }
}
</script>