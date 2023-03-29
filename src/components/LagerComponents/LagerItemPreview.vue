<script setup lang="jsx">
import { role } from '../../store.js'
import Dialog from '../UtilsComponents/Dialog.vue';
import ModalUpdate from '../UtilsComponents/ModalUpdate.vue';
defineProps({
    SelectedItem: Object
})

</script>

<template lang="">
    <div class="LagerItemPreview-div">
        <div class="LagerItemPreviewLabel-div">
            <label>Forhåndsvisning</label>
        </div>
        <div class="LagerItemPreviewBody-div">
            <div>
                <img class="LagerItemPreview-img" :src="SelectedItem.imgsrc" alt=""/>
            </div>
            <div>
                <label for="id">Serienummer:</label>
                <p>{{SelectedItem.id}}</p>
            </div>
            <div>
                <label for="name">Navn:</label>
                <p>{{SelectedItem.name}}</p>
            </div>
            <div>
                <label for="description">Beskrivelse:</label>
                <p>{{SelectedItem.desc}}</p>
            </div>
            <div>
                <label for="amount">Mængde på lager:</label>
                <p>{{SelectedItem.amount}}</p>
            </div>            
            <div>
                <label for="amount">Kategori:</label>
                <p>{{SelectedItem.category.name}}</p>
            </div>            
            <div>
                <label for="amount">Under Kategori:</label>
                <p>{{SelectedItem.subcategory.name}}</p>
            </div>            
            <div v-if="this.producent !== ''">
                <label for="amount">Producent:</label>
                <p>{{SelectedItem.producent}}</p>
            </div>
            <div>
                <label for="amount">Barcode:</label>
                <p>{{SelectedItem.barcode}}</p>
            </div>  
            <div class="button-container">
                <button class="btn btn-confirm">Hent</button>              
                <button v-if="role.value == 'Admin'" class="btn btn-update" @click="UpdateItem()">Opdatér</button>
                <button v-if="role.value == 'Admin'" class="btn btn-danger" @click="DeleteItem()">Slet</button>
            </div>
        </div>
    </div>
    <Dialog v-if="role.value == 'Admin'" :show="showDialog" :cancel="DeleteCancel" :confirm="DeleteConfirm" title="Slet produkt" description="Du skal kun slette dette produkt hvis du er sikker på der ikke er mere på lageret" />
    <ModalUpdate v-if="role.value == 'Admin' && showModalUpdate" :cancel="UpdateCancel" :confirm="UpdateConfirm" :SubmitCreate="SubmitUpdate" :LagerItem="Item"/>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            showDialog: false,
            showModalUpdate: false,
            Item: Object
        }
    },
    methods: {
        DeleteItem: function(){
            this.showDialog = true;
        },
        DeleteCancel: function(){
            this.showDialog = false;
        },
        DeleteConfirm: function(){
            this.emitter.emit("DeleteItem", this.id)
            this.showDialog = false;
        },
        SubmitUpdate: function(e){
            e.preventDefault()
            this.showModalUpdate = false;
        },
        UpdateItem: function(){
            this.Item = {...this.SelectedItem}
            this.showModalUpdate = true;
        },
        UpdateCancel: function(){
            this.showModalUpdate = false;
        },
        UpdateConfirm: function(){
            this.showModalUpdate = false;
        },
    }
}
</script>

<style scoped lang="scss">
    .LagerItemPreview-div{
        width: 20%;
        background-color: #005070;
        border-radius: 0.5em;
        height: 100%;
        box-shadow: 0 15px 30px 0 rgb(0 0 0 / 11%), 0 5px 15px 0 rgb(0 0 0 / 8%);
        color: white;
        overflow: hidden;
        
        div{
            gap: 0.7em;
        }
    }
    .LagerItemPreviewLabel-div{
        text-align: center;
        padding: 1rem;
        border-bottom: 2px solid rgba(246,76,114,1);
        background-color: var(--primary-element);
        
        Label{
           font-size: 3ch;
           font-weight: bold; 
        }
    }
    .LagerItemPreviewBody-div{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        height: calc(100% - 4.5rem);

        label{
            font-weight: bold;
            font-size: 2ch;
        }
    }
    .LagerItemPreview-img{
        width: 100%;
        max-height: 20ch;
    }
    .button-container{
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
        margin-top: auto;

        button:first-of-type{
            grid-column-start: 1;
            grid-column-end: 3; 
        }
    }
</style>