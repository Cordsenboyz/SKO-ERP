<script setup lang="jsx">
import NavbarItemsList from '../components/NavbarComponents/NavbarItemList.vue';
import { store } from '../store';
</script>

<template lang="">
    <div class="Navbar-div">
        <p class="NavbarTitle-p">
            SKO-ERP
        </p>
        <div class="NavbarItems-div">
            <NavbarItemsList />
        </div>
        <p class="NavbarLogin-p"><button class="Logout-btn" @click="Logout()">Logout</button></p>
    </div>
</template>

<script lang="jsx">
export default {
    methods: {
        Logout: function(){
            localStorage.removeItem("token")
            store.IsAuthenticated = false
        }
    }
}
</script>
<style scoped lang="scss">
    .Navbar-div{
        top: 0;
        width: 100%;
        color: var(--light-textcolor);
        height: 3.5rem;
        display: flex;
        background: linear-gradient(90deg, rgba(251,166,28,1) 0%, rgba(246,76,114,1) 75%);
        flex-direction: row;
        box-shadow: 0 15px 30px 0 rgb(0 0 0 / 11%), 0 5px 15px 0 rgb(0 0 0 / 8%);
        align-items: center;
        margin-bottom: 1rem;
        padding: 0px 1rem;
    }
    .NavbarTitle-p{
        width: 20%;
        height: 100%;
        font-weight: bold;
        font-size: 20px;
        text-align: left;
        padding-left: 1rem;
        display: flex;
        align-items: center;
    }
    .NavbarItems-div{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .NavbarLogin-p{
        width: 20%;
        height: 100%;
        font-weight: bold;
        font-size: 20px;
        text-align: right;
        padding-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .Logout-btn{
        background-color: unset;
        border: 2px solid White;
        border-radius: 0.5em;
        color: var(--light-textcolor);
        font-weight: bold;
        padding: 0.5em;
        
        &:hover{
            cursor: pointer;
        }
    }
</style>