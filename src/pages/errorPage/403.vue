<template>
  <div class="page-container">
    <div class="not-found">
      <h1>Ooops! 403 No Permission</h1>
    </div>
    <div class="back-button">
      <el-button type="primary" @click="backHome">回到首页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    backHome() {
      this.$router.replace("/home");
    }
  }
};
</script>
<style  scoped>
.page-container {
  display: flex;
  height: 100%;
  background-image: url("../../assets/login_bg.webp");
  z-index: 999;
}
.not-found {
  margin-top: 15%;
  font-size: 30px;
  margin-bottom: 20%;
  margin-left: 10%;
  color: #2e65be;
}
.back-button {
  height: 40px;
  margin-top: 29%;
  margin-left: -20%;
}
</style>
