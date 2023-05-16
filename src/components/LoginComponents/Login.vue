<script setup lang="jsx">
import axios from "axios";
import {store, role, user} from "../../store.js"
import {AxiosError} from 'axios';
import Loading from "../UtilsComponents/Loading.vue";
</script>

<template lang="">
    <div v-if="!registerMode" class="form-div">
        <form class="form-group" @submit="Login($event)">
            <label class="form-title">SKO-ERP</label>
            <div v-if="!isLoggingIn" class="form-group">
                <li class="error-li" v-for="error in errors" :key="error">
                    <p>{{error}}</p>
                    <button class="errorclose-btn right" type="button" @click="this.errors = []">✖</button>
                </li>

                <label class="form-input-label">Email</label>
                <input v-model="Email" type="Username" class="form-control" placeholder="Email" required>
                <label class="form-input-label">Password</label>
                <input v-model="Password" type="Password" class="form-control" placeholder="Password" required>

                <div class="rememberme-div">
                    <input v-model="RememberMe" type="checkbox" placeholder="Husk Mig?">
                    <Label>Husk Mig?</Label>
                </div>

                <div class="btncontainer-div">
                    <button type="submit" class="btn btn-login login">Login</button>
                    <button type="button" class="btn btn-register login" @click="registerMode = true">Registér</button>
                </div>
            </div>
            <Loading v-else />
        </form>
    </div>
    <div v-else class="form-div">
        <form class="form-group" @submit="Register($event)">
            <label class="form-input-label">Email</label>
            <input v-model="registerEmail" type="Username" class="form-control" placeholder="Email" required>
            <label class="form-input-label">Fulde navn</label>
            <input v-model="registerFullName" type="Username" class="form-control" placeholder="Email" required>
            <label class="form-input-label">Password</label>
            <input v-model="registerPassword" type="Password" class="form-control" placeholder="Password" required>
            <div class="btncontainer-div">
                <button type="submit" class="btn btn-confirm login">Opret</button>
                <button type="reset" class="btn btn-danger login" @click="registerMode = false">Fortryd</button>
            </div>
        </form>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            Email: "",
            Password: "",

            registerEmail: "",
            registerFullName: "",
            registerPassword: "",
            registerMode: false,

            isLoggingIn: false,
            RememberMe: false,
            errors: []
        }
    },
    methods: {
        Login: async function(event){
            event.preventDefault();
            this.errors = []
            this.isLoggingIn = true;

            await axios.post('https://localhost:7203/api/User/Login', {
                email: this.Email,
                password: this.Password
            })
            .then(async response => {
                if(response.data.succeeded){
                    localStorage.setItem("token", response.data.token.token)
                    localStorage.setItem("expires", response.data.token.expiration)

                    if(this.RememberMe === true){
                        localStorage.setItem("refreshToken", response.data.token.refreshToken)
                    }

                    await axios.get(`https://localhost:7203/api/User/getUser`, 
                    {
                        headers: { Authorization: `Bearer ${response.data.token.token}` }
                    })
                    .then(async response => {
                        role.value = response.data.role
                        user.data.fullName = response.data.fullName
                        store.IsAuthenticated = true
                        this.isLoggingIn = false;
                    })
                }
            })
            .catch(error => {
                this.isLoggingIn = false;
                if(error?.code === AxiosError.ERR_NETWORK){
                    this.errors.push("Kunne ikke forbinde til serveren")
                }
                if(error.response.status == 400){
                    this.errors.push("Vi kunne ikke verificere dine login oplysninger")
                } else {
                    this.errors.push("Der er sket en fejl. Genindlæs siden og prøv igen")
                }
            })
        },
        Register: async function(event){
            event.preventDefault();
            await axios.post('https://localhost:7203/api/User/register', {
                email: this.registerEmail,
                fullName: this.registerFullName,
                password: this.registerPassword
            })
            .then(response => {
                this.registerMode = false
            })
            .catch(error => {
            })
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
        min-height: 20rem;
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
        padding-bottom: 0.5em;
        background-color: var(--primary-background);
        border: none;
        color: var(--light-textcolor);
        border-bottom: 1px solid black;
        font-size: 2ch;

        &:focus{
            outline: none;
            border-bottom: 1px solid white;
        }
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
    .btncontainer-div{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .btn-login{
        padding: 1em;
        background-color: var(--confirm);
        color: var(--dark-textcolor);
        &:hover{
            cursor: pointer;
        }
    }
    .btn-register{
        background-color: var(--secondary-element);
        color: var(--light-textcolor);
    }
    .login{
        width: 40%;
        overflow: hidden;

    }
    .rememberme-div{
        display: flex;
        gap: 0.5em;
    }
    .error-li{
        background-color: var(--danger-opacity);
        list-style: none;
        padding: 0.5em;
        border-radius: 0.5em;
        border: 2px solid var(--danger);
        display: flex;
    }
    .errorclose-btn{
        background: transparent;
        border: none;
        color: var(--light-textcolor);

        &:hover{
            cursor: pointer;
            color: var(--dark-textcolor)
        }
    }
</style>