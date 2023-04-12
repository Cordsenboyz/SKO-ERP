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
        <LagerItemList :LagerItems="LagerItems"/>
    </div>
</template>

<script lang="jsx">



export default {
    data(){
        return{
            SelectedItem: {},
            connection: null,
            LagerItems: [],
        }
    },
    mounted: function(){
        this.SelectedItem === toRaw(this.LagerItems[0])
        this.emitter.on("SelectedItem", (userSelectedItem) => {
            this.SelectedItem = {...userSelectedItem}
        })
        this.emitter.on("DeleteItem", (id) => {
            const idxObj = this.LagerItems.findIndex(object => {
                return object.id === id
            })
            this.LagerItems.splice(idxObj, 1)
            this.SelectedItem = this.LagerItems[0]         
        })
        this.emitter.on("UpdateLager", () => {
            this.GetUpdatedData()
        })
    },
    created: async function(){
        let token = localStorage.getItem("token")
        let response = await axios.get("https://localhost:7203/GetAllItems/GetAllItems", {
            headers: { Authorization: `Bearer ${token}` }})
        this.LagerItems = response.data
    },
    methods: {
        GetUpdatedData: async function(){
            let token = localStorage.getItem("token")
            let response = await axios.get("https://localhost:7203/GetAllItems/GetAllItems", {
                headers: { Authorization: `Bearer ${token}` }})
            this.LagerItems = response.data
        }
    }
}
</script>

<style scoped lang="scss">
    .LagerMain-div{
        width: calc(80% - 2rem);
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        height: calc(100vh - 5.5rem);
    }
</style>