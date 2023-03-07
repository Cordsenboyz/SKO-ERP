<script setup lang="jsx">
import {store} from "../../store.js"
</script>

<template lang="">
    <div class="form-div">
        <form class="form-group" @submit="Login($event)">
            <label class="form-title">SKO-ERP</label>
            <label class="form-input-label">Username</label>
            <input v-model="Username" type="Username" class="form-control" placeholder="Username" required>
            <label class="form-input-label">Password</label>
            <input v-model="Password" type="Password" class="form-control" placeholder="Password" required>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            Username: "",
            Password: "",

            TempLoginUsername: "Admin",
            TempLoginPassword: "Password",
            User: {
                Username: "Admin",
                Email: "Admin@sko-erp.dk",
                Role: "Admin",
                AccessToken: "ergergergergergergergergfdsfdftrsgervxfvgsrgvv"
            }
        }
    },
    methods: {
        Login: function(event){
            event.preventDefault();
            if(this.Username == this.TempLoginUsername && this.Password == this.TempLoginPassword){
                localStorage.setItem("User", JSON.stringify(this.User))
                store.IsAuthenticated = true
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
        background-color: white;
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
        background-color: aliceblue;
    }
    .form-title{
        color: black;
        font-size: 10em;
        font-weight: bold;
        text-align: center;
    }
    .form-input-label{
        color: black;
        font-weight: bold;
    }
    .btn-primary{
        background-color: lightblue;
        padding: 0.5em;
        border-radius: 1em;
        
        &:hover{
            cursor: pointer;
            
        }
    }
</style>