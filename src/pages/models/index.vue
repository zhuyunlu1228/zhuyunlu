<template>
    <div class="tap-container">
        <div>
          <br><br><br><br><br>  
          <el-col :gutter="20" :offset="3">
              <el-row :span="6" >
                <div c  lass="grid-content bg-purple">
                  <ModelType></ModelType>
                </div>
                </el-row>
                <el-divider></el-divider>
              <el-row :span="6">
                <div class="grid-content bg-purple-light">
                  <ModelSort></ModelSort>
                  <el-divider></el-divider>
                </div>
              </el-row>
          </el-col>
          <el-col :gutter="20" :offset="2">
              <el-row :span="6">
                <div class="grid-content bg-purple">
                  <ModelCard></ModelCard>
                  <br/><br/>
                </div>
              </el-row>
          </el-col>
          <el-col :gutter="20" :offset="10">
              <el-row :span="24" >
                <div class="grid-content bg-purple-light" >
                  <ModelPage></ModelPage>
                </div>
              </el-row>
          </el-col>
        </div>        
    </div>
</template>
  


<script>
import ModelCard from './component/ModelCard.vue'
import ModelType from './component/ModelType.vue'
import ModelSort from './component/ModelSort.vue'
import ModelPage from './component/ModelPage.vue'

export default {
  name: 'App',
  components: {
    ModelCard,
    ModelType,
    ModelSort,
    ModelPage
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-self: stretch ;
    align-items: stretch;
    
}
</style>
