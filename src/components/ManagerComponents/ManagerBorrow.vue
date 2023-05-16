<script setup lang="jsx">
import ManagerBorrowItem from './ManagerItems/ManagerBorrowItem.vue';
import axios from 'axios';
import Loading from '../UtilsComponents/Loading.vue';
</script>

<template lang="">
    <div class="ManagerBorrowMain-div">
        <div class="BorrowLabel-div">
            <label>Lån</label>
        </div>
        <div class="BorrowBody-div">
            <ul v-if="!isLoading">
                <ManagerBorrowItem v-for="Item in BorrowItemsApiData" :key="Item" :Item="Item"/>
            </ul>
            <Loading v-else />
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            isLoading: true,
            BorrowItemsApiData: [],
        }
    },
    mounted: async function(){
        let token = localStorage.getItem("token")

        await axios.get("https://localhost:7203/api/Borrow/GetAllBorrowItems", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.BorrowItemsApiData = response.data
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
</style>