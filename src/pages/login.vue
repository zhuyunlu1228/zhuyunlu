<template>
  <div id="login">
    <el-card id="login-botton-group">
      <h3>WIN--Teaching</h3>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="login-ruleForm"
      >
        <el-form-item label="帐号" prop="userId">
          <el-input v-model="ruleForm.userId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPass">
          <el-input :type="pwdType" v-model="ruleForm.uerPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="ruleForm.radio" label="1">教师</el-radio>
          <el-radio v-model="ruleForm.radio" label="2">学生</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
//FIXME
// ADD MORE UI
//ADD VALIDATE
import { loginCon } from "@/api/authController";
import { Message } from "element-ui";
export default {
  data() {
    var checkId = (rule, value, callback) => {
      //FIXME add reg for user id
      if (!value) {
        return callback(new Error("帐号不能为空"));
      }
      setTimeout(() => {
        if (value.length != 10) {
          callback(new Error("帐号格式错误"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userId: "",
        userPass: "",
        radio: "1"
      },
      rules: {
        uerPass: [{ validator: validatePass, trigger: "blur" }],
        userId: [{ validator: checkId, trigger: "blur" }]
      },
      loading: false,
      pwdType: "password"
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    login() {
      let loginForm = {
        account: this.ruleForm.userId,
        password: this.ruleForm.userPass
      };
      loginCon(loginForm)

        .then(res => {
          //FIXME
          let value = {
            token: res.token,
            userName: res.name
          };
          Message.success("登录成功");
          this.$store.commit("LOGIN_IN", value);
          this.$router.replace("/");
        })
        .catch(e => {
          console.log(e);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style  scoped>
#login {
  display: flex;
  height: 100%;
  background-image: url("../assets/login_bg.webp");
  filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
  background-size: cover;
}
#login-botton-group {
  /* display: flex; */
  height: 40%;
  width: 30%;
  margin-top: 20%;
  margin-left: 20%;
  /* align-content: center; */
}
</style>