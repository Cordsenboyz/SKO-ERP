<script setup lang="jsx">
import axios from "axios";
import {store, role, user} from "../../store.js"
</script>

<template lang="">
    <div v-if="!isLoggingIn" class="form-div">
        <form class="form-group" @submit="Login($event)">
            <label class="form-title">SKO-ERP</label>
            <label class="form-input-label">Email</label>
            <input v-model="Email" type="Username" class="form-control" placeholder="Email" required>
            <label class="form-input-label">Password</label>
            <input v-model="Password" type="Password" class="form-control" placeholder="Password" required>
            <button type="submit" class="btn btn-confirm btn-login">Login</button>
        </form>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            Email: "",
            Password: "",
            isLoggingIn: false,
        }
    },
    methods: {
        Login: async function(event){
            event.preventDefault();
            this.IsLoggingIn === true;
            let response = await axios.post('https://localhost:7203/api/User/Login', {
                email: this.Email,
                password: this.Password
            })
            if(response.data.succeeded){
                localStorage.setItem("token", response.data.token.token)
                let userobject = await axios.get(`https://localhost:7203/api/User/getUser`, 
                {
                    headers: { Authorization: `Bearer ${response.data.token.token}` }
                })
                role.value = userobject.data.role;
                store.IsAuthenticated = true
                user.data.username = userobject.data.userName
                this.IsLoggingIn === false;
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .form-div{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        box-shadow: 0 15px 30px 0 rgb(0 0 0 / 11%), 0 5px 15px 0 rgb(0 0 0 / 8%);
    }
    .form-group{
        background-color: var(--primary-background);
        display: flex;
        flex-direction: column;
        gap: 1rem;       
        padding: 2rem;
        border-radius: 1rem;
    }
    .form-control{
        border-radius: 5px;
        border: 2px solid black;
        padding: 1rem;
    }
    .form-title{
        color: --light-textcolor;
        font-size: 10em;
        font-weight: bold;
        text-align: center;
    }
    .form-input-label{
        color: --light-textcolor;
        font-weight: bold;
    }
    .btn-login{
        padding: 1em;
        border-radius: 1em;
        
        &:hover{
            cursor: pointer;
            
        }
    }
</style>