<template>
    <div>
        <h5 class="u-color-black c-header__testmode">
            TESTNET MODE
        </h5>
        <div class="c-header">
            <div class="c-header__menu">
                <img src="../assets/ui/ui-menu.svg" alt="Menu">
            </div>
            <div class="c-header__notification">
                <img src="../assets/ui/ui-search.png" alt="Search">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    testmode: { 
      type: Boolean,
      default: true,
      required: true
    },
}
</script>