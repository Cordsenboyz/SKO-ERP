<script setup lang="jsx">
import Loading from "../UtilsComponents/Loading.vue"
import HomeActivityItem from "./HomeItems/HomeActivityItem.vue";
</script>

<template lang="">
    <div class="HomeActivity-div">
        <div class="HomeActivityLoaded-div" v-if="!isLoading">
            <div class="HomeActivityLabel-div">
                <label>Aktivitet</label>
            </div>
            <div class="HomeActivityBody-div">
                <ul class="responsive-table">
                    <HomeActivityItem v-for="(Item, index) in ActivityApiData" :key="Item" :Item="Item" />
                </ul>
            </div>
        </div>
        <Loading v-else/>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            isLoading: false,

            ActivityApiData: [{
                id: 1,
                name: 'Samsung 27"',
                desc: "Mangler en skærm",
                date: "19/03/2023 13:41",
                person: "Daniel Simonsen",
            },
            {
                id: 2,
                name: 'Logitech Mus',
                desc: "Skal bruge en mus",
                date: "16/03/2023 08:28",
                person: "Lasse Lund Madsen",
            },
            {
                id: 3,
                name: 'Samsung 27"',
                desc: "Mangler en nice skærm",
                date: "19/03/2023 13:42",
                person: "Niels Cordsen",
            },
            {
                id: 3,
                name: 'Samsung 27"',
                desc: "Mangler en nice skærm",
                date: "19/03/2023 13:42",
                person: "Niels Cordsen",
            },
            {
                id: 3,
                name: 'Samsung 27"',
                desc: "Mangler en nice skærm",
                date: "19/03/2023 13:42",
                person: "Niels Cordsen",
            },
            {
                id: 3,
                name: 'Samsung 27"',
                desc: "Mangler en nice skærm",
                date: "19/03/2023 13:42",
                person: "Niels Cordsen",
            },
            {
                id: 3,
                name: 'Samsung 27"',
                desc: "Mangler en nice skærm",
                date: "19/03/2023 13:42",
                person: "Niels Cordsen",
            }]
        }
    }
}
</script>

<style scoped lang="scss">
    .HomeActivity-div{
        border-radius: 0.5em;
        background-color: var(--primary-background);
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;

        label{
            color: var(--light-textcolor);
            font-weight: bold;
            font-size: 3ch;
        }
        
    }
    .HomeActivityLoaded-div{
        height: 100%;
    }
    .HomeActivityLabel-div{
        border-bottom: 2px solid var(--primary-ascent);
        background-color: var(--primary-element);
        padding: 0.5em;
    }
    .HomeActivityBody-div{
        padding: 1em;
        height: calc(100% - 3.5rem);
        display: flex;
        flex-direction: column;
        overflow-y: overlay;
    }
    .responsive-table {
        padding: 0;
        color: var(--light-textcolor);
        
        li {
            border-radius: 3px;
            padding: 0.5em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 1em;
            list-style: none;
            background-color: var(--secondary-element);
            box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
        }
    }
</style>