<template>
    <div class="toolbarConstainer">
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item" v-for="tool in toolbars" :key="tool.id">
                <img :src="tool.image" :title="tool.name" v-if="tool.type == 'image'"/>
                <component v-else-if="tool.type == 'select'" :is="tool.key"></component>
            </li>
        </ul>

    </div>

</template>

<script>

    import btnNew from '@/assets/images/btn_New.png'
    import btn_model_24 from '@/assets/images/btn_model_24.png'
    import btn_Save from '@/assets/images/btn_Save.png'
    import btn_saveAll from '@/assets/images/btn_saveAll.png'
    import icon_topu from '@/assets/images/icon_topu.png'
    import project_bug from '@/assets/images/project_bug.png'

    import WebFontFamily from './WebFontFamily.vue'
    import WebFontSize from './WebFontSize.vue'

    export default {
        name: "WebToolbar",
        components:{
            WebFontFamily,
            WebFontSize
        },
        data() {
            return {
                toolbars: [
                    {id:1,name: '项目图纸新建', title: '项目图纸新建', type: 'image', image: btnNew},
                    {id:2,name: '项目图纸保存', title: '项目图纸保存', type: 'image', image: btn_Save},
                    {id:3,name: '保存所有图纸', title: '保存所有图纸', type: 'image', image: btn_saveAll},
                    {id:4,name: '项目错误检测', title: '项目错误检测', type: 'image', image: project_bug},
                    {id:5,name: '拓扑', title: '拓扑', type: 'image', image: icon_topu},
                    {id:6,name: '建模入库', title: '建模入库', type: 'image', image: btn_model_24},
                    {id:7,name: '字体', title: '字体', type: 'select' ,key:'WebFontFamily'},
                    {id:8,name: '字号', title: '字号', type: 'select',key:'WebFontSize'},

                ]
            }
        }
    }
</script>

<style scoped>
    .toolbarConstainer {
        text-align: left;
        padding: 1px;
    }
    .list-group-item{
        padding: 0;
        cursor: pointer;
        margin-right: 0.25rem;
        border-style:none;

    }
</style>
