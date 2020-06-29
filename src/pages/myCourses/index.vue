<template>
  <div class="page-container">
   <li v-for="item in courseList" :key="item.message">
    {{ item.message }}
  </li>
    ddddtesa

    ddddd
    <el-card></el-card>
  </div>
</template>
<script>
// import CourseCard from "./components/course-card";
export default {
  data(){
    return {
      courseList:[]
    }
  },
  components: {
    // CourseCard
  }
};
</script>
