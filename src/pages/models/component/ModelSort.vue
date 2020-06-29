<template>
    <el-row align="left" :gutter='10'>
        <el-col :span="9">
            <div class="search" >
                <span>排序方式:  </span> &#12288;
                <el-button type="primary" size="medium " plain>默认 </el-button> &#12288;
                <el-button type="primary" size="medium " plain>按时间</el-button> &#12288;
                <el-button type="primary" size="medium " plain>按热度</el-button> &#12288;
            </div>
        </el-col>
        <el-col :span="10">
            <span class="search">
                <span>关键字：  </span>
                <el-input v-model="input" inline="true" style="width:300px" placeholder="请输入内容"></el-input>
                <el-button icon="el-icon-search" circle></el-button>
            </span>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                 input: '',
                currentDate: new Date()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

    .grown{
        color: rgb(143, 135, 135);
    }

    .search{
        float: left;
        color: rgb(143, 135, 135);
    }

</style>
