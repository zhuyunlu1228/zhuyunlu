<template>
  <div class="nav-bar">
    <!-- TODO  ADD TOP BAR-->
    <span class="nav-bar-left-info">WIN--TEACHING</span>
    <TopBar :topBarMenu="topbarMenu" class="nav-bar-right-content"></TopBar>
    <div class="nav-bar-right-info">
      <div class="user-msg" @click="profile">
        <img class="uer-img" :src="avatar" alt />
        <span class="user-name">{{account}}</span>
      </div>
      <div class="quite-system" @click="loginOut">
        <span class="iconfont icon-switch">
          <svg-icon icon-class="switch" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TopBar from "@/components/navBar/horizontal";
export default {
  data() {
    return {
      account: this.$store.state.UserName
    };
  },
  computed: {
    ...mapState(["avatar"]),
    ...mapState("permission", ["topbarMenu"])
  },
  methods: {
    toggleNavCollapse() {
      this.$store.commit("toggleNavCollapse");
    },
    loginOut() {
      this.$store.commit("LOGIN_OUT");
      window.location.reload();
    },
    profile() {
      this.$router.push("profile");
    },
    gotoRoute(name) {
      this.$router.push({ name });
    }
  },
  components: {
    TopBar
  }
};
</script>
<style lang="scss" scoped>
.nav-bar {
  border-bottom: 1px solid #e5e5e5;
  height: 100px;
  line-height: 100px;
  position: fixed;
  left: 1px;
  top: -10px;
  right: 0;
  background: #fff;
  z-index: 1000;
  transition: left 0.25s;
  .nav-bar-left-info{
    float: left;
    margin-left: 10%;
    font-size: 25px;
  };
  .nav-bar-right-content {
    margin: 1%;
    margin-left: 50%;
    height: 100%;
  }
  .nav-bar-right-info {
    position: absolute;
    right: 10px;
    top: -1px;
    bottom: 0px;
    > div {
      position: relative;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      margin-left: 10px;
      padding: 0 15px;
      cursor: pointer;
      &:hover::after {
        transform-origin: 0 0;
        transform: scaleX(1);
      }
      &:first-child:before {
        border: none;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #ef4747;
        transform: scaleX(0);
        transform-origin: right 0;
        transition: transform 0.5s;
      }
      &::before {
        content: "";
        position: absolute;
        height: 20px;
        top: 50%;
        left: -8px;
        margin-top: -10px;
        border-left: 1px solid #ccc;
      }
      &.email {
        i {
          position: absolute;
          left: 18px;
          top: -12px;
          border-radius: 20px;
          background: red;
          color: #fff;
          text-align: center;
          font-size: 12px;
          line-height: 1.5;
          min-width: 20px;
          min-height: 20px;
        }
      }
      &.user-msg {
        height: 100%;
        .user-img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .user-name {
          position: relative;
          font-size: 24px;
          color: #758eb5;
        }
      }
      .iconfont {
        position: relative;
        font-size: 24px;
        color: #758eb5;
      }
    }
  }
}
</style>