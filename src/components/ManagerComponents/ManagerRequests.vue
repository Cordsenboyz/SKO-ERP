<script setup lang="jsx">
import ManagerRequestItem from './ManagerRequestItem.vue'
</script>

<template lang="">
    <div class="RequestBody-div">
        <ul>
            <ManagerRequestItem v-for="Item in RequestList" :key="Item" :Item="Item"/>
        </ul>
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
            }]
        }
    },
    computed: {
        RequestList(){
            const RequestList = this.TempData
            return RequestList
        }
    },
    mounted: function(){
        this.emitter.on("DeclineBorrow", (item) => {
            this.TempData.splice(this.TempData.indexOf(item), 1)
        })
    }
}
</script>

<style scoped lang="scss">
    .RequestBody-div{
        padding: 1em;
        display: flex;
        flex-direction: column;
        height: calc(100% - 3.5rem);
        gap: 1em;
        overflow-y: overlay;
    }
</style>