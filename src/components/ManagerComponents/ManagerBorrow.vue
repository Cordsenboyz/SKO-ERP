<script setup lang="jsx">
import ManagerBorrowItem from './ManagerBorrowItem.vue';
</script>

<template lang="">
    <div class="ManagerBorrowMain-div">
        <div class="BorrowLabel-div">
            <label>Lån</label>
        </div>
        <div class="BorrowBody-div">
            <ul>
                <ManagerBorrowItem v-for="Item in BorrowItems" :key="Item" :Item="Item"/>
            </ul>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            APIBorrowItems: [{
                id: 1,
                name: "Skærm",
                amount: 2,
                desc: "Mangler Skærm",
                person: "Lasse Lund Madsen",
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: new Date("2024-03-21T08:00:00"),
                dueSoon: undefined,
            },{
                id: 1,
                name: "Skærm",
                amount: 2,
                desc: "Mangler Skærm",
                person: "Lasse Lund Madsen",
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: new Date("2022-03-21T08:00:00"),
                dueSoon: undefined,
            },{
                id: 1,
                name: "Skærm",
                amount: 2,
                desc: "Mangler Skærm",
                person: "Lasse Lund Madsen",
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: new Date("2022-03-21T08:00:00"),
                dueSoon: undefined,
            },{
                id: 1,
                name: "Skærm",
                amount: 2,
                desc: "Mangler Skærm",
                person: "Lasse Lund Madsen",
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: new Date("2022-03-21T08:00:00"),
                dueSoon: undefined,
            },{
                id: 1,
                name: "Skærm",
                amount: 2,
                desc: "Mangler Skærm",
                person: "Lasse Lund Madsen",
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: new Date("2022-03-21T08:00:00"),
                dueSoon: undefined,
            },{
                id: 1,
                name: "Skærm",
                amount: 2,
                desc: "Mangler Skærm",
                person: "Lasse Lund Madsen",
                dateFrom: new Date("2023-03-21T08:00:00"),
                dateToo: new Date("2022-03-21T08:00:00"),
                dueSoon: undefined,
            }]
        }
    },
    computed: {
        BorrowItems(){
            const BorrowItems = this.APIBorrowItems 
            return BorrowItems
        }
    }
}
</script>

<style scoped lang="scss">
        .ManagerBorrowMain-div{
            border-radius: 0.5em;
            background-color: var(--primary-background);
            text-align: center;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            text-overflow: ellipsis;

            label{
                color: var(--light-textcolor);
                font-weight: bold;
                font-size: 3ch;
            }
        }
        .BorrowLabel-div{
            padding: 0.5em;
            width: 100%;
            text-align: center;
            background-color: var(--primary-element);
            border-bottom: 2px solid var(--primary-ascent);
        }
        .BorrowBody-div{
            padding: 1em;
            height: calc(100% - 3.5rem);
            overflow-y: overlay;
        }
</style>