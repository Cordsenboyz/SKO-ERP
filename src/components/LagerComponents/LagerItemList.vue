<script setup lang="jsx">
import ModalCreate from '../UtilsComponents/ModalCreate.vue';
import {role} from '../../store.js'
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
import axios from 'axios'

defineProps({
    LagerItems: Object,
    isLoading: Boolean
})

</script>

<template lang="">
    <div class="LagerItemList-div">
        <div class="LagerItemListlabel-div">
            <label >Lager</label>
        </div>
        <div class="LagerItemList-body">
            <div class="LagerItemListOptions-div">
                <div class="search-div">
                    <input class="search-input" type="text" v-model="search" placeholder="Søg i lager...">
                    <ul class="search-ul" v-if="search">
                        <li class="search-li" v-for="(item, index) in filteredList" :key="index" @click="SearchSelectItem(item.id)" v-html="item.name.replace(search, `<strong>${search}</strong>`)"></li>
                    </ul>
                </div>
                <div class="filter-container">
                    <label>Filtre:</label>
                    <select class="filtre-select" v-model="categoryFilter">
                        <option :value="0" v-if="categoryFilter"></option>
                        <option v-for="category in categories" :key="category" :value="category.id" >{{category.name}}</option>
                    </select>
                    <select class="filtre-select" v-if="categoryFilter" v-model="subCategoryFilter">
                        <option :value="0" v-if="subCategoryFilter"></option>
                        <option v-for="subcategory in GetSubCategories" :key="subcategory" :value="subcategory.id" placeholder="Under Kategori">{{subcategory.name}}</option>
                    </select>
                    <button class="btn btn-danger" @click="clearFilters()">Ryd Filtre</button>
                    <button class="btn btn-confirm right" v-if="role.value == 'Admin'" @click="CreateItem()">Tilføj Produkt</button>
                </div>
            </div>
            <div class="LagerListItemTable-div">
                <ul class="responsive-table">
                    <li class="table-header">
                        <div class="col col-2 sortable" @click="setProperty('id')">ID</div>
                        <div class="col col-1 sortable" @click="setProperty('name')">Navn</div>
                        <div class="col col-2 sortable" @click="setProperty('amount')">Mængde</div>
                        <div class="col col-3 sortable" @click="setProperty('category')">Kategori</div>
                        <div class="col col-4 sortable" @click="setProperty('sub-category')">Under Kategori</div>
                    </li>
                    <li class="table-row" v-for="(Item, index, key) in PaginationList" :key="key" @click="SelectItem(index)">
                        <div class="col col-2">{{Item.id}}</div>
                        <div class="col col-1">{{Item.name}}</div>
                        <div class="col col-2">{{Item.amount}}</div>
                        <div class="col col-3">{{Item.category.name}}</div>
                        <div class="col col-4">{{Item.category.subCategory.name}}</div>
                    </li>
                </ul>
            </div>
        </div>               
        <div class="LagerFooterPagination-div">
            <ul>
                <li>
                    <button type="button" class="btn" @click="onClickFirstPage" :disabled="isInFirstPage">Første</button>
                </li>
                <li>
                    <button type="button" class="btn" @click="onClickPreviousPage" :disabled="isInFirstPage">Tilbage</button>
                </li>
                <li v-for="(page, index) in numberOfPages" :key="Item" @click="onClickPage(page)" :class="{ active: isPageActive(page) }">
                    {{page}}
                </li>
                <li>
                    <button type="button" class="btn" @click="onClickNextPage" :disabled="isInLastPage">Næste</button>
                </li>
                <li>
                    <button type="button" class="btn" @click="onClickLastPage" :disabled="isInLastPage">Sidste</button>
                </li>
            </ul>
        </div>
    </div>
    <ModalCreate v-if="role.value == 'Admin'" :show="showModalCreate" :cancel="cancel" :confirm="confirm" :SubmitCreate="SubmitCreate" :Item="Item"/>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            connection: null,
            showModalCreate: false,
            search: "",
            property: "name",
            isAscending: true,
            categoryFilter: "",
            subCategoryFilter: "",
            categories: [{
                id: 1,
                name: "Skærm",
                subcategories: [{
                    id: 1,
                    name: '27"'
                },
                {
                    id: 2,
                    name: '25"'
                }]
            },
            {
                id: 2,
                name: "Kabel",
                subcategories: [{
                    id: 3,
                    name: 'VGA'
                }]
            }],
            Item: {
                name: "",
                description: "",
                amount: 0,
                category: "",
                subcategory: "",
                producent: "",
                barcode: "",/* 
                imgFile: File  */
            },
            isInFirstPage: false,
            itemsPerPage: 7,
            currentPage: 1,
        }
    },
    computed: {
        filteredList() {
            return this.sorted.filter(item => {
                return (
                this.search && item.name.toLowerCase().includes(this.search.toLowerCase())
                );
            });
        },
        sorted(){
            const sorted = [...this.LagerItems].sort((a, b) => a[this.property] > b[this.property] ? 1 : -1);
            return this.isAscending ? sorted : sorted.reverse();
        },
        GetSubCategories(){
            let item = this.categories.find((a) => a.id === this.categoryFilter)
            console.log(this.categoryFilter)
            console.log(item)
            let itemIndex = this.categories.indexOf(item)
            return this.categories[itemIndex].subcategories
        },
        filtered(){
            let category = this.categories.find((a) => a.id === this.categoryFilter)
            let subcategory = category?.subcategories.find((a) => a.id === this.subCategoryFilter)
            let filteredList = [...this.LagerItems].filter((item) => {
                if(category && subcategory) return item.category.id === category.id && item.subcategory.id === subcategory.id
                if(category) return item.category.id === category.id
                return true;
            })
            const filtered = filteredList.sort((a, b) => a[this.property] > b[this.property] ? 1 : -1);
            return this.isAscending ? filtered : filtered.reverse();
        },
        PaginationList(){
            const indexOfLast = this.currentPage * this.itemsPerPage
            const indexOfFirst = indexOfLast - this.itemsPerPage
            const PaginationList = this.filtered.slice(indexOfFirst, indexOfLast)
            return PaginationList
        },
        numberOfPages(){
            return Math.ceil(this.filtered.length / this.itemsPerPage)
        }, 
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.numberOfPages;
        },
    },
    mounted: function(){
        this.connection = new HubConnectionBuilder()
            .withUrl('https://localhost:7203/Lager')
            .build()

        this.connection.start()
        this.connection.on("UpdateLager", (message) => {
            this.emitter.emit("UpdateLager")
        })
    },
    unmounted: function(){
        this.connection.stop()
    },
    methods:{
        CreateItem: function(){
            this.showModalCreate = true;
        },
        cancel: function(){
            this.showModalCreate = false;
        },
        confirm: function(){
            this.showModalCreate = false;
        },
        SubmitCreate: async function(event){
            event.preventDefault()
            let dbData = {...this.Item}
            dbData.amount += 1
            let token = localStorage.getItem("token")
            await axios.post('https://localhost:7203/PostItem/PostItem', dbData, {
                headers: { Authorization: `Bearer ${token}` }
            })
        },
        SelectItem: function(index){
            this.emitter.emit("SelectedItem", (this.sorted[index]))
        },
        SearchSelectItem: function(id){
            let item = this.sorted.find((a) => a.id === id)
            let itemIndex = this.sorted.indexOf(item)
            this.SelectItem(itemIndex)
            this.search = ""
        },
        sortBy: function(){
            this.LagerItems.sort(function(a,b) {
                let x = a.name.toLowerCase();
                let y = b.name.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
        },
        setProperty(property){
            if(this.property === property) {
                this.isAscending = !this.isAscending
                return
            }
            console.log(this.categoryFilter)
            this.property = property
        },
        clearFilters: function(){
            this.categoryFilter = "";
            this.subCategoryFilter = "";
        },
        clearSubFilters: function(){
            this.subCategoryFilter = "";
        },
        onClickPage: function(page){
            this.currentPage = page
        },
        onClickFirstPage() {
            this.currentPage = 1;
        },
        onClickPreviousPage() {
            this.currentPage -= 1;
        },
        onClickNextPage() {
            this.currentPage += 1;
        },
        onClickLastPage() {
            this.currentPage = this.numberOfPages;
        },
        isPageActive(page) {
            return this.currentPage === page;
        },
    },

}
</script>

<style scoped lang="scss">
    .LagerItemList-div{
        width: calc(80% - 1rem);
        margin-left: 1rem;
        height: 100%;
        border-radius: 0.5em;
        background-color: var(--primary-background);
        color: var(--light-textcolor);
        box-shadow: 0 15px 30px 0 rgb(0 0 0 / 11%), 0 5px 15px 0 rgb(0 0 0 / 8%);
        text-align: center;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .LagerItemList-body{
        padding: 1rem;
    }
    .LagerItemListlabel-div{
        padding: 1rem;
        border-bottom: 2px solid var(--primary-ascent);
        background-color: var(--primary-element);

        label{
            font-weight: bold;
            font-size: 3ch;
        }
    }
    .LagerItemListOptions-div{
        display: flex;
        gap: 1rem;
    }
    .filtre-select{
        display: inline-block;
        position: relative;
        font-size: 3ch;
        width: 10rem;
        height: 2rem;
        border-radius: 0.5em;
        padding: 0.5em;
        white-space: nowrap;
        box-sizing: border-box;
        font-size: 12px;

        &:focus{
            outline-color: var(--primary-element);
        }

        option{

        }
    }
    .filter-container{
        display: flex;
        align-items: center;
        width: 100%;
        gap: 0.5em;
    }
    .sortable{
        &:hover{
            cursor: pointer;
        }
    }
    .search-input{
        display: inline-block;
        position: relative;
        font-size: 3ch;
        width: 15rem;
        height: 2rem;
        border-radius: 0.5em;
        padding: 0.5em;
        white-space: nowrap;
        box-sizing: border-box;
        font-size: 12px;

        &:focus{
            outline-color: var(--primary-element);
        }
    }
    
    .search-ul {
        position: absolute;
        text-align: start;
        left: 0;
        top: 115%;
        margin: 0;
        background-color: hsl(0, 0%, 100%);
        border: 1px solid #D3DCE6;
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
        position: relative;
        display: inline-block;
    }

    .responsive-table {
        margin-top: 1rem;
        padding: 0;

        li {
            border-radius: 3px;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5em;
            list-style: none;
        }
    }
    .col-1 {
        flex-basis: 40%;
    }
    .col-2 {
        flex-basis: 10%;
    }
    .col-3 {
        flex-basis: 25%;
    }
    .col-4 {
        flex-basis: 25%;
    }

    .table-header {
        background-color: var(--primary-element);
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }
    .table-row {
        background-color: var(--secondary-element);
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);

        &:hover{
            background-color: var(--secondary-element-hover);
        }
    }

    
    @media all and (max-width: 767px) {
        .table-header {
        display: none;
        }
        .table-row{
        
        }
        li {
        display: block;
        }
        .col {
        
        flex-basis: 100%;
        
        }
        .col {
        display: flex;
        padding: 10px 0;
        &:before {
            color: #6C7A89;
            padding-right: 10px;
            content: attr(data-label);
            flex-basis: 50%;
            text-align: right;
        }
        }
    }
    .LagerFooterPagination-div{
        margin-top: auto;
        background-color: var(--primary-element);
        height: 3rem;
        
        ul{
            list-style-type: none;
            height: 100%;
            padding: 0;
            display: grid;
            grid-template-columns: auto;
            grid-auto-flow: column;
            justify-content: center;
            align-items: center;
            gap: 0.5em;

            li{
                min-width: 3rem;

                &.active{
                    border: 2px solid white;
                    border-radius: 0.5em;
                    background-color: var(--secondary-element);
                }
            }
        }
    }
    
</style>