<template>
  <div class="menu-container">
    <el-menu
      mode="horizontal"
      :default-active="firstLevelMenu"
      class="nav-bar-right-menu"
      @select="handleSelect"
      text-color="#758eb5"
    >
      <template v-for="v in topBarMenu">
        <el-menu-item
          v-if="v.name!=='profile'"
          :index="v.name"
          :key="v.name"
          @click="gotoRoute(v.name)"
        >
          <template slot="title">
            <!-- <svg-icon v-if="v.meta&&v.meta.icon" :icon-class="v.meta.icon"></svg-icon> -->
            <span class="menu-title">{{v.meta.name}}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: "top-bar",
  props: {
    topBarMenu: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed:{
     ...mapState("permission", ["firstLevelMenu"])
  },
  methods: {
    gotoRoute(name) {
      this.$router.push({ name });
    },
     handleSelect() {}
  }
};
</script>
<style scoped>
.menu-title {
  font-size: 20px;
}
</style>
