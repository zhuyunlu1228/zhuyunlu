<template>
  <el-card>
    <h3 class="course-name">{{course.name}}</h3>
    <h3 class="course-name">{{course.teacher}}</h3>
  </el-card>
</template>

<script>
export default {
  name: "cours-card",
  props: {
    course: {
      type: Object,
      default: () => {
        return { name: "", teacher: "" };
      }
    }
  }
};
</script>