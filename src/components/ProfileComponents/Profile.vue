<script setup lang="jsx">
defineProps({
    Item: Object
})
</script>

<template lang="">
    <div class="Profile-header">
        <label>{{Item.name}}</label>
    </div>
    <div class="Profile-body">
        <p>{{Item.email}}</p>
        <p>{{Item.phone}}</p>
        <p>{{Item.role}}</p>
    </div>
</template>

<script lang="jsx">
export default {

}
</script>

<style scoped lang="scss">

</style>