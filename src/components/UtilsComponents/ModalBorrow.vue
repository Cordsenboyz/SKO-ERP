<script setup lang="jsx">
</script>

<template>
    <div class="overlay">
        <div class="dialog-wrapper">
            <div class="dialog" @click.stop="">
                <form class="form-group" @submit="SubmitBorrow($event)">
                    <div class="dialog__content">
                        <h2 class="form-title">Lån Produkt</h2>
                    </div>
                    <div class="form-input-group">
                        <label class="form-input-label">Beskrivelse</label>
                        <input v-model="BorrowItem.description" class="form-control" placeholder="Navn">
                        <label class="form-input-label">Mængde</label>
                        <input v-model="BorrowItem.amount" class="form-control" placeholder="Beskrivelse">                        
                        <label class="form-input-label">Fra</label>
                        <input v-model="BorrowItem.dateFrom" type="date" class="form-control" placeholder="Beskrivelse">
                        <label class="form-input-label">Til</label>
                        <input v-model="BorrowItem.dateTo" type="date" class="form-control" placeholder="Kategori">
                    </div>
                    <div class="dialog__footer">
                        <button @click="cancel" type="reset" class="btn btn-cancel">Fortryd</button>
                        <button type="submit" class="btn btn-confirm">Lån</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script lang="jsx">
export default {
    props: ['cancel', 'SubmitBorrow', 'BorrowItem'],
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