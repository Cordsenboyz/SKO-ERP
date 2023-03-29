<script setup lang="jsx">
import HomeBorrowingItem from './HomeBorrowingItem.vue';
</script>

<template lang="">
    <div class="HomeBorrowing-div">
        <div class="HomeBorrowingLoaded-div" v-if="!isLoading">
            <div class="HomeBorrowingLabel-div">
                <label>Dine Lån</label>
            </div>
            <div class="HomeBorrowingBody-div">
                <ul class="responsive-table">
                    <HomeBorrowingItem v-for="(Item, index) in borrowList" :key="Item" :Item="Item" />
                </ul>
            </div>
        </div>
        <div v-else class="HomeBorrowingLoading-div">
            <div class="loader"></div>
        </div>
    </div>
</template>
<script lang="jsx">
export default {
    data(){
        return{
            isLoading: false,
            TempData: [{
                id: 1,
                name: "Skærm",
                amount: 2,
                desc: "Mangler Skærm",
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: new Date("2024-03-21T08:00:00"),
                dueSoon: undefined,
            }]
        }
    },
    computed: {
        borrowList(){
            const borrowList = this.TempData
            return borrowList
        }
    }
}
</script>

<style scoped lang="scss">
 .HomeBorrowing-div{
        border-radius: 0.5em;
        background-color: var(--primary-background);
        text-align: center;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        text-overflow: ellipsis;

        label{
            color: white;
            font-weight: bold;
            font-size: 3ch;
        }
    }
    .HomeBorrowingLoaded-div{
        height: 100%;
        overflow: hidden;
    }
    .HomeBorrowingLabel-div{
        padding: 0.5em;
        background-color: var(--primary-element);
        border-bottom: 2px solid rgba(246,76,114,1);
    }
    .HomeBorrowingBody-div{
        padding: 1em;
        height: calc(100% - 3.5rem);
        overflow-y: overlay;
    }
    .HomeBorrowingLoading-div{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .responsive-table {
        padding: 0;
        color: white;
        
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
    .col-1 {
        flex-basis: 30%;
    }
    .col-2 {
        flex-basis: 30%;
    }
    .col-3 {
        flex-basis: 30%;
    }
    .col-4 {
        flex-basis: 25%;
    }
    .loader {
        border: 8px solid #ffffff;
        border-top: 8px solid var(--vt-c-black-mute);
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>