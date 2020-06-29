<template>
  <el-row class="main-container">

      <TopNav />

    <!-- </div> -->
    <!-- <el-row :gutter="20" class="bottom-container">
      <el-col :span="2"> -->
        <sideNav class="side-bar" />
      <!-- </el-col> -->
      <!-- <el-col :span="22"> -->
  
        <Content class="page-container" />

      <!-- </el-col>
    </el-row>-->
  </el-row>
</template>
<script>
import TopNav from "../topNav";
import Content from "./content";
import sideNav from "../sideNav";

import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isSidebarNavCollapse"])
  },
  components: {
    TopNav,
    Content,
    sideNav
  }
};
</script>
<style lang="scss" scoped>
.main-container {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  // justify-content: center;
  .bottom-container {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    .side-bar {
      height: 100%;
      float: right;
      // width: 20%;
    }
    .page-container {
      
      float: left;
    }
  }
}
/* #top-bar {
  height: 10%;
}
#container {
  height: 90%;
} */
</style>