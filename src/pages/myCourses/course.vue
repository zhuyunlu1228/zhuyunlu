<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="课程名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="班级名称" prop="name">
            <el-input v-model="ruleForm.class"></el-input>
        </el-form-item>
        <el-form-item label="班级教师" prop="name">
            <el-input v-model="ruleForm.teacher"></el-input>
        </el-form-item>
        <el-form-item label="课程学时" prop="name">
            <el-input v-model="ruleForm.time"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" prop="name">
            <el-input v-model="ruleForm.create_time"></el-input>
        </el-form-item>
        <el-form-item label="班级状态" prop="name">
            <el-input v-model="ruleForm.status"></el-input>
        </el-form-item>
    </el-form>
</template>


<script>
    // import {Message} from "element-ui";
    // import {getCourseInfo} from "../../api/courseController";

    export default {
        name:'form1',
        data() {
            return {
                ruleForm: {
                    name:'',
                    class:'',
                    teacher:'',
                    time:'',
                    status:'',
                    create_time:''
                },
            };
        },
        methods: {
            course() {

                // getCourseInfo(this.ruleForm.name)
                //
                //     .then(res => {
                //         //FIXME
                //         let value = {
                //
                //         }
                //     })
            },
        }
    }
</script>