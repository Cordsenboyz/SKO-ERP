<script setup lang="jsx">
import { RouterLink } from 'vue-router'
import { role} from '../../store.js'
</script>

<template lang="">
    <div class="NavItems">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/Lager">Lager</RouterLink>
            <RouterLink v-if="role.value == 'Admin' " to="/Manager">Admin</RouterLink>
            <RouterLink v-if="role.value == 'Manager' " to="/Manager">Lån</RouterLink>
        </nav>
    </div>
</template>

<script lang="jsx">
export default {
}
</script>

<style scoped lang="scss">
    .NavItems nav a{
        color: var(--light-textcolor);
        text-decoration: none;
        font-weight: bold;
        font-family: sans-serif;
        width: 60%;
        text-align: center;

        &:hover{
            text-decoration: underline;
        }

        &:not(:last-child){
            padding-right: 1rem;
        }

        &:not(:first-child){
            padding-left: 1rem;
        }
    }    
    .NavItems{
        transition: 3s;
        margin: 0 auto;
    }
</style>