<template>
    <div 
    class="c-mints__item"
    :class="{ 'c-mints__item--mature': this.mint.status == 'mature', 'c-mints__item--immature': this.mint.status == 'immature' }"
    >
    <div class="container">
            <div class="row">
                <div class="col-4 c-mints__item-row">
                    <div class="row">
                        <div class="col-12 c-mints__item--amount">
                            {{ this.mint.amount }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 c-mints__item--weight">
                            {{ this.mint['age-in-day'] }}
                        </div>
                    </div>
                </div>
                <div class="col-4 c-mints__item-row">
                </div>
                <div class="col-4 c-mints__item-row">
                    <div class="c-mints__item__pulsate-immature" v-if="this.mint.status === 'immature'">
                        <div class="c-mints__item__pulsate-immature-ringing"></div>
                        <div class="c-mints__item__pulsate-immature-circle"></div>
                    </div>
                    <div class="c-mints__item__pulsate-mature" v-if="this.mint.status === 'mature'"
                    :class="'c-mints__item__pulsate-mature-' + this.mint['weight-class']"
                    >
                        <div class="c-mints__item__pulsate-mature-ringing"></div>
                        <div class="c-mints__item__pulsate-mature-circle"
                        :class="'c-mints__item__pulsate-mature-circle-' + this.mint['weight-class']"
                        ></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 c-mints__item--days">
                        <div v-if="this.$store.state.settings.chain === 'main'">
                            <div v-if="this.mint['age-in-day'] > 30 ">
                                Since {{ this.mint['age-in-day'] - 30 }} days out of {{ this.mint['age-in-day'] }}
                            </div>
                            <div v-else>
                                {{ 30 - this.mint['age-in-day'] }} days remaining out of {{ this.mint['age-in-day'] }}
                            </div>
                        </div>
                        <div v-else>
                            <div v-if="this.mint['age-in-day'] >= 2 ">
                                Since {{ this.mint['age-in-day'] - 2 }} days out of {{ this.mint['age-in-day'] }}
                            </div>
                            <div v-else>
                                {{ 2 - this.mint['age-in-day'] }} days remaining out of {{ this.mint['age-in-day'] }}
                            </div>
                        </div>
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