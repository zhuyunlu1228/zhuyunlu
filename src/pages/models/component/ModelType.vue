<template>

    <el-row>
        <el-col >
            <div class="search">
                <span>模型类型: </span>
                <el-button type="primary" plain size="medium ">所有</el-button> &#12288;
                <el-button type="primary" plain size="medium "> 机械行业</el-button> &#12288;
                <el-button type="primary" plain size="medium ">动物公仔</el-button>&#12288;
                <el-button type="primary" plain size="medium ">机器人模型</el-button>&#12288;
                <el-button type="primary" plain size="medium ">航空航天</el-button>&#12288;
                <el-button type="primary" plain size="medium ">汽车行业</el-button>&#12288;
                <el-button type="primary" plain size="medium ">文化创意</el-button>&#12288;
                
            </div>
        </el-col>
    </el-row>

</template>

<script>
export default {
  data() {
    return {
       currentDate: new Date()
    }
  }
}
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .search{
        float: left;
        color: rgb(143, 135, 135);
    }
</style>
