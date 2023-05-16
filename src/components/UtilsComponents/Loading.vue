<template lang="">
    <div class="loading-div">
        <div class="loader"></div>
    </div>
</template>

<script lang="jsx">
export default {
    
}
</script>

<style scoped lang="scss">
    .loading-div{
        width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader {
        border: 8px solid var(--light-loading);
        border-top: 8px solid var(--dark-loading);
        border-radius: 50%;
        width: 6rem;
        height: 6rem;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>