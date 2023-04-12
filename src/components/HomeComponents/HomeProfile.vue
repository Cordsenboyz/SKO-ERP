<script setup lang="jsx">
import {user} from '../../store.js'
</script>

<template lang="">
    <div class="HomeProfile-div">
        <label>Hej, {{user.data.username}}</label>
        <div class="HomeProfileBtn-container">
            <button class="btn btn-update">Redigér</button>
            <button class="btn btn-confirm">Profil</button>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{

        }
    }
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