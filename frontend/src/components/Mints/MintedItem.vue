<template>
    <div 
    class="c-minted-list__item c-minted-list__item--staked"
    >
        <div class="c-minted-list__item__amount">
            + {{ this.mint.amount }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MintedItem',
    props: {
        mint: {
            type: Array,
            default: null,
            required: true
        }
    }
}
</script>