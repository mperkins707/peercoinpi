<template>
    <div 
    class="c-mints__item"
    :class="{ 'c-mints__item--mature': this.mint.status == 'mature', 'c-mints__item--immature': this.mint.status == 'immature' }"
    >
        <div class="c-mints__item__amount">
            {{ this.mint.amount }}
        </div>
        <div class="c-mints__item__percentage">
            {{ this.mint.percentage }}%
        </div>
        <div class="c-mints__item__age">
            {{ this.mint['age-in-day'] }}
        </div>
        {{ this.mint.attempts }}
    </div>
</template>

<script>
export default {
    name: 'MintItem',
    props: {
        mint: {
            type: Array,
            default: null,
            required: true
        }
    }
}
</script>