<script setup lang="jsx">
defineProps({
    Item: Object,
})
</script>

<template lang="">
    <li>
        <div class="col col-3">{{Item.item.name}}</div>
        <div class="col col-1">{{Item.description}}</div>
        <div class="col col-1">{{Item.amount}}</div>
        <div class="col col-3">{{Item.dateFrom.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
        <div class="col col-3">{{Item.dateTo.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
    </li>
</template>

<script lang="jsx">
export default {
    
}
</script>
<style scoped lang="scss">
    .col-1 {
        flex-basis: 40%;
    }
    .col-2 {
        flex-basis: 10%;
    }
    .col-3 {
        flex-basis: 25%;
    }
    .col-4 {
        flex-basis: 25%;
    }
</style>