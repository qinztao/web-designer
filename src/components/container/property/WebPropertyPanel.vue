<template>
    <div class="editProperty">
        <web-property></web-property>
    </div>
    <div class="propertyDesc"></div>
    <div class="birdSeeViewConstainer">
        <web-bird-see-view></web-bird-see-view>
    </div>

</template>

<script>
    import WebBirdSeeView from './WebBirdSeeView.vue'
    import WebProperty from './WebProperty.vue'

    export default {
        name: "WebPropertyPanel",
        components: {
            WebBirdSeeView,
            WebProperty
        }
    }
</script>

<style scoped>

    .editProperty{
        position: absolute;
        right: 0px;
        left: 0px;
        top:0px;
        bottom: 233px;
        border: 1px solid;
    }

    .propertyDesc{
        height: 30px;
        position: absolute;
        right: 0px;
        left: 0px;
        bottom: 203px;
        border: 1px solid;
    }
    .birdSeeViewConstainer{
        height: 200px;
        border: 1px solid;
        position: absolute;
        right: 0px;
        left: 0px;
        bottom: 0px;
    }


</style>
