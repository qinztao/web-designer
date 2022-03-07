<template>
    <div id="app">
        <button :draggable="true">按钮</button>
        <div class="green" @dragenter="(e)=>dragenter(e,'green')">可以释放</div>
        <div class="red" @dragenter="(e)=>dragenter(e,'red')">不能释放</div>
    </div>
</template>

<script>
    export default {

        name: "WebDrag",
        data() {
            return {
                message: 'Welcome to Vue!',
            };
        },
        methods: {
            dragenter(e, type) {
                if (type === 'red') {
                    console.log('修改鼠标样式为禁止🚫')
                }
                console.log('e', e)
            },
        },
    };
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    div {
        width: 100px;
        height: 100px;
        margin: 20px;
    }

    .green {
        background: green;
    }

    .red {
        background: red;
    }
</style>

