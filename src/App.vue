<script setup lang="jsx">
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/LoginComponents/Login.vue';
import NavbarView from './views/NavbarView.vue'
import { store, role, user } from './store.js'
import axios from "axios";
import Loading from './components/UtilsComponents/Loading.vue';
</script>

<template>
  <div v-if="store.IsAuthenticated">
    <header>
      <NavbarView />
    </header>
    <section>
      <RouterView />
    </section>
  </div>  
  <section v-else-if="!IsLoggingIn" class="Login-section">
    <Login />
  </section>
  <Loading v-else />
</template>

<script lang="jsx">
  export default {
    data() {
      return{
        connection: null,
        IsLoggingIn: false
      }
    },
    created: async function(){
      if(localStorage.getItem("token")){
        this.IsLoggingIn = true;
        let token = localStorage.getItem("token")
        let expires = localStorage.getItem("expires")

        if(new Date(expires).getTime() > Date.now()){
          await axios.get(`https://localhost:7203/api/User/getUser`, 
          {
              headers: { Authorization: `Bearer ${token}` }
          })
          .then(response => {
            store.IsAuthenticated = true
            role.value = response.data.role;
            user.data.fullName = response.data.fullName
            this.IsLoggingIn = false;
          })
        }
        else{
          if(localStorage.getItem("refreshToken")){
            let refreshToken = localStorage.getItem("refreshToken")
            let token = localStorage.getItem("token")
            
            await axios.post(`https://localhost:7203/api/User/refreshToken`, {
              token: token,
              refreshToken: refreshToken
            })
            .then(async response => {
              localStorage.setItem("token", response.data.token.token)
              localStorage.setItem("refreshToken", response.data.token.refreshToken)
              localStorage.setItem("expires", response.data.token.expiration)

              await axios.get(`https://localhost:7203/api/User/getUser`, 
                {
                    headers: { Authorization: `Bearer ${response.data.token.token}` }
                })
                .then(userResponse => {
                  store.IsAuthenticated = true
                  role.value = userResponse.data.role;
                  user.data.fullName = userResponse.data.fullName
                  this.IsLoggingIn = false;
              })
            })
            .catch(error => {
              this.IsLoggingIn = false;
            })
          } else{
            this.IsLoggingIn = false;
            localStorage.clear()
          }
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .Login-section{
    color: var(--light-textcolor);
  }
</style>