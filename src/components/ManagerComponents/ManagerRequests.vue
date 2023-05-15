<script setup lang="jsx">
import axios from 'axios';
import { toRaw } from 'vue';
import ManagerRequestItem from './ManagerRequestItem.vue'
</script>

<template lang="">
    <div class="RequestBody-div">
        <ul v-if="!isLoading">
            <ManagerRequestItem v-for="Item in RequestList" :key="Item" :Item="Item"/>
        </ul>
        <div v-else class="ManagerBorrowingRequestLoading-div">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            AllRequestBorrowData: [],
            isLoading: true,
        }
    },
    computed: {
        RequestList(){
            const RequestList = this.AllRequestBorrowData
            return RequestList
        }
    },
    mounted: async function(){
        this.emitter.on("DeclineBorrow", (item) => {
            this.TempData.splice(this.TempData.indexOf(item), 1)
        })
        this.emitter.on("AcceptBorrow", (id) => {
            let token = localStorage.getItem("token")
            axios.post(`https://localhost:7203/Borrow/AcceptBorrowRequest?id=${id}`, "", {
                headers: { Authorization: `Bearer ${token}` }
            })
        })
        let token = localStorage.getItem("token")
        await axios.get("https://localhost:7203/Borrow/GetAllBorrowRequestItems", {
            headers: { Authorization: `Bearer ${token}` }}).then(response => {
                this.AllRequestBorrowData = response.data
                this.isLoading = false;
            })
    }
}
</script>

<style scoped lang="scss">
    .RequestBody-div{
        padding: 1em;
        display: flex;
        flex-direction: column;
        height: calc(100% - 3.5rem);
        gap: 1em;
        overflow-y: overlay;
    }
    .ManagerBorrowingRequestLoading-div{
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