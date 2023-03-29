<script setup lang="jsx">
import LagerItemPreview from './LagerItemPreview.vue';
import LagerItemList from './LagerItemList.vue';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
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
            SelectedItem: [],
            connection: null,
            LagerItems: [{
                imgsrc: "src/assets/Skærmtest.webp",
                id: 1,
                name: "Philips 27 4k skærm 278E1A/00",
                desc: "Denne skærm er mega sej",
                amount: 100,
                category: {
                    id: 1,
                    name: 'Skærm'
                },
                subcategory: {
                    id: 1,
                    name: '27"'
                },
                producent: "Philips",
                barcode: "1829-291-2918",
            },
            {
                imgsrc: "src/assets/kabeltest.webp",
                id: 2,
                name: "aVGA_han-VGA_han",
                desc: "Dette kabel er mega langt",
                amount: 12,
                category: {
                    id: 2,
                    name: 'Kabel'
                },
                subcategory: {
                    id: 3,
                    name: 'VGA'
                },
                producent: "",
                barcode: "9382-172-8472",
            }],
        }
    },
    mounted: function(){
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
    },
    created: function(){
        this.SelectedItem = this.LagerItems[0]
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