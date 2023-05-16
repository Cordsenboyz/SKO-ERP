<script setup lang="jsx">
</script>

<template>
    <div v-show="show" class="overlay">
        <div class="dialog-wrapper">
            <div class="dialog" @click.stop="">
                <form class="form-group" @submit="SubmitCreate($event)" @keydown.enter.prevent = "">
                    <div class="dialog__content">
                        <h2 class="form-title">Tilføj Produkt</h2>
                    </div>
                    <div class="form-input-group">
                        <label class="form-input-label">Navn *</label>
                        <input v-model="Item.name" class="form-control" placeholder="Navn">
                        <label class="form-input-label">Beskrivelse *</label>
                        <input v-model="Item.description" class="form-control" placeholder="Beskrivelse">
                        <label class="form-input-label">Kategori *</label>
                        <div class="search-div">
                            <input v-model="Item.category" class="form-control" placeholder="Kategori" @input="this.isCategorySearching = true"> 
                            <ul class="search-ul" v-show="isCategorySearching">
                                <li class="search-li" v-for="(item, index) in categoryAutoComplete" :key="index" @click="SearchCategorySelectItem(item)" @change.stop="" v-html="item.name.replace(Item.category, `<strong>${Item.category}</strong>`)"></li>
                            </ul>
                        </div>
                        <label class="form-input-label">Under Kategori *</label>
                        <div class="search-div">
                            <input v-model="Item.subcategory" class="form-control" placeholder="Under Kategori" @input="this.isSubCategorySearching = true">
                            <ul class="search-ul" v-show="isSubCategorySearching">
                                <li class="search-li" v-for="(item, index) in subCategoryAutoComplete" :key="index" @click="SearchSubCategorySelectItem(item)" v-html="item.name.replace(Item.subcategory, `<strong>${Item.subcategory}</strong>`)"></li>
                            </ul>
                        </div>
                        <label class="form-input-label">Producent</label>
                        <input v-model="Item.producent" class="form-control" placeholder="Producent">
                        <label class="form-input-label">Stregkode *</label>
                        <input v-model="Item.barcode" class="form-control" placeholder="Stregkode"/>
                        <input class="" type="file" accept="image/jpeg" @change=uploadImage>
                        <img :src="previewImage" class="uploading-image" alt="" />
                    </div>
                    <div class="dialog__footer">
                        <button @click="cancel" type="reset" class="btn btn-cancel">Fortryd</button>
                        <button @click="confirm" type="submit" class="btn btn-confirm">Opret</button>
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
            previewImage: null,
            isCategorySearching: false,
            isSubCategorySearching: false,
            subCategories: [],
        }
    },
    props: ['show', 'cancel', 'confirm', 'SubmitCreate', 'Item', 'categories'],
    computed: {
        categoryAutoComplete() {
            return this.categories.filter(category => {
                return (
                    this.Item.category && category.name.toLowerCase().includes(this.Item.category.toLowerCase())
                );
            });
        },
        subCategoryAutoComplete() {
            return this.subCategories.filter(subCategory => {
                return (
                    this.Item.subcategory && subCategory.name.toLowerCase().includes(this.Item.subcategory.toLowerCase())
                )
            })
        }
    },
    methods: {
        SearchCategorySelectItem: function(item){
            this.Item.category = item.name
            this.subCategories = item.subCategory
            this.isCategorySearching = false
        },        
        SearchSubCategorySelectItem: function(item){
            this.Item.subcategory = item.name
            this.isSubCategorySearching = false
        },
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
        width: 100%;
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
    .search-ul {
        position: absolute;
        text-align: start;
        left: 0;
        top: 115%;
        margin: 0;
        background-color: hsl(0, 0%, 100%);
        width: 100%;
        padding: 0;
        z-index: 10;
        border-radius: 0.5em;
        max-height: 280px;
        box-sizing: border-box;
        overflow: auto;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, .04), 0 2px 4px 0 rgba(0, 0, 0, .12);
    }
    .search-li{
        list-style: none;
        line-height: 36px;
        padding: 0 10px;
        margin: 0;
        cursor: pointer;
        color: var(--dark-textcolor);
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:not(:last-child){
            border-bottom: 1px solid gray;
        }

        &:hover{
            background-color: hsl(0, 0%, 50%);
            color: var(--light-textcolor);
        }
    }
    .search-div{
        width: 100%;
        position: relative;
        display: inline-block;
    }
</style>