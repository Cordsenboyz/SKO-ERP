<script setup lang="jsx">
import ManagerRequests from './ManagerRequests.vue';
import ManagerUser from './ManagerUser.vue';
import { role } from '../../store.js'
</script>

<template lang="">
    <div class="ManagerConfimation-div">
        <div v-if="role.value === 'Admin'">
            <div class="ManagerUserLabel-div">
                <label>Brugere</label>
            </div>
            <ManagerUser />
        </div>
        <div>
            <div class="ManagerAcceptLabel-div">
                <label>Lån Forespøgelser</label>
            </div>
            <ManagerRequests />
        </div>
    </div>
</template>

<script lang="jsx">
export default {

}
</script>

<style scoped lang="scss">
    .ManagerConfimation-div{
        display: grid;
        grid-template-rows: 100%;

        gap: 1em;
        color: var(--light-textcolor);

        >div{
            background-color: var(--primary-background);
            border-radius: 0.5em;  
            overflow: hidden;
            height: 100%;
        }

        &:has(> :nth-child(2)) {
            grid-template-rows: calc(50% - 0.5em) calc(50% - 0.5em);
        }
    }
    .ManagerUserLabel-div{
        padding: 0.5em;
        width: 100%;
        text-align: center;
        background-color: var(--primary-element);
        border-bottom: 2px solid var(--primary-ascent);

        label{
            font-weight: bold;
            font-size: 3ch;
        }
    }
    .ManagerAcceptLabel-div{
        padding: 0.5em;
        width: 100%;
        text-align: center;
        background-color: var(--primary-element);
        border-bottom: 2px solid var(--primary-ascent);

        label{
            font-weight: bold;
            font-size: 3ch;
        }
    }
</style>