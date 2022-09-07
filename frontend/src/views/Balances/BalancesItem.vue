<template>
    <div class="c-balances__item">
        <div class="c-balances__item__label">{{ this.label }}</div>
        <div class="c-balances__item__value" v-if="this.link == null">{{ this.value }}</div>
        <div class="c-balances__item__link" v-if="this.link != null">
            <a target="_blank" :href="this.link.href">{{ this.link.label }}</a>
            <img src="../../assets/ui/ui-external.svg" alt="External Link">
        </div>
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
        },
        link: {
            type: Object,
            default: null,
            required: false
        }
    }
}
</script>