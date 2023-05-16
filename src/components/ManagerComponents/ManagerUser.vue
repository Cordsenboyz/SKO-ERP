<script setup lang="jsx">
import { toRaw } from 'vue';
import { role } from '../../store.js'
import ManagerUserItem from './ManagerItems/ManagerUserItem.vue';
import ModalProfile from '../UtilsComponents/ModalProfile.vue';
import axios from 'axios';
import Loading from '../UtilsComponents/Loading.vue';
</script>

<template lang="">
    <div class="UserSearch-div">
        <input class="search-input" type="text" v-model="search" placeholder="Søg efter personer">
        <button class="btn btn-confirm">Opret</button>
    </div>
    <div class="UserBody-div">
        <ul v-if="!isLoading">
            <ManagerUserItem v-for="Item in SearchUser" :key="Item" :Item="Item"/>
        </ul>
        <Loading v-else />
    </div>
    <ModalProfile v-if="role.value === 'Admin' && showProfileModal == true" :cancel="cancel" :confirm="confirm" :Item="modalItem"/>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            isLoading: true,
            search: "",
            UserApiData: [],
            showProfileModal: false,
            modalItem: {},
        }
    },
    computed: {
        SearchUser(){
            const SearchUser = toRaw(this.UserApiData).filter(item => {
                return (
                    item.fullName.toLowerCase().includes(this.search.toLowerCase())
                );
            })
            return SearchUser
        }
    },
    mounted: async function(){
        this.emitter.on("DeleteUser", (user) => {
        })

        this.emitter.on("ShowProfileModal", (Item) => {
            this.modalItem = Item
            this.showProfileModal = true
        })

        let token = localStorage.getItem("token")

        await axios.get("https://localhost:7203/api/User/getAllUsers", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.UserApiData = response.data
            this.isLoading = false
        })
    },
    methods: {
        cancel: function(){
            this.showProfileModal = false
        },
        confirm: function(){
            this.showProfileModal = false
        },
    }
}
</script>

<style scoped lang="scss">
    .UserSearch-div{
        display: flex;
        padding: 0.5em 1em 0px 1em;
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