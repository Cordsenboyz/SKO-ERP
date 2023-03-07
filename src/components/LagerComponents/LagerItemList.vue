<script setup lang="jsx">
defineProps({
    LagerItems: Object
})

</script>

<template lang="">
    <div class="LagerItemList-div">
        <div class="LagerItemListlabel-div">
            <label >Lager</label>
        </div>

        <button @click="SelectItem()">Select Item</button>
    </div>
</template>

<script lang="jsx">
export default {
    methods:{
        SelectItem: function(){
            this.emitter.emit("SelectedItem", (this.LagerItems[1]))
        }
    }
}
</script>

<style scoped lang="scss">
    .LagerItemList-div{
        width: calc(80% - 1rem);
        margin-left: 1rem;
        height: 100%;
        border-radius: 0.5em;
        background-color: #005070;
        color: white;
        box-shadow: 0 15px 30px 0 rgb(0 0 0 / 11%), 0 5px 15px 0 rgb(0 0 0 / 8%);
        text-align: center;
    }
    .LagerItemListlabel-div{
        padding: 1rem;
        border-bottom: 2px solid rgba(246,76,114,1);
        label{
            font-weight: bold;
            font-size: 3ch;
        }
    }
</style>