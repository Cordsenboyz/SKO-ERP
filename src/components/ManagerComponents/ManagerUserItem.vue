<script setup lang="jsx">
import ModalProfile from '../UtilsComponents/ModalProfile.vue';
import {role} from '../../store.js'
defineProps({
    Item: Object
})
</script>

<template lang="">
    <li>
        <div class="col col-2">Navn: {{Item.fullName}}</div>
        <div class="col col-2">Email: {{Item.email}}</div>
        <div class="col col-2">Role: {{Item.role}}</div>
        <button class="btn btn-confirm" @click="ShowModal()">Vis Profil</button>
        <button class="btn btn-danger" @click="DeleteUser()">Slet</button>
    </li>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            showModal: false
        }
    },
    methods:{
        ShowModal: function(){
            this.emitter.emit("ShowProfileModal", (this.Item))
        },
        DeleteUser: function(){
            this.emitter.emit("DeleteUser", (this.Item))
        }
    }
}
</script>

<style scoped lang="scss">
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
        color: var(--light-textcolor);
        gap: 0.5em;
    }
    .col-1 {
        flex-basis: 30%;
    }
    .col-2 {
        flex-basis: 30%;
    }
</style>