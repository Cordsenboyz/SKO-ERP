<script setup lang="jsx">
defineProps({
    Item: Object,
})
</script>

<template lang="">
    <li class="table-row">
        <div class="col col-2">{{Item.id}}</div>
        <div class="col col-1">{{Item.name}}</div>
        <div class="col col-2">{{Item.amount}}</div>
        <div class="col col-3">{{Item.category.name}}</div>
        <div class="col col-4">{{Item.subCategory.name}}</div>
    </li>
</template>

<script lang="jsx">
export default {
    
}
</script>

<style scoped lang="scss">
    
</style>