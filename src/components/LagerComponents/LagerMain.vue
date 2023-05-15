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
        this.emitter.on("SelectedItem", (userSelectedItem) => {
            this.SelectedItem = toRaw(userSelectedItem)
        })
        this.emitter.on("DeleteItem", (id) => {
            let token = localStorage.getItem("token")
            axios.delete(`https://localhost:7203/Item/DeleteItem?id=${id}`, {
                headers: { Authorization: `Bearer ${token}` }}).then(this.SelectedItem = this.LagerItems[0])
        })
        this.emitter.on("UpdateLager", () => {
            this.GetUpdatedData()
        })
    },
    created: async function(){
        let token = localStorage.getItem("token")
        let response = await axios.get("https://localhost:7203/Item/GetAllItems", {
            headers: { Authorization: `Bearer ${token}` }})
        this.LagerItems = response.data
    },
    methods: {
        GetUpdatedData: async function(){
            let token = localStorage.getItem("token")
            await axios.get("https://localhost:7203/Item/GetAllItems", {
                headers: { Authorization: `Bearer ${token}` }
            }).then(response => {
                    this.LagerItems = response.data
                    if(Object.keys(toRaw(this.SelectedItem)).length){
                        let Item = this.LagerItems.find((a) => a.id === this.SelectedItem.id)
                        let SelectedItemIndex = this.LagerItems.indexOf(Item)
                        this.SelectedItem = this.LagerItems[SelectedItemIndex];
                    }
                })
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