<script setup lang="">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
</script>

<template lang="">
    <div class="HomeCategory-div">
        <div class="HomeCatergoryLabel-div">
            <label>Kategorier</label>
        </div>
        <div class="HomeCategory-chart">
            <Doughnut :data="data" :options="options" />
        </div>
    </div>
</template>

<script lang="">
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    data(){
        return{
            data: {
                labels: ['Skærm', 'Kabel', 'Mus', 'Tastatur'],
                datasets: [
                    {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [20, 20, 50, 10]
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
            }
        }
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