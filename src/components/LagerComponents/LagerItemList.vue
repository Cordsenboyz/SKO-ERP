<script setup lang="jsx">
defineProps({
    LagerItems: Object
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
                    <li class="table-row" v-for="(Item, index, key) in filtered" :key="key" @click="SelectItem(index)">
                        <div class="col col-2">{{Item.id}}</div>
                        <div class="col col-1">{{Item.name}}</div>
                        <div class="col col-2">{{Item.amount}}</div>
                        <div class="col col-3">{{Item.category.name}}</div>
                        <div class="col col-4">{{Item.subcategory.name}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            search: "",
            property: "name",
            isAscending: false,
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
            var subcategory = category?.subcategories.find((a) => a.id === this.subCategoryFilter)
            let filteredList = [...this.LagerItems].filter((item) => {
                if(category && subcategory) return item.category.id === category.id && item.subcategory.id === subcategory.id
                if(category) return item.category.id === category.id
                return true;
            })
            const filtered = filteredList.sort((a, b) => a[this.property] > b[this.property] ? 1 : -1);
            return this.isAscending ? filtered : filtered.reverse();
        }
    },
    methods:{
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
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
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
        }
    },

}
</script>

<style scoped lang="scss">
    .LagerItemList-div{
        width: calc(80% - 1rem);
        margin-left: 1rem;
        height: 100%;
        border-radius: 0.5em;
        background-color: hsl(197, 100%, 22%);
        color: white;
        box-shadow: 0 15px 30px 0 rgb(0 0 0 / 11%), 0 5px 15px 0 rgb(0 0 0 / 8%);
        text-align: center;
    }
    .LagerItemList-body{
        padding: 1rem;
    }
    .LagerItemListlabel-div{
        padding: 1rem;
        border-bottom: 2px solid rgba(246,76,114,1);

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
            outline-color: hsl(197, 100%, 30%);
        }

        option{

        }
    }
    .filter-container{
        display: flex;
        align-items: center;
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
            outline-color: hsl(197, 100%, 30%);
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
        color: #475669;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:not(:last-child){
            border-bottom: 1px solid gray;
        }

        &:hover{
            background-color: hsl(0, 0%, 50%);
            color: white;
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
        background-color: hsl(197, 100%, 30%);
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }
    .table-row {
        background-color: hsl(197, 100%, 40%);
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);

        &:hover{
            background-color: hsl(197, 100%, 35%);
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
    
</style>