<template>
    <el-row class="zoom">
        <el-col :span="12">
            <div style="text-align: left">
                <el-button plain size="small">复位</el-button>
                <div style="display: inline-block">{{zoom}}</div>
            </div>
        </el-col>
        <el-col :span="11">
            <div class="slider-demo-block">
                <div>
                    <el-slider size="small"></el-slider>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "WebZoom",
        data(){
            return {
                zoom:100
            }
        }
    }
</script>

<style >
    .zoom{
        padding: 1px;
    }
    .el-slider__button-wrapper{
        width: 20px;
        height: 20px;
        top: -7px;
    }

</style>
<!--<el-space direction>-->
<!--<div>-->
<!--100-->
<!--</div>-->
<!--</el-space>-->
<!--<el-space direction>-->
