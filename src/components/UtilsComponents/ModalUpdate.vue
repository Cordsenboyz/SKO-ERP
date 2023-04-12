<script setup lang="jsx">
import BarcodeScanner from './BarcodeScanner.vue';

</script>

<template>
    <div class="overlay">
        <div class="dialog-wrapper">
            <div class="dialog" @click.stop="">
                <form class="form-group" @submit="UpdateItem($event)">
                    <div class="dialog__content">
                        <h2 class="form-title">Tilføj Produkt</h2>
                    </div>
                    <div class="form-input-group">
                        <label class="form-input-label">Navn</label>
                        <input v-model="LagerItem.name" class="form-control" placeholder="Navn">
                        <label class="form-input-label">Beskrivelse</label>
                        <input v-model="LagerItem.desc" class="form-control" placeholder="Beskrivelse">                        
                        <label class="form-input-label">Amount</label>
                        <input v-model="LagerItem.amount" class="form-control" placeholder="Beskrivelse">
                        <label class="form-input-label">Kategori</label>
                        <input v-model="LagerItem.category.name" class="form-control" placeholder="Kategori">
                        <label class="form-input-label">Under Kategori</label>
                        <input v-model="LagerItem.subcategory.name" class="form-control" placeholder="Under Kategori">
                        <label class="form-input-label">Producent</label>
                        <input v-model="LagerItem.producent" class="form-control" placeholder="Producent">
                    </div>
                    <div class="dialog__footer">
                        <button @click="cancel" type="reset" class="btn btn-cancel">Fortryd</button>
                        <button @click="confirm" type="submit" class="btn btn-update">Opdatér</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script lang="jsx">
export default {
    data(){
        return{

        }
    },
    props: ['show', 'cancel', 'confirm', 'UpdateItem', 'LagerItem'],
    methods: {

    }
}
</script>

<style scoped lang="scss">
    .overlay {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.6s ease;
    }
    .dialog-wrapper{
        display: table-cell;
        vertical-align: middle;
    }
    .dialog {
        font-family: sans-serif;
        width: 24rem;
        margin: 0px auto;
        padding: 5px;
        background-color: var(--primary-background);
        color: var(--light-textcolor);
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
    }
    .dialog__content {
        padding: 1rem .75rem;
    }
    .dialog__footer {
        display: flex;
        justify-content: flex-end;
        padding: 1rem 0 0 0;
        gap: 0.5em
    }
    .form-group{
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    .form-input-group{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .uploading-image{
        width: 50%;
        margin: 0 auto;
    }
    .form-input-label{
        font-weight: bold;
    }
    .form-control{
        border-radius: 5px;
        border: unset;
        padding: 0.5em;
        &:focus{
            outline-color: var(--primary-element);
        }
    }
    .form-title{
        color: var(--light-textcolor);
        font-weight: bold;
        text-align: center;
    }
</style>