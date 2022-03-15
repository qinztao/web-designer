<template>
    <el-row class="toolbarConstainer">
        <el-check-tag @change="onChange($event, index)" v-for="(tool, index) in operateToolbars" :key="index" size="small"
                      effect="plain" :class=" tool.name == '-' ? 'spaceLine': ''" :checked="index == currentIdex">

                <template #>
                    <slot v-bind:tool="tool"> </slot>
                </template>


            <!--<template #>-->
                <!--<img :src="tool.image" :title="tool.title" v-if="tool.type == 'image'"/>-->
                <!--<component v-else-if="tool.type == 'select'" :is="tool.key" :ref="tool.name"></component>-->
            <!--</template>-->
        </el-check-tag>
    </el-row>

</template>

<script>
    import btnNew from '@/assets/images/toolbar/btn_New.png'
    import btn_model_24 from '@/assets/images/toolbar/btn_model_24.png'
    import btn_Save from '@/assets/images/toolbar/btn_Save.png'
    import btn_saveAll from '@/assets/images/toolbar/btn_saveAll.png'
    import icon_topu from '@/assets/images/toolbar/icon_topu.png'
    import project_bug from '@/assets/images/toolbar/project_bug.png'
    import ele_text from '@/assets/images/toolbar/ele_text.png'
    import ele_tangle from '@/assets/images/toolbar/ele_tangle.png'
    import ele_none from '@/assets/images/toolbar/ele_none.png'
    import ele_line from '@/assets/images/toolbar/ele_line.png'
    import ele_overline from '@/assets/images/toolbar/ele_overline.png'
    import ele_curve from '@/assets/images/toolbar/ele_curve.png'
    import ele_circle from '@/assets/images/toolbar/ele_circle.png'

    // import WebFontFamily from './WebFontFamily.vue'
    // import WebFontSize from './WebFontSize.vue'

    export default {
        name: "WebToolbar",
        // components: {
        //     WebFontFamily,
        //     WebFontSize
        // },

        props:{
            toolbars:{
                type:Array,
                required:true,

                default(){
                    return [
                        {id: 1, name: 'newGraphic', title: '项目图纸新建', type: 'image', image: btnNew},
                        {id: 2, name: 'saveGraphic', title: '项目图纸保存', type: 'image', image: btn_Save},
                        {id: 3, name: 'saveAllGraphic', title: '保存所有图纸', type: 'image', image: btn_saveAll},
                        {id: 4, name: 'errorDetection', title: '项目错误检测', type: 'image', image: project_bug},
                        {id: 5, name: 'generateTopology', title: '拓扑', type: 'image', image: icon_topu},
                        {id: 6, name: 'modelingLibrary', title: '建模入库', type: 'image', image: btn_model_24},
                        {id: 7, name: '-'},
                        {id: 9, name: 'font', title: '字体', type: 'select', key: 'WebFontFamily'},
                        {id: 10, name: 'fontSize', title: '字号', type: 'select', key: 'WebFontSize'},
                        {id: 19, name: '-'},
                        {id: 11, name: 'none', title: '选择', type: 'image', image: ele_none},
                        {id: 12, name: 'line', title: '直线', type: 'image', image: ele_line},
                        {id: 13, name: 'polyline', title: '多段线', type: 'image', image: ele_overline},
                        {id: 14, name: 'arc', title: '弧线', type: 'image', image: ele_curve},
                        {id: 16, name: 'rectangle', title: '矩形', type: 'image', image: ele_tangle},
                        {id: 17, name: 'circle', title: '圆', type: 'image', image: ele_circle},
                        {id: 18, name: 'characters', title: '文字', type: 'image', image: ele_text},

                    ]
                }
            }
        },

        data() {
            return {
                currentIdex: 10,
                operateToolbars:this.toolbars

            }
        },
        methods: {

            // ...mapMutations(['setCurrentToolbarStatus', 'setDrawStatus']),
            onChange(checked, index) {
                let toolbar = this.toolbars[index]
                this.currentIdex = index
                // this.setCurrentToolbarStatus({toolbarStatus: toolbar})


                // switch (index) {
                //     case 10:{
                //         this.setDrawStatus({drawStatus:false})
                //         break
                //     }
                //     case 11:
                //     case 12:
                //     case 13:
                //     case 14:
                //     case 16:
                //     {
                //         this.setDrawStatus({drawStatus:true})
                //         break
                //     }
                //
                // }

                this.$emit('clickhandle', toolbar)
            },

            reset(index){
                this.currentIdex = index
            }
        }
    }
</script>

<style scoped>
    .toolbarConstainer {
        margin-top: 1px;
    }

    .toolbarConstainer .el-button {
        border: 0px;
        padding: 5px 5px;
    }

    .toolbarConstainer .el-check-tag {
        height: 20px;
        margin-right: 3px;
        padding: 3px 3px;
        font-size: 12px;
        border-radius: calc(var(--el-border-radius-base) - 1px);
    }

    .toolbarConstainer .spaceLine {
        padding: 0;
        border: 1px #000 dashed;
        cursor: default;
    }


</style>
