<script setup lang="jsx">
import Profile from '../ProfileComponents/Profile.vue'
import ProfileBorrow from '../ProfileComponents/ProfileBorrow.vue'
import ProfileReservered from '../ProfileComponents/ProfileReservered.vue'
</script>

<template>
    <div class="overlay" @click="cancel">
        <div class="dialog-wrapper" >
            <div class="dialog" @click.stop="">
                <div class="dialog__content">
                    <header class="dialogcontent-header">
                        <ul>
                            <li v-for="(tab, index) in Tabs" :key="tab" @click="activeTab = index" :class="activeTab === index ? 'isActive' : ''" >{{ tab.title }}</li>
                        </ul>
                    </header>
                    <div class="dialogcontent-body">
                        <Profile v-show="activeTab === 0" :Item="Item"/>
                        <ProfileBorrow v-show="activeTab === 1"/>
                        <ProfileReservered v-show="activeTab === 2"/>
                    </div>
                </div>
                <div class="dialog__footer">
                    <button @click="cancel" type="reset" class="btn btn-cancel">Luk</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="jsx">
export default {
    data(){
        return{
            activeTab: 0,
            Tabs: [{
                title: "Profil"
            },
            {
                title: "Lån"
            },
            {
                title: "Reserveret"
            }]
        }
    },
    props: ['cancel', 'confirm', 'UpdateUser', 'Item'],
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
        display: flex;
        flex-direction: column;
        transition: opacity 0.6s ease;
        justify-content: center;
    }
    .dialog {
        font-family: sans-serif;
        width: 50%;
        display: flex;
        flex-direction: column;
        height: calc(100vh - 5rem);
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
        height: 100%;
    }
    .dialog__footer {
        display: flex;
        justify-content: flex-end;
        padding: 0.5em;
        margin-top: auto;

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
        color: white;
        font-weight: bold;
        text-align: center;
    }
    .isActive{
        text-decoration: underline;
        background: var(--primary-element);

        border-radius: 0.5em 0.5em 0px 0px;
    }
    ul{
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        >li{
            padding: 0.5em;
            width: 20%;
            font-weight: bold;
            border: 2px solid transparent;

            &:hover{
                cursor: pointer;
            }
        }
    }
    .dialogcontent-body{
        background-color: var(--primary-element);
        height: calc(100% - 2rem);
        border-radius: 0.5em;
    }
</style>