<template lang="">
    <ul>
        <li>
            <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">Første</button>
        </li>
        <li>
            <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">Previous</button>
        </li>
        <li v-for="page in pages" :key="page.name">
            <button type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled">{{ page.name }}</button>
        </li>
    </ul>
</template>
<script>
export default {
    props: ["data", "itemsPerPage", "maxPagesShown"],
    computed: {
        
    }
}
</script>
<style lang="">
    
</style>