<script setup lang="jsx">
defineProps({
    Item: Object
})
</script>

<template lang="">
    <li :class="isDueSoon ? 'dueSoon' : 'Test'">
        <div class="col col-2">Navn: {{Item.item.name}}</div>
        <div class="col col-2">Beskrivelse: {{Item.description}}</div>
        <div class="col col-3">Mændge: {{Item.amount}}</div>
        <div class="col col-3">Fra: {{Item.dateFrom.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
        <div class="col col-3">Til: {{Item.dateTo.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
    </li>
</template>

<script lang="jsx">
export default {
    data(){
        return{

        }
    },
    computed:{
/*         isDueSoon(){
            return Date.now() < this.Item.dateTo.getTime() ? true : false
        } */
    }
}
</script>

<style scoped lang="scss">
    .dueSoon{
        &::after{
            content: "";
        }
    }
    .Test{
    }
</style>