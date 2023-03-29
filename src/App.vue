<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/LoginComponents/Login.vue';
import NavbarView from './views/NavbarView.vue'
import { store, role } from './store.js'
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
  <section v-else class="Login-section">
    <Login />
  </section>

</template>

<script>
  export default {
    data() {
      return{
        connection: null,
      }
    },
    methods: {
    },
    created: function(){
      if(localStorage.getItem("User")){
        const user = JSON.parse(localStorage.getItem("User"))
        store.IsAuthenticated = true
        role.value = user.Role
      }
    },

  }
</script>

<style scoped lang="scss">
.Login-section{
  color: white;
}
</style>