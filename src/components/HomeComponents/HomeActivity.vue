<template lang="">
    <div class="HomeActivity-div">
        <div class="HomeActivityLoaded-div" v-if="!isLoading">
            <div class="HomeActivityLabel-div">
                <label>Aktivitet</label>
            </div>
            <div class="HomeActivityBody-div">
                <ul class="responsive-table">
                    <li v-for="(Item, index) in TempData" :key="Item">
                        <div class="col col-2">{{Item.person}}</div>
                        <div class="col col-1">{{Item.name}}</div>
                        <div class="col col-2">{{Item.desc}}</div>
                        <div class="col col-3">{{Item.date}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else class="HomeActivityLoading-div">
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
    .HomeActivityLoading-div{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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

</style>