<script setup lang="jsx">
import ManagerMain from '../components/ManagerComponents/ManagerMain.vue';
import {role} from '../store.js'
</script>

<template lang="">
    <ManagerMain v-if="role.value === 'Admin' || role.value === 'Manager'"/>
</template>

<script lang="jsx">
export default {

}
</script>

<style scoped lang="scss">

</style>