<script setup lang="jsx">
import LagerItemPreview from './LagerItemPreview.vue';
import LagerItemList from './LagerItemList.vue';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
import {toRaw} from 'vue'
import axios from 'axios'
</script>

<template lang="">
    <div class="LagerMain-div">
        <LagerItemPreview :SelectedItem="SelectedItem" />
        <LagerItemList :LagerItems="LagerItemsApiData"/>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            SelectedItem: {},
            LagerItemsApiData: [],
            connection: null,
        }
    },
    mounted: function(){
        this.emitter.on("SelectedItem", (userSelectedItem) => {
            this.SelectedItem = toRaw(userSelectedItem)
        })

        this.emitter.on("DeleteItem", (id) => {
            let token = localStorage.getItem("token")
            
            axios.delete(`https://localhost:7203/api/Item/DeleteItem?id=${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(this.SelectedItem = this.LagerItemsApiData[0])
        })

        this.emitter.on("UpdateLager", () => {
            this.GetUpdatedData()
        })
    },
    created: async function(){
        let token = localStorage.getItem("token")

        await axios.get("https://localhost:7203/api/Item/GetAllItems", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => {
            this.LagerItemsApiData = response.data
        })
        
    },
    methods: {
        GetUpdatedData: async function(){
            let token = localStorage.getItem("token")

            await axios.get("https://localhost:7203/api/Item/GetAllItems", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                this.LagerItemsApiData = response.data

                if(Object.keys(toRaw(this.SelectedItem)).length){
                    let Item = this.LagerItemsApiData.find((a) => a.id === this.SelectedItem.id)
                    let SelectedItemIndex = this.LagerItemsApiData.indexOf(Item)
                    this.SelectedItem = this.LagerItemsApiData[SelectedItemIndex];
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .LagerMain-div {
        width: calc(80% - 2rem);
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        height: calc(100vh - 5.5rem);
    }
</style>