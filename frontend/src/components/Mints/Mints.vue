<template>
    <div class="c-mints">
        <div v-for="(mint, index) in this.mints" v-bind:key="index">
            <MintItem :mint="mint"></MintItem>
        </div>
    </div>
</template>

<script>

import MintItem from './MintItem.vue';
export default {
    name: 'Mints',
    components: { MintItem },
    props: {
        mints: { 
        type: Object,
        default: null,
        required: true
        }
    }
}
</script>