<template>
  <div class="nav-bar">
    <sideBar :sideBarMenu="childMenu" />
  </div>
</template>
<script>
import sideBar from "@/components/navBar/vertical";
import { mapState } from "vuex";
export default {
  components: {
    sideBar
  },
  computed: {
    ...mapState("permission", ["childMenu"])
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>
<style lang="scss" scoped>
.nav-bar{
  border-left: 1px solid #e5e5e5;
  line-height: 100px;
  width: 100px;
  position: fixed;
  left: 1px;
  top: 30%;
  right: 0;
  z-index: 1000;
}
</style>