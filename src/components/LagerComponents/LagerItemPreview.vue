<script setup lang="jsx">
defineProps({
    id: Number,
    name: String,
    desc: String,
    amount: Number
})

</script>

<template lang="">
    <div class="LagerItemPreview-div">
        <div class="LagerItemPreviewLabel-div">
            <label>{{name}}</label>
        </div>
        <div class="LagerItemPreviewBody-div">
            <div>
                <label for="description">Description:</label>
                <p>{{desc}}</p>
            </div>
            <div>
                <label for="amount">Stock:</label>
                <p>{{amount}}</p>
            </div>
            <div class="button-container">
                <button class="btn btn-confirm">Restock</button>
                <button class="btn btn-update">Update</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    
}
</script>

<style scoped lang="scss">
    .LagerItemPreview-div{
        width: 20%;
        background-color: #005070;
        border-radius: 0.5em;
        height: 100%;
        box-shadow: 0 15px 30px 0 rgb(0 0 0 / 11%), 0 5px 15px 0 rgb(0 0 0 / 8%);
        color: white;
    }
    .LagerItemPreviewLabel-div{
        text-align: center;
        padding: 1rem;
        border-bottom: 2px solid rgba(246,76,114,1);
        
        Label{
           font-size: 3ch;
           font-weight: bold; 
        }
    }
    .LagerItemPreviewBody-div{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        height: calc(100% - 4.5rem);

        label{
            font-weight: bold;
            font-size: 2ch;
        }
    }
    .button-container{
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto);
        bottom: 0;

        button:first-of-type{
            grid-column-start: 1;
            grid-column-end: 3; 
        }
    }
</style>