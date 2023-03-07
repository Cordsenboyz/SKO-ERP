<script setup>
import { RouterLink } from 'vue-router'
</script>

<template lang="">
    <div class="NavItems">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">Lager</RouterLink>
            <RouterLink to="/about">Admin</RouterLink>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .NavItems nav a{
        color: White;
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