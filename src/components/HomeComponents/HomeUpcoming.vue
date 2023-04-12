<template lang="">
    <div class="HomeUpcoming-div">
        <div class="HomeUpcomingLoaded-div" v-if="!isLoading">
            <div class="HomeUpcomingLabel-div">
                <label>Reserveret Lån</label>
            </div>
            <div class="HomeUpcomingBody-div">
                <ul class="responsive-table">
                    <li v-for="(Item, index) in TempData" :key="Item">
                        <div class="col col-2">{{Item.desc}}</div>
                        <div class="col col-1">{{Item.person}}</div>
                        <div class="col col-2">{{Item.name}}</div>
                        <div class="col col-3">{{Item.amount}}</div>
                        <div class="col col-3">{{Item.dateFrom}}</div>
                        <div class="col col-3">{{Item.dateToo}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else class="HomeUpcomingLoading-div">
            <div class="loader"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isLoading: false,
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
    }
}
</script>

<style scoped lang="scss">
    .HomeUpcoming-div{
        border-radius: 0.5em;
        background-color: var(--primary-background);
        text-align: center;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        label{
            color: var(--light-textcolor);
            font-weight: bold;
            font-size: 3ch;
        }
    }
    .HomeUpcomingLoaded-div{
        height: 100%;
        overflow: hidden;
    }
    .HomeUpcomingLabel-div{
        padding: 0.5em;
        background-color: var(--primary-element);
        border-bottom: 2px solid var(--primary-ascent);
    }
    .HomeUpcomingBody-div{
        padding: 1em;
        height: calc(100% - 3.5rem);
        overflow-y: overlay;
    }
    .HomeUpcomingLoading-div{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .responsive-table {
        padding: 0;
        color: var(--light-textcolor);
        
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
        flex-basis: 40%;
    }
    .col-2 {
        flex-basis: 10%;
    }
    .col-3 {
        flex-basis: 25%;
    }
    .col-4 {
        flex-basis: 25%;
    }
    .loader {
        border: 8px solid var(--light-loading);
        border-top: 8px solid var(--dark-loading);
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