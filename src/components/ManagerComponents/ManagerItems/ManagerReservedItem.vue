<script setup lang="jsx">
defineProps({
    Item: Object
})
</script>

<template lang="">
    <li>
        <div class="col col-2">Person: {{Item.fullName}}</div>
        <div class="col col-2">Beskrivelse: {{Item.description}}</div>
        <div class="col col-2 item">
            <p>{{Item.amount}}</p>
            <p>{{Item.itemName}}</p>
        </div>
        <div class="col col-2 item">
            <p>{{Item.dateFrom}}</p>
            <p v-if="Item.dateTo" >{{Item.dateTo}}</p>
        </div>
    </li>
</template>

<script lang="jsx">
export default {
}
</script>

<style scoped lang="scss">
    li {
        border-radius: 3px;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
        list-style: none;
        background-color: var(--secondary-element);
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
        color: var(--light-textcolor);
    }
    .col-1 {
        flex-basis: 30%;
    }
    .col-2 {
        flex-basis: 30%;
    }
    .item{
        display: flex;
        justify-content: center;
        gap: 1em;
    }
</style>