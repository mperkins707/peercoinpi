<template>
    <div class="c-header u-color-white"
    :class="{ 'c-header--main': this.mode == 'main', 'c-header--testnet': this.mode == 'test' }"
    >
        <span v-if="this.mode == 'main'">
            MAINET MODE
        </span>
        <span v-else>
            TESTNET MODE
        </span>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        mode: { 
        type: String,
        default: 'testnet',
        required: true
        },
    },
}
</script>