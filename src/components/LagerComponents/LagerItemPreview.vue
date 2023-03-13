<script setup lang="jsx">
import { role } from '../../store.js'
defineProps({
    imgsrc: String,
    id: Number,
    name: String,
    desc: String,
    amount: Number,
    category: String,
    subcategory: String,
    producent: String,
})

</script>

<template lang="">
    <div class="LagerItemPreview-div">
        <div class="LagerItemPreviewLabel-div">
            <label>Forhåndsvisning</label>
        </div>
        <div class="LagerItemPreviewBody-div">
            <div>
                <img class="LagerItemPreview-img" :src="this.imgsrc" alt=""/>
            </div>
            <div>
                <label for="id">Serienummer:</label>
                <p>{{id}}</p>
            </div>
            <div>
                <label for="name">Navn:</label>
                <p>{{name}}</p>
            </div>
            <div>
                <label for="description">Beskrivelse:</label>
                <p>{{desc}}</p>
            </div>
            <div>
                <label for="amount">Mængde på lager:</label>
                <p>{{amount}}</p>
            </div>            
            <div>
                <label for="amount">Kategori:</label>
                <p>{{category.name}}</p>
            </div>            
            <div>
                <label for="amount">Under Kategori:</label>
                <p>{{subcategory.name}}</p>
            </div>            
            <div v-if="this.producent !== ''">
                <label for="amount">Producent:</label>
                <p>{{producent}}</p>
            </div>
            <div class="button-container">
                <button class="btn btn-confirm">Hent</button>              
                <button v-if="role.value == 'Admin'" class="btn btn-update">Opdatér</button>
                <button v-if="role.value == 'Admin'" class="btn btn-danger">Slet</button>
            </div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    
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
        
        div{
            gap: 0.7em;
        }
    }
    .LagerItemPreviewLabel-div{
        text-align: center;
        padding: 1rem;
        border-bottom: 2px solid rgba(246,76,114,1);
        
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