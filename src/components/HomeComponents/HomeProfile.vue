<script setup lang="jsx">
import {user} from '../../store.js'
import Modal from '../UtilsComponents/Modal.vue'
</script>

<template lang="">
    <div class="HomeProfile-div">
        <label>Hej, {{user.data.fullName}}</label>
        <div class="HomeProfileBtn-container">
            <button class="btn btn-update">Redigér</button>
            <button class="btn btn-confirm" @click="showProfileModal = true">Profil</button>
        </div>
        <Modal v-if="showProfileModal">
            <button class="btn btn-cancel" @click="showProfileModal = false">Luk</button>
        </Modal>
    </div>

</template>

<script lang="jsx">
export default {
    data(){
        return{
            showProfileModal: false,
        }
    },
}
</script>

<style scoped lang="scss">
    .HomeProfile-div{
        border-radius: 0.5em;
        background-color: var(--primary-background);
        display: flex;
        padding: 1.5em;
        align-items: center;

        label{
            color: var(--light-textcolor);
            font-weight: bold;
            font-size: 4ch;
            text-align: center;
        }
    }
    .HomeProfileBtn-container{
        margin-left: auto;
        display: flex;
        gap: 0.5em;
    }
</style>