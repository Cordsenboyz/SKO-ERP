<script setup lang="jsx">
defineProps({
    Item: Object
})
</script>

<template lang="">
    <li :class="isDueSoon ? 'dueSoon' : 'Test'">
        <div class="col col-2">Navn: {{Item.name}}</div>
        <div class="col col-2">Beskrivelse: {{Item.desc}}</div>
        <div class="col col-3">Mændge: {{Item.amount}}</div>
        <div class="col col-3">Fra: {{Item.dateFrom.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
        <div v-if="Item.dateToo" class="col col-3">Til: {{Item.dateToo.toLocaleString('en-GB', { timeZone: 'CET' })}}</div>
    </li>
</template>

<script lang="jsx">
export default {
    data(){
        return{

        }
    },
    computed:{
        isDueSoon(){
            return Date.now() < this.Item.dateToo.getTime() ? true : false
        }
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