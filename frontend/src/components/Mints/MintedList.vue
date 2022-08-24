<template>
    <div class="c-minted-list">
        <div v-for="(mint, index) in this.mints" v-bind:key="index">
            <MintedItem :mint="mint"></MintedItem>
        </div>
    </div>
</template>

<script>

import MintedItem from './MintedItem.vue';
export default {
    name: 'MintedList',
    components: { MintedItem },
    props: {
        mints: { 
            type: Object,
            default: null,
            required: true
        }
    }
}
</script>