<script setup lang="jsx">
import { toRaw } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import axios from 'axios';
import Loading from '../UtilsComponents/Loading.vue';
</script>

<template lang="">
    <div  class="HomeCategory-div">
        <div class="HomeCatergoryLabel-div">
            <label>Kategorier</label>
        </div>
        <div v-if="!isLoading" class="HomeCategory-chart">
            <Doughnut :data="data" :options="options" />
        </div>
        <Loading v-else />
    </div>
    
</template>

<script lang="jsx">
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    data(){
        return{
            data: {
                labels: [],
                datasets: [
                    {
                    backgroundColor: [],
                    data: []
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins:{
                    legend: {
                        display: false
                    },
                },
            },
            LabelData: [],
            AmountData: [],
            isLoading: true,
        }
    },
    mounted: async function(){
        let token = localStorage.getItem("token")

        await axios.get("https://localhost:7203/api/Category/GetCategoryAmounts", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            response.data.forEach(element => {
                this.LabelData.push(element.name)
                this.AmountData.push(element.amount)
            });
            
            this.data = {
                labels: toRaw(this.LabelData),
                datasets: [
                    {
                        backgroundColor: ['#b50537', '#52a00e', '#6ad4dd', '#c98ee2', '#f5fc32'] ,
                        data: toRaw(this.AmountData)
                    }
                ]
            }

            this.isLoading = false;
        })
    }
}
</script>

<style scoped lang="scss">
    .HomeCategory-div{
        border-radius: 0.5em;
        background-color: var(--primary-background);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        overflow: hidden;

        label{
            color: var(--light-textcolor);
            font-weight: bold;
            font-size: 2.5ch;
        }
    }
    .HomeCatergoryLabel-div{
        width: 100%;
        padding: 0.5em;
        background-color: var(--primary-element);
        border-bottom: 2px solid var(--primary-ascent);
    }
    .HomeCategory-chart{
        height: calc(100% - 4em);
        padding: 0.5em;
    }
</style>