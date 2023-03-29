<template lang="">
    <div class="HomeProfile-div">
        <label>Hej, {{user.name}}</label>
        <div class="HomeProfileBtn-container">
            <button class="btn btn-update">Redigér</button>
            <button class="btn btn-confirm">Profil</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed: {
        user(){
            const user = JSON.parse(localStorage.getItem("User"))
            return user
        }
    }
}
</script>

<style scoped lang="scss">
    .HomeProfile-div{
        border-radius: 0.5em;
        background-color: var(--primary-background);
        display: flex;
        padding: 1.5em;
        align-items: center;

        label{
            color: white;
            font-weight: bold;
            font-size: 4ch;
            text-align: center;
        }
    }
    .HomeProfileBtn-container{
        margin-left: auto;
        display: flex;
        gap: 0.5em;
    }
</style>