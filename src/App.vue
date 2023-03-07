<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/LoginComponents/Login.vue';
import NavbarView from './views/NavbarView.vue'
import { store } from './store.js'
</script>

<template>
  <div v-if="store.IsAuthenticated">
    <section>
      <NavbarView />
    </section>
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
      }
    },
    methods: {
    },
    created: function(){
      if(localStorage.getItem("User")){
        store.IsAuthenticated = true
      } 
    }
  }
</script>

<style scoped lang="scss">
.Login-section{
  color: white;
}
</style>