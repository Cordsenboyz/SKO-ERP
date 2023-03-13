<script setup lang="jsx">
import LagerItemPreview from './LagerItemPreview.vue';
import LagerItemList from './LagerItemList.vue';
</script>

<template lang="">
    <div class="LagerMain-div">
        <LagerItemPreview 
        :id="SelectedItem.id" 
        :name="SelectedItem.name" 
        :desc="SelectedItem.desc" 
        :amount="SelectedItem.amount" 
        :imgsrc="SelectedItem.imgsrc" 
        :category="SelectedItem.category" 
        :subcategory="SelectedItem.subcategory"
        :producent="SelectedItem.producent"/>
        <LagerItemList :LagerItems="LagerItems"/>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            SelectedItem: [],
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
            }],
        }
    },
    mounted: function(){
        this.emitter.on("SelectedItem", (userSelectedItem) => {
            this.SelectedItem = {...userSelectedItem}
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