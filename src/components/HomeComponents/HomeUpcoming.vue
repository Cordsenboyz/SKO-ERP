<script setup lang="jsx">
import axios from 'axios';
</script>

<template lang="">
    <div class="HomeUpcoming-div">
        <div class="HomeUpcomingLoaded-div" v-if="!isLoading">
            <div class="HomeUpcomingLabel-div">
                <label>Reserveret Lån</label>
            </div>
            <div class="HomeUpcomingBody-div">
                <ul class="responsive-table">
                    <li v-for="(Item, index) in RequestData" :key="Item">
                        <div class="col col-3">{{Item.item.name}}</div>
                        <div class="col col-1">{{Item.description}}</div>
                        <div class="col col-1">{{Item.amount}}</div>
                        <div class="col col-3">{{Item.dateFrom.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
                        <div class="col col-3">{{Item.dateTo.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else class="HomeUpcomingLoading-div">
            <div class="loader"></div>
        </div>
    </div>
</template>
<script lang="jsx">
export default {
    data(){
        return{
            isLoading: true,
            RequestData: []
        }
    },
    mounted: async function(){
        let token = localStorage.getItem("token")
        await axios.get("https://localhost:7203/Borrow/GetReservedBorrowItems", {
                headers: { Authorization: `Bearer ${token}` }
            }).then(response => {
                this.isLoading = false
                this.RequestData = response.data
            })
    }
}
</script>

<style scoped lang="scss">
    .HomeUpcoming-div{
        border-radius: 0.5em;
        background-color: var(--primary-background);
        text-align: center;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        label{
            color: var(--light-textcolor);
            font-weight: bold;
            font-size: 3ch;
        }
    }
    .HomeUpcomingLoaded-div{
        height: 100%;
        overflow: hidden;
    }
    .HomeUpcomingLabel-div{
        padding: 0.5em;
        background-color: var(--primary-element);
        border-bottom: 2px solid var(--primary-ascent);
    }
    .HomeUpcomingBody-div{
        padding: 1em;
        height: calc(100% - 3.5rem);
        overflow-y: overlay;
    }
    .HomeUpcomingLoading-div{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .responsive-table {
        padding: 0;
        color: var(--light-textcolor);
        
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
            
        }
    }
    .col-1 {
        flex-basis: 40%;
    }
    .col-2 {
        flex-basis: 10%;
    }
    .col-3 {
        flex-basis: 25%;
    }
    .col-4 {
        flex-basis: 25%;
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
</style>