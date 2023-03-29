<template>
    <div v-show="show" @click="cancel" class="overlay">
        <div class="dialog-wrapper">
            <div class="dialog" @click.stop="">
                <div class="dialog__content">
                    <h2 class="dialog__title" v-text="title"></h2>
                    <p class="dialog__description" v-text="description"></p>
                </div>
                <div class="dialog__footer">
                    <button @click="cancel" class="btn btn-cancel">Fortryd</button>
                    <button @click="confirm" class="btn btn-danger">Ja, Slet</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
      props: ['show', 'title', 'description', 'cancel', 'confirm']
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
        display: table;
        transition: opacity 0.6s ease;
    }
    .dialog-wrapper{
        display: table-cell;
        vertical-align: middle;
    }
    .dialog {
        font-family: sans-serif;
        width: 24rem;
        margin: 0px auto;
        padding: 5px;
        background-color: rgb(57, 62, 70);
        color: rgb(238, 238, 238);
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
    }
    .dialog__content {
        padding: 1rem .75rem;
    }
    .dialog__footer {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
        gap: 0.5em
    }
</style>