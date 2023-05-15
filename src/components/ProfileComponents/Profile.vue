<script setup lang="jsx">
defineProps({
    Item: Object
})
</script>

<template lang="">
    <div v-if="!isLoading && !profileEditMode" class="Profile-body">
        <img :src="Item.imgUrl || 'src/assets/user-solid.svg'" alt="Personens profil billede"/>
        <label>Navn:</label>
        <p>{{Item.fullName}}</p>
        <label>Email:</label>
        <p>{{Item.email}}</p>
        <label>Telefon Nummer:</label>
        <p>+45 {{Item.phoneNumber}}</p>
        <label>Role:</label>
        <p>{{Item.role}}</p>
        <button class="btn btn-update bottom" @click="EditProfile()">Redigér</button>
    </div>
    <div v-else-if="!isLoading && profileEditMode" class="ProfileEdit-body">
        <form class="Profile-body" @submit="UpdateUser($event)">
            <img :src="Item.imgUrl || 'src/assets/user-solid.svg'" alt="Personens profil billede"/>
            <label>Navn: {{Item.fullName}}</label>
            <input v-model="editItem.fullName" />
            <label>Email: {{Item.email}}</label>
            <input v-model="editItem.email" />
            <label>Telefon Nummer: {{Item.phone}}</label>
            <input v-model="editItem.phoneNumber" />
            <label>Role: {{Item.role}}</label>
            <input v-model="editItem.role" />
            <div class="btn-container bottom">
                <button type="reset" class="btn btn-cancel" @click="EditCancel()">Fortryd</button>
                <button type="submit" class="btn btn-update">Opdatér</button>
            </div>
        </form>
    </div>
    <div v-else class="ProfileLoading-div">
        <div class="loader"></div>
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            isLoading: true,
            profileEditMode: false,
            editItem: {},
        } 
    },
    mounted: function(){
        if(this.Item){
            
            this.isLoading = false
        }
    },
    methods: {
        EditProfile: function(){
            this.editItem = {...this.Item}
            this.profileEditMode = true;
        },
        EditCancel: function(){
            this.profileEditMode = false;
        },
        UpdateUser: function(event){
            event.preventDefault()
            this.editItem.oldEmail = this.Item.email
            this.emitter.emit("UpdateUser", (this.editItem))
            this.profileEditMode = false
        }
    }
}
</script>

<style scoped lang="scss">
    .ProfileEdit-body{
        height: 100%;
    }
    .Profile-body{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
        gap: 0.5em;
        height: 100%;

        >label{
            font-weight: bold;
            font-size: 2.5ch;
        }

        >p{
            font-size: 2ch;
        }

        >img{
            width: 250px;
            height: 300px;
            border-radius: 0.5em;
            padding: 1rem;
            background: linear-gradient(135deg, rgba(251,166,28,1) 0%, rgba(246,76,114,1) 75%);
        }
    }
    .btn-container{
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }
    .ProfileLoading-div{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loader {
        border: 8px solid var(--light-loading);
        border-top: 8px solid var(--dark-loading);
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>