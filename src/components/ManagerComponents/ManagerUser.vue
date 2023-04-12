<script setup lang="jsx">
import { role } from '../../store.js'
import ManagerUserItem from './ManagerUserItem.vue';
import ModalProfile from '../UtilsComponents/ModalProfile.vue';
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
    <ModalProfile v-if="role.value === 'Admin' && showProfileModal == true" :cancel="cancel" :confirm="confirm" :UpdateUser="UpdateUser" :Item="modalItem"/>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            search: "",
            Users: [{
                id: 1,
                imgUrl: "",
                name: "Daniel Simonsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 2,
                name: "Lasse Lund Madsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 3,
                name: "Rune Nielsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 4,
                name: "Omid",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 5,
                name: "Jonas",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 6,
                name: "Thomas Vestergaard",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 7,
                name: "Daniel Simonsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            },
            {
                id: 8,
                name: "Daniel Simonsen",
                email: "Danho@skp-erp.dk",
                phone: "37281632",
                role: "Admin",
            }],
            showProfileModal: false,
            modalItem: {},
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
    },
    mounted: function(){
        this.emitter.on("DeleteUser", (user) => {
            this.Users.splice(this.Users.indexOf(user), 1)
        })
        this.emitter.on("ShowProfileModal", (Item) => {
            this.modalItem = Item
            this.showProfileModal = true
        })
        this.emitter.on("UpdateUser", (Item) => {
            this.UpdateUser(Item)
        })
    },
    methods: {
        cancel: function(){
            this.showProfileModal = false
        },
        confirm: function(){
            this.showProfileModal = false
        },
        UpdateUser: function(Item){
            const idxObj = this.Users.findIndex(object => {
                return object.id === Item.id
            })
            this.showProfileModal = false
            this.Users[idxObj] = Item
        },
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
            outline-color: var(--primary-element);
        }
    }
    
</style>