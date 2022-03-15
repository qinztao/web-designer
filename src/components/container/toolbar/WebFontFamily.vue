<template>
    <el-select v-model="value" placeholder="Select" @change="valueChange" size="large">
        <el-option value="黑体"></el-option>
        <el-option value="方正"></el-option>
        <el-option value="宋体"></el-option>
        <el-option value="新宋体"></el-option>
        <el-option value="隶书"></el-option>
    </el-select>
    <!--<select>-->
    <!--<option>黑体</option>-->
    <!--<option>方正</option>-->
    <!--<option>宋体</option>-->
    <!--<option>新宋体</option>-->
    <!--<option>隶书</option>-->
    <!--</select>-->
</template>

<script>
    export default {
        name: "WebFontFamily",
        data(){
            return {
                value:'黑体'
            }
        },
        methods:{
            valueChange(value){
                console.log(value)
                this.$emit('valueChange', value)

            }
        }
    }
</script>

<style scoped>

</style>
