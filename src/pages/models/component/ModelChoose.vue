<template>
<div>
    <div class="block"><el-avatar :size="50" :src="touxiang"></el-avatar></div>
    <div>
        <el-tooltip class="item" effect="dark" content="模型列表" placement="right">
            <el-button type="info" icon="el-icon-menu" circle></el-button>
        </el-tooltip>
    </div>
    <div>
        <el-tooltip class="item" effect="dark" content="我的模型" placement="right">
            <el-button type="info" icon="el-icon-suitcase" circle></el-button>
        </el-tooltip>
    </div>
    <div>
        <el-tooltip class="item" effect="dark" content="模型上传" placement="right">
            <el-button type="info" icon="el-icon-upload2" circle></el-button>
        </el-tooltip>
    </div>
    <div>
        <el-tooltip class="item" effect="dark" content="我的班级" placement="right">
            <el-button type="info" icon="el-icon-user" circle></el-button>
        </el-tooltip>
    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        touxiang:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        num: 1
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
