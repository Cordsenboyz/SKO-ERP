<script setup lang="jsx">
import axios from 'axios';
import { toRaw } from 'vue';
import ManagerRequestItem from './ManagerItems/ManagerRequestItem.vue'
import Loading from '../UtilsComponents/Loading.vue';
</script>

<template lang="">
    <div class="RequestBody-div">
        <ul v-if="!isLoading">
            <ManagerRequestItem v-for="Item in AllRequestApiData" :key="Item" :Item="Item"/>
        </ul>
        <Loading v-else />
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            isLoading: true,
            AllRequestApiData: [],
        }
    },
    mounted: async function(){
        this.emitter.on("DeclineBorrow", (item) => {

        })

        this.emitter.on("AcceptBorrow", (id) => {
            let token = localStorage.getItem("token")
            axios.post(`https://localhost:7203/api/Borrow/AcceptBorrowRequest?id=${id}`, "", {
                headers: { Authorization: `Bearer ${token}` }
            })
        })

        let token = localStorage.getItem("token")

        await axios.get("https://localhost:7203/api/Borrow/GetAllBorrowRequestItems", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.AllRequestApiData = response.data
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
</style>