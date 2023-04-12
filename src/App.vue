<script setup lang="jsx">
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/LoginComponents/Login.vue';
import NavbarView from './views/NavbarView.vue'
import { store, role, user } from './store.js'
import axios from "axios";
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
  <div v-else class="LoginLoading-div">
      <div class="loader"></div>
  </div>
</template>

<script lang="jsx">
  export default {
    data() {
      return{
        connection: null,
        IsLoggingIn: false
      }
    },
    methods: {
    },
    created: async function(){
      if(localStorage.getItem("token")){
        this.IsLoggingIn = true;
        var token = localStorage.getItem("token")
        let userobject = await axios.get(`https://localhost:7203/api/User/getUser`, 
          {
              headers: { Authorization: `Bearer ${token}` }
          })
          store.IsAuthenticated = true
          role.value = userobject.data.role;
          user.data.username = userobject.data.userName
          this.IsLoggingIn = false;
      }
    },
  }
</script>

<style scoped lang="scss">
  .Login-section{
    color: var(--light-textcolor);
  }
  .LoginLoading-div{
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  .loader {
        border: 16px solid var(--dark-loading);
        border-top: 16px solid var(--primary-websitebackground);
        border-radius: 50%;
        width: 10rem;
        height: 10rem;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>