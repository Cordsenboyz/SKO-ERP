<script setup lang="jsx">
defineProps({
    Item: Object
})
</script>

<template lang="">
    <li>
        <div class="col col-2">{{Item.fullName}}</div>
        <div class="col col-2">{{Item.itemName}}</div>
        <div class="col col-2">{{Item.description}}</div>
        <div class="col col-2">{{Item.amount}}</div>
        <div class="col col-2">{{Item.dateFrom}}</div>
        <div class="col col-2">{{Item.dateTo}}</div>
        <button class="btn btn-confirm" @click="AcceptBorrow()">Acceptér</button>
        <button class="btn btn-danger" @click="DeclineBorrow()">Afvis</button>
    </li>
</template>

<script lang="jsx">
export default {
    methods: {
        DeclineBorrow: function(){
            this.emitter.emit("DeclineBorrow", (this.Item))
        },
        AcceptBorrow: function(){
            this.emitter.emit("AcceptBorrow", (this.Item.id))
        }
    }
}
</script>

<style scoped lang="scss">
    li {
        border-radius: 3px;
        padding: 0.5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1em;
        list-style: none;
        background-color: var(--secondary-element);
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
        color: var(--light-textcolor);
        gap: 0.5em;
    }
    .col-1 {
        flex-basis: 30%;
    }
    .col-2 {
        flex-basis: 30%;
    }
</style>