<script setup lang="jsx">
defineProps({
    Item: Object
})
</script>

<template lang="">
    <li :class="isDueSoon ? 'dueSoon' : 'Test'">
        <div class="col col-2 item"><label>Person:</label><p>{{Item.fullName}}</p></div>
        <div class="col col-2 item"><label>Navn:</label><p>{{Item.itemName}}</p></div>
        <div class="col col-2 item"><label>Beskrivelse:</label><p>{{Item.description}}</p></div>
        <div class="col col-2 item"><label>Mængde:</label><p>{{Item.amount}}</p></div>
        <div class="col col-2 item"><label>Fra:</label><p>{{Item.dateFrom.toLocaleString('en-GB', { timeZone: 'CET' })}}</p></div>
        <div class="col col-2 item"><label>Til:</label><p>{{Item.dateTo.toLocaleString('en-GB', { timeZone: 'CET' })}}</p></div>
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
        justify-content: space-between;
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
    .col-3 {
        flex-basis: 30%;
    }
    .col-4 {
        flex-basis: 25%;
    }
    .item{
        display: flex;
        gap: 0.3em;
        flex-direction: row;
        justify-content: center;
    }
    .dueSoon{
        &::before{
            content: "🎇";
            position: absolute;
            left: 0;
            top: 0;
        }
    }
</style>