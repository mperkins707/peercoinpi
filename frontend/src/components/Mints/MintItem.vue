<template>
    <div 
    class="c-mints__item"
    :class="{ 'c-mints__item--mature': this.mint.status == 'mature', 'c-mints__item--immature': this.mint.status == 'immature' }"
    >
    <div class="container">
            <div class="row">
                <div class="col-4 c-mints__item-row">
                    {{ this.mint.amount }}
                </div>
                <div class="col-4 c-mints__item-row">
                    {{ this.mint['age-in-day'] }}
                </div>
                <div class="col-4 c-mints__item-row">
                    <!-- {{ this.mint.attempts }} -->
                    <div class="c-mints__item__pulsate-immature" v-if="this.mint.status === 'immature'">
                        <div class="c-mints__item__pulsate-immature-ringing"></div>
                        <div class="c-mints__item__pulsate-immature-circle"></div>
                    </div>
                    <div class="c-mints__item__pulsate-mature" v-if="this.mint.status === 'mature'">
                        <div class="c-mints__item__pulsate-mature-ringing"></div>
                        <div class="c-mints__item__pulsate-mature-circle"></div>
                    </div>
                </div>
            </div>
        </div>
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