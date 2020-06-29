<template>
  <div>
    <el-row >
      <el-col :span="6" v-for="(i, index) in 9" :key="i" :offset="index>0 ? 1 : 1" >
        <br>
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <el-image style="width: 400px" :src="url" ></el-image>
          <div style="padding: 14px;">
            <span> {{Model_Name}} </span>
            <div >
              <span class="label"> {{Student_Name}} </span>
            </div>
            <div>
              <i class="el-icon-download"></i>
              <span class="time"> {{DownloadTimes}} </span>
              <i class="el-icon-view"></i>
              <span class="time"> {{ReadTimes}} </span>
            </div>
            <div >
              <span class="time"> {{Submit_Date}} </span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: { },
  data() {
    return {
      Model_Name: '模型名称',
      Student_Name:'学生姓名',
      Submit_Date:'提交日期',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      DownloadTimes:'100',
      ReadTimes:'100',
      currentDate: new Date()
    }
  },
  methods:{

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .time {
    font-size: 13px;
    color: rgb(136, 136, 136);
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: "300";
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

  .label{
    color: rgb(52, 121, 190);
    font-size: 20px;
  }
</style>
