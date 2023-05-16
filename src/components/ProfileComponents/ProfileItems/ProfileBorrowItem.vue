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
        <div class="col col-2 item">{{Item.dateFrom.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
        <div class="col col-2 item" v-text="Item.dateTo.toLocaleString('en-GB', { timeZone: 'CET' }) || 'N/A'"></div>
    </li>
</template>

<script lang="jsx">
export default {
    
}
</script>

<style scoped lang="scss">

</style>