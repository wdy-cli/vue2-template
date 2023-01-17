<template>
  <div title="组件使用方法">

    <!-- 页面初始化 -->
    <el-card class="box-card mt16">
      <el-button type="primary" size="mini" >你好</el-button>
    </el-card>
    <!-- 按钮类型 -->
      <el-button type=""></el-button>
    <!-- 弹框 -->

    <!-- 表单组件格式 -->
    <el-card class="box-card mt16">

    </el-card>

    <!-- 表格封装 -->
    <el-card class="box-card mt16">

    </el-card>

    <!-- 确认弹框 -->

    <!-- 图片上传组件 -->
    <el-card class="box-card mt16">

    </el-card>
    <!-- 搜索组件 -->
    <el-card class="box-card mt16">

    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Example',
  methods: {

  },
  data () {
    return {
      // 返回按钮配置
      pageHandleConfig: {

      },

      // 弹框数据
      dialog: {
        title: '新增标题',
        show: false
      },
      // form 数据
      form: {
        rules: Object.freeze({
          inputValue: [
            { required: true, trigger: 'change' }
          ]
        }),
        data: {
          smallImg: '',
          mediumImg: ''
        }
      },
      btnItems: 'inquire,reset',
      // 表格数据
      table: {
        colConfig: Object.freeze([
          {
            prop: 'code',
            label: '广告编码'
          },
          {
            prop: 'name',
            label: '广告时间，有格式化'
          },
          {
            slot: 'operate'
          }
        ])
      }
    }
  },
  components: { },
  mixins: [],
  created () {
  }
}
</script>

<style lang='scss' scoped>
.example-wrap {
}
</style>
