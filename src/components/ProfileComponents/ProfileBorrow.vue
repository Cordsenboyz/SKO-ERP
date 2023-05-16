<script setup lang="jsx">
import ProfileBorrowItem from './ProfileItems/ProfileBorrowItem.vue';
defineProps({
    BorrowList: Object
})
</script>

<template lang="">
    <div class="Borrow-body">
        <ul>
            <li class="table-header">
                <div class="col col-2">Navn</div>
                <div class="col col-2">Beskrivelse</div>
                <div class="col col-2">Mændge</div>
                <div class="col col-2">Fra</div>
                <div class="col col-2">Til</div>
            </li>
            <ProfileBorrowItem v-for="(Item, index) in BorrowList" :key="item" :Item="Item"/>
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
    .Borrow-body{
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