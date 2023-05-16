<script setup lang="jsx">
defineProps({
    Item: Object,
})
</script>

<template lang="">
    <li>
        <div class="col col-2 item">{{Item.item.name}}</div>
        <div class="col col-2 item">{{Item.description}}</div>
        <div class="col col-2 item">{{Item.amount}}</div>
        <div class="col col-2 item">{{Item.dateFrom}}</div>
        <div class="col col-2 item">{{Item.dateTo}}</div>
    </li>
</template>

<script lang="jsx">
export default {
    
}
</script>

<style scoped lang="scss">
    
</style>