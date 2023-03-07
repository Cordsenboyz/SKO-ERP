<script setup lang="jsx">
import LagerItemPreview from './LagerItemPreview.vue';
import LagerItemList from './LagerItemList.vue';
</script>

<template lang="">
    <div class="LagerMain-div">
        <LagerItemPreview :id="SelcetedItem.id" :name="SelcetedItem.name" :desc="SelcetedItem.desc" :amount="SelcetedItem.amount"/>
        <LagerItemList :LagerItems="LagerItems"/>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            SelcetedItem: [],
            LagerItems: [{
                id: 1,
                name: "Skærm",
                desc: "Denne skærm er mega sej",
                amount: 12,
            },
            {
                id: 2,
                name: "Kabel",
                desc: "Dette kabel er mega langt",
                amount: 25, 
            }],
        }
    },
    mounted: function(){
        this.emitter.on("SelectedItem", (userSelectedItem) => {
            this.SelcetedItem = {...userSelectedItem}
        })
    },
    created: function(){
        this.SelcetedItem = this.LagerItems[0]
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