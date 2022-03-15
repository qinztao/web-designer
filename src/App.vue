<template>
    <web-container ></web-container>
</template>

<script>
    import WebContainer from './components/container/WebContainer.vue'

    export default {
        name: 'App',
        components: {
            WebContainer,
        }, methods: {

        },
        created(){
            document.onselectstart = function(){
                return false
            }
        }
    }
</script>

<style>

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
</style>
