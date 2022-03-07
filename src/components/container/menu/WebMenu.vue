<template>

    <!--<el-menu default-active="0" mode="horizontal">-->
    <!---->
    <!--</el-menu>-->

    <el-menu
            mode="horizontal"
            @select="handleSelect">

        <el-sub-menu :index="m.id+ ''" v-for="m in menus" :key="m.id">
            <template #title> {{m.desc}}</template>
            <el-menu-item :class="subItem.name == '-' ? 'divider': ''" :index="m.id + '-' + subItem.id" v-for="subItem in m.children" :key="m.id +'-'+ subItem.id">
                <template v-if="subItem.name == '-'">
                    <el-divider ></el-divider>
                </template>
                <template v-else>
                    <el-icon>
                    </el-icon>
                    {{subItem.desc}}
                </template>

            </el-menu-item>
        </el-sub-menu>

    </el-menu>

</template>

<script>
    export default {
        name: "WebMenu",
        props: {
            menus: {
                type: Array,
                default() {
                    return [
                        {
                            id: 4, name: 'workSpace', desc: '工作空间', children: [
                                {id: 1, name: 'newCreateWorkSpace', desc: '新建工作空间', icon: ''},
                                {id: 2, name: 'toggleWorkSpace', desc: '切换工作空间', icon: ''},
                                {id: 3, name: '-'},
                                {id: 4, name: 'updateProjectType', desc: '更改项目类型', icon: ''},
                                {id: 5, name: 'recycled', desc: '回收站', icon: 'btn_projectRecycle.png'},
                            ]
                        },
                        {
                            id: 5, name: 'project', desc: '项目', children: [
                                {id: 1, name: 'newCreateWorkSpace', desc: '新建工作空间', icon: ''},
                                {id: 2, name: 'toggleWorkSpace', desc: '切换工作空间', icon: ''},
                                {id: 3, name: '-'},
                                {id: 4, name: 'updateProjectType', desc: '更改项目类型', icon: ''},
                                {id: 5, name: 'recycled', desc: '回收站', icon: 'btn_projectRecycle.png'},
                            ]
                        },
                    ]
                }
            }
        },
        data() {
            return {
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(index, item, indexPath) {
                console.log(index, item, indexPath)
            }
        }
        , created() {
            console.log(this.menus)
        }
    }
</script>

<style scoped>
    .el-menu {
        height: 29px;
    }

    .el-divider--horizontal {
        margin: 1px 0;
    }

    .divider{
        height: 2px !important;
        padding: 0 !important;
    }
</style>
