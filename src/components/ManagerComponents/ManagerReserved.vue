<script setup lang="jsx">
import ManagerReservedItem from './ManagerReservedItem.vue';
</script>

<template lang="">
    <div class="ManagerReservedMain-div">
        <div class="ReservedLabel-div">
            <label>Reserveret Lån</label>
        </div>
        <div class="ReservedBody-div">
            <ul>
                <ManagerReservedItem v-for="Item in ReservedItemList" :key="Item" :Item="Item"/>
            </ul>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            TempData: [{
                id: 1,
                name: "Bærbar",
                amount: 10,
                dateFrom: "23/03/2023 08:00",
                dateToo: "30/03/2023 12:00",
                desc: "Brobygning",
                person: "Rune"
            },
            {
                id: 1,
                name: "Bærbar",
                amount: 10,
                dateFrom: "23/03/2023 08:00",
                dateToo: "30/03/2023 12:00",
                desc: "Brobygning",
                person: "Rune"
            },
            {
                id: 1,
                name: "Bærbar",
                amount: 10,
                dateFrom: "23/03/2023 08:00",
                dateToo: "30/03/2023 12:00",
                desc: "Brobygning",
                person: "Rune"
            },
            {
                id: 1,
                name: "Bærbar",
                amount: 10,
                dateFrom: "23/03/2023 08:00",
                dateToo: "30/03/2023 12:00",
                desc: "Brobygning",
                person: "Rune"
            },
            {
                id: 1,
                name: "Bærbar",
                amount: 10,
                dateFrom: "23/03/2023 08:00",
                dateToo: "30/03/2023 12:00",
                desc: "Brobygning",
                person: "Rune"
            },
            {
                id: 1,
                name: "Bærbar",
                amount: 10,
                dateFrom: "23/03/2023 08:00",
                dateToo: "30/03/2023 12:00",
                desc: "Brobygning",
                person: "Rune"
            },
            {
                id: 1,
                name: "Bærbar",
                amount: 10,
                dateFrom: "23/03/2023 08:00",
                dateToo: "30/03/2023 12:00",
                desc: "Brobygning",
                person: "Rune"
            },
            {
                id: 1,
                name: "Bærbar",
                amount: 10,
                dateFrom: "23/03/2023 08:00",
                dateToo: "30/03/2023 12:00",
                desc: "Brobygning",
                person: "Rune"
            }]
        }
    },
    computed: {
        ReservedItemList(){
            const ReservedItemList = this.TempData
            return ReservedItemList
        }
    }
}
</script>

<style scoped lang="scss">
        .ManagerReservedMain-div{
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
        .ReservedLabel-div{
            padding: 0.5em;
            width: 100%;
            text-align: center;
            background-color: var(--primary-element);
            border-bottom: 2px solid var(--primary-ascent);
        }
        .ReservedBody-div{
            padding: 1em;
            height: calc(100% - 3.5rem);
            overflow-y: overlay;
        }
</style>