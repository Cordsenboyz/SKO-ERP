<script setup lang="jsx">
import ManagerBorrowItem from './ManagerBorrowItem.vue';
import axios from 'axios';
</script>

<template lang="">
    <div class="ManagerBorrowMain-div">
        <div class="BorrowLabel-div">
            <label>Lån</label>
        </div>
        <div class="BorrowBody-div">
            <ul v-if="!isLoading">
                <ManagerBorrowItem v-for="Item in BorrowItems" :key="Item" :Item="Item"/>
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
            APIBorrowItems: [],
            isLoading: true,
        }
    },
    computed: {
        BorrowItems(){
            const BorrowItems = this.APIBorrowItems 
            return BorrowItems
        }
    },
    mounted: async function(){
        let token = localStorage.getItem("token")
        await axios.get("https://localhost:7203/Borrow/GetAllBorrowItems", {
            headers: { Authorization: `Bearer ${token}` }}).then(response => {
                this.APIBorrowItems = response.data
                console.log(response.data)
                this.isLoading = false;
        })
    }
}
</script>

<style scoped lang="scss">
    .ManagerBorrowMain-div{
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
    .BorrowLabel-div{
        padding: 0.5em;
        width: 100%;
        text-align: center;
        background-color: var(--primary-element);
        border-bottom: 2px solid var(--primary-ascent);
    }
    .BorrowBody-div{
        padding: 1em;
        height: calc(100% - 3.5rem);
        overflow-y: overlay;
    }
    .ManagerBorrowingLoading-div{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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