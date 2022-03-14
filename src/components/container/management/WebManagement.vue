<template>
        <el-collapse accordion >
            <el-collapse-item name="1">
                <template #title>
                    <div class="collapseItem"  @click="collapseItemchange" name="1">工作项目</div>
                </template>
                <div>
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                </div>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template #title>
                    <div class="collapseItem" @click="collapseItemchange" name="2">遥信/遥测</div>
                </template>
                <div>
                    Operation feedback: enable the users to clearly perceive their
                    operations by style updates and interactive effects;
                </div>
                <div>
                    Visual feedback: reflect current state by updating or rearranging
                    elements of the page.
                </div>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template #title>
                    <div class="collapseItem" @click="collapseItemchange" name="3">电网模型</div>
                </template>
                <div>
                    Simplify the process: keep operating process simple and intuitive;
                </div>
                <div>
                    Definite and clear: enunciate your intentions clearly so that the
                    users can quickly understand and make decisions;
                </div>
                <div>
                    Easy to identify: the interface should be straightforward, which helps
                    the users to identify and frees them from memorizing and recalling.
                </div>
            </el-collapse-item>
            <el-collapse-item name="4">
                <template #title>
                    <div class="collapseItem" @click="collapseItemchange" name="4">图标库(辅助绘图)</div>
                </template>
                <div>
                    Decision making: giving advices about operations is acceptable, but do
                    not make decisions for the users;
                </div>
                <div>
                    Controlled consequences: users should be granted the freedom to
                    operate, including canceling, aborting or terminating current
                    operation.
                </div>
            </el-collapse-item>
        </el-collapse>
</template>

<script>
    export default {
        name: "WebManagement",
        data() {
            return {
                currentName: '',
            }
        },
        methods: {
            collapseItemchange() {
                console.log(event)
                let name = event.target.getAttribute('name');
                if(name === this.currentName){
                    event.stopPropagation()
                }else{
                    this.currentName = name
                }
            }
        }
    }
</script>

<style scoped>
    .collapseItem {
        width: 100%;
        text-align: center;
    }
</style>
