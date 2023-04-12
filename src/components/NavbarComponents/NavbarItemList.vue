<script setup>
import { RouterLink } from 'vue-router'
import { role} from '../../store.js'
</script>

<template lang="">
    <div class="NavItems">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/Lager">Lager</RouterLink>
            <RouterLink v-if="roles == 'Admin' " to="/Manager">Admin</RouterLink>
            <RouterLink v-if="roles == 'Manager' " to="/Manager">Lån</RouterLink>
        </nav>
    </div>
</template>
<script>
export default {
    computed: {
        roles(){
            const roles = role.value
            return roles
        }
    }
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