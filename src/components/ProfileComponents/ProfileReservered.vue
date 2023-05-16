<script setup lang="jsx">
import ProfileReservedItem from './ProfileItems/ProfileReservedItem.vue';

defineProps({
    ReservedBorrowList: Object
})
</script>

<template lang="">
    <div class="Reservered-body">
        <ul>
            <li class="table-header">
                <div class="col col-2">Navn</div>
                <div class="col col-2">Beskrivelse</div>
                <div class="col col-2">Mængde</div>
                <div class="col col-2">Fra</div>
                <div class="col col-2">Tl</div>
            </li>
            <ProfileReservedItem v-for="(Item, index) in ReservedBorrowList" :key="item" :Item="Item"/>
        </ul>
    </div>
</template>

<script lang="jsx">
export default {
}
</script>

<style scoped lang="scss">
    li {
        border-radius: 3px;
        padding: 0.5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1em;
        list-style: none;
        background-color: var(--secondary-element);
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
        color: var(--light-textcolor);
    }
    .Reservered-body{
        padding: 1em;
    }

    .table-header{
        display: flex;
        flex-direction: row;
        background-color: transparent;
        box-shadow: none;
        font-size: 2.5ch;
        letter-spacing: 0.03em;

        >div{
            font-weight: bold;
        }
    }
    .col-2 {
        flex-basis: 30%;
    }
</style>