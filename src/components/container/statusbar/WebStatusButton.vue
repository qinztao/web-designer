<template>
    <div class="statusBtn">

        <el-checkbox-group v-model="checkboxValue" size="small" style="display:;">
            <el-checkbox-button v-for="city in statusBtns" :key="city" :label="city">
                <template #>
                    <div class="statusbtnGroup" v-bind:style="{ backgroundImage: 'url('+ btns[city].img +')'}"></div>
                </template>
            </el-checkbox-button>

            <el-select v-model="spacingValue" class="spacings" placeholder="Select" size="small">
                <template #prefix>网格原始间距：</template>
                <el-option
                        v-for="item in spacings"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                >
                </el-option>
            </el-select>

        </el-checkbox-group>

    </div>

</template>

<script>

    import BarCross from '@/assets/images/statusbtn/toolBar_cross.png'
    import BarGrid from '@/assets/images/statusbtn/toolBar_grid.png'
    import BarGridSnap from '@/assets/images/statusbtn/toolBar_gridSnap.png'
    import BarKuang from '@/assets/images/statusbtn/toolBar_kuang.png'
    import BarLockResize from '@/assets/images/statusbtn/toolBar_lockResize.png'
    import BarOriginalStaff from '@/assets/images/statusbtn/toolBar_originalStaff.png'
    import BarOrthogonal from '@/assets/images/statusbtn/toolBar_orthogonal.png'
    import BarPlay from '@/assets/images/statusbtn/toolBar_play.png'
    import BarRuler from '@/assets/images/statusbtn/toolBar_ruler.png'
    import BarSnap from '@/assets/images/statusbtn/toolBar_snap.png'
    import BarTerminal from '@/assets/images/statusbtn/toolBar_Terminal.png'
    import Attribute from '@/assets/images/statusbtn/icon_attribute.png'

    export default {
        name: "WebStatusButton",
        data() {
            return {
                form: 'test',
                checkboxValue: ['propertiesWindow'],
                statusBtns: ['showGrid', 'gridCapture', 'orthogonality', 'capture', 'crossCurve', 'propertiesWindow', 'animation', 'endpoint', 'lockResize', 'terminal', 'originMark', 'standardRuler'],
                btns: {
                    'showGrid': {img: BarGrid},
                    'gridCapture': {img: BarGridSnap},
                    'orthogonality': {img: BarOrthogonal},
                    'capture': {img: BarSnap},
                    'crossCurve': {img: BarCross},
                    'propertiesWindow': {img: Attribute},
                    'animation': {img: BarPlay},
                    'endpoint': {img: BarTerminal},
                    'lockResize': {img: BarLockResize},
                    'terminal': {img: BarKuang},
                    'originMark': {img: BarOriginalStaff},
                    'standardRuler': {img: BarRuler}
                },

                spacingValue: '1',
                spacings: [{
                    value: 1,
                    label: 1
                },
                    {
                        value: 5,
                        label: 5

                    },
                    {
                        value: 10,
                        label: 10

                    },
                    {
                        value: 15,
                        label: 15

                    },
                    {
                        value: 20,
                        label: 20

                    },
                    {
                        value: 25,
                        label: 25

                    },
                    {
                        value: 30,
                        label: 30

                    }, {
                        value: 35,
                        label: 35

                    }, {
                        value: 40,
                        label: 40

                    }, {
                        value: 45,
                        label: 45

                    }, {
                        value: 50,
                        label: 50

                    },
                ]
            }
        },
        methods:{
            clickHandle(){

            }
        }
    }

</script>

<style>
    .statusBtn {
        padding: 1px;
        line-height: 20px;
        height: 28px;
    }

    .statusBtn label {
        margin-bottom: 0;
        margin-right: 3px;
    }

    .el-checkbox-button.is-checked .el-checkbox-button__inner {
        background-color: transparent;
        border: 1px solid #0b2e13 !important;
    }

    .statusBtn label .el-checkbox-button__inner {
        padding: 3px !important;
        border-left: 1px solid transparent !important;
        border-right: 1px solid transparent !important;
        border-bottom: 1px solid transparent !important;
        border-top: 1px solid transparent !important;
        border-radius: initial !important;
    }

    .statusBtn .statusbtnGroup {
        width: 15px;
        height: 15px;
        background-repeat: no-repeat;
    }

    .spacings {
        top: 2px;
    }
</style>
