<template>
   <el-col>
        <el-card :body-style="{ padding: '0px' }" class="box-card">
            <el-row :span="6">
                <div>
                    <el-image style="width: 600px" :src="url" class="img1"></el-image>
                </div>
                <div>
                        <el-image style="width: 100px" :src="url"  class="img1"></el-image>
                </div>
            </el-row>
            <el-row :span="6">
                    <el-button type="primary" plain>预览模型</el-button>
            </el-row>
            <el-row :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>作品详情</span>
                    </div>
                    <div class="text item">
                        <span>作品名称：</span>
                        {{ Model_title}}
                    </div>
                    <div class="text item">
                        <span>作品作者：</span>
                        {{Model_Author}}
                    </div>
                    <div class="text item">
                        <span>文件描述：</span>
                        {{Text_Dexcription}}
                    </div>
                    <div class="text item">
                        <span>文件类型：</span>
                        {{Text_Type}}
                    </div>
                    <div class="text item">
                        <span>附件：</span>
                    </div>
                    <el-table  :data="tableData"  border     style="width: 100%">
                        <el-table-column
                        prop="num"
                        label="序号"
                        width="80">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="文件名">
                        </el-table-column>
                        <el-table-column
                        prop="do"
                        width="120"
                        label="操作">
                             <el-button type="primary" plain>下载</el-button>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-row>
        </el-card>
    </el-col>
</template>

<script>
export default {
  components: { },
  data() {
    return {
      Model_title: '模型名称',
      Model_Author:'ddl',
      Text_Dexcription:'ddl',
      Text_Type:'ddl',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      tableData: [{
          num: '001',
          name: 'layui.js',
          do: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods:{

  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 600px;
  }

  </style>
