<script setup lang="jsx">
import ManagerUserItem from './ManagerUserItem.vue';
</script>

<template lang="">
    <div class="UserSearch-div">
        <input class="search-input" type="text" v-model="search" placeholder="Søg efter personer">
        <button class="btn btn-confirm">Opret</button>
    </div>
    <div class="UserBody-div">
        <ul>
            <ManagerUserItem v-for="Item in SearchUser" :key="Item" :Item="Item"/>
        </ul>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            search: "",
            Users: [{
                id: 1,
                name: "Daniel Simonsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 1,
                name: "Lasse Lund Madsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 1,
                name: "Rune Nielsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 1,
                name: "Omid",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 1,
                name: "Jonas",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 1,
                name: "Thomas Vestergaard",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 1,
                name: "Daniel Simonsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 1,
                name: "Daniel Simonsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            }]
        }
    },
    computed: {
        SearchUser(){
            const SearchUser = this.Users.filter(item => {
                return (
                    item.name.toLowerCase().includes(this.search.toLowerCase())
                );
            })
            return SearchUser
        }
    }
}
</script>

<style scoped lang="scss">
    .UserSearch-div{
        display: flex;
        padding: 1em;
        >button{
            margin-left: auto;
        }
    }
    .UserBody-div{
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        height: calc(100% - 7rem);
        overflow: overlay;
    }
    .search-input{
        display: inline-block;
        position: relative;
        font-size: 3ch;
        width: 15rem;
        height: 2rem;
        border-radius: 0.5em;
        padding: 0.5em;
        white-space: nowrap;
        box-sizing: border-box;
        font-size: 12px;

        &:focus{
            outline-color: hsl(197, 100%, 30%);
        }
    }
    
</style>