<script setup lang="">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
</script>

<template lang="">
    <div class="HomeAmount-div">
        <div class="HomeAmountLabel-div">
            <label>Mængde på Lager</label>
        </div>
        <div class="HomeAmount-Chart">
            <Line  :data="data" :options="options" />
        </div>
    </div>
</template>

<script lang="">

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
    data(){
        return{
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        data: [250, 252, 258, 240, 231, 270, 275]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                backgroundColor: 'rgb(251, 166, 28)',
                borderColor: 'rgb(246, 76, 114)',
                fill: false,
                tension: 0.4,
                pointRadius: 6,
                plugins:{
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: '#ffffff',
                            borderColor: 'red'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    y: {
                        grid: {
                            color: '#ffffff',
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .HomeAmount-div{
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
    .HomeAmount-Chart{
        padding: 0.5em;
        height: 100%;
        width: 100%;
    }
    .HomeAmountLabel-div{
        width: 100%;
        padding: 0.5em;
        background-color: var(--primary-element);
        border-bottom: 2px solid var(--primary-ascent);
    }
</style>