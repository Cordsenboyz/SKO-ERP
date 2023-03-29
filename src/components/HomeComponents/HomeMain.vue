<script setup lang="jsx">
import HomeActivity from './HomeActivity.vue';
import HomeBorrowing from './HomeBorrowing.vue';
import HomeProfile from './HomeProfile.vue';
import HomeUpcoming from './HomeUpcoming.vue';
import HomeCategory from './HomeCategory.vue';
import HomeAmount from './HomeAmount.vue';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
</script>

<template lang="">
    <div class="HomeMain-div">
        <HomeProfile />
        <HomeCategory />
        <HomeAmount />
        <HomeUpcoming />
        <HomeBorrowing />
        <HomeActivity />
    </div>
</template>

<script lang="jsx">
export default {
    data(){
        return{
            connection: null,
        }
    },
    mounted: function(){
        this.connection = new HubConnectionBuilder()
            .withUrl('https://localhost:7203/Home')
            .configureLogging(LogLevel.Information)
            .build()
            
        this.connection.start()
        this.connection.on("ReceiveMessage", (user, message) => {
            console.log(user, message)
        })
    },
    unmounted: function(){
        this.connection.stop()
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
    .HomeMain-div{
        padding: 1rem;
        width: calc(100% - 2rem);
        display: grid;
        margin: 0 auto;
        height: calc(100vh - 5.5rem);
        gap: 1em;

        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);

        grid-template-areas: 
        "profile profile profile profile activity"
        "category amount amount amount activity"
        "category amount amount amount activity"
        "upcoming upcoming borrowing borrowing activity"
        "upcoming upcoming borrowing borrowing activity"
        ;

        $areas: (profile category amount upcoming borrowing activity);

        @each $area in $areas {
            $index: index($areas, $area);

            > :nth-child(#{$index}) {
                grid-area: $area;
            }
        }
    }
</style>