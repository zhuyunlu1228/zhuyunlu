<template>
  <div class="menu-container">
  <el-menu :default-active="scondeLevelMenu" class="el-menu-vertical-demo" @select="handleSelect"  background-color="#ffffff">
    <template v-for="(v) in sideBarMenu">
      <el-menu-item :index="v.name" :key="v.name" @click="gotoRoute(v.name)">
        <template slot="title">
          <el-tooltip class="item" effect="dark" :content="v.name" placement="right">
            <svg-icon v-if="v.meta&&v.meta.icon" :icon-class="v.meta.icon"></svg-icon>
          </el-tooltip>
          <!-- <span class="menu-title">i</span> -->
        </template>
      </el-menu-item>
    </template>
  </el-menu>
  </div>
  <!-- </div> -->
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "side-bar",
  props: {
    sideBarMenu: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    ...mapState("permission", ["scondeLevelMenu"])
  },
  methods: {
    gotoRoute(name) {
      this.$router.push({ name });
    },
    handleSelect() {}
  }
};
</script>
<style lang='scss' scoped>
.svg-icon {
  //margin-right: 20px;
  font-size: 50px;
}
</style>