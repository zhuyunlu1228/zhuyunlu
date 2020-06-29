<template>
<div class="block" margin:0 auto>
  <el-pagination
    layout="prev, pager, next"
    :total="50"
    :page-count="3"
    >
  </el-pagination>
</div>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
