<script setup lang="jsx">
import axios from 'axios';
import ManagerReservedItem from './ManagerReservedItem.vue';
</script>

<template lang="">
    <div class="ManagerReservedMain-div">
        <div class="ReservedLabel-div">
            <label>Reserveret Lån</label>
        </div>
        <div class="ReservedBody-div">
            <ul v-if="!isLoading">
                <ManagerReservedItem v-for="Item in ReservedItemList" :key="Item" :Item="Item"/>
            </ul>
            <div v-else class="ManagerBorrowingLoading-div">
                <div class="loader"></div>
            </div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            APIReservedBorrowItems: [],
            isLoading: true
        }
    },
    computed: {
        ReservedItemList(){
            const ReservedItemList = this.APIReservedBorrowItems
            return ReservedItemList
        }
    },
    mounted: async function(){
        let token = localStorage.getItem("token")
        await axios.get("https://localhost:7203/Borrow/GetAllReservedBorrowItems", {
            headers: { Authorization: `Bearer ${token}` }}).then(response => {
                this.APIReservedBorrowItems = response.data
                this.isLoading = false;
        })
    }
}
</script>

<style scoped lang="scss">
        .ManagerReservedMain-div{
            border-radius: 0.5em;
            background-color: var(--primary-background);
            text-align: center;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            text-overflow: ellipsis;

            label{
                color: var(--light-textcolor);
                font-weight: bold;
                font-size: 3ch;
            }
        }
        .ReservedLabel-div{
            padding: 0.5em;
            width: 100%;
            text-align: center;
            background-color: var(--primary-element);
            border-bottom: 2px solid var(--primary-ascent);
        }
        .ReservedBody-div{
            padding: 1em;
            width: 100%;
            height: calc(100% - 3.5rem);
            overflow-y: overlay;
        }
        .ManagerBorrowingLoading-div{
            height: 100%;
            width: 100%;
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
</style>