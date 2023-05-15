<script setup lang="jsx">
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
            <li v-for="(Item, index) in BorrowList" :key="item">
                <div class="col col-2 item">{{Item.item.name}}</div>
                <div class="col col-2 item">{{Item.description}}</div>
                <div class="col col-2 item">{{Item.amount}}</div>
                <div class="col col-2 item">{{Item.dateFrom.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
                <div class="col col-2 item" v-text="Item.dateTo.toLocaleString('en-GB', { timeZone: 'CET' }) || 'N/A'"></div>
            </li>
        </ul>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
        }
    },
    computed: {
        BorrowedList(){
            let BorrowedList = this.BorrowList
            return BorrowedList
        }
    },
}
</script>

<style scoped lang="scss">
    .BorrowLoading-div{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .loader {
        border: 8px solid var(--light-loading);
        border-top: 8px solid var(--dark-loading);
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
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