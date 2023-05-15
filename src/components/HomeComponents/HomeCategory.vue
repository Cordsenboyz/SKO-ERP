<script setup lang="jsx">
import { toRaw } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import axios from 'axios';
</script>

<template lang="">
    <div v-if="!isLoading" class="HomeCategory-div">
        <div class="HomeCatergoryLabel-div">
            <label>Kategorier</label>
        </div>
        <div class="HomeCategory-chart">
            <Doughnut :data="data" :options="options" />
        </div>
    </div>
    <div v-else class="HomeCategoryLoading-div">
        <div class="loader"></div>
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
        await axios.get("https://localhost:7203/Category/GetCategoryAmounts", {
                headers: { Authorization: `Bearer ${token}` }
            }).then(response => {
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
    .HomeCategoryLoading-div{
        display: flex;
        justify-content: center;
        background-color: var(--primary-background);
        align-items: center;
        border-radius: 0.5em;
    }
</style>