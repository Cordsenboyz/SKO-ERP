<script setup lang="jsx">

</script>

<template lang="">
    <div v-if="!isLoading" class="Borrow-body">
        <ul>
            <li class="table-header">
                <div class="col col-2">Navn</div>
                <div class="col col-2">Beskrivelse</div>
                <div class="col col-2">Mændge</div>
                <div class="col col-2">Fra</div>
                <div class="col col-2">Til</div>
            </li>
            <li v-for="(Item, index) in BorrowedList" :key="item">
                <div class="col col-2 item">{{Item.name}}</div>
                <div class="col col-2 item">{{Item.desc}}</div>
                <div class="col col-2 item">{{Item.amount}}</div>
                <div class="col col-2 item">{{Item.dateFrom.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
                <div class="col col-2 item" v-text="Item.dateToo.toLocaleString('en-GB', { timeZone: 'CET' }) || 'N/A'"></div>
            </li>
        </ul>
    </div>
    <div v-else class="BorrowLoading-div">
        <div class="loader"></div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            isLoading: true,
            BorrowList: []
        }
    },
    created: function(){
        this.BorrowList = this.GetPersonBorrowData()
    },
    methods: {
        GetPersonBorrowData: function(){
            let data = [{
                id: 1,
                name: '27" Skærm',
                desc: "Skulle bruge en bedre skærm",
                amount: 1,
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: new Date("2022-03-21T08:00:00"),
            },
            {
                id: 2,
                name: '27" Skærm',
                desc: "Skulle bruge en bedre skærm",
                amount: 1,
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: "",

            }]
            this.isLoading = false
            return data
        }
    },
    computed: {
        BorrowedList(){
            let BorrowedList = this.BorrowList
            return BorrowedList
        }
    }
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