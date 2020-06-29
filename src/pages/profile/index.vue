<template>
  <el-card class="page-container">
    <div class="tap-container">
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <div class="demo-image">
            <div class="block">
              <span class="demonstration"></span>
              <el-image
                style="height: 100px;
                                width: 100px;
                                border-radius:50%;
                                -webkit-border-radius:50%;
                                -moz-border-radius:50%;
                                margin-top: 15px;"
                :src="url"
              ></el-image>
            </div>
            <p>{{ '学生：' }}{{ message }}</p>
            <el-button type="primary">退出登录</el-button>
          </div>
        </el-aside>

        <el-main>
          <el-tabs v-model="activeName">
            <el-tab-pane label="个人资料" name="first" :key="'first'">
              <div style="background: yellow; display: inline">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="账号">
                    <el-input v-model="form.account" clearable></el-input>
                  </el-form-item>
                  <el-form-item label="姓名">
                    <el-input v-model="form.name" clearable></el-input>
                  </el-form-item>
                  <el-form-item label="行政班级">
                    <el-input v-model="form.class" clearable></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">确认修改</el-button>
                    <el-button>重新填写</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>

            <el-tab-pane label="修改密码" name="second" :key="'second'">
              <el-form ref="form" :model="form" label-width="130px">
                <el-form-item label="输入原始密码">
                  <el-input placeholder="请输入原始密码" v-model="form.old_password" show-password></el-input>
                </el-form-item>
                <el-form-item label="设置新密码">
                  <el-input placeholder="请输入新密码" v-model="form.new_password" show-password></el-input>
                </el-form-item>
                <el-form-item label="重复输入">
                  <el-input placeholder="请输入新密码" v-model="form.new_password_submit" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">确认修改</el-button>
                  <el-button>重新填写</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="更换头像" name="third" :key="'third'">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="middle" type="primary">选择图片</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "self_info",
  data() {
    return {
      message: "张三",
      activeName: "first",
      form: {
        account: "",
        name: "",
        class: "",
        old_password: "",
        new_password: "",
        new_password_submit: ""
      },
      fileList: [],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },
  methods1: {
    onSubmit() {
      console.log("submit!");
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${
        files.length
      } 个文件，
                共选择了 ${files.length + fileList.length} 个文件`);
    }
  }
};
</script>
<style lang="scss" scoped>
.page-container{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    .tap-container{
       
    }
}
</style>



