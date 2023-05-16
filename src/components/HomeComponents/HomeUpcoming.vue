<script setup lang="jsx">
import axios from 'axios';
import Loading from '../UtilsComponents/Loading.vue';
import HomeUpcomingItem from './HomeItems/HomeUpcomingItem.vue';
</script>

<template lang="">
    <div class="HomeUpcoming-div">
        <div class="HomeUpcomingLoaded-div" v-if="!isLoading">
            <div class="HomeUpcomingLabel-div">
                <label>Reserveret Lån</label>
            </div>
            <div class="HomeUpcomingBody-div">
                <ul class="responsive-table">
                    <HomeUpcomingItem v-for="(Item, index) in RequestApiData" :key="Item" :Item="Item" />
                </ul>
            </div>
        </div>
        <Loading v-else />
    </div>
</template>
<script lang="jsx">
export default {
    data(){
        return{
            isLoading: true,
            RequestApiData: []
        }
    },
    mounted: async function(){
        let token = localStorage.getItem("token")

        await axios.get("https://localhost:7203/api/Borrow/GetReservedBorrowItems", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
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

</style>