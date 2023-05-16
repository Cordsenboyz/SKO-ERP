<script setup lang="jsx">
import ManagerBorrow from './ManagerBorrow.vue'
import ManagerReserved from './ManagerReserved.vue'
import ManagerConfirmation from './ManagerConfirmation.vue'
</script>

<template lang="">
    <div class="ManagerMain-div">
        <ManagerConfirmation />
        <ManagerBorrow />
        <ManagerReserved />
    </div>
</template>

<script lang="jsx">
export default {
}
</script>

<style scoped lang="scss">
    .ManagerMain-div{
        padding: 1rem;
        width: calc(100% - 2rem);
        display: grid;
        margin: 0 auto;
        height: calc(100vh - 5.5rem);
        gap: 1em;
        text-align: center;

        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(1, 100%);

        grid-template-areas: 
        "confirmation confirmation confirmation borrow reserved"
        ;

        $areas: (confirmation borrow reserved);

        @each $area in $areas {
            $index: index($areas, $area);

            > :nth-child(#{$index}) {
                grid-area: $area;
            }
        }
    }
</style>